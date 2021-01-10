window.addEventListener('load', (event)=>{
    const update = document.querySelector('#lastupdated');
    update.textContent = document.lastModified;

    const year = document.querySelector('#copyrightyear');
    year.textContent = new Date().getFullYear();
})

function getYear(){
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("currentyear").innerHTML = n;
}