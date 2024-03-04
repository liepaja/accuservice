import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    
  >
   <br></br>
    <div className="flex-container">
      <div className="flex-child">
      <h1 style={{textAlign: 'left'}}>{siteTitle}</h1>

      </div>
      <div className="flex-child" >
    
<ul style={{lineHeight: '40%', listStyleType: 'none', fontWeight:"bold"}}>
<li ><span style={{fontSize: '18px'}}>Westerdok 316</span></li>
<li ><span style={{fontSize: '18px'}}>1013 BH, Amsterdam</span></li>
          <li ><span style={{fontSize: '18px'}}>0647493275 </span></li>
          <li ><span style={{fontSize: '18px'}}>info@accuservice.eu</span></li>
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

Header.defaultProps = {
  siteTitle: `AccuService`,
}

export default Header
