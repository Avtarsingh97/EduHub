const httpStatus = require("../util/httpStatus");
const chatService= require("../services/chat.service")
const sendAndRecieveMessage=async(req, res)=>{
    try{
        
   const { questionData } = req.body;

if (!questionData) {
  return res.status(400).json({
    message: "Question is required"
  });
}

const answer = await chatService.askQuestion(questionData);

res.status(200).json({
  answer
});
}catch(error){
    console.log(error);
    
    return res.status(httpStatus.internalServerError).json({success: false,
        message: error.message
    })
}
}

module.exports={
    sendAndRecieveMessage
}