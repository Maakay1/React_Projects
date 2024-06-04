import React, { useState, useEffect } from 'react';


const MyCalculator=()=>{
   const  [write, setWrite]=useState([]);
    const  [upper,setUpper]=useState('')
    const  [ans,setAns]=useState([])
    const [comma, setComma]=useState(0)
  

   const ButtonOnClick=(btnClicked)=>{
    
     var index=0; 
       
       if(write.length<23){
         if (btnClicked=='C'){
          setWrite([])
          setAns([])
          setUpper([''])
       
         }
        
        else if(write.length==0 && (btnClicked=='x' || btnClicked=='÷' || btnClicked=='+' || btnClicked=='=')){
            setWrite([...write])
        }
        else if(write.length==0 && btnClicked=='-'){
          setWrite([...write,btnClicked])
          setAns([...ans,btnClicked])
          setNegative(1)
        }
        else if( write[0]=='-' && write.length==1 && (btnClicked=='-' || btnClicked=='x' || btnClicked=='÷' || btnClicked=='+' || btnClicked=='=')){
          setWrite([...write])
          setAns([...ans])
        }
        else if(btnClicked=='=' && write.length!=0){
           try{
             const Value=ans.join('')
             const myanswer= eval(Value)
             setUpper(myanswer)
           }catch(error){
               setUpper('Undefined')
           }
          
        }
       
        else if(btnClicked=='.' )
        {
             
             if((write.length==0 && btnClicked=='.') ){
                setWrite([...write])
             }
             else if(!comma){
                setWrite([...write,btnClicked])
                setAns([...ans,btnClicked])
                setComma(1)
              
             }
        }
        else if ((btnClicked=='+' || btnClicked=='x' || btnClicked=='-' || btnClicked=='÷' )&& write[write.length-1]==btnClicked){
          setWrite([...write])
        }
        else if((write[write.length-1]=='-' && (write[write.length-2]=='x' || write[write.length-2]=='+' || write[write.length-2]=='÷')) && (btnClicked=='x' || btnClicked=='+' || btnClicked=='÷') ){
          setWrite([...write])
        }
        else if((write[write.length-1]=='-' || write[write.length-1]=='x' || write[write.length-1]=='+' || write[write.length-1]=='÷') &&(btnClicked=='x' || btnClicked=='+' || btnClicked=='÷')){
            const temp=[...write];
            const temp2=[...ans]
          if(btnClicked=='x'){
            temp[temp.length-1]=btnClicked
            setWrite([...temp])
            temp2[temp2.length-1]='*'
            setAns([...temp2])
          }
           else if(btnClicked=='÷'){
             temp[temp.length-1]=btnClicked
             setWrite([...temp])
             temp2[temp2.length-1]='/'
             setAns([...temp2])
          }
          else{
            temp[temp.length-1]=btnClicked
            setWrite(temp)
            setAns(temp)
          }
        }
       
        else if(btnClicked!='DEL'){
         
        
          if((write[0]==0 && btnClicked==0 ))
          {
            setWrite([...write])
          
          }
          
          else if(btnClicked=='x'){
             setWrite([...write,btnClicked])
             setAns([...ans,'*'])
          }
           else if(btnClicked=='÷'){
             setWrite([...write,btnClicked])
             setAns([...ans,'/'])
          }
          else{
            
            setWrite([...write,btnClicked]);
            setAns([...ans,btnClicked]);
          }

        }
     
        
       }
        if(btnClicked=='+' || btnClicked=='x' || btnClicked=='-' || btnClicked=='÷'){
           setComma(0)
        }
        if(btnClicked=='DEL')
        {
          
        if(write[write.length-1]=='-' || write[write.length-1]=='x' || write[write.length-1]=='+' || write[write.length-1]=='÷'){
         const temp=write.splice(0,write.length-1) 
         const temp2=ans.splice(0,ans.length-1) 
         setWrite(temp)
         setAns(temp2)
         setComma(1)
        }
        else if(write[write.length-1]=='.'){
        const temp=write.splice(0,write.length-1) 
         const temp2=ans.splice(0,ans.length-1) 
         setWrite(temp)
         setAns(temp2)
         setComma(0)
        }
         else{
         const temp=write.splice(0,write.length-1) 
         const temp2=ans.splice(0,ans.length-1) 
         setWrite(temp)
         setAns(temp2)
         
         }

        }
     
  }
       
    return(
     
      <body>
          <div className='calculator'>
          <div className='screen-container' id='display'>
            <div className='screen1'>
              <div  className='write2'>{upper}</div>
            </div>
            <div  className='screen2' >
            <div  className='write'>{write.join('')}</div>
            </div>
          </div>
          <div className='buttons-screen'>
             <button onClick={()=>ButtonOnClick('C')} id='clear' className='button-cover span2 clear'>C</button>
             <button onClick={()=>ButtonOnClick('DEL')} id='delete' className='button-cover'>DEL</button>
             <button onClick={()=>ButtonOnClick('÷')} id='divide' className='button-cover'>÷</button>
             <button onClick={()=>ButtonOnClick('7')} id='seven' className='button-cover'>7</button>
             <button onClick={()=>ButtonOnClick('8')} id='eight' className='button-cover'>8</button>
             <button onClick={()=>ButtonOnClick('9')} id='nine' className='button-cover'>9</button>
             <button onClick={()=>ButtonOnClick('x')} id='multiply' className='button-cover'>x</button>
             <button onClick={()=>ButtonOnClick('4')} id='four' className='button-cover'>4</button>
             <button onClick={()=>ButtonOnClick('5')} id='five' className='button-cover'>5</button>
             <button onClick={()=>ButtonOnClick('6')} id='six' className='button-cover'>6</button>
             <button onClick={()=>ButtonOnClick('-')} id='subtract' className='button-cover'>-</button>
             <button onClick={()=>ButtonOnClick('1')} id='one' className='button-cover'>1</button>
             <button onClick={()=>ButtonOnClick('2')} id='two' className='button-cover'>2</button>
             <button onClick={()=>ButtonOnClick('3')} id='three' className='button-cover'>3</button>
             <button onClick={()=>ButtonOnClick('+')} id='add' className='button-cover'>+</button>
             <button  id='nothing' className='button-cover'></button>
             <button onClick={()=>ButtonOnClick('0')} id='zero' className='button-cover'>0</button>
             <button onClick={()=>ButtonOnClick('.')} id='decimal' className='button-cover'>.</button>
             <button onClick={()=>ButtonOnClick('=')} id='equals' className='button-cover equals'>=</button>
          </div>
          <p>by Kevin Maakomane</p>
        </div>
      </body>
    
    )
}



export default MyCalculator;