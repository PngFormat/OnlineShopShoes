import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useCart} from "../Context/cartContext";
import {useLocation} from "react-router-dom";

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
        <div className="d-flex justify-content-center align-items-center h-200 bg-gray-100">
            <div className="bg-white p-4 rounded shadow-md w-700">
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
                    <p>Сумма покупки: {itemsPrice} грн</p>
                </Form>
            </div>
        </div>
    );
};

export default PaymentPage;
