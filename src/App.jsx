import { useState } from 'react'
import './styles/App.css'
import DigitButton from './components/DigitButton'

function App() {
  const [display, setDisplay] = useState('0')

  const addDigit = (digit) => {
    if (display === '0') {
      setDisplay(String(digit))
    } else {
      setDisplay(String(display) + String(digit))
    }
  }

  return (
    <>
      <div className='container'>
        <header>
          <h1>Vite Calculator</h1>
        </header>

        <div className='calculator'>
          <span>{display}</span>

          <div>
            <button className='double-btn'>Clear</button>
            <button className='double-btn'>DEL</button>

            <DigitButton value={7} updateOutput={addDigit} />
            <DigitButton value={8} updateOutput={addDigit} />
            <DigitButton value={9} updateOutput={addDigit} />
            <button>/</button>

            <DigitButton value={4} updateOutput={addDigit} />
            <DigitButton value={5} updateOutput={addDigit} />
            <DigitButton value={6} updateOutput={addDigit} />
            <button>*</button>

            <DigitButton value={1} updateOutput={addDigit} />
            <DigitButton value={2} updateOutput={addDigit} />
            <DigitButton value={3} updateOutput={addDigit} />
            <button>-</button>

            <button>.</button>
            <button>0</button>
            <button className='double-btn'>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
