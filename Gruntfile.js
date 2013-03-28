module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: '_sass/**',
        tasks: ['compass:dev']
      },
      files: {
        files: ['*.html', '*.yml', '*.md', '_posts/**', '_includes/**', '_layouts/**'],
        tasks: ['shell:jekyll']
      },
      scripts: {
        files: 'js/*.js',
        tasks: ['copy:js']
      },
      styles: {
        files: 'css/*.css',
        tasks: ['copy:css']
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: '_sass',
          cssDir: 'css',
          imagesDir: 'img',
          javascriptsDir: 'js',
          require: 'breakpoint'
        }
      }
    },
    copy: {
      js: {
        files: [
          {
            src: 'js/*',
            dest: '_site/'
          }
        ]
      },
      css: {
        files: [
          {
            src: 'css/*',
            dest: '_site/'
          }
        ]
      }
    },
    shell: {
      jekyll: {
          command: 'rm -rf _site/*; jekyll',
          stdout: true
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "cssmin" task.
  //grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['compass:dev', 'shell:jekyll', 'watch']);

};