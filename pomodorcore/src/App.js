import './App.css';
import Header from './components/Header';
import LastFmData from './components/Container';

function App() {
  return (
    <div className="App">
      <Header />
      < LastFmData
        userName='thatthombee'
        apiKey='a94196b04901e57266d3cef6d81aa72f'
      />
    </div>
  );
}

export default App;
