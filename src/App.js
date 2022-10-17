import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Layouts/Footer";
import Header from "./Components/Layouts/Header";
import Reward from "./Components/Elements/Reward";
import Friends from "./Components/Elements/Friends";
import Faqs from "./Components/Utils/Faqs";
import Mission from "./Components/Elements/Mission";
import Vision from "./Components/Elements/Vision";
import Roadmap from "./Components/Elements/Roadmap";
import Rugpul from "./Components/Elements/Rugpul";
import Benefits from "./Components/Elements/Benefits";
import Stacking from "./Components/Elements/Stacking";
import Video from "./Components/Elements/Video";
import Platforms from "./Components/Elements/Platforms";
import Cards from "./Components/Elements/Cards";
import Yahoo from "./Components/Elements/Yahoo";
import Yahoopic from "./Components/Elements/Yahoopic";
import Tokenomics from "./Components/Elements/Tokenomics";
import Multicrousel from "./Components/Elements/Multicrousel";

function App() {
  return (
    <div>
      <Header />
      <Reward />
      <Yahoopic/>
      <Yahoo/>
      <Multicrousel/>
      <Cards/>
      <Video/>
      <Stacking/>
      <Benefits/>
      <Platforms/>
      <Mission/>
      <Vision/>
      <Tokenomics/>
      <Roadmap/>
      <Rugpul/>
      <Faqs />
      <Friends />
      <Footer />
    </div>
  );
}

export default App;
