import  './Footer.css'

const Footer = () => {


  return (
    <footer className="footer" id="footer">
        <div className="container">
            <div className="footer-wrapper">
                <div className="official">
                    <div className="footer-logo">
                        <a href="index.html"><img src="img/logo.png" alt="logo"/></a>
                    </div>
                    <div className="conf-info">
                        <span className="conf-info__item">&#169; Все права защищены</span>
                        <span className="conf-info__item"><a href="#">Политика конфиденциальности</a></span>
                        <span className="conf-info__item"><a href="#">Публичная оферта</a></span>
                    </div>
                </div>
                <div className="footer-nav">
                    <ul className="navigation">
                        <li className="navigation__item nav-active"><a href="index.html">Главная</a></li>
                        <li className="navigation__item"><a href="shop.html">Магазин</a>
                            <ul className="footer-navigation">
                                <li className="navigation-new__item"><a href="#">Пальто</a></li>
                                <li className="navigation-new__item"><a href="#">Свитшоты</a></li>
                                <li className="navigation-new__item"><a href="#">Кардиганы</a></li>
                                <li className="navigation-new__item"><a href="#">Толстовки</a></li>
                            </ul>
                        </li>
                        <li className="navigation__item"><a href="about.html">О бренде</a></li>
                        <li className="navigation__item"><a href="contact.html">Контакты</a></li>
                    </ul>
                </div>
                <div className="social">
                    <div className="contact-info">
                        <a href="tel:+380448235412" className="contact-info__item">+38 (044) 823-54-12</a>
                        <a href="mailto:hello@womazing.com" className="contact-info__item">hello@womazing.com</a>
                    </div>
                    <div className="social-links">
                        <a href="[https://www.instagram.com](https://www.instagram.com/)" target="_blank"><img src="img/instagram.svg" alt="instagram" className="social-links__item"/></a>
                        <a href="[https://www.facebook.com](https://www.facebook.com/)" target="_blank"><img src="img/facebook.svg" alt="facebook" className="social-links__item"/></a>
                        <a href="[https://www.twitter.com](https://www.twitter.com/)" target="_blank"><img src="img/twitter.svg" alt="twitter" className="social-links__item"/></a>
                    </div>
                    <img src="img/visa-mastercard 1.png" alt="mastercard" className="social-payment"/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
