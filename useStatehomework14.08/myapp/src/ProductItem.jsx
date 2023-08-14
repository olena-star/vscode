import React from 'react';

const ProductItem = ({ product, onIncrement, onDecrement, onDelete }) => {
    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>Цена: {product.price}</p>
            <p>Количество: {product.count}</p>
            <button onClick={() => onIncrement(product.id)}>+</button>
            <button onClick={() => onDecrement(product.id)}>-</button>
            <div onDoubleClick={() => onDelete(product.id)}>Удалить</div>
        </div>
    );
};

export default ProductItem;
