import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import ListItemText from '@mui/material/ListItemText';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };
      
    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio }
          } = this.props;
        return (
        
          <MuiThemeProvider>
          <React.Fragment>
         
            
             <AppBar title="Confirm User Data" />
            <List>
            <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
                
            </List>
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
export default Confirm;