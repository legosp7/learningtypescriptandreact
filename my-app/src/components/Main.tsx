import { useNavigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import '../App.css';
import Button from '@mui/material/Button'

function Main() {
    const navigate = useNavigate();

    const goToSecondsComp = () => {
        navigate('/second');
    };

    const goToFirstComp = () => {
        navigate('/first');
    };

    return (
        <div className="App">
            <CssBaseline />
            <header className="App-header">
                <p>This page is under construction! Check back later!</p>
                <p><Button variant="contained" onClick={goToSecondsComp}>Go to Second</Button></p>
                <Button variant="contained" onClick={goToFirstComp}>Go to Wei!</Button>
            </header>
        </div>
    );

}

export default Main;