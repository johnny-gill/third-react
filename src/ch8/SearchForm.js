import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  console.log("SearchForm");
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
