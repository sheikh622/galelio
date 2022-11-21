import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

// styles

export default function Marketplace() {
    return (
        <div style={{ background: '#f3f3f3' }}>
            <div style={{ margin: '2%' }}>
                <Header />
            </div>
            {/* Footer */}

            <Footer />
        </div>
    );
}
