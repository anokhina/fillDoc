/*
 * Copyright 2017 Veronica Anokhina.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package ru.org.sevn.filldoc;

import java.awt.Desktop;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URL;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchEvent;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;
import java.util.Enumeration;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipOutputStream;
import org.json.JSONArray;
import org.json.JSONObject;

public class Main {

    public static String istream2str(final int bufferSize, final InputStream stream, final String encoding, boolean close) throws UnsupportedEncodingException, IOException {
        char[] buffer = new char[bufferSize];
        StringBuilder out = new StringBuilder();
        Reader in = new InputStreamReader(stream, encoding);
        for (int readNum = -1; (readNum = in.read(buffer, 0, buffer.length)) >= 0; ) {
            out.append(buffer, 0, readNum);
        }
        if (close) {
            stream.close();
        }
        return out.toString();        
    }
    public static void stream2stream(final int bufferSize, final InputStream is, final OutputStream os) throws IOException {
        byte[] buffer = new byte[bufferSize];
        for (int readNum = -1; (readNum = is.read(buffer)) >= 0;) {
            os.write(buffer, 0, readNum);
        }
    }
    
    public interface Replacer {
        void replace(int bufferSize, InputStream is, OutputStream os, String encoding) throws IOException;
    }
    
    public static void replaceContent(final String contentName, Replacer replacer, final ZipFile zipFile, ZipOutputStream zipFileOut) throws IOException {
        Enumeration<? extends ZipEntry> entries = zipFile.entries();
        while(entries.hasMoreElements()){
            ZipEntry entry = entries.nextElement();
            //System.out.println("nnnnnnnnnn>" + entry.getName());
            InputStream is = zipFile.getInputStream(entry);
            if (contentName.equals(entry.getName())) {
                ZipEntry ze = new ZipEntry(entry.getName());
                zipFileOut.putNextEntry(ze);
                replacer.replace(2048, is, zipFileOut, "UTF-8");
            } else {
                zipFileOut.putNextEntry(entry);
                stream2stream(2048, is, zipFileOut);
            }            
            zipFileOut.flush();
            is.close();
        }
    }
    
    static class SimpleReplacer implements Replacer {
        private final JSONArray jarrConfig;
        public SimpleReplacer(JSONArray jarrConfig) {
            this.jarrConfig = jarrConfig;
        }

        @Override
        public void replace(int bufferSize, InputStream is, OutputStream os, String encoding) throws IOException {
            StringBuilder sb = new StringBuilder();
            sb.append(istream2str(2048, is, encoding, true));
            jarrConfig.forEach(o -> {
                JSONObject jo = (JSONObject)o;
                if (jo.has("name") && jo.has("value")) {
                    String repl2 = jo.getString("name");
                    String replmt = jo.getString("value");
                    sb.replace(0, sb.length(), sb.toString().replace(repl2, replmt));
                }
            });
            os.write(sb.toString().getBytes(encoding));
        }
        
    }
    
    public static void addValues(JSONObject jobj, JSONArray jarrConfig) {
        jarrConfig.forEach( o -> {
            JSONObject jo = (JSONObject)o;
            if (jo.has("name")) {
                String n = jo.getString("name");
                if (jobj.has(n)) {
                    jo.put("value", jobj.get(n));
                } 
            }
        });        
    }
    public static void main(String args[]) throws IOException {
        Path dir = new File("misc").toPath();
        String fileConfig = "misc/config.json";
        String fileConfigData = "misc/configData.json";
        String filein = "misc/test.odt";
        String fileout = "misc/test1.odt";
        String fileoutform = "misc/form.html";
        String contentName = "content.xml";
        
        JSONArray jarrConfig = new JSONArray(istream2str(2048, new FileInputStream(fileConfig), "UTF-8", true));
        JSONObject jobj = new JSONObject(istream2str(2048, new FileInputStream(fileConfigData), "UTF-8", true));
        addValues(jobj, jarrConfig);
        System.out.println("-------"+jarrConfig.toString(2));
        
        StringBuilder sb = new StringBuilder();
        sb.append(makeFormBegin());
        jarrConfig.forEach( o -> {
            JSONObject jo = (JSONObject)o;
            if (jo.has("name")) {
                String name = jo.getString("name");
                String label = jo.getString("textname");
                String tp = jo.getString("type");
                //String id = jo.getString("id");
                String id = null;
                //TODO other params
                //TODO value param
                String value = null;
                if (jo.has("value")) {
                    value = jo.getString("value");
                }
                sb.append(makeLine(label, tp, name, id, value));
            }
        });        
        sb.append(makeFormEnd());
        File fileoutformfile = new File(fileoutform);
        java.nio.file.Files.write(fileoutformfile.toPath(), sb.toString().getBytes("UTF-8"), StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
        openInDefaultApp(fileoutformfile.toURI().toASCIIString());
        
        WatchService watcher = FileSystems.getDefault().newWatchService();
        WatchKey key = dir.register(watcher, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_DELETE, StandardWatchEventKinds.ENTRY_MODIFY);
        long filemodified = 0;
        File fl = new File(fileConfigData);
        if (fl.exists()) {
            filemodified = fl.lastModified();
        }
        
        processFSEvents(dir, watcher, key, fl, filemodified, new Runnable() {
            @Override
            public void run() {
                if (fl.exists()) {
                    try {
                        addValues(jobj, new JSONArray(istream2str(2048, new FileInputStream(fileConfig), "UTF-8", true)));
                    } catch (Exception ex) {
                        Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
                    }
                    System.out.println("-------"+jarrConfig.toString(2));
                }
            }
        });
        
        ZipFile zipFile = new ZipFile(filein);
        ZipOutputStream zipFileOut = new ZipOutputStream(new FileOutputStream(fileout));
        
        Replacer replacer = new SimpleReplacer(jarrConfig);
        replaceContent(contentName, replacer, zipFile, zipFileOut);
        
        zipFile.close();
        zipFileOut.close();
        
        openInDefaultApp(new File(fileout).toURI().toASCIIString());
    }
    
    //TODO break on timeout
    static void processFSEvents(Path dir, WatchService watcher, WatchKey wkey, File fileWait4, long fileWait4Time, Runnable task) {
        for (;;) {

            WatchKey key;
            try {
                key = watcher.take();
                System.out.println("========="+key);
            } catch (InterruptedException x) {
                return;
            }
            if (wkey == key) {
                for (WatchEvent<?> event: key.pollEvents()) {
                    WatchEvent.Kind kind = event.kind();
                    WatchEvent<Path> ev = (WatchEvent<Path>)event;
                    Path name = ev.context();
                    Path child = dir.resolve(name);
                    System.out.println("====1====="+name);
                    if (fileWait4.exists() && fileWait4.lastModified() > fileWait4Time) {
                        task.run();
                        return;
                    }
                }
                if (!key.reset()) {
                    break;
                }            
            }
        }
    }
    public static String makeInput(String tp, String name, String id, String value) {
        String txt = "<input type=\""+tp+"\" name=\""+name+"\" style=\"width:99%;\" ";
        if (id != null) {
            txt += " id=\"" + id + "\" ";
        }
        if (value != null) {
            //TODO jsoup
            txt += " value=\"" + value + "\" ";
        }
        txt += ">";
        return txt;
    }
    public static String makeLine(String label, String tp, String name, String id, String value) {
        String txt = "<tr><td width=\"35%\">"+label+"</td><td>"+makeInput(tp, name, id, value)+"</td></tr>";
        return txt;
    }
    public static String makeFormBegin() {
        return "<!DOCTYPE html>\n" +
"<html>\n" +
"<body>\n" +
"\n" +
"<script>\n" +
"function toJSONString( form ) {\n" +
"    var obj = {};\n" +
"    var elements = form.querySelectorAll(\"input, select, textarea\");\n" +
"    for( var i = 0; i < elements.length; ++i ) {\n" +
"        var element = elements[i];\n" +
"        var name = element.name;\n" +
"        var value = element.value;\n" +
"\n" +
"        if(name) {\n" +
"            obj[name] = value;\n" +
"        }\n" +
"    }\n" +
"\n" +
"    return JSON.stringify( obj );\n" +
"}\n" +
"\n" +
"function saveAs(data, filename) {\n" +
"    var blob = new Blob([data], {type: \"text/plain;charset=utf-8\"});\n" +
"    if(window.navigator.msSaveOrOpenBlob) {\n" +
"        window.navigator.msSaveBlob(blob, filename);\n" +
"    }\n" +
"    else{\n" +
"        var elem = window.document.createElement('a');\n" +
"        elem.href = window.URL.createObjectURL(blob);\n" +
"        elem.download = filename;        \n" +
"        document.body.appendChild(elem);\n" +
"        elem.click();        \n" +
"        document.body.removeChild(elem);\n" +
"    }\n" +
"}\n" +
"\n" +
"function printForm(form) {\n" +
"    var output = document.getElementById( \"output\" );\n" +
"    var text = toJSONString(form);\n" +
"    output.innerHTML = text;\n" +
"    var blob = new Blob([text], {type: \"text/plain;charset=utf-8\"});\n" +
"    saveAs(blob, \"configData.json\");\n" +
"}\n" +
"</script>\n" +
"\n" +
"<form id=\"paramform\" action=\"#\" method=\"post\">\n" +
"  <table border=1 width=\"100%\">";
    }
    public static String makeFormEnd() {
        return "  </table>\n" +
"  <input type=\"button\" onclick=\"printForm(document.getElementById('paramform'))\" value=\"Result:\">\n" +
"</form>\n" +
"\n" +
"<pre id=\"output\"></pre>\n" +
"\n" +
"</body>\n" +
"</html>";
    }
    public static Exception openInDefaultApp(String url) {
        try {
            URI uri = new URL(url).toURI();
            Desktop desktop = Desktop.isDesktopSupported() ? Desktop.getDesktop() : null;
            if (desktop != null && desktop.isSupported(Desktop.Action.BROWSE)) {
                desktop.browse(uri);
            }
        } catch (Exception e) {
            return e;
        }
        return null;
    }
    
    public static void clipboard2(String str) {
        StringSelection stringSelection = new StringSelection(str);
        Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
        clipboard.setContents(stringSelection, null);
    }
}
/*
<!DOCTYPE html>
<html>
<body>

<script>
function toJSONString( form ) {
    var obj = {};
    var elements = form.querySelectorAll("input, select, textarea");
    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if(name) {
            obj[name] = value;
        }
    }

    return JSON.stringify( obj );
}

function saveAs(data, filename) {
    var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}

function printForm(form) {
    var output = document.getElementById( "output" );
    var text = toJSONString(form);
    output.innerHTML = text;
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "configData.json");
}
</script>

<form id="paramform" action="#" method="post">
  <table border=1 width="100%">
  <tr><td width="35%">Add your homepage:</td><td><input type="url" name="homepage" style="width:99%;"></td></tr>
  </table>
  <input type="button" onclick="printForm(document.getElementById('paramform'))" value="Result:">
</form>

<pre id="output"></pre>

</body>
</html>

*/