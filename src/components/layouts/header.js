const Header = ()=> {
    return (
      <header>
        <div className='logo'>
          <h1>Logo.here</h1>
        </div>
        <div className='nav_bar'>
          <ul>
            <li><a href='#/login'>Log in</a></li>
            <li><a href='#/signup'>Sign up</a></li>
          </ul>
        </div>
      </header>
    );
}
export default Header;