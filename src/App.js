import React,{Fragment} from "react";
import {Routes,Route} from "react-router-dom";

/*
** Page Components
*/
import {
  LandingPage,
  Destinations,
  Holidays,
  Error,
  Explore,
  Search,
  Hotels,
  Notifications,
  Offers,
} from "./pages/exports";

/*
** Common Components
*/
import {Navbar,Footer} from "./components/common/exports";

/*
** React-slick
*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route index path="/explore" element={<Explore />} />
          <Route index path="/search" element={<Search />} />
          <Route index path="/hotels" element={<Hotels />} />
          <Route index path="/offers" element={<Offers />} />
          <Route index path="/notifications" element={<Notifications />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App