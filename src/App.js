import './App.css';
import 'antd/dist/antd.min.css';
import { Layout } from "antd";
import HeaderComp from "./components/layout/Header/Header";
import FooterComp from './components/layout/Footer/Footer';
const { Content } = Layout;

function App() {
  return (
    <Layout className="land-layout">
      <HeaderComp />
      <Content className="land-content">Content</Content>
      <FooterComp />
    </Layout>
  );
}

export default App;
