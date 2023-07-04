import { useState } from "react";

export function useCalculatorLogic() {
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

  return {
    display,
    addDigit,
    clearDisplay,
    deleteOperation,
    addDecimalPoint,
  };
}
