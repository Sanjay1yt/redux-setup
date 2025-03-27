import { useSelector, useDispatch } from "react-redux";
import { incrementValue, decrementValue, getUserDetails } from "./redux/action";
import "./App.css";
import { useEffect } from "react";
import { useTitleHooks } from "./customHooks/useTitleHooks";
import { UseRefHooks } from "./hooks/UseRefHooks";
import { SearchBar } from './hooks/UseCallbackHooks'
import { ExpensiveCalculation } from './hooks/UseMemoHooks'
import { ResizableBox } from './hooks/UseLayoutEffectHooks'
function App() {
  const { currentValue, userDetails, titles } = useSelector((state) => state);
  const dispatch = useDispatch();
  const updateIncrement = () => {
    dispatch(incrementValue());
  };
  const decrementIncrement = () => {
    dispatch(decrementValue());
  };
  useEffect(() => {
    if (!userDetails.length) {
      console.log("its rendering")
      dispatch(getUserDetails());
    }

  }, [dispatch, userDetails]);

  useEffect(() => {
    console.log('use effects prints first')
  })

  // custom hook implementation
  useTitleHooks()

  return (
    <div className="App">
      {/* basic redux actions */}
      <div>
        <h1>Increment and Decrement</h1>
        <button onClick={() => updateIncrement()}> + </button>
        <button onClick={() => decrementIncrement()}> - </button>
        <h1>Current value :{currentValue}</h1>
      </div>

      {/* table view api data */}
      <table>
        <thead>
          <tr>
            <th>Mobile Id</th>
            <th>Mobile Name</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map(({ id, name }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* values come from custom hook */}
      {titles.length && titles.slice(0, 3).map(({ userId, title }) => (<div key={userId}>{userId} : {title}</div>))}
      {/* useRefHooks implementation */}
      <UseRefHooks />
      {/* use call back hook implementation */}
      <SearchBar />
      {/* use memo implementation */}
      <ExpensiveCalculation />
      {/* use layout implementation */}
      <ResizableBox />

    </div>
  );
}

export default App;
