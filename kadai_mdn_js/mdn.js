const birthday = new Date(2024,9,12);
 const year = birthday.getFullYear();
 const month = birthday.getMonth() + 1;  // JavaScriptの月は0から11なので1を加えます
 const day = birthday.getDate();

const birthdays = `${year}年${month}月${day}日`;
console.log(birthdays);