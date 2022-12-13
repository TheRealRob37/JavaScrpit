let start = confirm("Do you want to play with me?")
if (start == true){
    let anun = prompt("Enter your name");
    let res = 0;
    let question1 = prompt("Write down the capital of Germany");
        if(question1 == "Berlin"){
            alert("Answer is correct");
            res += 5;
        } else if (question1 == "berlin"){
            alert("Answer is correct");
            res += 5;
        }
         else {
            alert("Wrong answer!")
        }
    let question2 = +prompt("How many continents our planet has?")
        if(question2 == 7){
            alert("Answer is correct");
            res += 5;
        } else {
            alert("Wrong answer!")
        }
    let question3 = +prompt("How many states in USA?")
        if (question3 == 50){
            alert("Answer is correct");
            res += 5;
        } else {
            alert("Wrong answer!")
        }
    let question4 = +prompt("How many letters armenian alphabet has?")
        if (question4 == 39){
            alert("Answer is correct");
            res += 5;
        } else {
            alert("Wrong answer!")
        }
        if(res == 20){
             alert(`${anun} you won the game! You have ${res}/20 points!`)
             console.log(`${anun} wins!`)
        } else {
            alert(`${anun} you've answered ${res / 5} questions! You have ${res}/20 points!`)
            console.log(`Correct answers: ${res / 5}! Points: ${res}`)
        }
    } else {
    alert("Goodbye")
}