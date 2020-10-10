export function isAuthenticated() { return localStorage.getItem("token") };

export default isAuthenticated