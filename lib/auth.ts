import crypto from 'node:crypto';

const SESSION_COOKIE = 'intraweb_session';

function requiredEnv(name: 'ADMIN_USER' | 'ADMIN_PASSWORD') {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function validateCredentials(username: string, password: string) {
  const adminUser = requiredEnv('ADMIN_USER');
  const adminPassword = requiredEnv('ADMIN_PASSWORD');

  return username === adminUser && password === adminPassword;
}

export function createSessionValue() {
  const adminUser = requiredEnv('ADMIN_USER');
  const adminPassword = requiredEnv('ADMIN_PASSWORD');

  return crypto.createHash('sha256').update(`${adminUser}:${adminPassword}`).digest('hex');
}

export const sessionCookieName = SESSION_COOKIE;
