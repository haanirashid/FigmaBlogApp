import './HeroSection.css'
import AiImg from '/images/ai-img.png'

function HeroSection() {
    return (
        <>
            <div className="hero">
                <div className="left">
                    <div className="text">
                        <h4>Featured Post</h4>
                        <h1>How Ai Will</h1>
                        <h1>Changed The Future</h1>
                        <p>Lorem ipsum dolor sit. Explicabo aspernatur dolor rem fugit fugiat, a, facere harum provident modi quos minima quam, culpa doloremque eaque molestiae et at distinctio omnis. dolor rem fugit fugiat, a, facere dolor rem fugit fugiat, a, facere</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="right">
                    <img src={AiImg} alt="error-hero" />
                </div>
            </div>
        </>
    )
}

export default HeroSection