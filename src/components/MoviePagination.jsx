import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const MoviePagination = ({ pages }) => {
    return (
        <Box display={'flex'} justifyContent={'center'} mt={2}>
            <Box mr={2}>
                <Typography variant="h5" component="h5" >
                    Page {pages}
                </Typography>
            </Box>
            <Box mr={2}>
                <Typography variant="h5" component="h5" >
                    <Link href={`/page/${pages - 1}`} color="inherit" underline="none">
                        Prev
                    </Link>
                </Typography>
            </Box>
            <Box mr={2}>
                <Typography variant="h5" component="h5" >
                    <Link href={`/page/${pages + 1}`} color="inherit" underline="none">
                        Next
                    </Link>
                </Typography>
            </Box>
        </Box>

    )
}

export default MoviePagination
