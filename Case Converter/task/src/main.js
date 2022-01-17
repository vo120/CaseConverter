//For UpperCase
function UpperCase() {
    let txt = document.getElementById("text").value
    let uC = txt.toUpperCase();
    document.getElementById("text").value = uC;
}

//For LowerCase
document.getElementById("lower-case").addEventListener("click", function () {
    let txt = document.querySelector('textarea').value.toLowerCase().split(' ');
    document.querySelector('textarea').value = txt.join(' ');
})

//For ProperCase
document.getElementById("proper-case").addEventListener("click", function () {
    let txt = document.querySelector('textarea').value.split(' ');
    for (let i = 0; i < txt.length; i++) {
        txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].slice(1);
    }
    document.querySelector('textarea').value = txt.join(' ');
})

//For SentenceCase
document.getElementById("sentence-case").addEventListener("click", function () {
    let txt = document.querySelector('textarea').value.toLowerCase().split('. ');
    for (let i = 0; i < txt.length; i++) {
        txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].slice(1);
    }
    document.querySelector('textarea').value = txt.join('. ');
})

//For Save Text File
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
    // Start file download.
    download("hello.txt","This is the content of my file :)");

function SaveTextFile(){
    let areaText = document.getElementById("text").value;
    let filename = "text.txt";
    download(filename,areaText);
}

