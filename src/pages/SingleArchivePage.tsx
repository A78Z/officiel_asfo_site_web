import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Activity, ArrowLeft, Eye, Heart } from 'lucide-react';
import Button from '../components/common/Button';

// Données détaillées pour chaque mission
const missionsData = {
  // Missions 2024
  "2024-guede-village": {
    id: "2024-guede-village",
    year: "2024",
    title: "Mission Médicale à Guédé Village",
    location: "Guédé Village",
    date: "2024",
    participants: 105,
    consultations: 1122,
    imageUrl: "/guede-village.webp",
    summary: "Une mission exceptionnelle à Guédé Village qui a permis de toucher plus de 1100 patients. L'équipe médicale pluridisciplinaire a offert des soins de qualité dans un esprit de solidarité et d'engagement communautaire.",
    specialties: [
      { name: "Médecine générale", count: 408 },
      { name: "Gériatrie", count: 154 },
      { name: "Pédiatrie", count: 241 },
      { name: "Gynécologie", count: 44 },
      { name: "Psychiatrie", count: 18 },
      { name: "Chirurgie dentaire", count: 160 },
      { name: "Ophtalmologie", count: 0 },
      { name: "Circoncisions", count: 97 }
    ],
    story: `La mission de Guédé Village 2024 restera gravée dans les mémoires comme l'une des plus importantes de l'année. Pendant trois jours intensifs, notre équipe de 105 professionnels de santé s'est mobilisée pour offrir des soins gratuits aux populations de cette localité stratégique du Fouta.

Cette mission s'inscrivait dans le cadre de notre engagement constant à rapprocher les soins de santé des populations les plus vulnérables. Guédé Village, par sa position géographique et ses besoins sanitaires importants, constituait une priorité absolue pour l'ASFO.

L'organisation de cette campagne a nécessité plusieurs mois de préparation minutieuse, impliquant la coordination avec les autorités locales, la mobilisation des ressources humaines et matérielles, ainsi que la sensibilisation préalable des populations cibles.`,
    highlights: [
      "Plus de 1100 consultations réalisées en 3 jours",
      "105 professionnels de santé mobilisés",
      "8 spécialités médicales représentées",
      "97 circoncisions réalisées dans des conditions optimales",
      "Distribution gratuite de médicaments essentiels",
      "Actions de sensibilisation sur l'hygiène et la prévention"
    ],
    gallery: [
      "/gv1.webp", "/gv2.webp", "/gv3.webp", "/gv4.webp", "/gv5.webp", "/gv6.webp"
    ],
    testimonials: [
      {
        name: "Aminata Diallo",
        role: "Bénéficiaire, Guédé Village",
        quote: "Mes trois enfants ont pu être consultés gratuitement. Les médecins ont été très attentionnés et ont pris le temps de nous expliquer les traitements. C'est un grand soulagement pour notre famille."
      },
      {
        name: "Mamadou Sow",
        role: "Chef de village",
        quote: "Cette mission a apporté un souffle d'espoir à notre communauté. Nous remercions l'ASFO pour son engagement constant auprès des populations rurales comme la nôtre."
      }
    ],
    impact: "Au-delà des chiffres, cette mission a créé un véritable élan de solidarité dans la communauté. Les formations dispensées aux agents de santé locaux garantissent un impact durable. Un suivi médical a été mis en place pour les cas nécessitant une prise en charge continue."
  },

  "2024-village-tatqui": {
    id: "2024-village-tatqui",
    year: "2024",
    title: "Mission Médicale à Tatqui",
    location: "Village Tatqui",
    date: "2024",
    participants: 98,
    consultations: 1250,
    imageUrl: "/taki.webp",
    summary: "La campagne de Tatqui s'est distinguée par une approche holistique de la santé, combinant soins curatifs et actions préventives. Focus particulier sur la santé maternelle et infantile.",
    specialties: [
      { name: "Médecine générale", count: 386 },
      { name: "Gériatrie", count: 153 },
      { name: "Pédiatrie", count: 347 },
      { name: "Gynécologie", count: 110 },
      { name: "Psychiatrie", count: 18 },
      { name: "Chirurgie dentaire", count: 89 },
      { name: "Ophtalmologie", count: 108 },
      { name: "Circoncisions", count: 39 }
    ],
    story: `La mission médicale à Tatqui en 2024 a marqué un tournant dans notre approche de la santé communautaire. Cette campagne, qui s'est déroulée sur quatre jours, a mobilisé 98 professionnels de santé déterminés à offrir des soins de qualité à une population longtemps enclavée.

Tatqui, village situé dans une zone difficile d'accès, n'avait pas bénéficié de soins spécialisés depuis plusieurs années. Notre équipe a donc mis l'accent sur une prise en charge globale, accordant une attention particulière à la santé maternelle et infantile.

La préparation de cette mission a nécessité une logistique complexe, notamment pour l'acheminement du matériel médical et des médicaments dans cette zone reculée. La collaboration avec les autorités locales et les leaders communautaires a été déterminante pour le succès de l'opération.`,
    highlights: [
      "1250 consultations dans 8 spécialités différentes",
      "347 enfants pris en charge en pédiatrie",
      "110 femmes consultées en gynécologie",
      "108 consultations ophtalmologiques",
      "Formation de 15 agents de santé communautaire",
      "Sensibilisation de plus de 500 personnes"
    ],
    gallery: [
      "/tekti1.webp", "/tekti2.webp", "/tekti3.webp", "/tekti4.webp", "/tekti5.webp", "/tekti6.webp"
    ],
    testimonials: [
      {
        name: "Fatou Ndiaye",
        role: "Sage-femme locale",
        quote: "Cette mission nous a permis d'apprendre de nouvelles techniques. Les formations reçues vont nous aider à mieux accompagner les femmes enceintes de notre village."
      },
      {
        name: "Ousmane Ba",
        role: "Père de famille",
        quote: "Mes enfants ont reçu tous leurs vaccins et ont été soignés pour leurs problèmes de vue. C'est la première fois qu'un ophtalmologue vient dans notre village."
      }
    ],
    impact: "Cette mission a permis d'établir un système de référence avec le centre de santé le plus proche. Un programme de suivi nutritionnel pour les enfants malnutris a été mis en place, avec des visites trimestrielles programmées."
  },

  "2024-village-diattar": {
    id: "2024-village-diattar",
    year: "2024",
    title: "Mission Médicale à Diattar",
    location: "Village Diattar",
    date: "2024",
    participants: 102,
    consultations: 1242,
    imageUrl: "/village-diattar.webp",
    summary: "Mission médicale remarquable axée sur l'innovation et l'excellence des soins. Introduction de nouvelles techniques de diagnostic et renforcement des capacités locales.",
    specialties: [
      { name: "Médecine générale", count: 314 },
      { name: "Gériatrie", count: 131 },
      { name: "Pédiatrie", count: 353 },
      { name: "Gynécologie", count: 90 },
      { name: "Psychiatrie", count: 7 },
      { name: "Chirurgie dentaire", count: 176 },
      { name: "Ophtalmologie", count: 127 },
      { name: "Circoncisions", count: 44 }
    ],
    story: `La mission de Diattar 2024 s'est distinguée par son caractère innovant et son approche technologique avancée. Cette campagne de quatre jours a rassemblé 102 professionnels de santé, incluant des spécialistes de renom venus partager leur expertise avec les équipes locales.

Diattar, connu pour sa population jeune et dynamique, a accueilli cette mission avec un enthousiasme remarquable. L'accent a été mis sur l'introduction de nouvelles techniques de diagnostic, notamment en ophtalmologie et en médecine dentaire.

Cette mission pilote a servi de laboratoire pour tester de nouvelles approches de soins communautaires, intégrant des outils de télémédecine et des protocoles de suivi à distance. L'objectif était de créer un modèle reproductible pour d'autres villages de la région.`,
    highlights: [
      "1242 consultations avec des techniques innovantes",
      "Introduction de la télémédecine pour le suivi",
      "176 soins dentaires avec équipement moderne",
      "127 consultations ophtalmologiques spécialisées",
      "Formation de 20 agents de santé aux nouvelles technologies",
      "Création d'un centre de référence local"
    ],
    gallery: [
      "/diatar1.webp", "/diatar2.webp", "/diatar3.webp", "/diatar4.webp", "/diatar5.webp", "/diatar6.webp"
    ],
    testimonials: [
      {
        name: "Dr. Amadou Diallo",
        role: "Médecin chef de mission",
        quote: "Diattar nous a permis d'expérimenter de nouvelles approches. L'accueil de la population et l'engagement des équipes locales ont été exceptionnels."
      },
      {
        name: "Aissatou Sow",
        role: "Infirmière locale",
        quote: "Les formations reçues sur les nouvelles technologies nous permettront d'améliorer considérablement la qualité de nos soins quotidiens."
      }
    ],
    impact: "Cette mission a créé un centre de référence équipé d'outils de télémédecine, permettant des consultations à distance avec des spécialistes de Dakar. Un programme de formation continue a été établi pour maintenir le niveau d'expertise."
  },

  "2024-bode-lao": {
    id: "2024-bode-lao",
    year: "2024",
    title: "Mission Médicale à Bodé Lao",
    location: "Village Bodé Lao",
    date: "2024",
    participants: 120,
    consultations: 1948,
    imageUrl: "/village-bode-lao.webp",
    summary: "Notre plus grande campagne de 2024 avec près de 2000 consultations. Mission d'envergure démontrant la capacité de mobilisation exceptionnelle de l'ASFO.",
    specialties: [
      { name: "Médecine générale", count: 470 },
      { name: "Gériatrie", count: 199 },
      { name: "Pédiatrie", count: 377 },
      { name: "Gynécologie", count: 395 },
      { name: "Psychiatrie", count: 11 },
      { name: "Chirurgie dentaire", count: 154 },
      { name: "Ophtalmologie", count: 225 },
      { name: "Circoncisions", count: 117 }
    ],
    story: `La mission de Bodé Lao 2024 restera dans les annales comme la plus importante campagne médicale de l'année. Avec 1948 consultations réalisées en cinq jours, cette mission a mobilisé 120 professionnels de santé dans un élan de solidarité sans précédent.

Bodé Lao, village de plus de 3000 habitants, présentait des besoins sanitaires considérables. La planification de cette mission a nécessité six mois de préparation intensive, impliquant la coordination de multiples équipes spécialisées et la mise en place d'une logistique complexe.

Cette campagne a servi de modèle pour les futures grandes missions de l'ASFO, démontrant notre capacité à organiser des interventions d'envergure tout en maintenant la qualité des soins et l'attention personnalisée à chaque patient.`,
    highlights: [
      "1948 consultations, record de l'année 2024",
      "120 professionnels de santé mobilisés",
      "395 consultations gynécologiques",
      "377 enfants pris en charge",
      "225 consultations ophtalmologiques",
      "Formation de 30 agents de santé communautaire"
    ],
    gallery: [
      "/bode1.webp", "/bode2.webp", "/bode3.webp", "/bode4.webp", "/bode5.webp", "/bode6.webp"
    ],
    testimonials: [
      {
        name: "Mariama Diallo",
        role: "Présidente des femmes de Bodé Lao",
        quote: "Cette mission a transformé notre village. Toutes les femmes ont pu être consultées et nos enfants ont reçu les soins dont ils avaient besoin depuis longtemps."
      },
      {
        name: "El Hadji Omar Ba",
        role: "Notable du village",
        quote: "L'organisation était parfaite. En cinq jours, l'ASFO a réussi à soigner presque toute la population. C'est un exploit remarquable."
      }
    ],
    impact: "Cette mission a permis la création d'un dispensaire permanent avec du personnel formé. Un système de référence vers l'hôpital régional a été établi, et un programme de vaccination élargi a été mis en place pour les années suivantes."
  },

  "2024-madina-ndiathbe": {
    id: "2024-madina-ndiathbe",
    year: "2024",
    title: "Mission Médicale à Madina Ndiathbé",
    location: "Village Madina Ndiathbé",
    date: "2024",
    participants: 95,
    consultations: 1616,
    imageUrl: "/medina-diathbe.webp",
    summary: "Mission médicale intensive focalisée sur la prévention et l'éducation sanitaire. Approche innovante de sensibilisation de la population locale.",
    specialties: [
      { name: "Médecine générale", count: 485 },
      { name: "Gériatrie", count: 177 },
      { name: "Pédiatrie", count: 519 },
      { name: "Gynécologie", count: 157 },
      { name: "Psychiatrie", count: 16 },
      { name: "Chirurgie dentaire", count: 158 },
      { name: "Ophtalmologie", count: 60 },
      { name: "Circoncisions", count: 44 }
    ],
    story: `La mission de Madina Ndiathbé 2024 a marqué un tournant dans notre approche de la santé préventive. Cette campagne de quatre jours, mobilisant 95 professionnels, a mis l'accent sur l'éducation sanitaire et la prévention des maladies courantes.

Madina Ndiathbé, village agricole de la région, présentait des défis particuliers liés aux maladies liées à l'eau et aux conditions d'hygiène. Notre équipe a donc développé une stratégie intégrée combinant soins curatifs et actions préventives.

Cette mission a servi de pilote pour notre nouveau programme d'éducation sanitaire communautaire, impliquant activement les leaders locaux et les associations de femmes dans la sensibilisation aux bonnes pratiques d'hygiène et de santé.`,
    highlights: [
      "1616 consultations avec focus préventif",
      "519 enfants sensibilisés à l'hygiène",
      "Formation de 25 éducateurs sanitaires",
      "Distribution de 1000 kits d'hygiène",
      "Création de 5 points d'eau potable",
      "Sensibilisation de 800 familles"
    ],
    gallery: [
      "/medina1.webp", "/medina2.webp", "/medina3.webp", "/medina4.webp", "/medina5.webp", "/medina6.webp"
    ],
    testimonials: [
      {
        name: "Khadija Sall",
        role: "Éducatrice communautaire",
        quote: "Les formations reçues nous permettent maintenant d'éduquer nos familles sur l'importance de l'hygiène. C'est un changement durable pour notre communauté."
      },
      {
        name: "Moussa Diop",
        role: "Directeur d'école",
        quote: "Les enfants ont appris les gestes d'hygiène de base. Nous avons intégré ces enseignements dans notre programme scolaire."
      }
    ],
    impact: "Cette mission a créé un réseau de 25 éducateurs sanitaires formés qui continuent à sensibiliser la population. Un programme de suivi trimestriel a été établi pour évaluer l'impact des actions préventives sur la santé communautaire."
  },

  "2024-diaba": {
    id: "2024-diaba",
    year: "2024",
    title: "Mission Médicale à Diaba",
    location: "Village Diaba",
    date: "2024",
    participants: 88,
    consultations: 1054,
    imageUrl: "/diaba.webp",
    summary: "Mission clôturant l'année 2024 avec un focus sur la santé mentale et le bien-être psychologique. Approche novatrice brisant les tabous locaux.",
    specialties: [
      { name: "Médecine générale", count: 368 },
      { name: "Gériatrie", count: 120 },
      { name: "Pédiatrie", count: 228 },
      { name: "Gynécologie", count: 123 },
      { name: "Psychiatrie", count: 28 },
      { name: "Chirurgie dentaire", count: 72 },
      { name: "Ophtalmologie", count: 68 },
      { name: "Circoncisions", count: 47 }
    ],
    story: `La mission de Diaba, dernière campagne de l'année 2024, a marqué une étape importante dans notre approche de la santé mentale. Cette mission de trois jours, réunissant 88 professionnels, a osé aborder un sujet longtemps tabou dans nos communautés rurales.

Diaba, village traditionnel où les questions de santé mentale étaient rarement évoquées, a accueilli cette initiative avec une curiosité mêlée d'appréhension. Notre équipe, incluant des psychiatres et des psychologues, a développé une approche culturellement adaptée pour sensibiliser la population.

Cette mission pilote a permis de tester de nouvelles méthodes de prise en charge psychologique, respectueuses des traditions locales tout en apportant des solutions modernes aux troubles mentaux courants dans la communauté.`,
    highlights: [
      "1054 consultations incluant 28 en psychiatrie",
      "Première mission ASFO axée sur la santé mentale",
      "Sensibilisation de 400 personnes aux troubles mentaux",
      "Formation de 10 conseillers communautaires",
      "Création d'un groupe de soutien local",
      "Déstigmatisation des maladies mentales"
    ],
    gallery: [
      "/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp", "/6.webp"
    ],
    testimonials: [
      {
        name: "Dr. Fatou Ba",
        role: "Psychiatre de la mission",
        quote: "Cette mission a ouvert un dialogue nécessaire sur la santé mentale. L'accueil de la communauté a dépassé nos attentes les plus optimistes."
      },
      {
        name: "Amadou Sow",
        role: "Chef de famille",
        quote: "J'ai enfin compris que les troubles de mon fils n'étaient pas une malédiction mais une maladie qui peut être soignée. Merci à l'équipe ASFO."
      }
    ],
    impact: "Cette mission a brisé les tabous autour de la santé mentale et créé un groupe de soutien communautaire. Un programme de suivi psychologique mensuel a été établi, avec des consultations à distance pour les cas nécessitant un suivi régulier."
  },

  // Missions 2023
  "2023-velingara-ferlo": {
    id: "2023-velingara-ferlo",
    year: "2023",
    title: "Mission Médicale à Velingara Ferlo",
    location: "Village Velingara Ferlo",
    date: "2023",
    participants: 92,
    consultations: 1041,
    imageUrl: "/velingara-ferlo.webp",
    summary: "Mission marquant le début d'une nouvelle ère pour l'ASFO en 2023, axée sur l'innovation technologique et l'amélioration de l'accès aux soins.",
    specialties: [
      { name: "Médecine générale", count: 376 },
      { name: "Gériatrie", count: 138 },
      { name: "Pédiatrie", count: 242 },
      { name: "Gynécologie", count: 75 },
      { name: "Chirurgie dentaire", count: 98 },
      { name: "Circoncisions", count: 112 }
    ],
    story: `La mission de Velingara Ferlo a ouvert l'année 2023 avec ambition et détermination. Cette campagne de quatre jours, mobilisant 92 professionnels de santé, a marqué le début d'une nouvelle approche technologique dans nos interventions.

Velingara Ferlo, village pastoral de la région du Ferlo, présentait des défis logistiques particuliers liés à son isolement géographique. Notre équipe a développé des solutions innovantes pour l'acheminement des équipements et la communication avec les centres de référence.

Cette mission a servi de laboratoire pour tester de nouveaux protocoles de prise en charge, notamment pour les pathologies liées au mode de vie pastoral et aux conditions climatiques difficiles de la région.`,
    highlights: [
      "1041 consultations dans une zone isolée",
      "Introduction de tablettes pour le suivi médical",
      "112 circoncisions réalisées en conditions optimales",
      "Formation de 15 agents de santé pastoraux",
      "Création d'un système de communication d'urgence",
      "Sensibilisation sur les maladies liées au climat"
    ],
    gallery: [
      "/velingara1.webp", "/velingara2.webp", "/velingara3.webp", "/velingara4.webp", "/velingara5.webp", "/velingara6.webp"
    ],
    testimonials: [
      {
        name: "Mamadou Baldé",
        role: "Éleveur, Velingara Ferlo",
        quote: "C'est la première fois que des médecins viennent jusqu'à nous avec autant d'équipements. Mes enfants ont enfin pu être soignés correctement."
      },
      {
        name: "Aïcha Diallo",
        role: "Sage-femme locale",
        quote: "Les nouvelles techniques apprises vont m'aider à mieux accompagner les femmes de notre communauté, surtout pendant la saison sèche."
      }
    ],
    impact: "Cette mission a établi un système de communication d'urgence par radio pour les cas graves. Un programme de formation continue pour les agents de santé pastoraux a été mis en place, avec des sessions trimestrielles de mise à niveau."
  },

  "2023-barkewi": {
    id: "2023-barkewi",
    year: "2023",
    title: "Mission Médicale à Barkéwi",
    location: "Village Barkéwi",
    date: "2023",
    participants: 78,
    consultations: 729,
    imageUrl: "/barkewi.webp",
    summary: "Mission médicale centrée sur la santé pédiatrique et la nutrition infantile. Approche spécialisée répondant aux défis sanitaires de la communauté.",
    specialties: [
      { name: "Médecine générale", count: 166 },
      { name: "Gériatrie", count: 69 },
      { name: "Pédiatrie", count: 292 },
      { name: "Gynécologie", count: 78 },
      { name: "Chirurgie dentaire", count: 124 }
    ],
    story: `La mission de Barkéwi 2023 s'est distinguée par son focus particulier sur la santé pédiatrique et la nutrition infantile. Cette campagne de trois jours, réunissant 78 professionnels, a répondu à une demande spécifique de la communauté concernant la santé des enfants.

Barkéwi, village agricole confronté à des problèmes de malnutrition infantile, a bénéficié d'une approche multidisciplinaire combinant soins médicaux, éducation nutritionnelle et formation des mères aux bonnes pratiques alimentaires.

Cette mission a permis de développer un protocole spécialisé de prise en charge de la malnutrition, adapté aux ressources locales et aux habitudes alimentaires de la région.`,
    highlights: [
      "729 consultations avec 292 enfants pris en charge",
      "Dépistage systématique de la malnutrition",
      "Formation de 50 mères aux bonnes pratiques nutritionnelles",
      "Distribution de 200 kits nutritionnels",
      "Création d'un jardin communautaire",
      "Formation de 8 agents nutritionnels"
    ],
    gallery: [
      "/barkewi1.webp", "/barkewi2.webp", "/barkewi3.webp", "/barkewi4.webp", "/barkewi5.webp", "/barkewi6.webp"
    ],
    testimonials: [
      {
        name: "Fatou Sow",
        role: "Mère de famille",
        quote: "J'ai appris à préparer des repas équilibrés avec les produits de notre jardin. Mes enfants sont maintenant en meilleure santé."
      },
      {
        name: "Ousmane Diallo",
        role: "Agent de santé",
        quote: "Cette mission nous a donné les outils pour identifier et traiter la malnutrition. C'est un savoir précieux pour notre communauté."
      }
    ],
    impact: "Cette mission a créé un centre de récupération nutritionnelle géré par la communauté. Un programme de suivi mensuel des enfants malnutris a été établi, avec des indicateurs de croissance régulièrement évalués."
  },

  "2023-aoure": {
    id: "2023-aoure",
    year: "2023",
    title: "Mission Médicale à Aouré",
    location: "Village Aouré",
    date: "2023",
    participants: 85,
    consultations: 1076,
    imageUrl: "/aoure.webp",
    summary: "Mission médicale complète avec un focus sur les soins ophtalmologiques et la santé maternelle. Une approche intégrée pour répondre aux besoins diversifiés de la communauté.",
    specialties: [
      { name: "Médecine générale", count: 306 },
      { name: "Pédiatrie", count: 374 },
      { name: "Gynécologie", count: 141 },
      { name: "Ophtalmologie", count: 124 },
      { name: "Chirurgie générale", count: 34 }
    ],
    story: `La mission d'Aouré 2023 a été remarquable par sa diversité et sa complétude. Cette campagne de quatre jours, mobilisant 85 professionnels, a offert une gamme étendue de services médicaux à une population qui en était privée depuis longtemps.

Aouré, village situé dans une zone de confluence de plusieurs communautés, a attiré des patients de villages environnants, créant une dynamique régionale autour de cette mission. L'accent particulier mis sur l'ophtalmologie a répondu à un besoin criant de la région.

Cette mission a démontré l'importance d'une approche intégrée, combinant soins spécialisés et médecine générale pour offrir une prise en charge globale aux populations rurales.`,
    highlights: [
      "1076 consultations dans 5 spécialités",
      "374 enfants pris en charge en pédiatrie",
      "124 consultations ophtalmologiques spécialisées",
      "141 femmes consultées en gynécologie",
      "34 interventions chirurgicales mineures",
      "Formation de 12 agents de santé polyvalents"
    ],
    gallery: [
      "/aoure1.webp", "/aoure2.webp", "/aoure3.webp", "/aoure4.webp", "/aoure5.webp", "/aoure6.webp"
    ],
    testimonials: [
      {
        name: "Mariama Ba",
        role: "Patiente en ophtalmologie",
        quote: "Je retrouve enfin la vue grâce aux lunettes prescrites par le médecin. C'est un miracle pour moi qui ne voyais plus bien depuis des années."
      },
      {
        name: "Dr. Amadou Ndiaye",
        role: "Médecin de la mission",
        quote: "La diversité des cas rencontrés à Aouré nous a permis d'offrir une formation pratique exceptionnelle aux étudiants qui nous accompagnaient."
      }
    ],
    impact: "Cette mission a créé un centre de santé polyvalent avec du matériel ophtalmologique permanent. Un système de référence vers les hôpitaux régionaux a été établi pour les cas nécessitant une chirurgie spécialisée."
  },

  "2023-ndouloumadji-founebe": {
    id: "2023-ndouloumadji-founebe",
    year: "2023",
    title: "Mission Médicale à Ndouloumadji Founébé",
    location: "Village Ndouloumadji Founébé",
    date: "2023",
    participants: 96,
    consultations: 1316,
    imageUrl: "/village-ndouloumadji-founebe.webp",
    summary: "Mission d'envergure avec une forte mobilisation en ophtalmologie et chirurgie générale. Intervention complète touchant tous les groupes d'âge de la communauté.",
    specialties: [
      { name: "Médecine générale", count: 394 },
      { name: "Pédiatrie", count: 214 },
      { name: "Gynécologie", count: 193 },
      { name: "Ophtalmologie", count: 214 },
      { name: "Chirurgie générale", count: 138 }
    ],
    story: `La mission de Ndouloumadji Founébé 2023 a été l'une des plus complètes de l'année, avec 1316 consultations réalisées en cinq jours. Cette campagne, mobilisant 96 professionnels, a particulièrement brillé par la qualité de ses interventions en ophtalmologie et chirurgie générale.

Ndouloumadji Founébé, village historique de la région, a accueilli cette mission avec une organisation communautaire exemplaire. La population s'est mobilisée pour faciliter le travail des équipes médicales et assurer le bon déroulement des consultations.

Cette mission a servi de modèle pour l'organisation de futures campagnes de grande envergure, démontrant l'importance de la préparation communautaire et de la coordination entre les différentes spécialités médicales.`,
    highlights: [
      "1316 consultations, l'une des plus importantes de 2023",
      "214 consultations ophtalmologiques avec équipement spécialisé",
      "138 interventions chirurgicales mineures",
      "193 femmes prises en charge en gynécologie",
      "Formation de 18 agents de santé communautaire",
      "Création d'un bloc opératoire temporaire"
    ],
    gallery: [
      "/ndouloumadji1.webp", "/ndouloumadji2.webp", "/ndouloumadji3.webp", "/ndouloumadji4.webp", "/ndouloumadji5.webp", "/ndouloumadji6.webp"
    ],
    testimonials: [
      {
        name: "El Hadji Mamadou Diallo",
        role: "Chef de village",
        quote: "Cette mission a montré l'importance de l'organisation communautaire. Ensemble, nous avons réussi à offrir les meilleures conditions de travail aux équipes médicales."
      },
      {
        name: "Dr. Aissatou Ndiaye",
        role: "Chirurgienne de la mission",
        quote: "Les conditions de travail étaient exceptionnelles. Nous avons pu réaliser des interventions que nous n'aurions jamais imaginées dans un village rural."
      }
    ],
    impact: "Cette mission a laissé un bloc opératoire équipé pour les interventions mineures. Un programme de formation chirurgicale pour les infirmiers locaux a été établi, avec des sessions pratiques trimestrielles."
  },

  "2023-doumga-ouro-alpha": {
    id: "2023-doumga-ouro-alpha",
    year: "2023",
    title: "Mission Médicale à Doumga Ouro Alpha",
    location: "Village Doumga Ouro Alpha",
    date: "2023",
    participants: 89,
    consultations: 1302,
    imageUrl: "/village-doumga-ouro-alpha.webp",
    summary: "Mission remarquable avec une forte concentration en ophtalmologie et médecine générale. Intervention stratégique pour améliorer l'accès aux soins spécialisés.",
    specialties: [
      { name: "Médecine générale", count: 430 },
      { name: "Pédiatrie", count: 247 },
      { name: "Gynécologie", count: 114 },
      { name: "Ophtalmologie", count: 271 },
      { name: "Chirurgie générale", count: 113 }
    ],
    story: `La mission de Doumga Ouro Alpha 2023 a marqué un tournant dans notre approche des soins ophtalmologiques en milieu rural. Cette campagne de quatre jours, réunissant 89 professionnels, a offert 271 consultations ophtalmologiques, un record pour nos missions.

Doumga Ouro Alpha, village connu pour sa population vieillissante, présentait des besoins importants en soins oculaires. Notre équipe d'ophtalmologues, équipée de matériel de pointe, a pu diagnostiquer et traiter de nombreux cas de cataracte et autres pathologies oculaires.

Cette mission a démontré l'importance de la spécialisation dans nos interventions, tout en maintenant une approche globale de la santé communautaire.`,
    highlights: [
      "1302 consultations avec focus ophtalmologique",
      "271 consultations oculaires spécialisées",
      "430 consultations en médecine générale",
      "Distribution de 150 paires de lunettes",
      "Formation de 10 agents en santé oculaire",
      "Dépistage systématique de la cataracte"
    ],
    gallery: [
      "/doumga1.webp", "/doumga2.webp", "/doumga3.webp", "/doumga4.webp", "/doumga5.webp", "/doumga6.webp"
    ],
    testimonials: [
      {
        name: "Aminata Sall",
        role: "Patiente âgée",
        quote: "Grâce aux lunettes reçues, je peux enfin voir mes petits-enfants clairement. C'est le plus beau cadeau que j'aie jamais reçu."
      },
      {
        name: "Dr. Omar Ndiaye",
        role: "Ophtalmologue de la mission",
        quote: "La prévalence des troubles oculaires dans cette région nous a surpris. Cette mission a ouvert nos yeux sur l'importance des soins oculaires en milieu rural."
      }
    ],
    impact: "Cette mission a créé un centre de santé oculaire avec du matériel de diagnostic permanent. Un programme de dépistage annuel de la cataracte a été établi, avec des interventions chirurgicales programmées dans les hôpitaux régionaux."
  },

  "2023-sadel": {
    id: "2023-sadel",
    year: "2023",
    title: "Mission Médicale à Sadel",
    location: "Village Sadel",
    date: "2023",
    participants: 82,
    consultations: 1093,
    imageUrl: "/Sadel.webp",
    summary: "Mission médicale équilibrée avec une intervention chirurgicale importante. Focus sur la chirurgie générale et les soins ophtalmologiques pour la communauté locale.",
    specialties: [
      { name: "Médecine générale", count: 278 },
      { name: "Pédiatrie", count: 165 },
      { name: "Gynécologie", count: 131 },
      { name: "Ophtalmologie", count: 165 },
      { name: "Chirurgie générale", count: 236 }
    ],
    story: `La mission de Sadel 2023 s'est distinguée par l'importance de ses interventions chirurgicales. Cette campagne de quatre jours, mobilisant 82 professionnels, a réalisé 236 interventions chirurgicales, un record pour nos missions de cette année.

Sadel, village situé dans une zone où l'accès aux soins chirurgicaux était particulièrement difficile, a bénéficié d'une équipe chirurgicale expérimentée capable de traiter des pathologies complexes nécessitant une intervention.

Cette mission a démontré la faisabilité d'interventions chirurgicales de qualité en milieu rural, ouvrant de nouvelles perspectives pour nos futures campagnes médicales.`,
    highlights: [
      "1093 consultations avec 236 interventions chirurgicales",
      "Création d'un bloc opératoire temporaire équipé",
      "165 consultations ophtalmologiques",
      "Formation de 15 infirmiers aux techniques chirurgicales",
      "Prise en charge de pathologies complexes",
      "Suivi post-opératoire organisé"
    ],
    gallery: [
      "/sadel1.webp", "/sadel2.webp", "/sadel3.webp", "/sadel4.webp", "/sadel5.webp", "/sadel6.webp"
    ],
    testimonials: [
      {
        name: "Mamadou Ba",
        role: "Patient opéré",
        quote: "L'opération s'est très bien passée. Je n'aurais jamais imaginé pouvoir être opéré dans mon village avec autant de professionnalisme."
      },
      {
        name: "Dr. Fatou Diallo",
        role: "Chirurgienne chef",
        quote: "Cette mission a prouvé qu'on peut faire de la chirurgie de qualité partout, avec une bonne organisation et du matériel adapté."
      }
    ],
    impact: "Cette mission a laissé un mini-bloc opératoire fonctionnel pour les interventions d'urgence. Un programme de formation continue en techniques chirurgicales a été établi pour le personnel local, avec des supervisions mensuelles."
  },

  // Missions 2022
  "2022-walalde": {
    id: "2022-walalde",
    year: "2022",
    title: "Mission Médicale à Walaldé",
    location: "Village Walaldé",
    date: "2022",
    participants: 75,
    consultations: 593,
    imageUrl: "/walalde.webp",
    summary: "Mission médicale complète avec un focus équilibré sur la pédiatrie et la médecine générale. Intervention diversifiée couvrant 10 spécialités médicales pour répondre aux besoins variés de la communauté.",
    specialties: [
      { name: "Médecine générale", count: 208 },
      { name: "Pédiatrie", count: 173 },
      { name: "Gynécologie", count: 75 },
      { name: "Ophtalmologie", count: 70 },
      { name: "Chirurgie générale", count: 57 }
    ],
    story: `La mission de Walaldé 2022 a ouvert l'année avec une approche équilibrée et méthodique. Cette campagne de trois jours, mobilisant 75 professionnels de santé, a démontré l'importance d'une prise en charge globale adaptée aux besoins spécifiques de chaque communauté.

Walaldé, village agricole de la région, présentait des défis sanitaires typiques des communautés rurales : manque d'accès aux soins spécialisés, problèmes de santé maternelle et infantile, et besoins en soins oculaires pour une population vieillissante.

Cette mission a servi de modèle pour l'année 2022, établissant des protocoles de prise en charge qui ont été répliqués dans les missions suivantes. L'accent mis sur la formation des agents de santé locaux a créé un impact durable.`,
    highlights: [
      "593 consultations réparties équitablement entre spécialités",
      "173 enfants pris en charge avec suivi nutritionnel",
      "75 consultations gynécologiques avec dépistage",
      "70 consultations ophtalmologiques avec prescription de lunettes",
      "Formation de 12 agents de santé communautaire",
      "Création d'un système de référence vers l'hôpital régional"
    ],
    gallery: [
      "/walalde1.webp", "/walalde2.webp", "/walalde3.webp", "/walalde4.webp", "/walalde5.webp", "/walalde6.webp"
    ],
    testimonials: [
      {
        name: "Aissatou Diallo",
        role: "Mère de famille",
        quote: "Mes trois enfants ont été examinés et vaccinés. Les médecins ont pris le temps de m'expliquer comment prendre soin de leur santé au quotidien."
      },
      {
        name: "Ousmane Sow",
        role: "Agent de santé local",
        quote: "Cette mission m'a beaucoup appris. Je me sens maintenant plus confiant pour prendre en charge les cas courants dans notre dispensaire."
      }
    ],
    impact: "Cette mission a établi un système de suivi médical permanent avec des visites trimestrielles d'agents de santé formés. Un programme de vaccination élargi a été mis en place, couvrant tous les enfants du village et des hameaux environnants."
  },

  "2022-bokil-sountoube": {
    id: "2022-bokil-sountoube",
    year: "2022",
    title: "Mission Médicale à Bokil Sountoubé",
    location: "Village Bokil Sountoubé",
    date: "2022",
    participants: 68,
    consultations: 671,
    imageUrl: "/bocke-mbaybe-salsalbe.webp",
    summary: "Mission médicale d'envergure avec une forte mobilisation pédiatrique. Intervention complète couvrant 10 spécialités médicales pour une prise en charge globale de la population.",
    specialties: [
      { name: "Médecine générale", count: 137 },
      { name: "Pédiatrie", count: 192 },
      { name: "Gynécologie", count: 127 },
      { name: "Ophtalmologie", count: 93 },
      { name: "Chirurgie générale", count: 72 }
    ],
    story: `La mission de Bokil Sountoubé 2022 s'est particulièrement distinguée par son focus pédiatrique exceptionnel. Avec 192 consultations d'enfants sur 671 consultations totales, cette campagne de quatre jours a mobilisé 68 professionnels autour de la santé infantile.

Bokil Sountoubé, village jeune avec une forte proportion d'enfants, présentait des besoins spécifiques en santé pédiatrique. Notre équipe a développé une approche intégrée combinant soins curatifs, prévention et éducation sanitaire des parents.

Cette mission a permis de tester de nouveaux protocoles de prise en charge pédiatrique adaptés au contexte rural, incluant des techniques de diagnostic simplifiées et des traitements utilisant les ressources locales disponibles.`,
    highlights: [
      "671 consultations avec 192 enfants pris en charge",
      "Dépistage systématique de la malnutrition infantile",
      "127 consultations gynécologiques avec suivi prénatal",
      "Formation de 20 mères aux soins infantiles",
      "Création d'un centre de récupération nutritionnelle",
      "Distribution de 300 moustiquaires imprégnées"
    ],
    gallery: [
      "/bokil1.webp", "/bokil2.webp", "/bokil3.webp", "/bokil4.webp", "/bokil5.webp", "/bokil6.webp"
    ],
    testimonials: [
      {
        name: "Mariama Sall",
        role: "Mère de jumeaux",
        quote: "Mes jumeaux étaient malnutris. Grâce aux soins reçus et aux conseils nutritionnels, ils reprennent du poids et sont en meilleure forme."
      },
      {
        name: "Dr. Amadou Ba",
        role: "Pédiatre de la mission",
        quote: "Cette mission nous a permis de comprendre les défis spécifiques de la santé infantile en milieu rural. L'engagement des mères a été remarquable."
      }
    ],
    impact: "Cette mission a créé un centre de suivi nutritionnel géré par des mères formées. Un programme de pesée mensuelle des enfants de moins de 5 ans a été établi, avec un système d'alerte pour les cas de malnutrition sévère."
  },

  "2022-cas-cas": {
    id: "2022-cas-cas",
    year: "2022",
    title: "Mission Médicale à Cas-Cas",
    location: "Village Cas-Cas",
    date: "2022",
    participants: 79,
    consultations: 865,
    imageUrl: "/cas-cas.webp",
    summary: "Mission médicale remarquable avec une forte concentration en médecine générale et pédiatrie. Intervention ophtalmologique importante pour améliorer la santé visuelle de la communauté.",
    specialties: [
      { name: "Médecine générale", count: 256 },
      { name: "Pédiatrie", count: 211 },
      { name: "Gynécologie", count: 126 },
      { name: "Ophtalmologie", count: 169 },
      { name: "Chirurgie générale", count: 103 }
    ],
    story: `La mission de Cas-Cas 2022 a été remarquable par l'ampleur de ses interventions ophtalmologiques. Cette campagne de quatre jours, mobilisant 79 professionnels, a réalisé 169 consultations oculaires, répondant à un besoin criant de la population locale.

Cas-Cas, village situé dans une zone poussiéreuse où les problèmes oculaires sont fréquents, a bénéficié d'une équipe d'ophtalmologues expérimentés équipés de matériel de diagnostic moderne. Cette mission a permis de traiter de nombreux cas de conjonctivite chronique et de troubles de la réfraction.

L'approche intégrée de cette mission, combinant soins oculaires spécialisés et médecine générale, a créé un modèle de prise en charge globale qui a inspiré nos missions suivantes.`,
    highlights: [
      "865 consultations avec focus ophtalmologique",
      "169 consultations oculaires spécialisées",
      "Distribution de 120 paires de lunettes",
      "256 consultations en médecine générale",
      "Formation de 8 agents en santé oculaire",
      "Sensibilisation à l'hygiène oculaire"
    ],
    gallery: [
      "/cas-cas1.webp", "/cas-cas2.webp", "/cas-cas3.webp", "/cas-cas4.webp", "/cas-cas5.webp", "/cas-cas6.webp"
    ],
    testimonials: [
      {
        name: "El Hadji Omar Diallo",
        role: "Patient en ophtalmologie",
        quote: "Je ne voyais plus bien depuis des années. Avec les lunettes prescrites, je peux enfin lire le Coran sans difficulté. Que Dieu bénisse l'ASFO."
      },
      {
        name: "Fatou Ba",
        role: "Infirmière locale",
        quote: "J'ai appris à reconnaître les signes des maladies oculaires courantes. Cela m'aide beaucoup dans mon travail quotidien au dispensaire."
      }
    ],
    impact: "Cette mission a créé un centre de santé oculaire avec du matériel de base pour les consultations de routine. Un programme de dépistage scolaire annuel a été établi, permettant la détection précoce des troubles visuels chez les enfants."
  },

  "2022-marda": {
    id: "2022-marda",
    year: "2022",
    title: "Mission Médicale à Marda",
    location: "Village Marda",
    date: "2022",
    participants: 71,
    consultations: 685,
    imageUrl: "/marda.webp",
    summary: "Mission médicale équilibrée avec un focus sur la médecine générale et la pédiatrie. Intervention adaptée aux besoins spécifiques de la population locale avec des soins gynécologiques et ophtalmologiques.",
    specialties: [
      { name: "Médecine générale", count: 220 },
      { name: "Pédiatrie", count: 213 },
      { name: "Gynécologie", count: 102 },
      { name: "Ophtalmologie", count: 95 },
      { name: "Chirurgie générale", count: 55 }
    ],
    story: `La mission de Marda 2022 a illustré parfaitement l'approche équilibrée de l'ASFO en matière de soins communautaires. Cette campagne de trois jours, réunissant 71 professionnels, a offert une répartition harmonieuse entre médecine générale et pédiatrie.

Marda, village traditionnel avec une forte cohésion sociale, a accueilli cette mission avec une organisation communautaire exemplaire. La population s'est mobilisée pour faciliter l'accès aux soins et assurer le bon déroulement des consultations.

Cette mission a servi de modèle pour l'intégration des soins dans le tissu social local, démontrant l'importance de l'acceptation communautaire pour le succès des interventions médicales.`,
    highlights: [
      "685 consultations équilibrées entre spécialités",
      "220 consultations en médecine générale",
      "213 enfants pris en charge avec suivi",
      "102 femmes consultées en gynécologie",
      "Formation de 15 agents de santé communautaire",
      "Sensibilisation de 400 personnes"
    ],
    gallery: [
      "/marda1.webp", "/marda2.webp", "/marda3.webp", "/marda4.webp", "/marda5.webp", "/marda6.webp"
    ],
    testimonials: [
      {
        name: "Aminata Ndiaye",
        role: "Présidente des femmes",
        quote: "Cette mission a renforcé notre organisation communautaire. Nous avons appris à mieux nous organiser pour accueillir les équipes médicales."
      },
      {
        name: "Mamadou Diallo",
        role: "Enseignant",
        quote: "Les consultations des enfants de l'école ont permis de détecter plusieurs problèmes de santé. Maintenant, nous savons comment les orienter vers les soins appropriés."
      }
    ],
    impact: "Cette mission a renforcé l'organisation communautaire autour de la santé. Un comité de santé villageois a été créé, avec des responsabilités claires pour le suivi des patients et l'organisation des futures missions médicales."
  },

  "2022-ndiewara": {
    id: "2022-ndiewara",
    year: "2022",
    title: "Mission Médicale à Ndiéwara",
    location: "Village Ndiéwara",
    date: "2022",
    participants: 73,
    consultations: 826,
    imageUrl: "/ndiawara.webp",
    summary: "Mission médicale exceptionnelle avec une forte mobilisation pédiatrique. Intervention complète avec des soins spécialisés couvrant plusieurs domaines médicaux pour la communauté.",
    specialties: [
      { name: "Médecine générale", count: 212 },
      { name: "Pédiatrie", count: 306 },
      { name: "Gynécologie", count: 91 },
      { name: "Ophtalmologie", count: 105 },
      { name: "Chirurgie générale", count: 30 }
    ],
    story: `La mission de Ndiéwara 2022 restera mémorable par l'ampleur de sa prise en charge pédiatrique. Avec 306 consultations d'enfants sur 826 consultations totales, cette campagne de quatre jours a mobilisé 73 professionnels autour de la santé des plus jeunes.

Ndiéwara, village avec une population particulièrement jeune, présentait des défis spécifiques liés à la santé infantile : malnutrition, maladies infectieuses, retards de croissance. Notre équipe pédiatrique a développé une approche globale incluant soins, prévention et éducation des parents.

Cette mission a permis d'établir de nouveaux standards de prise en charge pédiatrique en milieu rural, avec des protocoles adaptés aux ressources disponibles et aux spécificités culturelles locales.`,
    highlights: [
      "826 consultations avec 306 enfants pris en charge",
      "Dépistage systématique des retards de croissance",
      "Programme de vaccination de rattrapage",
      "Formation de 25 mères aux soins infantiles",
      "Création d'un centre de suivi pédiatrique",
      "Distribution de compléments nutritionnels"
    ],
    gallery: [
      "/ndiawara1.webp", "/ndiawara2.webp", "/ndiawara3.webp", "/ndiawara4.webp", "/ndiawara5.webp", "/ndiawara6.webp"
    ],
    testimonials: [
      {
        name: "Khadija Sow",
        role: "Mère de 4 enfants",
        quote: "Tous mes enfants ont été examinés et soignés. J'ai appris beaucoup de choses sur leur alimentation et leur santé. C'est très précieux pour moi."
      },
      {
        name: "Dr. Fatou Diallo",
        role: "Pédiatre chef de mission",
        quote: "Cette mission nous a montré l'importance d'une approche communautaire de la santé infantile. L'implication des mères a été déterminante."
      }
    ],
    impact: "Cette mission a créé un réseau de mères éducatrices formées aux soins infantiles de base. Un programme de suivi mensuel de la croissance des enfants a été établi, avec des indicateurs de développement régulièrement évalués."
  },

  "2022-bocke-mbeybe-sallalbe": {
    id: "2022-bocke-mbeybe-sallalbe",
    year: "2022",
    title: "Mission Médicale à Bocké Mbéybé et Sallaobé",
    location: "Villages Bocké Mbéybé et Sallaobé",
    date: "2022",
    participants: 76,
    consultations: 681,
    imageUrl: "/bocke-mbaybe-salsalbe.webp",
    summary: "Mission médicale conjointe dans deux villages avec une forte concentration pédiatrique. Intervention coordonnée pour maximiser l'impact sur la santé communautaire des deux localités.",
    specialties: [
      { name: "Médecine générale", count: 184 },
      { name: "Pédiatrie", count: 221 },
      { name: "Gynécologie", count: 133 },
      { name: "Ophtalmologie", count: 79 },
      { name: "Chirurgie générale", count: 23 }
    ],
    story: `La mission conjointe de Bocké Mbéybé et Sallaobé 2022 a représenté une innovation dans notre approche territoriale. Cette campagne de cinq jours, mobilisant 76 professionnels, a permis de couvrir deux villages voisins avec une stratégie coordonnée.

Cette approche bi-villageoise a nécessité une logistique complexe mais s'est révélée très efficace pour optimiser les ressources humaines et matérielles. Les deux communautés ont bénéficié d'une prise en charge complète avec une attention particulière à la santé pédiatrique.

Cette mission pilote a démontré la faisabilité d'interventions multi-sites, ouvrant de nouvelles perspectives pour couvrir des zones plus étendues avec la même équipe médicale.`,
    highlights: [
      "681 consultations réparties sur deux villages",
      "221 enfants pris en charge dans les deux localités",
      "Coordination logistique entre deux sites",
      "133 consultations gynécologiques",
      "Formation d'agents de santé dans chaque village",
      "Création d'un système de référence inter-villages"
    ],
    gallery: [
      "/bocke1.webp", "/bocke2.webp", "/bocke3.webp", "/bocke4.webp", "/bocke5.webp", "/bocke6.webp"
    ],
    testimonials: [
      {
        name: "Mamadou Ba",
        role: "Chef de Bocké Mbéybé",
        quote: "Cette mission conjointe a renforcé les liens entre nos deux villages. Nous partageons maintenant les mêmes agents de santé formés."
      },
      {
        name: "Aissatou Diallo",
        role: "Sage-femme de Sallaobé",
        quote: "Travailler avec l'équipe de Bocké Mbéybé nous a permis d'apprendre de nouvelles techniques. Cette collaboration continue après la mission."
      }
    ],
    impact: "Cette mission a créé un réseau de santé inter-villages avec des agents formés qui se déplacent entre les deux localités. Un système de référence mutuelle a été établi, optimisant l'utilisation des ressources sanitaires disponibles."
  },

  "2022-diagu-amaly": {
    id: "2022-diagu-amaly",
    year: "2022",
    title: "Mission Médicale à Diagu Amaly",
    location: "Village Diagu Amaly",
    date: "2022",
    participants: 84,
    consultations: 941,
    imageUrl: "/diaga-awgaly.webp",
    summary: "Mission médicale d'envergure avec près de 1000 consultations. Intervention complète avec une forte mobilisation en médecine générale, pédiatrie et gynécologie pour une prise en charge globale.",
    specialties: [
      { name: "Médecine générale", count: 305 },
      { name: "Pédiatrie", count: 247 },
      { name: "Gynécologie", count: 170 },
      { name: "Ophtalmologie", count: 109 },
      { name: "Chirurgie générale", count: 110 }
    ],
    story: `La mission de Diagu Amaly 2022 a clôturé l'année en beauté avec 941 consultations, approchant la barre symbolique des 1000 consultations. Cette campagne de cinq jours, mobilisant 84 professionnels, a démontré la maturité opérationnelle de l'ASFO.

Diagu Amaly, village stratégique de la région, a bénéficié d'une intervention complète couvrant tous les aspects de la santé communautaire. L'équilibre entre les différentes spécialités a permis une prise en charge globale de la population.

Cette mission a servi de bilan pour l'année 2022, consolidant les acquis et préparant les innovations pour l'année suivante. Elle a démontré notre capacité à maintenir un haut niveau de qualité même dans des missions de grande envergure.`,
    highlights: [
      "941 consultations, proche du record annuel",
      "305 consultations en médecine générale",
      "247 enfants pris en charge avec suivi complet",
      "170 femmes consultées en gynécologie",
      "110 interventions chirurgicales mineures",
      "Formation de 20 agents de santé polyvalents"
    ],
    gallery: [
      "/diagu1.webp", "/diagu2.webp", "/diagu3.webp", "/diagu4.webp", "/diagu5.webp", "/diagu6.webp"
    ],
    testimonials: [
      {
        name: "El Hadji Amadou Diallo",
        role: "Imam du village",
        quote: "Cette mission a touché toutes les familles de notre village. L'organisation était parfaite et les soins de très haute qualité. Qu'Allah bénisse l'ASFO."
      },
      {
        name: "Dr. Mariama Sow",
        role: "Coordinatrice médicale",
        quote: "Cette mission a été un modèle d'organisation et d'efficacité. Elle synthétise tout ce que nous avons appris au cours de l'année 2022."
      }
    ],
    impact: "Cette mission a créé un centre de santé modèle avec toutes les spécialités représentées. Un programme de formation continue a été établi, faisant de Diagu Amaly un centre de référence pour la formation des agents de santé de la région."
  }
  
};

const SingleArchivePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mission, setMission] = useState(missionsData[id as keyof typeof missionsData]);

  useEffect(() => {
    setMission(missionsData[id as keyof typeof missionsData]);
    
    if (mission) {
      document.title = `${mission.title} | ASFO - Archives des Missions`;
    } else {
      document.title = 'Mission non trouvée | ASFO - Archives des Missions';
    }
  }, [id, mission]);

  if (!mission) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Eye className="text-red-500" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Mission non trouvée</h1>
          <p className="text-gray-600 mb-8">
            La mission que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button variant="primary" to="/archives">
            <ArrowLeft size={18} className="mr-2" />
            Retour aux archives
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0 z-0">
          <img 
            src={mission.imageUrl} 
            alt={mission.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block bg-teal-500 text-white text-sm px-3 py-1 rounded-full">
                Mission {mission.year}
              </span>
              <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                {mission.consultations} consultations
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {mission.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-white/80 text-sm gap-4 mb-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{mission.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>{mission.location}</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-2" />
                <span>{mission.participants} professionnels</span>
              </div>
            </div>

            <p className="text-lg text-white/90 leading-relaxed">
              {mission.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <Link 
              to="/archives" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Retour aux archives
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center bg-teal-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">{mission.consultations}</div>
                <div className="text-gray-600 text-sm">Consultations totales</div>
              </div>
              <div className="text-center bg-blue-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{mission.participants}</div>
                <div className="text-gray-600 text-sm">Professionnels mobilisés</div>
              </div>
              <div className="text-center bg-green-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{mission.specialties.length}</div>
                <div className="text-gray-600 text-sm">Spécialités médicales</div>
              </div>
              <div className="text-center bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">{mission.year}</div>
                <div className="text-gray-600 text-sm">Année de la mission</div>
              </div>
            </div>

            {/* Story */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Activity className="text-teal-600 mr-3" size={24} />
                Le récit de la mission
              </h2>
              <div className="prose prose-lg max-w-none">
                {mission.story.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {mission.highlights && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Points marquants</h2>
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                  <ul className="space-y-3">
                    {mission.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Specialties */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Répartition par spécialité</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mission.specialties.map((specialty, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{specialty.name}</span>
                      <span className="text-2xl font-bold text-teal-600">{specialty.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {mission.gallery && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Galerie photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mission.gallery.map((photo, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
                      <img
                        src={photo}
                        alt={`Photo ${index + 1} de la mission`}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {mission.testimonials && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Témoignages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mission.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="text-teal-600" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Heart className="text-red-500 mr-3" size={24} />
                Impact et héritage
              </h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 border border-teal-100">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {mission.impact}
                </p>
              </div>
            </div>

            {/* Back to Archives */}
            <div className="text-center">
              <Button variant="primary" to="/archives" size="large">
                <ArrowLeft size={18} className="mr-2" />
                Retour aux archives des missions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleArchivePage;