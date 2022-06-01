import "./Content.css";
import { Divider, Layout } from "antd";
import NewsCarousel from "./newsCarousel/NewsCarousel";
import ServicesBlock from "./servicesBlock/ServicesBlock";
import FeedbackBlock from "./feedbackBlock/FeedbackBlock";
import FeedbackForm from "./feedbackForm/FeedbackForm";
import Principials from "./principials/Principials";
import Heading from "./heading/Heading";

const { Content } = Layout;

const ContentComp = () => {
    return (<>
        <Heading />
        <Content className="land-content">
            
            <NewsCarousel />
            <Divider className="block-divider"></Divider>
            <ServicesBlock />
            <Divider className="block-divider"></Divider>
            <Principials />
            <Divider className="block-divider"></Divider>
            <FeedbackBlock />
            <Divider className="block-divider"></Divider>
            <h1 className="block-title"  id="map">
                Месторасположение
            </h1>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c1542ebd8fc9acbec84604ee515390329b3d7c930a90d4fdff102851c86c956&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
            <Divider className="block-divider"></Divider>
            <FeedbackForm />
        </Content>
        </>
    )
}

export default ContentComp;