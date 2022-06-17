import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      
    render() {
        
        return (
            
           <MuiThemeProvider>
           <React.Fragment>
         
             <AppBar title="Succes" />
             <h1>Thank you for your Submission</h1>
             <p>You will get an email soon</p>
             

           
          
         </React.Fragment>
       </MuiThemeProvider>
                
        );
  }
}

export default Success;