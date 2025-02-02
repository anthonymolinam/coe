import Blog from '@/components/main/blog';
import Faq from '@/components/main/faq';
import Hero from '@/components/main/hero';
import Services from '@/components/main/services';
import Team from '@/components/main/team';
import Testimonial from '@/components/main/testimonial';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services/>
      <Testimonial/> 
      <Team />
      <Faq/>
      <Blog/>
    </div>
  );
}
