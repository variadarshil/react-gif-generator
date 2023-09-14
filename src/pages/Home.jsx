import React, { useEffect, useState } from 'react';
import CardUI from '../Components/CardUI'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home(props) {
    const [memes, setMemes] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://api.imgflip.com/get_memes')
            return res.json()
        };
        getData().then(memeList => {
            const { data: { memes }} = memeList;
            memes.length > 0 ? setMemes(memes) : [];
        })
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {memes && memes.length > 0 && memes.map((meme) => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={meme.id}>
                            <CardUI key={meme.id} meme={meme}></CardUI>
                        </Grid>)
                })}
           </Grid>
        </Box>
    );
}

export default Home;