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
      <Header siteTitle={"VanMoof S5 reparatie"}></Header>
      <br></br>
      <br></br>
      <br></br>
      {/* <div className="flex-container"> */}

      {/* <div className="flex-child"> */}

      {/* <div className="flex-container">
        <div className="flex-child">
          <div style={{ textAlign: 'center' }}><span style={{ fontSize: '20px' }}>
            Deze foutcodes duiden op een probleem met de batterij: </span>
            <br></br>
            <br></br>
            <ul style={{ display: "inline-block" }}>
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
          </div>
        </div>
      </div> */}

      <br></br>
      <div style={{ textAlign: 'center' }}> <span style={{ fontSize: '30px', fontWeight:800 }}>Reparatie van S5 accus en electronica/ECUs.</span>
      <div style={{ textAlign: 'center' }}> <span style={{ fontSize: '20px' }}>S5 inspectiekosten: 75€</span></div>
      </div>
      <br></br>

      <div className="flex-container">
        <div className="flex-child" style={{ margin: 10 }}>
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1717696919/AccuService/photo_2024-06-06_20-01-49_vgp6y0.jpg" />
        </div>
        <div className="flex-child" style={{ margin: 10 }}>
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1717696882/AccuService/photo_2024-06-06_20-00-19_libxdw.jpg" />
        </div>
        <div className="flex-child" style={{ margin: 10 }}>
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1717696881/AccuService/photo_2024-06-06_20-00-25_dgqhze.jpg" />
        </div>
      </div>


      <br></br>
    <br></br>
    <br></br>
    <br></br>
      <ElfsightWidget widgetID="aca30b87-7ac2-405d-9a6a-9248e4b3eb86" />
     
     <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div className="flex-container">
        <div className="flex-child" style={{ margin: 10 }}>
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1717696881/AccuService/photo_2024-06-06_20-00-35_nqupcn.jpg" />
        </div>
        <div className="flex-child" style={{ margin: 10 }}>
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1717696881/AccuService/photo_2024-06-06_20-00-31_fwyp0e.jpg" />
        </div>
        <div className="flex-child" style={{ margin: 10 }}>
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1717696881/AccuService/photo_2024-06-06_20-01-08_leetug.jpg" />
        </div>
      </div>


      {/* <br></br>
      <div className="flex-container">
        <div className="flex-child">
          <div style={{ textAlign: 'center' }}><span style={{ fontSize: '20px' }}>
            Enkele mogelijke fouten (vaak bestaat het probleem zonder een foutcode): </span>
            <br></br>
            <br></br>
            <ul style={{ display: "inline-block" }}>
              <li>2</li>
              <li>4</li>
              <li>44</li>

            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '20px' }}>Reparatiekosten bedragen gemiddeld € 185,-, afhankelijk van het probleem.</span>
        <br></br>
        <span style={{ fontSize: '20px' }}>4 maanden garantie</span>

      </div> */}


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* </div> */}
      {/* </div> */}


     

      {/*<div className="flex-container">
        <div className="flex-child">
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1709510923/AccuService/Accu_auxkso.png" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex-container">
        <div className="flex-child">
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1706889356/AccuService/vanmoof_bike.png" />
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex-container">
        <div className="flex-child">
          <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1709513341/AccuService/75bebaa8-a74f-42c6-87d2-6762536ec8b6.png" />
        </div>
      </div> */}


    </Layout>)
}

// setTimeout(DoStuffFunction,6000)

// function DoStuffFunction(){
//   document.getElementById("eapps-form-1").querySelectorAll('[eapps-link="buttonSubmit"]')[0].addEventListener('click', function () {
//      window.dataLayer.push({'event':'FormSubmit'});

//   }, { once: true })
// }


export default IndexPage
