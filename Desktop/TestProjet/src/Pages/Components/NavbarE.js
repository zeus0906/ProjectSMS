const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="logo"><a href="">SchoManSyst</a></div>
            <ul className="liens">
                <li>
                    <a href="" className="lien"> Acceuil</a>
                </li>

                <li>
                    <a href="" className="lien"> Sanctions</a>
                </li>

                <li>
                    <a href="" className="lien"> Payments</a>
                </li>

                <li>
                    <a href="" className="lien btnCnexion"> Logout</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar