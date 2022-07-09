<?php
	$destIP = "localhost";
	$community = "gerencia";
	$oid = ".1.3.6.1.2.1.11.1.0";

	$snmpInpkts = snmp2_get("$destIP","$community","$oid");
	
	$snmpIn = explode(" ",$snmpInpkts);
	echo $snmpIn[1];
?>
