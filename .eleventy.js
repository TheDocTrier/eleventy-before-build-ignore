module.exports = function (eleventyConfig) {
  eleventyConfig.on("beforeBuild", function () {
    eleventyConfig.ignores.add("ignore.md");
  });
};
