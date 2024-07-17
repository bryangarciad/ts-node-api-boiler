/* eslint-disable */
import gulp from "gulp";
import ts from "gulp-typescript";
import { deleteAsync } from "del";
import replace from "gulp-replace";

const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean-build", function () {
    return deleteAsync("./dist");
});

gulp.task("fix-import", () => {
    return gulp.src("./dist/**/*")
        .pipe(replace(/from ".\/(.*)";/g, "from './$1.js';"))
        .pipe(replace(/from "..\/(.*)";/g, "from '../$1.js';"))
        .pipe(gulp.dest("dist"));
});

gulp.task("build-ts-project", () => {
    const tsResult = tsProject.src().pipe(tsProject());

    return tsResult.js
        .pipe(replace(/from ".\/(.*)";/g, "from './$1.js';"))
        .pipe(replace(/from "..\/(.*)";/g, "from '../$1.js';"))
        .pipe(gulp.dest("dist"));
});

gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*").pipe(gulp.dest("./dist/public"));
});

gulp.task("copy-scripts-to-public", () => {
    return gulp.src("./dist/scripts/**/*").pipe(gulp.dest("./dist/public"));
});

gulp.task("delete-scripts-source", () => {
    return deleteAsync("./dist/scripts");
});

gulp.task("copy-views", () => {
    return gulp.src("./src/views/**/*.ejs").pipe(gulp.dest("./dist/views"));
});


export default gulp.series("clean-build", "build-ts-project", "copy-assets", "copy-scripts-to-public", "copy-views", "delete-scripts-source");



