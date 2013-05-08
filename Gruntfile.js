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
        files: ['*.html', '*.yml', '*.md', '_posts/**', '_includes/**', '_layouts/**', 'blogging/**', 'working/**'],
        tasks: ['shell:jekyll']
      },
      scripts: {
        files: 'js/*.js',
        tasks: ['copy:js']
      },
      styles: {
        files: 'css/*.css',
        tasks: ['copy:css']
      },
      images: {
        files: 'images/*',
        tasks: ['copy:images']
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: '_sass',
          cssDir: 'css',
          imagesDir: 'img',
          javascriptsDir: 'js',
          require: 'breakpoint',
          force: true,
          outputStyle: 'expanded' //nested, expanded, compact, compressed
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
      },
      images: {
        files: [
          {
            src: 'images/*',
            dest: '_site/'
          }
        ]
      }
    },
    shell: {
      jekyll: {
          command: 'rm -rf _site/*; jekyll --url http://luke.is.dev',
          stdout: true
      },
      jekyll_deploy: {
          command: 'rm -rf _site/*; jekyll',
          stdout: true
      }
    },
    uglify: {
      options: {
        banner: '/*! [grunt] <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'js/main.min.js': [
            'js/jquery-2.0.0.js',
            'js/jquery.history.js',
            'js/main.js'
          ]
        }
      }
    },
    cssmin: {
      with_banner: {
        options: {
          banner: '/*! [grunt] <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: { 'css/main.min.css': ['css/lib/normalize.css', 'css/main.css'] }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['compass:dev', 'shell:jekyll', 'watch']);
  grunt.registerTask('deploy', ['compass:dev', 'uglify', 'cssmin', 'shell:jekyll_deploy']);

};