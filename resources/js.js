var $screen = $("#screen");
var $number = $(".number");
var op = "+" ;
var currentNumber = 1;  
var num1;
var num2;
var click = 0;

function reset(){
    num1 = null;
    num2 = null;
    currentNumber = 1;
}
function findAnswer(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (op == "+"){
        answer = num1 + num2;
    }
    if (op == "-"){
        answer = num1 - num2;
    }
    if (op == "x"){
        answer = num1 * num2;
    }
    if (op == "/"){
        answer = num1 / num2;
    }
    num1 = answer;
    num2 = null;
    currentNumber = 1;
    $('#equals').css('background-color','gray')
}
function more(){
    if(click > 8){
        click = click - 8;
    }
    if (currentNumber == 2){
        findAnswer();
        $screen.empty()
        $screen.append(num1);
    }
    currentNumber = 2; 
}
$number.on('click', function(){
    if (click > 8){
        return;
    }
    click++;
    $('#clear').css('background-color','#cc1423');
    var numPressed = $(this).html();
    $screen.append(numPressed);
    if (currentNumber == 1){
        if (num1 == null){
            num1 = numPressed;
        } else{
            num1 = num1 + numPressed;
        }
    }
    if (currentNumber == 2){
        $('#equals').css('background-color', '#cc1423');
        if(num2 == null)
        {
            num2 = numPressed;
        } else{
            num2 = num2 + numPressed;
        }
    }
});
/*document.getElementById("one").onclick = function write1()
    {
        $screen.append(1);
    }
document.getElementById("two").onclick = function write2()
    {
        $screen.append(2);
    }
document.getElementById("three").onclick = function write3()
    {
        $screen.append(3);
    }
document.getElementById("four").onclick = function write4()
    {
        $screen.append(4);
    }
document.getElementById("five").onclick = function write5()
    {
        $screen.append(5);
    }
document.getElementById("six").onclick = function write6()
    {
        $screen.append(6);
    }
document.getElementById("seven").onclick = function write7()
    {
        $screen.append(7);
    }    
document.getElementById("eight").onclick = function write8()
    {
        $screen.append(8);
    }
document.getElementById("nine").onclick = function write9()
    {
        $screen.append(9);
    }
document.getElementById("zero").onclick = function write0()
    {
        $screen.append(0);
    }
        */
document.getElementById("plus").onclick = function writePlus()
    {
        if (num1!=null){
        more();
        $screen.append("+");
        op = "+"
        }
    }
document.getElementById("minus").onclick = function writeMinus()
    {
        if (num1!=null){
        more();
        $screen.append("-");
        op = "-"
        }
    }
document.getElementById("times").onclick = function writeTimes()
    {
        if (num1!=null){
        more();
        $screen.append("*");
        op = "x"
        }
    }
document.getElementById("divided").onclick = function writeDivided()
    {
        if (num1!=null){
        more();
        $screen.append("/");
        op = "/"
        }
    }

document.getElementById("equals").onclick = function writeAnswer()
    {
    if(num2!=null){
    findAnswer();
    $screen.empty();
    var answerLength = answer.toString();
    click = answerLength.length;
    $screen.append(answer);
    }
        
};
document.getElementById("clear").onclick = function clear()
    {
        $screen.empty();
        num1 = null;
        num2 = null;
        currentNumber = 1;
        click = 0;
        $('#clear').css('background-color','gray');
        $('#equals').css('background-color','gray');
    }
