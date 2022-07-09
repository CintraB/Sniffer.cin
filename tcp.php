<?php

$destIP = "localhost";
$community = "gerencia";
$oid = ".1.3.6.1.2.1.6.10.0";

$tcpInDelivers = snmp2_get($destIP,$community,$oid);
	
$tcpIn = explode(" ",$tcpInDelivers);
	
echo $tcpIn[1];



?>
