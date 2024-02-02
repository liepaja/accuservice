import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    
  >
   <br></br>
    <div className="flex-container">
      <div className="flex-child">
      <h1 style={{textAlign: 'left'}}>AccuService</h1>

      </div>
      <div className="flex-child" >
    
<ul style={{lineHeight: '40%', listStyleType: 'none'}}>
<li ><span style={{fontSize: '18px'}}>Westerdok 316</span></li>
<li ><span style={{fontSize: '18px'}}>1013 BH, Amsterdam&nbsp;</span></li>
          <li ><span style={{fontSize: '18px'}}>0647493275 <b>(Fill in the form first)</b></span></li>
          <li ><span style={{fontSize: '18px'}}>info@accuservice.eu&nbsp;</span></li>
          </ul>
      </div>
   </div>
   <br></br>
   <br></br>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
