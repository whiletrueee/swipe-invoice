import crypto from 'crypto';

export function generateInvoiceId() {
  const currentTimestamp = Date.now().toString();
  const randomBytes = crypto.randomBytes(6).toString('hex');

  const hash = crypto.createHash('sha256');
  hash.update(currentTimestamp + randomBytes);

  return hash.digest('hex').toUpperCase();
}