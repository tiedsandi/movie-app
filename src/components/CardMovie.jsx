import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CardMovie = ({ movie }) => {
    return (
        <Link href={`/overview/${movie.id}`} color="inherit" underline="none">
            <Box mb={2} mr={2} >
                {/* image */}
                <Box overflow={'hidden'} width={405} height={600}>
                    <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt="poster" className='poster_img' />
                </Box>
                <Box width={405}>
                    <Typography variant="h5" component="h5" noWrap >
                        {movie.title}
                    </Typography>
                    <Typography variant="body1" component="p" >
                        {movie.genre_ids[0]}
                    </Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default CardMovie
