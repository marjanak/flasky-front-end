import Cat from './Cat';
import PropTypes from 'prop-types';

const CatList = ({catData,onPetCat}) => {
    const catComponents = catData.map((cat) => {
        return (
            <Cat
            id={cat.id}
            name={cat.name}
            caretaker={cat.caretaker}
            color={cat.color}
            personality={cat.personality}
            petCount={cat.petCount}
            onPetCat={onPetCat}
            key={cat.id}
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
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        personality: PropTypes.string.isRequired,
        caretaker: PropTypes.string.isRequired,
        petCount: PropTypes.number.isRequired,
    })).isRequired,
    onPetCat: PropTypes.func.isRequired,
    
};

export default CatList;