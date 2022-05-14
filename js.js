let net = null;


 function showFiles() {
    // пустий елемент малюнка
    let demoImage = document.getElementById('idImage');
    // ззчитую файл який я прикріпив
    let file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        demoImage.src = reader.result;
    }
    reader.readAsDataURL(file);
    app();
}  