import ClientReview from "./components/ClientReview";
import Conversations from "./components/Conversations";
import CTA from "./components/CTA";
import Customers from "./components/Customers";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoChat from "./components/VideoChat";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <VideoChat />
      <Conversations />
      <Customers />
      <ClientReview />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
