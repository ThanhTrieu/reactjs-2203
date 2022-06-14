import React from 'react';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import MainContent from './components/Content';
import ShareDataProvider from './providers/ShareDataProvider';
import ShareLanguageProvider from './providers/ShareLanguageProvider';

const AppContext = () => {
    return (
        <>
            <ShareDataProvider>
                <HeaderComponent/>
            </ShareDataProvider>
            <ShareLanguageProvider>
                <MainContent/>
                <FooterComponent/>
            </ShareLanguageProvider>
        </>
    )
}
export default React.memo(AppContext);