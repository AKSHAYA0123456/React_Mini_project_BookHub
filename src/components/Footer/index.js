import {FaTwitter, FaLinkedin, FaGithub, FaPhoneSquareAlt} from 'react-icons/fa'
import HeaderContext from '../../context/HeaderContext'
import './index.css'

const Footer = () => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const footerDarkText = isDarkTheme ? 'footer-dark-text' : ''

      return (
        <div className="footer-container">
          <div className="icons-container">
            <FaPhoneSquareAlt className={`footer-icon ${footerDarkText}`} />

            <a
              href="https://www.linkedin.com/in/vijaykumarpeddagari/"
              target="__blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaLinkedin className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="https://github.com/VijayKumarPeddagari/ccbp-book-hub"
              target="__blank"
              rel="no opener no referrer"
              className="footer-icon-button"
            >
              <FaGithub className={`footer-icon ${footerDarkText}`} />
            </a>

            <FaTwitter className={`footer-icon ${footerDarkText}`} />
          </div>
          <p className={`contact-us-text ${footerDarkText}`}>Contact us</p>
          <p className={`contact-us-text ${footerDarkText}`}>
            Copyright @2024 <i>Koushik Koppolu</i>
          </p>
        </div>
      )
    }}
  </HeaderContext.Consumer>
)

// Home Route should consist of an HTML paragraph element in the footer with text content as "Contact us"

export default Footer