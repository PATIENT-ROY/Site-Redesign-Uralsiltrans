# Test de Responsive Design - УРАЛСИЛТРАНС

## Problèmes identifiés et corrections nécessaires

### 1. **Header (Navigation)**
**Problèmes :**
- Bouton "Заказать звонок" trop petit sur mobile
- Espacement insuffisant entre les éléments sur tablette
- Logo peut être trop grand sur petits écrans

**Corrections nécessaires :**
```tsx
// Header.tsx - Améliorations
- Augmenter la taille du bouton CTA sur mobile: `px-4 py-3` au lieu de `px-6 py-2`
- Ajouter `text-sm` pour le texte du logo sur mobile
- Améliorer l'espacement: `space-x-4` au lieu de `space-x-8` sur tablette
```

### 2. **Hero Section**
**Problèmes :**
- Texte trop petit sur mobile (text-4xl → text-2xl)
- Boutons trop grands sur mobile
- Hauteur fixe peut causer des problèmes sur petits écrans

**Corrections nécessaires :**
```tsx
// Hero.tsx - Améliorations
- Titre: `text-2xl sm:text-4xl md:text-6xl lg:text-7xl`
- Boutons: `px-4 py-3 sm:px-8 sm:py-4`
- Hauteur: `h-[60vh] sm:h-[70vh] md:h-[80vh]`
```

### 3. **Services/Products Section**
**Problèmes :**
- Grille 3 colonnes sur desktop peut être trop serrée
- Cartes trop hautes sur mobile
- Boutons "Заказать" trop petits

**Corrections nécessaires :**
```tsx
// Services.tsx - Améliorations
- Grille: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Hauteur des cartes: `h-48 sm:h-56`
- Boutons: `px-4 py-3 sm:px-6 sm:py-3`
```

### 4. **Contact Section**
**Problèmes :**
- Layout en colonnes peut être problématique sur mobile
- Champs de formulaire trop petits
- Boutons de toggle trop petits

**Corrections nécessaires :**
```tsx
// Contact.tsx - Améliorations
- Layout: `flex-col lg:flex-row`
- Champs: `px-4 py-4 sm:px-4 sm:py-3`
- Boutons toggle: `px-3 py-2 sm:px-4 sm:py-2`
```

### 5. **Modal (OrderModal)**
**Problèmes :**
- Modal trop large sur mobile
- Boutons de contact type trop petits
- Espacement insuffisant

**Corrections nécessaires :**
```tsx
// OrderModal.tsx - Améliorations
- Largeur: `max-w-sm sm:max-w-md`
- Boutons: `px-3 py-2 sm:px-4 sm:py-2`
- Espacement: `space-y-3 sm:space-y-4`
```

### 6. **About Pages**
**Problèmes :**
- Grille d'images peut être problématique sur mobile
- Texte trop petit sur mobile
- Espacement insuffisant

**Corrections nécessaires :**
```tsx
// aboutus/page.tsx - Améliorations
- Grille images: `grid-cols-1 sm:grid-cols-2`
- Titre: `text-3xl sm:text-4xl md:text-5xl`
- Espacement: `space-y-16 sm:space-y-24`
```

### 7. **Footer**
**Problèmes :**
- Grille 4 colonnes trop serrée sur mobile
- Texte trop petit
- Espacement insuffisant

**Corrections nécessaires :**
```tsx
// Footer.tsx - Améliorations
- Grille: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Texte: `text-sm sm:text-base`
- Espacement: `space-y-4 sm:space-y-8`
```

## Breakpoints recommandés

```css
/* Mobile First Approach */
/* Base: 320px - 767px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */

/* Classes Tailwind utilisées */
sm: 640px+   /* Small devices */
md: 768px+   /* Medium devices */
lg: 1024px+  /* Large devices */
xl: 1280px+  /* Extra large devices */
2xl: 1536px+ /* 2X large devices */
```

## Tests à effectuer

### Mobile (320px - 767px)
- [ ] Navigation hamburger fonctionne
- [ ] Texte lisible (minimum 16px)
- [ ] Boutons touchables (minimum 44px)
- [ ] Pas de scroll horizontal
- [ ] Images responsives

### Tablet (768px - 1023px)
- [ ] Layout adapté
- [ ] Grilles correctes
- [ ] Espacement approprié
- [ ] Navigation claire

### Desktop (1024px+)
- [ ] Layout optimal
- [ ] Animations fluides
- [ ] Hover effects
- [ ] Performance

## Corrections prioritaires

1. **URGENT** - Header responsive
2. **URGENT** - Hero section mobile
3. **IMPORTANT** - Services grid
4. **IMPORTANT** - Contact form
5. **NORMAL** - Modal improvements
6. **NORMAL** - Footer layout 