/**
 * Formulaires (contact, demande d'admission).
 * Le site est encore local : aucun envoi n'a lieu. Après la validation du navigateur,
 * un message indique que l'envoi sera activé à la mise en ligne.
 * À la mise en ligne, remplacer ce comportement par l'envoi vers le script de l'hébergement.
 */

document.querySelectorAll<HTMLFormElement>('form[data-formulaire]').forEach((formulaire) => {
  const message = formulaire.querySelector<HTMLElement>('[data-message]');

  formulaire.addEventListener('submit', (evenement) => {
    evenement.preventDefault();
    if (!formulaire.checkValidity()) {
      formulaire.reportValidity();
      return;
    }
    if (message) {
      message.hidden = false;
      message.textContent =
        'Formulaire de démonstration : vos informations sont valides, mais l’envoi sera activé à la mise en ligne du site. Rien n’a été transmis.';
      message.focus();
    }
  });
});
