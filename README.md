# mokJsapi

mokaki all js api 2024

[https://chatgpt.com/share/66f8fa0c-c288-8002-89cb-cde3bdaa112d](https://chatgpt.com/share/66f8faa7-bfbc-8002-9854-660d94569b3e)


要使用 GitHub Pages 託管靜態文件（例如 JavaScript 文件），可以按照以下步驟操作。GitHub Pages 允許你將一個 GitHub repository 轉換為一個靜態網站，這個網站可以被全球訪問。

步驟 1：創建 GitHub Repository
  
    進入 GitHub 並登錄你的帳戶。
    點擊右上角的「+」圖標，選擇「New repository」來創建一個新的 repository。
    在「Repository name」欄位中填寫一個名稱（例如 my-static-site）。
    選擇「Public」作為可見性，並且選中「Initialize this repository with a README」來初始化 repository。
    點擊「Create repository」來完成創建。

步驟 2：上傳文件

    進入剛剛創建的 repository。
    點擊「Add file」按鈕，然後選擇「Upload files」來上傳你想要託管的文件（例如 example.js）。
    文件上傳後，點擊「Commit changes」來保存文件到 repository。

步驟 3：啟用 GitHub Pages

    在你的 repository 頁面上，點擊「Settings」選項卡。
    向下滾動，找到「Pages」部分（它位於「Code and automation」部分下）。
    在「Branch」部分，選擇 main（或者 master，視你 repository 的默認分支而定），然後點擊「Save」。
    設置完成後，GitHub 會自動生成一個靜態網站。該網站的 URL 格式為 https://yourusername.github.io/repository-name/。

步驟 4：訪問和引用文件

    設置完成後，你的文件會被託管在 GitHub Pages 上。訪問該文件的 URL 格式如下：
    arduino
    複製程式碼
    https://yourusername.github.io/repository-name/example.js
    你可以使用這個 URL 在任何 HTML 頁面中引用你的 JavaScript 文件：
    html
    複製程式碼
    <script src="https://yourusername.github.io/repository-name/example.js"></script>

小提示

    GitHub Pages 需要一些時間來生成網站。如果設置後無法立即訪問網站，請稍等幾分鐘再嘗試。
    如果你在設置 GitHub Pages 或使用過程中遇到問題，可以在 repository 的「Settings」頁面檢查「Pages」部分，確保配置正確。

---


github page 綁定 godaddy dns


<table border="1">
  <tr>
    <td >步驟</td>
    <td >GoDaddy 操作</td>
    <td >GitHub 操作</td>
  </tr>
  <tr>
    <td>DNS 設定</td>
    <td>新增 4 個 A 紀錄指向 GitHub IP
    <br>
      A @ 	185.199.108.153 ->  ~.~.111.~
    </td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>新增 CNAME 紀錄 www  指向 username.github.io</td>
    <td></td>
  </tr>
    <tr>s
    <td>自訂域名設定</td>
    <td></td>
    <td>在 Pages 設定中輸入自訂域名</td>
  </tr>
    <tr>
    <td>HTTPS 啟用</td>
    <td>可選，使用 Cloudflare 或 GitHub 預設</td>
    <td>勾選「Enforce HTTPS」</td>
  </tr>
</table>

