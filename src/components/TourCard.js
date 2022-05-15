
import 
{

    Container,
    Grid,
    Paper,
    Typography,
    Box,
    Rating,
    createTheme,
    ThemeProvider
} from "@mui/material"

import sea  from "../images/sea.jpeg"

import { AccessTime } from "@mui/icons-material"


const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 10,
                    }
                },
               { props: {
                    variant: "body3"
                },
                style: {
                    fontSize: 9,
                    color: "blue"
                  
                }
            }
            ]
        }
    }
})


const TourCard = () => {
    return <Grid item xs={3}>
        <ThemeProvider theme={theme}>
        <Paper elevation={3} >
        <img src={sea} alt="#" className="img" />
        <Box paddingX={5}>
        <Typography component="h2" variant="subtitle1">
         Hello world
        </Typography>
        <Box
        sx={{
            display: "flex", 
            alignItems: "center"
            
        }}
        >
            <AccessTime sx={{width: "12px"}} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
                5 hours
            </Typography>
            
            


        </Box >

        <Box sx={{
            display: "flex", 
            alignItems: "center"
            
        }} mt={3}>
        <Rating name="read-only" value={1.5} readOnly precision={0.5} size="small"/>
        <Typography variant="body2" component="p" marginLeft={0.5}>
                4.5
            </Typography>
        <Typography variant="body3" component="p" marginLeft={1.5}>
                (55 reviews)
            </Typography>
     
        </Box>
        <Typography variant="h6" component="h3" marginLeft={1.5}>
               From C $149
            </Typography>
        </Box>
        </Paper>
        </ThemeProvider>
    </Grid>
}

export default TourCard;