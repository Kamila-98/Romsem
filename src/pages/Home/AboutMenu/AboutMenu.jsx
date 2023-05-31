import React from 'react';
import { Link } from 'react-router-dom';
import Pizza from '../../../assets/aboutMenu/pizza.png';
import Salads from '../../../assets/aboutMenu/salads.png';

const AboutMenu = () => {
    return (
        <div className='aboutMenu'>

            <div className="aboutMenu__row">
                <div className='aboutMenu__card'>
                    <Link to="http://localhost:3000/catalog/sets/all">
                        <img className='aboutMenu__card-img' src="https://thumb.tildacdn.com/tild3732-3230-4566-b132-663438633235/-/format/webp/_2022-03-22_194411.png" alt="" />
                        <h2 className='aboutMenu__card-title'>Сеты</h2>
                    </Link>
                </div>
                <div className='aboutMenu__block'>
                    <div className='aboutMenu__card'>
                        <Link to="http://localhost:3000/catalog/wok/all">
                            <img className='aboutMenu__card-img' src="https://shared.cdn.smp.schibsted.com/v2/images/8e77ae77-1b3e-4a6a-a23b-50d50bacb6ef?fit=crop&h=750&w=1000&s=11a0b56adfedbdc6e631b53f781eb7efff37a275" alt="" />
                            <h2 className='aboutMenu__card-title'>WOK</h2>
                        </Link>
                    </div>
                    <div className='aboutMenu__card'>
                        <Link to="http://localhost:3000/catalog/rolls/all">
                            <img className='aboutMenu__card-img' src="https://lh3.googleusercontent.com/J3nZWh5BUdwhgz97oX0SyY55EM5wbcHFdNl1hsHtLs_n28DUMy-zDcAxJA-rWamUXzdRMkOaiTAfPOrM1ViteIdzI7S54V5jnw9Z9V7o_Iepi5gBulF0H43wzuUM6D7j4CgFWZrJhwDR-WKQL_0yPJ_E25jZEK5DteFmCqW5YocnA9xLW5KDugQI4zuC7Qiq" alt="" />
                            <h2 className='aboutMenu__card-title'>Роллы</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="aboutMenu__row">
                <div className='aboutMenu__card'>
                    <Link to="http://localhost:3000/catalog/pizza/all">
                        <img className='aboutMenu__card-img' src={Pizza} alt="" />
                        <h2 className='aboutMenu__card-title'>Пицца</h2>
                    </Link>
                </div>
                <div className='aboutMenu__card'>
                    <Link>
                        <Link to="http://localhost:3000/catalog/sushi/all">
                            <img className='aboutMenu__card-img' src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" alt="" />
                            <h2 className='aboutMenu__card-title'>Суши</h2>
                        </Link>
                    </Link>
                </div>  
            </div>
            <div className="aboutMenu__row">
                <div className='aboutMenu__block'>
                     <div className='aboutMenu__card'>
                        <Link to="http://localhost:3000/catalog/soup/all">
                            <img className='aboutMenu__card-img' src="https://smaylovich.ru/upload/iblock/386/38685c29e962feb6ff89498fda495b3b.jpeg" alt="" />
                            <h2 className='aboutMenu__card-title'>Cупы</h2>
                        </Link>
                    </div>
                    <div className='aboutMenu__card'>
                        <Link to="http://localhost:3000/catalog/salads/all">
                            <img className='aboutMenu__card-img' src={Salads} alt="" />
                            <h2 className='aboutMenu__card-title'>Салаты</h2>
                        </Link>
                    </div>
                    
                </div>
                <div className='aboutMenu__card'>
                    <Link to="http://localhost:3000/catalog/snacks/all">
                        <img className='aboutMenu__card-img' src="https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG" alt="" />
                        <h2 className='aboutMenu__card-title'>Закуски</h2>
                    </Link>
                </div>
            </div>
            

        </div>
    );
};

export default AboutMenu;