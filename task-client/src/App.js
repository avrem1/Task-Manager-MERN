import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/Edit";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <>
            <ChakraProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/edit/:id" element={<Edit />} />
                    </Routes>
                </Router>
            </ChakraProvider>
        </>
    );
}

export default App;
