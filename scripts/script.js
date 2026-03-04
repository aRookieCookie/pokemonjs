const wrapper_full_result = document.getElementById("wrapper_full_result");
const wrapper_all_results = document.getElementById("wrapper_all_results")
const error_results = document.getElementById("error-not-found");

async function send_to_php(query, mode){
    let response = await fetch("search.php/?q=" + query + "&m=" + mode);
    const data = await response.json();
    console.log("Searching...");


    if (mode === "pokemon"){
        if (data[0] !== "error"){
            error_results.style.display = "none"

            wrapper_all_results.style.display = "none";
            wrapper_full_result.style.display = "block";
            setResult(data);
        }
        else {
            wrapper_all_results.style.display = "none";
            wrapper_full_result.style.display = "none";
            error_results.style.display = "block"
        }

    }
    if (mode === "type"){
        if (data[0] !== "error") {
            error_results.style.display = "none"
            wrapper_full_result.style.display = "none";
            wrapper_all_results.style.display = "block";
            getResults(data["pokemon"], "result-table");
        }
        else {
            wrapper_all_results.style.display = "none";
            wrapper_full_result.style.display = "none";
            error_results.style.display = "block"
        }
    }

}

// SHOW FULL POKEMON
function setResult(data){
    setDataOL(data["abilities"], "ability", "abilities-list");
    setDataOL(data["moves"], "move", "moves-list");
    addTypeData(data["types"], "type", "types-list");

    setStats(data["stats"], "stats-list")

    // Set Pokemon Image
    const pokeImg = document.getElementById("pokemon-img");
    pokeImg.src = data["sprites"]["front_default"];

    const weightStat = document.getElementById("weight");
    weightStat.textContent = "Weight: " + data["weight"];

    // Set pokemon Name
    const pokeName = document.getElementById("pokemon-name");
    pokeName.textContent = data["forms"][0]["name"];
}

function setDataOL(data, type, listId){
    const ol = document.getElementById(listId);
    ol.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item[type]["name"];
        ol.appendChild(li);
    })
}

function addTypeData(data, type, listId){
    const ol = document.getElementById(listId);
    ol.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = "images/" + item[type]["name"] + ".png";
        img.className = "img-type";
        li.textContent = item[type]["name"];

        li.appendChild(img);
        ol.appendChild(li);
    })
}
function setStats(data, listId){
    const ol = document.getElementById(listId);
    ol.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item["stat"]["name"] + " : " + item["base_stat"];
        ol.appendChild(li);
    })

}


// SHOW TYPE RESULTS
function getResults(data, tableId){
    const table = document.getElementById(tableId);
    table.innerHTML = "";

    data.forEach(item => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.className = "td-name";
        tdName.textContent = item.pokemon.name;

        const tdButton = document.createElement("button");
        tdButton.className = "td-button";
        tdButton.textContent = "View";
        tdButton.onclick = function () {send_to_php(item.pokemon.name, "pokemon")}


        tr.appendChild(tdName);
        tr.appendChild(tdButton);
        table.appendChild(tr);
    })
}

document.getElementById('searchButton').addEventListener("click", function () {
    let query = document.getElementById("query").value;
    let mode = document.getElementById("mode").value;

    send_to_php(query, mode);
});





