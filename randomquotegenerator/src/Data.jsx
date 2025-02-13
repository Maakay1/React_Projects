import React, { useState, useEffect } from 'react';
import { ChangingColors
 } from './functions';
 import { RandomNum } from './functions';
 const authors=['Chuck Norris fun facts 1','Chuck Norris fun facts 2','Chuck Norris fun facts 3','Chuck Norris fun facts 4','Chuck Norris fun facts 5','Chuck Norris fun facts 6','Chuck Norris fun facts 7','Chuck Norris fun facts 8','Chuck Norris fun facts 9']

const GetAPI = (NUM) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  
  const rn=RandomNum();
  const myauthor=authors[rn]
   const fetchData = async () => {
    const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '4874882faemshed950fa764182aap11a3b3jsndc7723973a71',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
  setData(result)
  setLoading(false)
	
} catch (error) {
	console.error(error);
}
    };

  useEffect(() => {

    fetchData();
    setLoading(true)
   
  },[NUM]);
  return { loading, data , rn, myauthor}
} 
export default GetAPI;