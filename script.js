function clock(){
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if(m < 10) m = "0"+m;
  if(s < 10) s = "0"+s;
  document.getElementById("clock").innerHTML = `${h}:${m}:${s}`
}

function init(){
  console.log("initialized!")
  setInterval(clock, 1000);
}

function hide_beta(){
  document.getElementById("aa_notice").style.display = "none";
}