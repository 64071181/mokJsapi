
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
function 琪琪修改(){ 
  const 始script = document.createElement('script');
  始script.src = "https://64071181.github.io/mokJsapi/mokJsApi.js";
  始css = '<link rel="stylesheet" href="https://64071181.github.io/mokJsapi/aki.css">';
    
  if (location.href.includes('?mokaki')) {
    console.log(`${'*'.repeat(22)}\n       琪琪修改\n${'*'.repeat(22)}`);
    // 使用本地腳本
    始script.src = "../../mokJsapi/mokJsApi.js";
    始css = '<link rel="stylesheet" href="../../mokJsapi/aki.css">';
  }

  // 動態載入腳本
  $('head').append(始css);
  document.head.appendChild(始script);

  // 執行本頁功能
  始script.onload = function () {Start();};
}


