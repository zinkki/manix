// _mock
import { _members, _brandsColor } from 'src/_mock';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import PricingHome from '../../pricing/home';
import {
  HomeForDesigner,
  HomeFeatureHighlights,
} from '../components';
import { MarketingLandingHero } from 'src/sections/_marketing/landing';
import { TeamMarketingAbout } from 'src/sections/team/marketing';
import { OurClientsMarketingAbout } from 'src/sections/our-clients/marketing';
import ContactCareerForm from 'src/sections/contact/career/ContactCareerForm';
import S3Test from 'src/pages/S3Test';
import KakaoMap from 'src/components/KakaoMap';
import MailTest from 'src/components/MailTest';
import VideoUpload from 'src/components/VideoUpload';


// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />

      {/* <HomeHero /> */}
      <MarketingLandingHero/>{/* 메인배너헤더 */}

      <PricingHome />{/* what we do */}

      <HomeForDesigner /> {/* 성공적이벤트 */}
      
      <TeamMarketingAbout /> {/* 포트폴리오 */}
      
      <HomeFeatureHighlights /> {/* 관계사 */}

      <OurClientsMarketingAbout brands={_brandsColor} /> {/* 파트너 */}

      <ContactCareerForm /> {/* 컨택폼 */}

      <KakaoMap /> {/* 카카오지도 */}

      {/* <VideoUpload />  비디오업로드테스트 */}
    </>
  );
}
