import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { counter } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="text-center pt-14 flex justify-center items-center">
      <button
        className="bg-blue-500 px-4 py-3 text-white rounded-lg font-semibold hover:bg-blue-600 mr-5"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 px-4 py-3 text-white rounded-lg font-semibold hover:bg-blue-600 "
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment by Amount
      </button>
      <p className="mx-5">{counter}</p>
      <button
        className="bg-yellow-500 px-4 py-3 text-white rounded-lg font-semibold hover:bg-yellow-600"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
