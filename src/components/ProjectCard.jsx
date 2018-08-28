import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProjectModal from './ProjectModal';

const styles = theme => ({
    thumbnail: {
        height: '30vh',
        width: '100%',
        margin: '0 auto',
    },
    button: {
    },
    card: {
        textAlign: 'center',
        marginTop: '2vw',
        minHeight: '30vw',
        position: 'relative',
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    typography: {
        color: 'gray'
    },
    typographyDescription: {
        fontSize: '13px'
    },
    typographyHeadline: {
        cursor: 'pointer'
    },
    keywords: {
        color: 'gray',
        fontSize: '13px'
    },
    projectLinks: {
        textDecoration: 'none',
        color: 'solid black'
    }
});

class ProjectCard extends Component {
    state = {
        isOpen: false,
    };
  
    handleOpen = () => {
        this.setState({ isOpen: true });
    };
  
    handleClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { classes, demoLink, hasDemo, shortDescription, fullDescription, github, keywords, thumbnail, title } = this.props;
        return (

            <Grid item sm={4}>
            <ProjectModal isOpen={this.state.isOpen} handleClose={this.handleClose} project={this.props} /> 
                <Card className={classes.card}  >
                    <img src={thumbnail} className={classes.thumbnail} id='project-image' alt='Project Thumbnail' onClick={this.handleOpen} style={{cursor: 'pointer'}}/>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2" className={classes.typographyHeadline} onClick={this.handleOpen}>{title}</Typography>
                        <br />
                        <Typography component="p" className={classes.typographyDescription}>{shortDescription}</Typography>
                        <br />
                        <Typography component="p" className={classes.keywords} >{keywords}</Typography>
                    </CardContent>
                    <CardActions>
                        <a href={github} className={classes.projectLinks} >
                            <Button size="small" color="primary" variant="contained" className={classes.button}>
                                GITHUB
                            </Button>
                        </a>
                        {hasDemo ? 
                            (<a href={demoLink} className={classes.projectLinks} >
                                <Button size="small" color="secondary" variant="contained" className={classes.button}>
                                    LIVE DEMO
                                </Button>
                            </a>)
                            :
                            null
                        }
                    </CardActions>
                </Card>
            </Grid>
        );
    };
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
