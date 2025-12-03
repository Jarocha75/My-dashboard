import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <p>This is a simple React application.</p>
      </main>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </div>
  );
}

export default App;
