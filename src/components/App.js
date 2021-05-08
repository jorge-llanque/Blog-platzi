import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from './Usuarios';


const Tareas = () => (
    <div>
        Tareas
    </div>
)

export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="margen">
                <Route exact path="/" component={Usuarios} />
                <Route exact path="/tareas" component={Tareas} />
            </div>
        </BrowserRouter>
    )
}
