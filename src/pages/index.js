import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Widget } from '@typeform/embed-react'
import { ElfsightWidget } from 'react-elfsight-widget';
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ()  => {

  return (
  <Layout>
    <Seo title="Home" />
    <h1 style={{textAlign: 'center'}}>I fix and overhaul different batteries</h1>

    <ElfsightWidget  widgetID="0dfd0621-5b70-4f1b-91ca-55d5d4c6a32d" />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.8924297995!2d4.763878108967292!3d52.354582834316005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x394ede1b8ab2b23!2sAccuService.Eu!5e0!3m2!1sen!2snl!4v1638639217490!5m2!1sen!2snl" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy"></iframe>
<Widget id="ZmDSjBdT" style={{ width: '100%' , height:'400px'}} className="my-form" />
<br></br>
<ElfsightWidget  widgetID="457f2b53-ba81-483d-94d6-63f98744baaf" />
  </Layout>)
}

export default IndexPage
