module.export = {
  modules: {
    rules: [
      {
        test: /\,scss$/,
        loader: "sass-loader",
        options: { sourceMap: true },
      },
      { loader: "resolve-url-loader", options: { sourceMap: true } },
    ],
  },
};
