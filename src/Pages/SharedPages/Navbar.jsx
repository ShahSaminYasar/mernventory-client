    import { Link } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import UseAxiosPublic from '../../Hooks/AxiosPublic/AxiosPublic';

const Navbar = () => {


    const axiosPublic = UseAxiosPublic();

    const { signOutUser, user } = useAuth();
    console.log(user);
    const handelLogOut = () => {
        console.log("logOut");
        signOutUser()
    }

    const navItems = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/CreateStore">Create-Store</Link></li>
            <li><Link to="/WatchDemo">Watch Demo</Link></li>

            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li>{user?.displayName}</li>
        </>
    );




    return (
        <div>
            <Container>
                <div className="navbar bg-base-100 text-white ">
                    <div className="navbar-start hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-base">
                            {navItems}
                        </ul>
                    </div>

                    <div className="navbar-center">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                                {navItems}
                                <ul >
                                    <li>
                                        <p className='text-base text-slate-200 px-3 py-1'>{user?.role}</p>
                                    </li>
                                    <li>
                                        <p className='overflow-x-auto text-base text-slate-200 px-3 py-1'>{user?.email}</p>
                                    </li>
                                    {/* <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>

                                    <li><a>Settings</a></li> */}

                                    {user ?
                                        <li><button onClick={handelLogOut}>LogOut</button></li> :
                                        <>
                                            <li><Link to="/Login">Login</Link></li >
                                            <li><Link to="/Register">Register</Link></li>
                                        </>
                                    }
                                </ul>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">MERNventory</a>
                    </div>

                    <div className="navbar-end lg:menu lg:menu-horizontal opacity-[0] lg:opacity-100">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-14 border-[2px] border-red-600 rounded-full">
                                        <img src={user?.image} />
                                    </div>
                                </div>
                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                        <p className='text-base text-slate-200 px-3'>{user?.name}</p>
                                    </li>
                                    <li>
                                        <p className='w-[200px] overflow-x-auto text-base text-slate-200 px-3'>{user?.email}</p>
                                    </li>
                                    <li>
                                        <p className='text-base text-slate-200 px-3'>Role: {user?.role}</p>
                                    </li>
                                    {/* <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li> */}
                                    <li><button onClick={handelLogOut}>LogOut</button></li>

                                </ul>
                            </div>
                        ) : (
                            <>
                                <li><Link to="/Login">Login</Link></li >
                                <li><Link to="/Register">Register</Link></li>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
