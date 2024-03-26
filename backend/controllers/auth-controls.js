const User = require("../models/user-models");
const bcrypt = require("bcryptjs");

const home = async (req, res,next) => {
    try {
        res.status(200).json('ROUTER CREATED');
    } catch (error) {
        console.log(error);
    }
};
const codecheck = async (req, res,next) => {
    try {
        const { sponsorcode } = req.body;
        const check = await User.findOne({ refferalcode: sponsorcode });
        if (!check) {
            return res.status(400).json({ msg: "WRONG REFFERAL CODE" });
        }
        res.status(200).json({ msg: check });
    } catch (error) {
        console.log(error);
    }
};
const emailcheck = async (req, res,next) => {
    try {
        const { email } = req.body;
        const check = await User.findOne({ email });
        if (check) {
            return res.status(400).json({ msg: "EMAIL ALREADY REGISTERED" });
        }
        res.status(200).json({ msg: "DONE" });
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res,next) => {
    try {
        const { password, sponsoremail } = req.body;
        const check = await User.findOne({ email: sponsoremail });


        const saltRound = 10;
        const hashpassword = await bcrypt.hash(password, saltRound);

        const newuser = await User.create({ ...req.body, password: hashpassword });

        if (sponsoremail) {
            const { purchasepack, reffers, earnings } = check;
            const packs = { starter: "149", basic: "499", standard: "1401", premium: "2001" };

            if (purchasepack === "starter") {
                await User.updateOne({ email: sponsoremail }, {
                    $set: {
                        reffers: parseInt(reffers) + 1,
                        earnings: earnings.concat({
                            refferType: req.body.purchasepack,
                            date: Date.now(),
                            amt: "149",
                        })
                    }
                })
            }
            else if (purchasepack === "basic") {
                await User.updateOne({ email: sponsoremail }, {
                    $set: {
                        reffers: parseInt(reffers) + 1,
                        earnings: earnings.concat({
                            refferType: req.body.purchasepack,
                            date: Date.now(),
                            amt: req.body.purchasepack === "starter" ? "149" : "499",
                        })
                    }
                })
            }
            else if (purchasepack === "starter") {
                await User.updateOne({ email: sponsoremail }, {
                    $set: {
                        reffers: parseInt(reffers) + 1,
                        earnings: earnings.concat({
                            refferType: req.body.purchasepack,
                            date: Date.now(),
                            amt: req.body.purchasepack === "premium" ? "1401" : packs[req.body.purchasepack],
                        })
                    }
                })
            }
            else {
                await User.updateOne({ email: sponsoremail }, {
                    $set: {
                        reffers: parseInt(reffers) + 1,
                        earnings: earnings.concat({
                            refferType: req.body.purchasepack,
                            date: Date.now(),
                            amt: packs[req.body.purchasepack],
                        })
                    }
                })
            }
        }

        res.status(201).json({ msg: "Register Successful", token: await newuser.generateToken() });
    } catch (error) {
        console.log(error);
    }
};


const login = async (req, res,next) => {
    try {
        const { email, password } = req.body;

        const check = await User.findOne({ email });

        if (!check) {
            return next({ status: 422, msg: "invalid Credential" });
        }

        const isreal = await bcrypt.compare(password, check.password);

        if (isreal) {
            return res.status(200).json({ msg: "Login Successful", token: await check.generateToken() })
        }
        else{
            return next({ status: 401, msg: "Wrong Password",details:isreal });
        }


    } catch (error) {
        next({ details: error })
    }
};

module.exports = { home, register, codecheck, emailcheck, login };