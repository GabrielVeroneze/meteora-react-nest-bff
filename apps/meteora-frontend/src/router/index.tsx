import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import Layout from '@/pages/Layout'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
