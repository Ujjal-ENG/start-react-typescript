import "./App.css";
import User from "./components/User";

const user1 = {
  name: "Ujjal Roy",
  age: 24,
  isRegistered: false,
  lang: ["Bangla", "English", "Hindi"],
};

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User user={user1} />
    </div>
  );
}

export default App;
