
let pattern = /\d\d\d/;
function validate(){
  //  alert("hello")
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mnum').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;

    if(name==""){

        document.getElementById('lblname').innerHTML="Name field is required";
           
        console.log("Event terminated");
        return false;
    }
    if(pattern.test(name)==false){//validate using regular expression.
      alert(check);
      return false
    }

}