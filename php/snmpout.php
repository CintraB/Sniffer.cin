<?php
	$destIP = $_POST['campoIP'];
	#$destIP = "localhost";
	#$destIP = addslashes($_POST['campoIP']);
	$community = "gerencia";
	$oid = ".1.3.6.1.2.1.4.10.0";

	$ipoutDelivers = snmp2_get("$destIP","$community","$oid");
	
	$ipout = explode(" ",$ipoutDelivers);
	echo $ipout[1];
?>
