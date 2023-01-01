import './Hero.css'

const Hero = (props) =>{
    return(
       <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitl'>Welcome To Cyborg</h6>
            <h4 className='hero-titl'><em>BROWSE</em> OUR POPULAR GAMES HER</h4>

            <div className='hero-button'>
                <a href="browse.html">Browse Now</a>
            </div>
        </div>
       </div>

    )
}

export default Hero