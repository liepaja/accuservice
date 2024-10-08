import * as React from "react"
import { ElfsightWidget } from 'react-elfsight-widget';
import Layout from "../components/layout"
import Seo from "../components/seo"
import "@fontsource/roboto";
import Header from "../components/header";

const IndexPage = () => {

  return (
    <Layout>
      <Seo title="AccuService accu reparatie" />
      <Header></Header>

      <br></br>
      <br></br>
      <br></br>
  

      <div className="flex-container">
        {/* <div className="flex-child">
        <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/c_scale,w_1607/v1638730531/AccuService/battery.webp" ></img>
      </div> */}

        <div className="flex-child">
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/c_scale,w_1607/v1638730531/AccuService/battery.webp" ></img>
        </div>
        <div className="flex-child">
          <h1 style={{ textAlign: 'center' }}>Vanmoof / e-bike accu en electronica reparatie</h1>
          {/* <h2 style={{ textAlign: 'center' }}>Repair and overhaul of bicycle batteries</h2> */}


          <div style={{ textAlign: 'center' }}><span style={{ fontSize: '20px' }}>Standaard inspectiekosten: 45€</span></div>


          {/* <ul style={{lineHeight: '100%'}}>
          <li style={{textAlign: 'left'}}><span style={{fontSize: '24px'}}>bicycles&nbsp;</span></li>
          <li style={{textAlign: 'left'}}><span style={{fontSize: '24px'}}>skateboards</span></li>
       <br />
          
        </ul> */}
          {/* <div><span style={{fontSize: '24px'}}>and other electrical/battery powered tools. Fill the form below to get a quote.</span></div> */}
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <ElfsightWidget widgetID="f89a1ffc-149b-495e-acbd-78bf9f723ff4" />

      
      <br></br>
      <br></br>
      <br></br>


      <br />






      {/* <div style={{border:"black", borderWidth:"5px", borderStyle:"solid"}} className="flex-child">
          
        <a  href="/stromer" >
        <div className="flex-container">
        <div className="flex-child">
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1706894338/AccuService/Stromer_blauw.png"  />
          </div>
          <div className="flex-child">
          <h3>Buy overhauled Stromer batteries</h3>    

          </div>
          </div>
        </a>     


      
      </div> */}

      <br></br>
      <br></br>
      <br></br>
      <ElfsightWidget widgetID="0dfd0621-5b70-4f1b-91ca-55d5d4c6a32d" />
      <br></br>
      <br></br>
      <br></br>
      <ElfsightWidget widgetID="457f2b53-ba81-483d-94d6-63f98744baaf" />




      <br></br>
      <br></br>
      <br></br>

      <div className="flex-container">
        <div className="flex-child">
          {/* <a  href="/vanmoof" ><img src="https://res.cloudinary.com/dge6vq2wh/image/upload/a_-90/c_fill,w_1000,h_90,g_auto/v1706893049/AccuService/Vanmoof_s3_bat.webp"  /> */}
          <a href="/vanmoof" ><img style={{ marginBottom: 0, borderRadius: "20px" }} src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1709593246/AccuService/Vanmoff_4_jsl2b9.png" /> </a>
        </div>
      </div>
      <br></br>
      <br></br>
<div className="flex-container">
        <div className="flex-child">
          {/* <a  href="/vanmoof" ><img src="https://res.cloudinary.com/dge6vq2wh/image/upload/a_-90/c_fill,w_1000,h_90,g_auto/v1706893049/AccuService/Vanmoof_s3_bat.webp"  /> */}
          <a href="/vanmoofs5" ><img style={{ marginBottom: 0, borderRadius: "20px" }} src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1717695415/AccuService/vanmoofs5.png" /> </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.8924297995!2d4.763878108967292!3d52.354582834316005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x394ede1b8ab2b23!2sAccuService.Eu!5e0!3m2!1sen!2snl!4v1638639217490!5m2!1sen!2snl" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>



    </Layout>)
}

// setTimeout(DoStuffFunction,6000)

// function DoStuffFunction(){
//   document.getElementById("eapps-form-1").querySelectorAll('[eapps-link="buttonSubmit"]')[0].addEventListener('click', function () {
//      window.dataLayer.push({'event':'FormSubmit'});

//   }, { once: true })
// }


export default IndexPage
