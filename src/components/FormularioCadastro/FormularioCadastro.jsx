import React, { Component } from 'react'
import "./style.css"

class FormularioCadastro extends Component {
   constructor(props) {
      super(props)
      this.titulo = ""
      this.texto = ""
   }
   _handlerMundacaTitulo(evento) {
      evento.stopPropagation()
      this.titulo = evento.target.value
      // console.log("titulo:", this.titulo)
   }
   _handlerMundacaTexto(evento) {
      evento.stopPropagation()
      this.texto = evento.target.value
      // console.log("texto:", this.texto)
   }
   _criarNota(evento) {
      evento.preventDefault()
      evento.stopPropagation()
      this.props.criarNota(this.titulo, this.texto)
   }

   render() {
      return (
         <form className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}
         >
            <input
               type="text"
               placeholder="Título"
               className="form-cadastro_input"
               onChange={this._handlerMundacaTitulo.bind(this)}
            />
            <textarea
               rows={15}
               placeholder="Escreva sua nota..."
               className="form-cadastro_input"
               onChange={this._handlerMundacaTexto.bind(this)}//this do Javas cript é dinâmico
            />
            <button className="form-cadastro_input form-cadastro_submit">
               Criar Nota
            </button>
         </form>
      )
   }
}
export default FormularioCadastro