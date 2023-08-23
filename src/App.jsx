import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";
import { useRandomUser } from "./hooks/useRandomUser";
import { UserCard } from "./components/UserCard";
import { FactCard } from "./components/FactCard";
import { Skeleton } from "@mui/material";
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
        {fact ? (
          <FactCard fact={fact} imageUrl={imageUrl} />
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.800" }}
            animation="wave"
            variant="rounded"
            width={530}
            height={160}
          />
        )}
      </section>
    </main>
  );
}

export default App;
