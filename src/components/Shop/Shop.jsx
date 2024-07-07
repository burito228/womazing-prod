import { Link } from "react-router-dom"
import './Shop.css'

const Shop = () => {

  return (
    <main className="main" id="main">
        <div className="container">
            <section className="first-screen" id="first-screen">
               <div className="bread-nav">
                    <h1 className="bread-nav__title">Магазин</h1>
                    <ul className="bread-nav-block">
                        <li>
                            <Link to="/" className="bread-nav-block__item">Главная</Link>
                        </li>
                        <li className="bread-nav-block__line"></li>
                        <li>
                            <span className="bread-nav-block__item bread-nav-block__item_select">Магазин</span>
                        </li>
                    </ul>
               </div>
            </section>
            <section className="content" id="content">
                <div className="products">
                        <div className="category">
                            <button type="button" className="category__btn category__btn_active btn category__btn-all">Все</button>
                            <button type="button" className="category__btn btn" data-tab="1">Пальто</button>
                            <button type="button" className="category__btn btn" data-tab="2">Свитшоты</button>
                            <button type="button" className="category__btn btn" data-tab="3">Кардиганы</button>
                            <button type="button" className="category__btn btn" data-tab="4">Толстовки</button>
                        </div>
                    <div className="goods-tape">
                        <p className="goods-tape__view">Показано: <span>9</span> из <span>12</span> товаров</p>
                    <div className="goods-tape-wrapper" data-content="1">
                            <div className="goods-tape-block__item show" data-tab="0" data-page="1">
                                    <div className="goods-tape-block__item-card">
                                        <img src="img/model.jpg" alt="model" className="model"/>
                                        <div className="card__overlay">
                                            <a href="product.html" className="card__overlay"></a>
                                        </div>
                                    </div>
                                    <div className="block-text">
                                        <h4 className="block-text__title">Футболка USA</h4>
                                        <div className="price-block">
                                            <span className="price-block__item-old">$229</span>
                                            <a href="#" className="price-block__item-new">$129</a>
                                        </div>
                                    </div>
                            </div>
                            <div className="goods-tape-block__item show" data-tab="0" data-page="1">
                                <div className="goods-tape-block__item-card">
                                    <img src="img/model-two.jpg" alt="model" className="model"/>
                                    <div className="card__overlay">
                                        <a href="product.html" className="card__overlay"></a>
                                    </div>
                                </div>
                                <div className="block-text">
                                    <h4 className="block-text__title">Купальник Glow</h4>
                                    <div className="price-block">
                                        <span className="price-block__item-old"></span>
                                        <a href="#" className="price-block__item-new">$129</a>
                                    </div>
                                </div>
                            </div>
                            <div className="goods-tape-block__item show" data-tab="2" data-page="1">
                                <div className="goods-tape-block__item-card">
                                    <img src="img/model-three.jpg" alt="model" className="model"/>
                                    <div className="card__overlay">
                                        <a href="product.html" className="card__overlay"></a>
                                    </div>
                                </div>
                                <div className="block-text">
                                    <h4 className="block-text__title">Свитшот Sweet Shot</h4>
                                    <div className="price-block">
                                        <span className="price-block__item-old"></span>
                                        <a href="#" className="price-block__item-new">$129</a>
                                    </div>
                                </div>
                            </div>
                            <div className="goods-tape-block__item show" data-tab="0" data-page="1">
                                    <div className="goods-tape-block__item-card">
                                        <img src="img/model.jpg" alt="model" className="model"/>
                                        <div className="card__overlay">
                                            <a href="product.html" className="card__overlay"></a>
                                        </div>
                                    </div>
                                    <div className="block-text">
                                        <h4 className="block-text__title">Футболка USA</h4>
                                        <div className="price-block">
                                            <span className="price-block__item-old">$229</span>
                                            <a href="#" className="price-block__item-new">$129</a>
                                        </div>
                                    </div>
                            </div>
                            <div className="goods-tape-block__item show" data-tab="0" data-page="1">
                                <div className="goods-tape-block__item-card">
                                    <img src="img/model-two.jpg" alt="model" className="model"/>
                                    <div className="card__overlay">
                                        <a href="product.html" className="card__overlay"></a>
                                    </div>
                                </div>
                                <div className="block-text">
                                    <h4 className="block-text__title">Купальник Glow</h4>
                                    <div className="price-block">
                                        <span className="price-block__item-old"></span>
                                        <a href="#" className="price-block__item-new">$129</a>
                                    </div>
                                </div>
                            </div>
                            <div className="goods-tape-block__item show" data-tab="2" data-page="1">
                                <div className="goods-tape-block__item-card">
                                    <img src="img/model-three.jpg" alt="model" className="model"/>
                                    <div className="card__overlay">
                                        <a href="product.html" className="card__overlay"></a>
                                    </div>
                                </div>
                                <div className="block-text">
                                    <h4 className="block-text__title">Свитшот Sweet Shot</h4>
                                    <div className="price-block">
                                        <span className="price-block__item-old"></span>
                                        <a href="#" className="price-block__item-new">$129</a>
                                    </div>
                                </div>
                            </div>
                            <div className="goods-tape-block__item show" data-tab="0" data-page="1">
                                    <div className="goods-tape-block__item-card">
                                        <img src="img/model.jpg" alt="model" className="model"/>
                                        <div className="card__overlay">
                                            <a href="product.html" className="card__overlay"></a>
                                        </div>
                                    </div>
                                    <div className="block-text">
                                        <h4 className="block-text__title">Футболка USA</h4>
                                        <div className="price-block">
                                            <span className="price-block__item-old">$229</span>
                                            <a href="#" className="price-block__item-new">$129</a>
                                        </div>
                                    </div>
                            </div>
                            <div className="goods-tape-block__item show" data-tab="0" data-page="1">
                                <div className="goods-tape-block__item-card">
                                    <img src="img/model-two.jpg" alt="model" className="model"/>
                                    <div className="card__overlay">
                                        <a href="product.html" className="card__overlay"></a>
                                    </div>
                                </div>
                                <div className="block-text">
                                    <h4 className="block-text__title">Купальник Glow</h4>
                                    <div className="price-block">
                                        <span className="price-block__item-old"></span>
                                        <a href="#" className="price-block__item-new">$129</a>
                                    </div>
                                </div>
                            </div>
                            <div className="goods-tape-block__item show" data-tab="2" data-page="1">
                                <div className="goods-tape-block__item-card">
                                    <img src="img/model-three.jpg" alt="model" className="model"/>
                                    <div className="card__overlay">
                                        <a href="product.html" className="card__overlay"></a>
                                    </div>
                                </div>
                                <div className="block-text">
                                    <h4 className="block-text__title">Свитшот Sweet Shot</h4>
                                    <div className="price-block">
                                        <span className="price-block__item-old"></span>
                                        <a href="#" className="price-block__item-new">$129</a>
                                    </div>
                                </div>
                            </div>
                            <div className="goods-tape-block__item-next" data-tab="0" data-page="2">
                                    <div className="goods-tape-block__item-card">
                                        <img src="img/model.jpg" alt="model" className="model"/>
                                        <div className="card__overlay">
                                            <a href="product.html" className="card__overlay"></a>
                                        </div>
                                    </div>
                                    <div className="block-text">
                                        <h4 className="block-text__title">Футболка USA</h4>
                                        <div className="price-block">
                                            <span className="price-block__item-old">$229</span>
                                            <a href="#" className="price-block__item-new">$129</a>
                                        </div>
                                    </div>
                            </div>
                            <div className="goods-tape-block__item-next" data-tab="0" data-page="2">
                                <div className="goods-tape-block__item-card">
                                    <img src="img/model-two.jpg" alt="model" className="model"/>
                                    <div className="card__overlay">
                                        <a href="product.html" className="card__overlay"></a>
                                    </div>
                                </div>
                                <div className="block-text">
                                    <h4 className="block-text__title">Купальник Glow</h4>
                                    <div className="price-block">
                                        <span className="price-block__item-old"></span>
                                        <a href="#" className="price-block__item-new">$129</a>
                                    </div>
                                </div>
                            </div>
                            <div className="goods-tape-block__item-next" data-tab="2" data-page="2">
                                <div className="goods-tape-block__item-card">
                                    <img src="img/model-three.jpg" alt="model" className="model"/>
                                    <div className="card__overlay">
                                        <a href="product.html" className="card__overlay"></a>
                                    </div>
                                </div>
                                <div className="block-text">
                                    <h4 className="block-text__title">Свитшот Sweet Shot</h4>
                                    <div className="price-block">
                                        <span className="price-block__item-old"></span>
                                        <a href="#" className="price-block__item-new">$129</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                        <p className="goods-tape__view">Показано: <span>9</span> из <span>12</span> товаров</p>
                    </div>
                    <div className="pag">
                        <button type="button" className="pag__btn pag__btn_active btn" data-btn="1">1</button>
                        <button type="button" className="pag__btn btn" data-btn="2">2</button>
                        <button type="button" className="pag__arr-right" data-btn="2"></button>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Shop
