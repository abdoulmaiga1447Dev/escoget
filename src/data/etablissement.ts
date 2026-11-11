/**
 * Informations sur l'établissement, consolidées à partir des documents fournis par l'Université.
 * Les valeurs marquées « A_CONFIRMER » viennent de documents contradictoires :
 * elles s'affichent sur le site local mais doivent être validées avant la mise en ligne.
 */

export const A_CONFIRMER = true;

export const etablissement = {
  nom: 'Université ESCOGET',
  nomComplet: 'Université École Supérieure de Commerce, de Gestion et de Technologie',
  creation: 1986,
  reconnaissanceEtat: '7 mai 1987',
  autorisation: 'Autorisation d’ouverture N° 547 METFP/DFPIC/KKB',
  credo:
    'Pour réussir, il faut avoir de meilleures idées que les autres et ces idées, les mettre en pratique en travaillant plus et mieux que les autres.',

  vision:
    'Construire une institution d’enseignement supérieur privée de qualité, capable de rivaliser avec les meilleures business schools.',
  mission:
    'Donner aux étudiants une solide formation débouchant sur l’emploi et l’entrepreneuriat, afin de contribuer au développement économique et social.',
  valeurs: [
    'L’amour du travail bien fait',
    'Le goût de la réussite par l’effort permanent',
    'Le professionnalisme et l’innovation',
    'La rigueur, la discipline et l’éthique',
  ],

  atouts: [
    {
      titre: 'Des formations professionnelles',
      texte:
        'Des programmes conçus avec le monde de l’entreprise, du BTS au Master, pour être opérationnel dès la sortie.',
    },
    {
      titre: 'Des stages à chaque étape',
      texte:
        'Au moins deux mois de stage en entreprise en 1re et 2e année de Licence, puis quatre mois en dernière année, conclus par un mémoire.',
    },
    {
      titre: 'Un accompagnement vers l’emploi',
      texte:
        'Le CFCP prépare les étudiants au recrutement (CV, entretiens) et met en relation diplômés et entreprises.',
    },
    {
      titre: 'Un cadre propice aux études',
      texte:
        'Salles informatiques connectées, bibliothèque physique et numérique, Wi-Fi sur le campus, salles de conférence.',
    },
  ],

  president: {
    nom: 'Dr ELETE AKA',
    titre: 'Président', // A_CONFIRMER : « Président », « PDG » ou « Directeur Général » selon les documents
    // Extrait affiché sur l'accueil (2e paragraphe du mot du Président).
    extrait:
      'Un enseignement de base solide est fondamental : il doit permettre à nos jeunes d’apprendre tout au long de leur carrière, grâce à la formation permanente, afin de mieux s’adapter à des métiers qui changent.',
    // Texte du document « Site université ESCOGET », orthographe corrigée.
    mot: [
      'Nous avons toujours pensé que l’évolution accélérée de la société africaine fait qu’aujourd’hui formation et vie professionnelle sont de moins en moins des étapes successives de l’existence : elles se juxtaposent et même s’imbriquent.',
      'C’est pourquoi un enseignement de base solide est fondamental : il doit permettre à nos jeunes d’apprendre tout au long de leur carrière, grâce à la formation permanente, afin de mieux s’adapter à des métiers qui changent.',
      'S’appuyant sur un corps professoral de haut niveau ayant l’expérience de plusieurs univers de référence et sur ses liens privilégiés avec le monde des affaires, l’Université ESCOGET a su créer les programmes de formation que son marché lui demandait.',
      'L’ambition de l’Université ESCOGET, former des hommes et des femmes, jeunes ou adultes, qui contribuent à faire gagner leur entreprise, ainsi que son ouverture sur l’international, font qu’elle est devenue aujourd’hui la base d’un centre de management, de gestion et de technologie qui rivalise avec les meilleurs.',
    ],
  },

  // Texte « Formation » du document de présentation, orthographe corrigée.
  presentation: [
    'Depuis sa création, l’Université ESCOGET s’attache à former des hommes et des femmes de haut niveau, parce que nous restons persuadés que l’homme constitue la ressource et la richesse premières d’une entreprise ou de toute autre organisation.',
    'La mission d’enseignement de l’Université ESCOGET est donc avant tout professionnelle. À l’écoute de l’économie et de son évolution, l’Université renouvelle sans cesse ses programmes pour préparer les jeunes, et un nombre croissant d’adultes à travers la formation continue, aux compétences et qualifications nécessaires pour être de bons professionnels de leur temps.',
    'Face à l’impératif de faire reconnaître nos diplômes au plus haut niveau, notre politique éducative s’inspire des grands défis que les entreprises doivent relever pour demeurer dans la compétition internationale.',
  ],

  direction: [
    { nom: 'Dr ELETE AKA', fonction: 'Président' }, // A_CONFIRMER : titre exact
    { nom: 'Pr ASSANDE Adom', fonction: 'Directeur académique, président du Conseil pédagogique et scientifique' }, // A_CONFIRMER : grade
    { nom: 'M. KADJA Alain', fonction: 'Directeur pédagogique de l’IHECG' },
    { nom: 'M. KOPOIN Kopoin Appolinaire', fonction: 'Directeur pédagogique de l’IHET' },
    { nom: 'M. ELLO Vangah', fonction: 'Directeur administratif et financier' },
    { nom: 'M. OCHOU Marius Pacôme', fonction: 'Directeur du CFCP' },
  ],

  // Seuls les partenariats concordants entre documents. Les autres (UFHB, Clermont-Ferrand,
  // entreprises de stage) sont à confirmer avec l'Université.
  partenaires: [
    { nom: 'UPESUP-CI', texte: 'Union patronale de l’enseignement supérieur privé de Côte d’Ivoire, qui valide les programmes de Master.' },
    { nom: 'SIPRA', texte: 'Convention de collaboration depuis 2011 : stages et projets d’étudiants.' },
  ],

  visitesEntreprises: ['SIR', 'Fraternité Matin', 'RTI', 'Port Autonome d’Abidjan', 'Nestlé'],

  historique: [
    { annee: '1986', texte: 'Création de l’École Supérieure de Vente, de Marketing et de Management (ESVM), le 16 juin.' },
    { annee: '1987', texte: 'Reconnaissance par l’État, le 7 mai.' },
    { annee: '1994', texte: 'Ouverture des filières de gestion : l’école devient l’ESCGE et délocalise des diplômes de troisième cycle avec l’Université Clermont-Ferrand 1.' },
    { annee: '2012', texte: 'Ouverture des filières techniques et industrielles : naissance du Groupe ESCOGET et de l’IHET.' },
    { annee: '2024', texte: 'L’établissement adopte l’identité Université ESCOGET.' }, // A_CONFIRMER : date du passage en université
  ],

  instituts: [
    {
      sigle: 'IHECG',
      nom: 'Institut des Hautes Études Commerciales et de Gestion',
      depuis: 1986,
      texte:
        'Forme des techniciens supérieurs, cadres et dirigeants aux métiers du commerce, du management, du marketing, de la communication, de la comptabilité, de la finance, des ressources humaines et de l’entrepreneuriat.',
      lien: '/instituts/ihecg',
      responsable: { nom: 'M. KADJA Alain', fonction: 'Directeur pédagogique' },
      pointsForts: [
        'Le premier institut de l’établissement, à l’origine de l’ESVM en 1986',
        'Des cas d’entreprise, des jeux de rôles et des stages à chaque année',
        'Un centre de recherche en marketing et entrepreneuriat (CREME)',
      ],
    },
    {
      sigle: 'IHET',
      nom: 'Institut des Hautes Études Technologiques',
      depuis: 2012,
      texte:
        'Forme des techniciens supérieurs, cadres et dirigeants dans les filières technologiques et industrielles : informatique, réseaux et télécoms, électrotechnique, génie civil, environnement.',
      lien: '/instituts/ihet',
      responsable: { nom: 'M. KOPOIN Kopoin Appolinaire', fonction: 'Directeur pédagogique' },
      pointsForts: [
        'Des salles spécialisées : télécommunications, bâtiment, électrotechnique, multimédia',
        'Deux salles informatiques d’environ soixante postes connectés',
        'Un centre de recherche en innovation technologique (CRIT)',
      ],
    },
    {
      sigle: 'CFCP',
      nom: 'Cabinet de Formation, de Conseils et de Placement',
      depuis: 1986,
      texte:
        'Formation continue des salariés (stages inter-entreprises et sur mesure), études et conseil aux entreprises, recrutement et placement des diplômés.',
      lien: '/instituts/cfcp',
      responsable: { nom: 'M. OCHOU Marius Pacôme', fonction: 'Directeur' },
      pointsForts: [
        'Agréé par le FNR depuis 1986 et par le FDFP depuis 1992',
        'Des consultants de haut niveau, issus de plusieurs univers professionnels',
        'Recrutement et placement des diplômés depuis 2012',
      ],
    },
  ],

  campus: [
    {
      nom: 'Campus de la Riviera Palmeraie',
      adresse: [
        'Riviera Palmeraie, près de la Cité Sipim 3',
        'En face des Cours Notre-Dame de la Paix',
        'Abidjan, Cocody',
      ],
      principal: true,
    },
    {
      nom: 'Site du Plateau',
      adresse: ['Abidjan, Plateau'], // A_CONFIRMER : adresse précise et activité du site
      principal: false,
    },
  ],

  boitePostale: '01 BP 1368 Abidjan 01, Côte d’Ivoire',
  telephones: ['+225 27 22 49 49 53', '+225 27 20 32 20 63'], // A_CONFIRMER : numéros contradictoires dans les documents
  email: 'contact@universite-escoget.ci', // A_CONFIRMER : dépend du futur nom de domaine

  vieEtudiante: {
    bureau: 'ESCOFEDERATION',
    associations: [
      { nom: 'ESCO-COM', texte: 'Communication, journal ESCO-NEWS, reportages' },
      { nom: 'ESCO-MANAGEMENT', texte: 'Management et entrepreneuriat' },
      { nom: 'ESCO-ENGLISH', texte: 'Club d’anglais' },
      { nom: 'ESCO-TIC', texte: 'Informatique et numérique' },
      { nom: 'ESCO-BAT', texte: 'Bâtiment, AutoCAD, ArchiBat' },
      { nom: 'ESCO-FOOT', texte: 'Tournoi Maracana inter-filières' },
      { nom: 'L’ESCO’ART', texte: 'Arts et culture' },
      { nom: 'ESCO-ENVIRONNEMENT', texte: 'Actions humanitaires et environnement' },
    ],
    evenements: [
      { nom: 'ESCO-LLENCE DAYS', texte: 'Les journées de l’excellence et du mérite, qui récompensent les meilleurs étudiants.' },
      { nom: 'Global Management Challenge', texte: 'Compétition de stratégie et de gestion d’entreprise par équipes.' },
      { nom: 'Sika Invest Challenge', texte: 'Concours autour de l’investissement et de la finance.' },
      { nom: 'Journées culturelles', texte: 'Fêtes, tournois de scrabble et d’échecs, tournoi de football Maracana inter-filières.' },
    ],
    services: [
      { nom: 'Bibliothèque', texte: 'Bibliothèque physique et bibliothèque numérique, avec postes connectés.' },
      { nom: 'Salles informatiques', texte: 'Deux salles d’environ soixante ordinateurs connectés à Internet, Wi-Fi sur le campus.' },
      { nom: 'Restauration et infirmerie', texte: 'Un restaurant et une infirmerie sur le campus.' },
      { nom: 'Lieux de prière', texte: 'Des espaces pour les étudiants chrétiens et musulmans.' },
    ],
    accompagnement: [
      { nom: 'Tutorat et parrainage', texte: 'Chaque étudiant peut être suivi par un tuteur et parrainé par un aîné.' },
      { nom: 'Préparation à l’emploi', texte: 'Le CFCP aide à rédiger CV et lettres de motivation, prépare aux entretiens et aux tests.' },
      { nom: 'Centre incubateur', texte: 'Un accompagnement pour les étudiants qui veulent créer leur entreprise.' },
      { nom: 'Agence Emploi Jeunes', texte: 'Chaque étudiant s’inscrit sur la plateforme de l’agence pour accéder aux offres.' },
    ],
  },

  chiffres: [
    { valeur: '1986', libelle: 'Année de création' },
    { valeur: '35', libelle: 'Formations, du BTS au Master' },
    { valeur: '1 590', libelle: 'Places sur deux sites' }, // A_CONFIRMER : capacité d’accueil des dossiers d’homologation
    { valeur: '1987', libelle: 'Reconnu par l’État' },
  ],
};
