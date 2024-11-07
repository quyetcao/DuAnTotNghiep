import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './component/common';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
// import Header from './component/common/Header';

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Outlet></Outlet>
                <Footer />
            </Provider>

        </>
    );
}

export default App;
