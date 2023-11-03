import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import FrontEndMentor from "./components/app/FrontEndMentor";
import ResultSummary from "./components/1-newbie/1-results-summary/ResultSummary";
import ProductCard from "./components/1-newbie/2-product-card/ProductCard";
import NFTCard from "./components/1-newbie/3-nft-card/NFTCard";
import InteractiveRating from "./components/1-newbie/4-interactive-rating/InteractiveRating";

function App() {
  return (
    <>
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
            <Route path="result-summary" element={<ResultSummary />} />
            <Route path="product-card" element={<ProductCard />} />
            <Route path="nft-card" element={<NFTCard />} />
            <Route path="interactive-rating" element={<InteractiveRating />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
