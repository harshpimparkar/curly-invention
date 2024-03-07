import User from "../models/user.models.js";

export const signup = async (req, res) => {
  try{
    //get all the attributes
    const {fullName,username,password,confirmPassword,gender} = req.body
    //check wrong password
    if(password !== confirmPassword){
      return res.status(400).json({error:"Passowrd did not match"})
    }
   
    const user = await User.findOne({username})

    if(user){
      return res.status(400).json({error:"Username already exists"})
    }
    


  }catch(error){
      
  }
};
export const login = (req, res) => {
  console.log("loginUser");
};
export const logout = (req, res) => {
  console.log("logoutUser");
};
