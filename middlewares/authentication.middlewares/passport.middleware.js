const passport = require("passport");
const database = require("../../helpers/database.helper");
const logger = require("../../configs/pino.config");
const jwtStrategy = require("passport-jwt").Strategy;

const getToken = (request, response) => {
  return request.cookies.token || request.body.token || request.header("Authentication")?.replace("Bearer", "") || null;
}

let options = {
  jwtFromRequest: getToken,
  secretOrKey: process.env.SCREAT_KEY,
}

passport.use(new jwtStrategy(options, async (payload, next) => {
  try {
    const db = new database();
    const result = await db.executeQuery("select * from users where id = ?", [payload.userId]);
    if (typeof result == 'string') {
      logger.info(result)
      return next(null, null);
    }
    else {
      if (result.length == 0) {
        return next(null, null);
      }
      else {
        return next(null, result[0])
      }
    }
  }
  catch (error) {
    logger.info(result)
    return next(null, null);
  }
}))

module.exports = passport;