<template>
  <main>
    <TheHero> 
      {{ $t('hero.descr')}}
      </TheHero>
      <!-- PROMO -->
     <BrkPromo v-bind="{
        ...promoPrimaryStandardArgs,
        title: accueil.hero.title,
        description: accueil.hero.tagline,
        preTitle: accueil.hero.pretitle,
        

      }">
        <template #smallmedia>
          <BrkImage v-bind="{
            alt: 'Logo mega jackpot',
            sizing: 'cover',
            src: [{ path: `${accueil.hero.image._1080}`, width: '1080w' }],
            }" />
        </template>
        <template #largemedia>
          <BrkImage v-bind="{
            alt: 'Logo mega jackpot',
            sizing: 'cover',
            src: [{ path: `${accueil.hero.image._1920}`, width: '1920w' }],
            }" />
        </template>
      </BrkPromo>

    <!-- Groupe Card Hero -->
     <BrkTemplateColumns :nbColumnsMax="4" class="mt-5">
      <template #title>
        <BrkTitle
          title="Template 4 colonnes"
          headerSize="h2"
          headerStyle="heading1"
          alignment="left"
          :nbrLimitedLines="0"
          :isHidden="false"
          :inverted="false"
        >{{$t("offres.titre")}}</BrkTitle>
      </template>
      <template #content>
        <BrkCardHero
          v-for       ="offer in offersList"
          :key        ="offer._path"
          :title      ="offer.title"
          :postTitle  ="offer.description"
          :link       ="offer._path"
          :brkButtonArgs="{
              accessibilityText: '',
              inverted: false,
              label: 'Info',
              link: offer._path,
              size: 'lg',
              variant: 'secondary'
          }"
        >
          <template #image>
            <BrkImage 
              v-bind="{
                alt: 'Image divertissement',
                src: [{ path: `images/${offer._path.replace(`${locale}/`,'')}_300.jpg`, width: '300w' }],
                sizing: 'cover'
              }" 
            />
          </template>
        </BrkCardHero>

       
      </template>
    </BrkTemplateColumns>
    
  </main>
</template>

<script setup>
import { BrkMenuHorizontal, BrkPromo, BrkImage, BrkTagOverlay, BrkCardSecondaryInfoLogo,BrkTemplateColumns,BrkCardHero,BrkTitle,BrkCardSecondaryInfoText } from "@baraka/baraka";

//Hero section
const { path:route } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data: accueil } = await useAsyncData(`content-${route}`, () => {
  return queryContent().where({ _path: route }).findOne()
})

//Liste des offres de divertissement

const { data: offersList } = useAsyncData('offersList', () => {
  return queryContent(localePath('/divertissement')).find()
})


//Valeurs de composantes baraka
const brkButtonArgs = {
  accessibilityText: "",
  inverted: false,
  label: t('hero.btn'),
  link: "https://perdu.com",
  size: "md",
  variant: "tertiary",
};

const smallBrkImageArgs = {
alt: "Logo mega jackpot",
sizing: "cover",
  src: [{ path: `${accueil.value.hero.image._1080}`, width: "1080w" }],
};

const largeBrkImageArgs = {
  alt: "Logo mega jackpot",
  sizing: "cover",
  src: [{ path: `${accueil.value.hero.image._1920}`, width: "1920w" }],
};

const promoBaseArgs = {
  backgroundColor: "",
  contentAlign: "left",
  fullImage: true,
  inverted: true,
  titleElement: "h2",
  variant: "primary",
  withGradient: false,
  brkButtonArgs: brkButtonArgs,
};

const promoPrimaryStandardArgs = {
  ...promoBaseArgs,
};

</script>
