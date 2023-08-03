const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('build/css'));
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;