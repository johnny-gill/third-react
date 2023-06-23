import Ingredients from './Ingredients';
import Instructions from './Instructions';

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <section>
      <h1>{name}</h1>
      <Ingredients ingredients={ingredients} />
      <Instructions title="Cook instruction" steps={steps} />
    </section>
  );
};

export default Recipe;
