import {React, useState} from "react";
import axios from 'axios'

const CreateTeam  = () => {
    const [team_name, setTeamName] = useState('');

    const handleCreateTeam = (event, team_name) => {
        event.preventDefault()
        axios.post('http://localhost:9000/createTeam', { team_name })
            .then((res) => {
                if (res.data) {
                    alert('Team creation successful')
                }       
            })
            .catch((err) => alert('Error creating team!'))
    }


    return (
        <form>
        <label>Team  Name: </label>
        <input type = "text"
        value = {team_name}
        onChange={(e) => setTeamName(e.target.value)}
        ></input>
        <br></br>
        <button type="button" onClick={(event) => handleCreateTeam(event, team_name)}>
        Create Team
        </button>
        <br></br>
        </form>
    );





};

export default CreateTeam;