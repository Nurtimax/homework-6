import "./App.css";
import Card from "./components/card/Card";
import CardLayout from "./components/card_layout/CardLayout";
import Title from "./components/title/Title";
import users from "./utils/data";

function App() {
  return (
    <div className="App">
      <Title />
      <CardLayout>
        {users.map((item) => (
          <Card userData={item} key={item.id} />
        ))}
      </CardLayout>
    </div>
  );
}

export default App;
