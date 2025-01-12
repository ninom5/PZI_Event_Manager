import eventImg from "../assets/Images/preuzmi.png";
import eventImg2 from "../assets/Images/aa.jfif";
import eventImg3 from "../assets/Images/bb.jfif";

function HomePage() {
  return (
    <div>
      <h1>
        <i>Discover the best events around you</i>
      </h1>
      <div className="images-container">
        <img src={eventImg} alt="image of event" className="first-img" />
        <img src={eventImg2} alt="image of event" className="second-img" />
        <img src={eventImg3} alt="image of event" />
      </div>
    </div>
  );
}

export default HomePage;
