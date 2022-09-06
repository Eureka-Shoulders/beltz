/**
 *
 * @param password string to be verified
 * @returns null is success or array of improvement points
 */

export function validatePassword(password: string) {
  const reasons: string[] = [];
  if (password.length < 8) {
    reasons.push('Password must be at least 8 characters long');
  }
  if (password.search(/[a-z]/) === -1) {
    reasons.push('Password must contain at least one lowercase letter');
  }
  if (password.search(/[A-Z]/) === -1) {
    reasons.push('Password must contain at least one uppercase letter');
  }
  if (password.search(/[0-9]/) === -1) {
    reasons.push('Password must contain at least one number');
  }
  if (password.search(/[^a-zA-Z0-9]/) === -1) {
    reasons.push('Password must contain at least one special character');
  }
  return reasons.length ? reasons : null;
}
