import { verifyJWTToken } from "../../utils/jwtCommonFunction";


export const updateOrder = async (req, res) => {
  try {
     const orderData = req.body;
     const token = req.header[0].authentication;
     if(!token){
         req.send("Token Missing");
     }
     const tokenVerification = verifyJWTToken(token);
     if(!tokenVerification){
        req.send("Authentication Failed");
     }
     const data = await updateOrder(orderData);
     req.send({SuccessMsg:"Order Updated Success","data":data});

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating PDF" });
  }
};