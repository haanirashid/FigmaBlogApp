import './EmailSection.css'

function EmailSection() {
    return (
        <>
            <div className="main_email">
                <div className="sub_email">
                    <h1>Get Our Story delivered from us to you inbox weekly.</h1>
                    <input type="text" placeholder='Your Email' />
                    <button>Get Started</button>
                    <p>Get a responce by tommorow if you submit by 9pm today if we received after
                        9pm will get a responce the following day</p>
                </div>
            </div>
        </>
    )
}

export default EmailSection