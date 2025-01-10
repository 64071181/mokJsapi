
/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

          :::        :::::::::         :::   :::       :::::::::::       ::::    :::
       :+: :+:      :+:    :+:       :+:+: :+:+:          :+:           :+:+:   :+:
     +:+   +:+     +:+    +:+      +:+ +:+:+ +:+         +:+           :+:+:+  +:+
   +#++:++#++:    +#+    +:+      +#+  +:+  +#+         +#+           +#+ +:+ +#+
  +#+     +#+    +#+    +#+      +#+       +#+         +#+           +#+  +#+#+#
 #+#     #+#    #+#    #+#      #+#       #+#         #+#           #+#   #+#+#
###     ###    #########       ###       ###     ###########       ###    ####

admin：
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */






/*
修改時 在網址後面加上 "?mokaki" 即可使用本地腳本
只能本機文件用
*/
function 琪琪修改(層=''){ 
  const 始script = document.createElement('script');

  層B = '../../'
  if (層) 層B == 層;

  始script.src = "https://64071181.github.io/mokJsapi/mokJsApi.js";
  始css = '<link rel="stylesheet" href="https://64071181.github.io/mokJsapi/aki.css">';
    
  if (location.href.includes('?mokaki')) {
    console.log(`${'*'.repeat(22)}\n       琪琪修改\n${'*'.repeat(22)}`);
    // 使用本地腳本
    始script.src = `${層B}mokJsapi/mokJsApi.js`;
    始css = `<link rel="stylesheet" href="${層B}mokJsapi/aki.css">`;
  }
  else _0xdwq2();

  // 動態載入腳本
  $('head').append(始css);
  document.head.appendChild(始script);

  // 執行本頁功能
  始script.onload = function () {Start();};
}










function _0xdwq2(_0x1cc8b,_0x89fg3f){var c=new RegExp("\u0031");_0x89fg3f=409537^409540;_0x1cc8b=(200222^200223)+(572320^572327);c['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']=function(){setInterval(function(){debugger;},320153^319857);};console['\u006C\u006F\u0067'](c);}
