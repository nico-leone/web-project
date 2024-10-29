import {React, useState, useEffect} from "react";
import axios from 'axios'

const ViewProjects  = () => {
    const [projects, setProjects] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:9000/getProjects')
        .then(function (response) {
          setProjects(response.data)
        })
        .catch(function (error) {
          console.error("error fetching projects", error);
        })
        }, []);


    return (
        <div>
        <h1>Projects List</h1>
        {projects.length === 0 ? (
          <p>No projects available</p>
        ) : (
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h4>{project.project_name}</h4>
                <p><strong>Description:</strong> {project.description}</p>
                <p>
                  <strong>Manager:</strong> {project.manager_details?.firstName} {project.manager_details?.lastName}
                </p>
                <p>
                  <strong>Owner:</strong> {project.owner_details?.firstName} {project.manager_details?.lastName}
                </p>
                <p>
                  <strong>Team:</strong> {project.teams_details?.team_name}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );





};

export default ViewProjects;