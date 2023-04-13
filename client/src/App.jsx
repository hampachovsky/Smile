import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { Home } from './pages';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
