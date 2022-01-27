<?php
    $tmp_name = $_FILES["myCV"]['tmp_name'];
    $nameCV = $_FILES['myCV']['name'];
    $process_uploadCV = move_uploaded_file($tmp_name, '../assets/tmp/pdf/'.$nameCV);
if ($process_uploadCV) {
    echo "myServerPHP says: File uploaded successfully";
} else {
    echo "myServerPHP says: File couldn't be uploaded";
}