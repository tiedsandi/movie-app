import { Box } from "@mui/material"

const CategoryButton = ({ name, active }) => {
    return (
        <Box component={'a'} href="#" className={active = active ? 'active' : ''} sx={{
            fontSize: '1.5rem',
            marginRight: '1rem',
            color: '#CDCDCD',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: '#EB507F',
                borderRadius: '1rem',
                color: '#fff',
                padding: '0 2rem',
            },
            '&.active': {
                backgroundColor: '#EB507F',
                borderRadius: '1rem',
                color: '#fff',
                padding: '0 2rem',
            }
        }}>
            {name}
        </Box>
    )
}

export default CategoryButton
