const button = document.querySelector('button')!;


function addEvent(n1: number, n2: number) {
    if(n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

function clickHandler(message: string) {
    console.log("Click: " + message);
}

if(button) {
    button.addEventListener('click', clickHandler.bind(null, "You clicked!"));
}