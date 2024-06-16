import jwt from 'jsonwebtoken';

const generateTokenSetCookie = (userId, res) => {
  const token = jwt.sign({userId},process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
  res.cookie("jwt", token, {
    httpOnly: true, //more secure
    maxAge: 15 * 24 * 60 * 1000, //1 day
    sameSite:"strict", //CSRF (security vurnability)
  })

  return token;
}

export default generateTokenSetCookie;

