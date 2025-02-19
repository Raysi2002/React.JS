import PropTypes from "prop-types"


function Employee(props){
    return(
        <div className="employee">
            <p>Name: {props.empName}</p>
            <p>Age: {props.age}</p>
            <p>Salaray: {props.salary}</p>
        </div>
    )
}

Employee.propTypes = {
    empName: PropTypes.string,
    age: PropTypes.number,
    salary: PropTypes.number
}

export default Employee;