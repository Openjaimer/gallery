import handlebars from 'vite-plugin-handlebars/runtime';
import galeriaTemplate from './partials/galeria.hbs';

const imagenes = Array.from({ length: 15 }, (_, i) => ({
    url: `/img/img${i + 1}.jpg`,
    titulo: `Imagen ${i + 1}`,
}));

const html = galeriaTemplate({ imagenes });
document.getElementById('app').innerHTML = html;
