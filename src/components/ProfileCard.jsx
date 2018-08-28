import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { EmailIcon, MusicIcon, GithubIcon, LocationIcon, LinkedInIcon } from '../Icons';
import '../style.css';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    avatar: {
        height: '30vh',
        width: '30vh',
        margin: '0 auto',
        marginTop: '5vh'
    },
    button: {
        margin: theme.spacing.unit,
    },
    card: {
        textAlign: 'center',
        maxWidth: 345,
        margin: '0 auto',
        marginTop: '2vw'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    typography: {
        color: 'gray'
    }
});

class ProfileCard extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className="ProfileCard">
            <Grid
                    container={true}
                    style={{
                        margin: 0,
                        width: '100%',
                    }} 
                    spacing={40}
                >
                <Card className={classes.card}>
                    <Avatar src={'https://avatars3.githubusercontent.com/u/21347724?s=460&v=4'} className={classes.avatar}/>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Jonas Erixon
                        </Typography>
                        <Typography gutterBottom variant="subheading" component="h2" className={classes.typography}>
                            <LocationIcon /> Kalmar, Sweden
                        </Typography>

                        <br />

                        <Typography component="p">
                            Web Developer, Music Producer
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.socialLinks}>
                        <a href='https://github.com/jonaserixon' title='Github' 
                            style={{
                                color: 'black'
                            }} 
                        >
                        <IconButton color='primary' aria-label="Github" className={classes.button}>
                            <GithubIcon />
                        </IconButton>
                        </a>
                        <a href='https://www.linkedin.com/in/jonas-erixon/' title='LinkedIn'
                            style={{
                                color: 'black'
                            }} 
                        >
                        <IconButton color='primary' aria-label="LinkedIn" className={classes.button}>
                            <LinkedInIcon />
                        </IconButton>
                            
                        </a>
                        <a href='https://soundcloud.com/a-himitsu' title='Music Project'
                            style={{
                                color: 'black'
                            }}
                        >
                        <IconButton color='primary' aria-label="Music Project" className={classes.button}>
                            <MusicIcon />
                        </IconButton>

                        </a>
                        <a href="mailto:x.jonaz@gmail.com" target="_top"  title='Email'
                            style={{
                                color: 'black'
                            }} 
                        >
                        <IconButton color='primary' aria-label="Email" className={classes.button}>
                            <EmailIcon />
                        </IconButton>
                        </a>
                    </CardActions>
                </Card>
                </Grid>
            </div>
        );
    };
}

ProfileCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);
