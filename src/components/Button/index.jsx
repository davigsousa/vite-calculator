import P from 'prop-types';

function Button({ value, updateOutput, spanToDouble }) {
  return (
    <button className={spanToDouble ? 'double-btn' : ''} onClick={() => updateOutput(value)}>{value}</button>
  )
}

Button.propTypes = {
  value: P.string.isRequired,
  updateOutput: P.func.isRequired,
  spanToDouble: P.bool,
}

export default Button;
