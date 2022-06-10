const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>My React Blog</h1>
            <div className="links">
                <a href="/">Home</a> 
                <a target="_blank" href="https://demo.quantainfotech.com/reactblogapi" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>

            </div>
        </nav>
    );
}
export default Navbar;