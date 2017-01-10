<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>DASHBOARDV2</title>
    <meta name="description" content="DASHBOARD">
    <meta name="author" content="SitePoint">

    <link href="/assets/css/app.css" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
</head>

<body>

    <?php foreach($partialViews as $view):
        echo $view;
    endforeach; ?>
</body>
</html>

<script src="/assets/js/app.min.js"></script>