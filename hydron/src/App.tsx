import './App.css';
import VideoDropzone from './components/VideoDropzone';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1 className="App-title">Hydron</h1>
        <p className="App-subtitle">Upload a video from your computer to get started.</p>

        <VideoDropzone />
      </main>
    </div>
  );
}

export default App;
