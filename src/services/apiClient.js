import axios from "axios"


const getAllSpecificPlatformTasksArray = async (platformName) => {
    try{
    
    const response = await axios.get(import.meta.env.VITE_GETTINGTASKS ,{withCredentials:true});
    let resultArray=[]
    console.log("response",response.data)
    response.data.forEach((ele)=>{
      let {platform}=ele
      if(platform==platformName){
        resultArray.push(ele)
      }
    })
    return resultArray;

  }
    catch(err){
      console.log(err)
    }
  };
  

 const gettingSubmitedDataAndSendingItToServer= async (formData)=>{
   
  let response =  await axios.post(import.meta.env.VITE_CREATINGTASKS,formData)
    console.log(response.data)
 }
 

 const deletingATask = async(formData)=>{
  console.log("das",formData)
  let response =  await axios.delete(import.meta.env.VITE_DELTEINGTASKS,{data:formData})
    console.log(response.data)
 } 

 const verifyingAdmin = async (name)=>{
  let response =  await axios.post(import.meta.env.VITE_ADMIN,{name})
    console.log(response.data)
    return response.data
 }

 export {getAllSpecificPlatformTasksArray,gettingSubmitedDataAndSendingItToServer,deletingATask,verifyingAdmin}
