import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';


class BandsContainer extends Component {

  render() {
    let bands = this.props.bands.map(band => <li key={band.id}>{band.name}</li>)
    return(
      <div>
        BandsContainer
        <BandInput
          addBand={this.props.addBand}
        />
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({ type: "ADD_BAND", payload: formData }),
  };
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
