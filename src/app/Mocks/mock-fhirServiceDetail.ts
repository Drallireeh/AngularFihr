import { FhirServiceDetailInterface } from "../Interfaces/FhirHub/fhirServiceDetail-interface";

export const FHIRServiceDetail: FhirServiceDetailInterface[] = [
    {
        name: "Mode inclusion",
        type: "Token",
        label: "Définit le mode d'inclusion des ressources et binaires",
    },
    {
        name: "id",
        type: "String",
        label: "Filtrer sur l'identifiant Fhir",
    },
    {
        name: "idcegi",
        type: "Number",
        label: "Filtre sur l'identifiant CEGI",
    },
    {
        name: "patient.id",
        type: "String",
        label: "Filtre sur l'identifiant Fhir du patient",
    },
    {
        name: "patient.idcegi",
        type: "Number",
        label: "Filtre sur l'identifiant Cegi du patient",
    },
    {
        name: "encounter.id",
        type: "String",
        label: "Filtre sur l'identifiant Fhir du séjour",
    },
    {
        name: "encounter.idcegi",
        type: "Number",
        label: "Filtre sur l'identifiant Cegi du séjour",
    },
    {
        name: "datecreation",
        type: "Date/DateTime",
        label: "Filtre sur la date du document (création)",
    },
    {
        name: "datemodification",
        type: "Date/DateTime",
        label: "Filtre sur la date de dernière modification du document",
    },
    {
        name: "author.id",
        type: "String",
        label: "Filtre sur l'identifiant Fhir du praticien",
    },
    {
        name: "author.idcegi",
        type: "Number",
        label: "Filtre sur l'identifiant interne du praticien",
    },
    {
        name: "file.idcegi",
        type: "Number",
        label: "Filtre sur l'identifiant interne du fichier de données",
    },
    {
        name: "patient.name",
        type: "String",
        label: "Filtre sur le nom et le prénom du patient",
    },
]
