/*$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var button1 = $("input:radio[name=button1]:checked").val();
    var button2 = $("input:radio[name=button2]:checked").val();
    var button3 = $("input:radio[name=button3]:checked").val();

    alert(button1);
    alert(button2);
    alert(button3);

    blanks.forEach(function(blank) {
      debugger;
      
      $("." + blank).text(button1).val();
      $("." + blank).text(button2).val();
      $("." + blank).text(button3).val();
    });

    $("#story").show();

    event.preventDefault();
  });
});*/
var testResults = function(button1,button2 ,button3){
  return button1 + button2 + button3;
  
  }
  
  $(document).ready(function(){
    $(".begin").click(function(){
      $("#test").fadeToggle("slow");
    });
  
    $("#blanks form").submit(function(event){
      var button1 = $("input:radio[name=button1]:checked").val();
      var button2 = $("input:radio[name=button2]:checked").val();
      var button3 = $("input:radio[name=button3]:checked").val();

      /*alert(button1);
      alert(button2);
      alert(button3);*/
  
      var result = testResults(button1, button2 ,button3);
  
     
      blanks.forEach(function(blank) {
        debugger;
        
        $("#display").text("Your score is:" + result);
      });
  
      event.preventDefault();
      $(".final").show();
    });
  });
