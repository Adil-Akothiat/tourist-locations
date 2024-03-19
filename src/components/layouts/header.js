import {ReactComponent as HamberIcon} from '../assets/icons/hamber.svg';
const Header = ()=> {
    function openNav() {
      document.querySelector(".nav_bar").classList.add("open_nav");
    }
    function closeNav() {
      document.querySelector(".nav_bar").classList.remove("open_nav");
    }
    return (
      <header>
        <div className='logo'>
          <h1>THE GUIDE</h1>
        </div>
        <button onClick={openNav}>
          <HamberIcon />
        </button>
        <div className='nav_bar'>
          <button onClick={closeNav}>x</button>
          <ul>
            <li><a href='#/AttractionListings'>Attraction Listings</a></li>
            <li><a href='#/InteractiveMaps'>Interactive Maps</a></li>
            <li><a href='#/RestaurantGuide'>Restaurant Guide</a></li>
            <li><a href='#/EventsCalendar'>Events Calendar</a></li>
            <li><a href='#/PersonalizedRecommendations'>ersonalized Recommendations</a></li>
            <li><a href='#/Feedbacks'>Feedbacks</a></li>
            <li><a href='#/SocialSharing'>Social Sharing</a></li>
            <li><a href='#/login'>Log in</a></li>
            <li><a href='#/signup'>Sign up</a></li>
          </ul>
        </div>
      </header>
    );
}
export default Header;