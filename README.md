# morningnews  part 5
![Website image](/docs/morningnews-part5-image.png)

La Capsule #lacapsule

MorningNews est une application qui va vous permettre d’afficher les news récentes du journal Tech Crunch. Vous pourrez également sauvegarder vos articles préférés et les retrouver en vous connectant à votre compte.

Cette application sera développée en React mais cette fois-ci, vous allez lui ajouter de nouvelles briques techniques (navigation, Redux, authentification…).

Aujourd’hui, vous allez améliorer l’usage de votre application en rendant votre store persistant. Cela signifie que l’utilisateur pourra rester connecté et conserver ses articles favoris même lorsqu’il rafraîchit la page. Vous ajouterez également une fonctionnalité vous permettant de masquer certains articles, ceux que vous avez déjà lus par exemple.

## installation

- font awesome
```
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
```

- moment
`yarn add react-moment`

- antd
`yarn add antd`

- add Tech crunch url to next.config.js
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['techcrunch.com'],
  },
};

module.exports = nextConfig;
```