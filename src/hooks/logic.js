import { useState } from "react";

export function useCalculatorLogic() {
  const [memory, setMemory] = useState(null);
  const [display, setDisplay] = useState("0");

  const addDigit = (digit) => {
    if (display === "0") {
      setDisplay(String(digit));
    } else {
      setDisplay(String(display) + String(digit));
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setMemory(null);
  };

  const deleteOperation = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const addDecimalPoint = () => {
    if (display.includes(".")) {
      return;
    }

    setDisplay(display + ".");
  };

  const equalOperation = () => {
    if (memory === null) {
      return display;
    }

    const result = eval(`${memory}${display}`);
    setDisplay(result);
    setMemory(null);
    return result;
  };

  const addOperation = () => {
    const result = equalOperation();

    setMemory(`${result} +`);
    setDisplay("0");
  };

  return {
    display,
    memory,
    addDigit,
    clearDisplay,
    deleteOperation,
    addDecimalPoint,
    addOperation,
    equalOperation,
  };
}
