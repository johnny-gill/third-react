import Color from './Color';

const ColorList = ({ colors = [] }) => {
  if (!colors.length) {
    return <div>표시할 색이 없습니다.</div>;
  }

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
