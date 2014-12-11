module.exports = function(grunt) {

  grunt.initConfig({

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    }, 

    bowercopy: {
        // Javascript
        libs: {
            options: {
                destPrefix: 'prod/js/libs'
            },
            files: {
                'jquery.js': 'jquery/dist/jquery.js',
            }
        },

        bootstrap: {
            options: {
                destPrefix: 'prod'
            },
            files: {
                'bootstrap': 'bootstrap/dist',
            }
        }
    },

    sass: {                              
      dist: {                            
        options: {                       
          style: 'expanded'
        },
        files: {                        
          'prod/css/main.css': 'src/sass/main.sass',       
        }
      }
    },

    watch: {
      css: {
        files: 'src/sass/main.sass',
        tasks: ['sass']
      }
    }

  });

  
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server', ['nodemon']);
  grunt.registerTask('style', ['watch']);

};