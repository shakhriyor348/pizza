// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './app/build';
const srcFolder = './app/src';


export const path = {
    /* объект путей с результатом проекта */
    build: { 
        html: `${buildFolder}/`,
        style: `${buildFolder}/style/`,
        images: `${buildFolder}/images/`,
        js: `${buildFolder}/script/`,
        fonts: `${buildFolder}/fonts/`
    },
    /* Объект путей с исходным файлом */
    src: {
        html: `${srcFolder}/*.pug`,
        style: `${srcFolder}/style/style.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpeg,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        js: `${srcFolder}/script/app.js`,
    },
    /* объект путей к файлам и папкам за которыми нужно следить */
    watch: {
        html: `${srcFolder}/**/*.pug`,
        style: `${srcFolder}/style/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpeg,gif,webp}`,
        js: `${srcFolder}/script/**/*.js`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder
}

