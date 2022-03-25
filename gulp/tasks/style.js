/* 
    src() - получает доступ к файлам и папкам по указанному  пути
    pipe() - действие
    dest() - вывод результата файла в папку назначения
*/

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries'; /* группировка медиа запросов */
import autoprefixer from 'gulp-autoprefixer'; /* добавление префиксов */
import cleanCss from 'gulp-clean-css'; /* Сжатие css файлов */
import rename from 'gulp-rename'; /* изменение названия файла */

const sass = gulpSass(dartSass);


export const style = () => {
    return app.gulp.src(app.path.src.style, {sourcemaps: true}) /* sourcemaps - чтобы видеть ошибки. Карты исходников */
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "CSS",
        message: "Error: <%= error.message%>"
    })))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserlist: ["last 3 versions"], /* Поддержка версий браузеров. (последнии 3 версии) */
        cascade: true
    }))
    .pipe(cleanCss())
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browsersync.stream())
}