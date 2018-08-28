import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import {content} from '../content';
import Grid from '@material-ui/core/Grid';

class Projects extends Component {

    render() {
        let projects = [];

        for (let i in content) {
            let project = content[i];
            const keywords = project.keywords.map((keyword) => keyword + '. ');

            projects.push(
                <ProjectCard
                    onClick={this.handleOpen}
                    key={i}
                    demoLink={project.demoLink} 
                    hasDemo={project.hasDemo} 
                    description={project.description} 
                    github={project.github} 
                    keywords={keywords} 
                    thumbnail={project.thumbnail} 
                    title={project.title}
                    video={project.video}
                />
            );
        }


        return (
            <div className="Projects">
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

export default Projects;
