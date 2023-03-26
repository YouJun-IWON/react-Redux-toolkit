import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { up } from './counterSlice';

// Not using Redux Toolkit
// function reducer(state, action) {
//   if (action.type === 'up'){
//     return {...state, value:state.value + action.step} // increment by 2
//   }
//   return state;
// }

// const initialState = { value: 0 };
// const store = createStore(reducer, initialState);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value; // state.counter.value
  });
  return (
    <div>
      <button
        onClick={() => {
          //dispatch({ type: 'counter/up', step: 2 }); // counter/up
          //dispatch(counterSlice.actions.up(2)); // actionssss
          dispatch(up(2));
        }}
      >
        +
      </button>{' '}
      {count}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
