<?php

#$destIP = "localhost";
$destIP = $_POST['campoIPudp'];
$community = "gerencia";
$oid = ".1.3.6.1.2.1.7.4.0";

$udpoutDelivers = snmp2_get($destIP,$community,$oid);
	
$udpout = explode(" ",$udpoutDelivers);
	
echo $udpout[1];



?>
