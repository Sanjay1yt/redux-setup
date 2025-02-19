import { useSelector, useDispatch } from "react-redux";
import { incrementValue, decrementValue } from "./redux/action";
import "./App.css";

function App() {
  const { currentValue } = useSelector((state) => state);
  const dispatch = useDispatch();
  const updateIncrement = () => {
    dispatch(incrementValue());
  };
  const decrementIncrement = () => {
    dispatch(decrementValue());
  };

  return (
    <div className="App">
      <>Increment and Decrement</>
      <button onClick={() => updateIncrement()}> + </button>
      <button onClick={() => decrementIncrement()}> - </button>
      <h1>Current value :{currentValue}</h1>
    </div>
  );
}

export default App;
