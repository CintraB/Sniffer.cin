<?php
	$destIP = "localhost";
	$community = "gerencia";
	$oid = ".1.3.6.1.2.1.4.10.0";

	$ipoutDelivers = snmp2_get("$destIP","$community","$oid");
	
	$ipout = explode(" ",$ipoutDelivers);
	echo $ipout[1];
?>
