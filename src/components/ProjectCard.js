import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GithubIcon } from '../Icons';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    thumbnail: {
        height: '30vh',
        width: '100%',
        margin: '0 auto',
    },
    button: {
        textTransform: 'none'
    },
    card: {
        textAlign: 'center',
        marginTop: '2vw',
        height: '490px',
        position: 'relative',
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    typography: {
        color: 'gray'
    },
    keywords: {
        float: 'left',
        color: 'gray'
    },
    projectLinks: {
        textDecoration: 'none',
        color: 'solid black',
    }
});

class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, demoLink, hasDemo, description, github, keywords, thumbnail, title } = this.props;
        return (
            <Grid item sm={4}>
                <Card className={classes.card}>
                    <img src={thumbnail} className={classes.thumbnail}/>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2" className={classes.typographyHeadline}>{title}</Typography>
                        <br />
                        <Typography component="p">{description}</Typography>
                        <br />
                        <Typography component="p" className={classes.typography} >{keywords}</Typography>
                    </CardContent>
                    <CardActions>
                        <a href={github} className={classes.projectLinks} >
                            <Button size="small">
                                <GithubIcon />
                                Github
                            </Button>
                        </a>
                        {hasDemo ? 
                            (<a href={demoLink} className={classes.projectLinks} >
                                <Button size="small">
                                    <GithubIcon />
                                    Live Demo
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
