import logo from './logo.svg';
import './App.css';
import FileUpload from './components/upload';
import Chat from './components/chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Text Wise</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <FileUpload />
      <Chat />
    </div>
  );
}

export default App;
