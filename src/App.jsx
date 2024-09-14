import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './component/common';
// import Header from './component/common/Header';

function App() {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </>
    );
}

export default App;
