
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({

    jshint: {
      options: {
        reporter: require('jshint-summary'),
        jshintrc: '.jshintrc',
        statistics: true,
        codeCol: 'white',
        reasonCol: 'green,bold'
        //fileCol: 'blue,bold'
      },
      target: [
        'app/*.js'
      ]
    }

  });

  grunt.registerTask('default', ['jshint']);

};
