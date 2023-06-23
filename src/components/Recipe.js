const Recipe = ({ name, ingredients, steps }) => {
  return (
    <section>
      <h1>{name}</h1>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.name}</li>
        ))}
      </ul>
      <section>
        <h2>Cook instruction</h2>
        <ul>
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Recipe;
