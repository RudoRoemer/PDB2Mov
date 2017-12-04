<?php 
	echo $_POST['combi'];
	$uploaddir = "pdb_tmp/";
	$uploadfile = $uploaddir . basename( $_FILES['pdbFile']['tmp_name']);

	if(move_uploaded_file($_FILES['pdbFile']['tmp_name'], $uploadfile)) {
	  echo "The file has been uploaded successfully";
	}
	else {
	  echo "There was an error uploading the file";
	}



	$file=$_FILES['pdbFile']['name'];

	

	$remove = "\n";

	$split = explode($remove, $file);

	$array[] = null;
	$tab = "\t";
	echo $array[0];
	foreach ($split as $string) {
		echo $string;
		array_push($array,$string);
		echo $array[0];
	}


?>