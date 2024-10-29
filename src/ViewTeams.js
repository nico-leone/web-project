import {React, useState, useEffect} from "react";
import axios from 'axios'

const ViewTeams  = () => {
    const [teams, setTeams] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:9000/getTeams')
        .then(function (response) {
          setTeams(response.data)
        })
        .catch(function (error) {
          console.error("error fetching projects", error);
        })
        }, []);


    return (
        <div>
        <h1>Teams List</h1>
        {teams.length === 0 ? (
          <p>No projects available</p>
        ) : (
          <ul>
            {teams.map((team, index) => (
              <li key={index}>
                <h4>{team.team_name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
    );





};

export default ViewTeams;