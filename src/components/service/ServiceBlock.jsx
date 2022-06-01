import { Layout } from "antd";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard/ServiceCard";
import "./ServiceBlock.css";

const { Content } = Layout;

const ServiceBlock = () => {

    const { id } = useParams();

    const [service, setService] = useState([]);
    useEffect(() => {
        const asyncActions = async () => {
            fetch("http://localhost:3001/get-data",{
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ type: "service", payload: { id } }),
            }).then((result) => {
                if (result.ok) {
                    return result.json();
                }
            }).then((data) => {
                console.log(data)
                setService(data);
            });
        }

        asyncActions();
    }, [])

    return (
        <Content className="service-view-block">
            <ServiceCard service={service} />
        </Content>
    )
}

export default ServiceBlock;