import { WhereIveWorked } from "./components/Whereiveworked";
import { WhatIveWorkedOn } from "./components/Whativeworkedon";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/layout/NavBar";
import { Skills } from "./components/Skills";
import { WhatElse } from "./components/WhatElse";
import { Footer } from "./components/layout/Footer";
import { experiences, images, projects, skills, stats } from "./data";
import { LifeGallery } from "./components/LifeGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <NavBar />
      <div className="mx-auto max-w-6xl">
        <Hero stats={stats} />
        <WhereIveWorked experiences={experiences} />
        <WhatIveWorkedOn projects={projects} />
        <Skills skills={skills} />
        <WhatElse />
        <LifeGallery images={images} />
      </div>
      <Footer />
    </main>
  );
}