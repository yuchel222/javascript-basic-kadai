const today = new Date();
 const year = today.getFullYear();
 const month = today.getMonth() + 1;  // JavaScriptの月は0から11なので1を加えます
 const day = today.getDate();

const todays = `${year}年${month}月${day}日`;
console.log(todays);