export interface FhirConfigForm2Interface {
    id: number,
    adresseEndpoint: string,
    adresseEndpointDMP: string,
    adresseEndpointMSS: string,
    OIDRacineDMP: string,
    gestion: string,
    age: number,
    ageMini: number,
    reevaluation: number,
    confidentialite: string[],
    confidentialiteLabel: string[],
    automatisation: string[],
    automatisationLabel: string[]
}