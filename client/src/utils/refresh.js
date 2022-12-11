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
        `http://localhost:3000/api/users/newaccesstoken`,
        config
      );
      
      localStorage.setItem("userInfo", JSON.stringify(data));
      


    }catch(err){
      
     
    }
   
    
}