import React, { Component } from 'react'

export default class Guardar extends Component {
    render() {
        return (
            <div>
                <h1>
                    Guardar Tarea
                </h1>
                Usuario id:
                <input type='number' />
                <br />
                <br />
                Titulo:
                <input />
                <br />
                <br />
                <button>
                    Guardar
                </button>
            </div>
        )
    }
}
