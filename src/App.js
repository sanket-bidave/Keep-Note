import logo from "./logo.svg";
import "./App.css";
import Sachin from "./mycomponant/componantRelations/sachin";
import Vitthal from "./mycomponant/componantRelations/vitthal";
import Sanket from "./mycomponant/componantRelations/sanket";
import Counter from "./mycomponant/hooks/counter";
import Note from "./mycomponant/hooks/Disable";
import Bulb from "./mycomponant/hooks/OnOff";
import Text from "./mycomponant/hooks/textchange";
import San from "./mycomponant/hooks/test";
import Photos from "./mycomponant/hooks/gallaryProject/gallary";
import Card from "./moiveProject/moiveProject";
import "./index.css";
import DataFetch from "./mycomponant/hooks/datafetch";
import axios from "axios";
import Counter2 from "./practice/countertest";
import Duplicate from "./practice/disableTest";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./mycomponant/componantRelations/commonComponant/header";
import Footer from "./mycomponant/componantRelations/commonComponant/footer";
import ContactUS from "./mycomponant/Routs/contactUs";
import {
  Redirect,
  Route,
  Switch,
  Router,
  BrowserRouter,
} from "react-router-dom";
import Error from "./mycomponant/Routs/pageNotFound";
import FormProject from "./formproject/form";
import FromTest from "./formproject/formtest";
import "./formproject/formtest.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { DatePicker } from "antd";
import Project from "./projectnewadd/projectnew";
import KeepNote from "./keepnote/index";
import TempApptest from "./mycomponant/weatherProject/weahterTest"

function App() {
  return (
    <>
    <ToastContainer/>
    
    <KeepNote/>
      {/* <Card /> */}
    </>
  );
}
export default App;
