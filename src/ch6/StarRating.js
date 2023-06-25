import { FaStar } from 'react-icons/fa/';

const createArray = length => [...Array(length)];

const Star = ({ selected = false }) => {
  return <FaStar color={selected ? 'red' : 'grey'} />;
};

const StarRating = ({ totalStars = 5 }) => {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
};

export default StarRating;
