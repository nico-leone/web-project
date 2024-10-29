const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./UserSchema')

const Project = require('./Projects.js')

const Team = require('./TeamName.js')

app.use(express.json());
app.use(cors())
app.listen(9000, () => {
    console.log('Server Started at ${9000}')
})

const mongoose = require('mongoose');
const mongoString ="mongodb+srv://admin:admin123@418y.ka2ri.mongodb.net/database1"
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => console.log(error))

database.once('connected', () => console.log('Database Connected'))

app.post('/createUser', async (req, res) => {
    console.log('SERVER: CREATE USER REQ BODY: ${req.body.username} ${req.body.firstName} ${req.body.lastName}')
    const un = req.body.username
    try{
        User.exists({username: un}).then(result => {
            if(Object.is(result,null)) {
                const user = new User(req.body);
                user.save()
                console.log('User created! ${user}')
                res.send(user)
            }
            else {
                console.log("Username alreadt exists")
                res.status(500).send("Username already exists")
            }
        })
    }
    catch (error){
        res.status(500).send(error)
    }

})

app.get('/getUser', async (req, res) => {
    console.log(`SERVER: GET USER REQ BODY: ${req.query}`)
    const username = req.query.username
    const password = req.query.password
    console.log('Received username:', username);
    console.log('Received password:', password);
    try {
        const user = await User.findOne({ username, password })
        console.log('Found user:', user);
        res.send(user)
    }
    catch (error) {
        console.error('Error finding user:', error);
        res.status(500).send(error)
    }
})

app.post('/createProject' , async (req,res) => {
    try {
        const project = new Project(req.body);
        project.save()
        console.log('Project created! ${project}')
        res.send(project)
    }
    catch(error){
        res.status(500).send(error)
    }

})

app.get('/getUsers', async (req,res) => {
    try {
        const userList = await User.find({}, {firstName:1, lastName:1});
        res.send(userList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.post('/createTeam' , async (req,res) => {
    try {
        const team = new Team(req.body);
        team.save()
        console.log('Team Created! ${team}')
        res.send(team)
    }
    catch(error){
        res.status(500).send(error)
    }

})

app.get('/getTeams', async (req,res) => {
    try {
        const teamList = await Team.find({}, {team_name:1});
        res.send(teamList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/getProjects', async (req, res) => {
    try {
        const projects = await Project.find()
        let responseDetails = []
        for (const project of projects) {
           const manager = await User.findById(project.mgr_id)
           const owner = await User.findById(project.prod_owner_id)
           const team = await Team.findById(project.team_id)
           responseDetails.push({
             project_name: project.proj_name,
             description: project.proj_desc,
             manager_details: manager,
             owner_details: owner,
             teams_details: team
           })
        }
        res.send(responseDetails)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

