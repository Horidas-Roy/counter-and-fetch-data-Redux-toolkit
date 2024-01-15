import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, reset } from "./counterSlice";


const CounterView = () => {
    const count=useSelector(state=>state.counter.count)
    const dispatch=useDispatch()
    return (
        <div>
            <h1>Count: <span className="bg-red-600 text-white p-1">{count}</span></h1>
            <button onClick={()=>{dispatch(increment())}} className="btn">Increment</button>
            <button onClick={()=>{dispatch(decrement())}} className="btn">Decrement</button>
            <button onClick={()=>{dispatch(reset())}} className="btn">Reset</button>
            <button onClick={()=>{dispatch(incrementByValue(5))}} className="btn">IncrementBy5</button>
        </div>
    );
};

export default CounterView;