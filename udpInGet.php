<?php

$destIP = "localhost";
$community = "gerencia";
$oid = ".1.3.6.1.2.1.7.1.0";

$udpIN = snmp2_get("$destIP","$community","$oid");

$saidaUDP = explode(" ",$udpIN);
echo $saidaUDP[1];

#echo explode(" ",snmp2_get("localhost","public","1.3.6.1.2.1.7.1.0"))[1];

?>
