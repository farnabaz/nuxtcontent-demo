import { addComponent, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    // import { MyComponent as MyAutoImportedComponent } from 'my-npm-package'
    addComponent({
      name: 'MyBrkTitle',
      export: 'BrkTitle',
      filePath: '@baraka/baraka/dist/components/',
    })
  },
})