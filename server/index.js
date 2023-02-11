import express from "express";
import cors from "cors";
import Chance from "chance";

// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());

const chance = new Chance();

const animals = [...Array(250).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

// Endpoint to search for animals
app.get("/animals", (req, res) => {
  // Filter results by query
  const { q } = req.query;
  const result = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q?.toLowerCase() || "")
  );

  res.send(result);
});

app.listen(8081, () => {
  console.log("Listening on port http://localhost:8081");
});
