const dotenv =  require('dotenv');
const dotenExpand = require( 'dotenv-expand');

const env = dotenv.config();
dotenExpand.expand(env);
// console.log("Details:: ", env)
/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */

export default {
  NodeEnv: process.env.NODE_ENV ?? '',
  Port: process.env.PORT ?? 4001,
  DatabaseUrl: process.env.DATABASE_URL ?? '',
  GoogleClientID: process.env.GOOGLE_CLIENT_ID ?? '',
  GoogleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  GoogleCallbackURL: process.env.GOOGLE_CALLBACK_URL,
  SessionSecret:process.env.SESSION_SECRET,
  Jwt: {
    Secret: process.env.JWT_SECRET ?? '',
    Exp: process.env.COOKIE_EXP ?? '', // exp at the same time as the cookie
  },
} as const;
