import React from 'react';

const SaveAndOrderButton = ({ selectedParts }) => {
    const handleSaveAndOrder = () => {
        // Передача обраних частин на сервер для збереження та замовлення
        fetch('https://api.example.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedParts),
        })
            .then(response => response.json())
            .then(data => {
                // Обробка відповіді сервера після збереження та замовлення
                console.log('Order placed:', data);
                // Додаткові дії після замовлення (наприклад, показ повідомлення про успішне замовлення)
            })
            .catch(error => {
                // Обробка помилки при збереженні та замовленні
                console.error('Error placing order:', error);
                // Додаткові дії при помилці (наприклад, показ повідомлення про помилку)
            });
    };

    return (
        <button onClick={handleSaveAndOrder}>Save and Order</button>
    );
};

export default SaveAndOrderButton;