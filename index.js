document.querySelector(".circle").textContent = "";

var count = 1;
var circle = document.querySelector(".circle");
circle.style.marginLeft = "6px";

document.querySelector(".switch").addEventListener("click", function (){
    if(count === 0 || count >= 3){
        circle.style.marginLeft = "6px";
        count = 0;
    }
    else{
        var style = circle.style.marginLeft;
        var result;
        if(style[1] === "p"){
            result = (style[0] - "0");
        }
        else result = (style[0] - "0") * 10 + (style[1] - "0")

        result += 22;
        circle.style.marginLeft = result + "px";  
    }
    count++;
    count %= 4;
    switchTheme2(count);
})

function switchTheme2(count){
    var link = document.querySelectorAll("link");
    link[3].setAttribute("href","styles/style" + count +".css")
}

var length = document.querySelectorAll(".keys").length;
var res = "";
var len;
var num1 = "",num2 = 0;
var op = "";
for(var i = 0;i<=length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var key = this.textContent;
        if(key === "1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === "0" || key === "."){
            res += key;
            document.querySelector(".screen p").textContent = res;
        }

        if(res !== "" && (key === "+" || key === "-" || key === "x" || key === "/")){
            num1 = res;
            reset();
            num1 -= "0";
            num2 += num1;
        }

        switch(key){
            case "DEL":
                document.querySelector(".screen p").textContent = deleteNum(res);
                res = deleteNum(res);
            break;

            case "RESET":
                reset();
            break;

            case "+":
                op = "+";
            break;

            case "-":
                op = "-"
            break;

            case "x":
                op = "x"
            break;

            case "/":
                op = "/"
            break;

            case "=":
                res -= "0";
                var ans;
                if(op === "+") ans = num2 + res;
                else if(op === "-") ans = num2 - res;
                else if(op === "x") ans = num2 * res;
                else if(op === "/") ans = num2 / res;
                document.querySelector(".screen p").textContent = ans + "";
            break;

            default: console.log(key);
        }
    })
}

function deleteNum(res){
    return res.slice(0,-1);
}

function reset(){
    document.querySelector(".screen p").textContent = "";
    res = "";
    num2 = 0;
}
