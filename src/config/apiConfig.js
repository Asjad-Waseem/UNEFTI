const url = "https://dev-backend.shoptype.com";
const rid = "607274ee0cb35c0b894cb2bc";

const endPoints ={
    login: () => `${url}/login`,
    socialLogin: () => `${url}/social-login?rid=${rid}`,
    logout: () => `${url}/logout`,
    signup: () => `${url}/register?rid=${rid}`,
    getAuthToken: () => `${url}/authenticate`,
    registerVendors: () => `${url}/vendors`,
    discoverVendor: (text) => `${url}​/networks/discover-vendors?text=${text}`,
    inviteVendor: (vendorId) => `${url}/networks/invite-vendor?vendorId=${vendorId}`,
}

export default endPoints;