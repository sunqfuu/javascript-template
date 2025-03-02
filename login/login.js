//JS

const validateForm = () => {
  alert("Sunqfu Login-Register Validation");

  // uemail upassword
  let emailAddress, upassword, repassword;
  emailAddress = document.getElementById("uemail").value;
  password = document.getElementById("upassword").value;
  repassword = document.getElementById("uconfirmpassword").value;
  alert(`${emailAddress} ${password} ${repassword}`);

  // Validation
  if (emailAddress == "" || password == "" || repassword == "") {
    alert("Please fill in all fields");
    return false;
  }

  //Validation (Repassword)
  if (password != repassword) {
    alert("Password and Confirm Password do not match");
    return false;
  } else {
    alert("Password and Confirm Password match");
  }

  //Validation Password
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  //Mail Regex
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailAddress.match(mailformat)) {
    alert("Invalid email address");
    return false;
  }

  return true;
};
