// const Person = (props) => {
//     console.log("PROPS: ", props);
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>JobTitle: {props.jobTitle}</p>
//         </div>
//     )
// }
import PropTypes from 'prop-types';

const Person = ({name, age, jobTitle}) => {
    console.log("PROPS: ", {name, age, jobTitle});
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>JobTitle: {jobTitle}</p>
        </div>
    )
};

Person.defaultProps = {
    jobTitle: "Weapon"
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    jobTitle: PropTypes.string,
};


export default Person;