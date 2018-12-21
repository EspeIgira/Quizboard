
    $(document).ready(function(){
    
    $("#blanks form").submit(function(event){

      var button1 = parseInt($("input:radio[name=button1]:checked").val());
      var button2 = $("input:radio[name=button2]:checked").val();
      var button3 = $("input:radio[name=button3]:checked").val();

      /*alert(button1);
      alert(button2);
      alert(button3);*/
      var testResults = function(button1,button2 ,button3){
        return button1 + button2 + button3;
        
        }
      var result= 0;
      var message="";

      /*var result = testResults(button1, button2 ,button3);*/
      if (button1===40){
        
        result+=40;
      }
      if (button2===40){
        
        result+=40;
      } 
      if (button3===40){
        
        result+=40;
      }
      $(".final").show();
      $("#display").text("Your score is:" + result);

     
     
      event.preventDefault();
      }) 
    });
   
     
    
  
     
   

