import React from 'react';
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import Article from './Article';


function Articles() {
  return (
    <Box marginTop={{ xs: 10, md: 20 }}>
    <Grid container display={'flex'} justifyContent={'center'}  gap={16}>
        {info.articles.map((article, index) => (
           <Grid item xs={12} md={6} key={index}>
                <Article 
                    image={article.image} 
                    link={article.link}
                    title={article.title}
                    description={article.description}
                    readTime={article.readTime}
                />
           </Grid>
        ))}
    </Grid>
</Box>
  )
}

export default Articles