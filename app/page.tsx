import Achievements from "@/components/Achievements";
import Courses from "@/components/Courses";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Others from "@/components/Others";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="min-h-screen w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
        <Others/>
        <Courses/>
        <Achievements/>
        <Footer/>
      </div>
    </main>
  );
}
