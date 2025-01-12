import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageMain from "../components/HomePageMain";

function HomePage() {
  return (
    <div className="home-container">
      <Header />
      <HomePageMain />
      <Footer />
    </div>
  );
}

export default HomePage;
