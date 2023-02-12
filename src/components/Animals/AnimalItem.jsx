const AnimalItem = ({ type, name, age }) => {
  return (
    <li>
      <strong>{type}</strong> {name} ({age} years old)
    </li>
  );
};

export default AnimalItem;
