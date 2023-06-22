import '../stylesheets/Menu.css';

const Menu = (props) => {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
      </header>
      <div className='recipes'></div>
    </article>
  );
};

export default Menu;
