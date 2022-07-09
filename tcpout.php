<?php

$destIP = "localhost";
$community = "gerencia";
$oid = ".1.3.6.1.2.1.6.11.0";

$tcpoutDelivers = snmp2_get($destIP,$community,$oid);
	
$tcpout = explode(" ",$tcpoutDelivers);
	
echo $tcpout[1];



?>