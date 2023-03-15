# NgRx

NgRx est une bibliothèque open source pour la gestion d'état dans les  applications Angular. Elle est basée sur le patron de conception Redux  et permet de stocker et de gérer l'état de l'application de manière  prévisible et centralisée.

## Concepts de base

Les concepts de base de NgRx sont les suivants :

* Actions : Les actions sont des objets simples qui décrivent un événement  qui s'est produit dans l'application. Elles sont utilisées pour  déclencher des changements d'état dans l'application.
* Reducers : Les reducers sont des fonctions pures qui prennent l'état  courant de l'application et une action en entrée, et retournent un  nouvel état de l'application en sortie. Les reducers sont utilisés pour  effectuer des modifications de l'état de l'application en réponse aux  actions.
* selectors : Les selectors sont des fonctions qui permettent d'accéder à  une partie spécifique de l'état de l'application. Ils permettent de  filtrer, trier ou transformer les données stockées dans l'état de  l'application.
* State : Le state est l'état global de l'application. Il peut être  représenté sous forme d'un objet JSON contenant les données et les  informations de l'application.
* NgRx Effects : Les effects sont des fonctions qui permettent de gérer  des effets de bord tels que des appels HTTP, des modifications d'état  asynchrones, etc. Ils sont utilisés pour isoler la logique asynchrone de  l'application du reste de l'état de l'application.

## Installation

`npm install`

#### 1. Créer les models des ressources

* Ressource produit
* Ressource address
* Ressource Panier

#### 2. Créer les actions possible pour chaque ressource y compris les appels de api

#### 3. Gestion des reducers pour chaque g
