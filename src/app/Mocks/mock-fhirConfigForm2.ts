import { FhirConfigForm2Interface } from "../Interfaces/FhirHub/fhirCongifForm2-interface";

export const FHIRConfigForm2: FhirConfigForm2Interface[] = [
    {
        id: 0,
        adresseEndpoint: "mllp://localhost:11000/",
        adresseEndpointDMP: "",
        adresseEndpointMSS: "",
        OIDRacineDMP: "a,b,c,d",
        gestion: "checked",
        age: 18,
        ageMini: 1,
        reevaluation: 7,
        confidentialite: ["checked", "checked", ""],
        confidentialiteLabel: ["autoriser les documents masqués au praticiens ET au patient", "interdire rendre invisible un document visible par le patient", "interdire rendre invisible un document visible par les représentants du patient"],
        automatisation: ["checked", "", "checked"],
        automatisationLabel: ["NE PAS demander une confirmation pour rendre visible un document au patient ou ses représentants", "envoyer automatiquement les documents éligibles vers le DMP au moment de leur signature", "envoyer automatiquement les documents éligibles vers la MSS au moment de leur signature"]
    },
]
