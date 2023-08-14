import React, { useState } from 'react';
import ProductItem from './ProductItem';

const App = () => {
    const initialData = [
        { id: 1, name: 'Велосипед', price: 1000, count: 1 },
        { id: 2, name: 'Самокат', price: 700, count: 1 },
        { id: 3, name: 'Ролики', price: 1300, count: 2 },
        { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
    ];

    const [data, setData] = useState(initialData);

    const handleIncrement = (productId) => {
        setData((prevData) =>
            prevData.map((product) =>
                product.id === productId ? { ...product, count: product.count + 1 } : product
            )
        );
    };

    const handleDecrement = (productId) => {
        setData((prevData) =>
            prevData.map((product) =>
                product.id === productId && product.count > 0
                    ? { ...product, count: product.count - 1 }
                    : product
            )
        );
    };

    const handleDelete = (productId) => {
        setData((prevData) => prevData.filter((product) => product.id !== productId));
    };

    return (
        <div className="App">
            <button
                onClick={() => {
                    const name = prompt('Введите название товара:');
                    const price = parseInt(prompt('Введите цену товара:'));
                    const count = parseInt(prompt('Введите количество товара:'));
                    const id = data.length + 1; // Просто для демонстрации, обычно id генерируется автоматически
                    setData((prevData) => [...prevData, { id, name, price, count }]);
                }}
            >
                Добавить товар
            </button>
            {data.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default App;



// function App() {
//   return (
//     <div>
//     123
//     </div>
//   );
// }

// export default App;
