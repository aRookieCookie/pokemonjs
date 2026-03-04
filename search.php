<?php
    header('Content-Type: application/json');
    $query = $_GET["q"];
    $mode = $_GET["m"];

    $data = @file_get_contents("https://pokeapi.co/api/v2/" . $mode . "/" . $query);
    if ($data === FALSE || $query === "") {
        echo json_encode(["0" => "error"]);
        exit;
    }


    echo $data;
?>