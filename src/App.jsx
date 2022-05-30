import { CssBaseline, Container, Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

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
import Signup from "./pages/Signup";
import CreateAccount from "./pages/CreateAccount";
import TermsOfUse from "./pages/TermsOfUse";
import ChooseYourLanguage from "./pages/ChooseYourLanguage";
import SparkStudio from "./pages/SparkStudio";
import TrendingShops from "./pages/SparkStudio/TrendingShops";
import Help from "./pages/Help";
import Login from "./pages/Login";
import VerifyWithOtp from "./pages/VerifyWithOtp";
import Notifications from "./pages/Notifications";
import Sparklogo from "./pages/Sparklogo";
import LanguageChoose from "./pages/LanguageChoose";
import ProductScan from "./pages/ProductScan";
import ProductScanWithVideo from "./pages/ProductScanWithVideo";
import Erecent from "./pages/EnquiryRecent";
import Eimp from "./pages/EnquiryImpotant";
import Eorder from "./pages/EnquiryOrder";

function App() {
  return (
    <Container
      sx={{
        paddingX: 1,
      }}
    >
      <CssBaseline />
      {/* <Navigate to="/intro" /> */}
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup">
          <Route index element={<Signup />} />
          <Route path="verify-with-otp" element={<VerifyWithOtp />} />
        </Route>
        <Route path="/create-account" element={<CreateAccount />} />
        {/* <Route path="/spark-studio" element={<SparkStudio />} /> */}
        <Route path="/spark-studio">
          <Route index element={<SparkStudio />} />
          <Route path="trending-shops" element={<TrendingShops />} />
        </Route>
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/choose-your-language" element={<ChooseYourLanguage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/sparklogo" element={<Sparklogo />} />
        <Route path="/language-choose" element={<LanguageChoose />} />
        <Route path="/product-scan" element={<ProductScan />} />
        <Route path="/product-scan-video" element={<ProductScanWithVideo />} />
        <Route path="/enquery-recent" element={<Erecent />} />
        <Route path="/enquery-important" element={<Eimp />} />
        <Route path="/enquery-order" element={<Eorder />} />
        <Route path="*" element={<h1>404: File Not Found</h1>} />
      </Routes>
      <Box mt={10} />
      <LowBar />
    </Container>
  );
}

export default App;
