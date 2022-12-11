 export default function setWithExpiry(key, value, expiration) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + expiration,
    }
    localStorage.setItem(key, JSON.stringify(item))
}
