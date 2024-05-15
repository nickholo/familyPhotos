const buttons = document.querySelectorAll('.year-button');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector("main").innerHTML = "";
    })
});

