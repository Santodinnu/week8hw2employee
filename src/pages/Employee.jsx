import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Employee() {
  const [data, setData] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const { first_name } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const parsedResponse = await response.json();
        setData(parsedResponse.data);

        const person = parsedResponse.data.find((item) => item.first_name === first_name);
        setSelectedPerson(person);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [first_name]);

  return (
    <div>
      {selectedPerson && (
        <div>
          <h1>Employee</h1>
          <br />
          <br />
          <img src={selectedPerson.avatar} alt={`${selectedPerson.first_name} Avatar`} />
          <h2>
            {selectedPerson.first_name} {selectedPerson.last_name}
          </h2>
          <h2>Email: {selectedPerson.email}</h2>
          <Link to="/">
            <h2>Employee List</h2>
          </Link>
        </div>
      )}
    </div>
  );
}

