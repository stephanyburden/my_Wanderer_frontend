import './App.css';
import Header from './components/Header'
import Routes from './config/Routes'

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* will move heade around tot he pages it's supposed to be on  */}
      <Routes/>
    </div>
  );
}

export default App;
