import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <>
            <ChakraProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </ChakraProvider>
        </>
    );
}

export default App;
