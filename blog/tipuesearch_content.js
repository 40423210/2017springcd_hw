var tipuesearch = {"pages":[{"title":"About","tags":"misc","url":"./pages/about/","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog"},{"title":"2017/04/19 W9","tags":"Course","url":"./2017spring-cd-W9.html","text":"期中考試 四連桿機構協同 Trace Point 查驗 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423226\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/midterm5.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 練習影片 midtern2 from 40423210 on Vimeo . Fourbar Walker OnShape 零件協同繪圖與組立 Fourbar Walker OnShape from 40423246 on Vimeo . 心得 這週的上課內容是老師要求在每一part的時間內完成指定任務，而我們這組在分工上面是有點不平均的，像是畫圖的部分，必須會畫的要教不會畫的，這會花蠻多時間的，所以平時要多多練習，每一週交代的功課要盡快跟上，才不會有這種情形發生，這學期也過一半了，也學到蠻多東西的，協同這門課是需要同心協力，如果學好後，去業界才有競爭力。"},{"title":"2017/04/12 W8","tags":"Course","url":"./2017spring-cd-W8.html","text":"期中自評成績 個人自評: http://mde1a2.kmol.info:8000/k96tgzh1ofbl 小組互評: https://pygroup-ag100.rhcloud.com"},{"title":"2017/04/05 W7","tags":"Course","url":"./2017spring-cd-W7.html","text":"Fossil 推送 Fossil 推送 from 40423246 on Vimeo . 組立八連桿機構(solvespace) 组立八連桿機構 from 40423210 on Vimeo . 將八連桿匯入v-rep並加入馬達 八連桿機構轉入v-rep加馬達 from 40423210 on Vimeo . 心得:這次的作業花費的時間相當久，尤其是畫八連桿的時候，出錯了好幾次，終於發現問題點在哪裡了，非常有成就感。"},{"title":"2017/03/29 W6","tags":"Course","url":"./2017spring-cd-W6.html","text":"多連桿運動模擬在v-rep 四連桿轉入v-rep from 40423210 on Vimeo . 心得:這次自己試著模擬多連桿，感覺蠻有成就感的，因為老師是模擬單連桿，又學會新的東西。"},{"title":"2017/03/22 W5","tags":"Course","url":"./2017spring-cd-W5.html","text":"將單連桿轉入v-rep進行運動模擬 solvespace匯入v-rep加馬達 from 40423210 on Vimeo . 心得:一開始以為加顆馬達非常簡單，結果步驟卻是一大堆，可是重複做就會變得蠻熟悉的。"},{"title":"2017/03/15 W4","tags":"Course","url":"./2017spring-cd-W4.html","text":"Fossil SCM倉儲 每組要在https://mde2a2.kmol.info 主機上建倉儲: https://mde2a2.kmol.info/cdbg5 單連桿機構 用solvespace繪製 單連桿 用onshape繪製 單連桿 40423205 單連桿轉v-rep 用onshape轉入v-rep 單連桿轉v-rep 四連桿機構 用onshape繪製 四連桿 用onshape轉入v-rep 四連桿轉v-rep 心得:這禮拜要建立好各組的倉儲，每位組員要分工合作，也期許我的partner能一起加油。"},{"title":"2017/03/08 W3","tags":"Course","url":"./2017spring-cd-W3.html","text":"HyperWorks 14.0 Student Edition Student Edition: Download Now! 近端 Fossil 1. 更改 Start.bat 設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; path=%path%;%path1%;%path2% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_hw.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit 2. 在tmp裏的 fossil_repo 目錄執行指令 fossil init 2017springcd_hw.fpssil 3. 查詢 IP ipconfig /all 4. 確認是否有用 Proxy , 若有則需要將自己的IP設為例外 5. 使用瀏覽器輸入網址 https:// 電腦IPv4的IP 繪製四連桿機構 solvespace Link30 Link50 Link60 fourbar onshape Link30 Link50 Link60 fourbar 心得:這禮拜是畫四連桿零件及組立，花了不少時間作圖及錄影，也學會不少東西。"},{"title":"2017/03/01 W2","tags":"Course","url":"./2017spring-cd-W2.html","text":"分組座位程式碼 import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() 讀取w2b_cadlab.txt 檔案,讓裡面的內容成為資料, 因為檔案裡有中文, 所以設定encoding 使用utf-8 的編驛碼 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() print(adata) 用print 先檢查資料是否是我們需要的 alist = adata.splitlines() 利用splitlines 的方法把資料隔開, 就可以得到一個特定的數列 print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: 從第2列開始, 因為第0列和第1列都不是我們要的 row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 #為了避免序號連續, 利用column = 0 將順序重製, 因為每一列算完之後要換下一列重新開始 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) print(os.environ) 用solvespace畫出四連桿機構，再觀察運動方式 觀察四連桿運動方式 from 40423210 on Vimeo . 心得:這週的作業是用solvespace畫出四連桿機構，覺得蠻有趣的，過程中畫錯不少次，但是總會有成功的一天。"},{"title":"2017/02/22 W1","tags":"Course","url":"./2017spring-cd-W1.html","text":"更改 stunnel.conf 的 IP 設定 2017-03-08作業 from 40423210 on Vimeo . 心得:這學期的作業會越來越繁重，之後的進度要跟上，這禮拜的作業是修改stuunel的IP設定，算是ok的"}]};