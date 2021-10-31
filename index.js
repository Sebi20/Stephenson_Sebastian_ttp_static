setInterval(showTime, 1000);

function showTime(){
  let date = new Date();

  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let pmORam;

  if(hours > 12){
  	pmORam = "PM";

  }else{
  	pmORam = "AM";
  }// Adds a pm or am given the time of day

  
  // These 3 if statements adds a 0 if the number is single
  if(mins < 10){
  	mins = `0${mins}`;
  }

  if(secs < 10){
  	secs = `0${secs}`;
  }

  if(hours < 10){
  	hours = `0${hours}`;
  }
  //---------------------------//

  if(hours => 13){
  	hours = hours - 12;
  }// This gets rid of the military time

  let time = `${hours}:${mins}:${secs} ${pmORam}`;

  document.getElementById('time').innerHTML = time;

}// End of the showTime function

showTime();

