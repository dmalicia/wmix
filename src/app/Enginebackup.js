import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 50,
    margin: 0,

  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Engine extends Component {
    get handleTouchTap() {
        return this._handleTouchTap;
    }

    set handleTouchTap(value) {
        this._handleTouchTap = value;
    }
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  _handleTouchTap = () => {
  
      console.log('name:'+ this.refs.name.input.value + 'color:'+ this.refs.color.input.value + 'catsordogs:'+ this.refs.cds.input.value );
        this.setState({
          open: true,
    });
  }

  render() {
   // const TextFieldExampleSimple = () => (
    const standardActions = (
        <div>

        </div>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>dmalicia</h1>
          <h2></h2>

          <TextField
              hintText="Name" ref='name'
          /><br />
          <TextField
              hintText="Favorite Color" ref='color'
          /><br />
          <TextField
              hintText="Cats or Dogs" ref='cds'
          /><br />
            <FlatButton
              label="Save"
              primary={true}
              onTouchTap={this._handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Engine;
