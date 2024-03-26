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

      <div className="flex-container">
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
          </div>

          <br></br>
          <span style={{ fontSize: '20px' }}>Nu repareren we ook de elektronica van VanMoof - cartridge, e-shifter, kicklock, kabelboom en oplaadpoort.</span>

          <br></br>

          <div className="flex-container">
            <div className="flex-child" style={{ margin: 10 }}>
              <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1711479570/photo_2024-03-26_19-58-09_liklpd.jpg" />
            </div>
            <div className="flex-child" style={{ margin: 10 }}>
              <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1711479570/photo_2024-03-25_01-56-46_mjiuv9.jpg" />
            </div>
            <div className="flex-child" style={{ margin: 10 }}>
              <img src="https://res.cloudinary.com/dge6vq2wh/image/upload/v1711483165/photo_2024-03-26_20-56-35_zs6jxa.jpg" />
            </div>
          </div>


          <br></br>
          <div className="flex-container">
            <div className="flex-child">
              <div style={{ textAlign: 'center' }}><span style={{ fontSize: '20px' }}>
                Enkele mogelijke fouten (vaak bestaat het probleem zonder een fout): </span>
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
            <span style={{ fontSize: '20px' }}>Reparatiekosten bedragen gemiddeld € 150,-, afhankelijk van het probleem.</span>

         </div>
       
        
        <br></br>
        <br></br>
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
