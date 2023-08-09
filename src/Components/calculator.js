import "./calculator.css";
function Calculator() {
  return (
    <div className="calculator">
       
          <input className="calculator-screen" type="text" class="calculator-screen" value="0" disabled />
    
      <div className="calculator-grid">
       
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="oper">/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="oper">*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="oper">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="oper">+</button>
        <button className="span-two">0</button>
        <button>.</button>
        <button className="oper">=</button>
      </div>
    </div>
  );
}

export default Calculator;
