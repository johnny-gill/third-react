import ReactDOM from 'react-dom/client';
import Menu from './ch5/components/Menu';
import data from './ch5/data/data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menu recipes={data} title="맛있는 조리법" />);
