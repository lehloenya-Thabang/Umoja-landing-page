import Home from "@/pages/home";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Home />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
