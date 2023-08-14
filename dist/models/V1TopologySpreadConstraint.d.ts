import { V1NodeInclusionPolicy } from '../models/V1NodeInclusionPolicy';
import { V1TopologySpreadConstraintLabelSelector } from '../models/V1TopologySpreadConstraintLabelSelector';
import { V1UnsatisfiableConstraintAction } from '../models/V1UnsatisfiableConstraintAction';
export declare class V1TopologySpreadConstraint {
    'labelSelector'?: V1TopologySpreadConstraintLabelSelector;
    'matchLabelKeys'?: Array<string>;
    'maxSkew'?: number;
    'minDomains'?: number;
    'nodeAffinityPolicy'?: V1NodeInclusionPolicy;
    'nodeTaintsPolicy'?: V1NodeInclusionPolicy;
    'topologyKey'?: string;
    'whenUnsatisfiable'?: V1UnsatisfiableConstraintAction;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
