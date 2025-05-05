const login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

export default login