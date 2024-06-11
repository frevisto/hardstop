function baixar(){
    const item = document.querySelector(".conteudo");
    var opt = {
        margin: 0,
        filename: "certificado.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm" , 
        format: "A4", 
        orientation: "landscape",
     },
     
    };
    
    html2pdf().set(opt).from(item).save();
}