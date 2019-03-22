module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default: {
        tsconfig: "./tsconfig.json"
      }
    },
    watch: {
      files: ["src/**/*.tsx"],
      tasks: ["default"]
    },
    copy: {
      main: {
        files: [{ expand: true, cwd: "src/assets/", src: ["**"], dest: "lib/assets/" }]
      }
    }
  });
  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.registerTask("default", ["ts", "copy:main"]);
};
