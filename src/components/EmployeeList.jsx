import EmployeeListItem from "./EmployeeListItem"

const EmployeeList = ({filtedData}) => {
  return (
        
        <div>{ filtedData && filtedData.map((data) => {
            
            console.log(data)

          return (
         <EmployeeListItem key={data.id} data={data}/>
          )
          }
          )
          }
          </div>
  )
}

export default EmployeeList