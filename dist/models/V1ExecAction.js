"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ExecAction = void 0;
var V1ExecAction = (function () {
    function V1ExecAction() {
    }
    V1ExecAction.getAttributeTypeMap = function () {
        return V1ExecAction.attributeTypeMap;
    };
    V1ExecAction.discriminator = undefined;
    V1ExecAction.attributeTypeMap = [
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1ExecAction;
}());
exports.V1ExecAction = V1ExecAction;
//# sourceMappingURL=V1ExecAction.js.map