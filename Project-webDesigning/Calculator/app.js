const display =document.getElementById("display");

function appendToDisplay(inputs){
    display.value+=inputs;

}
function clearDisplay(){
display.value=""
}
function calculate(){
   try{
    display.value=eval(display.value)
   }catch(error){
    display.value='error'
   }

}
