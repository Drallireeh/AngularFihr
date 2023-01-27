import { FhirConfigForm2Interface } from "../Interfaces/FhirHub/fhirCongifForm2-interface";

export const FHIRConfigForm2: FhirConfigForm2Interface[] = [
    {
        id: 0,
        adresseEndpoint: "mllp://localhost:11000/",
        adresseEndpointDMP: "",
        adresseEndpointMSS: "",
        OIDRacineDMP: "a,b,c,d",
        gestion: false,
        age: 18,
        ageMini: 1,
        reevaluation: 7,
        confidentialite: [true, false, false],
        confidentialiteLabel: ["autoriser les documents masqués au praticiens ET au patient", "interdire rendre invisible un document visible par le patient", "interdire rendre invisible un document visible par les représentants du patient"],
        automatisation: [true, true, false],
        automatisationLabel: ["NE PAS demander une confirmation pour rendre visible un document au patient ou ses représentants", "envoyer automatiquement les documents éligibles vers le DMP au moment de leur signature", "envoyer automatiquement les documents éligibles vers la MSS au moment de leur signature"]
    },
    {
        id: 1,
        adresseEndpoint: "mllp://localhost:11000/",
        adresseEndpointDMP: "",
        adresseEndpointMSS: "",
        OIDRacineDMP: "a,b,c,d",
        gestion: false,
        age: 18,
        ageMini: 1,
        reevaluation: 7,
        confidentialite: [true, false, false],
        confidentialiteLabel: ["autoriser les documents masqués au praticiens ET au patient", "interdire rendre invisible un document visible par le patient", "interdire rendre invisible un document visible par les représentants du patient"],
        automatisation: [true, true, false],
        automatisationLabel: ["NE PAS demander une confirmation pour rendre visible un document au patient ou ses représentants", "envoyer automatiquement les documents éligibles vers le DMP au moment de leur signature", "envoyer automatiquement les documents éligibles vers la MSS au moment de leur signature"]
    },
]
