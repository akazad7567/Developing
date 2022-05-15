import logo from './logo.svg';
import './App.css';
import TourCard from './components/TourCard';
import 
{

    Container,
    Grid,
    Paper
} from "@mui/material"

function App() {
  return (
    <div className="App">
     <Container>
       <Grid container spacing={1}>
         <TourCard/>
         <TourCard/>
         <TourCard/>
         <TourCard/>
         <TourCard/>
         <TourCard/>

       </Grid>
     </Container>
    </div>
  );
}

export default App;
