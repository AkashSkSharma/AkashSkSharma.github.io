import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <a href={socialImg.link} target="_blank" rel="noopener noreferrer" title={socialImg.name}>
                                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center cta-button group">
                    <div className="bg-circle" />
                    <p className="text"> Let's Connect</p>
                    <a 
                        href="/resume/Akash_Sharma_CV..pdf"
                        download 
                        className="font-bold py-2 px-4 rounded mb-3 text-center"
                    >
                        Download Resume
                    </a>
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Akash Sharma.
                    </p>
                    <div className="arrow-wrapper"><img src="/images/arrow-down.svg" alt="arrow" /></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
