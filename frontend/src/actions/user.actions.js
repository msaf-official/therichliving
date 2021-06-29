 const userRegisteration = (data)=>{
    return {
        type:"userRegister",
        payload: data,
    }
}

 const userSponserData = (data)=>{
    console.log(data);
    return {
     
        type:"userSponserInfo",
        payload: data,
    }
}

exports.module = {
    userRegisteration,
    userSponserData
}