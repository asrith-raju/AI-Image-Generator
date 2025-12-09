import jwt from 'jsonwebtoken';


const userauth = (req, res, next) => {
const authHeader = req.headers.authorization;

// if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({
//         success: false,
//         message: "Authorization token missing or invalid"
//     });
// }   

const token = authHeader.split(" ")[0];


 if (!token) {
     return res.json({ success:false,message: 'Not authorized, Login Again' });
 }
 try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if(tokenDecode.id){
         req.body.userId = tokenDecode.id;
    }else{
        return res.json({ success:false,message: 'Not authorized, Login Again' });  
    }
    next()
 } catch (error) {
    res.json({ success:false,message: error.message });
 }
}

export default userauth;