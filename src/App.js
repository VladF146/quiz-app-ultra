import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Navigation from "./components/Navigation/Navigation";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function App() {
  return (
    <div className="app">
      <Header />
      <main className="">
        {array.map((e) => {
          return <Card num={e}/>;
        })}
     
      </main>
      <Navigation />
    </div>
  );
}

export default App;
