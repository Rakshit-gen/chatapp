export const login = (req,res) => {
    console.log('loginUser');
}

export const logout = (req,res) => {
    console.log('logOutUser');
}

export const signup = async(req,res) => {
    try{
     const {fullname,username,password,confirmpassword,gender} = req.body;
     if(password!=confirmpassword){
        return res.status(400).json({error:"Passwrords don't match"})
     }
     const user = await User.findOne({username});
     if(user){
        return res.status(400).json({error:"Username already taken"})
     }
     const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
	 const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

     req.send([firstname,username]);
    }
    catch (error){
        console.log(error)

    }
}