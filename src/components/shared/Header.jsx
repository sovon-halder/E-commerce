import { Link } from "react-router-dom";


export default function Header(){
    return(
        <header>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link> </li>
        <li><Link to="/product">Product</Link> </li>
        <li><Link to="/about">About</Link> </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/product">Product</Link> </li>
        <li><Link to="/about">About</Link> </li>
    </ul>
  </div>
  <div className="navbar-end">
  <Link to="/login" className="btn btn-neutral btn-outline">Login</Link>
  <Link to="/signUp" className="btn btn-neutral btn-outline ml-4 mr-2">Sign Up</Link>
  </div>
</div>
</header>
    );
};