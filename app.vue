<template>
  <!-- Menu -->
  <BrkMenuHorizontal :menuItems="itemArgs">
  </BrkMenuHorizontal>
  <!--nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation[1].children" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav-->
  <!-- Core -->
  <div>
    <NuxtPage />
  </div>
  <!-- Footer -->
  <BrkTemplateFooter v-bind="footerArgs">
 <template #logos>
      <div style="margin: 16px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: space-evenly; align-items: center">
        <img v-for="logo in footerArgs.logoItems" :key="logo" class="logo" style="max-width: 100%" :src="logo.src[0].path" :alt="logo.alt" />
      </div>
    </template>
  </BrkTemplateFooter>
  <!-- Print structure de menu -->
  <!--pre>{{ navigation }}</pre-->
</template>

<script setup>
import { provide } from "vue";
import { NuxtLink } from "#components";
import { BrkMenuHorizontal } from "@baraka/baraka";

provide("BarakaContext", "nuxt");
provide("BarakaLink", NuxtLink);
useHead({
  title: 'LQ Nuxt Content',
  link: [
    // {
    //   rel: 'stylesheet',
    //   href: 'https://unpkg.com/bulma@0.9.3/css/bulma.min.css'
    // } 
  ]
})
const { locale } = useI18n()
//Fetch navigation menu princpal
const localePath = useLocalePath()
const query = queryContent({
  where: {
    _path: { $contains: `${localePath()}` }
  }
})


const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(query))

//const itemArgs = navigation.value.map(definePath)
const itemArgs = navigation.value[0].children.map(definePath)

function definePath(nav) {
  return {
    text: nav.title,
    icon: "",
    accessibilityText: "Naviguer vers url",
    link: nav._path,
    minimized: false,
    variant: "primary",
  }
}

//Footer
const footerArgs = {
  brkNavFooterLinks: [
    {
      brkAccordionArgs: {
        accessibilityLabel: "À propos de Loto-Québec",
      },
      inverted: false,
      brkTitleArgs: {
        title: "Service à la clientèle",
        alignment: "left",
        headerStyle: "heading4",
      },
      linkList: [
        {
          label: "FAQ",
          link: "http://perdu.com",
          icon: "help",
        },
        {
          label: "Nous joindre",
          link: "http://google.com",
          icon: "call",
        },
      ],
    },
    {
      brkAccordionArgs: {
        accessibilityLabel: "À propos de Loto-Québec",
      },
      inverted: false,
      brkTitleArgs: {
        title: "Informations",
        alignment: "left",
        headerStyle: "heading4",
      },
      linkList: [
        {
          label: "Argent Web",
          link: "http://perdu.com",
        },
        {
          label: "Sécurité et intégrité",
          link: "http://google.com",
        },
        {
          label: "Aide technique",
          link: "http://perdu.com",
        },
        {
          label: "Carte du site",
          link: "http://google.com",
        },
      ],
    },
    {
      brkAccordionArgs: {
        accessibilityLabel: "À propos de Loto-Québec",
      },
      inverted: false,
      brkTitleArgs: {
        title: "À propos de Loto-Québec",
        alignment: "left",
        headerStyle: "heading4",
      },
      linkList: [
        {
          label: "À propos de nous",
          link: "http://perdu.com",
        },
        {
          label: "Responsabilité sociétale",
          link: "http://google.com",
        },
        {
          label: "Accessibilté",
          link: "http://google.com",
        },
        {
          label: "Carrières",
          link: "http://google.com",
        },
        {
          label: "Salle de presse",
          link: "http://google.com",
        },
      ],
    },
  ],
  socialMedia: [
    //Item 1
    {
      brkButtonArgs: {
        link: "https://www.facebook.com/JeuxenligneLQ",
        icon: "facebook",
      },
    },
    {
      brkButtonArgs: {
        link: "https://www.twitter.com/LotoQuebec",
        icon: "facebook",
      },
    },
    {
      brkButtonArgs: {
        link: "https://www.youtube.com/user/espacejeux",
        icon: "facebook",
      },
    },
    {
      brkButtonArgs: {
        link: "https://www.linkedin.com/company/espacejeux-loto-qu-bec/",
        icon: "facebook",
      },
    },
  ],
  menuItems: [
    {
      label: "Conditions d'utilisation",
      link: "https://www.google.ca/",
    },
    {
      label: "Conditions du jeu en ligne",
      link: "https://www.google.ca/",
    },
    {
      label: "Confidentialité",
      link: "https://www.google.ca/",
    },
    {
      label: "Réglementation",
      link: "https://www.google.ca/",
    },
  ],
  logoItems: [
    {
      alt: "Certification WLA",
      link: "https://lotoquebec.com",
      newTab: true,
      sizing: "contain",
      src: [{ path: "/images/template-footer/WLA-f.svg", width: "300w" }],
    },
    {
      alt: "Certification WLA",
      link: "https://lotoquebec.com",
      newTab: true,
      sizing: "contain",
      src: [{ path: "/images/template-footer/WLA-f.svg", width: "300w" }],
    },
  ],
  inverted: false,
};
</script>

<style lang="scss">
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/base/_all.sass";
@import "bulma/sass/grid/_all.sass";
@import "bulma/sass/layout/_all.sass";
@import "bulma/sass/helpers/_all.sass";
@import "bulma/sass/components/level.sass";
@import "bulma/sass/elements/container.sass";
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  background: #f0f2f4;
}
h1,h2,h3{font-weight: bold;}
h2{font-size: 1.5rem;}
h3{font-size: 1.2rem;}
p{
  margin: 0.5rem 0;
}

a {
  color: #3e8ed0;
  transition: color 0.3s ease;
}

a:hover {
  color: #2d628f;
}

#page{
  margin :2rem 1rem
}

</style>
