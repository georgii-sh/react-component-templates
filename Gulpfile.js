/* eslint-disable */

const gulp = require('gulp')
const path = require('path')
const yargs = require('yargs').argv
const tpl = require('gulp-template')
const rename = require('gulp-rename')

const paths = {
  blankComponentTemplate: 'templates/Component/*.**',
  blankComponentReduxTemplate: 'templates/ComponentRedux/*.**'
}

const generate = type => {
  const cap = val => val.charAt(0).toUpperCase() + val.slice(1)

  const { name } = yargs
  let parentPath = yargs.parent || ''
  if (!parentPath && type === 'component') {
    parentPath = '.'
  }
  const destPath = path.join(path.join('src', parentPath), name)
  return gulp
    .src(type === 'componentRedux' ? paths.blankComponentReduxTemplate : paths.blankComponentTemplate)
    .pipe(
      tpl({
        name,
        upCaseName: cap(name)
      })
    )
    .pipe(
      rename(givenPath => {
        givenPath.basename = givenPath.basename.replace(type, name)
      })
    )
    .pipe(gulp.dest(destPath))
}

gulp.task('componentRedux', () => {
  return generate('ComponentRedux')
})

gulp.task('component', () => {
  return generate('Component')
})
