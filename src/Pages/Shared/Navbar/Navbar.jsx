import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

    const liiteam = <>
        {
            <nav className=''>
                <ul className='menu'>
                    <li><Link to='/subjects'>Subjects</Link></li>
                    <li>Job Books
                        <ul className='submenu'>
                            <li> BCS </li>

                        </ul>
                    </li>
                    <li>Honours Books
                        <ul className='submenu'>
                            <li> BA. Bachelor of Arts
                                <ul className='submenu2'>
                                    <li >Economics</li>
                                    <li>Political Science</li>
                                    <li>Sociology</li>
                                    <li>Social Work</li>
                                    <li>History</li>
                                    <li>History and Culture of Islam</li>
                                    <li>Home Economics</li>
                                    <li>Philosophy</li>
                                    <li>Geography and Environment</li>
                                    <li>Islamic Studies</li>
                                    <li>Psychology</li>
                                </ul>
                            </li>
                            <li className=''>BSS. Bachelor of Social Science</li>
                            <li>BSc (Bachelor of Science)</li>
                            <li>BBS (Bachelor of Business Studies)</li>
                            <li>B Music (Bachelor of Music)</li>
                            <li className=''>B Sports (Bachelor of Sports)</li>
                        </ul>
                    </li>
                    <li>Masters Books
                        <ul className='submenu'>
                            <li> MA. Masters  of Arts
                                <ul className='submenu2'>
                                    <li >Economics</li>
                                    <li>Political Science</li>
                                    <li>Sociology</li>
                                    <li>Social Work</li>
                                    <li>History</li>
                                    <li>History and Culture of Islam</li>
                                    <li>Home Economics</li>
                                    <li>Philosophy</li>
                                    <li>Geography and Environment</li>
                                    <li>Islamic Studies</li>
                                    <li>Psychology</li>
                                </ul>
                            </li>
                            <li>MBA Masters of Business Administration</li>
                            <li>MSC Masters of Science</li>
                            <li>MSS. Masters of Social Science</li>
                        </ul>
                    </li>
                </ul>
            </nav>

        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {liiteam}

                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {liiteam}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;