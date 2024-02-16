<template>

  <BrkPageHeader 
    v-bind="{
      titleOnly,
      title:offre.title
    }"
  />

  <main>
    <section>
      <BrkImage
      :src="[
        {
          path: `/images${offre._path.replace('en/','')}_1920.jpg`,
          width: '1920w',
        },
      ]"
      alt="Photo de l'offre"
      sizing="contain"
    />
    </section>
    <section>
         <ContentDoc />
    </section>
  </main>
</template>

<script setup>
import { BrkPageHeader,BrkImage} from "@baraka/baraka";
const { path:route } = useRoute()

const { data: offre } = await useAsyncData(`content-${route}`, () => {
  return queryContent().where({ _path: route }).findOne()
})

const titleOnly = {
  brkTitleArgs: {
    headerSize: "h1",
    headerStyle: "heading1",
    alignment: "left",
    isHidden: false,
    inverted: false,
    removeMargins: false,
    default: "Exemple de titre",
  },
  inverted: false,
  title: null
};
</script>

<style>
h2{
  color:rgb(17, 23, 129);
  font-size: 1.5rem;
  margin:1.5rem 0;
  font-weight: bold;
}

</style>
