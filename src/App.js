import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = { notas: novoArrayNotas }

    this.setState(novoEstado)

    // console.log(`Uma nova nota foi criada: ${titulo} ${texto}`)
  }
  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
    console.log("DELETE")
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.criarNota.bind(this)}
        />
        <ListaDeNotas
          notas={this.state.notas}
          apagarNota={this.deletarNota.bind(this)}
        />
      </section>
    )
  }
}
//new ListaDeNotas({notas: this.notas})
export default App
