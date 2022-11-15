let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons)

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case "C":
                display.innerText = "";
                break;
            case "←":
                display.innerText = display.innerText.slice(0, -1);
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error as";
                }
                break;
            default:
                if( (display.innerText.includes("+") || display.innerText.includes("-") || display.innerText.includes("*") || display.innerText.includes("/") ) && ( e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "*" || e.target.innerText === "/" )){
                    return;
                }
                display.innerText += e.target.innerText;
                   
        }
    });
});