import { Box, Typography, Stack, Link } from "@mui/material"

const Footer = () => {
    return (
        <Box px={12} pt={2} bgcolor={'black'} >
            <Box display={'flex'} justifyContent={'space-between'} my={2} sx={{
                borderBottom: '1px solid #c4c4c4',
            }}>
                <Box alignItems={'center'} overflow={'hidden'} width={'30%'} mb={2}>
                    <Box display={'flex'} alignItems={'center'}>
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
                        <Typography variant="h2" component="h6" color={'white'} fontWeight={'bold'}>
                            Milan TV
                        </Typography>
                    </Box>
                    <Typography variant="caption" component="p" color={'white'} width={'65%'} mt={2}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard</Typography>
                </Box>
                <Box alignItems={'center'} overflow={'hidden'} >
                    <Stack spacing={1}>
                        <Typography variant="body1" component='p' color={'white'}>Tentang Kami</Typography>
                        <Typography variant="body1" component='p' color={'white'}>Blog</Typography>
                        <Typography variant="body1" component='p' color={'white'}>Layanan</Typography>
                        <Typography variant="body1" component='p' color={'white'}>Karir</Typography>
                        <Typography variant="body1" component='p' color={'white'}>Pusat Media</Typography>
                    </Stack>
                </Box>
                <Box alignItems={'center'} overflow={'hidden'} >
                    <Typography variant="h5" component='p' color={'white'}>
                        Download
                    </Typography>
                    <Stack spacing={0} direction={'row'} p={0}>
                        <Link href="#" >
                            <img src="./images/google play 1.png" alt="googleplay" width={'150px'} />
                        </Link>
                        <Link href="#">
                            <Box component={'img'} src="./images/apple store 1.png" alt="appstore" width={'150px'} />
                        </Link>
                    </Stack>
                    <Typography variant="h5" component='p' color={'white'}>
                        Social Media
                    </Typography>
                    <Stack spacing={2} direction={'row'} p={0}>
                        <Link href="#" >
                            <img src="./images/face.png" alt="facebook" width={'35px'} />
                        </Link>
                        <Link href="#">
                            <img src="./images/pnts.png" alt="pinterest" width={'42px'} />
                        </Link>
                        <Link href="#">
                            <img src="./images/ig.png" alt="instagram" width={'40px'} />
                        </Link>
                    </Stack>
                </Box>
            </Box>
            <Box mx={12} mt={2} bgcolor={'black'} textAlign={'center'} pb={2}>
                <Typography variant="h6" component='p' color={'white'}>
                    Copyright © 2000-202 MilanTV.  All Rights Reserved
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
