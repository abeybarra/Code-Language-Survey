$(document).ready(function(){
  $("#formInput").submit(function(event){
    var item = $("input:radio[name=items]:checked").val();
    var day = $("input:radio[name=days]:checked").val();


    if(item === "red"){
      $("#ruby").show();
      $("#python").hide();
      $("#go").hide();
    }else if(item === "slithering"){
      $("#ruby").hide();
      $("#python").show();
      $("#go").hide();
    }else if(item === "game"){
      $("#ruby").hide();
      $("#python").hide();
      $("#go").show();
    }






    event.preventDefault();
  });
});