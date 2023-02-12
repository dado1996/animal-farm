import AnimalItem from "./AnimalItem";

const Animals = ({ animals }) => {
  return (
    <ul>
      {animals.map((animal) => (
        <AnimalItem key={animal.id} {...animal} />
      ))}

      {animals.length === 0 && "No animals found"}
    </ul>
  );
};

export default Animals;
