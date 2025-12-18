<?php

$server="localhost";
$username="root";
$password="";
$database="mydb";

$conn=mysqli_connect($server, $username, $password, $database);
if(!$conn){
    die("Connection failed: ". mysqli_connect_error());
}else{
    echo "Connected successfully <br>";
}

 if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    // $sql="INSERT INTO Contacts(Name, Email,Phone,Subject,Message) 
    // VALUES($name,$email,$phone,$subject,$message)";
    $sql = "INSERT INTO Contacts (Name, Email, Phone, Subject, Message)
            VALUES (?, ?, ?, ?, ?)";

    $stmt=mysqli_prepare($conn,$sql);

    if($stmt){
        mysqli_stmt_bind_param(
            $stmt,
            "sssss",
            $name,
            $email,
            $phone,
            $subject,
            $message
        );
        if(mysqli_stmt_execute($stmt)){
            echo "Message Send Successfully";
        }else{
            echo "Failed to send message";
        }
        mysqli_stmt_close($stmt);
    }else{
        echo "SQL preparation failed!";
    }
 }


// $sql="CREATE TABLE IF NOT EXISTS Contacts(
//     Id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//     Name VARCHAR(100) NOT NULL,
//     Email VARCHAR(100) NOT NULL ,
//     Phone VARCHAR(15)  NOT NULL,
//     Subject VARCHAR(255) NOT NULL,
//     Message TEXT NOT NULL,
//     Date DATE DEFAULT CURRENT_DATE,
//     Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// )";



mysqli_close($conn);
?>