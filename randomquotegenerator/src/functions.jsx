export const RandomNum=()=>Math.floor(Math.random() * 9);
export const ChangingColors=(number1)=>{
   const change=document.querySelectorAll('.ccolor')
   const change2=document.querySelectorAll('.ccolor2')
   const colors=['red','yellow','green','blue','brown','orange','gold','purple','pink']


   change2.forEach(function(changing) {
    changing.style.color = colors[number1];
  });

   change.forEach(function(changing) {
    changing.style.backgroundColor = colors[number1];
  });
}
