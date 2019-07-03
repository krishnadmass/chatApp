
const users = []


//  adding the user,getuser, get usersinroom
const addUser = ({ id,username,room}) =>{
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

// validate the data

if(!username || !room) {
    return {
        error:"Username and rooms are required"
    }
}

// Check for exsting user
const exstingUser = users.find((user)=>{
    return user.room === room && user.username === username
})


if(exstingUser) {
    return {
        error:`${exstingUser.username} is already in use`
    }
}

// Store user

const user = { id, username, room}
users.push(user)
return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user)=> user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id)=>{
    return users.find((user)=>user.id === id)
}

const getUserInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user)=> user.room === room);
}


module.exports = {
    addUser,removeUser,getUser,getUserInRoom
}