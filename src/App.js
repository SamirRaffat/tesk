import './App.css';
import { Container,} from './Components/index';
import { Header , Hero, Footer } from './sections/index';
const App = () =>{
    return(
        <>
        <Header/>
        <Container>
            <Hero/>
        </Container>
        <Footer/>
        </>

    )
}

export default App