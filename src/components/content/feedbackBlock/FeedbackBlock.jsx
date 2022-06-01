import "./FeedbackBlock.css";
import { Row } from "antd";
import FeedbackItem from "./feedbackItem/feedbackItem";
import { useEffect, useState } from "react";

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

    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        const asyncActions = async () => {
            fetch("http://localhost:3001/get-data",{
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ type: "feedback" }),
            }).then((result) => {
                if (result.ok) {
                    return result.json();
                }
            }).then((data) => {
                setFeedbacks(data.sort((a, b) => b.id - a.id).slice(0, 3));
            });
        }

        asyncActions();
    }, [])

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