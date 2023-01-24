<?php
include_once ("config.php");
include_once("constants.php");

if (isset($_GET['getAuthUser'])) {
    $loggedInUser = @$_SESSION["loggedin-user"];

    $response["code"] = SUCCESS;
    $response["description"] = "Succesfull";
    $response["details"] =  $loggedInUser;

    echo json_encode($response);
}