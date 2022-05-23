import "./Content.css";
import { Divider, Layout } from "antd";
import NewsCarousel from "./newsCarousel/NewsCarousel";
import ServicesBlock from "./servicesBlock/ServicesBlock";
import FeedbackBlock from "./feedbackBlock/FeedbackBlock";
import FeedbackForm from "./feedbackForm/FeedbackForm";

const { Content } = Layout;

const ContentComp = () => {
    return (
        <Content className="land-content">
            <NewsCarousel />
            <Divider className="block-divider"></Divider>
            <ServicesBlock />
            <Divider className="block-divider"></Divider>
            <FeedbackBlock />
            <Divider className="block-divider"></Divider>
            <FeedbackForm />
        </Content>
    )
}

export default ContentComp;