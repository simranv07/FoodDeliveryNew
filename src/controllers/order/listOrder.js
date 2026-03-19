import { verifyJWTToken } from "../../utils/jwtCommonFunction";


export const listOrder = async (req, res) => {
  try {
     const orderData = req.params;
     const token = req.header[0].authentication;
     if(!token){
         req.send("Token Missing");
     }
     const tokenVerification = verifyJWTToken(token);
     if(!tokenVerification){
        req.send("Authentication Failed");
     }
     const data = await listOrder(data);

     req.send({SuccessMsg:"Order listed Success","data":data});

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating PDF" });
  }
};