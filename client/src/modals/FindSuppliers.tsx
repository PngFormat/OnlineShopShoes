import React, { MouseEventHandler,useState,useEffect } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import {createBrand} from "../http/deviceApi"



interface CreateSuppliersProps{
    show: boolean;
    onHide: () => void;
}

const FindSuppliers: React.FC<CreateSuppliersProps> = ({show,onHide}) => {
    const [value,setValue] = useState<string | undefined>('');
    const [people, setPeople] = useState([]);

    const addBrand = () => {
        createBrand({name: value}).then(() => {
            setValue('')
            onHide()
        })
    }

    useEffect(() => {
        // Получение списка людей с сервера
        fetch('/people')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.error('Error fetching people:', error));
    }, []);

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

                <div>
                    <Modal.Title className='mt-1' id="contained-modal-title-vcenter">
                        Выберите поставщика
                    </Modal.Title>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Кнопка выпадающего списка
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Действие</a></li>
                                <li><a className="dropdown-item" href="#">Другое действие</a></li>
                                <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                            </ul>
                        </div>

                    <Modal.Title className='mt-5' id="contained-modal-title-vcenter">
                        Выберите товар
                    </Modal.Title>


                    <div>

                        <ul>
                            {people.map(person => (
                                <li key={person.id}>{person.name}</li>
                                    ))}
                                </ul>
                                </div>



                    <div className="dropdown mt-1 w-100">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Кнопка выпадающего списка
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Действие</a></li>
                            <li><a className="dropdown-item" href="#">Другое действие</a></li>
                            <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                        </ul>
                    </div>
                </div>


                    <img className='d-flex float-end' width={350} height={260} src="https://kartinki.pibig.info/uploads/posts/2023-04/1681206535_kartinki-pibig-info-p-postavshchiki-kartinki-dlya-prezentatsii-a-2.png"  alt="..."/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={null}>Create</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FindSuppliers
