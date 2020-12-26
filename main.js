canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;
radius = 10;
var mouseEvent="empty";
var current_x;
var current_y;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
 canvas.addEventListener("mouseup",myMouseUp);
 function myMouseUp(e){
     mouseEvent="mouseup";
 }
 canvas.addEventListener("mouseleave",myMouseLeave);
 function myMouseLeave(e){
     mouseEvent="mouseleave";
 }
 canvas.addEventListener("mousemove",myMouseMove);
 function myMouseMove(e){
     currentMouse_x=e.clientX-canvas.offsetLeft;
     currentMouse_y=e.clientY-canvas.offsetTop;

     if(mouseEvent == "mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth= width;
         ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
         ctx.stroke();
     }
     lastPositionOfX=current_x;
     lastPositionOfY=current_y;
 }
 canvas.addEventListener("touchstart",myTouchStart);
 function myTouchStart(){
     lastPositionOfTouchX=current_x;
     lastPositionOfTouchY=current_y;
 }
 canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastPositionOfTouchX,lastPositionOfTouchY);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        lastPositionOfTouchX = current_position_of_touch_x; 
        lastPositionOfTouchY = current_position_of_touch_y;
    }
 function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}