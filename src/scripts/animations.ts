/**
 * Animations du site.
 * - Apparition au défilement des éléments [data-revele], avec un décalage NON uniforme
 *   entre frères : les écarts se resserrent au fil de la rangée (une vague, pas un métronome),
 *   et le groupe entier tient en moins de 0,3 s.
 * - Compteurs [data-compteur] qui défilent jusqu'à leur valeur.
 * - Ombre de l'en-tête dès qu'on fait défiler (sans changer sa taille).
 * Classes posées sur <html> par BaseLayout : « anim » (complet) ou « anim-reduit » (fondus seuls).
 */

const racine = document.documentElement;
const complet = racine.classList.contains('anim');
const reduit = racine.classList.contains('anim-reduit');

// Le script a bien démarré : le filet de sécurité de BaseLayout n'a pas à tout réafficher.
(window as unknown as { __animOk: boolean }).__animOk = true;

/* Décalages non uniformes entre éléments frères */
const DECALAGE_MAX = 260; // ms : durée totale de la vague pour un groupe
const PAS = 70; // ms : écart de référence entre deux éléments
const RANG_MAX = 6; // au-delà, les éléments arrivent avec le 6e

function decalage(rang: number, total: number) {
  if (total <= 1 || reduit) return 0; // animations réduites : tout apparaît ensemble
  const duree = Math.min(PAS * (total - 1), DECALAGE_MAX);
  const t = Math.min(rang, RANG_MAX) / Math.min(total - 1, RANG_MAX);
  return Math.round(duree * (1 - Math.pow(1 - t, 2))); // écarts qui se resserrent
}

const elements = [...document.querySelectorAll<HTMLElement>('[data-revele]')];
const parParent = new Map<Element | null, HTMLElement[]>();
for (const el of elements) {
  const liste = parParent.get(el.parentElement) ?? [];
  liste.push(el);
  parParent.set(el.parentElement, liste);
}
for (const freres of parParent.values()) {
  freres.forEach((el, i) => (el.style.animationDelay = `${decalage(i, freres.length)}ms`));
}

/* Apparitions au défilement */
if ((complet || reduit) && 'IntersectionObserver' in window) {
  const observateur = new IntersectionObserver(
    (entrees) => {
      for (const entree of entrees) {
        if (entree.isIntersecting) {
          entree.target.classList.add('visible');
          observateur.unobserve(entree.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  elements.forEach((el) => observateur.observe(el));
} else {
  elements.forEach((el) => el.classList.add('visible'));
}

/* Compteurs : ils servent à faire remarquer les chiffres, une seule fois */
const formater = new Intl.NumberFormat('fr-FR');

function compter(el: HTMLElement) {
  const cible = Number(el.dataset.compteur);
  if (!Number.isFinite(cible)) return;
  const duree = 900;
  const debut = performance.now();
  const etape = (maintenant: number) => {
    const t = Math.min(1, (maintenant - debut) / duree);
    el.textContent = formater.format(Math.round(cible * (1 - Math.pow(1 - t, 3))));
    if (t < 1) requestAnimationFrame(etape);
  };
  requestAnimationFrame(etape);
}

if (complet && 'IntersectionObserver' in window) {
  const obsCompteurs = new IntersectionObserver(
    (entrees) => {
      for (const entree of entrees) {
        if (entree.isIntersecting) {
          compter(entree.target as HTMLElement);
          obsCompteurs.unobserve(entree.target);
        }
      }
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll<HTMLElement>('[data-compteur]').forEach((el) => obsCompteurs.observe(el));
}

/* Ombre de l'en-tête au défilement : un simple changement de classe, la taille ne bouge pas */
const entete = document.querySelector('.entete');
if (entete) {
  let attente = false;
  const majEntete = () => {
    entete.classList.toggle('defile', window.scrollY > 8);
    attente = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!attente) {
        attente = true;
        requestAnimationFrame(majEntete);
      }
    },
    { passive: true },
  );
  majEntete();
}
