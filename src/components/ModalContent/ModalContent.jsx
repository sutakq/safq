import "./ModalContent.css"
import Button from "../Button/Button";
import { useState } from 'react';
export default function ModalContent({ closeModal }) {
    const [cartItems, setCartItems] = useState([
        // Здесь можете передать начальные товары в корзину
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 15 },
        { id: 3, name: 'Product 3', price: 20 },
    ]);

    const removeItem = (index) => {
        // Создаем копию массива товаров в корзине
        const updatedCartItems = [...cartItems];
        // Удаляем товар из массива по индексу
        updatedCartItems.splice(index, 1);
        // Обновляем состояние корзины
        setCartItems(updatedCartItems);
    };
    return (
        <>

            <div className="ReactModal__Content" class="">
                <div class="wrap cf">
                 
                    <div class="heading cf">
                        <h1>КОРЗИНА</h1>
                       
                    </div>
                    <div class="cart">

                        <ul class="cartWrap">
                        {cartItems.map((item, index) => (
                                
                          
                        <li class="items odd" key={item.id}>

                        <div class="infoWrap">
                            <div class="cartSection">
                                <img src="../../public/products/product.jpeg" alt="" class="itemImg" />
                              
                                <h3>{item.name}</h3>

                               

                               
                            </div>


                            <div class="prodTotal cartSection">
                                <p>{item.price}.00 ₽</p>
                            </div>
                            <div class="cartSection removeWrap">
                                <button onClick={() => removeItem(index)} class="remove">Удалить</button>
                            </div>
                        </div>
                        </li>
                            ))}
                           
                          

                        </ul>
                    </div>

                    
                    <div class="subtotal cf">
                        <ul>
                          
                            <li class="totalRow final"><span class="label">Итого</span><span class="value">44.00 ₽</span></li>
                            <li class="totalRow"><Button backgroundColor="#333" color="#f3f3f3">
                        В корзину!
                    </Button></li>
                        </ul>
                    </div>
                </div>
                <button onClick={closeModal} class="close-btn">X</button>

            </div>

        </>
    )
}