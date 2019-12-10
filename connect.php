<?php
	$firstName = $_POST['fisrtName'];
	$lastName = $_POST['lasttName'];
	$gender = $_POST['gender'];
	$email = $_POST['email'];

	$conn = new mysqli('localhost','root','','email_list');
	if($conn->connect_error){
		die('Connection failed : '.$conn->connect_error);
	}else{
		$stmt = $conn->prepare("insert into resgistration(firstName, lastName, gender, email)values(?, ?, ?, ?)");
		$stmt->bind_param("ssss", $firstName, $lastName, $gender, $email);
		$stmt->execute();
		echo "Thanks! You have been added to our mailing list!";
		$stmt->close();
		$conn->close();
	}
	
?>