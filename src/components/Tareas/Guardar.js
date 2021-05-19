import React, { Component } from 'react'
import { connect } from "react-redux";
import * as tareasActions from "../../actions/tareasActions";
import Fatal from "../../General/Fatal";
import Spinner from "../../General/Spinner";
import { Redirect } from "react-router-dom";


class Guardar extends Component {
    cambioUsuarioId = (event) => {
        this.props.cambioUsuarioId(event.target.value);
    };
    cambioTitulo = (event) => {
        this.props.cambioTitulo(event.target.value);
    };

    guardar = () => {
        const {usuario_id, titulo, agregar} = this.props;
        const nueva_tarea = {
            userId: usuario_id,
            title: titulo,
            completed: false
        };
        agregar(nueva_tarea)
    }
    deshabilitar = () => {
        const {usuario_id, titulo, cargando} = this.props;

        if(cargando){
            return true;
        }
        if(!usuario_id || !titulo){
            return true;
        }
        return false;
    }
    mostrarAction = () => {
        const { error, cargando} = this.props;
        if(cargando){
            return <Spinner />;
        }
        if(error){
            return <Fatal message={error} />;
        }
    }

    render() {
        return (
            <div>
                {
                    (this.props.regresar) ? <Redirect to="/tareas" /> : ''
                }
                <h1>
                    Guardar Tarea
                </h1>
                Usuario id:
                <input 
                    type='number' 
                    value={this.props.usuario_id}
                    onChange={this.cambioUsuarioId}
                />
                <br />
                <br />
                Titulo:
                <input 
                    value={this.props.titulo}
                    onChange={this.cambioTitulo}

                />
                <br />
                <br />
                <button
                    onClick={this.guardar}
                    disabled={this.deshabilitar()}
                >
                    Guardar
                </button>
                {this.mostrarAction()}
            </div>
        )
    }
}

const mapStateToProps = ({tareasReducer}) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar)