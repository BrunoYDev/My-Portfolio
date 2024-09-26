import { useState } from 'react'
import { Container } from './style'
import MoreCardSlider from '../../Components/MoreCardSlider/MoreCardSlider'

function More() {

  const artProjects = [

    {
      title: 'Minecraft',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Minecraft-creeper-face.jpg/220px-Minecraft-creeper-face.jpg'
    },
    

  ];



  return (
    <>
      <Container>
        <MoreCardSlider title="Art" items={artProjects}/>

        <MoreCardSlider title="Other Projects" items={artProjects}/>
      </Container>
    </>
  )
}

export default More
