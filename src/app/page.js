import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import WhySoftNova from '@/components/WhySoftNova/WhySoftNova';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import Process from '@/components/Process/Process';
import TechStack from '@/components/TechStack/TechStack';
import ContactCTA from '@/components/ContactCTA/ContactCTA';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhySoftNova />
      <WhatWeDo />
      <Process />
      <TechStack />
      <ContactCTA />
      <Footer />
    </main>
  );
}
