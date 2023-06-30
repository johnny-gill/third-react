import { useRef } from 'react';

const AddColorForm = ({onNewColor = (f) => f}) => {
  const txtTitle = useRef();
  const hexColor = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    onNewColor(title, color);
    txtTitle.current.value = '';
    hexColor.current.value = '';
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        ref={txtTitle}
        type="text"
        placeholder="칼라타이틀 입력"
        required
      />
      <input ref={hexColor} type="color" required />
      <button>추가</button>
    </form>
  );
};

export default AddColorForm;
