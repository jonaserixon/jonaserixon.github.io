import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProfileCard from './components/ProfileCard';
import Projects from './components/Projects';
import Footer from './components/Footer';

const styles = {
    center: {
        textAlign: 'center'
    }
};

class App extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <ProfileCard />
                <h1 className={classes.center}> - </h1>
                <h1 id={'projects-header'}>Web Dev Projects</h1>
                <Projects />
                <Footer />
            </div>
        );
    };
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
