import { CssBaseline, Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import LowBar from "./components/LowBar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";
import Enquiry from "./pages/Enquiry";
// import Feed from "./pages/Feed";
import User from "./pages/User";
import Favourites from "./pages/Favourites";
import FavouritePage from "./pages/FavouritePage";
import Notification from "./pages/Notification";
import RecentlyViewed from "./pages/RecentlyViewed";
import MyOrders from "./pages/MyOrders";
import MyAddress from "./pages/MyAddress";
import PaymentMethod from "./pages/PaymentMethod";
import EditProfile from "./pages/EditProfile";
import MyCart from "./pages/MyCart";
import HelpCenter from "./pages/HelpCenter";
import AccountSettings from "./pages/AccountSettings";
import PrivasySettings from "./pages/PrivasySettings";
import AccountInformation from "./pages/AccountInformation";
import Language from "./pages/Language";
import SlidingMenu from "./pages/SlidingMenu";
import ScanAndBuy from "./pages/ScanAndBuy";
import Refer from "./pages/Refer";
import ScanAndShop from "./pages/ScanAndShop";
import Intro from "./pages/Intro";

function App() {
  return (
    <Container
      sx={{
        paddingX: 1,
      }}
    >
      <CssBaseline />
      <Header />
      <Box mt={5} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/enquiry" element={<Enquiry />} />
        {/* <Route path="/feed" element={<Feed />} /> */}
        <Route path="/user" element={<User />} />
        <Route path="/favourites">
          <Route index element={<Favourites />} />
          <Route path="led" element={<FavouritePage />} />
        </Route>
        <Route path="/account-information" element={<AccountInformation />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/recently-viewed" element={<RecentlyViewed />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-address" element={<MyAddress />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/scan-and-buy" element={<ScanAndBuy />} />
        <Route path="/privasy-settings" element={<PrivasySettings />} />
        <Route path="/language" element={<Language />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/sliding-menu" element={<SlidingMenu />} />
        <Route path="/scan-and-shop" element={<ScanAndShop />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="*" element={<h1>404: File Not Found</h1>} />
      </Routes>
      <Box mt={10} />
      <LowBar />
    </Container>
  );
}

export default App;
