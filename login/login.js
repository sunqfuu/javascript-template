//JS

const validateForm = () => {
  alert("Sunqfu Login Validation");

  // uemail upassword
  let emailAddress, upassword;
  emailAddress = document.getElementById("uemail").value;
  password = document.getElementById("upassword").value;
  alert(`${emailAddress} ${password}`);

  // Validation

  if (emailAddress == "" || password == "") {
    alert("Please fill in all fields");
    return false;
  }
  return true;
};
