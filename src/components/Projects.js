import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { EmailIcon, MusicIcon, GithubIcon, LocationIcon } from '../Icons';
import ProjectCard from './ProjectCard';

const styles = {
    center: {
        textAlign: 'center'
    },
    headerCenter: {
        textAlign: 'center',
    }
};

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="Projects">
                <ProjectCard />
            </div>
        );
    };
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
