import './App.css';
import Header from './components/header/Header';
import MainPage from './components/MainPage';

function App() {
  let currPage = `home`;

  function pageSwitch(page) {
    switch (page) {
      case `home`:
        return <MainPage />;
      default:
        return <MainPage />;
    }
  }

  return (
    <div className="App">
      <Header />
      {pageSwitch(currPage)}
    </div>
  );
}

export default App;
