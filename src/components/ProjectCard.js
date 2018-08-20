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
import Grid from '@material-ui/core/Grid';
import {content} from '../content';

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
        const { classes } = this.props;
        let projects = [];

        for (let i in content) {
            let project = content[i];
            const keywords = project.keywords.map((keyword) => keyword + '. ');

            projects.push(
                <Grid key={i} item sm={4}>
                    <Card key={i} className={classes.card}>
                        <img src={project.thumbnail} className={classes.thumbnail}/>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2" className={classes.typographyHeadline}>{project.title}</Typography>
                            <br />
                            <Typography component="p">{project.description}</Typography>
                            <br />
                            <Typography component="p" className={classes.typography} >{keywords}</Typography>
                        </CardContent>
                        <CardActions>
                            <a href={project.github} className={classes.projectLinks} >
                                <Button size="small">
                                    <GithubIcon />
                                    Github
                                </Button>
                            </a>
                            {project.hasDemo ? 
                                <a href={project.demoLink} className={classes.projectLinks} >
                                    <Button size="small">
                                        <GithubIcon />
                                        Live Demo
                                    </Button>
                                </a>
                                :
                                null
                            }
                        </CardActions>
                    </Card>
                </Grid>
            )
        }

        return (
            <div>
                <Grid 
                    container={true}
                    style={{
                        margin: 0,
                        width: '100%',
                    }} 
                    spacing={40}
                >

                    {projects}
                </Grid>
            </div>
        );
    };
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
