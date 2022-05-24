import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Counter from "./Counter";
import {useState} from "react";

function App() {
  const title = 'Counter App'
  const [counterList,setCounterList] = useState([1,2,3])
  const plus = (i,buttonValue)=>{
    let newList = counterList.map((el,index) => index === i ? el + buttonValue: el)
    setCounterList(newList)
  }

  const minus = (i,buttonValue)=>{
    let newList = counterList.map((el,index) => index === i ? el - buttonValue: el)
    setCounterList(newList)
  }
  return (

    <div className="App">
    <Header title={title}/>
      <Counter counterList={counterList} plus={plus} minus={minus}/>
    </div>
  );
}

export default App;
