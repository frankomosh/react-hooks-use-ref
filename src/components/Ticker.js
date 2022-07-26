import React, { useEffect, useState,useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  //creste the ref and sets its initial value 

  const prevPriceRef = useRef(price);

  useEffect(() =>{
    //we need some way to get the previous price
    const prevPrice = prevPriceRef.current;
    if (price > prevPrice){
      setColor("green");
    }else if(price < prevPrice){
      setColor("red")
    } else  {
      setColor("black")
    }

  },[price])

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);



  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}
export default Ticker;
