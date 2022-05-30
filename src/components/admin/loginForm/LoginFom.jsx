import { Card, Row, Col, Input, Button } from "antd";
import "./LoginForm.css";

const LoginForm = () => {
	return (
		<Row>
			<Col>
				<Card>
					<Row>
						<Col>
							<Input />
						</Col>
					</Row>
					<Row>
						<Col>
							<Input
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button>Вход</Button>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	)
}

export default LoginForm;