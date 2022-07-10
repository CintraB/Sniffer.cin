
<?php
#$destIP = "192.168.1.11";
#$destIP = addslashes($_POST['campoIP']);
#$destIP = "localhost";
$destIP = $_POST['campoIP'];
$community = "gerencia";
$oid = ".1.3.6.1.2.1.4.9.0";

$ipInDelivers = snmp2_get("$destIP", "$community", "$oid");

$ipIn = explode(" ", $ipInDelivers);
echo $ipIn[1];


?>
