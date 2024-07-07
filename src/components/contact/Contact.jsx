import { Link } from "react-router-dom"
import "./Contact.css"

const Contact = () => {

  return (

    <main className="main" id="main">
        <div className="container">
            <section className="first-screen" id="first-screen">
               <div className="bread-nav">
                    <h1 className="bread-nav__title">Контакты</h1>
                    <ul className="bread-nav-block">
                        <li>
                            <Link to="/" className="bread-nav-block__item">Главная</Link>
                        </li>
                        <li className="bread-nav-block__line"></li>
                        <li>
                            <span className="bread-nav-block__item bread-nav-block__item_select">Контакты</span>
                        </li>
                    </ul>
               </div>
            </section>
            <section className="content" id="content">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2249.0534998249427!2d37.52989311598302!3d55.6880576133537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LMuINCc0L7RgdC60LLQsCwgMy3RjyDRg9C70LjRhtCwINCh0YLRgNC-0LjRgtC10LvQtdC5LCAyNQ!5e0!3m2!1sru!2sua!4v1670861492607!5m2!1sru!2sua" width="1109" height="476" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="data">
                    <div className="data-block">
                        <p className="data-block__title">Телефон</p>
                        <h4 className="data-block__text"><a href="tel:+380448235412">+38 (044) 823-54-12</a></h4>
                    </div>
                    <div className="data-block" id="email">
                        <p className="data-block__title">E-mail</p>
                        <h4 className="data-block__text"><a href="mailto:info@sitename.com">info@sitename.com</a></h4>
                    </div>
                    <div className="data-block" id="mail">
                        <p className="data-block__title">Адрес</p>
                        <h4 className="data-block__text">г. Москва, 3-я улица Строителей, 25</h4>
                    </div>
                </div>
                <div className="form js-form letter-form" id="letter-form">
                    <h3 className="form__title">Напишите нам</h3>
                    <form action="#" className="form-block js-form letter-form" id="letter-form">
                        <input type="text" name="firstName" className="form-block__item" placeholder="Имя" required/>
                        <input type="email" name="email" className="form-block__item" placeholder="E-mail" required/>
                        <input type="tel" name="phoneNumber" className="form-block__item" placeholder="Телефон" required/>
                        <textarea name="desc" placeholder="Сообщение" className="form-block__desc"></textarea>
                        <button type="submit" className="form-block__btn btn" data-submit>Отправить</button>
                    </form>
                    <p className="form__message">Сообщение успешно отправлено</p>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Contact
