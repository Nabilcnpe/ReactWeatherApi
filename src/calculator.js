// import React from 'react'
//
// import './style.css'
//
// class App extends React.Component {
//
//   state = {
//       displayValue: '0',
//       waitingForOperand: false,
//       operator: null,
//       //prevValue: '0',
//       value: null,
//       keys: [
//         {id:'1'},
//         {id:'2'},
//         {id:'3'},
//         {id:'4'},
//         {id:'5'},
//         {id:'6'},
//         {id:'7'},
//         {id:'8'},
//         {id:'9'},
//       ]
//   }
//
//   inputDigit(digit) {
//     if (this.state.waitingForOperand) {
//       this.setState({
//         //prevValue: this.state.displayValue,
//         displayValue: String(digit),
//         waitingForOperand: false
//       })
//     } else {
//       this.setState({
//         displayValue: this.state.displayValue === '0' ? String(digit) : this.state.displayValue + digit
//       })
//     }
//   }
//
//   inputDot() {
//     if (this.state.displayValue.indexOf('.') === -1) {
//       this.setState({
//         displayValue: this.state.displayValue + '.'
//       })
//     }
//   }
//
//   clear() {
//     this.setState({
//       displayValue: '0'
//     })
//   }
//
//   toggleSign() {
//       this.setState({
//         displayValue: this.state.displayValue.charAt(0) === '-' ? this.state.displayValue.substr(1) : '-' + this.state.displayValue
//       })
//   }
//
//   performOperation(nextOperator) {
//     const nextValue = parseFloat(this.state.displayValue);
//     const operators = {
//       '/': (prevValue, nextValue) => prevValue / nextValue,
//       '+': (prevValue, nextValue) => prevValue + nextValue,
//       '=': (prevValue, nextValue) => nextValue,
//       // '/': (prevValue, nextValue) => prevValue / nextValue,
//       // '/': (prevValue, nextValue) => prevValue / nextValue,
//     };
//     if (this.state.value === null) {
//       this.setState({
//         value: nextValue
//       })
//     } else if (this.state.operator) {
//       const currentValue = this.state.value || 0
//       const newValue = operators[this.state.operator](currentValue, nextValue)
//       this.setState({
//         value: newValue,
//         displayValue: String(newValue)
//       })
//     }
//     this.setState({
//       waitingForOperand: true,
//       operator: nextOperator
//     })
//   }
//
//   render() {
//     return (
//       <div className="calculator container">
//         <div className="calculator-display">{this.state.displayValue}</div>
//         <div className="calculator-keypad">
//           <div className="input-keys">
//             <div className="function-keys">
//               <button className="calculator-key key-clear" onClick={() => this.clear()}>AC</button>
//               <button className="calculator-key key-sign" onClick={() => this.toggleSign()}>+-</button>
//               <button className="calculator-key key-percent">%</button>
//             </div>
//             <div className="digit-keys">
//               <button className="calculator-key key-0" onClick={() => this.inputDigit(0)}>0</button>
//               <button className="calculator-key key-dot" onClick={() => this.inputDot()}>.</button>
//               {this.state.keys.map(key =>
//                 <button className="calculator-key key-{key.id}" onClick={() => this.inputDigit(key.id)}>{key.id}</button>
//               )}
//             </div>
//           </div>
//           <div className="operator-keys">
//             <button className="calculator-key key-divide" onClick={() => this.performOperation('/')}>/</button>
//             <button className="calculator-key key-multiply">*</button>
//             <button className="calculator-key key-substract">-</button>
//             <button className="calculator-key key-add" onClick={() => this.performOperation('+')}>+</button>
//             <button className="calculator-key key-equals" onClick={() => this.performOperation('=')}>=</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default App;
