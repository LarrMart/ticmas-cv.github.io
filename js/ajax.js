var exeAjax = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.send();
    console.log(xhr);
};

exeAjax("https://baconipsum.com/api/?type=meat-and-filler&format=json");