$(document).ready(function(){
  $("#gemInput").submit(function(event){
    var item = $("input:radio[name=items]:checked").val();
    var day = $("input:radio[name=days]:checked").val();


    if(item === "red"){
      $("#ruby").show();
      $("python").hide();
      $("go").hide();
    }






    event.preventDefault();
  });
});