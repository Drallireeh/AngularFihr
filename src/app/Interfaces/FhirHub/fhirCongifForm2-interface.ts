export interface FhirConfigForm2Interface {
    id: number,
    adresseEndpoint: string,
    adresseEndpointDMP: string,
    adresseEndpointMSS: string,
    OIDRacineDMP: string,
    gestion: boolean,
    age: number,
    ageMini: number,
    reevaluation: number,
    confidentialite: boolean[],
    confidentialiteLabel: string[],
    automatisation: boolean[],
    automatisationLabel: string[]
}