// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Schedule from './components/schedule/schedule';

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Schedule />
    </div>
  );
}

export default App;
