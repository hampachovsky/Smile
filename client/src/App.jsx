import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { AdminPanel, Home } from './pages';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<AdminPanel />} />
            </Routes>
        </div>
    );
}

export default App;
