import "./ServicesBlock.css";
import { Collapse, Row } from "antd";
import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard/ServiceCard";
const { Panel } = Collapse;

const services = [
    {
        id: 1,
        title: "Услуга 1",
        img: "http://wallpapers-image.ru/oboi/wallpapers/wallpapers-nature-0.jpg"
    },
    {
        id: 2,
        title: "Услуга 2",
        img: "http://wallpapers-image.ru/oboi/wallpapers/wallpapers-nature-0.jpg"
    },
    {
        id: 3,
        title: "Услуга 3",
        img: "http://wallpapers-image.ru/oboi/wallpapers/wallpapers-nature-0.jpg"
    },
    {
        id: 4,
        title: "Услуга 4",
        img: "http://wallpapers-image.ru/oboi/wallpapers/wallpapers-nature-0.jpg"
    },
]

const ServicesBlock = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        const asyncActions = async () => {
            fetch("http://localhost:3001/get-data",{
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ type: "order_types" }),
            }).then((result) => {
                if (result.ok) {
                    return result.json();
                }
            }).then((data) => {
                setServices(data);
            });
        }

        asyncActions();
    }, [])

    return (
        <>
            <h1 className="block-title" id="services">
                Каталог услуг
            </h1>
            <Row>
                { services.slice(0, 4).map((el) => (
                    <ServiceCard key={el.id_type} service={el} />
                ))}
            </Row>
            <Collapse className="other-services">
                <Panel className="other-services__panel" header="Остальные услуги" key="1">
                    <Row>
                        { services.slice(4).map((el) => (
                            <ServiceCard key={el.id_type} service={el} />
                        ))}
                    </Row>
                </Panel>
            </Collapse>
        </>
    )
}

export default ServicesBlock;