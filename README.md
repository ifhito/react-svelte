# react-svelte

Webpack5 Module Federationを使用した方法。

# 比較

## useRef使ってReactに埋め込む方法
### メリット
- いちいち、使うコンポーネントの面倒な設定は必要ない
- コンパイルしてpurejs化したsvelteを使う。そのため、web component化はしないので、svelteの機能は全て使える
### デメリット
- webpackではsrcファイル内でリソースを完結させる必要がある。(設定でどうにかなる?)

## webpack使う方法
### メリット
- react内やvue内で使うためのコードを用意する必要はない
- 完全に別のサーバーとしてコンポーネントを用意し読み込ませることが可能
### デメリット
- web component化するための問題がある場合がある。詳しくは参考サイトのSvelteでweb componentを参照
- webpack5の機能なのでrollupやviteなどでsvelteを使いたい場合は使えない

# 参考サイト

[Webpack5 Module Federation で始めるマイクロフロントエンド](https://zenn.dev/azukiazusa/articles/6686cb89ae13e5)

[ModuleFederationPlugin](https://webpack.js.org/plugins/module-federation-plugin/)

[svelte - Custom element API](https://svelte.dev/docs#Custom_element_API)

[SvelteでWeb Componentsを作ってみた](https://tech.actindi.net/2021/04/05/080000)

[Webpack module federation](https://stackoverflow.com/questions/68976213/webpack-module-federation)
(Module Federationの設定方法の修正のためのstackoverflow)

[Svelteでweb components](https://zenn.dev/miyanokomiya/scraps/1bf5b9c21d7564)