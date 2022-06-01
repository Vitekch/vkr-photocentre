import { Row, Col, Divider, Typography, Button, Table } from "antd"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import LoadingComp from "./loading/Loading";
import "./Admin.css"

const { Title } = Typography;

const columnsClients = [
	{
		title: "ID",
		dataIndex: "id_customer",
		key: "id_customer",
	},
	{
		title: "Имя",
		dataIndex: "first_name",
		key: "first_name",
	},
	{
		title: "Фамилия",
		dataIndex: "last_name",
		key: "last_name",
	},
	{
		title: "Отчество",
		dataIndex: "patronymic",
		key: "patronymic",
	},
	{
		title: "Номер телефона",
		dataIndex: "phone_number",
		key: "phone_number",
	},
];
const columnsOrders = [
	{
		title: "ID",
		dataIndex: "order_id",
		key: "order_id",
	},
	{
		title: "Клиент",
		dataIndex: "client",
		key: "client",
	},
	{
		title: "Услуга",
		dataIndex: "service",
		key: "service",
	},
	{
		title: "Дата",
		dataIndex: "order_date",
		key: "order_date",
	},
	{
		title: "Выполняет сотрудник",
		dataIndex: "employee",
		key: "employee",
	},
];
const columnsPayments = [
	{
		title: "ID",
		dataIndex: "id_payment",
		key: "id_payment",
	},
	{
		title: "Дата платежа",
		dataIndex: "sender_account",
		key: "sender_account",
	},
	{
		title: "Счет отправителя",
		dataIndex: "beneficiary_account",
		key: "beneficiary_account",
	},
	{
		title: "Номер заказа",
		dataIndex: "id_order",
		key: "id_order",
	},
	{
		title: "Управляет сотрудник",
		dataIndex: "employee",
		key: "employee",
	},
];
const columnsEmployees = [
	{
		title: "ID",
		dataIndex: "Id_employee",
		key: "Id_employee",
	},
	{
		title: "Имя",
		dataIndex: "first_name",
		key: "first_name",
	},
	{
		title: "Фамилия",
		dataIndex: "last_name",
		key: "last_name",
	},
	{
		title: "Отчество",
		dataIndex: "patronymic",
		key: "patronymic",
	},
	{
		title: "Номер телефона",
		dataIndex: "phone_number",
		key: "phone_number",
	},
	{
		title: "Паспортные данные",
		dataIndex: "passport",
		key: "passport",
	},
	{
		title: "Должность",
		dataIndex: "position",
		key: "position",
	},
	{
		title: "Зарплата",
		dataIndex: "salary",
		key: "salary",
	},
	{
		title: "Дата приема на работу",
		dataIndex: "start_working",
		key: "start_working",
	},
];
const columnsOrderTypes = [
	{
		title: "ID",
		dataIndex: "id_type",
		key: "id_type",
	},
	{
		title: "Наименование услуги",
		dataIndex: "type_name",
		key: "type_name",
	},
	{
		title: "Цена",
		dataIndex: "price",
		key: "price",
	},
];

const AdminView = () => {

	const [tableKey, setTableKey] = useState("orders");
	const [percent, setPercent] = useState(0);
	const [isLoading, setLoading] = useState(true);
	const [isLoadingFailed, setLoadingFailed] = useState(false);
	const [columns, setColumts] = useState(columnsOrders);
	const [tableData, setTableData] = useState([]);

	const navigationHandler = (key) => {
		setTableKey(key);
		fetch("http://localhost:3001/get-data",{
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ type: key }),
		}).then((result) => {
			if (result.ok) {
				return result.json();
			}
		}).then((data) => {
			console.log(data)
			setTableData(data);
			switch (key) {
				case "customers":
					setColumts(columnsClients);
					break;
				case "orders":
					setColumts(columnsOrders);
					break;
				case "employees":
					setColumts(columnsEmployees);
					break;
				case "payments":
					setColumts(columnsPayments);
					break;
				case "order_types":
					setColumts(columnsOrderTypes);
					break;
				default:
					break;
			}
		})
	}

	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			setPercent(20);
			const asyncActions = async () => {
				try {
					setTimeout(() => { setPercent(26) }, 1000);
					setTimeout(() => { setPercent(52) }, 2000);
					setTimeout(() => {
						fetch("http://localhost:3001/get-data",{
							headers: {
								"Content-Type": "application/json",
							},
							method: "POST",
							body: JSON.stringify({ type: "orders" }),
						}).then((result) => {
							setPercent(69)
							if (result.ok) {
								return result.json();
							}
						}).then((data) => {
							setTableData(data);
							setPercent(92);
							setColumts(columnsOrders);
						}).finally(() => {setLoading(false)});
					}, 3000)
				} catch (e) {
					setLoadingFailed(true)
				}
			}
			
			asyncActions()
		}
	}, []);
	return (
		<div className="admin-panel__container">
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
						onClick={() => {navigationHandler("customers")}}
						type={tableKey === "customers" ? "primary" : "default"}
					>
						Клиенты
					</Button>
					<Button
						onClick={() => {navigationHandler("orders")}}
						type={tableKey === "orders" ? "primary" : "default"}
					>
						Заказы
					</Button>
					<Button
						onClick={() => {navigationHandler("employees")}}
						type={tableKey === "employees" ? "primary" : "default"}
					>
						Сотрудники
					</Button>
					<Button
						onClick={() => {navigationHandler("payments")}}
						type={tableKey === "payments" ? "primary" : "default"}
					>
						Платежи
					</Button>
					<Button
						onClick={() => {navigationHandler("order_types")}}
						type={tableKey === "order_types" ? "primary" : "default"}
					>
						Типы услуг
					</Button>
				</Col>
				<Divider></Divider>
			</Row>
			<Row>
				<Col className="admin-panel__table">
					<Table dataSource={tableData} columns={columns} />;
				</Col>
			</Row>
			</>)}
		</div>
	)
}

export default AdminView;