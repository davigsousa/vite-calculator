import P from 'prop-types';

function DigitButton({ value, updateOutput }) {
  return (
    <button onClick={() => updateOutput(value)}>{value}</button>
  )
}

DigitButton.propTypes = {
  value: P.number.isRequired,
  updateOutput: P.func.isRequired
}

export default DigitButton;
