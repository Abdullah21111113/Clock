function updateClock() {
  const now=new Date();
  let hours=now.getHours();
  let minutes=now.getMinutes();
  let seconds=now.getSeconds();

  hours=hours.toString().padStart(2,'0');
  minutes=minutes.toString().padStart(2,'0');
  seconds=seconds.toString().padStart(2,'0');

  document.getElementById('time').textContent=`${hours}:${minutes}:${seconds}`;

  const options={weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'};
  document.getElementById('date').textContent=now.toLocaleDateString(undefined,options);

  const red=(hours/23)*255;
  const green=(minutes/59)*255;
  const blue=(seconds/59)*255;
  document.body.style.backgroundColor=`rgb(${Math.floor(red)},${Math.floor(green)},${Math.floor(blue)})`;
}

setInterval(updateClock, 1000);
updateClock();
