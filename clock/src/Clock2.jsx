import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";




const Myclock=()=>{
     const [mybreak,setBreak]=useState(5)
     const [session,setSession]=useState(25)
     const [currentstate, setState]=useState(1)
     const [playing, setPlay]=useState(0)
     const [mytime,setTime]=useState([25,60])

     const Reset=()=>{
        setBreak(5)
        setSession(25)
        setTime([25,60])
        setPlay(0)
        setState(1)
       
     }
    const DecrementClick=(Btnpressed)=>{
      if(!playing){
        switch(Btnpressed){
        case 'break-decrement':
            if(mybreak>1 && currentstate) setBreak(mybreak-1)
            else if(!currentstate && mytime[0]>1){
                setTime([mytime[0]-1,mytime[1]])
                setBreak(mybreak-1)
            }
            break;
        case 'session-decrement':
            if(mytime[0]>1 || session>1){
                setTime([mytime[0]-1,mytime[1]])
                setSession(session-1)
            }
            break;
      }
      }
    }
     const IncrementClick=(Btnpressed)=>{
        if(!playing){
            switch(Btnpressed){
        case 'break-increment':
            if(mybreak<60 && currentstate) setBreak(mybreak+1)
             if(mybreak<60 && !currentstate){
                 setTime([mytime[0]+1,mytime[1]])
                 setBreak(mybreak+1)
             } 
            break;
        case 'session-increment':
            if(mytime[0]<60 || session<60){
                setTime([mytime[0]+1,mytime[1]])
                setSession(session+1)
            }
            break;
      }
        }
    }
     
  
        const MyCounter=(id)=>{
            setPlay(!playing)
        }
       useEffect(()=>{
         
          if(playing){
           if(mytime[1]==60){
            setTime([mytime[0]-1,59])
           }
           else if(mytime[0]==0 && mytime[1]==0){
              const myaudio2= document.getElementById('beep')
              myaudio2.play()
             if(currentstate){
                setState(!currentstate)
                setTime([mybreak,60])

             }
             else{
                setState(!currentstate)
                setTime([session,60])
             }

              
           }
          
        
           else{
             const mytimer=setInterval(()=>{
               if(mytime[1]==0){
                setTime([mytime[0]-1,59])
               }
               else {
                setTime([mytime[0],mytime[1]-1])
               }
            },1000)
          
            return ()=>clearInterval(mytimer)
           
           }
         }
         

        
       })
                 
    return (
        <body>
           <div>
            <h2>25+5 Clock</h2>
            
           </div>
           <div className="timer-top">
            <div className="break">
                <h3 id="break-label">Break Length</h3>
                <div className="top-controls">
                    <button id="break-decrement" onClick={()=>DecrementClick('break-decrement')} className="top-icon"><FaArrowDown className="myicon"/></button>
                    <h3 className="top-icon break2">{mybreak}</h3>
                    <button  id="break-increment" className="top-icon" onClick={()=>IncrementClick('break-increment')}><FaArrowUp className="myicon"/></button>
                </div>
            </div>
            <div className="session">
                <h3 id="session-label">Session Length</h3>
                <div className="top-controls ">
                    <button id="session-decrement" className="top-icon" onClick={()=>DecrementClick('session-decrement')}><FaArrowDown className="myicon" /></button>
                    <h3 className="top-icon break2">{session}</h3>
                    <button id="session-increment" className="top-icon"  onClick={()=>IncrementClick('session-increment')}><FaArrowUp className="myicon"/></button>
                </div>
            </div>
           </div>
           <div className="display">
            <div className="box">
                <h3>{currentstate?"Session":"Break"}</h3>
                <h1 id="time-left">{mytime[0]<10?'0'+mytime[0]:mytime[0]}:{mytime[1]==60?'00':mytime[1]<10?'0'+mytime[1]:mytime[1]}</h1> 
                <div className="controls">
                   <button className="bottom-icon" id="start-stop" onClick={()=>MyCounter(playing)}>{playing?<FaPause className="myicon pause"/>:<FaPlay className="myicon play"/>}</button>
                   <button className="bottom-icon" id="reset" onClick={()=>Reset()}><MdRestartAlt className="myicon"/></button>
                </div>
            </div>
           </div>
           <p>by <span>Kevin Maakomane</span></p>
           <audio src="https://www.kozco.com/tech/piano2-Audacity1.2.5.mp3" id="beep"/>
        </body>
    )
}

{/* mytime[0]}:{mytime[1]==60 || mytime[1]==0?'00':mytime[1]*/}

export default Myclock