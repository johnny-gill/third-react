import Color from "./Color";
import { useColors } from "./ColorProvider";

const ColorList = () => {
  const { colors } = useColors();

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
