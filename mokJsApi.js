






/*

登入 記data 使用說明 
登入 / 註冊
login.html

aki 的客登入 / 註冊
all.html 登入莫氏VIP('系統標題')
<a onclick="登入莫氏VIP('莫氏倉庫管理系統')" href='../login.html'>免費使用</a>
註冊或登入：新用戶名+密=戶口文件名，記到d0，已有帳號直接用文件名內資料。
數據保存於 :
https://64071181.github.io/d0/asdad...


aki 的客的客 登入 / 註冊
客的網址:
https://64071181.github.io/?0xasdad...


*/





/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

        :::   :::       ::::::::       :::    :::           :::        :::    :::       :::::::::::
      :+:+: :+:+:     :+:    :+:      :+:   :+:          :+: :+:      :+:   :+:            :+:
    +:+ +:+:+ +:+    +:+    +:+      +:+  +:+          +:+   +:+     +:+  +:+             +:+
   +#+  +:+  +#+    +#+    +:+      +#++:++          +#++:++#++:    +#++:++              +#+
  +#+       +#+    +#+    +#+      +#+  +#+         +#+     +#+    +#+  +#+             +#+
 #+#       #+#    #+#    #+#      #+#   #+#        #+#     #+#    #+#   #+#            #+#
###       ###     ########       ###    ###       ###     ###    ###    ###       ###########

202410211001                                         mokaki
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
























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


const 親老婆 ="\u0032\u0064\u0032\u0063\u0038\u0062\u0037\u0063\u0036\u0037\u0064\u0030\u0037\u0034\u0061\u0030\u0063\u0032\u0061\u0062\u0035\u0034\u0038\u0037\u0063\u0064\u0034\u0033\u0063\u0032\u0062\u0032\u0035\u0035\u0039\u0061\u0066\u0039\u0034\u0066\u0036\u0039\u0036\u0030\u0035\u0038\u0032\u0064\u0037\u0032\u0039\u0030\u0033\u0037\u0066\u0062\u0034\u0065\u0034\u0066\u0030\u0036\u0037\u0065"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""['split']("".split("").reverse().join(""))['reverse']()["\u006a\u006f\u0069\u006e"]('')))['reverse']()['join'](''['split']("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](''))
    , 總網址 = '64071181.github.io/'


function mokJsApi_說明(){

  console.log(`
    ****** 202408301445 ******
    **************************
    https://64071181.github.io/mokJsapi/
    **************************
    https://64071181.github.io/
    **************************
    ****** 202410201051 ******
  `);

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



// 複製功能
function copyToClipboard(textareaId) {
    // onclick="copyToClipboard('VipPegaIDInput')"
    const textarea = document.getElementById(textareaId);
    textarea.select();
    document.execCommand('copy');
    alert(`內容已複製到剪貼簿`);
}





// 生成QRCode
// <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js">//QRcode</script>
function _生成QRCode(圖url,顯示位) {
  var url = document.getElementById(圖url).value;
  var qrcodeContainer = document.getElementById(顯示位);
  qrcodeContainer.innerHTML = "";  // 清空之前的QR Code
  if (url) {
      QRCode.toCanvas(qrcodeContainer, url, function (error) {
          if (error) console.error(error);
          //console.log('QR Code 生成成功');
      });
  } else {
    qrcodeContainer.innerHTML = "請輸入有效的網址！"
  }
}

// 下載QRCode
// https://chatgpt.com/share/67153726-b4d0-8002-9dce-41d16a2a3ad2
function _下載QRCode(顯示位) {
  // onclick="_下載QRCode('您的網址qrcode')"
  // 取得 canvas 元素
  const canvas = document.getElementById(顯示位);
  const ctx = canvas.getContext('2d');

  // 將 canvas 轉換為 Data URL
  const imageUrl = canvas.toDataURL('image/png');
        
  // 建立一個隱藏的 a 標籤，用於下載圖片
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = `QR_${網站標題}.png`; // 下載的檔案名
  link.click(); // 模擬點擊 a 標籤，觸發下載
}






// _顯示聯莫
function _顯示聯莫(data) {
  // <samp id="莫生查詢" class="none">莫生我要查詢</samp>
  // <div id="ContactAKI" class="ContactAKI"><!-- JS _顯示聯莫 --></div>

  // const 聯莫 = ['moksurky@gmail.com','https://wa.me/85264071181/','https://i.meee.com.tw/atcX6QM.png','https://www.instagram.com/moksurky2025/','https://line.me/ti/p/UlSPd7p9zh/','https://www.facebook.com/aki.mok.10/','http://t.me/mokaki/'

  查詢內容 = $('#莫生查詢').text()

  let mail = whatsapp = Wechat = WechatQR = instagram = line = facebook = telegram = ''

  // ${data[0].WechatQR}
  
  if(data[0]) mail = `<a href="mailto:${data[0]}?subject=${查詢內容}&body=${查詢內容}" target="_blank"><li><i class="fa fa-envelope"></i></li></a>`;
  if(data[1]) whatsapp = `<a href="${data[1]}?text=${查詢內容}/" target="_blank"><li><i class="fab fa-whatsapp"></i></li></a>`;


  if(data[2]) {
    Wechat = `<li><i class="fa fa-wechat"></i></li>`
    WechatQR =`<div class="WechatQR圖" style="background-image: url('${data[2]}');background-size: 100%;"></div>`
  }
  


  if(data[3]) instagram = `<a href="${data[3]}" target="_blank"><li><i class="fa fa-instagram"></i></li></a>`;
  if(data[4]) line = `<a href="${data[4]}" target="_blank"><li><i class="lineB">  </i></li></a>`;
  if(data[5]) facebook = `<a href="${data[5]}" target="_blank"><li><i class="fa fa-facebook">  </i></li></a>`
  if(data[6]) telegram = `<a href="${data[6]}" target="_blank"><li><i class="fa fa-telegram">  </i></li></a>`;

  聯卡 = `
    <br class="clear-float">
    <ul>${mail}${whatsapp}${Wechat}${instagram}${line}${facebook}${telegram}</ul>
    ${WechatQR}
    <hr class="clear-float">
  `

$(`#ContactAKI`).html(聯卡);

document.querySelectorAll('.ContactAKI ul li .fa-wechat').forEach(icon => {
  const qr = document.querySelector('.WechatQR圖');
  icon.parentElement.addEventListener('mouseenter', () => {
    qr.style.display = 'block';
  });
  icon.parentElement.addEventListener('mouseleave', () => {
    qr.style.display = 'none';
  });
});


}










function _返液alert(位) {  信息 = $(位).text();  alert(信息); }












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
function mokJsApi_客戶追蹤(){
  GMT
};
*/

function _aki睇錯(顯示說明){ 
  // _aki睇錯([`帳號數據庫=${帳號數據庫}`,`數據庫位=${數據庫位}`])
  if ((location.href).indexOf('?mokaki') == -1) return
    
  console.log(' @@@@@@@@ _aki @@@@@@@@ ');
  for (let i = 0; i < 顯示說明.length; i++) {
    console.log(顯示說明[i]);
  }
  return true;  
}



























/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      ::::::::::       :::        ::::::::     :::       :::
     :+:              :+:       :+:    :+:    :+:       :+:
    +:+              +:+       +:+    +:+    +:+       +:+
   :#::+::#         +#+       +#+    +:+    +#+  +:+  +#+
  +#+              +#+       +#+    +#+    +#+ +#+#+ +#+
 #+#              #+#       #+#    #+#     #+#+# #+#+#
###              ########## ########       ###   ###


分流：
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */



function 網頁分流(){
  if ((location.href).indexOf('???') != -1) 去admin頁()
  
  if ((location.href).indexOf('?0x') != -1) _到VIP網()

  //自動機器人 sell ulr
  if ((location.href).indexOf('?=boss?') != -1) window.location.href = "./數碼轉型/2index.html?sellIn"
}



function 去admin頁(){
  window.location.href = location.href.replace("???","s.html");
}



// 202412
let VIP註冊時的網模版
function _vipLogin分流(標,由,去){
  // 任何網入 如沒數據中VIP的網模版 由網的網模版
  if(!localStorage.getItem('VIP註冊時的網模版')) {
    localStorage.setItem('VIP註冊時的網模版', decodeURIComponent(location.href.split(總網址)[1].split('.html')[0])+'.html');
  }

  // 登入莫氏VIP
  if ((location.href).indexOf(標) != -1) {
    登入莫氏VIP(由)
    window.location.href = 去
  }
}





// 未登入賦了 數據中VIP的網模版 不能轉其他頁
async function _不同分流退出(){
  數據模版 = await _取本頁數據庫('VIP的網模版', '數據中VIP的網模版', '不用解謝謝');

  // 如沒數據中VIP的網模版 用VIP註冊時的網模版
  if (!數據模版) 數據模版 = VIP註冊時的網模版;

  現網址 = location.href.split(總網址)
  現網址頭 = 現網址[0]
  現網址尾 = decodeURIComponent(現網址[1]).split('#')[0]


  // 如沒數據中VIP的網模版 用VIP註冊時的網模版
  if (!數據模版) 數據模版 = VIP註冊時的網模版;

  現網址 = location.href.split(總網址)
  現網址頭 = 現網址[0]
  現網址尾 = decodeURIComponent(現網址[1]).split('#')[0]

  if (數據模版 && 現網址尾 != 數據模版) {
    // 不同分流回到VIP網頁
    _返液alert('#您已登錄其他服務',數據模版)
    window.location.href = 現網址頭+總網址+數據模版
  }

  // 是否VIP
  v嗎 = ''
  if(localStorage.getItem('VipAdmin標記')) v嗎 = '!!! VIP帳號 !!!'
  console.log(`
    已登入帳號=${已登入帳號}
    帳號數據庫=${帳號數據庫}
    VIP的網模版=${數據模版}
    ${v嗎}
  `);


}





async function _到VIP網(){
  // 用 0x+ VIP的文件名 = VIP網頁ID
  // 找文件的 VIP網版面
  // 比VIP的user入

  console.log(`_到VIP網...`);

  VIP網頁ID = location.href.split('?0x')[1]

  在不 = await _檢查帳號是否存在(VIP網頁ID)
  if (在不 === null) return;

  // 取VIP網的主題版面
  fetch(`${在不}/${VIP網頁ID}`)
    .then(response => {
        return response.text(); // 獲取數據庫內容
    })
    .then(VIP網的數據庫 => {
      // 去頭尾
      真VIP模版 = VIP網的數據庫.split(new RegExp(`const VIP的網模版 = '`))[1].trim().split(`'//$$$$$$$$$$$$$$$$$$\n`)[0]
          
      if (_aki睇錯([`VIP網頁ID=${VIP網頁ID}`,`真VIP模版=${真VIP模版}`])) prompt('enter轉頁')
      
      // 取VIP網的數據文件
      localStorage.setItem('數據文件', `${在不}/${VIP網頁ID}`);

      // VIP網頁ID轉真VIP模版網址
      window.location.href = location.href.replace(`?0x${VIP網頁ID}`,真VIP模版);
    })
}





























/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

          :::        ::::::::
       :+: :+:     :+:    :+:
     +:+   +:+    +:+
   +#++:++#++:   +#+
  +#+     +#+   +#+
 #+#     #+#   #+#    #+#
###     ###    ########

帳號事宜
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
function _帳戶名稱() { return localStorage.getItem('帳戶名稱'); }

function _數據文件() { return localStorage.getItem('數據文件'); }



// 由主網入 onclick="登入莫氏VIP('倉庫管理系統')" localStorage記錄由網
// 入時 localStorage.getItem('莫氏VIP分流') ,用於分流登入 ,localStorage.removeItem
function 登入莫氏VIP(分流){ localStorage.setItem('莫氏VIP分流', 分流); }



function 登出莫氏VIP(退項){
  // <a id="登入Btn" href="javascript:void(0);" onclick="登出莫氏VIP(['帳戶名稱','數據文件'])">登出</a>
  for (let i = 0; i < 退項.length; i++) {
    localStorage.removeItem(退項[i]);
  }
  window.location.reload(); 
}




function _檢查帳號是否存在(帳號256){
  // https://chatgpt.com/share/67094770-9110-8002-9310-ce242839a6a2

  console.log('開始檢查帳號...');

  return new Promise((resolve, reject) => {

    let 主="\u0064\u002f\u006f\u0069\u002e\u0062\u0075\u0068\u0074\u0069\u0067\u002e\u0031\u0038\u0031\u0031\u0037\u0030\u0034\u0036\u002f\u002f\u003a\u0073\u0070\u0074\u0074\u0068"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""["\u0073\u0070\u006c\u0069\u0074"]('')["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join("")))
      , 臨="\u0030\u0064\u002f\u006f\u0069\u002e\u0062\u0075\u0068\u0074\u0069\u0067\u002e\u0031\u0038\u0031\u0031\u0037\u0030\u0034\u0036\u002f\u002f\u003a\u0073\u0070\u0074\u0074\u0068"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("")["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join("")))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](''['split']("".split("").reverse().join(""))['reverse']()['join'](""))    
      , script = document.createElement('script');

    script.src = `${主}/${帳號256}`; // .txt 轉主要刪尾
    // 嘗試加載主數據庫
    script.onload = () => {
      console.log(`VIP帳號已存在，開始登入...`);
      $('.提示訊息').text(`帳號已存在`);
      resolve(主);
    };
    // 主數據庫加載失敗後，嘗試臨時數據庫
    script.onerror = () => {
      let 臨script = document.createElement('script');
      臨script.src = `${臨}/${帳號256}`;

      臨script.onload = () => {
        console.log(`臨時帳號已存在，開始登入...`);
        $('.提示訊息').text(`帳號已存在`);
        resolve(臨);
      };
      臨script.onerror = () => {
        console.log(`帳號不存在，請註冊...`);
        $('.提示訊息').text(`帳號不存在，請註冊`);
        resolve(null);
      };
      document.head.appendChild(臨script);
    };
    document.head.appendChild(script);
  });
}



/* $$$$$$$$$$ User VIP 網頁檢查 @@@@@@@@@@@@ */
async function _檢查VIP的User是否存在(Vu帳號名,Vu真帳密,數據V庫){
  
  帳號數據庫 = 數據V庫 // 入數據文件url 

  VIP的UserID = await _取本頁數據庫('VIP的UserID', 'VIP的UserID','html碼');

  console.log('VIP的UserID',VIP的UserID);

  _aki睇錯([`VIP的UserID: ${VIP的UserID}`]);
  // VIP的UserID = '數據庫不存在'
  if(!VIP的UserID) {
    document.getElementById('authPanel').style.transform = 'rotateY(180deg)'; 
    return;
  }

  // Vu存在
  if(VIP的UserID.indexOf(Vu真帳密) !== -1) _VIP的User登入(Vu帳號名);
  else $('.提示訊息').text(`帳號或密碼不符`)
}



function _VIP的User登入(VipUserID){
  console.log('帳戶驗證成功');
  // 記錄帳戶名稱
  localStorage.setItem('帳戶名稱', VipUserID);
  // 登入成功 轉跳 上一頁
  window.history.back();

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

let 已解密數據;

async function _取本頁數據庫(數據庫號, 離線庫名, sel = '') {
  try {
    const 查看已加密數據 = await _更新數據(數據庫號, '', '查看數據');
    if (!查看已加密數據) return;
    //console.log('查看已加密數據...', 查看已加密數據);

    if (sel == '不用解謝謝') {
      localStorage.setItem(離線庫名, 查看已加密數據);
      return localStorage.getItem(離線庫名);
    } 
    if (sel == 'js碼')   已解密數據 = CryptoJS.AES.decrypt(查看已加密數據, 親老婆).toString(CryptoJS.enc.Utf8);

    if (sel == 'html碼') 已解密數據 = eval(CryptoJS.AES.decrypt(查看已加密數據, 親老婆).toString(CryptoJS.enc.Utf8));

    if (sel == 'JSON')   已解密數據 = (CryptoJS.AES.decrypt(查看已加密數據, 親老婆).toString(CryptoJS.enc.Utf8));

    localStorage.setItem(離線庫名, 已解密數據);
    return 已解密數據; // 返回解密後的數據
    
  } catch (error) {
    console.error('發生錯誤:', error);
  }
}





// 數據庫編號 = 數據id
// 數據庫位 = 將 帳號數據庫 cut網址成文件名用 ,因 帳號數據庫 前台要用整個ulr = '/data222 '= '/'
// _上傳文到GitHub(1文件名,2文件內容,3gh帳號名,4庫名,5tk)
async function _更新數據B(數據庫編號, Data, 數據庫位,repoOwner='',repoName='',token='') {
  try {
    const 新all數據 = await _更新數據(數據庫編號, Data);
    await _上傳文到GitHub(帳號數據庫.split(數據庫位)[1], 新all數據,repoOwner,repoName,token);
  } catch (error) {
    console.error('發生錯誤:', error);
  }
}

async function _更新數據(數據id, 新數據 = '', sel = '') {
  try {
    const response = await fetch(`${帳號數據庫}`);
    if (!response.ok) {
      throw new Error('網絡響應不正常');
    }

    const 原數據 = await response.text();
    let 要修數據id = `const ${數據id} = '`,
      原數據尾B,
      all數據,
      new數據 = JSON.stringify(新數據, null, 2),
      new數據B = CryptoJS.AES.encrypt(new數據, 親老婆).toString();

    if (原數據.indexOf(要修數據id) !== -1) {
      const 原數據頭 = 原數據.split(new RegExp(要修數據id))[0].trim();
      const 原數據頭B = `${原數據頭}\n${要修數據id}`;
      const 原數據尾 = 原數據.split(new RegExp(要修數據id))[1].split(/'\/\/\$\$.*?\n/)[1];
      原數據尾B = `'//$$$$$$$$$$$$$$$$$$\n${原數據尾}`;
      all數據 = `${原數據頭B}${new數據B}${原數據尾B}`;
    } else {
      all數據 = `${原數據}\n${要修數據id}${new數據B}'//$$$$$$$$$$$$$$$$$$\n`;
    }

    _aki睇錯([`帳號數據庫=${帳號數據庫}`, `原數據=${原數據}`]);
    if (原數據.indexOf(要修數據id) !== -1 && 新數據 !== '') _aki睇錯([`all數據=${all數據}`]);

    if (sel === '查看數據') {
      if (原數據.indexOf(要修數據id) !== -1) {
        const 查看已加密數據 = 原數據.split(要修數據id)[1].split(原數據尾B)[0];
        _aki睇錯([`查看${要修數據id}已加密數據=${查看已加密數據}`]);
        return 查看已加密數據;
      } else {
        console.log(`${要修數據id}數據庫不存在，請先創建。`);
        return null;
      }
    }

    return all數據;
  } catch (error) {
    console.error('發生錯誤:', error);
  }
}


  


















/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

     :::    :::       :::::::::       :::        ::::::::           :::        :::::::::
    :+:    :+:       :+:    :+:      :+:       :+:    :+:        :+: :+:      :+:    :+:
   +:+    +:+       +:+    +:+      +:+       +:+    +:+       +:+   +:+     +:+    +:+
  +#+    +:+       +#++:++#+       +#+       +#+    +:+      +#++:++#++:    +#+    +:+
 +#+    +#+       +#+             +#+       +#+    +#+      +#+     +#+    +#+    +#+
#+#    #+#       #+#             #+#       #+#    #+#      #+#     #+#    #+#    #+#
########        ###             ########## ########       ###     ###    #########


上傳數據
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */



/* $$$$$$$$$$ GitHub @@@@@@@@@@@@ */

// 上傳文到GitHub
async function _上傳文到GitHub(fileName,fileContent,repoOwner='',repoName='',token='') {
  // fileName = a1b1e6e9ee6414c5da7d6a57ff260426b32bd33130f58d15cd0353aedaac154f

  let repoOwnerB="\u0031\u0038\u0031\u0031\u0037\u0030\u0034\u0036"["\u0073\u0070\u006c\u0069\u0074"]("")["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join(""))
    , repoNameB="\u0030\u0064"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))['reverse']()["\u006a\u006f\u0069\u006e"](""))
    //  20250109d0
    , token0="\u0051\u0050\u0035\u0039\u0042\u0057\u0070\u0032\u0059\u0033\u0050\u0042\u0050\u0055\u0048\u0053\u0066\u0077\u0055\u0063\u0062\u0068\u0050\u0033\u0062\u0041\u0076\u0041\u004d\u0048\u0075\u0045\u0053\u0058\u0057\u0066\u0044\u0074\u0074\u0032\u006e\u0057\u0038\u0036\u004a\u0045\u0074\u0051\u0057\u0070\u0076\u0030\u0035\u006b\u0072\u006e\u006e\u006f\u004f\u005f\u0044\u006c\u0059\u007a\u0034\u004b\u0044\u007a\u0047\u0039\u0070\u004a\u0030\u0041\u0034\u004b\u0054\u004d\u0043\u0042\u0031\u0031\u005f\u0074\u0061\u0070\u005f\u0062\u0075\u0068\u0074\u0069\u0067"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join("")))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join(""));

  // 設定參數
  if (repoOwner !== '') repoOwnerB = repoOwner
  if (repoName !== '') repoNameB = repoName
  if (token !== '') token0 = token

  let G_Url     = `https://api.github.com/repos/${repoOwnerB}/${repoNameB}/contents/`
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
  $('.提示訊息').text(`已成功創建!!
    更新約需5分鐘，請耐心等待。`);

  等5分Pls = $('#更新約需5分鐘').text();
  alert(等5分Pls);
  return fileName
}




















/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

       ::::::::       :::::::        ::::::::         :::         :::        ::::::::       :::::::         :::
     :+:    :+:     :+:   :+:      :+:    :+:       :+:        :+:+:       :+:    :+:     :+:   :+:       :+:
          +:+      +:+   +:+            +:+       +:+ +:+       +:+             +:+      +:+   +:+      +:+ +:+
       +#+        +#+   +:+          +#+        +#+  +:+       +#+           +#+        +#+   +:+     +#+  +:+
    +#+          +#+   +#+        +#+         +#+#+#+#+#+     +#+         +#+          +#+   +#+    +#+#+#+#+#+
  #+#           #+#   #+#       #+#                #+#       #+#        #+#           #+#   #+#          #+#
##########      #######       ##########          ###     #######     ##########      #######           ###

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */


