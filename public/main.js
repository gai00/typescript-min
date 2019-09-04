require.config({
  baseUrl: "js",
  
  // 外部的像是React有支援AMD格式的lib
  paths: {
    // "react": "https://cdnjs.cloudflare.com/ajax/libs/react/16.9.0/umd/react.development",
    // "react-dom": "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.development"
  },
  
  // Ref: https://www.itread01.com/content/1544853252.html
  // 給global變數用的，尤其是不支援AMD格式的。
  shim: {
  }
});
// 進入點 "index" 對應的是 baseUrl + 名稱 + ".js" => "js/index.js"
require([ "index" ]);