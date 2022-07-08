<?php

$destIP = "localhost";
$community = "gerencia";
$oid = ".1.3.6.1.2.1.7.4.0";

$udpOUT = snmp2_get("$destIP","$community","$oid");

$auxUDP = explode(" ",$udpOUT);
echo $auxUDP[1];




#echo explode(" ",snmp2_get("localhost","public","1.3.6.1.2.1.7.4.0"))[1];

?>
