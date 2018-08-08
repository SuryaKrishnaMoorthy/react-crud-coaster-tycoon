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
      selected: null
    }
  }

  componentDidMount () {
    this.resetParks()
  }

  handleSelectPark = async (id) => {
    this.setState({ selected: id })
  }

  resetParks = async () => {
    const parks = await ParkModel.all()
    this.setState({ parks, selected: null })
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
              {
                this.state.selected &&
                <Park
                  key={ this.state.selected }
                  parkId={ this.state.selected }
                  resetParks= { this.resetParks }
                  />
              }
            </div>
            <div className="col-4">
              <h2>Create a New Park</h2>
              <hr/>
              <NewParkForm />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App;
