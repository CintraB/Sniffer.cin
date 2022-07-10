<?php
	#$destIP = "localhost";
	$destIP = $_POST['campoIPsnmp'];
	$community = "gerencia";
	$oid = ".1.3.6.1.2.1.11.2.0";

	$snmpOutpkts = snmp2_get("$destIP","$community","$oid");
	
	$snmpOut = explode(" ",$snmpOutpkts);
	echo $snmpOut[1];
?>
