document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.getElementById('languageToggle');
  const body = document.body;

  const translations = {
    en: {
      // Navigation
      'home': 'Home',
      'resume': 'Resume',
      'projects': 'Projects',
      'experiences': 'Experiences',
      'about-me': 'About Me',
      
      // Index Page
      'hello': 'Hello! I\'m Paul Vallée, a Data Scientist student passionate about AI and creating innovative solutions. My interests include data science and AI and interactive data visualization.',
      'featured-project': 'Featured Project',
      'view-all-projects': 'View All Projects',
      'contact-me': 'Contact Me',
      'contact-text': 'If you\'d like to get in touch, feel free to reach out via email at paul.vallee1@icloud.com or connect with me on LinkedIn.',
      
      // Resume Page General
      'page-title': 'Paul Vallée - Resume',
      'student-title': 'Data Science',
      'contact': 'Contact',
      'drivers-license': 'Driver\'s License',
      'skills': 'Skills',
      'skill-adaptability': 'Adaptability',
      'skill-organization': 'Organization and Rigor',
      'skill-autonomy': 'Autonomy and Teamwork',
      'languages': 'Languages',
      'french': 'French',
      'english': 'English',
      'technical-skills': 'Technical Skills',
      'download-resume': 'Download CV',
      
      // Profile Section
      'profile': 'Profile',
      'profile-description': "Recent graduate with a dual Master's degree in Applied Mathematics and Statistics specializing in Data Science and AI, and a Magistère in Statistics and Economic Modeling. With approximately 1.5 years of professional experience gained through internships and work-study programs across various sectors, I am seeking my first full-time position to leverage my expertise in statistics, machine learning, and AI.",
      
      // Education Section
      'education': 'Education',
      'masters-mas': 'Master MAS: Mathematics Applied to Statistics with Data Science & AI specialization',
      'university-rennes2': 'University of Rennes 2, Rennes | 2023 to 2025',
      'masters-mas-description': 'Data engineering and analysis, Machine Learning, Deep Learning, NLP, Web Scraping',
      'masters-dual': 'Dual Degree: Master\'s in Statistics and Economic Modeling',
      'university-rennes1': 'University of Rennes, Rennes | 2022 to 2025',
      'masters-dual-description': 'Dashboard, Statistical modeling, spatial statistics, survival analysis',
      'bachelors': 'Bachelor\'s in MIASHS: Mathematics and Computer Science Applied to Humanities and Social Sciences',
      'university-rennes1-2': 'University of Rennes, Rennes | 2020 to 2023',
      'bachelors-path': 'Data Science, Statistics and Econometrics (SDSE) path',
      'bachelors-description': 'Inferential statistics, parametric and non-parametric tests',
      'honors': 'Honors',
      'distinction': 'Distinction',
      'baccalaureate': 'Baccalaureate Economics and Social specializing in Mathematics',
      'lycee-douanier': 'Lycée Douanier Rousseau, Laval | 2017 to 2020',
      
      // Professional Experience Section
      'professional-experience': 'Professional Experience',
      'data-scientist-apprentice': 'Data Scientist Apprentice',
      'ico-location': 'Institut de Cancérologie de l\'Ouest, Nantes | September 2024 to September 2025',
      'data-scientist-apprentice-description': 'Design and implementation of a complete automated pipeline for extracting medical data from unstructured clinical documents, enriching a Health Data Warehouse (EDS) for oncology research. Using generative artificial intelligence (LLM).',
      'missions_1': `
      <ul>
        <li>Development of a solution based on large language models (LLM) hosted on an Azure Cloud infrastructure. for the precise extraction of breast cancer biomarkers (ER, PR, HER2) and temporal data associated with metastatic cancer stages.</li>
        <li>Writing a scientific paper detailing the methodology and research results for academic valorization of the project.</li>
      </ul>`,
      'skills_1': 'Python | R | Deep Learning | LLM | Azure SDK | RAG | Prompt Engineering | NLP | Scientific Research',
      'date_1' : 'September 2024 to September 2025',
      'position_1': 'Data Scientist Apprentice',

      'research-assistant': 'Research Assistant',
      'crem-location': 'Center for Research in Economics and Management (CREM), Rennes | May 2024 to July 2024',
      'research-assistant-description': 'In collaboration with the environmental association Agis-Ta-Terre, the mission aimed to improve the reliability of urban traffic sensors responsible for collecting mobility data for the city of Châteaubourg, to help local decision-makers make informed urban planning decisions.',
      'missions_2': `
      <ul>
        <li>Participation in the development of a website presenting analyses performed using traffic sensor data for the city of Châteaubourg</li>
        <li>Contribution to the creation of an R package facilitating sensor data analysis for users</li>
        <li>Implementation of an algorithm based on a Random Forest model to predict and impute missing values during periods of sensor malfunction</li>
      </ul>`,
      'skills_2': 'R | Machine Learning | Time Series Forecasting | Statistics | Data Visualization | Git | R Package Development',
      'date_2' : 'May 2024 to July 2024',
      'position_2': 'Intern Data Scientist',

      'intern-data-project-manager': 'Intern Data Steward',
      'lactalis-location': 'Lactalis, Laval | May 2023 to August 2023',
      'intern-data-project-manager-description': 'The objective of the missions was to improve data quality and ensure regulatory compliance in the food industry by automating certain anomaly detection processes in the company\'s data.',
      'missions_3': `
      <ul>
        <li>Verification of the quality and uniqueness of reference data, particularly for suppliers, to ensure their migration to a new data management system</li>
        <li>Monitoring product data compliance with current regulations, including:
          <ul>
            <li>Application of European nomenclatures for product classification.</li>
            <li>Listing of additives contained in products based on provided ingredient lists.</li>
          </ul>
        </li>
      </ul>`,
      'skills_3': 'VBA | NLP | RegEx | Excel | Data Quality',
      'date_3' : 'May 2023 to August 2023',
      'position_3': 'Intern Data Steward',
      // Key Projects Section
      'key-projects': 'Key Projects',
      'rennes-challenge': 'Finalist at Rennes Data Challenge 2025',
      'rennes-challenge-description': 'Our team was a finalist in the \'Best Project\' category at the Rennes Data Challenge by developing a solution for Enedis in just 24 hours. Faced with the strategic challenge of resource planning, the problem was to determine if Enedis would have sufficient operational capacity and to identify potential bottlenecks. We designed a predictive model using seasonal Prophet models to anticipate work hour needs by activity, month, and skill for the year 2025.',
      
      'rap-classification': 'Classification of Rap by Linguistic Analysis',
      'rap-classification-description': 'I developed an NLP model capable of distinguishing rap from other musical genres by analyzing lyrics with 90% accuracy. This system uses TF-IDF vectorization and SVM/RandomForest classifiers to automatically identify distinctive linguistic characteristics of rap. Text preprocessing and lemmatization allow for detailed analysis of lexical density, rhetorical patterns, and vocabulary specific to this musical genre.',
      
      'mcmc-project': 'Decrypting Text with MCMC',
      'mcmc-project-description': 'This project develops an algorithm to decrypt messages encoded with substitution ciphers. Using Markov Chain Monte Carlo (MCMC) methods, the algorithm analyzes encrypted text patterns to reverse the substitutions and recover the original messages.',

      // Projects Section for Projects Page
      'data-visualization': 'Data Visualization Projects',
      'usa-crime': 'USA Crime Visualization',
      'usa-crime-description': 'This project focuses on developing an R Shiny application that visualizes firearm crime data across the USA, categorized by state, year, and crime type. The application offers valuable insights into trends and patterns of gun-related incidents nationwide.',
      'view-shiny-app': 'View Shiny App',
      'refugees-crisis': 'Refugees Crisis Dashboard',
      'refugees-crisis-description': 'The goal of this project was to analyze the evolution of the refugee crisis by providing a simple and interactive dashboard created with Power BI.',
      'view-dashboard': 'View Dashboard',
      'data-analysis': 'Data Analysis Projects',
      'nba-project': 'NBA Project',
      'nba-project-description': 'Using a linear regression approach, we examine the relationship between NBA players on-court performance and their financial compensation. Specifically, we aim to answer the question: To what extent do individual performance metrics influence the salaries of basketball players?',
      'pubg-project': 'PUBG Analysis',
      'pubg-project-description': 'In this project, we analyzed a dataset of 4,000 PUBG players to uncover trends, identify typical player behaviors, and understand the factors that contribute to success in the game. Unsupervised algorithms such as Hierarchical Clustering (CAH), K-Means, and Gaussian Mixture Models were used to segment the player base and discover hidden patterns.',
      'ai-projects': 'Artificial Intelligence Projects',
      'under-development': 'This section is currently under development.',
      'other-projects': 'Other Projects',
      'view-project': 'View Project',
      "hackathon-projects": "Hackathon Projects",
      "flappy-bird": "Flappy Bird Mastered by Evolving Neural Networks",
      "flappy-bird-description": "This project explores evolutionary artificial intelligence applied to the Flappy Bird game using the NEAT algorithm. I implemented an environment where neural networks evolve through natural selection, learning to navigate by analyzing the space between obstacles and the bird's position. The results are remarkable: after just a few generations, the best networks can play indefinitely.",

      // Experiences 
      "experiences_title": "My Professional Experiences",

      // CV Version Courte
      "data-scientist-apprentice-description-short": "Design of a solution for extracting structured medical data from unstructured clinical documents using LLMs hosted on Azure Cloud infrastructure, to feed a health data warehouse (HDW) dedicated to oncology research.",
      "research-assistant-description-short": "Improved urban traffic sensor reliability through time series forecasting and R package development.",
      "intern-data-project-manager-description-short": "Data quality improvement and regulatory compliance in the food industry through automation.",
      "rennes-challenge-description-short": "Finalist team developing a predictive model for Enedis resource planning in 24-hour hackathon.",
      "rap-classification-description-short": "NLP model for rap genre classification with 90% accuracy using TF-IDF and machine learning.",
      "mcmc-project-description-short": "Decryption algorithm for substitution ciphers using Markov Chain Monte Carlo methods.", 
      "usa-crime-description-short": "Interactive R Shiny dashboard visualizing firearm crime trends across the USA by state, year, and crime type.",
      "pubg-project-description-short": "Analysis of 4,000 PUBG players using unsupervised learning to identify success factors and player segments.",
      
      "featured-project-text": "Among my various projects, the Rennes Data Challenge 2025 stands out as a significant achievement that exemplifies my approach to data science challenges. As a finalist in the 'Best Project' category presenting to a multidisciplinary jury, our team developed a solution for Enedis in just 24 hours to estimate human resource needs. This forecasting model, based on time series techniques, predicted requirements by activity, month, and skill category. The practical dimension of the project, directly applicable to the company's HR planning, confirmed to me the positive impact that data science can have on organizational challenges.",
      "professional-text": "My professional journey spanning approximately 1.5 years across diverse sectors has been instrumental in translating my academic knowledge into practical expertise. Through internships and work-study programs in healthcare, economic research, and the food industry, I've developed a versatile approach to data science challenges in real-world contexts.\n\nMy experience at the Institut de Cancérologie de l'Ouest was particularly transformative, where I worked on extracting medical data from unstructured clinical documents using LLMs. This project taught me the importance of domain-specific knowledge in data science applications and how AI can meaningfully impact critical sectors like healthcare. It also strengthened my ability to manage complex data pipelines and collaborate with domain experts.\n\nMy time at the Center for Research in Economics and Management immersed me in an applied scientific research environment. In this context, I developed a forecasting algorithm based on time series analysis while contributing to the development of an R package, creating a solution that enabled efficient analysis of sensor data through a dual approach of statistical modeling and tool development.\n\nThese professional experiences have reinforced my passion for applying data science to solve meaningful problems. They've also helped me develop a pragmatic approach that balances technical sophistication with practical implementation constraints. I've learned that effective data science isn't just about complex algorithms; it's about creating solutions that provide actionable insights and integrate seamlessly into existing workflows.",
      "academic-text": "My academic journey has been shaped by a fascination with the intersection of mathematics, statistics, and real-world applications. Recently graduating with a dual Master's degree in Applied Mathematics and Statistics (with Data Science & AI specialization) and a Magistère in Statistics and Economic Modeling, I've built a solid theoretical foundation that supports my practical work.\n\nThroughout my studies, I've been particularly drawn to the power of statistical modeling and machine learning algorithms to extract meaningful patterns from complex datasets. The rigorous mathematical training I received has instilled in me a methodical approach to problem-solving and a keen attention to detail that proves valuable in data analysis contexts.\n\nWhat I value most from my academic experience is the versatility it has given me. From theoretical statistical concepts to practical programming skills, from algorithm design to data visualization techniques, my education has equipped me with the tools to approach diverse challenges with confidence. The collaborative projects undertaken during my studies also fostered my ability to work effectively within interdisciplinary teams.\n\nI place particular importance on clearly communicating analytical results. The ability to adapt my discourse based on my audience, whether they have technical expertise or not, allows me to make complex concepts accessible and facilitate data-driven decision making.",
      
      "academic-journey": "Academic Journey",
      "professional-journey": "Professional Journey",
      "core-competencies": "Core Competencies",
      "contact-me": "Get in Touch",
      "hero-title": "Data Science Journey",
      "explore-projects" : "Explore My Academic Projects",
      "discover-experiences" : "Discover My Professional Experience",
      "see-project-details": "See Project Details",
    

        },
    fr: {
      
      // Navigation
      'home': 'Accueil',
      'resume': 'CV',
      'projects': 'Projets',
      'experiences': 'Expériences',
      'about-me': 'À propos de moi',
      
      // Index Page
      'hello': 'Bonjour ! Je suis Paul Vallée, un étudiant en Data Science passionné par l\'IA et la création de solutions innovantes. Mes intérêts incluent la science des données, l\'IA et la visualisation de données interactive.',
      'featured-project': 'Projet en vedette',
      'view-all-projects': 'Voir tous les projets',
      'contact-me': 'Contactez-moi',
      'contact-text': 'Si vous souhaitez me contacter, n\'hésitez pas à m\'envoyer un e-mail à paul.vallee1@icloud.com ou à me contacter sur LinkedIn.',
      
      // Resume Page General
      'page-title': 'Paul Vallée - CV',
      'student-title': 'Data Science',
      'contact': 'Contact',
      'drivers-license': 'Permis B',
      'skills': 'Compétences',
      'skill-adaptability': 'Adaptation',
      'skill-organization': 'Organisation et Rigueur',
      'skill-autonomy': 'Autonomie et Travail d\'équipe',
      'languages': 'Langues',
      'french': 'Français',
      'english': 'Anglais',
      'technical-skills': 'Compétences Techniques',
      'download-resume': 'Télécharger CV',
      
      // Profile Section
      'profile': 'Profil',
      'profile-description': "Récemment diplômé d'un double cursus de Master en Mathématiques Appliquées aux Statistiques spécialisation Data Science et IA, et d'un Magistère en Statistique et Modélisation Économique. Riche de près de 1 an et demi d'expérience professionnelle acquise lors de stages et d'une alternance dans des secteurs variés, je cherche à mettre à profit mon expertise en statistiques, machine learning et IA dans un premier emploi.",
      
      // Education Section
      'education': 'Formation',
      'masters-mas': 'Master MAS : Mathématiques Appliquées aux Statistiques parcours Data Science & IA',
      'university-rennes2': 'Université de Rennes 2, Rennes | 2023 à 2025',
      'masters-mas-description': 'Data engineering, analyse et visualisation, Machine Learning, Deep Learning, NLP, Web Scraping',
      'masters-dual': 'Double Diplôme : Magistère en Statistique et Modélisation Économique',
      'university-rennes1': 'Université de Rennes, Rennes | 2022 à 2025',
      'masters-dual-description': 'Tableau de bord, Modélisation statistique, statistiques spatiales, analyse de survie',
      'bachelors': 'Licence MIASHS : Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales',
      'university-rennes1-2': 'Université de Rennes, Rennes | 2020 à 2023',
      'bachelors-path': 'Parcours Science des Données, Statistique et Économétrie (SDSE)',
      'bachelors-description': 'Statistiques inférentielles, tests paramétriques et non paramétriques',
      'honors': 'Mention',
      'distinction': 'Bien',
      'baccalaureate': 'Baccalauréat Économique et Social spécialité Mathématiques',
      'lycee-douanier': 'Lycée Douanier Rousseau, Laval | 2017 à 2020',
      
      // Professional Experience Section

      'professional-experience': 'Expérience Professionnelle',

      // ICO
      'data-scientist-apprentice': 'Alternant Data Scientist',
      'ico-location': 'Institut de Cancérologie de l\'Ouest, Nantes | Septembre 2024 à Septembre 2025',
      'data-scientist-apprentice-description': 'Conception et implémentation d\'une pipeline complète d\'extraction automatisée de données médicales à partir de documents cliniques non structurés, permettant d\'enrichir un Entrepôt de Données de Santé (EDS) pour la recherche en oncologie. Grâce à l\'intelligence artificielle générative (LLM).',
      'missions_1': `
      <ul>
        <li>Développement d'une solution basée sur les modèles de langage (LLM) ) hébergés sur une infrastructure Azure Cloud.  pour l'extraction précise des biomarqueurs du cancer du sein (ER, PR, HER2) et des données temporelles associées aux stades métastatiques du cancer.</li>
        <li>Rédaction d'un article scientifique détaillant la méthodologie et les résultats de recherche pour valorisation académique du projet.</li>
      </ul>`,
      'skills_1': 'Python | R | Deep Learning | LLM | Azure SDK | RAG | Prompt Engineering | NLP | Recherche scientifique',
      'date_1' : 'Septembre 2024 à Septembre 2025',
      'position_1': 'Alternant Data Scientist',
      // CREM
      'research-assistant': 'Stagiaire Data Scientist',
      'crem-location': 'Centre de Recherche Économique et Management, Rennes | Mai 2024 à Juillet 2024',
      'research-assistant-description': 'En collaboration avec l\'association écologiste Agis-Ta-Terre, la mission visait à améliorer la fiabilité des capteurs de trafic urbain chargés de collecter des données de mobilité pour la ville de Châteaubourg, afin d\'aider les décideurs locaux à prendre des décisions éclairées en matière d\'urbanisme.',
      'missions_2': `
      <ul>
        <li>Participation au développement d'un site web présentant les analyses effectuées à partir des données des capteurs de trafic pour la ville de Châteaubourg</li>
        <li>Contribution à la création d'un package R facilitant l'analyse des données des capteurs pour les utilisateurs</li>
        <li>Implémentation d'un algorithme basé sur un modèle Random Forest pour prédire et imputer les valeurs manquantes lors des périodes de dysfonctionnement des capteurs</li>
      </ul>`,
      'skills_2': 'R | Machine Learning | Analyse de saisonnalités | Statistiques | Data Visualization | Développement Package R',
      'date_2' : 'Mai 2024 à Juillet 2024',
      'position_2': 'Stagiaire Data Scientist',
      // Lactalis
      'intern-data-project-manager': 'Stagiaire Data Steward',
      'lactalis-location': 'LACTALIS, Laval | Mai 2023 à Août 2023',
      'intern-data-project-manager-description': 'L\'objectif des missions était d\'améliorer la qualité des données et de garantir la conformité réglementaire dans le domaine de l\'agroalimentaire en automatisant certains processus de détection des anomalies dans les données de l\'entreprise.',
      'missions_3': `
      <ul>
        <li>Vérification de la qualité et de l'unicité des données référentielles notamment de fournisseurs afin d'assurer leur migration vers un nouveau système de gestion de données</li>
        <li>Contrôle de la conformité des données produits aux réglementations en vigueur, incluant :
          <ul>
            <li>Application des nomenclatures européennes pour la classification des produits.</li>
            <li>Référencement des additifs contenus dans les produits à partir des listes d'ingrédients fournies.</li>
          </ul>
        </li>
      </ul>`,
      'skills_3': 'VBA | NLP | RegEx | Excel | Data Quality',
      'date_3' : 'Mai 2023 à Août 2023',
      'position_3': 'Stagiaire Data Steward',
      // Key Projects Section
      'key-projects': 'Projets Clés',
      'rennes-challenge': 'Finaliste au Rennes Data Challenge 2025',
      'rennes-challenge-description': 'Notre équipe a été finaliste dans la catégorie \'Meilleur Projet\' du Rennes Data Challenge en développant une solution pour Enedis en seulement 24 heures. Face à l\'enjeu stratégique de planification des ressources, la problématique consistait à déterminer si Enedis disposerait d\'une capacité opérationnelle suffisante et à identifier les potentiels goulots d\'étranglement. Nous avons conçu un modèle prédictif en utilisant les modèles saisonniers Prophet pour anticiper les besoins en heures de travail par activité, mois et compétence pour l\'année 2025.',
      
      'rap-classification': 'Classification du Rap par Analyse Linguistique',
      'rap-classification-description': 'J\'ai développé un modèle NLP capable de distinguer le rap d\'autres genres musicaux par l\'analyse des paroles avec 90% de précision. Ce système utilise la vectorisation TF-IDF et des classifieurs SVM/RandomForest pour identifier automatiquement les caractéristiques linguistiques distinctives du rap. Le prétraitement et la lemmatisation des textes permettent une analyse fine de la densité lexicale, des patterns rhétoriques et du vocabulaire spécifique à ce genre musical.',
      
      'mcmc-project': 'Décryptage de Texte avec MCMC',
      'mcmc-project-description': 'Ce projet développe un algorithme pour décrypter des messages encodés avec des chiffrements par substitution. En utilisant les méthodes de Monte Carlo par Chaînes de Markov (MCMC), l\'algorithme analyse les modèles de texte crypté pour inverser les substitutions et récupérer les messages originaux.',

      // Projects Section for Projects Page
      'data-visualization': 'Projets de Visualisation de Données',
      'usa-crime': 'Visualisation des Crimes aux États-Unis',
      'usa-crime-description': 'Ce projet vise à développer une application R Shiny qui visualise les données sur les crimes impliquant des armes à feu aux États-Unis, catégorisées par état, année et type de crime. L\'application offre des informations précieuses sur les tendances et les modèles des incidents liés aux armes à feu à l\'échelle nationale.',
      'view-shiny-app': 'Voir l\'application Shiny',
      'refugees-crisis': 'Tableau de Bord sur la Crise des Réfugiés',
      'refugees-crisis-description': 'L\'objectif de ce projet était d\'analyser l\'évolution de la crise des réfugiés en fournissant un tableau de bord simple et interactif créé avec Power BI.',
      'view-dashboard': 'Voir le tableau de bord',
      'data-analysis': 'Projets d\'Analyse de Données',
      'nba-project': 'Projet NBA',
      'nba-project-description': 'En utilisant une approche de régression linéaire, nous examinons la relation entre les performances des joueurs de la NBA sur le terrain et leur rémunération financière. Plus précisément, nous visons à répondre à la question suivante : dans quelle mesure les métriques de performance individuelle influencent-elles les salaires des joueurs de basket-ball ?',
      'pubg-project': 'Analyse PUBG',
      'pubg-project-description': 'Dans ce projet, nous avons analysé un ensemble de données de 4 000 joueurs de PUBG pour découvrir des tendances, identifier les comportements typiques des joueurs et comprendre les facteurs qui contribuent au succès dans le jeu. Des algorithmes non supervisés tels que la classification ascendante hiérarchique (CAH), K-Means et les modèles de mélange gaussien ont été utilisés pour segmenter la base de joueurs et découvrir des modèles cachés.',
      'ai-projects': 'Projets d\'Intelligence Artificielle',
      'under-development': 'Cette section est actuellement en développement.',
      'other-projects': 'Autres Projets',
      'view-project': 'Voir le Projet',
      "hackathon-projects": "Projets de Hackathon",
      "flappy-bird": "Flappy Bird maîtrisé par réseaux de neurones évolutifs",
      "flappy-bird-description": "Ce projet explore l'intelligence artificielle évolutive appliquée au jeu Flappy Bird en utilisant l'algorithme NEAT. J'ai implémenté un environnement où des réseaux de neurones évoluent par sélection naturelle, apprenant à naviguer en analysant l'espace entre les obstacles et la position de l'oiseau. Les résultats sont remarquables : après seulement quelques générations, les meilleurs réseaux parviennent à jouer indéfiniment.",

      // Experiences
      "experiences_title": "Mes expériences professionnelles",

      // CV Version Courte
      "data-scientist-apprentice-description-short": "Création d’une solution d’extraction de données médicales structurées à partir de documents cliniques non structurés, en s’appuyant sur des LLM hébergés sur une infrastructure Azure Cloud, afin d’alimenter un entrepôt de données de santé (EDS) dédié à la recherche en oncologie.",
      "research-assistant-description-short": "Amélioration de la fiabilité des capteurs de trafic urbain par prévision de séries temporelles et développement de package R.",
      "intern-data-project-manager-description-short": "Amélioration de la qualité des données et conformité réglementaire dans l'industrie agroalimentaire par automatisation.",
      "rennes-challenge-description-short": "Équipe finaliste développant un modèle prédictif pour la planification des ressources d'Enedis lors d'un hackathon de 24h.",
      "rap-classification-description-short": "Modèle NLP pour la classification du genre rap avec 90% de précision utilisant TF-IDF et apprentissage automatique.",
      "mcmc-project-description-short": "Algorithme de décryptage pour les chiffrements par substitution utilisant les méthodes de Monte Carlo par chaînes de Markov.",
      "usa-crime-description-short": "Dashboard interactif R Shiny visualisant les tendances des crimes liés aux armes à feu aux États-Unis par état, année et type.",
      "pubg-project-description-short": "Analyse de 4 000 joueurs PUBG avec apprentissage non supervisé pour identifier les facteurs de succès et segmenter les joueurs.",
  
      // Index
      "hero-title": "Parcours en Data Science",
      "hero-subtitle": "De la théorie académique à la pratique professionnelle",
      "academic-journey": "Parcours Académique",

      "academic-text": "Mon parcours académique a été façonné par une fascination pour l'intersection des mathématiques, des statistiques et des applications concrètes. Récemment diplômé d'un double cursus de Master en Mathématiques Appliquées aux Statistiques (spécialisation Data Science & IA) et d'un Magistère en Statistique et Modélisation Économique, j'ai construit une solide base théorique qui soutient mon travail pratique.\n\nTout au long de mes études, j'ai été particulièrement attiré par la puissance de la modélisation statistique et des algorithmes d'apprentissage automatique pour extraire des modèles significatifs à partir d'ensembles de données complexes. La formation mathématique rigoureuse que j'ai reçue m'a inculqué une approche méthodique de la résolution de problèmes et une attention particulière aux détails qui s'avère précieuse dans les contextes d'analyse de données.\n\nCe que je valorise le plus de mon expérience académique est la polyvalence qu'elle m'a donnée. Des concepts statistiques théoriques aux compétences pratiques en programmation, de la conception d'algorithmes aux techniques de visualisation de données, mon éducation m'a équipé des outils nécessaires pour aborder divers défis avec confiance. Les projets collaboratifs entrepris durant mes études ont également favorisé ma capacité à travailler efficacement au sein d'équipes interdisciplinaires.\n\nJ'accorde une importance particulière à la communication claire des résultats d'analyses. La capacité à adapter mon discours selon mon interlocuteur, qu'il soit expert technique ou non, me permet de rendre accessibles des concepts complexes et de faciliter la prise de décision basée sur les données.",
      "explore-projects": "Explorer Mes Projets Académiques",
      "professional-journey": "Expérience Professionnelle",
      "professional-text": "Mon parcours professionnel d'environ 1,5 an dans divers secteurs a été déterminant pour transformer mes connaissances académiques en expertise pratique. À travers des stages et une alternance dans les domaines de la santé, de la recherche économique et de l'industrie agroalimentaire, j'ai développé une approche polyvalente face aux défis de la science des données dans des contextes réels.\n\nMon expérience à l'Institut de Cancérologie de l'Ouest a été particulièrement transformatrice, où j'ai travaillé sur l'extraction de données médicales à partir de documents cliniques non structurés en utilisant des LLMs. Ce projet m'a appris l'importance des connaissances spécifiques au domaine dans les applications de data science et comment l'IA peut avoir un impact significatif sur des secteurs critiques comme la santé. Cela a également renforcé ma capacité à gérer des pipelines de données complexes et à collaborer avec des experts du domaine.\n\nMon passage au Centre de Recherche en Économie et Management m'a immergé dans un environnement de recherche scientifique appliquée. Dans ce cadre, j'ai développé un algorithme de prévision basé sur des séries temporelles tout en participant au développement d'un package R, créant ainsi une solution permettant d'analyser efficacement des données de capteurs par double approche modélisation statistique et développement d'outils.\n\nCes expériences professionnelles ont renforcé ma passion pour l'application de la science des données à la résolution de problèmes significatifs. Elles m'ont également aidé à développer une approche pragmatique qui équilibre la sophistication technique avec les contraintes pratiques de mise en œuvre. J'ai appris que la data science efficace ne se limite pas à des algorithmes complexes ; il s'agit de créer des solutions qui fournissent des insights actionnables et s'intègrent parfaitement dans les flux de travail existants.",
      "discover-experiences": "Découvrir Mon Expérience Professionnelle",
      "core-competencies": "Compétences Clés",
      "competencies-text": "Grâce à mon parcours académique et professionnel, j'ai développé un ensemble de compétences clés qui définissent mon approche de la science des données. Mes compétences techniques couvrent l'ensemble du cycle de vie des données, de la collecte et du nettoyage à l'analyse avancée et à la visualisation. Je maîtrise Python et R pour l'analyse de données, j'ai de l'expérience avec les frameworks d'apprentissage automatique, et je peux communiquer efficacement les résultats à travers des tableaux de bord interactifs et des visualisations claires.\n\nAu-delà des compétences techniques, j'ai cultivé une mentalité de résolution de problèmes qui commence par la compréhension des questions fondamentales derrière les défis liés aux données. Je crois en l'importance de bien formuler le problème avant de passer aux solutions techniques, en veillant à ce que l'approche analytique s'aligne sur les besoins réels.\n\nJe suis également fier de mon adaptabilité et de mon approche d'apprentissage continu. Le domaine de la data science évolue rapidement, et j'ai démontré ma capacité à saisir rapidement de nouveaux concepts et technologies. Cette adaptabilité m'a bien servi lorsque je travaillais dans différents secteurs, chacun avec ses défis de données uniques et ses considérations spécifiques au domaine.",
      "machine-learning": "Machine Learning",
      "programming": "Programmation",
      "data-viz": "Visualisation",
      "nlp": "NLP",
      "view-full-resume": "Voir Mon CV Complet",
      "featured-project": "Projet à la Une",
      "featured-project-text": "Parmi mes divers projets, le Rennes Data Challenge 2025 se distingue comme une réalisation significative qui illustre mon approche des défis en data science. En tant que finaliste dans la catégorie 'Meilleur Projet' face à un jury pluridisciplinaire, nous avons développé en 24 heures une solution pour Enedis permettant d'estimer les besoins en ressources humaines. Ce modèle prévisionnel, basé sur des techniques de séries temporelles, anticipait les besoins par activité, mois et compétence. La dimension concrète du projet, directement applicable à la planification RH de l'entreprise, m'a confirmé l'impact positif que peut avoir la data science sur des problématiques organisationnelles.",
      "see-project-details": "Voir les Détails du Projet",
      "contact-section": "Contactez-Moi",
      "contact-text": "En tant que jeune diplômé à la recherche de mon premier poste à temps plein en data science, je suis impatient d'entrer en contact avec des professionnels et des organisations travaillant sur des défis de données intéressants. Que vous souhaitiez discuter d'opportunités potentielles, collaborer sur des projets, ou simplement échanger des idées sur la data science et l'IA, je serais ravi d'échanger avec vous.\n\nJe suis particulièrement intéressé par des rôles qui me permettraient d'appliquer mon expertise combinée en statistiques, machine learning et applications spécifiques à différents domaines, tout en continuant à évoluer en tant que professionnel de la donnée. Si vous pensez que mon profil pourrait correspondre à votre équipe ou à votre projet, n'hésitez pas à me contacter.",
      "email": "Email",
      "linkedin": "LinkedIn",
      "connect-linkedin": "Connectez-vous sur LinkedIn",
      "portfolio": "Portfolio",
      "footer-text": "Ce site portfolio a été conçu et développé entièrement par moi, Paul Vallée, en utilisant HTML, CSS et JavaScript. Il présente mon parcours, mes compétences et mes aspirations en tant que data scientist tout en démontrant également mes capacités en développement web."
    }
  };
  
  function updateLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    body.className = lang;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        if (element.classList.contains('missions-description') || key.startsWith('missions_')) {
          element.innerHTML = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
  }

  languageToggle.addEventListener('click', function() {
    const currentLang = body.className === 'fr' ? 'en' : 'fr';
    updateLanguage(currentLang);
  });

  // Vérifier la langue préférée de l'utilisateur dans le stockage local
  const savedLanguage = localStorage.getItem('preferredLanguage');

  // Initialiser en Anglais
  updateLanguage(savedLanguage || 'en');
});
