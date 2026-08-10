
import Chai from "./chai";

function Welcome() {
  return <h1>Hello, Welcome to React1</h1>;
}

function App() {
  return (
    <>
    <div>
      <Welcome />
      <Chai/>
    </div>
    </>
  );
}

export default App;