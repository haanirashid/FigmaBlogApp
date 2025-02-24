import './ProductCard.css'

function ProductCard(props) {
  const {imgAddress , hFour , hOne , date} = props;
  return (
    <>
      <div className="product_card">
        <div className="img">
          <img src={imgAddress} alt="card-img-error" />
        </div>
        <div className="text_card">
          <h4> {hFour} <span>{date}</span></h4>
          <h1>{hOne}</h1>
          <p>Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime.</p>
          <a href="#">Read More....</a>
        </div>
        <div className="empty_space"></div>
      </div>
    </>
  )
}

export default ProductCard