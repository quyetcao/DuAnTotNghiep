import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import './App.css';



function AppAdminQLWeb() {
    return (
        <>
         <Provider store={store}>
            <Outlet></Outlet>
            </Provider>
        </>
    );
}

export default AppAdminQLWeb;
