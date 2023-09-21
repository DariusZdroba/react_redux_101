import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { actions } from "./store/index";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  return (
    <div className="App">
      {/* Simple counter eleent using state */}
      <h1>counter app</h1>
      <h2>{counter} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
