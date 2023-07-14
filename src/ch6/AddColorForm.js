import { useState } from "react";

const AddColorForm = ({ onNewColor = (f) => f }) => {
  console.log('AddColorForm');
  
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("#000000");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="칼라타이틀 입력"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="color"
        value={color}
        required
        onChange={(e) => setColor(e.target.value)}
      />
      <button>추가</button>
    </form>
  );
};

export default AddColorForm;
