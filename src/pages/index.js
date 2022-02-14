import * as React from "react"
import { ElfsightWidget } from 'react-elfsight-widget';
import Layout from "../components/layout"
import Seo from "../components/seo"
import "@fontsource/roboto";

const IndexPage = ()  => {

  return (
  <Layout>
    <Seo title="Home" />
    <br></br>
    <div className="flex-container">
      <div className="flex-child">
      <h1 style={{textAlign: 'left'}}>AccuService</h1>

      </div>
      <div className="flex-child" >
    
<ul style={{lineHeight: '40%', listStyleType: 'none'}}>
<li ><span style={{fontSize: '18px'}}>Westerdok 230&nbsp;</span></li>
<li ><span style={{fontSize: '18px'}}>1013 BH, Amsterdam&nbsp;</span></li>
          <li ><span style={{fontSize: '18px'}}>0647493275&nbsp;</span></li>
          <li ><span style={{fontSize: '18px'}}>info@accuservice.eu&nbsp;</span></li>
          </ul>
      </div>
   </div>
   <br></br>
    <div style={{width:'100%',height:'0px',position:'relative',paddingBottom:'56.250%'}}><iframe src="https://streamable.com/e/gard4n?autoplay=1&nocontrols=1&loop=0&mute=1" frameBorder="0" width="100%" height="100%" allowFullScreen allow="autoplay" style={{width:'100%',height:'100%',position:'absolute',left:'0px',top:'0px',overflow:'hidden'}}></iframe></div>    
    <br></br>
    <br></br>
    <br></br>
  
   <div className="flex-container">
      <div className="flex-child">
        <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/c_scale,w_1607/v1638730531/AccuService/battery.webp" ></img>
      </div>
      <div className="flex-child">
      <h1 style={{textAlign: 'left'}}>I fix and overhaul batteries of:</h1>
       
        <ul style={{lineHeight: '100%'}}>
          <li style={{textAlign: 'left'}}><span style={{fontSize: '24px'}}>bicycles&nbsp;</span></li>
          <li style={{textAlign: 'left'}}><span style={{fontSize: '24px'}}>skateboards</span></li>
          <li style={{textAlign: 'left'}}><span style={{fontSize: '24px'}}>steps&nbsp;</span></li>
          <li style={{textAlign: 'left'}}><span style={{fontSize: '24px'}}>unicycles&nbsp;</span></li>
          <li style={{textAlign: 'left'}}><span style={{fontSize: '24px'}}>scooters&nbsp;</span></li>
          <li style={{textAlign: 'left'}}><span style={{fontSize: '24px'}}>electrical tools</span><br />
          </li>
        </ul>
        <div><span style={{fontSize: '24px'}}>and other electrical/battery powered tools and chargers. Fill the form below to get a quote.</span></div>
      </div>
   </div>
   <br></br>
   <br></br>
   <br></br>
<ElfsightWidget  widgetID="457f2b53-ba81-483d-94d6-63f98744baaf" />
    <br></br>
    <br></br>
    <br></br>
    
<ElfsightWidget  widgetID="f89a1ffc-149b-495e-acbd-78bf9f723ff4" />


<br></br>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.8924297995!2d4.763878108967292!3d52.354582834316005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x394ede1b8ab2b23!2sAccuService.Eu!5e0!3m2!1sen!2snl!4v1638639217490!5m2!1sen!2snl" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy"></iframe>
<br></br>
<ElfsightWidget  widgetID="0dfd0621-5b70-4f1b-91ca-55d5d4c6a32d" />
  </Layout>)
}

setTimeout(DoStuffFunction,6000)

function DoStuffFunction(){
  document.getElementById("eapps-form-1").querySelectorAll('[eapps-link="buttonSubmit"]')[0].addEventListener('click', function () {
     window.dataLayer.push({'event':'FormSubmit'});
   
  }, { once: true })
}


export default IndexPage
