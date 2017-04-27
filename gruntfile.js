module.exports = function(grunt){
grunt.initConfig({
jshint:{
all:['in.js']
}
});
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default',['jshint']);
};
