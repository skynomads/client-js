export class V1Condition {
    static getAttributeTypeMap() {
        return V1Condition.attributeTypeMap;
    }
    constructor() {
    }
}
V1Condition.discriminator = undefined;
V1Condition.attributeTypeMap = [
    {
        "name": "lastTransitionTime",
        "baseName": "lastTransitionTime",
        "type": "string",
        "format": ""
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    },
    {
        "name": "observedGeneration",
        "baseName": "observedGeneration",
        "type": "number",
        "format": ""
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1Condition.js.map