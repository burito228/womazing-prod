import { Link } from "react-router-dom"
import "./About.css"

const About = () => {

  return (
    <main className="main" id="main">
        <div className="container">
            <section className="first-screen" id="first-screen">
               <div className="bread-nav">
                    <h1 className="bread-nav__title">О бренде</h1>
                    <ul className="bread-nav-block">
                        <li>
                            <Link to="/" className="bread-nav-block__item">Главная</Link>
                        </li>
                        <li className="bread-nav-block__line"></li>
                        <li>
                            <span className="bread-nav-block__item bread-nav-block__item_select">О бренде</span>
                        </li>
                    </ul>
               </div>
            </section>
            <section className="content" id="content">
                <div className="info">
                    <div className="info-block">
                        <div className="info-block-img">
                            <img src="img/woman.jpg" alt="woman" className="info-block-img__item"/>
                        </div>
                        <div className="info-block-text">
                            <h3 className="info-block-text__title">Идея и женщина</h3>
                            <p className="info-block-text__paragraph">Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
                            <p className="info-block-text__paragraph">Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="info-block-text__second">
                            <h3 className="info-block-text__second-title">Магия в деталях</h3>
                            <p className="info-block-text__second-paragraph">Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
                            <p className="info-block-text__second-paragraph">Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </p>
                        </div>
                        <div className="info-block-img">
                            <img src="img/woman1.jpg" alt="woman" className="info-block-img__item"/>
                        </div>
                    </div>
                </div>
                <Link to="/shop" className="content__btn btn">Перейти в магазин</Link>
            </section>
        </div>
    </main>
  )
}

export default About
