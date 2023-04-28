import './App.css';
import Header from "./components/Header_components/Header"
import MainPage from './pages/MainPage';

//need create route
function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
