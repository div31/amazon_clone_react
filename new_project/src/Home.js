import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="prime banner"
            />

            {/* Product */}
            <div className="home__row">
                <Product 
                    id="123456"
                    title="The Lean startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={700}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="132654"
                    title="Think and Grow Rich Paperback – 1 January 2014"
                    price={149}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Y8jwGiebL._SX328_BO1,204,203,200_.jpg"
                />
                
            </div>

            <div className="home__row">
                <Product 
                    id="987654"
                    title="Lakme Enrich Matte Lipstick, Shade RM10, 4.7g"
                    price={235}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51FaNwUu2kL._SL1000_.jpg"
                />
                <Product 
                    id="567567"
                    title="Logitech M221 Wireless Mouse, Silent Buttons, 2.4 GHz with USB Mini Receiver"
                    price={43999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EdSbY8XFL._SL1500_.jpg"
                />
                <Product 
                    id="123123"
                    title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
                    price={3499}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
                />
            </div>

            <div className="home__row">
            <Product 
                    id="456456"
                    title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN-1 (Black) (Without Stand)"
                    price={69899}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71EO3uGdJbL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
