import { Row, Col, Divider, Typography, Button } from "antd"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import LoadingComp from "./loading/Loading";
import "./Admin.css"

const { Title } = Typography;

const AdminView = () => {

	const [tableKey, setTableKey] = useState("orders");
	const [percent, setPercent] = useState(0);
	const [isLoading, setLoading] = useState(true);
	const [isLoadingFailed, setLoadingFailed] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			setPercent(20);
			const asyncActions = async () => {
				try {
					setTimeout(() => { setPercent(26) }, 1000);
					setTimeout(() => { setPercent(52) }, 2000);
					setTimeout(() => { setPercent(97); navigate("/admin-login", { replace: true }); }, 4000);
					setTimeout(() => { setLoading(false) }, 5000);
				} catch (e) {
					setLoadingFailed(true)
				}
			}
			
			asyncActions()
		}
	}, []);
	return (
		<div>
			{isLoading ? (<LoadingComp percent={percent} error={isLoadingFailed}/>) :
			(<><Row>
				<Col className="admin-panel__heading">
					<Title level={1}>Панель администрирования</Title>
					<Divider></Divider>
				</Col>
			</Row>
			<Row>
				<Col className="admin-panel__controls-list">
					<Button
						onClick={() => {setTableKey("customers")}}
						type={tableKey === "customers" ? "primary" : "default"}
					>
						Клиенты
					</Button>
					<Button
						onClick={() => {setTableKey("orders")}}
						type={tableKey === "orders" ? "primary" : "default"}
					>
						Заказы
					</Button>
					<Button
						onClick={() => {setTableKey("employees")}}
						type={tableKey === "employees" ? "primary" : "default"}
					>
						Сотрудники
					</Button>
					<Button
						onClick={() => {setTableKey("payments")}}
						type={tableKey === "payments" ? "primary" : "default"}
					>
						Платежи
					</Button>
				</Col>
			</Row></>)}
		</div>
	)
}

export default AdminView;