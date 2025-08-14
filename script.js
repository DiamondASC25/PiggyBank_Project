// ALL the questions  0 == Wrong/Not Answered, 1 == Answered Right
let correct1 = 0;
let correct2 = 0;
let correct3 = 0;
let correct4 = 0;
let correct5 = 0;
let correct6 = 0;
let correct7 = 0;
let correct8 = 0;
let correct9 = 0;
let correct10 = 0;
let score = 0;
let submitted = 0;

// ALL the buttons

// Question 1
const button1A = document.getElementById('button1A');
const button1B = document.getElementById('button1B');
const button1C = document.getElementById('button1C');
const button1D = document.getElementById('button1D');

// Question 2
const button2A = document.getElementById('button2A');
const button2B = document.getElementById('button2B');
const button2C = document.getElementById('button2C');
const button2D = document.getElementById('button2D');

// Question 3
const button3A = document.getElementById('button3A');
const button3B = document.getElementById('button3B');
const button3C = document.getElementById('button3C');
const button3D = document.getElementById('button3D');

// Question 4
const button4A = document.getElementById('button4A');
const button4B = document.getElementById('button4B');
const button4C = document.getElementById('button4C');
const button4D = document.getElementById('button4D');

// Question 5
const button5A = document.getElementById('button5A');
const button5B = document.getElementById('button5B');
const button5C = document.getElementById('button5C');
const button5D = document.getElementById('button5D');

// Question 6
const button6A = document.getElementById('button6A');
const button6B = document.getElementById('button6B');
const button6C = document.getElementById('button6C');
const button6D = document.getElementById('button6D');

// Question 7
const button7A = document.getElementById('button7A');
const button7B = document.getElementById('button7B');
const button7C = document.getElementById('button7C');
const button7D = document.getElementById('button7D');

// Question 8
const button8A = document.getElementById('button8A');
const button8B = document.getElementById('button8B');
const button8C = document.getElementById('button8C');
const button8D = document.getElementById('button8D');

// Question 9
const button9A = document.getElementById('button9A');
const button9B = document.getElementById('button9B');
const button9C = document.getElementById('button9C');
const button9D = document.getElementById('button9D');

// Final Question
const button10A = document.getElementById('button10A');
const button10B = document.getElementById('button10B');
const button10C = document.getElementById('button10C');
const button10D = document.getElementById('button10D');



// Question 1 Button Reactions
button1A.onclick = function (){
    correct1 = 0
}
button1B.onclick = function (){
    correct1 = 0
}
button1C.onclick = function (){
    correct1 = 0
}
button1D.onclick = function (){
    correct1 = 1
}

// Question 2 Button Reactions
button2A.onclick = function (){
    correct2 = 0
}
button2B.onclick = function (){
    correct2 = 1
}
button2C.onclick = function (){
    correct2 = 0
}
button2D.onclick = function (){
    correct2 = 0
}

// Question 3 Button Reactions
button3A.onclick = function (){
    correct3 = 0
}
button3B.onclick = function (){
    correct3 = 0
}
button3C.onclick = function (){
    correct3 = 0
}
button3D.onclick = function (){
    correct3 = 1
}

// Question 4 Button Reactions
button4A.onclick = function (){
    correct4 = 0
}
button4B.onclick = function (){
    correct4 = 0
}
button4C.onclick = function (){
    correct4 = 1
}
button4D.onclick = function (){
    correct4 = 0
}

// Question 5 Button Reactions
button5A.onclick = function (){
    correct5 = 0
}
button5B.onclick = function (){
    correct5 = 1
}
button5C.onclick = function (){
    correct5 = 0
}
button5D.onclick = function (){
    correct5 = 0
}

// Question 6 Button Reactions
button6A.onclick = function (){
    correct6 = 1
}
button6B.onclick = function (){
    correct6 = 0
}
button6C.onclick = function (){
    correct6 = 0
}
button6D.onclick = function (){
    correct6 = 0
}

// Question 7 Button Reactions
button7A.onclick = function (){
    correct7 = 0
}
button7B.onclick = function (){
    correct7 = 0
}
button7C.onclick = function (){
    correct7 = 1
}
button7D.onclick = function (){
    correct7 = 0
}

// Question 8 Button Reactions
button8A.onclick = function (){
    correct8 = 0
}
button8B.onclick = function (){
    correct8 = 1
}
button8C.onclick = function (){
    correct8 = 0
}
button8D.onclick = function (){
    correct8 = 0
}

// Question 9 Button Reactions
button9A.onclick = function (){
    correct9 = 0
}
button9B.onclick = function (){
    correct9 = 0
}
button9C.onclick = function (){
    correct9 = 0
}
button9D.onclick = function (){
    correct9 = 1
}

// Question 10 Button Reactions
button10A.onclick = function (){
    correct10 = 1
}
button10B.onclick = function (){
    correct10 = 0
}
button10C.onclick = function (){
    correct10 = 0
}
button10D.onclick = function (){
    correct10 = 0
}

//submit button and name stuff
let submitButton = document.getElementById("submit_button");
let nameInput = document.getElementById("name_input");
let intro = document.getElementById("intro");

submitButton.onclick = function() { // Adds score and then runs saveStuff
    score = correct1 + correct2 + correct3 + correct4 + correct5 + correct6 + correct7 + correct8 + correct9 + correct10;
    let username = nameInput.value;
    
    if(!username) {
        alert("Please enter your name before submitting!");
    }
    
    let submission = {
        name: username,
        score: score,
        date: new Date(),
        submittedQuestion: submitted,
    }

    if(!localStorage.getItem('all_Submissions')){
        let submissions = [];
        submissions.push(submission);
        localStorage.setItem('all_Submissions', JSON.stringify(submissions));
    }
    else {
        let submissions = JSON.parse(localStorage.getItem("all_Submissions"));
        submissions.push(submission);
        localStorage.setItem('all_Submissions', JSON.stringify(submissions));
        console.log(submissions);
    }
    
    if (username) {
        window.location.href = "results.html";
    }
}

nameInput.oninput = function() {
    if(nameInput.value.length >= 0 && nameInput.value!=" "){
        intro.innerHTML = "Hey " + nameInput.value + ", test your knowledge here!";
    }
}









