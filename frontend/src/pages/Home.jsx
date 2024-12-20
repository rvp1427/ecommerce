import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Subscribe from "../components/Subscribe";
import Support from "../components/Support";

function Home() {
  return (
    <div className="section">
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Support />
      <Subscribe />
    </div>
  );
}

export default Home;
