"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1TopologySpreadConstraint = void 0;
var V1TopologySpreadConstraint = (function () {
    function V1TopologySpreadConstraint() {
    }
    V1TopologySpreadConstraint.getAttributeTypeMap = function () {
        return V1TopologySpreadConstraint.attributeTypeMap;
    };
    V1TopologySpreadConstraint.discriminator = undefined;
    V1TopologySpreadConstraint.attributeTypeMap = [
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "V1TopologySpreadConstraintLabelSelector",
            "format": ""
        },
        {
            "name": "matchLabelKeys",
            "baseName": "matchLabelKeys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "maxSkew",
            "baseName": "maxSkew",
            "type": "number",
            "format": ""
        },
        {
            "name": "minDomains",
            "baseName": "minDomains",
            "type": "number",
            "format": ""
        },
        {
            "name": "nodeAffinityPolicy",
            "baseName": "nodeAffinityPolicy",
            "type": "V1NodeInclusionPolicy",
            "format": ""
        },
        {
            "name": "nodeTaintsPolicy",
            "baseName": "nodeTaintsPolicy",
            "type": "V1NodeInclusionPolicy",
            "format": ""
        },
        {
            "name": "topologyKey",
            "baseName": "topologyKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "whenUnsatisfiable",
            "baseName": "whenUnsatisfiable",
            "type": "V1UnsatisfiableConstraintAction",
            "format": ""
        }
    ];
    return V1TopologySpreadConstraint;
}());
exports.V1TopologySpreadConstraint = V1TopologySpreadConstraint;
//# sourceMappingURL=V1TopologySpreadConstraint.js.map