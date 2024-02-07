function validate() {
  var name=document.myform.username.value;

  
  if (name==null||name=="") {
    document.getElementById("userspan").innerHTML="<img src='icon_status2_16x16.gif'>Please enter a Valid username";
    
    return false;
  }
  else{
    return true;
  }
}

function passvalidate() {
  var pass1=document.myform.password.value;
  var pass2=document.myform.confirmpassword.value;

  if (pass1!=pass2 ||pass1!="") {
    document.getElementById('passspan').innerHTML="<img src='icon_status2_16x16.gif'> password should Be same Value";
  }
  else{
    document.getElementById('passspan').innerHTML="<img src='icon_validation_16x16.gif'> password is same";
  }


}
function checkpass() {
  var pass1=document.myform.password.value;
  // var pass2=document.myform.confirmpassword.value;
  
  if (pass1>=8) {
    document.getElementById('passspan1').innerHTML="<img src='icon_status2_16x16.gif'> password should Be More Than 8 Characters ";
    return false;
  }
  else{
    document.getElementById('passspan1').innerHTML="<img src='icon_validation_16x16.gif'> password is valid ";
    return true;
  }
}

function checkbox(){
   var pass1=document.getElementById("pass1");
   var pass2= document.getElementById("pass2");
   if (pass1.type==="password") {
    pass1.type="text";
   }
}