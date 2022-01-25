<?php
    $tmp_name = $_FILES['uploadCV']['tmp_name'];
    $nameCV = $_FILES['uploadCV']['name'];
    move_uploaded_file($tmp_name, '../assets/tmp/pdf/'.$nameCV);
?>