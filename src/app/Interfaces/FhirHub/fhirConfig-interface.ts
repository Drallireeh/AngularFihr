import {FhirConfigEndpointInterface} from './fhirConfigEndpoint-interface'

export interface FhirConfigInterface {
    name: string,
    lien: string,
    endpoints: FhirConfigEndpointInterface[]
}