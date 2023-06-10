import React, { MouseEventHandler,useState,useEffect } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import {createBrand, getSuppliers} from "../http/deviceApi"
import { PDFViewer } from '@react-pdf/renderer';
import ReportPdf from "../components/reportPdf";
import {PDFDownloadLink} from "@react-pdf/renderer";
import { Dropdown } from 'react-bootstrap';


interface CreateSuppliersProps{
    show: boolean;
    onHide: () => void;
}

const FindSuppliers: React.FC<CreateSuppliersProps> = ({show,onHide}) => {

    const [value,setValue] = useState<string | undefined>('');
    const [people, setPeople] = useState([]);
    const [choosenSupplier, setChoosenSupplier] = useState(null);

    const addBrand = () => {
        createBrand({name: value}).then(() => {
            setValue('')
            onHide()
        })
    }

    useEffect(() => {
        // Получение списка людей с сервера
          getSuppliers()
            .then(data => setPeople(data))
            .catch(error => console.error('Error fetching people:', error.message));
    }, []);


    console.log(choosenSupplier)
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выбор поставщиков
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex justify-content-between'>
                    {/*<PDFDownloadLink document={<ReportPdf/>} fileName='FORM'>*/}
                    {/*    {({loading }) =>*/}
                    {/*        loading ? (*/}
                    {/*            <button>Завантаження звіту</button>*/}
                    {/*        ) : (*/}
                    {/*            <button>Завантажити звіт</button>*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*</PDFDownloadLink>*/}
                <div>
                    <Modal.Title className='mt-1' id="contained-modal-title-vcenter">
                        Выберите поставщика
                    </Modal.Title>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdownMenuButton1">
                            Кнопка выпадающего списка
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {people.map((person) => (
                                <Dropdown.Item
                                    key={person.id}
                                    onClick={() => setChoosenSupplier(person)}
                                >
                                    {person.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>


                    <Modal.Title className='mt-5' id="contained-modal-title-vcenter">
                        Выберите товар
                    </Modal.Title>


                        {/*{!!choosenSupplier &&*/}

                        {/*    <div>*/}
                        {/*        {*/}
                        {/*            choosenSupplier.items.map(item => (*/}
                        {/*                <div>*/}
                        {/*                    {*/}
                        {/*                        item.title*/}
                        {/*                    }*/}
                        {/*                    {' '}*/}
                        {/*                    {*/}
                        {/*                        item.price*/}
                        {/*                    }*/}
                        {/*                </div>*/}
                        {/*            ))*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*}*/}
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdownMenuButton1">
                            Кнопка выпадающего списка
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {!!choosenSupplier && (
                                <ul>
                                    {choosenSupplier.items.map((item, index) => (
                                        <Dropdown.Item
                                            key={index}>
                                            {item.title} {item.price}
                                        </Dropdown.Item>
                                    ))}
                                </ul>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <div>


                                </div>



                    <div className="dropdown mt-1 w-100">

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Действие</a></li>
                            <li><a className="dropdown-item" href="#">Другое действие</a></li>
                            <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                        </ul>
                    </div>
                </div>


                    <img className='d-flex float-end' width={350} height={260} src="https://kartinki.pibig.info/uploads/posts/2023-04/1681206535_kartinki-pibig-info-p-postavshchiki-kartinki-dlya-prezentatsii-a-2.png"  alt="..."/>
                </div>
                <ReportPdf nameSupplier={choosenSupplier} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={null}>Create</Button>
            </Modal.Footer>

        </Modal>
    );
}

export default FindSuppliers
