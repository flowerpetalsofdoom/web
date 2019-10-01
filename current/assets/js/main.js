$('#main').t({
  // beep:true,
  caret:'<span style="color:cyan;">|</span>',
  typing:function(elm,chr){

  if(chr.match(/\-trigger/))
      $('#pow-txt').show().delay(500).fadeOut(0);
  
  }
});
