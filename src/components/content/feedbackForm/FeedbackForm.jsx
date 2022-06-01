import "./FeedbackForm.css";
import { Row, Col, Card, Form, Input, Button } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const FeedbackForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);

    const submitHandler = () => {
        if (name && email && message) {
            setLoading(true);
            fetch("http://localhost:3001/post-data",{
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ type: "feedback", payload: { name, email, message } })
            }).finally((result) => { setLoading(false) })
        }
    }

    return (
        <>
        <h1 className="block-title flex flex--j-centre"  id="feedback-form">
            Есть вопросы? Напишите нам!
        </h1>
        <Row>
            <Col className="feedback-form">
                <Card className="feedback-form__card">
                    <Form name="feedback">
                        <Row>
                            <Col sm={24} md={12} className="feedback-form__field-container">
                                <h4>Имя</h4>
                                <Input
                                    value={name}
                                    onInput={(e) => {setName(e.currentTarget.value)}}
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
                        <Row>
                            <Col md={24} className="feedback-form__field-container">
                                <h4>Сообщение</h4>
                                <TextArea
                                    value={message}
                                    onInput={(e) => {setMessage(e.currentTarget.value)}}
                                    className="feedback-form__textarea"
                                />
                            </Col>
                        </Row>
                        <Row className="feedback-form__submit-block">
                            <Col>
                                <Button loading={isLoading} onClick={() => {submitHandler()}} type="primary">
                                    Отправить
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default FeedbackForm;