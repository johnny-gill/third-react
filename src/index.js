import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';
import data from './data/data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menu recipes={data} title="맛있는 조리법" />);
