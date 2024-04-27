
import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './user'
import './friends.css'

function App() {
 function handleClick(){
  alert('button clicked')
 }
 const handleClick2 = () =>{
  alert('button 2 click')
 }
 const addToFive = (num) =>{
alert(num + 5);
 }

  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => addToFive(4)}>five</button>
    </>
  )
}

export default App
