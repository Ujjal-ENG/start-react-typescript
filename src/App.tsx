import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name="Ujjal Kumar Roy" age={22} isRegistered={false} />
      <User name="Susmita Roy" age={14} isRegistered={true} />
    </div>
  );
}

export default App;
