import { useState } from 'react'
import './App.css'
import HistoryCard from './components/HistoryCard' // PLESA DON'T FORGET TO UPPERCASE THE FIRST LETTER OF THE COMPONENT :<

function App() {

  return (
    <>
      <main>
        <div className='centerBox'>

          <section className='titleBox'>
            <h1>Bank LowCost</h1>
          </section>

          <section className='userInfoBox'>
            <h1>Your Total Balance: 2500R$</h1>
          </section>
          
          <section className='inputBox'>
            
            <div>
              <h1>Value:</h1>
              <input type="number" />
            </div>
            <div>
              <button>Deposit</button>
              <button>Withdraw</button>
            </div>
            
          </section>
          
          <section>
            <h1>History</h1>
          </section>

          <section className='historyCards'>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />

            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </section>
        
        </div>
      </main>
    </>
  )
}

export default App
