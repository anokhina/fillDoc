//https://github.com/MrRio/jsPDF
//<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>

['jsPdf/dist/jspdf.debug.js', 'jsPdf/libs/canvg_context2d/canvg.js'].forEach(function (src) {
    var script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
});

function toPdf(svg, formObj) {
    var bsvg = svg.getBoundingClientRect ();
    var dsvg = encodeURIComponent(svg.outerHTML);
    var img = new Image();
    img.onload = function() {
        var canvas = document.createElement('canvas');
        canvas.width = bsvg.width;
        canvas.height = bsvg.height;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0);
        
        var imgData = canvas.toDataURL('image/png');
        var doc = new jsPDF('p', 'pt', 'a4');
        doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
        doc.save("fillDoc-" + formObj["${fio}"]+'.pdf');
    };
    img.src = "data:image/svg+xml;utf8," + dsvg;
    
}
function toPdf1(svg, formObj) {

    setTimeout(function(){
        var osvg = svg.outerHTML;
        //osvg = svg.outerHTML.replace(/\r?\n|\r/g, '').trim();
        var dsvg = encodeURIComponent(osvg);
        var bsvg = svg.getBoundingClientRect ();
        var canvas = document.createElement('canvas');
        canvas.width = bsvg.width;
        canvas.height = bsvg.height;
        var context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        
        /*
doc.canvas.childNodes = {}; 
doc.context2d.canvas = doc.canvas;
doc.context2d.font = undefined;
*/
      
        canvg(canvas, osvg, {
        /*
            ignoreMouse: true,
            ignoreAnimation: true,
            ignoreDimensions: true,
            ignoreClear: true
            */
        });

        var imgData = canvas.toDataURL('image/png');
//doc.addSVG(osvg, 0, 0, doc.internal.pageSize.width)
        var doc = new jsPDF('p', 'pt', 'a4');
        doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
        doc.save("fillDoc-" + formObj["${fio}"]+'.pdf');
        
    }, 2000);
}
