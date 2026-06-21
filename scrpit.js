// Countdown


function calculateDays(){


let date =
new Date(
document.getElementById("examDate").value
);


let today = new Date();


let diff =
date - today;


let days =
Math.ceil(
diff/(1000*60*60*24)
);



document.getElementById("countdown")
.innerHTML =
days+" days remaining";


}






// Planner


function createPlan(){


let subjects =
document.getElementById("subjects").value.split(",");


let hours =
document.getElementById("hours").value;


let output="";


subjects.forEach((sub)=>{

output +=
`
<p>📖 ${sub} : ${hours/subjects.length} hrs</p>
`;

});


document.getElementById("plan")
.innerHTML=output;


}







// Timer


let time=1500;

let interval;


function startTimer(){


interval=setInterval(()=>{


time--;


let min =
Math.floor(time/60);


let sec =
time%60;


document.getElementById("timer")
.innerHTML =
min+":"+sec;



},1000);


}



function pauseTimer(){

clearInterval(interval);

}



function resetTimer(){


clearInterval(interval);

time=1500;

document.getElementById("timer")
.innerHTML="25:00";


}






// Notes


function saveNote(){


let title =
document.getElementById("noteTitle").value;


let text =
document.getElementById("noteText").value;



localStorage.setItem(
title,
text
);



displayNotes();


}




function displayNotes(){


let notes="";


for(let i=0;i<localStorage.length;i++){


let key =
localStorage.key(i);


notes +=
`
<p>
<b>${key}</b>:
${localStorage.getItem(key)}
</p>
`;

}


document.getElementById("notes")
.innerHTML=notes;


}


displayNotes();