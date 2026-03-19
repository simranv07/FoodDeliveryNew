import { verifyJWTToken } from "../../utils/jwtCommonFunction";


export const createOrder = async (req, res) => {
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
     const data = await createOrder(data);
     req.send("Order Created Success");

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating PDF" });
  }
};