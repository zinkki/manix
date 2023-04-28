import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import SimpleLayout from '../layouts/simple';
import CompactLayout from '../layouts/compact';
//
import {
  // Marketing
  MarketingBlogPage,
  MarketingPostPage,
  MarketingAboutPage,
  MarketingContactPage,
  MarketingLandingPage,
  MarketingServicesPage,
  MarketingCaseStudyPage,
  MarketingCaseStudiesPage,
  // Travel
  TravelBlogPage,
  TravelPostPage,
  TravelTourPage,
  TravelAboutPage,
  TravelToursPage,
  TravelContactPage,
  TravelLandingPage,
  TravelCheckoutPage,
  TravelOrderCompletedPage,
  // Career
  CareerJobPage,
  CareerBlogPage,
  CareerJobsPage,
  CareerPostPage,
  CareerAboutPage,
  CareerContactPage,
  CareerLandingPage,
  // E-Learning
  ElearningBlogPage,
  ElearningPostPage,
  ElearningAboutPage,
  ElearningCoursePage,
  ElearningContactPage,
  ElearningCoursesPage,
  ElearningLandingPage,
  // E-Commerce
  EcommerceCartPage,
  EcommerceComparePage,
  EcommerceLandingPage,
  EcommerceProductPage,
  EcommerceCheckoutPage,
  EcommerceProductsPage,
  EcommerceWishlistPage,
  EcommerceAccountOrdersPage,
  EcommerceOrderCompletedPage,
  EcommerceAccountPaymentPage,
  EcommerceAccountPersonalPage,
  EcommerceAccountVouchersPage,
  EcommerceAccountWishlistPage,
  // Auth
  LoginCoverPage,
  VerifyCodePage,
  RegisterCoverPage,
  ResetPasswordPage,
  LoginBackgroundPage,
  LoginIllustrationPage,
  RegisterBackgroundPage,
  RegisterIllustrationPage,
  // Common
  Page404,
  Page500,
  HomePage,
  AutomanixMain,
  PaymentPage,
  SupportPage,
  Pricing01Page,
  Pricing02Page,
  ComingSoonPage,
  MaintenancePage,
  // Components
  DemoIconsPage,
  DemoImagePage,
  DemoLabelPage,
  ComponentsPage,
  DemoPlayerPage,
  DemoAnimatePage,
  DemoCountUpPage,
  DemoLightboxPage,
  DemoMarkdownPage,
  DemoMegaMenuPage,
  DemoCarouselsPage,
  DemoScrollbarPage,
  DemoTextMaxLinePage,
  DemoNavigationBarPage,
  DemoFormValidationPage,
} from './elements';
import Main from 'src/pages/Main';
import Example01 from 'src/pages/Example01';
import PortfolioList from 'src/pages/PortfolioList';
import PortfolioDetail from 'src/pages/PorfolioDetail';
import { element } from 'prop-types';
import Login from 'src/pages/Login';
//import AdminForm from 'src/pages/AdminForm';
import AdminWrite from 'src/components/AdminWrite';
import AdminPFList from 'src/components/AdminPFList';
import AdminVisit from 'src/components/AdminVisit';
import LoginLayout from 'src/pages/LoginLayout';
import AdminUpdate from 'src/components/AdminUpdate';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Non layout
    // {
    //   path: 'auth',
    //   children: [
    //     { path: 'login', element: <LoginCoverPage /> },
    //     { path: 'register', element: <RegisterCoverPage /> },
    //   ],
    // },
    // Main layout
    {
      //element: <MainLayout />,
      element: <Main />,
      //element: <TravelLandingPage />,
      children: [
        // { element: <HomePage />, index: true },
        { element: <AutomanixMain />, index: true },
        //PortfolioList
        {
          path: 'list', element: <PortfolioList /> 
        },
        //PortfolioDetail
        {
          path:'detail/*', element:<PortfolioDetail/>
        },
        //AdminLogin
        {
          path:'auth', element:<LoginLayout />,
          children: [
            { path: 'write', element: <AdminWrite /> },
            { path: 'list', element: <AdminPFList /> },
            { path: 'update/*', element: <AdminUpdate/>}
          ],
        },
        //Admin
        {
          path: 'admin',
          children: [
            { path: 'write', element: <AdminWrite /> },
            { path: 'list', element: <AdminPFList /> },
          ],
        },
  ]},
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
