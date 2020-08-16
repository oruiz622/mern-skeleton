const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'secret_key',
  mongoURI:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb+srv://oruiz622:87514BJ2@mernappcluster.3fxfq.mongodb.net/mernapps?retryWrites=true&w=majority'
  // 'mongodb://' +
  //   (process.env.IP || 'localhost') +
  //   ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   'mern-skeleton'
};

export default config;
