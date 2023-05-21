import React, { useState } from 'react';

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);

        setIsLoading(false);
        alert('Платеж успешно обработан!');
    };

    return (
        <div className="text-3xl flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">

                <h1 className="text-2xl font-bold mb-6">Страница оплаты</h1>
                <form>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Номер карты:</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Срок действия:</label>
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">CVV:</label>
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handlePayment}
                        disabled={isLoading}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    >
                        {isLoading ? 'Оплата...' : 'Оплатить'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;