import './App.css';
import { Form } from "./Form/Form";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div className="App">
      <header>
        <Form />
        <Blog />
      </header>
    </div>
  );
}

export default App;
