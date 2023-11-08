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
} from "./components/1-newbie";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/FrontEndMentor"}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
