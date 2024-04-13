import Button from "../Button/Button";
import './Card.css';
import favorites from '/public/products/favorites.svg';
import { NavLink } from "react-router-dom";

export default function Card({ id, title, price,description, photo, addToCart }) {
    const handleAddToCart = () => {
        // Вызываем функцию добавления товара в корзину и передаем ей информацию о товаре
        addToCart({ id, name, price, photo });
    };

    return (
        <>
            <div className="card">
                <NavLink to={`/catalog/${id}`}>
                    <div className="card-image">
                        <img src={photo} alt="product" />
                    </div>
                </NavLink>
                <div className="card-title">{title}</div>
                <div className="card-descr">{description}</div>
               
                <div className="card__footer">
                    <div className="card-price">{price} ₽</div>
                    <Button onClick={handleAddToCart} backgroundColor="#333" color="#f3f3f3">
                        В корзину!
                    </Button>
                </div>
                {/* Нажатие на кнопку вызывает функцию handleAddToCart */}
               

                {/* <img src={favorites} alt="favorites" className="card-favorites" /> */}
            </div>
        </>
    );
}
