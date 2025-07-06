import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const imagenes = Array.from({ length: 15 }, (_, i) => ({
  url: `/img/img${i + 1}.jpeg`,
  titulo: `Imagen ${i + 1}`,
}));

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: './partials',
      context: {
        imagenes
      }
    }),
  ],
});
