import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

    const BAitemList = ["Political Science", "Economics", "Sociology", "Social Work", "History", "History and Culture of Islam", "Home Economics", "Philosophy", "Geography and Environment", "Islamic Studies", "Psychology"];

    // const BSSitemlist = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

    // const BScitemlist = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

    // const BBSitemlist = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

    // const BMusicitemlist = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

    // Masters

    const MAitemList = ["Political Science", "Economics", "Sociology", "Social Work", "History", "History and Culture of Islam", "Home Economics", "Philosophy", "Geography and Environment", "Islamic Studies", "Psychology"];

    // const MBAitemlist = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

    const liiteam = <>
        {
            <nav className=''>
                <ul className='menu'>
                    <li><Link to='/subjects'>Subjects</Link></li>
                    <li><Link>Job Books</Link>
                        <ul className='submenu'>
                            <li><Link>BCS</Link>  </li>

                        </ul>
                    </li>
                    <li><Link>Honours Books</Link>
                        <ul className='submenu'>
                            <li> <Link>BA. Bachelor of Arts</Link>
                                <ul className='submenu2'>
                                    {
                                        BAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li><Link>BSS. Bachelor of Social Science</Link>
                                <ul className='submenu2'>
                                    {
                                        BAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>

                            <li><Link>BSc (Bachelor of Science)</Link>
                                <ul className='submenu2'>
                                    {
                                        BAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li><Link>BBS (Bachelor of Business Studies)</Link>
                                <ul className='submenu2'>
                                    {
                                        BAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li><Link>B Music (Bachelor of Music)</Link>
                                <ul className='submenu2'>
                                    {
                                        BAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li ><Link>B Sports (Bachelor of Sports)</Link>
                                <ul className='submenu2'>
                                    {
                                        BAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link>Masters Books</Link>
                        <ul className='submenu'>
                            <li> <Link>MA. Masters  of Arts</Link>
                                <ul className='submenu2'>
                                    {
                                        MAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>

                            </li>
                            <li><Link>MBA Masters of Business Administration</Link>
                                <ul className='submenu2'>
                                    {
                                        MAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li><Link>MSC Masters of Science</Link>
                                <ul className='submenu2'>
                                    {
                                        MAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li><Link>MSS. Masters of Social Science</Link>
                                <ul className='submenu2'>
                                    {
                                        MAitemList.map(item => <li><Link to='/years'>{item}</Link></li>)
                                    }
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

        }
    </>

    return (
        <div>
            <div className=" ml-0 navbar bg-base-100">
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