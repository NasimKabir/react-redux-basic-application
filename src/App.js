import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './action';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';


function App() {
  const allData=useSelector((c)=>c.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Wellcome to redux tutorial</h1>
      <h1>Counter :{allData}</h1>
      <button className="btn btn-primary" onClick={() => dispatch(increase())}>+</button>&nbsp;
      <button className="btn btn-primary " onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
}

export default App;
