import React, { Component } from 'react'
import ParksList from './components/ParksList'
import NewParkForm from './components/NewParkForm'
import Park from './components/Park'
import ParkModel from './models/Park'
window.BASE_URL = 'http://localhost:5000/api'

class App extends Component {
  constructor () {
    super()
    this.state = {
      parks: [],
      selected: {}
    }
  }

  componentDidMount = async () => {
    const parks = await ParkModel.all()
    this.setState({ parks })
  }

  handleSelectPark = async (id) => {
    const park = await ParkModel.find(id)
    this.setState({ selected: park })
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
              { this.state.selected.id && <Park park={{ ...this.state.selected }} /> }
            </div>
            <div className="col-4">
              <NewParkForm />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App;
