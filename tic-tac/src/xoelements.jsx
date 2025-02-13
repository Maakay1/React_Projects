import React, { useState} from 'react';
import {FaXmark} from 'react-icons/fa6'
const MyGame=()=>{
   
    const [player,setPlayer]=useState(1)
    var [check,setCheck]=useState([0,0,0,0,0,0,0,0,0])
    const [winner,setWinner]=useState('')
    const [render,setRender]=useState(1)
    const [start,setStart]=useState(1)
    const [player1,setPlayer1]=useState('')
    const [player2,setPlayer2]=useState('')
    const filter=(array,index,number)=>{
      const newArray=array
      newArray[index]=number
       return newArray
    
    }
    const handleSubmit=(myevent)=>{
      myevent.preventDefault()
      setStart(0)

    }
    const myRender=()=>{
      setRender(1)
    }
    const Restart2=()=>{
      Restart()
      setStart(1)
      setPlayer1('')
      setPlayer2('')
    }
    const Restart=()=>{
      setPlayer(1)
      setWinner(0)
      setCheck([0,0,0,0,0,0,0,0,0])
      setRender(1)
     var xelements = document.querySelectorAll("#xpart");
     xelements.forEach(function(element) {
    element.remove();
     });
      var oelements = document.querySelectorAll("#opart");
      oelements.forEach(function(element) {
      element.remove();
     });
      var winningelements = document.querySelectorAll(".winner1");
      winningelements.forEach(function(element) {
      element.remove();
     });
       var winningelements = document.querySelectorAll(".winner2");
      winningelements.forEach(function(element) {
      element.remove();
     });
       var winningelements = document.querySelectorAll(".winner3");
      winningelements.forEach(function(element) {
      element.remove();
     });
    }

    const HandleClick=(id)=>{
    
      var myBox='Box'
      const test=myBox.concat(id)
      const add= document.createElement('div');
      const myPart=document.getElementById(test);
       if(player==0 && check[id-1]==0){
         add.setAttribute('id','opart')
         myPart.append(add)
         setPlayer(1)
         const newArray=filter(check,id-1,'2')
         setCheck(newArray)

       }
       else if(player==1 && check[id-1]==0){
        add.setAttribute('id','xpart')
        myPart.append(add)
        setPlayer(0)
        const newArray=filter(check,id-1,'1')
        setCheck(newArray)
        console.warn(check)
     
       }
       if(check[0]=='1' && check[1]=='1' && check[2]=='1') {
         setWinner(player1+' Won')
         setRender(0)
         setPlayer(3)
       }
       else if(check[3]=='1' && check[4]=='1' && check[5]=='1'){
         setWinner(player1+' Won')
         setRender(0)
         setPlayer(3)
       }
       else if(check[6]=='1' && check[7]=='1' && check[8]=='1'){
         setWinner(player1+' Won')
         setRender(0)
         setPlayer(3)
       }
       else if(check[0]=='1' && check[3]=='1' && check[6]=='1'){
         setWinner(player1+' Won')
         setRender(0)
         setPlayer(3)

       }
       else if(check[1]=='1' && check[4]=='1' && check[7]=='1'){
         setWinner(player1+' Won')
         setRender(0)
         setPlayer(3)
        
       }
       else if(check[2]=='1' && check[5]=='1' && check[8]=='1'){
         setWinner(player1+' Won')
         setRender(0)
         setPlayer(3)

       }
       else if(check[0]=='1' && check[4]=='1' && check[8]=='1'){
         setWinner(player1+' Won')
         setRender(0)
         setPlayer(3)
        
       }
        else if(check[2]=='1' && check[4]=='1' && check[6]=='1'){
         setWinner(player1+' Won')
         setRender(0)
         setPlayer(3)
        
       }
       else if(check[0]=='2' && check[1]=='2' && check[2]=='2') {
         setWinner(player2+' Won')
         setRender(0)
         setPlayer(3)
       
        
       }
       else if(check[3]=='2' && check[4]=='2' && check[5]=='2'){
         setWinner(player2+' Won')
         setRender(0)
         setPlayer(3)
       }
       else if(check[6]=='2' && check[7]=='2' && check[8]=='2'){
         setWinner(player2+' Won')
         setRender(0)
         setPlayer(3)
        
       }
       else if(check[0]=='2' && check[3]=='2' && check[6]=='2'){
         setWinner(player2+' Won')
         setRender(0)
         setPlayer(3)

       }
       else if(check[1]=='2' && check[4]=='2' && check[7]=='2'){
         setWinner(player2+' Won')
         setRender(0)
         setPlayer(3)
        
       }
       else if(check[2]=='2' && check[5]=='2' && check[8]=='2'){
         setWinner(player2+' Won')
         setRender(0)
         setPlayer(3)

       }
       else if(check[0]=='2' && check[4]=='2' && check[8]=='2'){
         setWinner(player2+' Won')
         setRender(0)
         setPlayer(3)
       }
        else if(check[2]=='2' && check[4]=='2' && check[6]=='2'){
         setWinner(player2+' Won')
         setRender(0);
         setPlayer(3);
       }
       else{
        var now=0;
         for(let i=0;i<9;i++){
         if(check[i]=='1' || check[i]=='2'){
          now++
         }
         }
         if(now==9){
          setWinner('It is a Draw')
          setRender(0)
          setPlayer(3)
         }
       }
    }
    return(
      <body  className='xogame'>
       <div className='name'>
        <h1>Kevin Maakomane</h1>
        <div className='underline'></div>
       </div>
       <div className='game' id='game'>
        { render?'':  <div className='mywinning'>
        <FaXmark className='mark' onClick={myRender}/>
        <div className='message'>
            <h3 className='winningM'>{winner}</h3>
            <h3>Press restart...</h3>
          </div></div>}
       {start?<form className='form input' onSubmit={handleSubmit}>
     
          <input type='text' 
          name='player1'
          className='naming'
           placeholder='Enter player1 name'
           value={player1}
           onChange={(myevent)=>setPlayer1(myevent.target.value)}
           required></input>
          <input type='text'
           className='naming' 
           placeholder='Enter player2 name'
            value={player2}
           onChange={(myevent)=>setPlayer2(myevent.target.value)}
           required ></input>
          <button className='btn2'>Start</button>
        </form>: 
        <>
         <div className='frequency'>
                <h3>{player?player1:player2}</h3>
                 <h3>{player?'X':'O'}</h3>
        </div>
        <div className='board'>
           <div className='box box1' id='Box1' onClick={()=>HandleClick(1)} key={1}></div>
           <div className='box'  id='Box2' onClick={()=>HandleClick(2)} key={2}></div>
           <div className='box box3' id='Box3' onClick={()=>HandleClick(3)}key={3}></div>
           <div className='box' id='Box4' onClick={()=>HandleClick(4)} key={4}></div>
           <div className='box ' id='Box5' onClick={()=>HandleClick(5)} key={5}></div>
           <div className='box' id='Box6' onClick={()=>HandleClick(6)} key={6}></div>
           <div className='box box7' id='Box7' onClick={()=>HandleClick(7)} key={7}></div>
           <div className='box' id='Box8' onClick={()=>HandleClick(8)} key={8}></div>
           <div className='box box9' id='Box9' onClick={()=>HandleClick(9)} key={9}></div>
        </div> 

        <div>
        <button className='btn' onClick={Restart}>Restart Game</button>
         <button className='btn' onClick={Restart2}>Restart with different names</button>
        </div></>}
       </div>
      </body>
    )
  }
export default MyGame