import "./ServicesBlock.css";
import { Collapse, Row } from "antd";
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
    return (
        <>
            <h1 className="block-title" id="services">
                Каталог услуг
            </h1>
            <Row>
                { services.map((el) => (
                    <ServiceCard key={el.id} service={el} />
                ))}
            </Row>
            <Collapse className="other-services">
                <Panel className="other-services__panel" header="Остальные услуги" key="1">
                    <Row>
                        { services.map((el) => (
                            <ServiceCard key={el.id} service={el} />
                        ))}
                    </Row>
                </Panel>
            </Collapse>
        </>
    )
}

export default ServicesBlock;