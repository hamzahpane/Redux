import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCheck, increment } from "../../app/feture/counter/action";

const Counter = () =>{
let {count} = useSelector(state => state.counter)
const dispatch = useDispatch();
return (
    <div>
            <button onClick={() => dispatch(decrementCheck(1))}> - </button>
          {''} <span>{count} </span>{''} 
            <button onClick={() => dispatch(increment(1))}> + </button>
    </div>

);


}

export default Counter;