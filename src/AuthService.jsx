
class AuthService {
    // Function to save JWT token in sessionStorage
    // static saveToken(token) {
    //     sessionStorage.setItem('jwttoken', token);
    // }

    // Function to retrieve JWT token from sessionStorage
    static getToken() {
        return localStorage.getItem('token');
    }


        // // Function to get user roles from JWT token
        // static getUserRoles() {
        //     const token = this.getToken();
        //     if (token) {
        //         const decodedToken = jwt_decode(token);
        //         const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']; // Assuming roles are stored in 'role' claim
        //         return roles ? roles.split(',') : [];
        //     }
        //     return [];
        // }

    // Function to check if user is authenticated
    static isAuthenticated() {
        const token = this.getToken();
        return token !== null && token !== undefined;
    }

    // Function to clear JWT token from sessionStorage (logout)
    static logout() {
        localStorage.removeItem('token');
    }
}

export default AuthService;
