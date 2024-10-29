import {React, useState, useEffect} from "react";
import axios from 'axios'

const CreateProject  = () => {
    const [proj_name, setProjectName] = useState('');
    const [proj_desc, setProjectDescription] = useState('');
    const [prod_owner_id, setProductOwner] = useState('');
    const [mgr_id, setManager] = useState('');
    const [team_id, setTeam] = useState('');

    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState([])

    const handleCreateProject = (event, proj_name, proj_desc, prod_owner_id, mgr_id, team_id) => {
        event.preventDefault()
        axios.post('http://localhost:9000/createProject', { proj_name, proj_desc, prod_owner_id, mgr_id, team_id })
            .catch((err) => alert('Error in Creating project'))
    }

    useEffect(() => {
        axios.get('http://localhost:9000/getUsers')
        .then(function (response) {
          setUsers(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        }, []);

    useEffect(() => {
        axios.get('http://localhost:9000/getTeams')
        .then(function (response) {
          setTeams(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        }, []);


    return (
        <form>
        <label>Project Name: </label>
        <input type = "text"
        value = {proj_name}
        onChange={(e) => setProjectName(e.target.value)}
        ></input>
        <br></br>
        <label>project description: </label>
        <textarea rows="5" cols = "33"
        value = {proj_desc}
        onChange={(e) => setProjectDescription(e.target.value)}
        >
        Enter your project description
        </textarea>
        <br></br>
        <label>Product Owner: </label>
        <select onChange={(e) => setProductOwner(e.target.value)} value={prod_owner_id}>
            <option value="">Select Product Owner</option>
            {users.map((user, index) => {
             return <option key={index} value={user._id}>   
                {user.firstName} {user.lastName}
            </option>
            })
            }
        </select>
        <br></br>
        <label>Manager: </label>
        <select onChange={(e) => setManager(e.target.value)} value={mgr_id}>
            <option value="">Select Manager</option>
            {users.map((user, index) => {
             return <option key={index} value={user._id}>   
                {user.firstName} {user.lastName}
            </option>
            })
            }
        </select>
        <br></br>
        <label>Team: </label>
        <select onChange={(e) => setTeam(e.target.value)} value={team_id}>
            <option value="">Select Team</option>
            {teams.map((team, index) => {
             return <option key={index} value={team._id}>   
                {team.team_name}
            </option>
            })
            }
        </select>
        <br></br>
        <button type="button" onClick={(event) => handleCreateProject(event, proj_name, proj_desc, prod_owner_id, mgr_id, team_id)}>
        Create Project
        </button>
        <br></br>
        <a href="/ViewProjects">
        View All Projects
        </a>
        <br></br>
        <a href="/ViewTeams">
        View All Teams
        </a>
        </form>
    );





};

export default CreateProject;