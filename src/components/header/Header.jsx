import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {


  return (

    <header className="header" id="header">
        <div className="container">
            <div className="nav">
                <div className="nav-logo">
                    <Link to="/"><img src="img/logo.png" alt="logo"/></Link>
                </div>
                <nav className="nav-block">
                    <ul className="navigation">
                        <li className="navigation__item nav-active"><Link to="/">Главная</Link></li>
                        <li className="navigation__item" id="shop"><a href="shop.html">Магазин</a>
                            <ul className="navigation-new">
                                <li className="navigation-new__item"><a href="product.html">Пальто</a></li>
                                <li className="navigation-new__item"><a href="product.html">Свитшоты</a></li>
                                <li className="navigation-new__item"><a href="product.html">Кардиганы</a></li>
                                <li className="navigation-new__item"><a href="product.html">Толстовки</a></li>
                            </ul>
                        </li>
                        <li className="navigation__item"><a href="about.html">О бренде</a></li>
                        <li className="navigation__item"><a href="contact.html">Контакты</a></li>
                    </ul>
                </nav>
                <div className="nav-tel">
                    <button type="button" id="nav-tel__btn" className="nav-tel__btn"></button>
                    <div className="modals-wrapper" id="modals-wrapper">
                        <div className="overlay" id="overlay"></div>
                        <div className="modal-window" id="modal-window">
                            <h3 className="modal-window__title">Заказать обратный звонок</h3>
                            <form action="#" className="modal-window-form js-form form-cover" id="form-cover">
                                <input type="text" name="firstName" placeholder="Имя" className="modal-window-form__item" required/> 
                                <input type="email" name="email" className="modal-window-form__item" placeholder="E-mail" required/>
                                <input type="tel" name="phoneNumber" className="modal-window-form__item" placeholder="Телефон" required/>
                                <button type="submit" className="modal-window-form__btn btn" data-submit>Заказать звонок</button>
                            </form>
                        </div>
                    </div>
                    <div className="modals-wrapper_mini" id="modals-wrapper_mini">
                        <div className="overlay" id="overlay"></div>
                        <div className="modal-window_mini" id="modal-window_mini">
                            <h3 className="modal-window_mini__title">Отлично! Мы скоро вам перезвоним.</h3>
                            <button type="button" className="modal-window__btn">Закрыть</button>
                        </div>
                    </div>
                    <p className="nav-tel__item"><a href="tel:+74958235412">+7 (495) 823-54-12</a></p>
                </div>
                <div className="nav-bag">
                    <a href="bag.html" className="nav-bag__btn"></a>
                </div>
                <div className="mobile-wrapper">
                <button type="button" className="mobile-menu">MENU</button>
                <div className="tel-menu">
                    <ul className="navigation-tel">
                        <li className="navigation__item nav-active"><a href="index.html">Главная</a></li>
                        <li className="navigation__item" id="shop"><a href="shop.html">Магазин</a>
                            <ul className="navigation-new">
                                <li className="navigation-new__item"><a href="product.html">Пальто</a></li>
                                <li className="navigation-new__item"><a href="product.html">Свитшоты</a></li>
                                <li className="navigation-new__item"><a href="product.html">Кардиганы</a></li>
                                <li className="navigation-new__item"><a href="product.html">Толстовки</a></li>
                            </ul>
                        </li>
                        <li className="navigation__item"><a href="about.html">О бренде</a></li>
                        <li className="navigation__item"><a href="contact.html">Контакты</a></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </div>
    </header>
  )
}

export default Header
