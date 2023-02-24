import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  //check exisitng user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json("eroororor");
    if (data.length) return res.status(409).json("username sistemde var!");
    // hash password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "İNSERT İNTO users(`username`,`email`, `password`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.email,
        hash,
    ]
    db.query(q,[values], (err,data)=>{
    if (err) return res.json(err);
        return res.status(200).json('user yaradildi')
    })

  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
