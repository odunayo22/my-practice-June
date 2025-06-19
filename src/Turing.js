import React, { useState, useEffect }from "react";

function Turing() {

const [results, setResults] = useState([]);
const [current,setCurrent] = useState(0);
//const len = results.length - 1


const getData = async() =>{
    await fetch ('https://randomuser.me/api')
    .then ((res) => res.json())
    .then((response) => {
        setResults(response.value)
     console.log(response);
    });
}

useEffect(()=>{
    getData();
}, []);





/*
const prev = () =>{
setCurrent(current < 1 ? len : current - 1)
}

const next = () =>{
setCurrent(current === len ? 0 : current + 1)
}
*/
console.log('current' , current);
    return(
        <div>
            <h1>Part of Turing interview</h1>
            {results?.map((user)=>{
                <div>
                <p>{user.gender}</p>
               <p>{user.name}</p>

               <p>{user.gender}</p>
               <p>{user.picture}</p>
            {/* <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>*/}
            </div>
                
            })}

        </div>
    )
}
export default Turing;