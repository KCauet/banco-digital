import { useState } from 'react'
import './App.css'
import HistoryCard from './components/HistoryCard' // PLESA DON'T FORGET TO UPPERCASE THE FIRST LETTER OF THE COMPONENT :<

function App() {

  const [userBalance, setUserBalance] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);

  function depositValue(value: number) {
    if (value > 0) {
      setUserBalance(userBalance + value);
      setInputValue(0);
    } else {
      alert("You can't deposit 0 dollars")
    }
  }

  function withdrawValue(value: number) {
    if (value <= userBalance && value != 0) {
      setUserBalance(userBalance - value);
      setInputValue(0);
      alert('Successfull transation')
    } else {
      if (value > userBalance) {
        alert("Insufficient money")
      } else {
        alert("You can't withdraw 0 dollars")
      }

    }
  }

  return (
    <>
      <main>
        <div className='centerBox'>

          <section className='titleBox'>
            <h1>Bank LowCost</h1>
          </section>

          <section className='userInfoBox'>
            <h1>Your Total Balance: {userBalance}$</h1>
          </section>
          
          <section className='inputBox'>
            
            <div>
              <h1>Value:</h1>
              <input type="Number" 
              value={inputValue}
              onChange={(event) => {setInputValue(Number(event.target.value))}}
              />
            </div>
            <div>
              <button onClick={() => {depositValue(inputValue)}} >Deposit</button>
              <button onClick={() => {withdrawValue(inputValue)}} >Withdraw</button>
            </div>

            <h1>History</h1>
          </section>

          <section className='historyCards'>
            
          </section>
        
        </div>
      </main>
    </>
  )
}

export default App
