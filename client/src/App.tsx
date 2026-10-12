import Home from "@/pages/home";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
