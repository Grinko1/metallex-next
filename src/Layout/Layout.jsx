import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';

const Layout = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
            
        </>
    );
};

export default Layout;