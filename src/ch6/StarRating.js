import { useState } from 'react';
import { FaStar } from 'react-icons/fa/';

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = (f) => f }) => {
  return <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />;
};

const StarRating = ({ totalStars = 5, style = {}, ...props }) => {
  console.log(props);
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: '5px', ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  );
};

export default StarRating;
