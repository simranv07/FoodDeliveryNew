
import dotenv from 'dotenv';
const jwt = require('jsonwebtoken');


 export function createJWTToken(userData){
    try{
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: userData.id,
    }

    const token = jwt.sign(data, jwtSecretKey,{
        expiresIn:'24h'
    });

    return token;
}
catch(err){
     console.error(err);
    res.status(500).json({ error: "Error in jwt token creation" });
}
}

export function verifyJWTToken(token){
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return true;
        } else {
            // Access Denied
            return false;
        }
    }
        catch(err){
             console.error(err);
             res.status(500).json({ error: "Error in jwt token creation" });
        }
}