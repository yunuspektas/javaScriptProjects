
     

  var btnLogIn = document.getElementById("btnLogIn");

  var accounts = [
    {
      username: "user1",
      password: "password1",
    },
    {
      username: "user2",
      password: "password2",
    },
  ];
  var txtName1 = document.getElementById("name1").value;
  var txtPassWord = document.getElementById("passWord").value;
  var pass = false;
  btnLogIn.addEventListener('click', function(){
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].username == txtName1) {
        if (accounts[i].password == txtPassWord) {
          window.location = "welcome.html";
          alert("");
          pass = true;
          
        }
      }
      if (pass == false) alert("User Name or Password is wrong");
    } 
  });
  

