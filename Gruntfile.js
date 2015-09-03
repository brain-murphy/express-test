module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['app.js', 'routes/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/main.css': 'main.scss',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['jshint', 'sass']);

};
