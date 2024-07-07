import { Link } from "react-router-dom"
import './Bag.css'

const Bag = () => {
  return (
    <main className="main" id="main">
        <div className="container">
            <section className="first-screen" id="first-screen">
               <div className="bread-nav">
                    <h1 className="bread-nav__title">Корзина</h1>
                    <ul className="bread-nav-block">
                        <li>
                            <Link to="/" className="bread-nav-block__item">Главная</Link>
                        </li>
                        <li className="bread-nav-block__line"></li>
                        <li>
                            <span className="bread-nav-block__item bread-nav-block__item_select">Корзина</span>
                        </li>
                    </ul>
               </div>
            </section>
            <section className="content" id="content">
                <table className="cart__item_table" id="closeAll" cols="4">
                    <thead>
                    <tr className="cart__column-1">
                        <th className="cart-item">Товар</th>
                        <th className="cart-price">Цена</th>
                        <th className="cart-quantity">Количество</th>
                        <th className="cart-all">Всего</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="cart__column-2" id="">
                        <td className="cart-item">
                            <div className="cart__item">
                                <button type="button" id="closeOrder" alt="Убрать товар"
                                        className="cart__item_close">
                                </button>
                                <a href="product.html" className="cart__item__link">
                                    <img src="img/product.jpg" alt="Карточка товара" className="cart__item_img"/>
                                    <span className="cart__item_name">Футболка USA</span>
                                </a>
                            </div>
                        </td>
                        <td className="cart-price"><span className="cart-price__item">$129</span></td>
                        <td className="cart-quantity">
                            <input type="number" min="1" max="100"  required className="cart__number"/>
                        </td>
                        <td className="cart-all"><span className="cart-all__item">$129</span></td>
                    </tr>
                    </tbody>
                </table>
                <div className="sale">
                    <div className="sale-block">
                        <input type="text" name="coupon" id="sale" placeholder="Введите купон" className="sale-block__cupon"/>
                        <button type="button" className="sale-block__btn btn">Применить купон</button>
                    </div>
                    <button type="button" className="sale-block__btn btn">Обновить корзину</button>
                </div>
                <div className="total">
                    <div className="total-price">
                        <p className="total-price__text">Подытог:</p>
                        <p className="total-price__text">$129</p>
                    </div>
                    <div className="total-offer">
                        <div className="total-offer-block">
                            <h3 className="total-offer-block__text">Итого:</h3>
                            <h3 className="total-offer-block__price">$129</h3>
                        </div>
                        <Link to="/order" className="total-offer__btn btn">Оформить заказ</Link>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Bag
