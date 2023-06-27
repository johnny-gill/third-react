import { FaStar } from 'react-icons/fa/';

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = (f) => f }) => {
  return <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />;
};

const StarRating = ({ totalStars = 5, selectedStars = 0 }) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  );
};

export default StarRating;
