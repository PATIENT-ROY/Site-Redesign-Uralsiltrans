// Script de test pour vérifier le responsive design
// À exécuter dans la console du navigateur

console.log('🔍 Test de Responsive Design - УРАЛСИЛТРАНС');

// Fonction pour vérifier les breakpoints
function checkBreakpoints() {
    const width = window.innerWidth;
    console.log(`📱 Largeur actuelle: ${width}px`);

    if (width < 640) {
        console.log('📱 Mobile (< 640px)');
    } else if (width < 768) {
        console.log('📱 Small Tablet (640px - 767px)');
    } else if (width < 1024) {
        console.log('📱 Tablet (768px - 1023px)');
    } else if (width < 1280) {
        console.log('💻 Desktop (1024px - 1279px)');
    } else {
        console.log('🖥️ Large Desktop (1280px+)');
    }
}

// Fonction pour vérifier les éléments critiques
function checkCriticalElements() {
    const issues = [];

    // Vérifier la navigation
    const header = document.querySelector('header');
    if (header) {
        const mobileMenu = header.querySelector('.lg\\:hidden');
        if (!mobileMenu) {
            issues.push('❌ Menu mobile manquant');
        } else {
            console.log('✅ Menu mobile présent');
        }
    }

    // Vérifier les boutons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn, index) => {
        const rect = btn.getBoundingClientRect();
        if (rect.height < 44) {
            issues.push(`❌ Bouton ${index + 1} trop petit (${rect.height}px)`);
        }
    });

    // Vérifier le texte
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    textElements.forEach((el, index) => {
        const fontSize = parseInt(window.getComputedStyle(el).fontSize);
        if (fontSize < 14) {
            issues.push(`❌ Texte ${index + 1} trop petit (${fontSize}px)`);
        }
    });

    // Vérifier les images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        if (!img.complete || img.naturalWidth === 0) {
            issues.push(`❌ Image ${index + 1} non chargée`);
        }
    });

    // Vérifier le scroll horizontal
    if (document.documentElement.scrollWidth > window.innerWidth) {
        issues.push('❌ Scroll horizontal détecté');
    } else {
        console.log('✅ Pas de scroll horizontal');
    }

    return issues;
}

// Fonction pour tester les interactions
function testInteractions() {
    console.log('🧪 Test des interactions...');

    // Test du menu mobile
    const mobileMenuBtn = document.querySelector('.lg\\:hidden button');
    if (mobileMenuBtn) {
        console.log('✅ Bouton menu mobile trouvé');
    }

    // Test des liens
    const links = document.querySelectorAll('a[href]');
    console.log(`✅ ${links.length} liens trouvés`);

    // Test des formulaires
    const forms = document.querySelectorAll('form');
    console.log(`✅ ${forms.length} formulaires trouvés`);
}

// Fonction pour vérifier les performances
function checkPerformance() {
    console.log('⚡ Vérification des performances...');

    // Vérifier les images optimisées
    const images = document.querySelectorAll('img');
    let optimizedImages = 0;

    images.forEach(img => {
        if (img.sizes || img.srcset) {
            optimizedImages++;
        }
    });

    console.log(`✅ ${optimizedImages}/${images.length} images optimisées`);

    // Vérifier les polices
    const fonts = document.querySelectorAll('link[rel="preload"][as="font"]');
    console.log(`✅ ${fonts.length} polices préchargées`);
}

// Exécuter tous les tests
function runAllTests() {
    console.log('\n🚀 Démarrage des tests de responsive design...\n');

    checkBreakpoints();

    console.log('\n🔍 Vérification des éléments critiques...');
    const issues = checkCriticalElements();

    if (issues.length > 0) {
        console.log('\n⚠️ Problèmes détectés:');
        issues.forEach(issue => console.log(issue));
    } else {
        console.log('\n✅ Aucun problème critique détecté');
    }

    console.log('\n🧪 Test des interactions...');
    testInteractions();

    console.log('\n⚡ Vérification des performances...');
    checkPerformance();

    console.log('\n✅ Tests terminés!');
}

// Exécuter les tests automatiquement
runAllTests();

// Ajouter un listener pour les changements de taille d'écran
window.addEventListener('resize', () => {
    console.log('\n📐 Redimensionnement détecté...');
    checkBreakpoints();
});

// Instructions pour l'utilisateur
console.log('\n📋 Instructions:');
console.log('1. Redimensionnez la fenêtre pour tester différents breakpoints');
console.log('2. Testez sur mobile/tablette avec les outils de développement');
console.log('3. Vérifiez que tous les éléments sont lisibles et accessibles');
console.log('4. Testez les interactions (menu, formulaires, liens)');
console.log('5. Vérifiez qu\'il n\'y a pas de scroll horizontal');

// Exporter les fonctions pour utilisation manuelle
window.responsiveTest = {
    checkBreakpoints,
    checkCriticalElements,
    testInteractions,
    checkPerformance,
    runAllTests
};