import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };
      
    render() {
        const { values, handleChange } = this.props;
        return (
        
          <MuiThemeProvider>
          <React.Fragment>
         
            
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            
            <br />
            <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />

            <RaisedButton 
            label="back"
            primary={false}
            style={styles.button}
            onClick={this.back}
            />
          
        </React.Fragment>
      </MuiThemeProvider>
                
        );
  }
}
const styles = {
    button:{
        margin:15
    }
}
export default FormPersonalDetails;