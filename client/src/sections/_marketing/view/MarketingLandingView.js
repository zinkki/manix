// _mock
import {
  _brands,
  _members,
  _blogMarketingPosts,
  _caseStudies,
  _testimonials,
  _pricingMarketing,
} from 'src/_mock';
//
import PricingMarketing from '../../pricing/marketing';
import TeamMarketing from '../../team/marketing';
import NewsletterMarketing from '../../newsletter/marketing';
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import OurClientsMarketing from '../../our-clients/marketing';
import {
  MarketingLandingFaqs,
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingFreeSEO,
  MarketingLandingProcess,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
} from '../landing';
import { CareerJobsView } from 'src/sections/_career/view';


// ----------------------------------------------------------------------

export default function MarketingLandingPage() {
  return (
    <>
      <MarketingLandingHero />

      <CareerJobsView />
 
      <OurClientsMarketing brands={_brands} />

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

      <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} />

      <TeamMarketing members={_members} />

      <PricingMarketing plans={_pricingMarketing} />

      <MarketingLandingFaqs />

      <TestimonialMarketing testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_blogMarketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing /> 
    </>
  );
}
