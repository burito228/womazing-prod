import './Order.css'

const Order = () => {

  return (
    <main className="main" id="main">
        <div className="container">
            <section className="first-screen" id="first-screen">
               <div className="bread-nav">
                    <h1 className="bread-nav__title">Оформление заказа</h1>
                    <ul className="bread-nav-block">
                        <li>
                            <a href="index.html" className="bread-nav-block__item">Главная</a>
                        </li>
                        <li className="bread-nav-block__line"></li>
                        <li>
                            <span className="bread-nav-block__item bread-nav-block__item_select">Оформление заказа</span>
                        </li>
                    </ul>
               </div>
            </section>
            <section className="content" id="content">
                <div className="content-wrapper">
                    <form action="#" className="js-form order-form" id="order-form">
                    <div className="form">
                        <div className="form-block">
                            <h3 className="form-block__title">Данные покупателя</h3>
                                <input type="text" name="firstName" placeholder="Имя" className="form-block__item"/>
                                <input type="email" name="email" placeholder="E-mail" className="form-block__item"/>
                                <input type="tel" name="phoneNumber" placeholder="Телефон" className="form-block__item"/>
                        </div>
                        <div className="form-block">
                            <h3 className="form-block__title">Адрес получателя</h3>
                                <input type="text" name="country" placeholder="Страна" className="form-block__item"/>
                                <input type="text" name="city" placeholder="Город" className="form-block__item"/>
                                <input type="text" name="street" placeholder="Улица" className="form-block__item"/>
                                <input type="text" name="house" placeholder="Дом" className="form-block__item"/>
                                <input type="text" name="flat" placeholder="Квартира" className="form-block__item"/>
                        </div>
                        <div className="form-block">
                            <h3 className="form-block__title">Комментарии</h3>
                                <textarea name="desc" className="form-block__desc" placeholder="Введите текст"></textarea>
                        </div>
                    </div>
                    <div className="side-bar">
                        <div className="total">
                            <h3 className="total__title">Ваш заказ</h3>
                            <div className="total-wrapper">
                                <div className="total-info">
                                    <div className="total-info-block">
                                        <h4 className="total-info-block__title">Товар</h4>
                                        <h4 className="total-info-block__title">Всего</h4>
                                    </div>
                                    <div className="total-info-text">
                                        <p className="total-info-text__product">Футболка USA</p>
                                        <p className="total-info-text__product">$129</p>                                      
                                    </div>
                                    <div className="total-info-text">
                                        <p className="total-info-text__product">Подытог</p>
                                        <p className="total-info-text__product">$129</p>                                       
                                    </div>
                                    <div className="total-info-block">
                                        <h4 className="total-info-block__title">Товар</h4>
                                        <h4 className="total-info-block__title">$129</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment">
                            <h3 className="payment__title">Способы оплаты</h3>
                            <div className="payment-block">
                                <input type="radio" name="pay" className="payment-block__cash"/>
                                <span className="custom-radio-btn"></span>
                                <label htmlFor="happy" className="payment-block__text">Оплата картой</label>
                            </div> 
                            <div className="payment-block">
                                <input type="radio" name="pay" className="payment-block__cash"/>
                                <span className="custom-radio-btn"></span>
                                <label htmlFor="happy" className="payment-block__text">Оплата наличными</label>
                            </div> 
                            <button type="submit" className="payment__btn btn">Разместить заказ</button> 
                        </div>
                    </div>
                </form>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Order
