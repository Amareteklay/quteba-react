import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";
import Banner from "./components/Banner";
import qbrand from './qbrand.png';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        Menu / >
        <
        p >
        Welcome to Quteba. <
        /p>  <
        Banner / >
        <
        Footer / >
        <
        /
        header > <
        /div>
    );
}

export default App;