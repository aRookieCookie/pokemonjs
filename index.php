<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <link rel="icon" href="images/dragon.png">
    <link rel="stylesheet" href="css\style.css">
    
</head>
<body>
    <div class="nav-bar"><h1>Pokedex 🪿</h1></div>

    <form action="" method="GET" onsubmit="event.preventDefault();" class="search-bar">
        <fieldset>
            <legend>Search: </legend>
            <input type="text" id="query"></input>
            <select id="mode">
                <option value="pokemon">Name</option>
                <option value="type">Type</option>
            </select>

            <button id="searchButton">Search</button>
        </fieldset>
    </form>

    <div id="wrapper_all_results">
        <table id="result-table">
            <!--  -->

            <!--  -->
        </table>
    </div>

    <div id="wrapper_full_result">
        <div class="grid-container">
            <div class="item-5">
                <h1 id="pokemon-name"></h1>
                <ol id="types-list"></ol>
            </div>

            <div class="item-2 grid-item">
                <h1>Moves:</h1>
                <ol id="moves-list"></ol>
            </div>

            <div class="item-4">
                <h1>Abilities:</h1>
                <ol id="abilities-list"></ol>
            </div>

            <div class="item-3">
            <h1>Stats:</h1>
            <ol id="stats-list"></ol>
            <p id="weight"></p>
            </div>

            <img src="" alt="" id="pokemon-img" class="item-1">
        </div>
    </div>

    <div id="error-not-found">
        <h1>Oops!</h1>
        <p>No Results Found</p>
    </div>
    <script src="scripts/script.js"></script>
</body>
</html>

