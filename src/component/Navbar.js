import React from 'react';
const Navbar = () => {
    return(
        <nav className="navbar">
            <h1 className='title'>My React Blog</h1>
            <div className="links">
                {/* <a target="_blank" rel="noopener noreferrer"  href="https://quantainfotech.com/">Home</a>  */}
                <a target="_blank" rel="noopener noreferrer"  href="https://demo.quantainfotech.com/reactblogapi" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>

            </div>
        </nav>
    );
}
export default Navbar;