import "./Header.css";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const HeaderComp = () => {

    return (
        <Header className="land-header">
            <a className="land-header__brand" href="#">PhotoCentre</a>
            <nav className="land-header__nav">
                <a className="land-header__nav__link">
                    Примеры работ
                </a>
                <a className="land-header__nav__link">
                    Каталог услуг
                </a>
                <a className="land-header__nav__link">
                    Отзывы
                </a>
                <a className="land-header__nav__link">
                    Связаться с нами
                </a>
            </nav>
        </Header>
    )
}

export default HeaderComp;