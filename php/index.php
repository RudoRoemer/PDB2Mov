<?php 
	
	if (!$_POST["tos"] === true) {
		die("The Terms of Service were not accepted.");
	}

	$newLoc;

	try {
	 
	  if (
	      !isset($_FILES['pdbFile']['error']) ||
	      is_array($_FILES['pdbFile']['error'])
	  ) {
	      throw new RuntimeException('Invalid parameters.');
	  }

	  switch ($_FILES['pdbFile']['error']) {
	      case UPLOAD_ERR_OK:
	          break;
	      case UPLOAD_ERR_NO_FILE:
	          throw new RuntimeException('No file sent.');
	      case UPLOAD_ERR_INI_SIZE:
	      case UPLOAD_ERR_FORM_SIZE:
	          throw new RuntimeException('Exceeded filesize limit.');
	      default:
	          throw new RuntimeException('Unknown errors.');
	  }

	  if ($_FILES['pdbFile']['size'] > 10485760) {
	      throw new RuntimeException('Exceeded filesize limit.');
	  }

	  $finfo = new finfo(FILEINFO_MIME_TYPE);
	  
	  if (false === $ext = array_search(
	      $finfo->file($_FILES['pdbFile']['tmp_name']),
	      array(
	      		'pdb' => 'text/plain',
		      ),
	      true
	  )) {
	      throw new RuntimeException('Invalid file format.');
	  }

	  $newLoc = sprintf(
	  	'./pdb_tmp/%s.%s', 
	  	sha1_file($_FILES['pdbFile']['tmp_name']), 
	  	$ext 
	  );

	  if (!move_uploaded_file( $_FILES['pdbFile']['tmp_name'], $newLoc) ) {
	      throw new RuntimeException('Failed to move uploaded file.');
	  }

	  echo 'File is uploaded successfully.';

	} catch (RuntimeException $e) {

	  echo $e->getMessage();
	  die();

	}

	switch (false) {
			case filter_var($_POST["multiple"]		, FILTER_VALIDATE_BOOLEAN)
					endOp("Error in client-side JavaScript.");
			case filter_var($_POST["waters"]			, FILTER_VALIDATE_BOOLEAN)
					endOp("Error in client-side JavaScript.");
			case filter_var($_POST["threed"]			, FILTER_VALIDATE_BOOLEAN)
					endOp("Error in client-side JavaScript.");
			case filter_var($_POST["multiple"]		, FILTER_VALIDATE_BOOLEAN)
					endOp("Error in client-side JavaScript.");
			case filter_var($_POST["confs"]				, FILTER_VALIDATE_INT)
					endOp("Invalid value in configuration parameter.");
			case filter_var($_POST["freq"]				, FILTER_VALIDATE_INT)	
					endOp("Invalid value in frequency parameter.");
			case filter_var($_POST["step"]				, FILTER_VALIDATE_FLOAT)
					endOp("Invalid value in random step parameter.");
			case filter_var($_POST["dstep"]				, FILTER_VALIDATE_FLOAT)
					endOp("Invalid value in direct step parameter.");
			case filter_var($_POST["email"]				, FILTER_VALIDATE_EMAIL)
					endOp("")	;	
	}

	if (filter_var($_POST["multiple"]	, FILTER_VALIDATE_BOOLEAN) 		&&
			filter_var($_POST["waters"]		, FILTER_VALIDATE_BOOLEAN) 		&&
			filter_var($_POST["threed"]		, FILTER_VALIDATE_BOOLEAN) 		&&
			filter_var($_POST["multiple"]	, FILTER_VALIDATE_BOOLEAN) 		&&
			filter_var($_POST["confs"]		, FILTER_VALIDATE_INT)		 		&&
			filter_var($_POST["freq"]			, FILTER_VALIDATE_INT)				&&
			filter_var($_POST["step"]			, FILTER_VALIDATE_FLOAT)			&&
			filter_var($_POST["dstep"]		, FILTER_VALIDATE_FLOAT)			&&
			filter_var($_POST["email"]		, FILTER_VALIDATE_EMAIL)		) {
		die("Error in parameters chosen");

	}
	
	$file=file_get_contents( $newLoc );

	$remove = "\n";
	$split = explode($remove, $file);
	$lCount = 1;


	foreach ($split as $str) {
		
		$san = filter_var($str, FILTER_SANITIZE_SPECIAL_CHARS);

		if ($san !== $str) {
			endOp(
				sprintf(
					"At least one unexpected character found at line %s of .pdb file.", 
					$lCount
				) 
			);
		}
		
		$lCount++;
		
	}

	function endOp($msg) {
			
			try {
				unlink( $newLoc );
			} catch (	RuntimeException $e) {}

			die($msg);

	}

?>