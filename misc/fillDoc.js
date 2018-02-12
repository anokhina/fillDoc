/*
Copyright 2018 Veronica Anokhina.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var jarrConfig = [
////////////////////////////////////////////Prog name
{
  "class": "prog",
  "name": "${progName1}",
  "textname": "на программу (название образовательной программы, количество часов)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${progName2}",
  "textname": "на программу (название образовательной программы, количество часов)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${d1}",
  "textname": "с (день)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${d2}",
  "textname": "с (месяц)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${d3}",
  "textname": "с (год)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${pr4}",
  "textname": "в  объеме часов",
  "comment": "",
  "type": "text"
}

,{
  "class": "prog",
  "name": "${rd1}",
  "textname": "расписанием занятий с (день)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${rd2}",
  "textname": "расписанием занятий с (месяц)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${rd3}",
  "textname": "расписанием занятий с (год)",
  "comment": "",
  "type": "text"
}

,{
  "class": "prog",
  "name": "${rd21}",
  "textname": "расписанием занятий по (день)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${rd22}",
  "textname": "расписанием занятий по (месяц)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${rd23}",
  "textname": "расписанием занятий по (год)",
  "comment": "",
  "type": "text"
}

,{
  "class": "prog",
  "name": "${sd1}",
  "textname": "Сроки оказания услуг с (день)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${sd2}",
  "textname": "Сроки оказания услуг с (месяц)",
  "comment": "",
  "type": "text"
}
,{
  "class": "prog",
  "name": "${sd3}",
  "textname": "Сроки оказания услуг с (год)",
  "comment": "",
  "type": "text"
}
 
//////////////////////////////////////Parent
,{
  "class": "parent",
  "name": "${fromFIO1}",
  "textname": "от (Фамилия, имя, отчество заявителя полностью)",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${fromFIO2}",
  "textname": "от",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${fromFIOs}",
  "textname": "от (кратко И.п.)",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${addr1}",
  "textname": "проживающего (-ей) по адресу:",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${addr2}",
  "textname": "проживающего (-ей) по адресу:",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${rodFio}",
  "textname": "Сведения о родителях. ФИО (полностью)",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${rodS}",
  "textname": "Сведения о родителях. Паспорт серия",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${rodN}",
  "textname": "Сведения о родителях. Паспорт номер",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${rodD}",
  "textname": "Сведения о родителях. Паспорт. Дата выдачи",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${rodMob}",
  "textname": "Моб.тел. родит.",
  "comment": "",
  "type": "text"
}
,{
  "class": "parent",
  "name": "${rodMail}",
  "textname": "E-mail родит.",
  "comment": "",
  "type": "text"
}
//////////////////////////////////////Child
,{
  "class": "child",
  "name": "${fio}",
  "textname": "ФИО ребёнка",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${fioR}",
  "textname": "моего (ю) сына/дочь (ФИО полностью) [В.п.]",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${fioD}",
  "textname": "в интересах несовершеннолетнего (ФИО полностью) [Р.п.]",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${dataRod}",
  "textname": "Дата рождения ребёнка",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${snils}",
  "textname": "СНИЛС",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${docS}",
  "textname": "Свидетельство о рождении/Паспорт (Серия)",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${docN}",
  "textname": "Свидетельство о рождении/Паспорт (номер)",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${docD}",
  "textname": "Свидетельство о рождении/Паспорт (Дата выдачи)",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${adrReg1}",
  "textname": "Место жительства Регистрация",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${adrReg2}",
  "textname": "Место жительства Регистрация",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${adrF}",
  "textname": "Место жительства фактическое (если НЕ СОВПАДАЕТ)",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${sch}",
  "textname": "Школа №",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${schKl}",
  "textname": "Класс",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${schGr}",
  "textname": "Группа",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${zdor}",
  "textname": "Особенности здоровья/статус семьи (инвалид, ОВЗ, полная, многодетная, мать-одиночка, опекун и т.п.)",
  "comment": "",
  "type": "text"
}
,{
  "class": "child",
  "name": "${mobReb}",
  "textname": "Моб.тел. ребёнка",
  "comment": "",
  "type": "text"
}
];

/*
,{
  "name": "${}",
  "textname": "",
  "comment": "",
  "type": "text"
}
*/

var jobj = {
"${progName1}":"фортепиано (1 раз в неделю)",
"${d1}":"01","${d2}":"09","${d3}":"17",

"${rodFio}":"Иванова Алёна Ивановна",
"${fromFIO1}":"Ивановой Алёны Ивановны",
"${fromFIOs}":"Иванова А. И.",
"${rodS}":"00 00",
"${rodN}":"123456",
"${rodD}":"01.01.2000",
"${rodMob}":"8(926)123-45-67",
"${addr1}":"г.Москва, ул. Заречная, д.1, кв.2",

"${fio}":"Иванов Олег Михайлович",
"${dataRod}":"01.02.2008",
"${fioR}":"Иванова Олега Михайловича",
"${fioD}":"Иванова Олега Михайловича",
"${snils}":"123-456-789 12",
"${docS}":"III-МЮ",
"${docN}":"123456",
"${docD}":"01.03.2008",
"${adrReg1}":"г. Москва, ул. Солнечная, д.1, кв.2",
"${adrF}":"г. Москва, ул. Заречная, д.1, кв.2",
"${sch}":"1945",
"${schKl}":"4 \"А\""
}

function fillTable(jarrConfig) {
    var table = document.getElementById("fillTable");
    while(table.rows.length > 0) {
        table.deleteRow(0);
    }
    
    var trow = 0;
    jarrConfig.forEach( function(jo) {
        if ("name" in jo) {
            var row = table.insertRow(trow++);
            
            var cell = row.insertCell(0);
            var element = document.createTextNode(jo["textname"]);
            cell.appendChild(element);
            cell.style.width = "35%";
            if ("class" in jo) {
                cell.setAttribute("class", jo["class"]);
            }
            
            var cellInp = row.insertCell(1);
            element = document.createElement("input");
            cellInp.appendChild(element);
            
            element.setAttribute("type", jo["type"]);
            element.setAttribute("name", jo["name"]);
            if ("placeholder" in jo) element.setAttribute("placeholder", jo["placeholder"]);
            element.setAttribute("value", jo["value"]);
            element.setAttribute("style", "width:99%;");
            
        }
    });        
}

function getValues(jarrConfig) {
    var jobj = {};
    jarrConfig.forEach( function(jo) {
        if ("value" in jo) {
            jobj[jo["name"]] = jo["value"];
        }
    });
    
    console.log(JSON.stringify(jobj));
    return jobj;
}
function addValues(jobj, jarrConfig, usePlaceholder) {
    jarrConfig.forEach( function(jo) {
        if ("name" in jo) {
            var n = jo["name"];
            if (jobj != null) {
                if (n in jobj) {
                    if (usePlaceholder) {
                        jo["placeholder"] = jobj[n];
                        jo["value"] = "";
                    } else {
                        jo["value"] = jobj[n];
                    }
                } else {
                    if ( "value" in jo ) {} else {
                        jo["value"] = "";
                    }
                }
            } else {
                if ( "value" in jo ) {} else {
                    jo["value"] = "";
                }
            }
        }
    } );
    return jarrConfig;
    //console.log(JSON.stringify(jarrConfig));
}
function toJSONObj( form ) {
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

    return obj;
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

function replaceInTemplate(output, obj) {
    var templ = output.innerHTML;
    for (var i in obj) {
        templ = templ.split(i).join(obj[i]);
    }
    output.innerHTML = templ;
}

var svgIdArr = [];
var hideClassName = "myhide";

function saveForm(form) {
    var obj = toJSONObj(form);
    
    var blob = new Blob([JSON.stringify(obj)], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "fillDoc.json");
    return obj;
}

function printForm(form) {
    var obj = saveForm(form);
    
    svgIdArr.forEach(function (svgId) {
        var output = document.getElementById( svgId );
        output.classList.toggle(hideClassName);
        replaceInTemplate(output, obj);
    });
    
    var controls = document.getElementById("controls");
    controls.parentNode.removeChild(controls);
}

function makeForm() {

    var controls = document.createElement('div');
    controls.setAttribute("id", "controls");
    document.body.appendChild(controls);
    {
        var form = document.createElement('form');
        form.setAttribute("id", "paramform");
        form.setAttribute("action", "#");
        form.setAttribute("method", "post");
        controls.appendChild(form);
        
        var table = document.createElement('table');
        table.setAttribute("border", "1");
        table.setAttribute("width", "100%");
        table.setAttribute("id", "fillTable");
        form.appendChild(table);
        
        var bt = document.createElement('input');
        bt.setAttribute("type", "button");
        bt.setAttribute("value", "Result");
        bt.setAttribute("onclick", "printForm(document.getElementById('paramform'))");
        form.appendChild(bt);
        
        var btSave = document.createElement('input');
        btSave.setAttribute("type", "button");
        btSave.setAttribute("value", "Save");
        btSave.setAttribute("onclick", "saveForm(document.getElementById('paramform'))");
        form.appendChild(btSave);
        
        var btr = document.createElement('button');
        btr.setAttribute("type", "Reset");
        btr.appendChild(document.createTextNode("Reset"));
        form.appendChild(btr);
        
    }    
    
    {
        var form = document.createElement('form');
        controls.appendChild(form);
        
        var btf = document.createElement('input');
        btf.setAttribute("type", "file");
        btf.setAttribute("id", "files1");
        form.appendChild(btf);
        
        var btr = document.createElement('button');
        btr.setAttribute("type", "Reset");
        btr.appendChild(document.createTextNode("x"));
        form.appendChild(btr);
        
        btf.addEventListener('change', 
            function(evt) {
                if (window.File && window.FileReader && window.FileList && window.Blob) {

                } else {
                    alert('The File APIs are not fully supported in this browser.');
                    return;
                }

                for (var i = 0, f; f = evt.target.files[i]; i++) {
                    var reader = new FileReader();
                    reader.readAsText (f);
                    reader.onload = function(e) {
                        var text = reader.result;
                        try {
                            var cfg = JSON.parse(text);
                            addValues(cfg, jarrConfig);
                            fillTable(jarrConfig);
                        } catch (e) {
                            console.log("parse json error", e);
                        }
                    };
                }
            }, false);
        
    }
}

function main(jobj, idArr, hideClass) {
    hideClassName = hideClass;
    svgIdArr = idArr;
    makeForm();
    //getValues(jarrConfig);
    addValues(jobj, jarrConfig, true);
    fillTable(jarrConfig);
}

