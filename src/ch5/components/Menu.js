import '../stylesheets/Menu.css';
import Recipe from './Recipe';

const Menu = ({ recipes, title }) => {
  console.log(recipes, title);
  console.log('Menu');
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
};

export default Menu;
