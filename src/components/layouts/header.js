import { Link } from 'react-router-dom';
import { ReactComponent as HamberIcon } from '../assets/icons/hamber.svg';
const Header = () => {
  var links = [
    {
      name: "Home",
      link: ""
    },
    {
      name: "Attraction Listings",
      link: "#AttractionListings",
    },
    {
      name: "Interactive Maps",
      link: "map"
    },
    {
      name: "Restaurant Guide",
      link: "#RestaurantGuide"
    }, {
      name: "Events Calendar",
      link: "#EventsCalendar"
    },
    {
      name: "Personalized Recommendations",
      link: "#PersonalizedRecommendations",
    },
    {
      name: "Feedbacks",
      link: "#Feedbacks"
    },
    {
      name: "Social Sharing",
      link: "#SocialSharing"
    }, {
      name: "Log in",
      link: "#Login",
    },
    {
      name: "Sign up",
      link: "#Signup"
    }
  ]
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
          {
            links.map(({link, name}, i)=> <li key={"link-key-"+i}><Link to={`/${link}`} onClick={closeNav}>{name}</Link></li>)
          }
        </ul>
      </div>
    </header>
  );
}
export default Header;