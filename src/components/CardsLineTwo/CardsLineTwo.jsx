import HeroSectionDivider from '../HeroSectionDivider/HeroSectionDivider'
import ProductCard from '../ProductCard/ProductCard'
import './CardsLineTwo.css'

function CardsLineTwo() {
  return (
    <>
    <HeroSectionDivider hOne ="Popular Post" />
    <div className="main_card_line_two">
        <div className="card_line_two">
          <ProductCard imgAddress='./images/card-four-img.png' hFour="travel" date="13 jan 2025" hOne="Train Or Bus? Journey Which One Suit" />
          <ProductCard imgAddress='./images/card-five-img.png' hFour="Development" date="14 jan 2025" hOne="Best Website to reserch for your new Job" />
          <ProductCard imgAddress='./images/card-six-img.png' hFour="Sports" date="15 jan 2025" hOne="HOW to be a Dancer in 2025 With Popuar skills" />
          <ProductCard imgAddress='./images/card-seven-img.png' hFour="travel" date="16 jan 2025" hOne="Who is the Best Singer on Char? KNow him?" />
          <ProductCard imgAddress='./images/card-eight-img.png' hFour="Development" date="17 jan 2025" hOne="How to Start Import Buniess from Home" />
          <ProductCard imgAddress='./images/card-nine-img.png' hFour="Sports" date="18 jan 2025" hOne="Make Some Drink With Chocaltes Chocaltes with Milk" />
        </div>
      </div >
    </>
  )
}

export default CardsLineTwo