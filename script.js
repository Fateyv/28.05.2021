let name = getName();
const heading = document.querySelector('.title');
heading.textContent = heading.textContent + `, ${name}!`;

function getName() {
    let answer = '';
    do {
        answer = prompt("What is your name?");
    } while (isOperandsValid(answer));
    return answer;
}

function isOperandsValid(answer) {
    return (
        answer === null || 
        answer === ''
    );
}