import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";
import { useRandomUser } from "./hooks/useRandomUser";
import { UserCard } from "./components/userCard";
import { FactCard } from "./components/FactCard";
import "./App.css";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  const { user, refreshUser } = useRandomUser();
  const handleclick = async () => {
    refreshUser();
    refreshFact();
  };

  return (
    <main>
      <h1>Random Facts</h1>
      <button onClick={handleclick}>Get new fact</button>
      <section className="card">
        <UserCard user={user} />
        <FactCard fact={fact} imageUrl={imageUrl} />
      </section>
    </main>
  );
}

export default App;
