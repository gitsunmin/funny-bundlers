import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: path.resolve(process.cwd(), "src/index.js") /** 실행의 시작점 */,
  mode: "development" /** 개발환경별로 webpack의 내장기능 사용가능합니다. @Link https://webpack.kr/configuration/mode/#root */,
  devtool:
    "inline-source-map" /** devtool 옵션은 소스맵 생성 여부와 방법을 제어합니다. @Link https://webpack.kr/configuration/devtool/ */,
  devServer: {
    static: path.resolve(
      process.cwd(),
      "dist"
    ) /** 개발서버관련 설정 @Link https://webpack.kr/configuration/dev-server/#root */,
  },
  optimization: {
    runtimeChunk: "single",
  } /** @Link https://webpack.kr/configuration/optimization/#root */,
  output: {
    path: path.resolve(process.cwd(), "webpack_dist"),
    filename: "[name].index.js",
    assetModuleFilename: "assets/[hash][ext][query]",
  } /** webpack의 build 결과물에 대한 설정 @Link https://webpack.kr/configuration/output/#root */,
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello Webpack",
      templateContent: ({ htmlWebpackPlugin }) => `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
      <title>${htmlWebpackPlugin.options.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="root"></div>
    </body>
    <script src="main.index.js"></script>
    <script defer src="runtime.index.js"></script><script defer src="main.index.js"></script></head>
</html>
      `,
    }),
  ] /** @Link https://webpack.kr/plugins/#root */,
  module: {
    /** @Link https://webpack.kr/configuration/module/#root */
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
