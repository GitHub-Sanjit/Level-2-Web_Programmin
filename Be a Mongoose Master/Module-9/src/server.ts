import config from './app/config';
import mongoose from 'mongoose';

import app from './app';
// mongoose.connect("mongodb://127.0.0.1:27017/test");

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
