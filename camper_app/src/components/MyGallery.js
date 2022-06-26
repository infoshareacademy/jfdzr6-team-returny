import ImageGallery from 'react-image-gallery';
import React from 'react';
import './MyGallery.css'
import styled from 'styled-components';

const ContenerDiv = styled.div`
  width: 80%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 741px) {
    display: none;
  }
`

class MyGallery extends React.Component {

  
 
  render() {
    const zdj= this.props.camper.images;
    const newArr=zdj.map(el=>{
      return {
        original: `${el}`,
        thumbnail: `${el}`,
      }
    })
   
    return (

    <ContenerDiv>
    <ImageGallery items={newArr} autoPlay={true}
          showThumbnails={true}
          showNav={false}
          showPlayButton={false}
          useBrowserFullscreen={false}
          slideInterval={5000}/>
    </ContenerDiv>


    )
  }
}
export default MyGallery;