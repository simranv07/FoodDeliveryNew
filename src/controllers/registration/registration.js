

export const registerUser = async (req, res) => {
  try {
     const userDetail = req.body;
     const data = await createUser(userDetail);
     req.send({Msg:"User Register Success","data":data});

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating PDF" });
  }
};