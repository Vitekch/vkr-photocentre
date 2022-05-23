import "./NewsCarousel.css";
import { Carousel, Divider } from 'antd';

const mockData = [
    {
        id: 1,
        title: "Lorem Ipsum",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .",
        background: "",
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .",
        background: "",
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .",
        background: "",
    },
    {
        id: 4,
        title: "Lorem Ipsum",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .",
        background: "https://images.hindustantimes.com/img/2022/05/20/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1653046766462.jpeg",
    },
]

const NewsCarousel = () => {
    return (
        <>
            <h1 className="block-title" id="news">
                Новости
            </h1>
            <Carousel autoplay>
                { mockData.map((el) => (
                    <div key={el.id} className="carousel__item">
                        <div className="carousel__item__content">
                            <h2 className="carousel__item__content__title">{el.title}</h2>
                            <p className="carousel__item__content__text">
                                {el.text}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    )
}

export default NewsCarousel;