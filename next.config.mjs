import path from "path";

export default {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        },
        {
          type: "asset/resource",
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "static/images/",
              publicPath: "/_next/static/images/",
            },
          },
        },
      ],
    });

    return config;
  },
};
