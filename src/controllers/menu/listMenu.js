import { verifyJWTToken } from "../../utils/jwtCommonFunction";


export const getListOfMenu = async (req, res) => {
  try {
     const menuDetail = req.params;
     const token = req.header[0].authentication;
     if(!token){
         req.send("Token Missing");
     }
     const tokenVerification = verifyJWTToken(token);
     if(!tokenVerification){
        req.send("Authentication Failed");
     }
     const data = await listMenu(menuDetail);
     req.send({Msg:"Menu Fetched Success","data":data});

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating PDF" });
  }
};