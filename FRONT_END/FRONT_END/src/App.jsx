import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './component/common';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
// import Header from './component/common/Header';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
    const clientID= import.meta.env.VITE_GOOGLE_CLIENT_ID;
    console.log("clientID",clientID);
    return (
        <>
        
            <Provider store={store}>
            <GoogleOAuthProvider clientId={clientID}>
                <Header />
                <Outlet></Outlet>
                <Footer />
                </GoogleOAuthProvider>
            </Provider>

        </>
    );
}

export default App;
