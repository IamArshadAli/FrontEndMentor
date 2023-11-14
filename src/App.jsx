import { ROUTES } from "./utils/app/constants";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import FrontEndMentor from "./components/app/FrontEndMentor";
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
} from "./components/1-newbie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/FrontEndMentor" element={<FrontEndMentor />} />
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
          <Route path={ROUTES.newbie.socialProofSection} element={<SocialProofSection />} />
          <Route path={ROUTES.newbie.articlePreview} element={<ArticlePreview />} />
          <Route path={ROUTES.newbie.fourCardFeature} element={<FourCardFeature />} />
          <Route path={ROUTES.newbie.baseApparel} element={<BaseApparel />} />
          <Route path={ROUTES.newbie.introComponent} element={<IntroComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
