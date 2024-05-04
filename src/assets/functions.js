import { jwtDecode } from "jwt-decode";

const checkToken =(token) => {
    try{
        if(token){
            const { exp }= jwtDecode(token);

             // console.log("token", token);
            // console.log("exp", exp);
            // console.log("data", data);
            const dateNow = Math.floor(Date.now()/ 1000);

            if(dateNow >= exp){
                return null;
            
            }else{
                return token;
            }

        }
    }
    catch(error){
        console.log("token error");

    }
    return null;
}

export {
    checkToken,
}