
import React, { useState, useEffect, useRef } from 'react';
import { ImQuotesLeft } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import GetAPI from './Data';
import { RandomNum } from './functions';
import { ChangingColors
 } from './functions';
function RandomQuoteGenerator(){
 const [num,setNum]=useState(0)
 const [Data,setData]=useState('')
 const [link,setLink]=useState('#')
 const {loading, data,rn, myauthor}=GetAPI(num)
 const t=JSON.parse(data)
 const previous=0
 let ref=useRef(0)
 var twitterL="https://twitter.com/intent/tweet?text="
 
 const HandleClick=()=>{

   setNum(num+1)
  }

  useEffect(()=>{
  ChangingColors(RandomNum())
  },[rn])
    return (
    <body>
     {loading?<div className='loading' id='Loading'>
      <div className='loading2'>
      <div className='ball1'></div>
      <div className='ball2'></div>
      <div className='ball3'></div>
      </div>
      <div className='words'>
        <h1>Loading...</h1>
      </div>
     </div>:<div className='RQG ccolor' >
        <div className='card' id='quote-box'>
         <div className='body'>
           <div className='quote'>
             <ImQuotesLeft className='icon-quote ccolor2'/>
             <p  className='myquote ccolor2'  id='text'>{t.value}</p>
           </div>
           <div className='names' id='author'><p className='ccolor2'>-{myauthor}</p></div>
         </div>
          <div className='footer'>
            <div className='media'>
              <a href={link} id='tweet-quote'target='_blank' onClick={()=>setLink(twitterL+t.value)}><button className='twitter button1 ccolor' ><FaTwitter className='icon-media'/></button></a>
               <a href='' target='_blank'><button  className='tumblr button1 ccolor' ><FaTumblr className='icon-media '/></button></a>
            </div>
            <div className='new'>
              <button className='new-quote ccolor' id='new-quote' onClick={HandleClick}>New Quote</button>
            </div>

          </div>
           
          </div>
      </div> }
  
    </body>
    )

}

export default RandomQuoteGenerator;