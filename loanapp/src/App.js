import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./components/home"
import Header from "./components/header"
import Personaldetails from "./pages/personaldetails"
import Bussinessdetail from "./pages/bussinessdetails"
import Applicationdetails from "./pages/applicationdetails"
import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function App() {
  return (
    <>
    <CssBaseline />
    <Container component={Box} p={4}>
      <Paper component={Box} p={3}>
        <LinearStepper />
      </Paper>
    </Container>
  </>
  );
}

export default App;
