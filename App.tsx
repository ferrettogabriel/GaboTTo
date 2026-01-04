import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProfessionalProfile from './pages/ProfessionalProfile';
import PersonalSide from './pages/PersonalSide';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import BlogPostDetail from './pages/BlogPostDetail';

const App: React.FC = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/professional-profile" element={<ProfessionalProfile />} />
                    <Route path="/personal-side" element={<PersonalSide />} />
                    <Route path="/personal-side/:id" element={<BlogPostDetail />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:id" element={<ProjectDetail />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
};

export default App;