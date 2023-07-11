import { Box, Heading, Image, Container,Stack,Text } from '@chakra-ui/react'
import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '2xl',
  };
  



const Home = () => {
  return (
    <Box >
        <MyCarousel />

        <Container  
        maxW={'container.xl'}
        minH={'100vh'} 
        p={'16'}>
        
        <Heading textTransform={'uppercase'} 
        py={'2'}
        m={'auto'}
        w={'fit-content'}
        borderBottom={'2px solid'}>
            Services
            </Heading>
        <Stack h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}
        >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />
            <Text letterSpacing={'widest'} lineHeight={'150%'} p={['4','16']}  textAlign={'center'} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iure tempore explicabo accusantium quaerat,
                 rerum expedita hic optio laboriosam quam exercitationem voluptatem possimus? Omnis minima aut corrupti quos
                  esse, ad earum aspernatur id. Labore officiis perferendis nesciunt rerum eius accusantium nemo explicabo 
                  eveniet, ad suscipit odio quis quisquam dolor incidunt fugit. Modi voluptates dignissimos sit nisi labore
                   asperiores similique incidunt aliquam quibusdam ex odio repudiandae, neque eligendi culpa expedita 
                   officia impedit voluptate, rem, consectetur assumenda ipsum beatae? Neque cupiditate quae non qui 
                   laboriosam voluptatem tempora perferendis odio praesentium? Qui numquam voluptatem ut cupiditate unde aut
                    recusandae ipsa hic vero consequatur.
            </Text>

        </Stack>

        </Container>

    </Box>
  )
};

const MyCarousel =() =>{
    return(
    <Carousel 
    autoPlay
    infiniteLoop
    // interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >

    <Box w='full' h={'100vh'}>
    <Image src={img1} /> 
     <Heading  bg={'blackAlpha.600'} color={'white'}{...headingOptions}>
        Watch The Future
        </Heading>

    </Box>

    <Box w='full' h={'100vh'}>
    <Image src={img2} /> 
     <Heading bg={'blackAlpha.600'} color={'white'}{...headingOptions}>
        Future Is Gaming
        </Heading>

    </Box>
    <Box w='full' h={'100vh'}>
    <Image src={img3} /> 
     <Heading bg={'blackAlpha.600'} color={'white'}{...headingOptions}>
       Gaming On Cansole
        </Heading>

    </Box>
    <Box w='full' h={'100vh'}>
    <Image src={img4} /> 
     <Heading bg={'blackAlpha.600'} color={'white'}{...headingOptions}>
        Night Life 
        </Heading>

    </Box>


    </Carousel>
    )
};

export default Home;