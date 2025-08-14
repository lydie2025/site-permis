import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
