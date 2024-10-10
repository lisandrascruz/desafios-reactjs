import "./App.css";
import Counter from "./components/Counter/Counter";
import Family from "./components/Family/Family";
import HelloName from "./components/HelloName/HelloName";
import HelloWord from "./components/HelloWord/HelloWord";
import Profile from "./components/Profile/Profile";
import ProfileClass from "./components/ProfileClass/ProfileClass";

function App() {
  return (
    <>
      <h2>1. Criando um componente simples</h2>
      <HelloWord />

      <h2>2. Criando um componente com props</h2>
      <HelloName name="Lisandra Cruz" />

      <h2>3. Criando um componente com multiplas props</h2>
      <Profile name="Dandara Ayô" age={14} preferredColor="verde" />

      <h2>4. Composição de componente</h2>
      <Family
        members={[
          { name: "Dandara Ayô", age: 12, preferredColor: "verde" },
          { name: "Francisco Ayô", age: 8, preferredColor: "vermelho" },
        ]}
      />

      <h2>5. Class component com props</h2>
      <ProfileClass name="Maria das Neves" age={45} preferredColor="laranja" />

      <h2>6. Counter</h2>
      <Counter />
    </>
  );
}

export default App;
