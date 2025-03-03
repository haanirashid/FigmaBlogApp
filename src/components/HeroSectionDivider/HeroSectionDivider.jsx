import './HeroSectionDivider.css'
import PropTypes from 'prop-types';

function HeroSectionDivider(props) {
    const { hOne } = props;
    return (
        <>
            <div className="divider">
                <h1>{hOne}</h1>
                <button>View All</button>
            </div>
        </>
    )
}
HeroSectionDivider.propTypes = {
    hOne: PropTypes.string
};
export default HeroSectionDivider