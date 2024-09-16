export default function NavBar() {
    return(
        <div className="navbar max-w-screen-lg z-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-extrabold" href="#home">NV</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                </ul>
            </div>
        </div>
    );
}