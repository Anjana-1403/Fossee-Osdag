import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import { ThemeProvider } from './components/pages/Theme'; 

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:tabName/:connectionName?" element={<Home />} /> {/* Add optional connectionName */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;