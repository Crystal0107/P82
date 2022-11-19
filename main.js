canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
console.log('in mousedown');
    color = document.getElementById("color").value;
    console.log(color);
    width_of_line = document.getElementById("widthofLine").value;
    console.log(width_of_line);
    radius = document.getElementById("radius").value;  
    console.log(radius);  
    mouseEvent = "my_mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "my_mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "my_mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "my_mousedown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color
        ctx.lineWidth = width_of_line
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        console.log(ctx.arc);
        ctx.stroke();
    }
}