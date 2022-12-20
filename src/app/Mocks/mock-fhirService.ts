import { FhirServiceInterface } from "../Interfaces/FhirHub/fhirService-interface";

export const FHIRService: FhirServiceInterface[] = [
    {
        name: "AllergyIntolerance",
        label: "Accès aux allergies intolérances",
        lien: "http://www.google.fr",
    },
    {
        name: "AuditEvent",
        label: "Accès aux évènements d'audit",
        lien: "http://www.google.fr",
    },
    {
        name: "Binary",
        label: "Accès aux données binaires",
        lien: "http://www.google.fr",
    },
    {
        name: "CarePlan",
        label: "Accès aux prescriptions",
        lien: "http://www.google.fr",
    },
    {
        name: "CareTeam",
        label: "Accès aux équipes de prise en charge internes et au Cercle de Soins (CI-SIS) du patient, supportant IHE DCTM",
        lien: "http://www.google.fr",
    },
    {
        name: "CdiDocumentReference",
        label: "Accès aux notes",
        lien: "http://www.google.fr",
    },
    {
        name: "Condition",
        label: "Accès aux pathologies",
        lien: "http://www.google.fr",
    },
    {
        name: "DocumentReference",
        label: "Accès aux documents GED et support du Partage de Documents de Santé CISIS",
        lien: "http://www.google.fr",
    },
    {
        name: "Encounter",
        label: "Accès aux séjours (implémente FrEncounter)",
        lien: "http://www.google.fr",
    },
    {
        name: "Endpoint",
        label: "Accès aux EndPoints",
        lien: "http://www.google.fr",
    },
    {
        name: "EpisodeOfCare",
        label: "Accès aux séjours",
        lien: "http://www.google.fr",
    },
    {
        name: "Flag",
        label: "Accès aux flags",
        lien: "http://www.google.fr",
    },
    {
        name: "FrOrganisationUAC",
        label: "Accès aux organisations UAC",
        lien: "http://www.google.fr",
    },
    {
        name: "FrOrganisationUF",
        label: "Accès aux organisations UF",
        lien: "http://www.google.fr",
    },
    {
        name: "FrPratictionerRoleExercice",
        label: "Accès aux rôles exercices des praticiens (implémente FrPratitionerRoleExercice)",
        lien: "http://www.google.fr",
    },
    {
        name: "Group",
        label: "Accès aux groupes",
        lien: "http://www.google.fr",
    },
    {
        name: "HealthcareService",
        label: "Accès aux services de soins",
        lien: "http://www.google.fr",
    },
    {
        name: "HistoryEvent",
        label: "Accès aux évènements d'historisation",
        lien: "http://www.google.fr",
    },
    {
        name: "Immunization",
        label: "Accès aux vaccinations",
        lien: "http://www.google.fr",
    },
    {
        name: "List",
        label: "Accès aux lots de soumission (Partage de Documents de Santé : flux 5B principalement)",
        lien: "http://www.google.fr",
    },
    {
        name: "Location",
        label: "Accès aux emplacements",
        lien: "http://www.google.fr",
    },
    {
        name: "Observation",
        label: "Accès aux observations (constantes)",
        lien: "http://www.google.fr",
    },
    {
        name: "Patient",
        label: "Accès aux patients (supporte FrPatientInsi2 dérivé de FrPatient pour l'extension FrInsiBirthPlace)",
        lien: "http://www.google.fr",
    },
    {
        name: "Practitioner",
        label: "Accès aux praticiens (internes et annuaire RPPS) implémentant FrPractitioner",
        lien: "http://www.google.fr",
    },
    {
        name: "PractitionerRole",
        label: "Accès aux rôles professionnels des praticiens (implémente FrPractitionerRoleProfession)",
        lien: "http://www.google.fr",
    },
    {
        name: "Questionnaire",
        label: "Accès aux questionnaires (formulaires)",
        lien: "http://www.google.fr",
    },
    {
        name: "QuestionnaireResponse",
        label: "Accès aux réponses des questionnaires (formulaires)",
        lien: "http://www.google.fr",
    },
    {
        name: "RelatedPerson",
        label: "Accès aux personnes rattachées (supporte FrRelatedPerson)",
        lien: "http://www.google.fr",
    },
    {
        name: "ValueSet",
        label: "Accès aux nomenclatures du NOS",
        lien: "http://www.google.fr",
    }
]
