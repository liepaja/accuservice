import * as React from "react"
import { ElfsightWidget } from 'react-elfsight-widget';
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "@fontsource/roboto";

const IndexPage = ()  => {

  return (
  <Layout>
    <Seo title="Vanmoof battery repair" />
    <div className="flex-container">
      <div className="flex-child">
        <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1706889356/AccuService/vanmoof_bike.png" ></img>
      </div>
      </div>
  </Layout>)
}

setTimeout(DoStuffFunction,6000)

function DoStuffFunction(){
  document.getElementById("eapps-form-1").querySelectorAll('[eapps-link="buttonSubmit"]')[0].addEventListener('click', function () {
     window.dataLayer.push({'event':'FormSubmit'});
   
  }, { once: true })
}


export default IndexPage
