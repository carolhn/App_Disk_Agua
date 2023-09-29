import crypto from 'crypto';

const createHash = (password: string): string => {
    return crypto
    .createHash('md5')
    .update(password)
    .digest('hex');
};

const hashToCompare = (password: string, hashToCompare: string): boolean => {
    const passwordHash = createHash(password);
    return passwordHash === hashToCompare;
};

export { createHash, hashToCompare };