import React,{useState} from 'react'
import './Counter.css';

export default function Counter() {
    const [ count, setCount] = useState(0)
    const [ count1, setCount1] = useState(0)
    const [ count2, setCount2] = useState(0)
    const [ count3, setCount3] = useState(0)
    const [ count4, setCount4] = useState(0)
    const [ count5, setCount5] = useState(0)
  return (
    <div>
        <div className="header">
        <div className="head">
        <img src="r.jpg"/>
        <h1 className="text">SAS MESS</h1>
    </div>
    </div>
    <div class="order">
        <div class="or">
        <h1>ORDERS PLACING</h1>
    </div>
    <div className="cont">
        <div className="st">
            <img src="tan.jfif"/>
            <p>Tandoori</p>
            <div className="bt">
            <button onClick={() =>setCount(count+1)}>+</button>
            <button onClick={() =>setCount(count-1)} disabled={count===0}>-</button>
            <p>{count}</p>
            <button>Buy</button>
        </div>
            
        </div>
        <div className="st">
            <img src="grill.jfif"/>
            <p>Grill</p>
            <div className="bt">
            <button onClick={() =>setCount1(count1+1)}>+</button>
            <button onClick={() =>setCount1(count1-1)} disabled={count1===0}>-</button>
            <p>{count1}</p>
            <button>Buy</button>
        </div>
        </div>
        <div className="st">
            <img src="chi.webp"/>
            <p>Chicken 65</p>
            <div className="bt">
            <button  onClick={() =>setCount2(count2+1)}>+</button>
            <button  onClick={() =>setCount2(count2-1)} disabled={count2===0}>-</button>
            <p>{count2}</p>
            <button>Buy</button>
        </div>
        </div>
    </div>
    <div className="cont">
        <div className="st">
            <img src="noodles.jpg"/>
            <p>Noodles</p>
            <div class="bt">
            <button  onClick={() =>setCount3(count3+1)}>+</button>
            <button  onClick={() =>setCount3(count3-1)} disabled={count3===0}>-</button>
            <p>{count3}</p>
            <button>Buy</button>
        </div>
        </div>
        <div className="st">
            <img src="rice.jpg"/>
            <p>Fried Rice</p>
            <div className="bt">
            <button  onClick={() =>setCount4(count4+1)}>+</button>
            <button  onClick={() =>setCount4(count4-1)} disabled={count4===0}>-</button>
            <p>{count4}</p>
            <button>Buy</button>
        </div>
        </div>
        <div className="st">
            <img src="bri.jpg"/>
            <p>Briyani</p>
            <div className="bt">
            <button onClick={() =>setCount5(count5+1)}>+</button>
            <button onClick={() =>setCount5(count5-1)} disabled={count5===0}>-</button>
            <p>{count5}</p>
            <button>Buy</button>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
