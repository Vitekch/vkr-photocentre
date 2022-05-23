import "./feedbackItem.css";
import { Col, Card } from "antd";

const FeedbackItem = ({feedback}) => {

    return (
        <Col xs={24} sm={24} lg={12} xl={8} style={{padding: "20px"}}>
            <Card className="feedback-card">
                
                <p className="feedback-card__text">{feedback.text}</p>
                <h2 className="feedback-card__author">{feedback.author}</h2>
            </Card>
        </Col>
    )
}

export default FeedbackItem;