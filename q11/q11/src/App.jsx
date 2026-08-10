function Card({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Q11 - React Props</h1>

      <Card name="Akarsshhh" role="Developer" />
      <Card name="Diya" role="Designer" />
      <Card name="Kabir" role="QA" />
    </div>
  );
}

export default App;