import "./FeedbackForm.css";
import { Row, Col, Card, Form, Input, Button } from "antd";

const { TextArea } = Input;

const FeedbackForm = () => {

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
                            <Col sm={24} md={8} className="feedback-form__field-container">
                                <h4>Имя</h4>
                                <Input className="feedback-form__input" />
                            </Col>
                            <Col sm={24} md={8} className="feedback-form__field-container">
                                <h4>Номер телефона</h4>
                                <Input className="feedback-form__input" />
                            </Col>
                            <Col sm={24} md={8} className="feedback-form__field-container">
                                <h4>Электронная почта</h4>
                                <Input className="feedback-form__input" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={24} className="feedback-form__field-container">
                                <h4>Сообщение</h4>
                                <TextArea className="feedback-form__textarea" />
                            </Col>
                        </Row>
                        <Row className="feedback-form__submit-block">
                            <Col>
                                <Button type="primary">
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