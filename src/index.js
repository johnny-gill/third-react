import ReactDOM from 'react-dom/client';
import StarRating from './ch6/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StarRating
    totalStars={10}
    style={{ backgroundColor: 'lightblue' }}
    onDoubleClick={() => alert('double click')}
  />
);
