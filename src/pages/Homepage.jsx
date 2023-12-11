import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import EmployeeList from "../components/EmployeeList";


export default function Homepage() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [filtedData, setFilteredData] = useState([]);
  
    useEffect(() => {
      async function getData() {
        try {
          const response = await fetch(`https://reqres.in/api/users?page=2`);
          const data = await response.json();
          // console.log(data.data)
          setData(data.data);
          setFilteredData(data.data);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
      console.log(data);
    }, []);
  
    function handleChange(e) {
      setInput(e.target.value);
  
      let newData = data.filter((emp) => {
        return (
          emp.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          emp.last_name.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      console.log(newData);
      setFilteredData(newData);
    }
  
    return (
      <div>
       <Header />
        <Searchbar input={input} handleChange={handleChange}/>
       <EmployeeList filtedData={filtedData}/>
       
          </div>
          )
          }

        
