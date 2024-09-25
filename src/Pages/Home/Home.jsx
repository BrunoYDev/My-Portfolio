import { useState } from 'react'
import { Container } from './style'
import LeftPanel from '../../Components/LeftHomePanel/LeftPanel'
import bgimg from "../../assets/bgimg.png"
import { BgImage } from './style'
import { DownloadCV } from './style'
import cv from '../../assets/brunogarciacv.pdf'

function Home() {

  return (
    <>
      <Container>
        <LeftPanel/>
        <figure>
          <a href={cv} download="My CV" target='_blank'>
          <DownloadCV>Download CV</DownloadCV>
          </a>
        <BgImage src={bgimg} alt='bg image'/>
        </figure>
      </Container>
    </>
  )
}

export default Home
