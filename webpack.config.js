const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js") /** 실행의 시작점 */,
  mode: "development" /** 개발환경별로 webpack의 내장기능 사용가능합니다. @Link https://webpack.kr/configuration/mode/#root */,
  devtool:
    "inline-source-map" /** devtool 옵션은 소스맵 생성 여부와 방법을 제어합니다. @Link https://webpack.kr/configuration/devtool/ */,
  devServer: {
    static: path.resolve(
      __dirname,
      "dist"
    ) /** 개발서버관련 설정 @Link https://webpack.kr/configuration/dev-server/#root */,
  },
  optimization: {
    runtimeChunk: "single",
  } /** @Link https://webpack.kr/configuration/optimization/#root */,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
  } /** webpack의 build 결과물에 대한 설정 @Link https://webpack.kr/configuration/output/#root */,
  plugins: [
    new HtmlWebpackPlugin({
      title: "from webpack",
    }),
  ] /** @Link https://webpack.kr/plugins/#root */,
  module: {
    /** @Link https://webpack.kr/configuration/module/#root */
    rules: [
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
};
