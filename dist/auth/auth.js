export function configureAuthMethods(config) {
    let authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    return authMethods;
}
//# sourceMappingURL=auth.js.map