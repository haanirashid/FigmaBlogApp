import ProductCard from '../ProductCard/ProductCard'
import './CardsLineOne.css'

function CardsLineOne() {
  return (
    <>
      <div className="main_card_line_one">
        <div className="card_line_one">
          <ProductCard imgAddress='./images/card-one-img.png' hFour="travel" date="10 jan 2025" hOne="8 Rules of Travlling in Sea You Need To Know" />
          <ProductCard imgAddress='./images/card-two-img.png' hFour="Development" date="11 jan 2025" hOne="How to get a Strong Portfolio and get a Job in UI/UX" />
          <ProductCard imgAddress='./images/card-three-img.png' hFour="Sports" date="12 jan 2025" hOne="How to be Professinal Fottballer in 2025" />
        </div>
      </div >
    </>
  )
}

export default CardsLineOne