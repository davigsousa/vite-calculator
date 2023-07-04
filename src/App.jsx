import { useState } from 'react'
import './styles/App.css'
import Button from './components/Button'

function App() {
  const [display, setDisplay] = useState('0')

  const addDigit = (digit) => {
    if (display === '0') {
      setDisplay(String(digit))
    } else {
      setDisplay(String(display) + String(digit))
    }
  }

  const clearDisplay = () => {
    setDisplay('0')
  }

  const deleteOperation = () => {
    if (display.length === 1) {
      setDisplay('0')
    } else {
      setDisplay(display.slice(0, -1))
    }
  }

  const addDecimalPoint = () => {
    if (display.includes('.')) {
      return;
    }

    setDisplay(display + '.')
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
            <Button spanToDouble value="Clear" updateOutput={clearDisplay} />
            <Button spanToDouble value="DEL" updateOutput={deleteOperation} />

            <Button value="7" updateOutput={addDigit} />
            <Button value="8" updateOutput={addDigit} />
            <Button value="9" updateOutput={addDigit} />
            <button>/</button>

            <Button value="4" updateOutput={addDigit} />
            <Button value="5" updateOutput={addDigit} />
            <Button value="6" updateOutput={addDigit} />
            <button>*</button>

            <Button value="1" updateOutput={addDigit} />
            <Button value="2" updateOutput={addDigit} />
            <Button value="3" updateOutput={addDigit} />
            <button>-</button>

            <Button value="." updateOutput={addDecimalPoint} />
            <button>0</button>
            <button className='double-btn'>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
