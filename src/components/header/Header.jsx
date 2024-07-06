import { Link } from "react-router-dom"
import "./Header.css"
import { useState } from "react"

const Header = () => {

    const [activeModal, setActiveModal] = useState(false)
    const [anotherModal, setAnotherModal] = useState(false)
    const sms = {
        text: '',

    }
    const handleModalWindow = (i) => {
        setActiveModal(i)
    }
    const handleAnotherModalWindow = (i) => {
        setAnotherModal(i)
    }

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
                    <button type="button" onClick={() => handleModalWindow(true)} className="nav-tel__btn"></button>
                    {!activeModal ? '' : (
                        <div className="modals-wrapper show" id="modals-wrapper">
                            <div className="overlay" onClick={() => handleModalWindow(false)}></div>
                            <div className="modal-window" id="modal-window">
                                <h3 className="modal-window__title">Заказать обратный звонок</h3>
                                <form action="#" className="modal-window-form js-form form-cover" id="form-cover">
                                    <input type="text" name="firstName" placeholder="Имя" className="modal-window-form__item" required/> 
                                    <input type="email" name="email" className="modal-window-form__item" placeholder="E-mail" required/>
                                    <input type="tel" name="phoneNumber" className="modal-window-form__item" placeholder="Телефон" required/>
                                    <button type="submit" onClick={() => [handleModalWindow(false), handleAnotherModalWindow(true)]} className="modal-window-form__btn btn" data-submit>Заказать звонок</button>
                                </form>
                            </div>
                        </div>
                    )}
                    {!anotherModal ? '' : (
                        <div className="modals-wrapper_mini show">
                            <div className="overlay" onClick={() => handleAnotherModalWindow(false)}></div>
                            <div className="modal-window_mini">
                                <h3 className="modal-window_mini__title">Отлично! Мы скоро вам перезвоним.</h3>
                                <button type="button" onClick={() => handleAnotherModalWindow(false)} className="modal-window__btn">Закрыть</button>
                            </div>
                        </div>
                    )}
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
