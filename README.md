# Projet Frontend React

## 1. Aperçu technique et choix architecturaux

Ce projet est un **frontend développé en React.js** suivant une architecture modulaire pour garantir la clarté, la maintenabilité et l’évolutivité du code.

**Organisation des dossiers :**

- **`assets/`** : ressources statiques (images, icônes, fichiers divers)
- **`components/`** : composants réutilisables (boutons, formulaires, cartes, etc.)
- **`contexts/`** : gestion des contextes React (authentification, thèmes, etc.)
- **`layout/`** : composants de structure globale (sidebar, header, footer)
- **`model/`** : gestion des modèles/données et structures des objets
- **`pages/`** : pages principales de l’application
- **`styles/`** : fichiers de style globaux ou spécifiques (CSS, SCSS, etc.)
- **`App.jsx`** : composant racine qui contient la configuration des routes et la structure globale
- **`main.jsx`** : point d’entrée de l’application
- **`index.css`** & **`App.css`** : styles globaux

**Choix techniques :**

- **React.js** pour la rapidité de développement et la flexibilité.
- **Architecture modulaire** pour séparer clairement les responsabilités.
- **Context API** pour la gestion des états globaux.

---

## 2. Prérequis

Avant de lancer le projet, assurez-vous d’avoir :

- **Node.js** (version 18 ou plus)
- **npm** ou **yarn** comme gestionnaire de packages
- Un éditeur de code comme **VS Code**
- Un navigateur moderne (Chrome, Edge, Firefox)

---

## 3. Installation et exécution locale

    ### a. Cloner le dépôt

    git clone https://github.com/mon-compte/mon-projet.git
    cd mon-projet

    ## c. Installer les dépendances
    npm install ou yarn install( en foction du gestionnaire de dependance que vous utilise)

    ## d. Lancer le projet
    npm run dev

    ## e. L’application sera disponible à l’adresse :
    http://localhost:5173

## 4. Outils d’IA utilisés

Cursor’s Chat – génération et correction de code React

GitHub Copilot – suggestions automatiques et complétion de code

## 5. Prompts clés utilisés

"Crée un composant React pour un dashboard avec sidebar et header responsive"

"Génère une architecture React propre avec Context API et composants réutilisables"

"Optimise les performances et la réutilisabilité d’un composant de filtre dynamique"

## 6. Structures et payloads attendus du backend

Pour ce frontend, le backend doit fournir des données structurées sous format JSON.

Exemple — Authentification utilisateur
{
"id": 1,
"nom": "Dupont",
"email": "dupont@example.com",
"token": "eyJhbGciOiJIUzI1NiIsInR..."
}
