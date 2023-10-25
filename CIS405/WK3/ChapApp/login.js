const paragraph = document.querySelector('#para');

const params = new URLSearchParams(window.location.search);

params.forEach((key,value)=>{
    paragraph.append(`${key}= ${value}`);
    paragraph.append(document.createElement('br'));
})