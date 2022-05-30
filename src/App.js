import './App.css';
import 'antd/dist/antd.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from "antd";
import HeaderComp from "./components/layout/Header/Header";
import FooterComp from './components/layout/Footer/Footer';
import ContentComp from "./components/content/Content";
import ServiceBlock from "./components/service/ServiceBlock";

const Landing = () => {
  return (
    <>
      <HeaderComp />
      <ContentComp />
      <FooterComp />
    </>
  )
}

function App() {
  return (
    <Layout className="land-layout">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services">
            <Route path=":id" element={<ServiceBlock />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
