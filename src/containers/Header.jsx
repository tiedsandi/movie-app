import { Box, Input, Link } from "@mui/material"

const Header = () => {
    return (
        <Box component={'header'} width={"100%"} height={"4rem"} display={'flex'} px={12} pt={2} justifyContent={'space-between'} alignItems={'center'}>
            <Box component={"logo"} display={'flex'} alignItems={'center'} overflow={'hidden'} >
                <Box
                    component="img"
                    sx={{
                        height: 60,
                        maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                        marginRight: { xs: 0, md: '1rem' },
                    }}
                    alt="The house from the offer."
                    src="./images/mainlogo.png"
                />
                <img src="./images/MilanTV.png" alt="logo" height={30} />
            </Box>
            <Input placeholder="Search Movie" disableUnderline sx={{
                border: '1px solid #c4c4c4',
                borderRadius: '0.5rem',
                width: '50%',
                height: '100%',
                padding: '0.5rem',
            }} />
            <Link href="#" sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#000',
                textDecoration: 'none',
                '&:hover': {
                    color: '#000',
                    textDecoration: 'underline',
                }
            }}>
                Sign In
            </Link>
        </Box>
    )
}

export default Header
