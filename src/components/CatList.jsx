import Cat from './Cat';
import PropTypes from 'prop-types';

const CatList = ({catData}) => {
    const catComponents = catData.map((cat,i) => {
        return (
            <Cat
            name={cat.name}
            caretaker={cat.caretaker}
            color={cat.color}
            personality={cat.personality}
            key={i}
            /> );
        
    });
    return (
        <>
            <h2> Cat List</h2>
            <ul>
            {catComponents}
            </ul>
        </>
    );
};

CatList.propTypes = {
    catData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        personality: PropTypes.string.isRequired,
        caretaker: PropTypes.string.isRequired
    })).isRequired
    
};

export default CatList;