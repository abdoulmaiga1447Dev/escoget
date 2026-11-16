// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Les anciennes adresses renvoient vers les nouvelles pages (UFR, formation continue, vie estudiantine).
  redirects: {
    '/instituts': '/ufr',
    '/instituts/ihecg': '/ufr/science-economique-gestion',
    '/instituts/ihet': '/ufr/science-technologie',
    '/instituts/cfcp': '/formation-continue',
    '/vie-etudiante': '/vie-estudiantine',
  },
});
