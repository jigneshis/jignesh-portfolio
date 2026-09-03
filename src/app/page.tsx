import { HeroProjectsFlow } from '@/components/sections/HeroProjectsFlow';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main className="flex flex-col w-full items-center">
      <div className="w-full max-w-[1200px] border-x border-border/40 min-h-screen relative overflow-visible bg-background">
        <HeroProjectsFlow />
        <Services />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
