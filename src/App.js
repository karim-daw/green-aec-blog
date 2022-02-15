import './App.css';
import Navbar from './Navbar';

function App() {

  const title = "Welcome to the Green-AEC blog!";
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h1>{ title }</h1>
        <h1>Likes { likes }</h1>
      </div>
    </div>
  );
}

export default App;
