// import React from "react";

// export default class App extends React.Component<{}, { counter: number }> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };

//     // this.increment = this.increment.bind(this);
//   }

//   get fullname() {
//     const name = {
//       first: "primeiro",
//       last: "ultimo",
//     };
//     const { first, last } = name;

//     return first + " " + last;
//   }

//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 });
//     this.setState({ counter: this.state.counter + 1 });
//     this.setState({ counter: this.state.counter + 1 });
//     console.log(this.state);
//   };

//   // this.setState pode receber um objeto state novo ou uma função
//   // abaixo eu mostro que ele recebe uma função do tipo (state) => ({newState})

//   myCallback = () => {
//     console.log("opa, atualizei o estado viu");
//   };

//   decrement = () => {
//     // setState tb passa props no segundo argumento da função, o que é interessante
//     this.setState(
//       (state, props) => ({ counter: state.counter - 1 }),
//       this.myCallback
//     );
//   };

//   // life cycle

//   componentDidCatch() {}

//   componentDidMount() {}

//   shouldComponentUpdate() {}

//   componentDidUpdate() {}

//   render() {
//     const { counter } = this.state;
//     // const counter = "oi";

//     return (
//       <>
//         <h1>{counter}</h1>
//         <h1>{this.fullname}</h1>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </>
//     );
//   }
// }
