import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

  return (
    <main className="main" id="main">
        <div className="container">
            <div className="block-color"></div>
            <section className="first-screen" id="first-screen">
                <div className="swiper swiper1">
                    <div className="offer-wrapper swiper-wrapper">
                        <div className="offer-slide active-slide swiper-slide swiper-slide1">
                            <h1 className="offer__title">Новые поступления в этом сезоне</h1>
                            <p className="offer__text">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                        </div>
                        <div className="offer-slide swiper-slide swiper-slide1">
                            <h1 className="offer__title">Что-то новенькое. Мы заждались тебя.</h1>
                            <p className="offer__text">Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</p>
                        </div>
                        <div className="offer-slide swiper-slide swiper-slide1">
                            <h1 className="offer__title">Включай новый сезон с WOMAZING</h1>
                            <p className="offer__text">Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</p>
                        </div>
                    </div>
                </div>
                    <div className="offer-block">
                        <div className="offer-block__arrow">
                            <a href="#" className="offer-block__arrow_down"></a>
                        </div>
                        <Link to="shop" className="offer__btn btn">Открыть магазин</Link>
                    </div>
                    <div className="swiper-pagination1"></div>
                    <div className="photo-block">
                        <img src="img/main-photo.jpg" alt="main-photo" className="main-photo"/>
                        <img src="img/second-photo.jpg" alt="second-photo" className="second-photo"/>
                        <img src="img/last-photo.jpg" alt="last-photo" className="last-photo"/>
                    </div>
            </section>

            <section className="new-collections" id="new-collections">
                <h2 className="new-collections__title">
                    Новая коллекция
                </h2>
                <div className="card-wrapper">
                    <div className="card-block">
                        <div className="card">
                            <img src="img/model.jpg" alt="model" className="card-block__image"/>
                            <div className="card__overlay">
                                <a href="#" className="card__overlay"></a>
                            </div>
                        </div>
                        <div className="card-block__text">
                            <h4 className="card-block__title">Футболка USA</h4>
                            <span className="card-block__price_old">$229</span>
                            <span className="card-block__price_new">$129</span>
                        </div>
                    </div>
                    <div className="card-block">
                        <div className="card">
                            <img src="img/model-two.jpg" alt="model" className="card-block__image"/>
                            <div className="card__overlay">
                                <a href="#" className="card__overlay"></a>
                            </div>
                        </div>
                        <div className="card-block__text">
                            <h4 className="card-block__title">Футболка USA</h4>
                            <span className="card-block__price_old"></span>
                            <span className="card-block__price_new">$129</span>
                        </div>
                    </div>
                    <div className="card-block">
                        <div className="card">
                            <img src="img/model-three.jpg" alt="model" className="card-block__image"/>
                            <div className="card__overlay">
                                <a href="#" className="card__overlay"></a>
                            </div>
                        </div>
                        <div className="card-block__text">
                            <h4 className="card-block__title">Футболка USA</h4>
                            <span className="card-block__price_old"></span>
                            <span className="card-block__price_new">$129</span>
                        </div>
                    </div>
                </div>
                <Link to="shop" className="new-collections__btn btn">Открыть магазин</Link>
            </section>

            <section className="characteristics" id="characteristics">
                <h2 className="characteristics__title">Что для нас важно</h2>
                <div className="chars-wrapper">
                    <div className="chars-block">
                        <img src="img/quality.svg" alt="quality" className="chars-block__image"/>
                        <div className="chars-block__text">
                            <h3 className="chars-block__text-title">Качество</h3>
                            <p className="chars-block__text-desc">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
                        </div>
                    </div>
                    <div className="chars-block">
                        <img src="img/cog.svg" alt="cog" className="chars-block__image"/>
                        <div className="chars-block__text">
                            <h3 className="chars-block__text-title">Скорость</h3>
                            <p className="chars-block__text-desc">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                        </div>
                    </div>
                    <div className="chars-block">
                        <img src="img/hand.svg" alt="hand" className="chars-block__image"/>
                        <div className="chars-block__text">
                            <h3 className="chars-block__text-title">Ответственность</h3>
                            <p className="chars-block__text-desc">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dream-team" id="dream-team">
                <h2 className="dream-team__title">Команда мечты Womazing</h2>
                <div className="dream-wrapper">
                    <div className="swiper swiper2">
                        <div className="slider-wrapper swiper-wrapper">
                            <div className="slide swiper-slide">
                                <img src="img/first-slide.jpg" alt="first-slide" className="slide__img"/>
                            </div>
                            <div className="slide swiper-slide">
                                <img src="img/second-slide.jpg" alt="second-slide" className="slide__img"/>
                            </div>
                            <div className="slide swiper-slide">
                                <img src="img/last-slide.jpg" alt="last-slide" className="slide__img"/>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination2"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                        <div className="side-bar">
                            <h3 className="side-bar__title">Для каждой</h3>
                            <p className="side-bar__text">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                            <p className="side-bar__text">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                            <a href="#" className="side-bar__link">Подробнее о бренде</a>
                        </div>
                    </div>
            </section>
        </div>
    </main>
  )
}

export default Home
