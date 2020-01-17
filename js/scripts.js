$(document).ready(function(){
  $("#formInput").submit(function(event){
    var item = $("input:radio[name=items]:checked").val();
    var day = $("input:radio[name=days]:checked").val();
    var monster =$("input:radio[name=monsters]:checked").val();
    var swallow =$("input:radio[name=swallows]:checked").val

    if(item === "ruby" && day === "mining" && monster === "medusa" || monster === "dio"){
      $("#ruby").show();
      $("#python").hide();
      $("#go").hide();
    }else if(item === "snake" && day === "zoo" && monster === "rock" || monster === "dio"){
      $("#ruby").hide();
      $("#python").show();
      $("#go").hide();
    }else if(item === "game" && day === "greenLight" && monster === "rock" || monster === "medusa"){
      $("#ruby").hide();
      $("#python").hide();
      $("#go").show();
    }






    event.preventDefault();
  });
});

//(equals)===  (or)||  (and)&&   (not)!