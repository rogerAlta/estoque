import jwt from "jsonwebtoken";
import User from "../models/User.js"
import bcrypt from "bcryptjs";
import "dotenv/config";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, error: "Usuário não encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Senha Incorreta" });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "10d" }
    );

    return res.status(200).json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, role: user.role },
    });

  } catch (error) {
    console.error("Erro no login:", error.message);
    return res.status(500).json({ success: false, error: "Erro no servidor" });
  }
};

const verify = (req, res) =>{
    return res.status(200).json({success:true, user: req.user})
}

export {login, verify};