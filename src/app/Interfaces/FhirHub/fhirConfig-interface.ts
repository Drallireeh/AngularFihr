import {FhirConfigEndpointInterface} from './fhirConfigEndpoint-interface'

export interface FhirConfigInterface {
    name: string,
    lien: string,
    id: number,
    endpoints: FhirConfigEndpointInterface[]
}