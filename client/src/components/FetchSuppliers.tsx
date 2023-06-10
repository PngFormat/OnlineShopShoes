import React, { useEffect, useState } from 'react';
import {getSuppliers} from "../http/deviceApi";

const PeopleList = () => {
    const [people, setPeople] = useState([]);


    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        try {
            const response = await getSuppliers();
            setPeople(response);
        } catch (error) {
            console.error('Error fetching people:', error);
        }
    };

    return (
        <div>
            <ul>
                {people.map((person) => (
                    <li key={person.id}>{person.name} {person.surname}</li>
                ))}
            </ul>
        </div>
    );
};

export default PeopleList;