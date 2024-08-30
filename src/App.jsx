import { Outlet } from 'react-router-dom';
import './App.css';
// import Header from './component/common/Header';

function App() {
    return (
        <>
            {/* <Header /> */}
            <Outlet></Outlet>
            {/* footer */}
        </>
    );
}

export default App;
