import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CardMovie = () => {
    return (
        <Box mb={2} mr={2} >
            {/* image */}
            <Box overflow={'hidden'}>
                <img src="./images/saintseiya 1.png" alt="poster" />
            </Box>
            <Box >
                <Typography variant="h5" component="h5" >
                    Saint Seiya
                </Typography>
                <Typography variant="body1" component="p" >
                    Anime
                </Typography>
            </Box>
        </Box>
    )
}

export default CardMovie
