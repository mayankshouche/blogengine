import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <center><span className="text-muted">&copy; {new Date().getFullYear()} Mayank Shouche</span></center>
                </div>
            </footer>
        </div>
    )
};

export default Footer;