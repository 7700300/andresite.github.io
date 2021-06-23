// Alert
var hostname_oil="7700300.github.io/andresite.github.io";
alt_parm=new Array();
alt_parm[0]=localStorage.getItem("BoilerStory");
alt_parm[1]=0;
alt_parm[2]=top.frames["d_pers"].document.getElementById("IMG_rarm").title;
var hand_item="";
var pers_loc1=/(.+)sawmill_mode_3(.+)/.test(document.location.pathname);
var pers_loc2=/(.+)mine_mode_3(.+)/.test(document.location.pathname);
if(pers_loc1) hand_item="Пила плотника";
if(pers_loc2) hand_item="Плавильная печь металлурга";
parent.document.title="apeha";


if(alt_parm[0]==null) {alt_parm[0]=0;}
var cfg_text=""
+"<span style=\"color:black;\">move</spane>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('moveMax').style.color='black';"
+"document.getElementById('moveMoo').style.color='black';"
+"document.getElementById('moveCap').style.color='black';"
+"localStorage['BoilerStory']=0;"
+"alt_parm[0]=0;"
+"\" style=\"color:"+(alt_parm[0]==0?"red":"black")+";cursor:pointer;\" id=\"moveMin\">wait</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('moveMin').style.color='black';"
+"document.getElementById('moveMoo').style.color='black';"
+"document.getElementById('moveCap').style.color='black';"
+"localStorage['BoilerStory']=1;"
+"alt_parm[0]=1;"
+"\" style=\"color:"+(alt_parm[0]==1?"red":"black")+";cursor:pointer;\" id=\"moveMax\">castle</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('moveMin').style.color='black';"
+"document.getElementById('moveMax').style.color='black';"
+"document.getElementById('moveCap').style.color='black';"
+"localStorage['BoilerStory']=2;"
+"alt_parm[0]=2;"
+"\" style=\"color:"+(alt_parm[0]==2?"red":"black")+";cursor:pointer;\" id=\"moveMoo\">home</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('moveMin').style.color='black';"
+"document.getElementById('moveMax').style.color='black';"
+"document.getElementById('moveMoo').style.color='black';"
+"localStorage['BoilerStory']=3;"
+"alt_parm[0]=3;"
+"\" style=\"color:"+(alt_parm[0]==3?"red":"black")+";cursor:pointer;\" id=\"moveCap\">captcha</span><br>";

function asAudio(name) {
top.frames["d_pers"].document.getElementById("as_audio").innerHTML=""
+"<audio autoplay>"
+"<source src=\"https://"+hostname_oil+"/audio/"+name+"\" type=\"audio/mpeg\">"
+"</audio>";
}

var dataBar=Array(0,0);
var bmin=Array(7,0);
var bsec=Array(0,0);
var cmin=Array(7,0);
var csec=Array(0,0);
var tId=Array();

/* TIME CODE */
function openWin(id) { // Финал
if(document.location.pathname=="/mine_mode_1.html") {
document.location="sellres.html";
} else {
if(alt_parm[0]==0 || alt_parm[0]==3 || alt_parm[0]==null) { // move-wait
document.location=document.location;
}
if(alt_parm[0]==1) { // move-castle
document.location="castle_room_1_cid_"+top.frames["d_pers"].MyClan+".html";
}
if(alt_parm[0]==2) { // move-home
document.location="hstoreroom_hid_838_mode_0_type_17_sumka_1.chtml";
}
}}
function startTime(n) { // Start
tId[n]=setTimeout("startTime("+n+")",1000);
if(csec[n]==-1 && cmin[n]==0) { // Финал
openWin(n);
clearTimeout(tId[n]);
cmin[n]=bmin[n];
csec[n]=bsec[n];
eval("cr"+n+"min").innerHTML=cmin[n];
eval("cr"+n+"sec").innerHTML=csec[n];
}
if(csec[n]!=-1 || cmin[n]!=0) {
if(cmin[n]==0) {
if(csec[n]==30) { // && document.location.pathname=="/mine_mode_1.html"
document.location=document.location; // time-correct-reload
}}
if(cmin[n]==5) {
if(csec[n]==1) {
document.location=document.location; // time-correct-reload
}}
if(cmin[n]<10) {
eval("cr"+n+"min").innerHTML="0"+cmin[n];
} else {
eval("cr"+n+"min").innerHTML=cmin[n];
}
if(csec[n]<10) {
eval("cr"+n+"sec").innerHTML="0"+csec[n];
}
else {
eval("cr"+n+"sec").innerHTML=csec[n];
}
				
if(csec[n]==0 && cmin[n]!=0) {
cmin[n]--;
csec[n]=60;
}
csec[n]--;
}
}
function stopTime(n) { // Stop
clearTimeout(tId[n]);
cmin[n]=bmin[n];
csec[n]=bsec[n];
eval("cr"+n+"min").innerHTML=bmin[n];
eval("cr"+n+"sec").innerHTML=bsec[n];
if(bsec[n]==0) eval("cr"+n+"sec").innerHTML+="0";
// eval("in"+n).innerHTML="<input type=button onClick=\"startTime("+n+")\" value=START>";
}
/* TIME CODE END */
<!----------------------------------------------------->
<!------- START OF THE CODE BoilerAutoReload   -------->
<!----------------------------------------------------->
function WarningLight(c,txt) {
var element=document.getElementsByTagName("b")[document.getElementsByTagName("b").length-1];
var text=document.createElement("span");
text.id="status";
text.style.background=c;
text.innerHTML=""+txt+" ";
element.parentNode.insertBefore(text, element);
}
var tm = function() { // таймер mine_mode_3.html
document.location=document.location;
}

function new_actReload(obj) {
if(!window.refreshed) {
window.refreshed=true;
obj.style.backgroundColor="yellow";
document.location=document.location;
}
}
<!----------------------------------------------------->
<!------- START OF THE CODE BoilerAutoReload   -------->
<!----------------------------------------------------->
function BoilerAutoReload() {
var str=document.body.innerHTML;
var myRe=/:<\/b> (\d+)(ч|мин| сек)/;
var myArray=myRe.exec(str);
for(var i=0; i<document.body.getElementsByTagName("b").length; i++) {
if(document.body.getElementsByTagName("b")[i].innerHTML=="Осталось от текущей работы:") {
document.getElementsByTagName("b")[i].innerHTML=document.getElementsByTagName("b")[i].innerHTML.replace("Осталось от текущей работы:", "<span id=cr0min>00</span>:<span id=cr0sec>00</span><span id=loc_ddm_tm></span> of");
break;
}
if(document.body.getElementsByTagName("b")[i].innerHTML=="Вы устали. Осталось отдыхать:") {
document.getElementsByTagName("b")[i].innerHTML=document.getElementsByTagName("b")[i].innerHTML.replace("Вы устали. Осталось отдыхать:", "<span id=cr0min>00</span>:<span id=cr0sec>00</span><span id=loc_ddm_tm></span> of");
break;
}
}
try {
if(myArray[2]=="ч") {
var tm_parm=/(\d+)мин/.test(str);
if(tm_parm && top.frames["d_pers"].document.getElementById("ddm_tm") && alt_parm[0]<3) { // ddm-tm-a
var myRe1=/(\d+)мин/;
var myArray1=myRe1.exec(str);
top.frames["d_pers"].bmin[2]=60*myArray[1]+parseInt(myArray1[1],10);
top.frames["d_pers"].cmin[2]=60*myArray[1]+parseInt(myArray1[1],10);
top.frames["d_pers"].bsec[2]=0;
top.frames["d_pers"].csec[2]=0;
top.frames["d_pers"].stopTime(2);
top.frames["d_pers"].startTime(2);
} else if(top.frames["d_pers"].document.getElementById("ddm_tm") && alt_parm[0]<3) {
top.frames["d_pers"].bmin[2]=60*myArray[1];
top.frames["d_pers"].cmin[2]=60*myArray[1];
top.frames["d_pers"].bsec[2]=0;
top.frames["d_pers"].csec[2]=0;
top.frames["d_pers"].stopTime(2);
top.frames["d_pers"].startTime(2);
} // end-ddm-tm-a
bmin[0]=60;
cmin[0]=60;
bsec[0]=0;
csec[0]=0;
}
if(myArray[2]=="мин") {
if(top.frames["d_pers"].document.getElementById("ddm_tm") && alt_parm[0]<3) { // ddm-tm-b
top.frames["d_pers"].document.getElementById("status2").innerHTML="";
top.frames["d_pers"].bmin[2]=myArray[1];
top.frames["d_pers"].cmin[2]=myArray[1];
top.frames["d_pers"].bsec[2]=0;
top.frames["d_pers"].csec[2]=0;
top.frames["d_pers"].stopTime(2);
top.frames["d_pers"].startTime(2);
} // ddm-tm-b
bmin[0]=myArray[1];
cmin[0]=myArray[1];
bsec[0]=0;
csec[0]=0;
}
if(myArray[2]==" сек") {
bmin[0]=0;
cmin[0]=0;
bsec[0]=myArray[1];
csec[0]=myArray[1];
}
} catch(e) {}
if(document.getElementById("loc_ddm_tm")) startTime(0);
}

if(document.location.pathname!="/mine_mode_1.html" &&
   document.location.pathname!="/sellres.html" &&
   !document.getElementById("logs")) {
for(j=0; j<document.getElementsByTagName("button").length; j++) {
if(document.getElementsByTagName("button")[j].title=="Обновить") {
document.getElementsByTagName("button")[j].style.backgroundColor="white";
document.getElementsByTagName("button")[j].onclick = function() {
new_actReload(this);
};
}}
WarningLight("white","<span style=color:red;>Wait</span><br>");
document.getElementById("status").innerHTML=cfg_text;
var breq=document.body.innerHTML;
var reg=new RegExp("Осталось от","g");
var rarmReg=new RegExp(hand_item,"g");
if(!reg.test(breq)) {
for(i=0; i<document.getElementsByTagName("input").length; i++) {
if(document.getElementsByTagName("input")[i].value=="Приступить") {
document.getElementsByTagName("input")[i].style.backgroundColor="white";
document.getElementsByTagName("input")[i].type="button";
document.getElementsByTagName("input")[i].id="btn_captcha";
document.getElementsByTagName("input")[i].onclick = function() {
document.forms[0].code.value=document.forms[0].code.value.replace(/(o|O)/gi, '0');
parent.document.title='apeha';
asAudio('pay_captcha.mp3');
document.forms[0].submit();
};
alt_parm[1]=1;
}}
for(var i=0; i<document.body.getElementsByTagName("img").length; i++) {
if(document.body.getElementsByTagName("img")[i].width==90) {
document.body.getElementsByTagName("img")[i].width=180;
document.body.getElementsByTagName("img")[i].height=60;
document.forms[0].code.style.width="120px";
document.forms[0].code.style.height="60px";
document.forms[0].code.style.fontSize="28pt";
document.forms[0].code.style.backgroundColor="white";
document.forms[0].code.focus();
document.forms[0].code.onkeyup = function() {
parent.document.title='apeha';
if(this.value.length<4) {
document.forms[0].code.style.backgroundColor='yellow';
}
if(this.value.length==4) {
document.forms[0].code.style.backgroundColor='lime';
document.getElementById('btn_captcha').click();
}
};
if(pers_loc1 && alt_parm[0]==3 && alt_parm[1]==1 && rarmReg.test(alt_parm[2]) ||
   pers_loc2 && alt_parm[0]==3 && alt_parm[1]==1 && rarmReg.test(alt_parm[2])) parent.document.title="apeha-ready";
}}
document.getElementById("status").style.background="white";
document.getElementById("status").innerHTML="<span style=color:gold;>Enter</span><br>";
document.getElementById("status").innerHTML=cfg_text;
var element=document.getElementById("status"); // Add-audio
var text=document.createElement("span");
text.innerHTML=""
+"<audio autoplay>"
+"<source src=\"https://"+hostname_oil+"/audio/bleep.mp3\" type=\"audio/mpeg\">"
+"</audio>";
element.parentNode.insertBefore(text, element);
}
var breq=document.body.innerHTML;
var reg=new RegExp("Осталось от","g");
if(reg.test(breq)) {
if(alt_parm[0]==3) parent.document.title="apeha-wait";
BoilerAutoReload();
} else {
setTimeout("asAudio('tso_bwaaah.mp3');",60000);
}
}

if(document.location.pathname=="/mine_mode_1.html" &&
   !document.getElementById("logs")) { // BUY
WarningLight("white","<span style=color:black;>BUY</span>");
var breq=document.body.innerHTML;
var reg=new RegExp('Осталось','g');
if(!reg.test(breq)) {
for(i=0; i<document.getElementsByTagName("input").length; i++) {
if(document.getElementsByTagName("input")[i].value=="Приступить") {
document.getElementsByTagName("input")[i].style.backgroundColor="white";
document.getElementsByTagName("input")[i].type="button";
document.getElementsByTagName("input")[i].onclick = function() {
document.forms[0].code.value=document.forms[0].code.value.replace(/(o|O)/gi, '0');
parent.document.title='apeha';
asAudio('pay_captcha.mp3');
document.forms[0].submit();
};
alt_parm[1]=1;
}}
for(var i=0; i<document.body.getElementsByTagName("img").length; i++) {
if(document.body.getElementsByTagName("img")[i].width==90) {
document.body.getElementsByTagName("img")[i].width=180;
document.body.getElementsByTagName("img")[i].height=60;
document.forms[0].code.style.width="120px";
document.forms[0].code.style.height="60px";
document.forms[0].code.style.fontSize="28pt";
document.forms[0].code.style.backgroundColor="white";
document.forms[0].code.focus();
}}
document.getElementById("status").style.background="white";
document.getElementById("status").innerHTML="<span style=color:black;>ENTER</span><br>";
document.getElementById("status").innerHTML=cfg_text;
var element=document.getElementById("status"); // Add-audio
var text=document.createElement("span");
text.innerHTML=""
+"<audio autoplay>"
+"<source src=\"https://"+hostname_oil+"/audio/success.mp3\" type=\"audio/mpeg\">"
+"</audio>";
element.parentNode.insertBefore(text, element);
setTimeout(tm,180000);
}
var breq=document.body.innerHTML;
var reg=new RegExp('Осталось','g');
if(reg.test(breq) && document.forms.length!=0) {
document.getElementById("status").innerHTML="<span style=color:red;>END-SELL</span>";
BoilerAutoReload();
}
var breq=document.body.innerHTML;
var reg=new RegExp('Осталось','g');
if(reg.test(breq) && document.forms.length==0) {
document.getElementById("status").innerHTML="<span style=color:red;>WAIT</span>";
BoilerAutoReload();
}
}

if(document.location.pathname=="/sellres.html") { // SELL
if(document.forms.length!=0) {
document.forms[0].submit();
}
if(document.forms.length==0) {
document.location="mine_mode_1.html";
}
}