const initialstate ={
    data:[
   
    ]
}



 const userRegisterationReducer = (state=initialstate,{type,payload})=>{

    switch(type){
        case "userRegister":
            return {...state,data:payload};
    
         default:
            return state    
    }
    }


 const userSponserInfoReducer = (state=initialstate,{type,payload})=>{

        switch(type){
            case "userSponserInfo":
                return {...state,data:payload};
        
             default:
                return state    
        }
        }

 exports.module = {userRegisterationReducer,
    userSponserInfoReducer
}