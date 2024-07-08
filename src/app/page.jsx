import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <div className="container mx-auto">
          <Header />
          <BlogSection />
        </div>
        
        <Footer />
      </main>
    </>
  );
}
