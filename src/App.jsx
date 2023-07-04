import './styles/App.css'
import Button from './components/Button'
import { useCalculatorLogic } from './hooks/logic'

function App() {
  const logic = useCalculatorLogic()

  return (
    <>
      <div className='container'>
        <header>
          <h1>Vite Calculator</h1>
        </header>

        <div className='calculator'>
          <div>
            <p>{logic.memory}</p>
            <span>{logic.display}</span>
          </div>

          <div>
            <Button spanToDouble value="Clear" updateOutput={logic.clearDisplay} />
            <Button value="DEL" updateOutput={logic.deleteOperation} />
            <button>/</button>

            <Button value="7" updateOutput={logic.addDigit} />
            <Button value="8" updateOutput={logic.addDigit} />
            <Button value="9" updateOutput={logic.addDigit} />
            <button>*</button>

            <Button value="4" updateOutput={logic.addDigit} />
            <Button value="5" updateOutput={logic.addDigit} />
            <Button value="6" updateOutput={logic.addDigit} />
            <button>-</button>

            <Button value="1" updateOutput={logic.addDigit} />
            <Button value="2" updateOutput={logic.addDigit} />
            <Button value="3" updateOutput={logic.addDigit} />
            <Button value="+" updateOutput={logic.addOperation} />

            <Button value="." updateOutput={logic.addDecimalPoint} />
            <Button value="0" updateOutput={logic.addDigit} />
            <Button spanToDouble value="=" updateOutput={logic.equalOperation} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
