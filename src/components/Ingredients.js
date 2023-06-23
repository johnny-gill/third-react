const Ingredients = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient.amount} {ingredient.measurement} {ingredient.name}</li>
      ))}
    </ul>
  );
};

export default Ingredients;
