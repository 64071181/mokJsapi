/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      :::::::::           :::        ::::::::       ::::::::::
     :+:    :+:        :+: :+:     :+:    :+:      :+:
    +:+    +:+       +:+   +:+    +:+             +:+
   +#++:++#+       +#++:++#++:   +#++:++#++      +#++:++#
  +#+    +#+      +#+     +#+          +#+      +#+
 #+#    #+#      #+#     #+#   #+#    #+#      #+#
#########       ###     ###    ########       ##########

基本功能：
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */


const 親老婆 ="\u0032\u0064\u0032\u0063\u0038\u0062\u0037\u0063\u0036\u0037\u0064\u0030\u0037\u0034\u0061\u0030\u0063\u0032\u0061\u0062\u0035\u0034\u0038\u0037\u0063\u0064\u0034\u0033\u0063\u0032\u0062\u0032\u0035\u0035\u0039\u0061\u0066\u0039\u0034\u0066\u0036\u0039\u0036\u0030\u0035\u0038\u0032\u0064\u0037\u0032\u0039\u0030\u0033\u0037\u0066\u0062\u0034\u0065\u0034\u0066\u0030\u0036\u0037\u0065"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""['split']("".split("").reverse().join(""))['reverse']()["\u006a\u006f\u0069\u006e"]('')))['reverse']()['join'](''['split']("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](''));


function mokJsApi_說明(){

  console.log('\
    ****** 202408301445 ******\
    **************************\
    https://98672794.github.io/mokJsapi/\
    \
    **************************\
    \
    https://98672794.github.io/\
    **************************\
  ');

}  


$(document).ready(function() {
  // <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
  // 版權
  $('.mokJsApi_copyright').text('© ' + new Date().getFullYear() + ' All rights reserved by ' + location.hostname).css({'font-size': 'medium'});    
});



// $(document).ready(防止複製及禁用滑鼠右鍵())
function 防止複製及禁用滑鼠右鍵() {
  // 防止複製功能
  document.addEventListener('copy', function(e) {
    e.preventDefault();
    });

    // 禁用滑鼠右鍵
    $(document).ready(function() {
        $("body").on("contextmenu", function(e) {
            return false;
        });
    });
}



// 搜索功能實現
function _Aki搜尋(keyword,內容class,ai搜=false) {
// $('#searchInput').on('input', function() { _Aki搜尋($(this).val(),'.inventory-item'); });
// 選取所有符合條件的元素
$(內容class).each(function() {
  $(this).toggle($(this).text().includes(keyword));
  if(ai搜){
    // 搜尋Perplexity
    $('#搜尋Perplexity').html(`<a href="https://www.perplexity.ai/search?q=${keyword}" target="_blank">在 Perplexity 上搜尋 ${keyword}</a>`);
    $('#搜尋Perplexity').show();
  }
});
}



// 轉換 SHA256
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
function sha256(text) { return CryptoJS.SHA256(text).toString(); }



//获取当前时间
function nowTime() {
let now= new Date();
let _month = ( 10 > (now.getMonth()+1) ) ? '0' + (now.getMonth()+1) : now.getMonth()+1;
let _day = ( 10 > now.getDate() ) ? '0' + now.getDate() : now.getDate();
let _hour = ( 10 > now.getHours() ) ? '0' + now.getHours() : now.getHours();
let _minute = ( 10 > now.getMinutes() ) ? '0' + now.getMinutes() : now.getMinutes();
let _second = ( 10 > now.getSeconds() ) ? '0' + now.getSeconds() : now.getSeconds();
return now.getFullYear() + '-' + _month + '-' + _day + '_' + _hour  + _minute + _second;
}










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


function mokJsApi_客戶追蹤(){
  // qqq 轉localStorage
  // 用網址中的?做客戶追蹤
  // 給客的url加上 ?客名
  // 再記到github
  if ((location.href).indexOf('?') != -1) {
    // 顯示說明
    mokJsApi_說明();
  };
};


function _aki睇錯(){ 
  if ((location.href).indexOf('?mokaki') != -1) {
    console.log(' @@@@@@@@ _aki睇錯 @@@@@@@@ ');
    return true;
  } 
}


function 去admin頁(){
  if ((location.href).indexOf('???') != -1) window.location.href = location.href.replace("???","s.html");
}























/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

     :::    :::       ::::::::       :::::::::       ::::::::::                           :::        ::::::::
    :+:    :+:      :+:    :+:      :+:    :+:      :+:                                :+: :+:     :+:    :+:
   +:+    +:+      +:+             +:+    +:+      +:+                               +:+   +:+    +:+
  +#+    +:+      +#++:++#++      +#++:++#:       +#++:++#                         +#++:++#++:   +#+
 +#+    +#+             +#+      +#+    +#+      +#+                              +#+     +#+   +#+
#+#    #+#      #+#    #+#      #+#    #+#      #+#                              #+#     #+#   #+#    #+#
########        ########       ###    ###      ##########       ##########      ###     ###    ########


帳號事宜
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
function _帳戶名稱() { return localStorage.getItem('帳戶名稱'); }

function _數據文件() { return localStorage.getItem('數據文件'); }


// 由主網入 onclick="登入莫氏VIP('倉庫管理系統')" localStorage記錄由網
// 入時 localStorage.getItem('莫氏VIP分流') ,用於分流登入 ,localStorage.removeItem
function 登入莫氏VIP(分流){ localStorage.setItem('莫氏VIP分流', 分流); }


function 登出莫氏VIP(){
  localStorage.removeItem('帳戶名稱'); 
  localStorage.removeItem('數據文件'); 
  window.location.reload();
}
























/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      :::::::::           :::    :::::::::::           :::
     :+:    :+:        :+: :+:      :+:             :+: :+:
    +:+    +:+       +:+   +:+     +:+            +:+   +:+
   +#+    +:+      +#++:++#++:    +#+           +#++:++#++:
  +#+    +#+      +#+     +#+    +#+           +#+     +#+
 #+#    #+#      #+#     #+#    #+#           #+#     #+#
#########       ###     ###    ###           ###     ###

取數據、更新數據
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

function _取本頁數據庫() {
  // eval(localStorage.getItem('離線數據庫'))
  _更新數據( 本頁數據庫編號, '', '查看數據') // 從html 本頁數據庫編號 取得
  .then(查看已加密數據 => { 
    已解密數據 =  CryptoJS.AES.decrypt(查看已加密數據, 親老婆).toString(CryptoJS.enc.Utf8);
    
    // 離線保存解密後的數據
    localStorage.setItem('離線數據庫', 已解密數據)
    if(_aki睇錯()) console.log('已解密數據',localStorage.getItem('離線數據庫'))
    })
    .catch(error => {
        console.error('發生錯誤:', error); 
      });
  }





// https://chateverywhere.app?shareable_conversation_id=c67808a5-4dc2-46f7-8633-e0eceda21ab5
function _更新數據(數據id, 新數據='',sel='') {
  // _更新數據(本頁數據庫, inventoryData).then(新all數據 => { _上傳文到GitHub(帳號數據庫.split('.io/d0/')[1],新all數據 ); }).catch(error => {  console.error('發生錯誤:', error); });
  // _更新數據( 本頁數據庫, '', '查看數據').then(查看已加密數據 => { ddddd =  CryptoJS.AES.decrypt(查看已加密數據, 親老婆).toString(CryptoJS.enc.Utf8);console.log('ddddd',ddddd)}).catch(error => {  console.error('發生錯誤:', error); });
  return fetch(`${帳號數據庫}`) // 從html 帳號數據庫 = _數據文件() 取得
    .then(response => {
        if (!response.ok) {
            throw new Error('網絡響應不正常');
        }
        return response.text(); // 獲取文本內容
    })
    .then(原數據 => {
      // 分割原數據
      // https://chateverywhere.app?shareable_conversation_id=2e66b13e-39b8-4bff-802d-ce29c0631a50

      let 原數據頭 = 原數據.split(new RegExp(`const ${數據id} = '`))[0].trim() 
        , 原數據頭B = `${原數據頭}\nconst ${數據id} = '`

        , 原數據尾 = 原數據.split(new RegExp(`const ${數據id} = '`))[1].split(/'\/\/\$\$.*?\n/)[1]
        , 原數據尾B = `'//$$$$$$$$$$$$$$$$$$\n${原數據尾}'//$$$$$$$$$$$$$$$$$$\n`

        // 将新数据转换为 JSON 字符串
        // https://chateverywhere.app?shareable_conversation_id=b7515e9b-d513-40c9-a5d6-7e68a2c1b11f
        , new數據 = JSON.stringify(新數據, null, 2) 
        , new數據B = CryptoJS.AES.encrypt(new數據, 親老婆).toString()

        // 加上新的數據
        , all數據 = `${原數據頭B}${new數據B}${原數據尾B}`;

        if(_aki睇錯()){
          console.log('原數據=', 原數據);
          console.log('原數據頭=', 原數據頭B);
          console.log('原數據尾=', 原數據尾B);
          console.log('all數據=', all數據);
        }


      if (sel=='查看數據') {
        查看已加密數據 = 原數據.split(原數據頭B)[1].split(原數據尾B)[0];
        if(_aki睇錯()) console.log('查看已加密數據=', 查看已加密數據);
        return 查看已加密數據; // 返回查看數據
      }
      
      return all數據; // 返回所有數據
    })
    .catch(error => {
        console.error('發生錯誤:', error);
    });
}






/* $$$$$$$$$$ GitHub @@@@@@@@@@@@ */

// 上傳文到GitHub
async function _上傳文到GitHub(fileName,fileContent,repoName='',token='') {

  let repoOwner="\u0031\u0038\u0031\u0031\u0037\u0030\u0034\u0036"["\u0073\u0070\u006c\u0069\u0074"]("")["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join(""))
    , repoNameB="\u0030\u0064"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))['reverse']()["\u006a\u006f\u0069\u006e"](""))
    //  20250109d0
    , token0="\u0051\u0050\u0035\u0039\u0042\u0057\u0070\u0032\u0059\u0033\u0050\u0042\u0050\u0055\u0048\u0053\u0066\u0077\u0055\u0063\u0062\u0068\u0050\u0033\u0062\u0041\u0076\u0041\u004d\u0048\u0075\u0045\u0053\u0058\u0057\u0066\u0044\u0074\u0074\u0032\u006e\u0057\u0038\u0036\u004a\u0045\u0074\u0051\u0057\u0070\u0076\u0030\u0035\u006b\u0072\u006e\u006e\u006f\u004f\u005f\u0044\u006c\u0059\u007a\u0034\u004b\u0044\u007a\u0047\u0039\u0070\u004a\u0030\u0041\u0034\u004b\u0054\u004d\u0043\u0042\u0031\u0031\u005f\u0074\u0061\u0070\u005f\u0062\u0075\u0068\u0074\u0069\u0067"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join("")))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join(""));

  // 設定參數
  if (repoName != '') repoNameB = repoName
  if (token != '') token0 = token

  let G_Url     = `https://api.github.com/repos/${repoOwner}/${repoNameB}/contents/`
  // fine-grained personal access token > only repositories > Contents  
  // https://chat.openai.com/share/0013f2d3-9ca1-45c0-b0dc-5b1ad79a24aa
  // https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#personal-access-token-%E7%9A%84%E7%B1%BB%E5%9E%8B

  , apiUrl = G_Url+fileName;

  // 檢查文件是否存在
  let existingFileResponse = await fetch(apiUrl, {
      headers: {
  'Authorization': `token ${token0}`,
      }
  });
  let existingFileData = await existingFileResponse.json();

  if (existingFileData.message === 'Not Found') {
      // 如果文件不存在，則創建新文件
      let createFileResponse = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token0}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: nowTime()+'_上傳_'+fileName,
            content: btoa(unescape(encodeURIComponent(fileContent))) // 將文字內容轉換為Base64格式
        })
      });

      console.log(fileName,'已成功創建');
    } else {
        // 如果文件存在，則更新文件內容
        let updateFileResponse = await fetch(apiUrl, {
          method: 'PUT',
          headers: {
              'Authorization': `token ${token0}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              message: nowTime()+'_更新_'+fileName,
              content: btoa(unescape(encodeURIComponent(fileContent))), // 將文字內容轉換為Base64格式
              sha: existingFileData.sha
          })
      });

      console.log(fileName, '已成功更新');
  }
  alert('更新約需5分鐘，請耐心等待。');
  return fileName
}


