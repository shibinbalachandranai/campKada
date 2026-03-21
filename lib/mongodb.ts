import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConnection: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;
}

function getCache() {
  if (!global._mongooseConnection) {
    global._mongooseConnection = { conn: null, promise: null };
  }
  return global._mongooseConnection;
}

export async function connectDB(): Promise<typeof mongoose> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Missing environment variable: "MONGODB_URI"');

  const cached = getCache();
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).catch((err) => {
      cached.promise = null;
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
