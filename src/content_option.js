const logotext = "JOHAN";
const meta = {
  title: "Radegonde Johan ",
  description:
    " Radegonde Johan développeur front-end formation openclassrooms (intégrateur web javascript rncp 5)",
};

const introdata = {
  title: "Radegonde Johan",
  animated: {
    first: "Developpeur front-end",
    second: "Site Web",
    third: "Mobile Web Apps",
  },
  description:
    "Issue d'une formation en développement web, je suis passionné par la création d'applications web et mobiles. J'aime relever des défis techniques et trouver des solutions innovantes.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "Ce que je fais",

  aboutme:
    "Je suis un développeur passionné par la création d'applications web et mobiles. J'aime relever des défis techniques et trouver des solutions innovantes. Mon objectif est de créer des expériences utilisateur exceptionnelles.",
};
const worktimeline = [
  {
    jobtitle: "intégrateur web",
    where: "Openclassrooms",
    date: "2024 - Présent",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 70,
  },
  {
    name: "HTML",
    value: 75,
  },
  {
    name: "React",
    value: 60,
  },
  {
    name: "CSS",
    value: 70,
  },
  {
    name: "Scss",
    value: 65,
  },
];

const services = [
  {
    title: "front-end development",
    description:
      "Développement d'interfaces utilisateur interactives et réactives avec React, HTML, CSS et JavaScript.",
  },
  {
    title: "Mobile web apps",
    description:
      "Création d'applications web mobiles réactives et performantes, adaptées à tous les appareils.",
  },
  {
    title: "React Design",
    description:
      "React est une bibliothèque JavaScript pour construire des interfaces utilisateur. Elle permet de créer des composants réutilisables et de gérer l'état de l'application de manière efficace.",
  },
];

import kasa from "./assets/images/projets/kasa.png";
import nina from "./assets/images/projets/ninaCarducci.png";
import ohmyfood from "./assets/images/projets/ohmyfood.png";
import booki from "./assets/images/projets/Booki.png";
import argentBank from "./assets/images/projets/argentBank.png";

const dataportfolio = [
  {
    img: kasa,
    description:
      "Création d'une application web de location immobilière avec React m'a apporter comme compétence l'intégration en React et l'utilisation des hooks.",
    link: "https://fabulous-pony-a81421.netlify.app/",
  },
  {
    img: nina,
    description:
      "Optimisation du référencement d'un site de photographe m'a appris à utiliser les balises sémantiques et les attributs pour améliorer l'accessibilité le SEO et la performance.",
    link: "https://johanr94.github.io/ninacarducci/",
  },
  {
    img: ohmyfood,
    description:
      "Amélioration de l'interface d'un site mobile avec des animations CSS m'a permis de maîtriser les transitions et les animations pour rendre l'expérience utilisateur plus fluide.",
    link: "https://johanr94.github.io/Ohmyfood/",
  },
  {
    img: booki,
    description:
      "Création de la page d'accueil d'une agence de voyage avec HTML & CSS m'a permis de perfectionner mes compétences en intégration web et en responsive design.",
    link: "https://melodic-kheer-b152ad.netlify.app/",
  },
  {
    img: argentBank,
    description:
      " Création d'une application bancaire avec React m'a permis de développer des compétences en gestion d'état avec redux .",
    link: "https://github.com/johanR94/ArgentBank-Frontend",
  },
];

const contactConfig = {
  YOUR_EMAIL: " radegonde.johan@outlook.fr",
  YOUR_FONE: "(555)123-4567",
  description:
    "Fonction d'envoi actuellement indisponible. Je vous prie de cliquer sur l'adresse mail pour envoyer un mail  \n\n",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/johanR94",
  linkedin: "www.linkedin.com/in/johan-radegonde-6b0581234",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
