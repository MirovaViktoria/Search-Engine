const pageSearch = "https://www.omdbapi.com/?&apikey=841a117d";

async function loadData(url) {
    const res = await fetch(url);
    const data = await res.json();
    var middle = document.getElementById("middle");
    middle.innerHTML = "";
    for (let i = 0; i < data.Search.length; i++) {
        var img = document.createElement("img");
        var div = document.createElement("div");
        var title = document.createElement("div");
        var year = document.createElement('div');
        img.src = data.Search[i].Poster;
        title.innerHTML = data.Search[i].Title;
        year.innerHTML = data.Search[i].Year;
        middle.appendChild(div);
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(year);

    }

}

const input = document.querySelector("#input");

search();

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        search();
    }
});
function search() {
    loadData(pageSearch + '&s=' + input.value);
} 


const arrow_2 = document.querySelector("#arrow_2");
const arrow_1 = document.querySelector("#arrow_1");
let page = 0;


  arrow_1.onclick = function() {
    loadData(pageSearch+ '&s=' + input.value + '&page=' + --page);
    console.log(page);
  };
  arrow_2.onclick = function() {
        loadData(pageSearch+ '&s=' + input.value + '&page=' + ++page);
  };

// arrow_2.onclick = function()