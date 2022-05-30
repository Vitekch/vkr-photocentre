import { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import SubmitServiceModal from "../../modals/submitService/submitService";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Card className="service-view__card">
                <Row>
                    <Col md={12} className="service-view__col flex flex--a-center">
                        <img src={service.img} width="100%" alt="Обложка услуги" />
                    </Col>
                    <Col md={12} className="service-view__col">
                        <Row>
                            <Col md={16}>
                                <h1 className="service-view__title">{service.title}</h1>
                            </Col>
                            <Col md={8} className="service-view__send-order-block">
                            <Button type="primary" onClick={() => {setModalVisible(true)}}>
                                Оставить заявку
                            </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={24}>
                                <p className="service-view__description">
                                    {service.description}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={24} className="service-view__col">
                            <Link to="/">
                                <Button type="primary">
                                    Вернуться
                                </Button>
                            </Link>
                    </Col>
                </Row>
            </Card>
            <SubmitServiceModal idService={service.id} isVisible={isModalVisible} cancelHandler={() => {setModalVisible(false)}} />
        </>
    )
}

export default ServiceCard;