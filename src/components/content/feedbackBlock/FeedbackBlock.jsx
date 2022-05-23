import "./FeedbackBlock.css";
import { Row } from "antd";
import FeedbackItem from "./feedbackItem/feedbackItem";

const feedbacks = [
    {
        id: 1,
        author: "Steve Huis",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
        id: 2,
        author: "Stevens Huevens",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
        id: 3,
        author: "Steve Huis II",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    
]

const FeedbackBlock = () => {
    return (
        <>
            <h1 className="block-title"  id="feedbacks">
                Отзывы клиентов
            </h1>
            <Row  className="feedbacks-block">
                {feedbacks.map((el) => (<FeedbackItem key={el.id} feedback={el} />))}
            </Row>
        </>
    )
}

export default FeedbackBlock;