const url=new URLSearchParams(location.search);const age=url.get("age")||"young";
const young=[
{q:"Which do you love most?",o:["🎨 Drawing / Colouring","🎵 Singing / Music","♟️ Puzzles / Chess","⚽ Running / Sport"],s:["art","music","chess","sport"]},
{q:"Pick a fun job:",o:["🎨 Artist","🎤 Singer","🧠 Chess Player","🏃 Athlete"],s:["art","music","chess","sport"]},
{q:"At break time you:",o:["Draw pictures","Sing songs","Play board games","Play ball"],s:["art","music","chess","sport"]},
{q:"Pick a toy:",o:["🖍️ Crayons","🥁 Drum","🧩 Puzzle","⚽ Ball"],s:["art","music","chess","sport"]},
{q:"You are happy when:",o:["You make something pretty","You hear music","You solve a hard puzzle","You win a race"],s:["art","music","chess","sport"]}];
const older=[
{q:"You have free time. You choose:",o:["Draw / Design / Build","Make music / Sing / Dance","Chess / Strategy / Coding","Sport / Compete"],s:["art","music","chess","sport"]},
{q:"At school, your best subject is:",o:["Art / Life Skills","Music / Drama","Maths / Puzzles","PE / Sport"],s:["art","music","chess","sport"]},
{q:"Friends ask you for help with:",o:["Making posters / Crafts","Songs / Performances","Solving problems","Sports / Games"],s:["art","music","chess","sport"]},
{q:"Pick a club:",o:["Art Club","Choir / Band","Chess / Coding Club","Soccer / Athletics"],s:["art","music","chess","sport"]},
{q:"Your dream job:",o:["Designer / Artist","Musician / Performer","Chess / Coder / Thinker","Pro Athlete / Coach"],s:["art","music","chess","sport"]},
{q:"You feel proud when:",o:["People love what you made","People clap for you","You beat a hard level","You win a match"],s:["art","music","chess","sport"]}];
const Q=age==="older"?older:young;let i=0;let scores={art:0,music:0,chess:0,sport:0};let kid="";
function startQuiz(){kid=document.getElementById("kidName").value.trim()||"Superstar";document.getElementById("setup").style.display="none";document.getElementById("quiz").style.display="block";showQ();}
function showQ(){let q=Q[i];document.getElementById("progress").innerHTML="Question "+(i+1)+" of "+Q.length+" - "+kid;document.getElementById("barFill").style.width=((i)/Q.length*100)+"%";document.getElementById("qText").innerText=q.q;let h="";q.o.forEach((t,x)=>{h+="<button onclick='ans("+x+")'>"+t+"</button>";});document.getElementById("opts").innerHTML=h;}
function ans(x){scores[Q[i].s[x]]++;i++;if(i<Q.length){showQ();}else{let top=Object.keys(scores).sort((a,b)=>scores[b]-scores[a])[0];location.href="result.html?name="+encodeURIComponent(kid)+"&gift="+top+"&age="+age;}}
