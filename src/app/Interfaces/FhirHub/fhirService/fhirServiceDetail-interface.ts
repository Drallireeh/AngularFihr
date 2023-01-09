import {FhirServiceDetailParamsInterface} from './fhirServiceDetailParams-interface'
import {FhirServiceDetailPropsInterface} from './fhirServiceDetailProps-interface'
import {FhirServiceDetailInteractionsInterface} from './fhirServiceDetailInteractions-interface'

export interface FhirServiceDetailInterface {
    props: FhirServiceDetailPropsInterface[],
    interactions: FhirServiceDetailInteractionsInterface[],
    params: FhirServiceDetailParamsInterface[]
  }
