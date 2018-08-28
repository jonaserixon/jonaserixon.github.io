import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { CloseIcon } from '../Icons';
import IconButton from '@material-ui/core/IconButton';

function getModalStyle() {
    const top = 50;
    const left = 50;

    if (window.innerWidth > 1000) {
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
            overflowY: 'scroll'
        };
    }

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        width: '80%',
        height: '80%',
        overflowY: 'scroll'
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    keywords: {
        color: 'gray',
        fontSize: '80%',
        marginBottom: '2vw'
    },
    typography: {
        fontSize: '80%',
        marginBottom: '2vw'
    },
});
  
class ProjectModal extends React.Component {
    
    render() {
        const { classes, project} = this.props;
    
        return (
            <Modal
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
                open={this.props.isOpen}
                onClose={this.props.handleClose}
            >
            
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="headline" id="modal-title" style={{marginBottom: '2vw'}}>
                        {project.title}
                        <IconButton onClick={(e) => this.props.handleClose(e)} style={{color: 'black', position: 'absolute', top: '5px', right: '5px'}}>
                            <CloseIcon />
                        </IconButton>
                    </Typography>

                    <Typography component="p" id="project-modal-description" className={classes.typography}>
                        {project.fullDescription}
                    </Typography>

                    <a href={project.video} style={{marginBottom: '3vw'}}>
                        <img src={project.video} width={'100%'} alt='Project Video' />
                    </a>

                    <Typography component="p" className={classes.keywords} >
                        {project.keywords}
                    </Typography>

                    <div style={{marginBottom: '2vw'}}>
                    <a href={project.github} style={{marginRight: '1vw'}}>
                        <Button size="small" color="primary" variant="contained" className={classes.button}>
                            GITHUB
                        </Button>
                    </a>
                        {project.hasDemo ? 
                            (<a href={project.demoLink} >
                                <Button size="small" color="secondary" variant="contained" className={classes.button}>
                                    LIVE DEMO
                                </Button>
                            </a>)
                            :
                            null
                        }
                    </div>
                </div>
            </Modal>
        );
    }
}

ProjectModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectModal);
