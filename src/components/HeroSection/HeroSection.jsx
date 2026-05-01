import { FaGithubSquare, FaLinkedin, FaSnapchatSquare } from 'react-icons/fa'
import './herosection.css'
import { FaSquareInstagram } from 'react-icons/fa6'

const HeroSection = () => {

    let socialMedia = [
        {
            logo: <FaSnapchatSquare />,
            link: "https://www.snapchat.com/add/zulqarnainhaider",
            color: "rgb(235, 235, 5)"
        },
        {
            logo: <FaSquareInstagram />,
            link: "https://www.instagram.com/zulqarnainhaider/",
            color: "rgb(115, 14, 170)"
        },
        {
            logo: <FaLinkedin />,
            link: "https://www.linkedin.com/in/zulqarnain-haider-9a1b4b1b3/",
            color: "rgb(24, 146, 239)"
        },
        {
            logo: <FaGithubSquare />,
            link: "https://github.com/zulqarnainhaider",
            color: "black"
        },

    ]




    return (
        <div className='herosection'>

            <div className='image-container'>
                <img src="https://muhammadzuhaib.vercel.app/assets/zohaib's%20picture-409e52cc.png" alt="My Profile Picture" />
            </div>



            <div className='herosection-right'>
                <div>
                    <h1>Frontend Developer | Football Player </h1>
                    <p>Hi, I'm Zulqarnain Haider. A passionate Frontend Developer based in Karachi, Pakistan. 📍 Hi, I'm Zulqarnain Haider. A passionate Frontend Developer based in Karachi, Pakistan. 📍</p>
                </div>



                <div className='socialmedia-container'>

                    {socialMedia.map((item) => (
                        <a href={item.link} target='_blank' style={{ color: item.color }}>
                            {item.logo}
                        </a>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default HeroSection