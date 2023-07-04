import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);

    this.state ={
      name: 'Linck',
      counter: 1
    };
  }

  handlePClick = event => {
    console.log("meu deus");
  }

  handleAClick = (event) =>  {
    event.preventDefault();
    const {counter} = this.state
    this.setState({
      name: `heey, você apertou o gatinho ${counter} vezes!`,
      counter: counter + 1
    });
    console.log("ta funcionando");
  }

  render() {
    const { name } = this.state;

      return (
    <div className="App">
      <header className="App-header">
        <p>oia o gatinho ai</p>
        <img 
        src='https://media.tenor.com/NFjEeHbk-zwAAAAC/cat.gif'
        alt="cat"
        onClick={this.handleAClick} />

        <p>
          {name}
        </p>
        <a 
          className="App-link"
          href="https://instagram.com/linckfx"
          target="_blank"
          rel="noopener noreferrer"
        >
          meu insta p ver se funciona
        </a>
      </header>
    </div>
  );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>oia o gatinho ai</p>
//         <img src='https://media.tenor.com/NFjEeHbk-zwAAAAC/cat.gif' className="catGif" alt="cat" />
//         <p>
//           testing <code>react-app</code>
//         </p>
//         <a 
//           className="App-link"
//           href="https://instagram.com/linckfx"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           meu insta p ver se funciona
//         </a>
//       </header>
//     </div>
//   );


export default App;
