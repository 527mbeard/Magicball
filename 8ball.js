function shakeMagic8Ball() {
    const question = prompt("What is your question for the Magic 8 Ball?");

    if(question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!';
        document.getElementById('response-text').classList = 'lead text-warning';
        document.getElementById('response-img').src ='sadface.png';
    }

    if(!question.trim()) {
        alert("You must ask a question to get an answer!");
    }

    const randomNumber =Math.floor(Math.random()*10);
    let answer, image, color; 

    switch(randomNumber) {
        case 0:
            answer = "Yes, definitely!";
            image = "yes.png";
            color = "text-success";
            break;
        case 1:
            answer = "Ask again later.";
            image = "asklater.png";
            color = "text-primary";
            break;      
        case 2:
            answer = "Don't count on it.";
            image = "dontcount.png";
            color = "text-danger";
            break;
        case 3:
            answer = "Absolutely!";
            image = "absolutely.png";
            color = "text-success";
            break; 
        case 4:
            answer = "My sources say no.";
            image = "mysourcesno.png";
            color = "text-danger";
            break; 
        case 5:
            answer = "Outlook good.";
            image = "outlookgood.png";
            color = "text-success";
            break;  
        case 6:
            answer = "Very doubtful.";
            image = "verydoubtful.png";
            color = "text-danger";
            break;  
        case 7:
            answer = "Signs point to yes.";
            image = "signspointtoyes.png";
            color = "text-success";
            break;      
        case 8: 
            answer = "Cannot predict now.";
            image = "cannotpredict.png";
            color = "text-primary";
            break;  
        case 9:
            answer = "Hell naw!";
            image = "naw.png";
            color = "text-success";
            break; 
        default:
            answer = "Error: Try again.";
            image = "error.png";
            color = "text-warning";
            break;
    }
    
    document.getElementById('response-text').innerText = answer
    document.getElementById('response-text').classList = `display-4 text-center strong ${color}`
    document.getElementById('response-img').src = image
}

const ball = document.getElementById("eightball-img");

ball.classList.add("spin");

// remove animation class after it finishes
setTimeout(() => {
  ball.classList.remove("spin");
}, 100000);
