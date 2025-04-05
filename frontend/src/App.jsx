import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import { ThemeProvider } from './components/pages/Theme';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:sidebarname" element={<Home />} /> {/* Sidebarname route */}
                    <Route path="/:sidebarname/:tabname" element={<Home />} /> {/* Sidebarname and tabname route */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;