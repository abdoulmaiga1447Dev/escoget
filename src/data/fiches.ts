/**
 * Fiches détaillées des formations.
 * Rédigées à partir des dossiers d'homologation des formations.
 * Semaine 1 : la Licence Marketing vente sert de modèle ; les autres fiches détaillées
 * seront ajoutées en semaine 3. Les volumes horaires contradictoires dans les documents
 * ne sont pas affichés (UE sans « heures »).
 */

export interface UE {
  intitule: string;
  heures?: number;
  ecue?: string[];
}

export interface Semestre {
  nom: string;
  annee: string;
  ues: UE[];
  note?: string;
}

export interface FicheDetaillee {
  accroche: string;
  objectifs: string[];
  competences: string[];
  admission: string[];
  debouches: string[];
  semestres: Semestre[];
  stages: string[];
  rythme?: string;
  responsable?: { nom: string; fonction: string };
}

/** Règles communes à toutes les Licences professionnelles (dossiers d'homologation). */
export const reglesLicence = {
  organisation: [
    'Système LMD : 3 ans, 6 semestres, 180 crédits.',
    'Chaque année : 600 heures de cours en présentiel et 900 heures de travail personnel.',
    'Cours magistraux, travaux dirigés, travaux pratiques, études de cas et jeux de rôles.',
  ],
  evaluation: [
    'Contrôle continu (40 %) et examen de fin de semestre (60 %).',
    'Une session de rattrapage à la fin de chaque semestre.',
    'Une unité d’enseignement est validée avec une moyenne de 10/20.',
    'Passage en année supérieure avec 60 crédits.',
  ],
  diplome: [
    '180 crédits obtenus sur les trois années.',
    'Mémoire de fin d’études ou projet professionnel noté au moins 10/20, soutenu devant un jury qui comprend un représentant de l’entreprise d’accueil.',
  ],
  stages: [
    'Stage d’au moins deux mois en entreprise pendant les vacances, en 1re et en 2e année.',
    'Stage d’au moins quatre mois au dernier semestre, qui donne lieu au mémoire.',
  ],
};

/** Règles communes aux Masters professionnels. */
export const reglesMaster = {
  organisation: ['2 ans, 4 semestres, 120 crédits.', 'Stage professionnel au dernier semestre.'],
};

export const fiches: Record<string, FicheDetaillee> = {
  'licence-marketing-vente': {
    accroche:
      'Une formation complète en marketing, vente et négociation commerciale, pour concevoir une offre, la vendre et animer une équipe commerciale.',
    objectifs: [
      'Donner une formation approfondie en marketing, distribution, vente et négociation, communication, promotion des ventes et management de la force de vente.',
      'Former des professionnels capables de développer un produit ou une gamme, de sa conception à sa gestion commerciale.',
      'Compléter la spécialité par une solide formation générale : anglais, informatique, droit, gestion et entrepreneuriat.',
    ],
    competences: [
      'Analyser un marché et réaliser une étude de marché',
      'Vendre et négocier',
      'Élaborer une stratégie marketing et un plan d’action commercial',
      'Organiser et animer une équipe et un service commercial',
      'Concevoir une stratégie de communication et de promotion',
    ],
    admission: [
      'Être titulaire du baccalauréat (séries A, B, C, D) ou d’un diplôme équivalent.',
      'Étude du dossier de candidature.',
      'Test d’entrée écrit : résumé de texte, culture générale, anglais, mathématiques, analyse économique et tests psychotechniques.',
      'Entretien avec un jury composé de représentants de l’école, des enseignants et du monde de l’entreprise.',
    ],
    debouches: [
      'Vendeur, technico-commercial',
      'Promoteur des ventes, merchandiseur',
      'Chef de secteur, chef des ventes',
      'Responsable commercial',
      'Assistant chef de produit, chef de produit',
      'Assistant marketing, responsable marketing',
      'Chargé d’études marketing',
      'Chargé de communication et de relations publiques',
    ],
    semestres: [
      {
        nom: 'Semestre 1',
        annee: '1re année',
        ues: [
          { intitule: 'Économie générale', heures: 40 },
          { intitule: 'Économie et organisation des entreprises', heures: 40 },
          { intitule: 'Droit 1', heures: 60, ecue: ['Introduction générale au droit', 'Droit civil', 'Droit administratif'] },
          { intitule: 'Statistique descriptive', heures: 50 },
          { intitule: 'Informatique générale et Internet', heures: 50 },
          { intitule: 'Anglais général', heures: 60 },
        ],
      },
      {
        nom: 'Semestre 2',
        annee: '1re année',
        ues: [
          { intitule: 'Initiation à la comptabilité', heures: 50 },
          { intitule: 'Mathématiques financières', heures: 40 },
          { intitule: 'Informatique appliquée 1', heures: 40 },
          { intitule: 'Marketing fondamental', heures: 60, ecue: ['Fondements et concepts du marketing', 'Techniques d’études de marché et action terrain'] },
          { intitule: 'Marketing-mix', heures: 50 },
          { intitule: 'Techniques d’expression et langue', heures: 60, ecue: ['Techniques d’expression', 'Anglais des affaires'] },
        ],
      },
      {
        nom: 'Semestre 3',
        annee: '2e année',
        ues: [
          { intitule: 'Statistique appliquée et informatique', heures: 50, ecue: ['Statistique appliquée', 'Informatique appliquée 2'] },
          { intitule: 'Marketing et commerce international', ecue: ['Marketing international', 'Initiation aux techniques du commerce international'] },
          { intitule: 'Stratégie marketing et plan d’action commercial', heures: 60 },
          { intitule: 'E-marketing', heures: 30 },
          { intitule: 'Vente et management des ventes 1', heures: 60, ecue: ['Techniques de vente et de négociation 1', 'Prévision des ventes', 'Management de la force de vente'] },
        ],
      },
      {
        nom: 'Semestre 4',
        annee: '2e année',
        ues: [
          { intitule: 'Mathématiques et fiscalité', ecue: ['Mathématiques appliquées', 'Fiscalité des entreprises'] },
          { intitule: 'Gestion', heures: 60, ecue: ['Gestion des approvisionnements et des stocks', 'Analyse et calcul des coûts'] },
          { intitule: 'Droit 2', ecue: ['Droit des sociétés commerciales', 'Droit social', 'Droit de la concurrence', 'Droit de la communication'] },
          { intitule: 'Distribution et merchandising', heures: 50, ecue: ['Distribution et appareil commercial ivoirien', 'Merchandising'] },
          { intitule: 'Communication professionnelle et langue', heures: 60, ecue: ['Anglais des affaires', 'Communication professionnelle'] },
          { intitule: 'Informatique appliquée au marketing', heures: 30 },
        ],
      },
      {
        nom: 'Semestre 5',
        annee: '3e année',
        ues: [
          { intitule: 'Management et entrepreneuriat', heures: 60, ecue: ['Management', 'Entrepreneuriat'] },
          { intitule: 'Analyse et calcul des coûts 2', heures: 30 },
          { intitule: 'Stratégie marketing et communication', heures: 60, ecue: ['Études de cas marketing', 'Gestion des marques', 'Stratégie de communication marketing'] },
          { intitule: 'Études et recherche en marketing', heures: 60 },
          { intitule: 'Vente et management des ventes 2', heures: 60 },
          { intitule: 'Techniques du commerce international 2', heures: 60, ecue: ['Transit et douane', 'Transport', 'Financement du commerce international'] },
          { intitule: 'Connaissances complémentaires', heures: 40, ecue: ['Anglais de spécialité', 'Informatique appliquée au marketing 2'] },
        ],
      },
      {
        nom: 'Semestre 6',
        annee: '3e année',
        ues: [],
        note: 'Stage en entreprise d’au moins quatre mois, puis rédaction et soutenance d’un mémoire ou d’un projet professionnel devant un jury.',
      },
    ],
    stages: [
      'Stages d’été de deux mois minimum en 1re et 2e année : vente, force de vente, politique produit, études de marché, communication.',
      'Stage de quatre mois au semestre 6, base du mémoire de fin d’études.',
    ],
    rythme: 'Les deux premières années se déroulent à plein temps ; la troisième année alterne cours et stage en entreprise.',
    responsable: { nom: 'M. KADJA Alain', fonction: 'Responsable académique de la filière' },
  },
};
