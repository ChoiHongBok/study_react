import logo from './logo.svg';

import './App.css';

function App() {
    return (
        <div classname="App">
            <header className="App-header">
                <img src={logo} className="APp-logo" alt="{logo}"/>
                <p>안녕하세요</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
        </div>
    );
}

export default App;