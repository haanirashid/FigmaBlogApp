import './HeroSectionDivider.css'

function HeroSectionDivider(props) {
const {hOne} = props;
    return (
        <>
            <div className="divider">
                <h1>{hOne}</h1>
                <button>View All</button>
            </div>
        </>
    )
}

export default HeroSectionDivider