/**
 * Témoignages des anciens étudiants.
 *
 * PROVISOIRE : les textes ci-dessous sont des exemples, en attendant les vrais
 * témoignages des anciens. Tant que `provisoire` vaut true, la page affiche
 * un bandeau « exemples » et n'est pas indexée par les moteurs de recherche.
 *
 * Pour remplacer :
 * 1. Déposer la photo de l'ancien dans public/images/temoignages/ (format carré
 *    ou portrait, 600 px de large minimum), par exemple « aminata-kone.jpg ».
 * 2. Remplacer une entrée ci-dessous : nom, formation, promotion, poste, texte,
 *    et photo: 'aminata-kone.jpg'. Sans photo, les initiales s'affichent.
 * 3. Une fois tous les exemples remplacés, passer `provisoire` à false.
 * Le premier témoignage de la liste est mis en avant en haut de la page.
 */

export const provisoire = true;

/** Initiales affichées à la place de la photo tant qu'elle n'est pas fournie. */
export const initiales = (nom: string) =>
  nom
    .split(/[\s-]+/)
    .map((m) => m[0])
    .join('')
    .replace(/[^A-ZÀ-Ý]/g, '')
    .slice(0, 2);

export interface Temoignage {
  nom: string;
  formation: string;     // diplôme obtenu à l'ESCOGET
  promotion: string;     // année de sortie
  poste: string;         // fonction et entreprise actuelles
  texte: string;
  photo?: string;        // nom du fichier dans public/images/temoignages/
}

export const temoignages: Temoignage[] = [
  {
    nom: 'Aminata K.',
    formation: 'Master Marketing management',
    promotion: '2018',
    poste: 'Responsable marketing dans une entreprise de distribution',
    texte:
      'Les études de cas et les stages m’ont appris à passer de la théorie au terrain. Quand je suis arrivée en entreprise, je savais déjà monter un plan marketing et le défendre devant une direction.',
  },
  {
    nom: 'Serge D.',
    formation: 'Licence Électrotechnique et maintenance industrielle',
    promotion: '2016',
    poste: 'Technicien de maintenance dans l’industrie',
    texte:
      'Les travaux pratiques en atelier ont fait la différence. J’ai été recruté à la fin de mon stage de troisième année.',
  },
  {
    nom: 'Fatou B.',
    formation: 'Master Audit et contrôle de gestion',
    promotion: '2020',
    poste: 'Auditrice junior dans un cabinet',
    texte:
      'Des enseignants qui viennent du monde professionnel, une vraie exigence et un suivi personnalisé : c’est ce qui m’a préparée aux missions d’audit.',
  },
  {
    nom: 'Jean-Marc A.',
    formation: 'Master Droit des affaires et fiscalité',
    promotion: '2019',
    poste: 'Juriste d’entreprise',
    texte:
      'Le Master m’a donné une base solide en fiscalité et en droit des sociétés, et surtout la méthode pour aborder un dossier concret.',
  },
  {
    nom: 'Mariam T.',
    formation: 'Master Informatique, option génie logiciel',
    promotion: '2021',
    poste: 'Développeuse dans une start-up',
    texte:
      'Les projets en équipe et l’association ESCO-TIC m’ont permis de construire un vrai portfolio avant même la fin de mes études.',
  },
  {
    nom: 'Koffi N.',
    formation: 'Licence Gestion des ressources humaines',
    promotion: '2017',
    poste: 'Chargé de recrutement',
    texte:
      'J’ai gardé le réseau construit pendant mes années à l’ESCOGET : camarades, enseignants, maîtres de stage. Il m’accompagne encore aujourd’hui.',
  },
  {
    nom: 'Awa S.',
    formation: 'Master Finance et marché des capitaux',
    promotion: '2022',
    poste: 'Analyste financière dans une banque',
    texte:
      'La rigueur demandée en cours m’a beaucoup servi. Le Global Management Challenge m’a aussi appris à décider vite, en équipe et sous pression.',
  },
];
