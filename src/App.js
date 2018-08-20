import React, { Component } from 'react'
import ParksList from './components/ParksList'
import ParkForm from './components/ParkForm'
import Park from './components/Park'
import ParkEdit from './components/ParkEdit.js'
import ParkModel from './models/Park'

class App extends Component {
  constructor () {
    super()
    this.state = {
      parks: [],
      selected: null,
      hideEdit: true
    }
  }

  componentDidMount () {
    this.resetParks()
  }

  handleSelectPark = (id) => {
    this.setState({ selected: id })
  }

  resetParks = async () => {
    const parks = await ParkModel.all()
    this.setState({ parks })
  }

  toggeleEdit = () => {
    this.setState({
      hideEdit: !this.state.hideEdit
    })
  }

  render() {
    return (
      <main>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
          <div className="container">
            <h1 className="display-4">Coaster Tycoon</h1>
          </div>
        </div>
        <section className="container">
          <div className="row">
            <div className="col-3">
              <ParksList
                parks={ this.state.parks }
                selected={ this.state.selected }
                selectPark={ this.handleSelectPark } />
            </div>

            <div className="col">
            { this.state.hideEdit &&
              <Park
                resetParks={ this.resetParks }
                key={this.state.selected}
                toggeleEdit={this.toggeleEdit}
                parkId={ this.state.selected } />
            }

            { !this.state.hideEdit &&
              <ParkEdit
                resetParks={ this.resetParks }
                key={this.state.selected}
                toggeleEdit={this.toggeleEdit}
                parkId={ this.state.selected } />}
            </div>

            <div className="col-4">
              <h2>Create a New Park</h2>
              <hr/>
              <ParkForm
                resetParks={ this.resetParks } />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App;
