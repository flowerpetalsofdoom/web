$('#main').t({
  // beep:true,
  caret:'<span style="color:cyan;">|</span>',
  typing:function(elm,chr){

  if(chr.match(/\-trigger/))
      $('#pow-txt').show().delay(500).fadeOut(0);
  
  }
});

function getAge() {
  var dateString = "1994/06/16";
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

$(document).ready(function() { 
  console.log(getAge());
  $("#age").text( getAge() );
});