# Guide de Test Responsive Design - УРАЛСИЛТРАНС

## 📱 Tests sur Mobile (320px - 767px)

### Navigation
- [ ] Menu hamburger s'ouvre et se ferme correctement
- [ ] Logo et texte de l'entreprise sont lisibles
- [ ] Bouton "Заказать звонок" est suffisamment grand (min 44px)
- [ ] Navigation mobile couvre toute la largeur

### Hero Section
- [ ] Titre principal est lisible (text-2xl minimum)
- [ ] Sous-titre est lisible (text-lg minimum)
- [ ] Boutons sont touchables (min 44px de hauteur)
- [ ] Hauteur de section adaptée (60vh)
- [ ] Pas de débordement de texte

### Services/Products
- [ ] Grille en 1 colonne sur mobile
- [ ] Cartes ont une hauteur appropriée (h-40)
- [ ] Images sont visibles et optimisées
- [ ] Boutons "Заказать" sont touchables
- [ ] Texte des descriptions est lisible

### Contact Form
- [ ] Layout en colonne unique
- [ ] Champs de formulaire sont suffisamment grands
- [ ] Boutons de toggle Email/Telegram sont touchables
- [ ] Bouton d'envoi est bien visible
- [ ] Informations de contact sont lisibles

### Footer
- [ ] Grille en 1 colonne
- [ ] Texte est lisible (text-sm minimum)
- [ ] Liens sont touchables
- [ ] Informations de contact sont complètes

## 📱 Tests sur Tablet (768px - 1023px)

### Navigation
- [ ] Menu desktop s'affiche correctement
- [ ] Espacement entre les éléments est approprié
- [ ] Bouton CTA est bien positionné

### Hero Section
- [ ] Titre utilise text-4xl
- [ ] Boutons ont un padding approprié
- [ ] Hauteur de section est 70vh

### Services/Products
- [ ] Grille en 2 colonnes
- [ ] Cartes ont une hauteur h-48
- [ ] Espacement entre les cartes est correct

### Contact Form
- [ ] Layout reste en colonne unique
- [ ] Champs de formulaire sont bien dimensionnés
- [ ] Informations de contact sont bien organisées

### Footer
- [ ] Grille en 2 colonnes
- [ ] Espacement est approprié

## 💻 Tests sur Desktop (1024px+)

### Navigation
- [ ] Menu desktop complet s'affiche
- [ ] Espacement xl:space-x-8 est appliqué
- [ ] Bouton CTA a le bon padding

### Hero Section
- [ ] Titre utilise text-6xl ou text-7xl
- [ ] Boutons ont le padding complet
- [ ] Hauteur de section est 80vh
- [ ] Animations fonctionnent correctement

### Services/Products
- [ ] Grille en 3 colonnes
- [ ] Cartes ont une hauteur h-56
- [ ] Effets de hover fonctionnent
- [ ] Animations sont fluides

### Contact Form
- [ ] Layout en 2 colonnes (lg:flex-row)
- [ ] Panneau bleu et formulaire côte à côte
- [ ] Tous les éléments sont bien proportionnés

### Footer
- [ ] Grille en 4 colonnes
- [ ] Tous les éléments sont bien alignés

## 🧪 Tests Fonctionnels

### Menu Mobile
```javascript
// Dans la console du navigateur
const menuBtn = document.querySelector('.lg\\:hidden button');
menuBtn.click(); // Vérifier que le menu s'ouvre
```

### Formulaires
```javascript
// Tester le formulaire de contact
const contactForm = document.querySelector('form');
// Remplir les champs et soumettre
```

### Modal
```javascript
// Tester l'ouverture du modal
const orderBtn = document.querySelector('button:contains("Заказать")');
orderBtn.click(); // Vérifier que le modal s'ouvre
```

## 🔧 Outils de Test

### Chrome DevTools
1. Ouvrir les outils de développement (F12)
2. Cliquer sur l'icône de responsive design
3. Tester les breakpoints suivants:
   - 375px (iPhone SE)
   - 768px (iPad)
   - 1024px (iPad Pro)
   - 1280px (Desktop)

### Script de Test Automatique
```javascript
// Copier le contenu de test-responsive.js dans la console
// Le script vérifiera automatiquement:
// - Breakpoints
// - Tailles des éléments
// - Interactions
// - Performances
```

## 📊 Métriques à Vérifier

### Performance
- [ ] Temps de chargement < 3 secondes
- [ ] Images optimisées avec Next.js Image
- [ ] Polices préchargées
- [ ] Pas de layout shift (CLS)

### Accessibilité
- [ ] Contraste des couleurs suffisant
- [ ] Navigation au clavier possible
- [ ] Labels appropriés sur les formulaires
- [ ] Alt text sur les images

### SEO
- [ ] Meta tags appropriés
- [ ] Structure HTML sémantique
- [ ] URLs propres
- [ ] Sitemap généré

## 🐛 Problèmes Courants à Vérifier

### Mobile
- [ ] Pas de scroll horizontal
- [ ] Texte lisible sans zoom
- [ ] Boutons touchables
- [ ] Menu hamburger fonctionnel

### Tablet
- [ ] Layout adapté à l'orientation
- [ ] Grilles correctes
- [ ] Espacement approprié

### Desktop
- [ ] Animations fluides
- [ ] Hover effects
- [ ] Performance optimale

## ✅ Checklist Finale

### Avant la mise en production
- [ ] Tests sur vrais appareils (pas seulement DevTools)
- [ ] Tests sur différents navigateurs (Chrome, Safari, Firefox)
- [ ] Tests de performance (Lighthouse)
- [ ] Tests d'accessibilité
- [ ] Tests de SEO
- [ ] Validation HTML/CSS
- [ ] Tests de formulaires
- [ ] Tests de navigation

### Après la mise en production
- [ ] Monitoring des erreurs
- [ ] Analytics de performance
- [ ] Feedback utilisateur
- [ ] Tests de charge
- [ ] Tests de sécurité

## 🚀 Commandes Utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer les tests
npm run test

# Vérifier le linting
npm run lint

# Analyser le bundle
npm run analyze
```

## 📞 Support

En cas de problème:
1. Vérifier la console du navigateur
2. Utiliser le script de test automatique
3. Consulter les logs du serveur
4. Tester sur différents appareils
5. Documenter le problème avec des captures d'écran 