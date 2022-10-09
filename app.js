var billamount=document.querySelector("#bill-amount");
var cashamount=document.querySelector("#cash-given");
var checkbbutton=document.querySelector("#buto");
var texto=document.querySelector("#error");
const note=[2000,500,100,20,10,5,1];
var notesnum=document.querySelectorAll(".no-of-notes")


function calculate(ar){
for(let i=0;i<note.length;i++)
{
    {
var noteesofeach=Math.trunc(ar/note[i]);
    ar=ar%note[i];
notesnum[i].innerText=noteesofeach;
}

}}
checkbbutton.addEventListener("click",function validatebillamount()
{
    texto.style.display="none";
  if(billamount.value>0)
{ 
    if(Number(cashamount.value)>Number(billamount.value))
    {
      const amountreturned=cashamount.value-billamount.value;
      calculate(amountreturned)
    }
    else{
        texto.style.display="block";
        texto.innerText="Bhai bartan dhulega kya";
    }
    }
else
{
    texto.style.display="block";
texto.innerText="Invalid bill amount";

}
})