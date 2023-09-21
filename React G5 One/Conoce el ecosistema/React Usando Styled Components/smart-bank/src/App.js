import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import GlobalStyle from './Globalstyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container />
    </div>
  );
}

export default App;
