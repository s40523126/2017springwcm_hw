var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","tags":"misc","title":"About","url":"./pages/about/"},{"text":"心得:利用一些代數以及基本數學運算使線可以繞著點轉圈 window.onload=function(){ brython(1); } from browser import document from browser import window from browser import timer import math canvas = document[\"onebar\"] ctx = canvas.getContext(\"2d\") # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() #畫直線函式 def line(x1, y1, x2, y2): # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() line(200, 200, 200, 300) circle(200, 200, 5) x1 = 200 y1 = 200 r = 100 deg = math.pi/180 theta = 0 def animate(): global theta # 刷新畫布 ctx.clearRect(0, 0, canvas.width, canvas.height) # 逐一重新繪製直線與圓心球 x2 = x1 + r*math.cos(theta*deg) y2 = y1 + r*math.sin(theta*deg) line(x1, y1, x2, y2) # 再加一條小線段 x3 = x2 + 50 y3 = y2 + 50 line(x2, y2, x3, y3) x4 = 400 y4 = 200 x5 = x4 - 200 y5 = y4 - 200 x5 = x3 y5 = y3 x5y5x3y3 = 200 line(x4, y4, x5, y5) circle(x1, y1, 5) circle(400, y1, 5) theta += 1 timer.set_interval(animate, 50) 以下為程式碼: # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() #畫直線函式 def line(x1, y1, x2, y2): # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() line(200, 200, 200, 300) circle(200, 200, 5) x1 = 200 y1 = 200 r = 100 deg = math.pi/180 theta = 0 def animate(): global theta # 刷新畫布 ctx.clearRect(0, 0, canvas.width, canvas.height) # 逐一重新繪製直線與圓心球 x2 = x1 + r*math.cos(theta*deg) y2 = y1 + r*math.sin(theta*deg) line(x1, y1, x2, y2) x3 = 400 y3 = 200 x4 = x3 + r*math.cos(theta*deg) y4 = y3 + r*math.sin(theta*deg) line(x3, y3, x4, y4) # 再加一條小線段 x5 = x2 + 200 y5 = x2 + 200 x5 = x4 y5 = y4 line(x2, y2, x5, y5) circle(x1, y1, 5) circle(400, y1, 5) theta += 1 timer.set_interval(animate, 50)","tags":"Misc","title":"單線繞黑點旋轉動畫(心得)","url":"./dan-xian-rao-hei-dian-xuan-zhuan-dong-hua-xin-de.html"},{"text":"心得:用一些基本程式語言建立button,然後設定上下限增加遊戲難度,也可以利用系統猜數字看平均幾次會猜中. window.onload=function(){ brython(1); } from browser import document from browser import html import random id3 = document[\"id3\"] def guess(ev): # 清除 id3 中的內容 id3.clear() id3 <= \"開始玩猜數字遊戲\" + html.BR() 標準答案 = random.randint(1, 100) 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 = 1 while 標準答案 != 你猜的數字: if 標準答案 < 你猜的數字: #print(\"太大了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"太大了，再猜一次 :)加油\" + html.BR() else: #print(\"太小了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"太小了，再猜一次 :)加油\" + html.BR() 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id3 <= \"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\" document[\"but3\"].bind(\"click\", guess) 玩猜數字遊戲 from browser import document from browser import html import random id4 = document[\"id4\"] def autoguess(ev): 執行次數 = 100 總猜測次數 = 0 for i in range(執行次數): id4 <= \"第\" + str(i+1) + \"次玩:\" + html.BR() 下限 = 1 上限 = 100 標準答案 = random.randint(下限, 上限) pc猜的數字 = random.randint(下限, 上限) #print(標準答案, pc猜的數字) #integer int() #string str() #float float() #你猜的數字 = int(input(\"請輸入您所猜的整數:\")) 猜測次數 = 1 while 標準答案 != pc猜的數字: if 標準答案 < pc猜的數字: #print(\"太大了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 - 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太大了!\" + html.BR() 上限 = pc猜的數字 - 1 else: #print(\"太小了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 + 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太小了!\" + html.BR() 下限 = pc猜的數字 + 1 #pc猜的數字 = int(input(\"請輸入您所猜的整數:\")) pc猜的數字 = random.randint(下限, 上限) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id4 <= \"電腦猜對了, 答案為: \" + str(標準答案) + \", 總共猜了 \"+ str(猜測次數) + \"次\" + html.BR() 總猜測次數 += 猜測次數 平均猜測次數 = int(總猜測次數/執行次數) #print(\"平均次數\", 平均猜測次數) id4 <= \"平均次數: \" + str(平均猜測次數) document[\"but4\"].bind(\"click\", autoguess) 利用程式玩猜數字","tags":"Misc","title":"猜數字遊戲(心得)","url":"./cai-shu-zi-you-xi-xin-de.html"},{"text":"2017 年元旦快樂 按下按鈕產生6個樂透數字!!! window.onload=function(){ brython(1); } from browser import document from browser import html import random print_location = document[\"newyear\"] def gen_int(): num = random.randint(1, 49) # 設法將 num 列印在網頁上 #print_location = document[\"newyear\"] print_location <= num + html.BR() def lottery(e): for i in range(6): gen_int() print_location <= \"恭喜中獎!\" + html.BR() #document[\"but1\"].bind(\"click\", gen_int) document[\"but1\"].bind(\"click\", lottery) 產生整數亂數 from browser import document from browser import html import random print_location = document[\"newyear\"]</p> <p>def lottery(e): num_list = random.sample(list(range(1, 50)), 6) for i in range(6): print_location &lt;= num_list[i] + html.BR() print_location &lt;= \"(不會重複)恭喜中獎!\" + html.BR()</p> <p>document[\"but2\"].bind(\"click\", lottery) 恭喜中獎","tags":"Misc","title":"元旦快樂","url":"./yuan-dan-kuai-le.html"},{"text":"window.onload=function(){ brython(1); } from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa","tags":"Misc","title":"Brython 繪圖教學 W15","url":"./brython-hui-tu-jiao-xue-w15.html"},{"text":"範例:自己的學號 window.onload=function(){ brython(1); } from browser import document from browser import alert ''' # 利用 input() 取得使用者輸入, 然後進行資料處理或運算後, 列出結果 #01-01.py print (\"Hello World!\") #01-02.py thetext = input(\"Enter some text \") print (\"This is what you entered:\") print (thetext) #01-03.py # Note that \\n within quote marks forces a new line to be printed thetext = input(\"Enter some text\\n\") print (\"This is what you entered:\") print (thetext) #01-04.py prompt = \"Enter a some text \" thetext = input(prompt) print (\"This is what you entered:\") print (thetext) ''' def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) s40523126 from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) s40523126","tags":"Misc","title":"建立button","url":"./jian-li-button.html"},{"text":"將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython 開始進行範例分類: 接受使用者的輸入 利用alert() 顯示結果 直接列印結果 window.onload=function(){ brython(1); } <script></p> <p><!-- 以下實際利用 Brython 畫圖--> <div id=\"container\"></div> <script type=\"text/python3\"></p> <p>from browser import document as doc from browser import html container =doc['container'] mystring = \"\" num =input(\"請輸入重複執行次數:\") #for i in range(1,11): for i in range(1,int(num)+1): mystring +=str(i) + \":hello mde\" + html.BR() container &lt;=mystring 開始進行範例分類: 接受使用者的輸入","tags":"Misc","title":"Brython 繪圖教學 W13","url":"./brython-hui-tu-jiao-xue-w13.html"},{"text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 心得:利用ctx(設定線寬高等等),再用list把1~6條弦名標示出來,如果要用和弦等等再插入其他指令. window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: #canvasText(100, 80, 20, \"A\", \"b\", \"\", \"black\", ctx) canvasText(100+num*w, 80, 20, s, \"\", \"\", \"black\", ctx) num = num + 1 以下為程式碼: # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: #canvasText(100, 80, 20, \"A\", \"b\", \"\", \"black\", ctx) canvasText(100+num*w, 80, 20, s, \"\", \"\", \"black\", ctx) num = num + 1","tags":"Misc","title":"吉他和弦(心得)","url":"./ji-ta-he-xian-xin-de.html"},{"text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitar\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 5 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) ctx.lineTo(100,100) ctx.lineTo(150,200) # 設定顏色為藍色,也可以使用'rgb(0,0,255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() 以下為程式碼: window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitar\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 5 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) ctx.lineTo(100,100) ctx.lineTo(150,200) # 設定顏色為藍色,也可以使用'rgb(0,0,255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","tags":"Misc","title":"Brython 繪圖教學","url":"./brython-hui-tu-jiao-xue.html"},{"text":"本課程提供學生紮實之物件導向或式概念、Python程式語言訓練，本課程強調程式核心技術之撰寫經驗，包括：決策控制、迴圈、動畫、人機互動、集合與陣列。 教導機械設計系的學生如何用創造力以及想像力發揮到最好。","tags":"Misc","title":"2016Fall 機械設計計算機程式教學","url":"./2016fall-ji-jie-she-ji-ji-suan-ji-cheng-shi-jiao-xue.html"},{"text":"這個系統共集結了 reveal.js 網際簡報與 pelican 靜態網誌系統. 網誌 Category 網誌 Tags reveal.js 使用導引","tags":"Misc","title":"2016Fall 簡報與網誌系統","url":"./2016fall-jian-bao-yu-wang-zhi-xi-tong.html"}]};