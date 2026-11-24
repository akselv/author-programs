// JavaScript Document

function addTexeditbox() {
  olist = document.getElementById('wrapper');
  op = document.createElement('p');
  op.innerHTML = '<hr /><br />';
  ocontent = document.getElementById('edittext');
  ocontent.appendChild(op);
  olist.scrollTop = olist.scrollHeight;
}

// JavaScript Document


<!-- Original:  Michael Hundt (mchundt@nglic.com) -->
<!-- Web Site:  http://www.cinet.net/~mhundt/mystuff.htm -->
<!-- Modified by:  Ronnie T. Moore (JavaScript Source) -->

<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://www.javascriptsource.com -->

<!-- Begin
function doArea(num) {
switch(num) {
case 0 : return (""); break;
case 1 : var length = prompt("Please enter the length of your square:", "");
         length = length * length;
         return (length); break;
case 2 : var width = prompt("Please enter the width of the base:", "");
         var height = prompt("Please enter the height of the triangle:", "");
         return (width * height / 2); break;
case 3 : var width = prompt("Please enter the width of your rectangle:", "");
         var height = prompt("Please enter the height of your rectangle:", "");
         return (width * height); break;
case 4 : var radius = prompt("Please enter the radius of the circle: ", "");
         return (Math.PI * Math.pow(radius, 2)); break;
case 5 : var radius = prompt("Please enter the radious of the sphere:", 0);
         return (4 * Math.PI * (Math.pow(radius, 2))); break;
   }
}
        function clearFileInputField(Id)
        {
            document.getElementById(Id).innerHTML = document.getElementById(Id).innerHTML;
        }
	

function saveEdits() {

var editElem = document.getElementById("edittext");

var userVersion = editElem.innerHTML;

localStorage.userEdits = userVersion;

document.getElementById("update").innerHTML="Saved!";

}
function checkEdits() {

if(localStorage.userEdits!=null)
	document.getElementById("edittext").innerHTML=localStorage.userEdits;
}
var editElem = document.getElementById("edittext");
editElem.contentEditable="false";

function sendValueInInput()
{
    a = document.getElementById('sumtotal1');
    b = document.getElementById('sum_all');
    a.value = b.innerText;
}

function addIta() {
var value1 = parseInt(document.getElementById("price_401").value); 
var value2 = parseInt(document.getElementById("price_501").value);  
document.getElementById("price_301").value = value1 + value2;
}
function addItb() {
var value3 = parseInt(document.getElementById("price_402").value);  
var value4 = parseInt(document.getElementById("price_502").value); 
document.getElementById("price_302").value = value3 + value4;
}
function addItc() {
var value5 = parseInt(document.getElementById("price_403").value); 
var value6 = parseInt(document.getElementById("price_503").value); 
document.getElementById("price_303").value = value5 + value6;
}
function addItd() {
var value7 = parseInt(document.getElementById("price_404").value);  
var value8 = parseInt(document.getElementById("price_504").value); 
document.getElementById("price_304").value = value7 + value8;
}
function addIte() {
var value9 = parseInt(document.getElementById("price_405").value);  
var value10 = parseInt(document.getElementById("price_505").value); 
document.getElementById("price_305").value = value9 + value10;
}
function addItf() {
var value11 = parseInt(document.getElementById("price_406").value); 
var value12 = parseInt(document.getElementById("price_506").value); 
document.getElementById("price_306").value = value11 + value12;
}
function addItg() {
var value13 = parseInt(document.getElementById("price_407").value);  
var value14 = parseInt(document.getElementById("price_507").value);  
document.getElementById("price_307").value = value13 + value14;
}
function addIth() {
var value15 = parseInt(document.getElementById("price_408").value);  
var value16 = parseInt(document.getElementById("price_508").value); 
document.getElementById("price_308").value = value15 + value16;
}
function addIti() {
var value17 = parseInt(document.getElementById("price_409").value);  
var value18 = parseInt(document.getElementById("price_509").value);  
document.getElementById("price_309").value = value17 + value18;
}
function addItj() {
var value19 = parseInt(document.getElementById("price_410").value);  
var value20 = parseInt(document.getElementById("price_510").value);  
document.getElementById("price_310").value = value19 + value20;
}
function addItsub() {
var value21 = parseInt(document.getElementById("price_311").value);  
var value22 = parseInt(document.getElementById("sum_all").value); 
document.getElementById("sub").value = value21 + value22;
}

function calculate11a_total11a(className, textArea){
var elements = document.getElementsByClassName(className);
var total11a = 0;
for(var i = 0; i < elements.length; ++i){
total11a += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Total11a: " + total11a;
document.getElementById('sumtotal11').value = total11a;
 return false;
}
function calculatea_totala(className, textArea){
var elements = document.getElementsByClassName(className);
var totala = 0;
for(var i = 0; i < elements.length; ++i){
totala += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totala: " + totala;
document.getElementById('price_1').value = totala; 
 return false;
}
function calculateb_totalb(className, textArea){
var elements = document.getElementsByClassName(className);
var totalb = 0;
for(var i = 0; i < elements.length; ++i){
totalb += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalb: " + totalb;
document.getElementById('price_2').value = totalb; 
 return false;
}
function calculatec_totalc(className, textArea){
var elements = document.getElementsByClassName(className);
var totalc = 0;
for(var i = 0; i < elements.length; ++i){
totalc += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalc: " + totalc;
document.getElementById('price_3').value = totalc; 
 return false;
}
function calculated_totald(className, textArea){
var elements = document.getElementsByClassName(className);
var totald = 0;
for(var i = 0; i < elements.length; ++i){
totald += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totald: " + totald;
document.getElementById('price_4').value = totald; 
 return false;
}
function calculatee_totale(className, textArea){
var elements = document.getElementsByClassName(className);
var totale = 0;
for(var i = 0; i < elements.length; ++i){
totale += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totale: " + totale;
document.getElementById('price_5').value = totale; 
 return false;
}
function calculatef_totalf(className, textArea){
var elements = document.getElementsByClassName(className);
var totalf = 0;
for(var i = 0; i < elements.length; ++i){
totalf += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalf: " + totalf;
document.getElementById('price_6').value = totalf; 
 return false;
}
function calculateg_totalg(className, textArea){
var elements = document.getElementsByClassName(className);
var totalg = 0;
for(var i = 0; i < elements.length; ++i){
totalg += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalg: " + totalg;
document.getElementById('price_7').value = totalg; 
 return false;
}
function calculateh_totalh(className, textArea){
var elements = document.getElementsByClassName(className);
var totalh = 0;
for(var i = 0; i < elements.length; ++i){
totalh += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalh: " + totalh;
document.getElementById('price_8').value = totalh; 
 return false;
}
function calculatei_totali(className, textArea){
var elements = document.getElementsByClassName(className);
var totali = 0;
for(var i = 0; i < elements.length; ++i){
totali += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totali: " + totali;
document.getElementById('price_9').value = totali; 
 return false;
}
function calculatej_totalj(className, textArea){
var elements = document.getElementsByClassName(className);
var totalj = 0;
for(var i = 0; i < elements.length; ++i){
totalj += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalj: " + totalj;
document.getElementById('price_10').value = totalj; 
 return false;
}
function calculatea_totala(className, textArea){
var elements = document.getElementsByClassName(className);
var totala = 0;
for(var i = 0; i < elements.length; ++i){
totala += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totala: " + totala;
document.getElementById('price_501').value = totala; 
 return false;
}
function calculateb_totalb(className, textArea){
var elements = document.getElementsByClassName(className);
var totalb = 0;
for(var i = 0; i < elements.length; ++i){
totalb += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalb: " + totalb;
document.getElementById('price_502').value = totalb; 
 return false;
}
function calculatec_totalc(className, textArea){
var elements = document.getElementsByClassName(className);
var totalc = 0;
for(var i = 0; i < elements.length; ++i){
totalc += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalc: " + totalc;
document.getElementById('price_503').value = totalc; 
 return false;
}
function calculated_totald(className, textArea){
var elements = document.getElementsByClassName(className);
var totald = 0;
for(var i = 0; i < elements.length; ++i){
totald += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totald: " + totald;
document.getElementById('price_504').value = totald; 
 return false;
}
function calculatee_totale(className, textArea){
var elements = document.getElementsByClassName(className);
var totale = 0;
for(var i = 0; i < elements.length; ++i){
totale += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totale: " + totale;
document.getElementById('price_505').value = totale; 
 return false;
}
function calculatef_totalf(className, textArea){
var elements = document.getElementsByClassName(className);
var totalf = 0;
for(var i = 0; i < elements.length; ++i){
totalf += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalf: " + totalf;
document.getElementById('price_506').value = totalf; 
 return false;
}
function calculateg_totalg(className, textArea){
var elements = document.getElementsByClassName(className);
var totalg = 0;
for(var i = 0; i < elements.length; ++i){
totalg += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalg: " + totalg;
document.getElementById('price_507').value = totalg; 
 return false;
}
function calculateh_totalh(className, textArea){
var elements = document.getElementsByClassName(className);
var totalh = 0;
for(var i = 0; i < elements.length; ++i){
totalh += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalh: " + totalh;
document.getElementById('price_508').value = totalh; 
 return false;
}
function calculatei_totali(className, textArea){
var elements = document.getElementsByClassName(className);
var totali = 0;
for(var i = 0; i < elements.length; ++i){
totali += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totali: " + totali;
document.getElementById('price_509').value = totali; 
 return false;
}
function calculatej_totalj(className, textArea){
var elements = document.getElementsByClassName(className);
var totalj = 0;
for(var i = 0; i < elements.length; ++i){
totalj += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalj: " + totalj;
document.getElementById('price_510').value = totalj; 
 return false;
}
function addItotalmanual() {
var value111 = parseInt(document.getElementById("price_401").value); 
var value211 = parseInt(document.getElementById("price_402").value);
var value311 = parseInt(document.getElementById("price_403").value); 
var value411 = parseInt(document.getElementById("price_404").value); 
var value511 = parseInt(document.getElementById("price_405").value); 
var value611 = parseInt(document.getElementById("price_406").value);
var value711 = parseInt(document.getElementById("price_407").value);  
var value811 = parseInt(document.getElementById("price_408").value); 
var value911 = parseInt(document.getElementById("price_409").value);
var value101 = parseInt(document.getElementById("price_410").value); 
document.getElementById("price_311").value = value111 + value211 +value311 +value411 +value511 +value611 +value711 +value811 +value911 +value101;
}
function calculatel_totall(className, textArea){
var elements = document.getElementsByClassName(className);
var totall = 0;
for(var i = 0; i < elements.length; ++i){
totall += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totall: " + totall;
document.getElementById('ans1').value = totall;
 return false;
}
function calculatem_totalm(className, textArea){
var elements = document.getElementsByClassName(className);
var totalm = 0;
for(var i = 0; i < elements.length; ++i){
totalm += parseInt(elements[i].value);
}
document.getElementById(textArea).value = "Totalm: " + totalm;
document.getElementById('ans2').value = totalm;
 return false;
}
		function check_form(line)
	{
		summa=document.getElementById('kolvo_'+line).value*document.getElementById('price_'+line).value;
		document.getElementById('sum_'+line).value=summa;
		document.getElementById('sum_'+line+'_show').innerHTML=summa;
		check_sum_all();
	}
	function check_sum_all()
	{
		var sum_all=0;
		for(i=1; i<=201; i++) {
			sum_all=parseInt(sum_all)+parseInt(document.getElementById('sum_'+i).value);
		}
		document.getElementById('sum_all').innerHTML=sum_all + '';
		document.getElementById('sum_all').value=sum_all + '';
		document.getElementById('sum_nds').innerHTML='&#1074; &#1090;.&#1095;. &#1053;&#1044;&#1057;: '+Math.round(100*sum_all/118*18)/100;
	}
	                                       
 
function checked(divs, box) {

    var obj = document.getElementById(box);
    if (obj.value == 1) ground = "url('image/icons/menyu1.png') no-repeat";
    else ground = "url('image/icons/menyu2.png') no-repeat";

    document.getElementById(divs).style.background = ground;
    obj.value = Math.abs(obj.value == 0);

}
function ShowHide(id) {
    obj = document.getElementsByTagName("div");
    if (obj[id].style.visibility == 'visible') {
        obj[id].style.visibility = 'hidden';
        obj[id].style.height = '0px';
    } else {
        obj[id].style.visibility = 'visible';
        obj[id].style.height = 'auto';
    }
}

function printit() {
    window.print();
}

function MM_openBrWindow(theURL, winName, features) { //v2.0
    window.open(theURL, winName, features);
}


var oDoc, sDefTxt;

function formatDoc(sCmd, sValue) {
    if (validateMode()) {
        document.execCommand(sCmd, false, sValue);
        oDoc.focus();
    }
}

function validateMode() {
    if (!document.form55.checked) {
        return true;
    }

}

function changeText0() {
    var rezultat = 1;
    rezultat *= parseFloat(document.getElementById('a').value);
    rezultat *= parseFloat(document.getElementById('b').value);
    document.getElementById('rezultat').innerHTML = rezultat;
}


function changeText() {
    var rezultat1 = 0;
    var odin = document.getElementById('odin').value;
    var spisok = document.getElementById('spisok').options[document.getElementById('spisok').selectedIndex].value;
    rezultat1 = parseFloat(odin);
    rezultat1 *= parseFloat(spisok);
    document.getElementById('rezultat1').innerHTML = rezultat1;
}

