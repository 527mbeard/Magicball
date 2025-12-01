function shakeMagic8Ball() {
    const question = prompt("What is your question for the Magic 8 Ball?");

    if(question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!';
    }
}