
function getnum(num)
{
    var result=document.getElementById("result");
    result.value+=num;

}

function clearbtn(){

    var result=document.getElementById("result");
    result.value="";
}

function answerr(){

    var result=document.getElementById("result");
    result.value=eval(result.value);
}

function sqrtt(){
    var result=document.getElementById("result");
    result.value=Math.sqrt(result.value);
}

function sqrr(){
    var result=document.getElementById("result");
    result.value=(result.value)*(result.value);
}