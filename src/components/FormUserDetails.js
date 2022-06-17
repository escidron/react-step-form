import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      
    render() {
        const { values, handleChange } = this.props;
        return (
        
          <MuiThemeProvider>
          <React.Fragment>
         
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
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
export default FormUserDetails;