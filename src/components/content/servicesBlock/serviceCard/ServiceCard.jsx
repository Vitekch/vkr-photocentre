import "./ServiceCard.css";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";



const ServiceCard = ({service}) => {

    const extaCard = (
        <Link to={`/services/${service.id_type}`}>Подробнее...</Link>
    )

    return (
        <Col xs={24} sm={12} lg={8} xl={6} style={{padding: "20px"}}>
            <Card
                title={service.type_name}
                extra={extaCard}
                className="service-card"
            >
                {service.image &&(<img src={service.image} style={{objectFit: "cover"}} height="300" width="100%" alt="Изображение" />)}
            </Card>
        </Col>
    )
}

export default ServiceCard;