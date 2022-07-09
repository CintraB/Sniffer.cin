<?php

$destIP = "localhost";
$community = "gerencia";
$oid = ".1.3.6.1.2.1.7.1.0";

$udpInDelivers = snmp2_get($destIP,$community,$oid);
	
$udpIn = explode(" ",$udpInDelivers);
	
echo $udpIn[1];



?>
