import "./App.css";
import DataFetch from "./components/DataFetch";

function App() {
  return (
    <div className="App">
      <h3>User Management</h3>
      <DataFetch status="error" />
    </div>
  );
}

export default App;
