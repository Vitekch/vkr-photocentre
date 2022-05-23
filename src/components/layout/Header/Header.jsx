import "./Header.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const scrollToBlock = (id) => {
    const el = document.getElementById(id);
    console.log(el.getBoundingClientRect())
    if (el) {
        window.scroll({
            top: el.getBoundingClientRect().top - 200 + window.pageYOffset,
            behavior: 'smooth'
        })
    }
}

const HeaderComp = () => {

    return (
        <Header className="land-header">
            <a className="land-header__brand" onClick={() => { scrollToBlock("news") }}>PhotoCentre</a>
            <nav className="land-header__nav">
                <a className="land-header__nav__link" onClick={() => { scrollToBlock("news") }}>
                    Новости
                </a>
                <a className="land-header__nav__link" onClick={() => { scrollToBlock("services") }}>
                    Каталог услуг
                </a>
                <a className="land-header__nav__link" onClick={() => { scrollToBlock("feedbacks") }}>
                    Отзывы
                </a>
                <a className="land-header__nav__link" onClick={() => { scrollToBlock("feedback-form") }}>
                    Связаться с нами
                </a>
            </nav>
        </Header>
    )
}

export default HeaderComp;