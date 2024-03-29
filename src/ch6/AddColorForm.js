import { useColors } from "./ColorProvider";
import { useInput } from "./hooks";

const AddColorForm = ({ onNewColor = (f) => f }) => {
  console.log("AddColorForm");

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("");
  const { addColor } = useColors();
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="insert color title"
        required
        {...titleProps}
      />
      <input type="color" required {...colorProps} />
      <button>추가</button>
    </form>
  );
};

export default AddColorForm;
