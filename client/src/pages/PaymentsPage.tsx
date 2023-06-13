import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useCart} from "../Context/cartContext";
import {useLocation} from "react-router-dom";
import styles from "../style/ShopPage.module.scss"
interface LocationState {
    itemsPrice: number;
}

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation<LocationState>();
    const { itemsPrice } = location.state || { itemsPrice: 0 };


    const handlePayment = async () => {
        setIsLoading(true);

        // Simulating payment processing delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
        alert('Платеж успешно обработан!');
    };

    return (
        <div className={styles.backPayment}>
            <div className="d-flex flex-column align-items-start h-200">
                <div className="bg-blue p-4 rounded shadow-md w-700">
                    <h1 className="text-center mb-4">Страница оплаты</h1>
                    <Form>
                        <Form.Group controlId="cardNumber">
                            <Form.Label>Номер карты:</Form.Label>
                            <Form.Control
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="Введите номер карты"
                            />
                        </Form.Group>
                        <div className="d-flex">
                            <Form.Group className="mr-2" controlId="expiryDate">
                                <Form.Label>Срок действия:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    placeholder="MM/YY"
                                />
                            </Form.Group>
                            <Form.Group className="ml-2" controlId="cvv">
                                <Form.Label>CVV:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    placeholder="CVV"
                                />
                            </Form.Group>
                        </div>
                        <Button
                            type="button"
                            onClick={handlePayment}
                            disabled={isLoading}
                            className="w-100 mt-4"
                            variant="primary"
                        >
                            {isLoading ? 'Оплата...' : 'Оплатить'}
                        </Button>
                        <h2>Сумма покупки: {itemsPrice} грн</h2>
                    </Form>

                </div>
            </div>
            <div>
                <h2>Принимаемые методы платежей</h2>
                <div className="payment-methods">
                    <img width={150} height={150} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Credit-cards.jpg" alt="Кредитная карта" />
                    <img width={150} height={150} src="https://imgpng.ru/d/credit_card_PNG173.png" alt="Дебетовая карта" />
                    <img width={150} height={150} src="https://cdn-icons-png.flaticon.com/512/4140/4140803.png" alt="Банковский перевод" />
                    <img width={150} height={150} src="https://cdn-icons-png.flaticon.com/512/3326/3326632.png" alt="Электронный кошелек" />
                    <img width={150} height={150} src="https://cdn-icons-png.flaticon.com/512/5341/5341314.png" alt="Криптовалюта" />
                    <img width={150} height={150} src="https://cdn-icons-png.flaticon.com/512/3069/3069338.png" alt="Наличные" />
                    <img width={150} height={150} src="https://cdn-icons-png.flaticon.com/512/3366/3366525.png" alt="Мобильный платеж" />
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
