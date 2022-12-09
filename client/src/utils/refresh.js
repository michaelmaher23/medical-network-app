import axios from "axios";
export const refresh = async()=>{
    try{
 const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const { data } = await axios.get(
        `https://medicalprojectnet.vercel.app/api/users/newaccesstoken`,
        config
      );
      
      localStorage.setItem("userInfo", JSON.stringify(data));
      


    }catch(err){
      
     
    }
   
    
}