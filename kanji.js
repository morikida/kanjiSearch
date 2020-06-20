
//漢字データ 
var kanji1 = ["人","名","方","本","日","何","大","学","社","員","会","先","生","行","来","車"]; //第1・2課
var kanji2 = ["百","千","万","円","毎","時","分","半","国","月","火","水","木","金","土","書"]; //第3・4課
var kanji3 = ["友","年","今","週","休","前","午","後","校","帰","見","聞","読","食","飲","買"]; //第5・6課
var kanji4 = ["母","父","物","朝","昼","夜","晩","町","山","白","赤","青","黒","安","高","小"]; //第7・8課
var kanji5 = ["男","女","上","下","左","右","中","門","間","近","魚","手","犬","早","計","外"]; //第9・10課
var kanji6 = ["兄","弟","姉","妹","家","族","春","夏","秋","冬","気","天","多","少","元","歩"]; //第11・12課
var kanji7 = ["入","出","広","止","雨","開","海","川","世","界","画","映","花","茶","語","英"]; //第13・14課
var kanji8 = ["体","足","口","顔","耳","目","立","知","住","思","使","作","品","長","明","肉"]; //第15・16課
var kanji9 = ["問","答","心","配","子","売","場","字","漢","料","理","主","着","新","古","持"]; //第17・18課
var kanji10 = ["電","話","音","楽","歌","度","教","習","貸","借","送","強","勉","旅","室","登"]; //第19・20課
var kanji11 = ["不","始","言","意","事","仕","病","院","医","者","堂","屋","用","有","店","民"]; //第21・22課
var kanji12 = ["正","銀","図","館","道","自","動","建","特","終","駅","写","真","牛","林","森"]; //第23・24課
var kanji13 = ["田","考","親","切","試","験","部","文","歳","留","議","散","浴","降","欲","億"]; //第25課
var kanji14 = ["悪","急","去","紙","県","都","合","速","直","接","湯","探","平","寺","勝","負","願","座","眠","狭","甘","辛","卵","拾"]; //第26課
var kanji15 = ["業","鳥","通","味","運","転","力","色","具","取","荷","簡","単","覚","販","忙","給","実","涼","将","夢","疲","痛","彼"]; //第27・28課
var kanji16 = ["地","走","集","研","究","曜","重","池","形","横","橋","決","非","常","忘","置","授","技","術","資","類","復","植","机"]; //第29・30課
var kanji17 = ["東","西","南","北","市","風","夕","空","区","晴","星","熱","約","束","辞","練","返","最","続","角","込","申","格","予"]; //第31・32課
var kanji18 = ["薬","服","質","光","閉","番","号","交","危","席","戻","払","無","失","礼","黄","苦","末","逃","規","則","守","歯","並"]; //第33・34課
var kanji19 = ["同","治","所","暑","寒","便","利","泳","活","向","困","丸","機","曲","皆","違","務","客","島","信","遅","許","可","禁"]; //第35・36課
var kanji20 = ["発","工","飯","台","題","待","米","村","注","港","宿","捨","輸","招","呼","原","慣","頼","成","法","退","参","加","岸"]; //第37・38課
var kanji21 = ["代","死","首","結","婚","式","全","次","以","必","要","絶","対","然","難","残","念","複","雑","汚","表","倒","故","確"]; //第39・40課
var kanji22 = ["説","進","産","園","公","案","内","石","油","化","和","健","康","暖","情","報","的","紹","介","経","済","律","相","談"]; //第41・42課
var kanji23 = ["回","起","頭","短","低","軽","洗","洋","別","幸","笑","泣","静","変","増","減","倍","祖","薄","厚","政","美","連","絡"]; //第43・44課
var kanji24 = ["卒","引","越","太","細","働","押","好","冷","寝","受","付","飛","船","階","段","値","役","初","優","因","論","途","係"]; //第45・46課
var kanji25 = ["声","暗","弱","遠","野","反","伝","若","両","遊","選","球","育","温","燃","吹","落","届","賛","恋","庭","妻","夫","由"]; //第47・48課
var kanji26 = ["京","私","乗","菜","吸","記","雪","絵","消","奥","渡","泊","酒","定","例","調","支","過","勤","宅","製","性","様","感"]; //第49・50課


// 検索ボタンを押すと検索を実行
$(".search").on("click", function(){
    enter();
});


// 検索の関数
function enter() {

    // 入力された漢字のデータを取得し
    var text = $("#kanji").val();
    console.log(text)

    // 文字毎に認識して特定の番号をつける：文字列を分割して配列として取得するにはsplitを使う
    var eachtext = text.split('');
    console.log(eachtext);




// 1文字目を検索

        //第1・2課の漢字の中から検索
        var search1 = kanji1.indexOf(eachtext[0]); 
    
        if(search1 == -1) {
            $(".as1").fadeOut(0);
        }        
        else {
            $(".as1").fadeIn(0);
            $(".answer1").append("第1・2課で学習しました");    
        }


        //第3・4課の漢字の中から検索
        var search2 = kanji2.indexOf(eachtext[0]);
    
        if(search2 == -1) {
            $(".as2").fadeOut(0);
        }
        else {
            $(".as2").fadeIn(0);
            $(".answer2").append("第3・4課で学習しました");    
        }


          //第5・6課の漢字の中から検索
        var search3 = kanji3.indexOf(eachtext[0]);
    
        if(search3 == -1) {
            $(".as3").fadeOut(0);
        }
        else {
            $(".as3").fadeIn(0);
            $(".answer3").append("第5・6課で学習しました");    
        }


          //第7・8課の漢字の中から検索
          var search4 = kanji4.indexOf(eachtext[0]);
    
          if(search4 == -1) {
              $(".as4").fadeOut(0);
          }
          else {
              $(".as4").fadeIn(0);
              $(".answer4").append("第7・8課で学習しました");    
          }


          //第9・10課の漢字の中から検索
          var search5 = kanji5.indexOf(eachtext[0]);
    
          if(search5 == -1) {
              $(".as5").fadeOut(0);
          }
          else {
              $(".as5").fadeIn(0);
              $(".answer5").append("第9・10課で学習しました");    
          }


 
          //第11・12課の漢字の中から検索
          var search6 = kanji6.indexOf(eachtext[0]);
    
          if(search6 == -1) {
              $(".as6").fadeOut(0);
          }
          else {
              $(".as6").fadeIn(0);
              $(".answer6").append("第11・12課で学習しました");    
          }
          
          

          //第13・14課の漢字の中から検索
          var search7 = kanji7.indexOf(eachtext[0]);
    
          if(search7 == -1) {
              $(".as7").fadeOut(0);
          }
          else {
              $(".as7").fadeIn(0);
              $(".answer7").append("第13・14課で学習しました");    
          }



          //第15・16課の漢字の中から検索
          var search8 = kanji8.indexOf(eachtext[0]);
    
          if(search8 == -1) {
              $(".as8").fadeOut(0);
          }
          else {
              $(".as8").fadeIn(0);
              $(".answer8").append("第15・16課で学習しました");    
          }



          //第17・18課の漢字の中から検索
          var search9 = kanji9.indexOf(eachtext[0]);
    
          if(search9 == -1) {
              $(".as9").fadeOut(0);
          }
          else {
              $(".as9").fadeIn(0);
              $(".answer9").append("第17・18課で学習しました");    
          }



          //第19・20課の漢字の中から検索
          var search10 = kanji10.indexOf(eachtext[0]);
    
          if(search10 == -1) {
              $(".as10").fadeOut(0);
          }
          else {
              $(".as10").fadeIn(0);
              $(".answer10").append("第19・20課で学習しました");    
          }



          //第21・22課の漢字の中から検索
          var search11 = kanji11.indexOf(eachtext[0]);
    
          if(search11 == -1) {
              $(".as11").fadeOut(0);
          }
          else {
              $(".as11").fadeIn(0);
              $(".answer11").append("第21・22課で学習しました");    
          }

          //第212・24課の漢字の中から検索
          var search12 = kanji12.indexOf(eachtext[0]);
    
          if(search12 == -1) {
              $(".as12").fadeOut(0);
          }
          else {
              $(".as12").fadeIn(0);
              $(".answer12").append("第23・24課で学習しました");    
          }


          //第25課の漢字の中から検索
          var search13 = kanji13.indexOf(eachtext[0]);
    
          if(search13 == -1) {
              $(".as13").fadeOut(0);
          }
          else {
              $(".as13").fadeIn(0);
              $(".answer13").append("第25課で学習しました");    
          }


          //第26課の漢字の中から検索
          var search14 = kanji14.indexOf(eachtext[0]);
    
          if(search14 == -1) {
              $(".as14").fadeOut(0);
          }
          else {
              $(".as14").fadeIn(0);
              $(".answer14").append("第26課で学習しました");    
          }


          //第27・28課の漢字の中から検索
          var search15 = kanji15.indexOf(eachtext[0]);
    
          if(search15 == -1) {
              $(".as15").fadeOut(0);
          }
          else {
              $(".as15").fadeIn(0);
              $(".answer15").append("第27・28課で学習しました");    
          }


          //第29・30課の漢字の中から検索
          var search16 = kanji16.indexOf(eachtext[0]);
    
          if(search16 == -1) {
              $(".as16").fadeOut(0);
          }
          else {
              $(".as16").fadeIn(0);
              $(".answer16").append("第29・30課で学習しました");    
          }


          //第31・32課の漢字の中から検索
          var search17 = kanji17.indexOf(eachtext[0]);
    
          if(search17 == -1) {
              $(".as17").fadeOut(0);
          }
          else {
              $(".as17").fadeIn(0);
              $(".answer17").append("第31・32課で学習しました");    
          }


          //第33・34課の漢字の中から検索
          var search18 = kanji18.indexOf(eachtext[0]);
    
          if(search18 == -1) {
              $(".as18").fadeOut(0);
          }
          else {
              $(".as18").fadeIn(0);
              $(".answer18").append("第33・34課で学習しました");    
          }


          //第35・36課の漢字の中から検索
          var search19 = kanji19.indexOf(eachtext[0]);
    
          if(search19 == -1) {
              $(".as19").fadeOut(0);
          }
          else {
              $(".as19").fadeIn(0);
              $(".answer19").append("第35・36課で学習しました");    
          }


          //第37・38課の漢字の中から検索
          var search20 = kanji20.indexOf(eachtext[0]);
    
          if(search20 == -1) {
              $(".as20").fadeOut(0);
          }
          else {
              $(".as20").fadeIn(0);
              $(".answer20").append("第37・38課で学習しました");    
          }


          //第39・40課の漢字の中から検索
          var search21 = kanji21.indexOf(eachtext[0]);
    
          if(search21 == -1) {
              $(".as21").fadeOut(0);
          }
          else {
              $(".as21").fadeIn(0);
              $(".answer21").append("第39・40課で学習しました");    
          }


          //第41・42課の漢字の中から検索
          var search22 = kanji22.indexOf(eachtext[0]);
    
          if(search22 == -1) {
              $(".as22").fadeOut(0);
          }
          else {
              $(".as22").fadeIn(0);
              $(".answer22").append("第41・42課で学習しました");    
          }


          //第43・44課の漢字の中から検索
          var search23 = kanji23.indexOf(eachtext[0]);
    
          if(search23 == -1) {
              $(".as23").fadeOut(0);
          }
          else {
              $(".as23").fadeIn(0);
              $(".answer23").append("第43・44課で学習しました");    
          }


          //第45・46課の漢字の中から検索
          var search24 = kanji24.indexOf(eachtext[0]);
    
          if(search24 == -1) {
              $(".as24").fadeOut(0);
          }
          else {
              $(".as24").fadeIn(0);
              $(".answer24").append("第45・46課で学習しました");    
          }


          //第47・48課の漢字の中から検索
          var search25 = kanji25.indexOf(eachtext[0]);
    
          if(search25 == -1) {
              $(".as25").fadeOut(0);
          }
          else {
              $(".as25").fadeIn(0);
              $(".answer25").append("第47・48課で学習しました");    
          }


          //第49・50課の漢字の中から検索
          var search26 = kanji26.indexOf(eachtext[0]);
    
          if(search26 == -1) {
              $(".as26").fadeOut(0);
          }
          else {
              $(".as26").fadeIn(0);
              $(".answer26").append("第49・50課で学習しました");    
          }




          
 // 2文字目を検索

        //第1・2課の漢字の中から検索
        var search27 = kanji1.indexOf(eachtext[1]); 
    
        if(search27 == -1) {
            $(".as27").fadeOut(0);
        }        
        else {
            $(".as27").fadeIn(0);
            $(".answer27").append("第1・2課で学習しました");    
        }


        //第3・4課の漢字の中から検索
        var search28 = kanji2.indexOf(eachtext[1]);
    
        if(search28 == -1) {
            $(".as28").fadeOut(0);
        }
        else {
            $(".as28").fadeIn(0);
            $(".answer28").append("第3・4課で学習しました");    
        }


          //第5・6課の漢字の中から検索
        var search29 = kanji3.indexOf(eachtext[1]);
    
        if(search29 == -1) {
            $(".as29").fadeOut(0);
        }
        else {
            $(".as29").fadeIn(0);
            $(".answer29").append("第5・6課で学習しました");    
        }


          //第7・8課の漢字の中から検索
          var search30 = kanji4.indexOf(eachtext[1]);
    
          if(search30 == -1) {
              $(".as30").fadeOut(0);
          }
          else {
              $(".as30").fadeIn(0);
              $(".answer30").append("第7・8課で学習しました");    
          }


          //第9・10課の漢字の中から検索
          var search31 = kanji5.indexOf(eachtext[1]);
    
          if(search31 == -1) {
              $(".as31").fadeOut(0);
          }
          else {
              $(".as31").fadeIn(0);
              $(".answer31").append("第9・10課で学習しました");    
          }


 
          //第11・12課の漢字の中から検索
          var search32 = kanji6.indexOf(eachtext[1]);
    
          if(search32 == -1) {
              $(".as32").fadeOut(0);
          }
          else {
              $(".as32").fadeIn(0);
              $(".answer32").append("第11・12課で学習しました");    
          }
          
          

          //第13・14課の漢字の中から検索
          var search33 = kanji7.indexOf(eachtext[1]);
    
          if(search33 == -1) {
              $(".as33").fadeOut(0);
          }
          else {
              $(".as33").fadeIn(0);
              $(".answer33").append("第13・14課で学習しました");    
          }



          //第15・16課の漢字の中から検索
          var search34 = kanji8.indexOf(eachtext[1]);
    
          if(search34 == -1) {
              $(".as34").fadeOut(0);
          }
          else {
              $(".as34").fadeIn(0);
              $(".answer34").append("第15・16課で学習しました");    
          }



          //第17・18課の漢字の中から検索
          var search35 = kanji9.indexOf(eachtext[1]);
    
          if(search35 == -1) {
              $(".as35").fadeOut(0);
          }
          else {
              $(".as35").fadeIn(0);
              $(".answer35").append("第17・18課で学習しました");    
          }



          //第19・20課の漢字の中から検索
          var search36 = kanji10.indexOf(eachtext[1]);
    
          if(search36 == -1) {
              $(".as36").fadeOut(0);
          }
          else {
              $(".as36").fadeIn(0);
              $(".answer36").append("第19・20課で学習しました");    
          }



          //第21・22課の漢字の中から検索
          var search37 = kanji11.indexOf(eachtext[1]);
    
          if(search37 == -1) {
              $(".as37").fadeOut(0);
          }
          else {
              $(".as37").fadeIn(0);
              $(".answer37").append("第21・22課で学習しました");    
          }

          //第212・24課の漢字の中から検索
          var search38 = kanji12.indexOf(eachtext[1]);
    
          if(search38 == -1) {
              $(".as38").fadeOut(0);
          }
          else {
              $(".as38").fadeIn(0);
              $(".answer38").append("第23・24課で学習しました");    
          }


          //第25課の漢字の中から検索
          var search39 = kanji13.indexOf(eachtext[1]);
    
          if(search39 == -1) {
              $(".as39").fadeOut(0);
          }
          else {
              $(".as39").fadeIn(0);
              $(".answer39").append("第25で学習しました");    
          }


          //第26課の漢字の中から検索
          var search40 = kanji14.indexOf(eachtext[1]);
    
          if(search40 == -1) {
              $(".as40").fadeOut(0);
          }
          else {
              $(".as40").fadeIn(0);
              $(".answer40").append("第26課で学習しました");    
          }


          //第27・28課の漢字の中から検索
          var search41 = kanji15.indexOf(eachtext[1]);
    
          if(search41 == -1) {
              $(".as41").fadeOut(0);
          }
          else {
              $(".as41").fadeIn(0);
              $(".answer41").append("第27・28課で学習しました");    
          }


          //第29・30課の漢字の中から検索
          var search42 = kanji16.indexOf(eachtext[1]);
    
          if(search42 == -1) {
              $(".as42").fadeOut(0);
          }
          else {
              $(".as42").fadeIn(0);
              $(".answer42").append("第29・30課で学習しました");    
          }


          //第31・32課の漢字の中から検索
          var search43 = kanji17.indexOf(eachtext[1]);
    
          if(search43 == -1) {
              $(".as43").fadeOut(0);
          }
          else {
              $(".as43").fadeIn(0);
              $(".answer43").append("第31・32課で学習しました");    
          }


          //第33・34課の漢字の中から検索
          var search44 = kanji18.indexOf(eachtext[1]);
    
          if(search44 == -1) {
              $(".as44").fadeOut(0);
          }
          else {
              $(".as44").fadeIn(0);
              $(".answer44").append("第33・34課で学習しました");    
          }


          //第35・36課の漢字の中から検索
          var search45 = kanji19.indexOf(eachtext[1]);
    
          if(search45 == -1) {
              $(".as45").fadeOut(0);
          }
          else {
              $(".as45").fadeIn(0);
              $(".answer45").append("第35・36課で学習しました");    
          }


          //第37・38課の漢字の中から検索
          var search46 = kanji20.indexOf(eachtext[1]);
    
          if(search46 == -1) {
              $(".as46").fadeOut(0);
          }
          else {
              $(".as46").fadeIn(0);
              $(".answer46").append("第37・38課で学習しました");    
          }


          //第39・40課の漢字の中から検索
          var search47 = kanji21.indexOf(eachtext[1]);
    
          if(search47 == -1) {
              $(".as47").fadeOut(0);
          }
          else {
              $(".as47").fadeIn(0);
              $(".answer47").append("第39・40課で学習しました");    
          }


          //第41・42課の漢字の中から検索
          var search48 = kanji22.indexOf(eachtext[1]);
    
          if(search48 == -1) {
              $(".as48").fadeOut(0);
          }
          else {
              $(".as48").fadeIn(0);
              $(".answer48").append("第41・42課で学習しました");    
          }


          //第43・44課の漢字の中から検索
          var search49 = kanji23.indexOf(eachtext[1]);
    
          if(search49 == -1) {
              $(".as49").fadeOut(0);
          }
          else {
              $(".as49").fadeIn(0);
              $(".answer49").append("第43・44課で学習しました");    
          }


          //第45・46課の漢字の中から検索
          var search50 = kanji24.indexOf(eachtext[1]);
    
          if(search50 == -1) {
              $(".as50").fadeOut(0);
          }
          else {
              $(".as50").fadeIn(0);
              $(".answer50").append("第45・46課で学習しました");    
          }


          //第47・48課の漢字の中から検索
          var search51 = kanji25.indexOf(eachtext[1]);
    
          if(search51 == -1) {
              $(".as51").fadeOut(0);
          }
          else {
              $(".as51").fadeIn(0);
              $(".answer51").append("第47・48課で学習しました");    
          }


          //第49・50課の漢字の中から検索
          var search52 = kanji26.indexOf(eachtext[1]);
    
          if(search52 == -1) {
              $(".as52").fadeOut(0);
          }
          else {
              $(".as52").fadeIn(0);
              $(".answer52").append("第49・50課で学習しました");    
          }
         





 // 3文字目を検索

        //第1・2課の漢字の中から検索
        var search53 = kanji1.indexOf(eachtext[2]); 
    
        if(search53 == -1) {
            $(".as53").fadeOut(0);
        }        
        else {
            $(".as53").fadeIn(0);
            $(".answer53").append("第1・2課で学習しました");    
        }


        //第3・4課の漢字の中から検索
        var search54 = kanji2.indexOf(eachtext[54]);
    
        if(search54 == -1) {
            $(".as54").fadeOut(0);
        }
        else {
            $(".as54").fadeIn(0);
            $(".answer54").append("第3・4課で学習しました");    
        }


          //第5・6課の漢字の中から検索
        var search55 = kanji3.indexOf(eachtext[2]);
    
        if(search55 == -1) {
            $(".as55").fadeOut(0);
        }
        else {
            $(".as55").fadeIn(0);
            $(".answer55").append("第5・6課で学習しました");    
        }


          //第7・8課の漢字の中から検索
          var search56 = kanji4.indexOf(eachtext[2]);
    
          if(search56 == -1) {
              $(".as56").fadeOut(0);
          }
          else {
              $(".as56").fadeIn(0);
              $(".answer56").append("第7・8課で学習しました");    
          }


          //第9・10課の漢字の中から検索
          var search57 = kanji5.indexOf(eachtext[2]);
    
          if(search57 == -1) {
              $(".as57").fadeOut(0);
          }
          else {
              $(".as57").fadeIn(0);
              $(".answer57").append("第9・10課で学習しました");    
          }


 
          //第11・12課の漢字の中から検索
          var search58 = kanji6.indexOf(eachtext[2]);
    
          if(search58 == -1) {
              $(".as58").fadeOut(0);
          }
          else {
              $(".as58").fadeIn(0);
              $(".answer58").append("第11・12課で学習しました");    
          }
          
          

          //第13・14課の漢字の中から検索
          var search59 = kanji7.indexOf(eachtext[2]);
    
          if(search59 == -1) {
              $(".as59").fadeOut(0);
          }
          else {
              $(".as59").fadeIn(0);
              $(".answer59").append("第13・14課で学習しました");    
          }



          //第15・16課の漢字の中から検索
          var search60 = kanji8.indexOf(eachtext[2]);
    
          if(search60 == -1) {
              $(".as60").fadeOut(0);
          }
          else {
              $(".as60").fadeIn(0);
              $(".answer60").append("第15・16課で学習しました");    
          }



          //第17・18課の漢字の中から検索
          var search61 = kanji9.indexOf(eachtext[2]);
    
          if(search61 == -1) {
              $(".as61").fadeOut(0);
          }
          else {
              $(".as61").fadeIn(0);
              $(".answer61").append("第17・18課で学習しました");    
          }



          //第19・20課の漢字の中から検索
          var search62 = kanji10.indexOf(eachtext[2]);
    
          if(search62 == -1) {
              $(".as62").fadeOut(0);
          }
          else {
              $(".as62").fadeIn(0);
              $(".answer62").append("第19・20課で学習しました");    
          }



          //第21・22課の漢字の中から検索
          var search63 = kanji11.indexOf(eachtext[2]);
    
          if(search63 == -1) {
              $(".as63").fadeOut(0);
          }
          else {
              $(".as63").fadeIn(0);
              $(".answer63").append("第21・22課で学習しました");    
          }

          //第212・24課の漢字の中から検索
          var search64 = kanji12.indexOf(eachtext[2]);
    
          if(search64 == -1) {
              $(".as64").fadeOut(0);
          }
          else {
              $(".as64").fadeIn(0);
              $(".answer64").append("第23・24課で学習しました");    
          }


          //第25課の漢字の中から検索
          var search65 = kanji13.indexOf(eachtext[2]);
    
          if(search65 == -1) {
              $(".as65").fadeOut(0);
          }
          else {
              $(".as65").fadeIn(0);
              $(".answer65").append("第25で学習しました");    
          }


          //第26課の漢字の中から検索
          var search66 = kanji14.indexOf(eachtext[2]);
    
          if(search66 == -1) {
              $(".as66").fadeOut(0);
          }
          else {
              $(".as66").fadeIn(0);
              $(".answer66").append("第26課で学習しました");    
          }


          //第27・28課の漢字の中から検索
          var search67 = kanji15.indexOf(eachtext[2]);
    
          if(search67 == -1) {
              $(".as67").fadeOut(0);
          }
          else {
              $(".as67").fadeIn(0);
              $(".answer67").append("第27・28課で学習しました");    
          }


          //第29・30課の漢字の中から検索
          var search68 = kanji16.indexOf(eachtext[2]);
    
          if(search68 == -1) {
              $(".as68").fadeOut(0);
          }
          else {
              $(".as68").fadeIn(0);
              $(".answer68").append("第29・30課で学習しました");    
          }


          //第31・32課の漢字の中から検索
          var search69 = kanji17.indexOf(eachtext[2]);
    
          if(search69 == -1) {
              $(".as69").fadeOut(0);
          }
          else {
              $(".as69").fadeIn(0);
              $(".answer69").append("第31・32課で学習しました");    
          }


          //第33・34課の漢字の中から検索
          var search70 = kanji18.indexOf(eachtext[2]);
    
          if(search70 == -1) {
              $(".as70").fadeOut(0);
          }
          else {
              $(".as70").fadeIn(0);
              $(".answer70").append("第33・34課で学習しました");    
          }


          //第35・36課の漢字の中から検索
          var search71 = kanji19.indexOf(eachtext[2]);
    
          if(search71 == -1) {
              $(".as71").fadeOut(0);
          }
          else {
              $(".as71").fadeIn(0);
              $(".answer71").append("第35・36課で学習しました");    
          }


          //第37・38課の漢字の中から検索
          var search72 = kanji20.indexOf(eachtext[2]);
    
          if(search72 == -1) {
              $(".as72").fadeOut(0);
          }
          else {
              $(".as72").fadeIn(0);
              $(".answer72").append("第37・38課で学習しました");    
          }


          //第39・40課の漢字の中から検索
          var search73 = kanji21.indexOf(eachtext[2]);
    
          if(search73 == -1) {
              $(".as73").fadeOut(0);
          }
          else {
              $(".as73").fadeIn(0);
              $(".answer73").append("第39・40課で学習しました");    
          }


          //第41・42課の漢字の中から検索
          var search74 = kanji22.indexOf(eachtext[2]);
    
          if(search74 == -1) {
              $(".as74").fadeOut(0);
          }
          else {
              $(".as74").fadeIn(0);
              $(".answer74").append("第41・42課で学習しました");    
          }


          //第43・44課の漢字の中から検索
          var search75 = kanji23.indexOf(eachtext[2]);
    
          if(search75 == -1) {
              $(".as75").fadeOut(0);
          }
          else {
              $(".as75").fadeIn(0);
              $(".answer75").append("第43・44課で学習しました");    
          }


          //第45・46課の漢字の中から検索
          var search76 = kanji24.indexOf(eachtext[2]);
    
          if(search76 == -1) {
              $(".as76").fadeOut(0);
          }
          else {
              $(".as76").fadeIn(0);
              $(".answer76").append("第45・46課で学習しました");    
          }


          //第47・48課の漢字の中から検索
          var search77 = kanji25.indexOf(eachtext[2]);
    
          if(search77 == -1) {
              $(".as77").fadeOut(0);
          }
          else {
              $(".as77").fadeIn(0);
              $(".answer77").append("第47・48課で学習しました");    
          }


          //第49・50課の漢字の中から検索
          var search78 = kanji26.indexOf(eachtext[2]);
    
          if(search78 == -1) {
              $(".as78").fadeOut(0);
          }
          else {
              $(".as78").fadeIn(0);
              $(".answer78").append("第49・50課で学習しました");    
          }          
}

//リセットボタン
$(".clear").on('click', function () {

    //連番を取得
    for(let rnum=1 ; rnum<=78 ; rnum++) {
            console.log(rnum);
            // 入力されている中身を空にする
            $("#kanji").val("");
            $(".answer"+[rnum]).html("");
            $(".as"+[rnum]).fadeOut(0);
        }
    });


$("#kanji").on("keydown", function (e) {
    console.log(e, "event");

    //エンターキーで検索
    if (e.keyCode === 13) {
        enter();
    }

    //バックスペースキーで回答欄リセット
    if (e.keyCode === 8) {
        //連番を取得
        for(let rnum=1 ; rnum<=78 ; rnum++) {
            console.log(rnum);
            // 入力されている中身を空にする
            $(".answer"+[rnum]).html("");
            $(".as"+[rnum]).fadeOut(0);
        }
    }

    });


$("#kanji").on('click', function () {
    //連番を取得
    for(let rnum=1 ; rnum<=78 ; rnum++) {
            console.log(rnum);
            // 入力されている中身を空にする
            $(".answer"+[rnum]).html("");
            $(".as"+[rnum]).fadeOut(0);
            $("#kanji").val(""); //空にする
        }
    });