import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {BsCreditCard2Back, BsWallet2} from 'react-icons/bs';


const Delivery = () => {
    const navigate = useNavigate();

    const [money, setMoney] = useState(false)
    const [del, setDel] = useState(false)
    const [time, setTime] = useState(false)

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onBlur"
      });

    const orange = {
        background: "orange"
    }

    const finish = () => {
        navigate('/')
        alert("Заказ успешно оформлен!")
    }


    return (
        <div className='delivery'>
            <div className="container">
                <div className="delivery__path">
                    <Link to="/" className='delivery__path-btn'>Вернуться на главную страницу</Link>
                </div>
            </div>
            <div className="delivery__content">
                <form className='delivery__form' action="">
                    <h2 className="delivery__title">Ваши данные</h2>
                    <div className='delivery__row'>
                        <div className='delivery__left'>
                            <div className="delivery__left-row">
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field' type="text" placeholder='Телефон' />
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field' type="text" placeholder='Имя' />
                                </label>
                            </div>
                        
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                <div style={{background: money ? "orange" : ''}} className='delivery__form-btn delivery__form-btn-left' type={"button"} onClick={() => setMoney(prev => !prev)} >
                                    <span>
                                        <BsWallet2/>
                                    </span>
                                    Наличными
                                </div>
                                <div style={{background: !money ? "orange" : ''}} className='delivery__form-btn delivery__form-btn-right' type={"button"} onClick={() => setMoney(prev => !prev)} >
                                    <span>
                                        <BsCreditCard2Back/>
                                    </span>
                                    Картой
                                </div>
                            </label>
                     
                            <div className="delivery__left-row">
                                <div className='delivery__left-cash'>
                                    <input className='delivery__field-cash' type="radio" />
                                    <p className='delivery__left-cash-text'>Подготовить сдачу с</p>
                                </div>
                                <label className='delivery__form-label delivery__form-label-cash' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-cash' type="number" placeholder='Сумма' />
                                </label>
                            </div>
                            <label className='delivery__form-label' htmlFor="">
                                <input className='delivery__form-field delivery__form-field-long' type="text" placeholder='Комменатрий к заказу' />
                            </label>
                            
                            <div className='delivery__form-cutlery'>
                                <p className='delivery__form-cutlery-text'>Палочки + соусник обычные</p>
                                <div className='delivery__form-cutlery-row'>
                                    <span>+</span>
                                    <span>2</span>
                                    <span>-</span>
                                </div>
                            </div>
                        </div>
                        <div className='delivery__right'>
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                <div style={{background: del ? "orange" : ''}} className='delivery__form-btn delivery__form-btn-left' onClick={() => setDel(prev => !prev)}>
                                    Курьером
                                </div>
                                <div style={{background: !del ? "orange" : ''}} className='delivery__form-btn delivery__form-btn-right' onClick={() => setDel(prev => !prev)}>
                                    Самовывоз
                                </div>
                            </label>
                            <div className="delivery__right-row">
                                <label className='delivery__form-label delivery__form-label-street' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-street' type="text"  placeholder='Улица'/>  
                                </label>
                                <label className='delivery__form-label delivery__form-label-short' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="text"  placeholder='Дом'/> 

                                </label>
                        
                            </div>
                            <div className="delivery__right-row delivery__right-row-short">
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Кв'/>  
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Подъе'/> 
                                     
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Этаж'/> 
                                    
                                </label>
                                <label className='delivery__form-label' htmlFor="">
                                    <input className='delivery__form-field delivery__form-field-short' type="number"  placeholder='Код'/>   
                                </label>
                        
                            </div>
                            <label className='delivery__form-label delivery__form-btns' htmlFor="">
                                <div style={{background: time ? "orange" : ''}} className='delivery__form-btn delivery__form-btn-left' onClick={() => setTime(prev => !prev)}>
                                    На сейчас
                                </div>
                                <div style={{background: !time ? "orange" : ''}} className='delivery__form-btn delivery__form-btn-right' onClick={() => setTime(prev => !prev)}>
                                    На время
                                </div>
                            </label>
                            
                            <label className='delivery__form-label' htmlFor="">
                                <input className='delivery__form-field delivery__form-field-long' type="email" placeholder='Emai (необязательно)' />
                            </label>
                        </div>
                    </div>
                    <button onClick={ finish} className='delivery__form-btn-submit' type='submit'>Оформить заказ</button>
                </form> 
            </div>
        </div>
    );
};

export default Delivery;