/**
 * Cloudplane API
 * cloudplane.org API
 *
 * OpenAPI spec version: 0.1
 * Contact: support@cloudplane.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1NodeInclusionPolicy } from '../models/V1NodeInclusionPolicy';
import { V1TopologySpreadConstraintLabelSelector } from '../models/V1TopologySpreadConstraintLabelSelector';
import { V1UnsatisfiableConstraintAction } from '../models/V1UnsatisfiableConstraintAction';
import { HttpFile } from '../http/http';

export class V1TopologySpreadConstraint {
    'labelSelector'?: V1TopologySpreadConstraintLabelSelector;
    /**
    * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn\'t set. Keys that don\'t exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector.  This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default). +listType=atomic +optional
    */
    'matchLabelKeys'?: Array<string>;
    /**
    * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. +-------+-------+-------+ | zone1 | zone2 | zone3 | +-------+-------+-------+ |  P P  |  P P  |   P   | +-------+-------+-------+ - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It\'s a required field. Default value is 1 and 0 is not allowed.
    */
    'maxSkew'?: number;
    /**
    * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats \"global minimum\" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won\'t schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule.  For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: +-------+-------+-------+ | zone1 | zone2 | zone3 | +-------+-------+-------+ |  P P  |  P P  |  P P  | +-------+-------+-------+ The number of domains is less than 5(MinDomains), so \"global minimum\" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.  This is a beta field and requires the MinDomainsInPodTopologySpread feature gate to be enabled (enabled by default). +optional
    */
    'minDomains'?: number;
    'nodeAffinityPolicy'?: V1NodeInclusionPolicy;
    'nodeTaintsPolicy'?: V1NodeInclusionPolicy;
    /**
    * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a \"bucket\", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is \"kubernetes.io/hostname\", each Node is a domain of that topology. And, if TopologyKey is \"topology.kubernetes.io/zone\", each zone is a domain of that topology. It\'s a required field.
    */
    'topologyKey'?: string;
    'whenUnsatisfiable'?: V1UnsatisfiableConstraintAction;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return V1TopologySpreadConstraint.attributeTypeMap;
    }

    public constructor() {
    }
}



