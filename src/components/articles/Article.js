import React from 'react'
import IconLink from "../portfolio/IconLink";
import {Box} from "@mui/material";

export default function Article(props) {
    const {image, link, readTime, title,description} = props;
    return (
       <Box display={'flex'} flexDirection={{ xs: "column", sm: "row" }} justifyContent={'center'} alignItems={'center'}>
          <Box width={'600px'} component={'img'} src={image} alt={'mockup'}/>
          
          <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'} minWidth={'50%'}
               alignItems={'center'} fontSize={'1rem'} py={'1.25rem'}>
                <h1 style={{fontSize: '2rem'}}>{title}</h1>
 
                <Box mx={3}>
                   
                   <Box component={'text'}>{description}</Box><br /> <br />
                   <Box component={'text'}>{readTime}</Box><br /> <br />
                </Box>
                
             {/* <Box p={1} border={'2px solid black'} borderRadius={'12px'}>
                <IconLink link={live} title={'Live Demo '} icon={'fa fa-safari'}/>
             </Box>
             <Box p={1} border={'2px solid black'} borderRadius={'12px'}>
                <IconLink link={source} title={'Source Code '} icon={'fa fa-code'}/>
             </Box> */}
          </Box>
       </Box>
    );
}
