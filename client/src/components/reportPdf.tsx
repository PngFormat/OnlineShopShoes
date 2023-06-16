import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {Image} from "react-bootstrap";
import jsPDF from 'jspdf';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const ReportPdf = ({nameSupplier}) => {
    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        const text = `WELLDONE

    Уважаемый клиент,

    Мы рады сообщить вам, что ваш выбор поставщика был успешно завершен. Мы тщательно рассмотрели различных поставщиков и приняли решение о сотрудничестве с компанией ${nameSupplier.name}.

    Мы уверены, что выбранный поставщик предложит нам качественные товары и услуги, а также установит долгосрочные и взаимовыгодные отношения. Мы ценим ваше доверие и уверены, что это будет успешное партнерство.

    Если у вас есть какие-либо вопросы или требуется дополнительная информация, пожалуйста, не стесняйтесь обращаться к нашей команде. Мы всегда готовы помочь.

    Спасибо за ваше сотрудничество и доверие. Мы с нетерпением ожидаем продуктивного сотрудничества с выбранным поставщиком.

    С уважением,
    [Ваша компания]`;

        doc.text(text, 10, 10);

        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGF6wkHCwelorftF48hensLd5s4yHBd981MA&usqp=CAU';
        const imageWidth = 90;
        const imageHeight = 90;

        doc.addImage(imageUrl, 'JPEG', 50, 150, imageWidth, imageHeight);
        doc.save('report.pdf');
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGF6wkHCwelorftF48hensLd5s4yHBd981MA&usqp=CAU'></Image>
    };

    return (
        <div>
            <h1>Звіти</h1>
            <button onClick={handleDownloadPDF}>Скачать PDF</button>
        </div>
    );
};

export default ReportPdf;