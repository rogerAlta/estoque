import jwt from "jsonwebtoken"
import User from "../models/User.js";

const verifyUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("")[1];
        if(!token) {
            return res.status(404).json({success: false, error: "Token não provido"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(!decoded) {
            return res.status(404).json({success: false, error: "Token não válido"})
        }

        const user = await User.findById({_id: decoded._id}).select("-password")

        if(!user) {
            return res.status(404).json({success: false, error: "Usuário não encontrado"})
        }

        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({success: false, error: "erro no servidor"})
    }
}

export default verifyUser