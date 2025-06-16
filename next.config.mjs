/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Exclude existing svg rule
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push(
      // Use @svgr/webpack for importing SVGs as components (default)
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      // Allow importing SVGs as URL when ?url is added
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
        type: "asset/resource",
      }
    );

    return config;
  },
};

export default nextConfig;
