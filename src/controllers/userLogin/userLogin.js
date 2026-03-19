

export const userLogin = async (req, res) => {
  try {
     const userDetail = req.body;
     const data = await findUser(userDetail);

     if(!data){
         req.send({Msg:"User not Register","data":data});
     }
     const token = createJWTToken(data);
     req.send({Msg:"User Login Success","token":token});

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating PDF" });
  }
};