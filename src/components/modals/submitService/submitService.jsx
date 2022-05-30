import "./submitService.css";
import { Modal, Button, Form, Row, Col, Input } from "antd";
import { useState } from "react";

const SubmitServiceModal = ({ idService, isVisible, cancelHandler }) => {

    const [name_1, setName_1] = useState();
    const [name_2, setName_2] = useState();
    const [name_3, setName_3] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const sendOrder = () => {
        console.log(idService);
    }

    return (
        <Modal
            title="Оставить заявку"
            visible={isVisible}
            onOk={sendOrder}
            onCancel={cancelHandler}
            okText="Отправить"
            cancelText="Отмена"
        >
            <Form name="feedback">
                <Row>
                    <Col sm={24} md={8} className="feedback-form__field-container">
                        <h4>Имя</h4>
                        <Input
                            value={name_1}
                            onInput={(e) => {setName_2(e.currentTarget.value)}}
                            className="feedback-form__input"
                        />
                    </Col>
                    <Col sm={24} md={8} className="feedback-form__field-container">
                        <h4>Фамилия</h4>
                        <Input
                            value={name_1}
                            onInput={(e) => {setName_2(e.currentTarget.value)}}
                            className="feedback-form__input"
                        />
                    </Col>
                    <Col sm={24} md={8} className="feedback-form__field-container">
                        <h4>Отчество</h4>
                        <Input
                            value={name_1}
                            onInput={(e) => {setName_2(e.currentTarget.value)}}
                            className="feedback-form__input"
                        />
                    </Col>
                    <Col sm={24} md={12} className="feedback-form__field-container">
                        <h4>Номер телефона</h4>
                        <Input
                            value={phone}
                            onInput={(e) => {setPhone(e.currentTarget.value)}}
                            className="feedback-form__input"
                        />
                    </Col>
                    <Col sm={24} md={12} className="feedback-form__field-container">
                        <h4>Электронная почта</h4>
                        <Input
                            value={email}
                            onInput={(e) => {setEmail(e.currentTarget.value)}}
                            className="feedback-form__input"
                        />
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

export default SubmitServiceModal;