import { useEffect, useState } from "react";
import "./App.css";
import Animals from "./components/Animals/Animals";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []);

  const search = async (q) => {
    try {
      const response = await fetch(
        "http://localhost:8081/animals?" + new URLSearchParams({ q })
      );
      const data = await response.json();
      setAnimals(data);

      localStorage.setItem("lastQuery", q);
    } catch (error) {}
  };

  return (
    <main>
      <h1>Animal Farm</h1>

      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        onChange={(e) => search(e.target.value)}
      />

      <Animals animals={animals} />
    </main>
  );
}

export default App;
