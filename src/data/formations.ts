/**
 * Catalogue des formations : liste officielle du document « Site université ESCOGET ».
 * - fiche « detaillee » : un programme a été reçu (dossier d'homologation ou maquette),
 *   la fiche complète sera rédigée en semaine 3.
 * - fiche « courte » : aucune source ; la page affiche l'essentiel et propose de demander le programme.
 * Le rattachement des Licences et Masters aux instituts est une hypothèse
 * (IHECG = commerce et gestion, IHET = technologie) ; l'UFR de droit n'a pas d'institut connu.
 */

export type Niveau = 'BTS' | 'Licence' | 'Master';
export type Domaine = 'gestion' | 'droit' | 'technologie';
export type Institut = 'IHECG' | 'IHET' | null;

export interface Formation {
  slug: string;
  intitule: string;
  sigle?: string;
  niveau: Niveau;
  domaine: Domaine;
  institut: Institut;
  fiche: 'detaillee' | 'courte';
}

export const niveaux: Record<Niveau, { libelle: string; duree: string; acces: string }> = {
  BTS: { libelle: 'BTS', duree: '2 ans', acces: 'Après le baccalauréat' },
  Licence: { libelle: 'Licence professionnelle', duree: '3 ans · 180 crédits', acces: 'Après le baccalauréat ou un BTS' },
  Master: { libelle: 'Master professionnel', duree: '2 ans · 120 crédits', acces: 'Après une Licence' },
};

export const domaines: Record<Domaine, { libelle: string; ufr: string }> = {
  gestion: { libelle: 'Économie, commerce et gestion', ufr: 'UFR de science économique et de gestion' },
  droit: { libelle: 'Droit et sciences politiques', ufr: 'UFR de droit, de science administrative et politique' },
  technologie: { libelle: 'Sciences et technologies', ufr: 'UFR de science et de technologie' },
};

export const formations: Formation[] = [
  // BTS — filières tertiaires (IHECG)
  { slug: 'bts-ressources-humaines-communication', intitule: 'Ressources humaines et communication', sigle: 'RHCOM', niveau: 'BTS', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'bts-gestion-commerciale', intitule: 'Gestion commerciale', sigle: 'GESCOM', niveau: 'BTS', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'bts-finance-comptabilite-gestion', intitule: 'Finance, comptabilité et gestion des entreprises', sigle: 'FCGE', niveau: 'BTS', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'bts-logistique-transport', intitule: 'Logistique et transport', sigle: 'LOG', niveau: 'BTS', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  // BTS — filières industrielles (IHET)
  { slug: 'bts-informatique-developpeur-application', intitule: 'Informatique, développeur d’application', sigle: 'IDA', niveau: 'BTS', domaine: 'technologie', institut: 'IHET', fiche: 'courte' },
  { slug: 'bts-reseaux-informatiques-telecommunication', intitule: 'Réseaux informatiques et télécommunication', sigle: 'RIT', niveau: 'BTS', domaine: 'technologie', institut: 'IHET', fiche: 'courte' },
  { slug: 'bts-electrotechnique-maintenance-industrielle', intitule: 'Électrotechnique et maintenance industrielle', sigle: 'ELT', niveau: 'BTS', domaine: 'technologie', institut: 'IHET', fiche: 'courte' },
  { slug: 'bts-systemes-electroniques-industriels', intitule: 'Systèmes électroniques industriels', sigle: 'SEI', niveau: 'BTS', domaine: 'technologie', institut: 'IHET', fiche: 'courte' },
  { slug: 'bts-genie-civil-batiment', intitule: 'Génie civil, option bâtiment', sigle: 'GBAT', niveau: 'BTS', domaine: 'technologie', institut: 'IHET', fiche: 'courte' },
  { slug: 'bts-gestion-environnement-ressources-naturelles', intitule: 'Gestion de l’environnement et des ressources naturelles', sigle: 'GERNA', niveau: 'BTS', domaine: 'technologie', institut: 'IHET', fiche: 'courte' },

  // Licences — UFR de science économique et de gestion
  { slug: 'licence-sciences-economiques', intitule: 'Sciences économiques', niveau: 'Licence', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'licence-marketing-vente', intitule: 'Marketing vente', sigle: 'LP MV', niveau: 'Licence', domaine: 'gestion', institut: 'IHECG', fiche: 'detaillee' },
  { slug: 'licence-communication-relations-publiques', intitule: 'Communication, option relations publiques', niveau: 'Licence', domaine: 'gestion', institut: 'IHECG', fiche: 'detaillee' },
  { slug: 'licence-gestion-ressources-humaines', intitule: 'Gestion des ressources humaines', niveau: 'Licence', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'licence-finance-comptabilite', intitule: 'Finance comptabilité', sigle: 'LP FC', niveau: 'Licence', domaine: 'gestion', institut: 'IHECG', fiche: 'detaillee' },

  // Licences — UFR de droit
  { slug: 'licence-droit-prive', intitule: 'Droit privé', niveau: 'Licence', domaine: 'droit', institut: null, fiche: 'courte' },
  { slug: 'licence-droit-public', intitule: 'Droit public', niveau: 'Licence', domaine: 'droit', institut: null, fiche: 'courte' },

  // Licences — UFR de science et de technologie
  { slug: 'licence-informatique-genie-logiciel', intitule: 'Informatique, option génie logiciel', sigle: 'LP IGL', niveau: 'Licence', domaine: 'technologie', institut: 'IHET', fiche: 'detaillee' },
  { slug: 'licence-electrotechnique-maintenance-industrielle', intitule: 'Électrotechnique et maintenance industrielle', niveau: 'Licence', domaine: 'technologie', institut: 'IHET', fiche: 'detaillee' },
  { slug: 'licence-genie-civil-batiment', intitule: 'Génie civil, option bâtiment', sigle: 'LP GBAT', niveau: 'Licence', domaine: 'technologie', institut: 'IHET', fiche: 'detaillee' },

  // Masters — UFR de science économique et de gestion
  { slug: 'master-economie-monetaire-internationale', intitule: 'Économie monétaire internationale', niveau: 'Master', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'master-politique-economique', intitule: 'Politique économique', niveau: 'Master', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'master-marketing-management', intitule: 'Marketing management', niveau: 'Master', domaine: 'gestion', institut: 'IHECG', fiche: 'detaillee' },
  { slug: 'master-marketing-digital', intitule: 'Marketing digital', niveau: 'Master', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'master-gestion-ressources-humaines', intitule: 'Gestion des ressources humaines', niveau: 'Master', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'master-audit-controle-gestion', intitule: 'Audit et contrôle de gestion', niveau: 'Master', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'master-finance-marches-capitaux', intitule: 'Finance et marché des capitaux', niveau: 'Master', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },
  { slug: 'master-techniques-comptables-financieres', intitule: 'Techniques comptables et financières', niveau: 'Master', domaine: 'gestion', institut: 'IHECG', fiche: 'courte' },

  // Masters — UFR de droit
  { slug: 'master-droit-affaires-fiscalite', intitule: 'Droit des affaires et fiscalité', niveau: 'Master', domaine: 'droit', institut: null, fiche: 'courte' },
  { slug: 'master-droit-international-humanitaire', intitule: 'Droit international et humanitaire', niveau: 'Master', domaine: 'droit', institut: null, fiche: 'courte' },
  { slug: 'master-droit-maritime-activites-portuaires', intitule: 'Droit maritime et activités portuaires', niveau: 'Master', domaine: 'droit', institut: null, fiche: 'courte' },
  { slug: 'master-droit-bancaire-marches-financiers', intitule: 'Droit bancaire et marchés financiers', niveau: 'Master', domaine: 'droit', institut: null, fiche: 'courte' },

  // Masters — UFR de science et de technologie
  { slug: 'master-informatique-genie-logiciel', intitule: 'Informatique, option génie logiciel', niveau: 'Master', domaine: 'technologie', institut: 'IHET', fiche: 'detaillee' },
  { slug: 'master-electrotechnique-maintenance-industrielle', intitule: 'Électrotechnique et maintenance industrielle', niveau: 'Master', domaine: 'technologie', institut: 'IHET', fiche: 'courte' },
  { slug: 'master-genie-civil-batiment', intitule: 'Génie civil, option bâtiment', niveau: 'Master', domaine: 'technologie', institut: 'IHET', fiche: 'detaillee' },
];

export const compterParNiveau = (n: Niveau) => formations.filter((f) => f.niveau === n).length;
