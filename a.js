
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
*/


function _aki睇錯(顯示說明){ 
  // _aki睇錯([`帳號數據庫=${帳號數據庫}`,`數據庫位=${數據庫位}`])
  return
  //if ((location.href).indexOf('?mokaki') == -1) return
  console.log(' @@@@@@@@ _aki @@@@@@@@ ');
  for (let i = 0; i < 顯示說明.length; i++) {
    console.log(顯示說明[i]);
  }
  return true;  
}

function 琪琪修改(){ 
  if ((location.href).indexOf('?mokaki') == -1) {
    $('head').append('<link rel="stylesheet" href="https://64071181.github.io/mokJsapi/aki.css">');
    $('head').append('<script src="https://64071181.github.io/mokJsapi/mokJsApi.js"></script>');
    return
  }
  console.log(`
    ${'*'.repeat(22)}
        琪琪修改
    ${'*'.repeat(22)}
  `);
  $('head').append('<link rel="stylesheet" href="../../mokJsapi/aki.css">');
  $('head').append('<script src="../../mokJsapi/mokJsApi.js"></script>');
}
