module.exports = function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", function () {
    eleventyConfig.ignores.add("ignore.md");
  });
};
