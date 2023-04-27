import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={{ xs: "column", sm: "row" }} justifyContent={'center'} alignItems={'center'}>
         <Box width={'600px'} component={'img'} src={image} alt={'mockup'}/>
         
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1rem'} py={'1.25rem'}>
               <h1 style={{fontSize: '2rem'}}>{title}</h1>
            <Box p={1} border={'2px solid black'} borderRadius={'12px'}>
               <IconLink link={live} title={'Live Demo '} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'12px'}>
               <IconLink link={source} title={'Source Code '} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;