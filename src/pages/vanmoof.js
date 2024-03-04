import * as React from "react"
import { ElfsightWidget } from 'react-elfsight-widget';
import Layout from "../components/layout"
import Seo from "../components/seo"
import "@fontsource/roboto";
import Header from "../components/header";

const IndexPage = () => {

  return (
    <Layout>
      <Seo title="VanMoof accu reparatie" />
      <Header siteTitle={"VanMoof accu reparatie"}></Header>
      <br></br>
      <br></br>
      <br></br>
      {/* <div className="flex-container"> */}

      {/* <div className="flex-child"> */}
      Deze foutcodes duiden op een probleem met de batterij:
      <br></br>
      <br></br>
      <ul>
  <li>6</li>
  <li>12</li>
  <li>13</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
</ul>
   
<br></br>
<br></br>

Reparatiekosten bedragen gemiddeld € 150,-, afhankelijk van het probleem.

<br></br>
<br></br>
<br></br>
<br></br>
      {/* </div> */}
      {/* </div> */}

      
      <ElfsightWidget widgetID="4803340c-c54a-4f24-af34-0032393d3be9" />

      <br></br>
<br></br>
<br></br>
<br></br>

      <div className="flex-container">
        <div  className="flex-child">
       <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1709510923/AccuService/Accu_auxkso.png"  />       
        </div>
        </div>
        <br></br>
<br></br>
<br></br>
<br></br>
<div className="flex-container">
<div  className="flex-child">
       <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1706889356/AccuService/vanmoof_bike.png"  />       
        </div>
      </div>

      <br></br>
<br></br>
<br></br>
<br></br>
<div className="flex-container">
<div  className="flex-child">
       <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1709513341/AccuService/75bebaa8-a74f-42c6-87d2-6762536ec8b6.png"  />       
        </div>
      </div>
      
     
    </Layout>)
}

// setTimeout(DoStuffFunction,6000)

// function DoStuffFunction(){
//   document.getElementById("eapps-form-1").querySelectorAll('[eapps-link="buttonSubmit"]')[0].addEventListener('click', function () {
//      window.dataLayer.push({'event':'FormSubmit'});

//   }, { once: true })
// }


export default IndexPage
