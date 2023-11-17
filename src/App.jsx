import { ROUTES } from "./utils/app/constants";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import FrontEndMentor from "./components/app/FrontEndMentor";
//* Newbie components
import {
  ResultSummary,
  ProductCard,
  NFTCard,
  InteractiveRating,
  StatsCard,
  OrderSummary,
  QRCode,
  ThreeColumnCard,
  ProfileCard,
  FAQAccordian,
  SocialProofSection,
  ArticlePreview,
  FourCardFeature,
  BaseApparel,
  IntroComponent,
  SinglePriceGrid,
  PingComingSoon,
  HuddleLandingPage,
} from "./components/1-newbie";

//* Junior components
import { NewsLetterSignUp } from "./components/2-junior";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/FrontEndMentor" element={<FrontEndMentor />} />

        {/* N E W B I E */}
        <Route
          path="FrontEndMentor/newbie"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route
            path={ROUTES.newbie.resultSummary}
            element={<ResultSummary />}
          />
          <Route path={ROUTES.newbie.productCard} element={<ProductCard />} />
          <Route path={ROUTES.newbie.nftCard} element={<NFTCard />} />
          <Route
            path={ROUTES.newbie.interactiveRating}
            element={<InteractiveRating />}
          />
          <Route path={ROUTES.newbie.statsCard} element={<StatsCard />} />
          <Route path={ROUTES.newbie.orderSummary} element={<OrderSummary />} />
          <Route path={ROUTES.newbie.qrCode} element={<QRCode />} />
          <Route
            path={ROUTES.newbie.threeColumnCard}
            element={<ThreeColumnCard />}
          />
          <Route path={ROUTES.newbie.profileCard} element={<ProfileCard />} />
          <Route path={ROUTES.newbie.faqAccordion} element={<FAQAccordian />} />
          <Route
            path={ROUTES.newbie.socialProofSection}
            element={<SocialProofSection />}
          />
          <Route
            path={ROUTES.newbie.articlePreview}
            element={<ArticlePreview />}
          />
          <Route
            path={ROUTES.newbie.fourCardFeature}
            element={<FourCardFeature />}
          />
          <Route path={ROUTES.newbie.baseApparel} element={<BaseApparel />} />
          <Route
            path={ROUTES.newbie.introComponent}
            element={<IntroComponent />}
          />
          <Route
            path={ROUTES.newbie.singlePriceGrid}
            element={<SinglePriceGrid />}
          />
          <Route
            path={ROUTES.newbie.pingComingSoon}
            element={<PingComingSoon />}
          />
          <Route
            path={ROUTES.newbie.huddleLandingPage}
            element={<HuddleLandingPage />}
          />
        </Route>

        {/* J U N I O R */}
        <Route
          path="FrontEndMentor/junior"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route
            path={ROUTES.junior.newsletterSignUp}
            element={<NewsLetterSignUp />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
