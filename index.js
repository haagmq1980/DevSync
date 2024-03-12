// index.js

// DevSync - A comprehensive platform aimed at fostering collaboration and enhancing productivity among developers globally.

// DevSync functionality
class DevSync {
    constructor() {
        this.projects = [];
        this.collaborators = {};
    }

    // Method to create a new project
    createProject(projectName, description) {
        const project = {
            name: projectName,
            description: description
        };
        this.projects.push(project);
    }

    // Method to add collaborators to a project
    addCollaborators(projectName, collaborators) {
        this.collaborators[projectName] = collaborators;
    }

    // Method to display all projects and their collaborators
    displayProjects() {
        console.log("Projects:");
        this.projects.forEach(project => {
            console.log(`- ${project.name}: ${project.description}`);
            if (this.collaborators[project.name]) {
                console.log(`  Collaborators: ${this.collaborators[project.name].join(", ")}`);
            }
        });
    }
}

// Example usage:
const devSyncApp = new DevSync();

// Creating projects
devSyncApp.createProject("DevSync Dashboard", "Develop a dashboard interface for the DevSync platform.");
devSyncApp.createProject("E-commerce Website", "Build an e-commerce website with user authentication and product listing features.");

// Adding collaborators to projects
devSyncApp.addCollaborators("DevSync Dashboard", ["developer1", "developer2", "designer"]);
devSyncApp.addCollaborators("E-commerce Website", ["developer2", "developer3"]);

// Displaying projects
devSyncApp.displayProjects();
