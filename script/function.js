function changeActiveTool(event) {
    var element = $(event.target).hasClass("tool-button")
        ? $(event.target)
        : $(event.target).parents(".tool-button").first();
    $(".tool-button.active").removeClass("active");
    $(element).addClass("active");
}

var pdf;

function importfile() {


    if (pdf != undefined) {
        //console.log(pdf);
        window.location.reload();
        pdf = "";
        blob = "";
    }

    document.querySelector("#importFile").addEventListener("change", () => {
        let pdfFile = document.querySelector("#importFile").files[0]


        let blob = URL.createObjectURL(pdfFile);
        console.log(blob);
        console.log(typeof blob);

        pdf = new PDFAnnotate("pdf-container", blob, {
            onPageUpdated(page, oldData, newData) {
                console.log(page, oldData, newData);
            },
            ready() {
                console.log("Plugin initialized successfully");
            },
            scale: 1.5,
            pageImageCompression: "SLOW", // FAST, MEDIUM, SLOW(Helps to control the new PDF file size)
        });
    });
}

function enableSelector(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enableSelector();
}

function enablePencil(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enablePencil();
}

function enableAddText(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enableAddText();
}

function enableAddArrow(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enableAddArrow();
}

function addImage(event) {
    event.preventDefault();
    pdf.addImageToCanvas();
}

function enableCircle(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enableCircle();
}

function enableTriangulo(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enableTriangulo();
}

function enableLine(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enableLine();
}

function enableQuadrado(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enableQuadrado();
}

function enableRectangle(event) {
    event.preventDefault();
    changeActiveTool(event);
    pdf.enableRectangle();
}

function deleteSelectedObject(event) {
    event.preventDefault();
    pdf.deleteSelectedObject();
}

// function savePDF() {
//     // pdf.savePdf();
//     pdf.savePdf("sample.pdf"); // save with given file name
// }

function savePDF() {
    // Extrai o nome do arquivo do URL original do PDF
    const pdfUrl = 'path_to_your_pdf.pdf'; // Substitua 'path_to_your_pdf.pdf' pelo caminho do seu PDF
    const pdfFileName = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);

    // Solicita ao usuário que insira um novo nome de arquivo
    const newFileName = window.prompt("Por favor, insira um novo nome para o arquivo:", pdfFileName);

    if (newFileName) { // Se o usuário inserir um novo nome
        // Salva o PDF com o novo nome de arquivo
        pdf.savePdf(newFileName);
    } else {
        alert("Você não inseriu um novo nome. O PDF não foi salvo."); // Se o usuário cancelar a entrada
    }
}


function clearPage() {
    pdf.clearActivePage();
}

function showPdfData() {
    var string = pdf.serializePdf();
    $("#dataModal .modal-body pre").first().text(string);
    PR.prettyPrint();
    $("#dataModal").modal("show");
}