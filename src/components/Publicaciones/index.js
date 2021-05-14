import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as usuariosActions from "../../actions/usuariosActions";


class Publicaciones extends Component {

    componentDidMount(){
        if(!this.props.usuarios.length){
            this.props.traerTodos();
        }
    }


    render(){
        return (
            <div>
                {this.props.match.params.key}            
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Publicaciones);