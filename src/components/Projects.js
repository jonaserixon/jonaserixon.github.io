import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import {content} from '../content';
import Grid from '@material-ui/core/Grid';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let projects = [];

        for (let i in content) {
            let project = content[i];
            const keywords = project.keywords.map((keyword) => keyword + '. ');

            projects.push(
                <ProjectCard 
                    demoLink={project.demoLink} 
                    hasDemo={project.hasDemo} 
                    description={project.description} 
                    github={project.github} 
                    keywords={keywords} 
                    thumbnail={project.thumbnail} 
                    title={project.title} 
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
