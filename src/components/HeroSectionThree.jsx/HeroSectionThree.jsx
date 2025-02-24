import HeroSectionDivider from '../HeroSectionDivider/HeroSectionDivider'
import './HeroSectionThree.css'

function HeroSectionThree() {
  return (
    <>
    <div className="hero_three">
      <HeroSectionDivider hOne = "Our Recent Post" />
        <div className="main_hero_three">
            <div className="left">
                <img src="./images/cover-img.jpg" alt="error-cover-img" />
            </div>
            <div className="right">
            <div className="text_three">
            <h4>Development <span>10 feb 2025</span></h4>
            <h1>How to make a Game Look More Attractive with New Vr & Al Technology</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati molestiae nesciunt! Eaque sed architecto vero iure at quia voluptatem aliquam! At optio facere deserunt.</p>
            <button>Read More</button>
          </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroSectionThree