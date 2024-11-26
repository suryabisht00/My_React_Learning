/*

PropTypes is a package that is used to type check the props that are passed to a component.
It is used to ensure that the props passed to a component are of the correct type.
If the props passed to a component are of the wrong type, PropTypes will throw a warning in the console. 
PropTypes is a useful tool for catching bugs and ensuring that the data passed to a component is of the correct type.

---------------------------------------------------------------------------------------------------------
defaultProps is a property that is used to set default values for the props of a component.

*/

import PropTypes from 'prop-types'

function Student(props){
    return (
        <div className="student">
            <p>Student Name: {props.name}</p>
            <p>Student Age: {props.age}</p>
            <p>Student Roll: {props.roll}</p>
            {/* you should use ternary operator in boolean logic */}
            <p>Student : {props.isStudent ? "Yes " : "NO"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    roll: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    roll: 0,
    isStudent: false
}
export default Student