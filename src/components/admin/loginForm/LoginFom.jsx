import { Card, Row, Col, Input, Button, Spin } from "antd";
import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setLoading] = useState(false);

	const loginHandler = () => {
		if (login && password) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false)
			}, 1000)
		}
	}

	return (
		<Row className="login__container">
			<Col className="login-form__container">
				<Card className="login-form__card">
					<div className="login-form__body">
					<Row>
						<Col md={24}>
							<h1>Вход</h1>
						</Col>
					</Row>	
					<Row>
						<Col md={24}>
							<h4>Логин</h4>
							<Input value={login} onChange={(e) => {setLogin(e.target.value)}}/>
						</Col>
					</Row>
					<Row>
						<Col md={24}>
							<h4>Пароль</h4>
							<Input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
						</Col>
					</Row>
					<Row>
						<Col md={24} className="flex flex--j-center">
							<Button type="primary" loading={isLoading} onClick={loginHandler}>Вход</Button>
						</Col>
					</Row>
					</div>
				</Card>
			</Col>
		</Row>
	)
}

export default LoginForm;