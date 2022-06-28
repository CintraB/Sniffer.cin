
<?php
	$destIP = "localhost";
	$community = "public";
	$oid = ".1.3.6.1.2.1.4.9.0";

	$ipInDelivers = snmp2_get("$destIP","$community","$oid");
	
	$ipIn = explode(" ",$ipInDelivers);
	//var_dump($ipIn);
	echo $ipIn[1];
?>
