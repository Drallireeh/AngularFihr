import { FhirConfigForm2Interface } from "../Interfaces/FhirHub/fhirCongifForm2-interface";

export const FHIRConfigForm2: FhirConfigForm2Interface[] = [
    {
        id: 0,
        adresseEndpoint: "string",
        adresseEndpointDMP: "string",
        adresseEndpointMSS: "string",
        OIDRacineDMP: "string",
        gestion: "string",
        age: 18,
        ageMini: 1,
        reevaluation: 7,
        confidentialite: ["checked", "checked", ""],
        automatisation: ["checked", "", "checked"]
    },
]
