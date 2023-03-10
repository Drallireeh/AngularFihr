import { FhirServiceDetailInterface } from "../Interfaces/FhirHub/fhirService/fhirServiceDetail-interface";
import { faTrash, faPen, faArrowUp, faBook, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

var trash = faTrash; 
var pen = faPen;
var arrowUp = faArrowUp;
var book = faBook;
var search = faSearch;
var plus = faPlus

export const FHIRServiceDetail: FhirServiceDetailInterface[] = [
    {
        props: [
            {
                name: "Versionning",
                isSupported: true,
                isActive: null,
            },
            {
                name: "ReadHistory",
                isSupported: true,
                isActive: null,
            },
            {
                name: "UpdateCreate",
                isSupported: true,
                isActive: false,
            },
            {
                name: "ConditionalCreate",
                isSupported: true,
                isActive: false,
            },
            {
                name: "ConditionalUpdate",
                isSupported: true,
                isActive: false,
            },
            {
                name: "ConditionalDelete",
                isSupported: false,
                isActive: null,
            },
        ],
        interactions: [
            {
                name: "read",
                lien: "https://www.google.com",
                icon: book
            },
            {
                name: "search-type",
                lien: "https://www.google.com",
                icon: search
            },
            {
                name: "patch",
                lien: "https://www.google.com",
                icon: pen
            },
            {
                name: "create",
                lien: "https://www.google.com",
                icon: plus
            },
            {
                name: "update",
                lien: "https://www.google.com",
                icon: arrowUp
            },
            {
                name: "delete",
                lien: "https://www.google.com",
                icon: trash
            }
        ],
        params: [
            {
                name: "Mode inclusion",
                type: "Token",
                label: "D??finit le mode d'inclusion des ressources et binaires",
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
                label: "Filtre sur l'identifiant Fhir du s??jour",
            },
            {
                name: "encounter.idcegi",
                type: "Number",
                label: "Filtre sur l'identifiant Cegi du s??jour",
            },
            {
                name: "datecreation",
                type: "Date/DateTime",
                label: "Filtre sur la date du document (cr??ation)",
            },
            {
                name: "datemodification",
                type: "Date/DateTime",
                label: "Filtre sur la date de derni??re modification du document",
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
                label: "Filtre sur l'identifiant interne du fichier de donn??es",
            },
            {
                name: "patient.name",
                type: "String",
                label: "Filtre sur le nom et le pr??nom du patient",
            },
            {
                name: "author.practitioner.name",
                type: "String",
                label: "Filtre sur le nom et le pr??nom de l'auteur (professionnel)",
            },
            {
                name: "family",
                type: "String",
                label: "Filtre sur le nom du patient",
            },
            {
                name: "author.PractitionerRole.partOf.family-ex",
                type: "String",
                label: "Filtre sur le nom de l'auteur (professionnel)",
            },
            {
                name: "given",
                type: "String",
                label: "Filtre sur le pr??nom du patient",
            },
            {
                name: "author.PractitionerRole.partOf.given-ex",
                type: "String",
                label: "Filtre sur le pr??nom de l'auteur (professionnel)",
            },
            {
                name: "nature",
                type: "String",
                label: "Filtre sur la nature du s??jour",
            },
            {
                name: "nature.idcegi",
                type: "Number",
                label: "Filtre sur l'identifiant interne de la nature",
            },
            {
                name: "categorie.code",
                type: "String",
                label: "Filtre sur le code la cat??gorie de document",
            },
            {
                name: "categorie.idcegi",
                type: "Number",
                label: "Filtre sur l'identifiant interne de la cat??gorie du document",
            },
            {
                name: "famille.code",
                type: "String",
                label: "Filtre sur le code de la famille de document",
            },
            {
                name: "famille.idcegi",
                type: "Number",
                label: "Filtre sur l'identifiant interne de la famille du document",
            },
            {
                name: "modele.code",
                type: "String",
                label: "Filtre sur le code du mod??le de document",
            },
            {
                name: "modele.idcegi",
                type: "Number",
                label: "Filtre sur l'identifiant interne du mod??le de document",
            },
            {
                name: "type",
                type: "Token",
                label: "Type du document",
            },
            {
                name: "facility",
                type: "Token",
                label: "Secteur d'activit??",
            },
            {
                name: "setting",
                type: "Token",
                label: "Cadre d'exercice",
            },
    
    ]
} 
]
