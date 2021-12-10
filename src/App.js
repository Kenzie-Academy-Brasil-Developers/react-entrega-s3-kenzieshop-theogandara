import Routes from './Routes/routes';
import "./App.css"
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div className="Body-app">
      <Header/>
      <Routes/>
      </div>
    </div>
  );
}

export default App;
