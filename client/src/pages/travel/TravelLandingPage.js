import { Helmet } from 'react-helmet-async';
// sections
import { TravelLandingView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelLandingPage() {
 
  return (
    <>
      <Helmet>
        <title>오토매닉스</title>
      </Helmet>

      <TravelLandingView />
    </>
  );
}
