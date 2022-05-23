import { Layout } from "antd";
import { useParams } from "react-router";
import ServiceCard from "./serviceCard/ServiceCard";
import "./ServiceBlock.css";

const { Content } = Layout;

const ServiceBlock = () => {

    const { id } = useParams();

    const service = {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris vel mollis. In mattis metus non tortor mollis cursus. Etiam laoreet pharetra augue, sed rhoncus neque fermentum ut. Duis eu ligula eget tortor scelerisque lacinia. Nullam molestie semper nisi quis aliquet. Nullam dapibus erat sem, id pharetra erat hendrerit nec. Praesent nec eros et mi bibendum feugiat maximus in risus. Integer placerat leo et maximus sodales. Nunc porttitor, ex eget consequat tristique, nulla ante volutpat eros, eget ultrices mauris lorem id tellus. Ut at elementum tellus, a mollis est. Phasellus consequat iaculis sapien euismod congue. Nulla euismod quam nisl.",
        img: "http://wallpapers-image.ru/oboi/wallpapers/wallpapers-nature-0.jpg"
    }

    return (
        <Content className="service-view-block">
            <ServiceCard service={service} />
        </Content>
    )
}

export default ServiceBlock;