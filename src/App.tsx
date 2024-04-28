import HorizontalNavbar from "./Components/MovableNavbar";
import NativeWebSocketaAPI from "./Components/NativeWebSocketaAPI";
import ScrollOnCategory from "./Components/ScrollOnCategory";
import FoodCategories from "./Components/ScrollOnCategoryChatGPT";
import { ToastContainer } from "react-toastify";
import PaymentForm from "./Components/WebsocketTimeOut";
import WebsocketTimeOut2 from "./Components/WebsocketTimeOut2";


function  App() {
  //give an initial state so that the data won't be undefined at start
 return <>
  {/* <NativeWebSocketaAPI2/> */}
  {/* <NativeWebSocketaAPI/> */}
  {/* <ScrollOnCategory /> */}
  {/* <FoodCategories /> */}
  {/* <HorizontalNavbar/> */}
  {/* <PaymentForm /> */}
  <WebsocketTimeOut2 />
  <ToastContainer />
  </>
}

export default  App;