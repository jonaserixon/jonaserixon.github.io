import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

  
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});
  
  class ProjectModal extends React.Component {
    
    render() {
        const { classes, project} = this.props;
    
        return (
            <div className='ProjectModal'>
                <Modal
                    aria-labelledby="project-modal-title"
                    aria-describedby="project-modal-description"
                    open={this.props.isOpen}
                    onClose={this.props.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="title" id="modal-title">
                        {project.title}
                    </Typography>
                    <Typography id="project-modal-description">
                        {project.description}
                        <img src={project.video} width={'100%'} height={'100%'}/>

                    </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
  }

ProjectModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectModal);
