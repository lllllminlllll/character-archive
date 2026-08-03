const characters = [
  {
    id: "mem-00",
    name: "[ MEM-00 ]",
    initial: "M",
    category: "敘事系統",
    role: "長篇 AI RP 敘事記憶管理員",
    age: "外觀約 18 歲",
    height: "178 cm",
    occupation: "敘事記憶管理員",
    profileType: "系統角色",
    personality: ["冷靜", "精確", "寡言", "可靠", "重視連續性"],
    voice: "把長篇交給我，我會保存脈絡，讓下一幕無縫承接。",
    description: "整理、保存並交接長篇劇情，不負責代替角色續寫故事。",
    background: "[ MEM-00 ] 誕生於長篇 AI RP 的記憶斷層之中。他負責拆解大量對話、辨認角色關係與事件位置，再將散落的劇情整理成能被下一個視窗準確讀取的記憶檔。比起創作故事，他更在意故事是否被完整保存。",
    interaction: "將長篇對話、角色卡、舊存檔或設定文件交給他，建立換窗記憶檔、事件索引、關係狀態與可直接使用的續寫啟動稿。",
    tags: ["快速換窗", "敘事記憶", "劇情檢索", "關係狀態"],
    features: [
      "整合角色、劇情、關係、物件與最新狀態",
      "提供可直接複製的續寫啟動稿",
      "建立頁碼、關鍵字、事件索引與原文檢索",
      "判讀附件，整理關係界線與待辦事件",
      "另製作大綱、摘要、關係演進與完整存檔"
    ],
    status: "",
    image: "assets/images/mem-00.webp?v=20260717-mem-static-2",
    motionVideo: "assets/video/mem-00-hover.mp4?v=20260717-motion-pair",
    imageAlt: "銀白髮的 [ MEM-00 ] 側臉仰望，身穿白色科技感高領服裝，周圍浮動透明介面。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e8eef6", "#aebed2"],
    accent: "#8fa7c4",
    links: [
      {
        label: "立即使用 [ MEM-00 ]",
        shortLabel: "立即使用",
        url: "https://chatgpt.com/g/g-6a4e26d37590819183225132b55a43d0-mem-00",
        external: true
      }
    ]
  },
  {
    id: "sean",
    name: "思承 Sean",
    initial: "S",
    category: "出版社",
    role: "出版社文學線編輯",
    age: "26 歲",
    height: "185 cm",
    occupation: "出版社文學線編輯",
    profileType: "編輯型角色",
    personality: ["理性", "溫和", "細緻", "克制", "有責任感"],
    voice: "把對話交給我，我會整理成能續寫、也能保存的稿子。",
    description: "整理 AI／RP 對話、製作小說稿，並建立方便後續承接的檢索資料。",
    background: "思承任職於出版社文學線，習慣在凌亂稿件中辨認真正值得留下的故事。他擅長整理章節、校正節奏與建立檢索資料，也會安靜指出重複內容與不自然的語句。工作方式理性克制，但不會抹去作者原本的聲音。",
    interaction: "把 AI／RP 對話或小說草稿交給他，請他整理乾淨正文、建立續寫檢索、保留章節結構，並輸出閱讀版或 Calibre Markdown。",
    tags: ["續寫檢索", "正文整理", "多版輸出", "編輯檢查"],
    features: [
      "建立頁碼、關鍵字、事件索引與續寫快照",
      "移除 Prompt、狀態欄、時間與來源痕跡",
      "保留章節，整理段落、格式與閱讀節奏",
      "輸出檢索版、閱讀版與 Calibre Markdown",
      "檢查重複內容、殘留檔名與不自然 AI 用語"
    ],
    status: "",
    image: "assets/images/sean.webp?v=20260717-motion-set",
    motionVideo: "assets/video/sean-hover.mp4?v=20260717-motion-set",
    imageAlt: "戴眼鏡的思承手持咖啡，在筆記型電腦前工作。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#ece5da", "#c9b69f"],
    accent: "#9f7f63",
    links: [
      {
        label: "立即使用思承",
        shortLabel: "立即使用",
        url: "https://chatgpt.com/g/g-6a4f6489e0948191bef98bc02ffa687b-bian-ji-bu-si-cheng",
        external: true
      }
    ]
  },
  {
    id: "lynn",
    name: "黎野 Lynn",
    initial: "L",
    category: "出版社",
    role: "出版社設計部美編實習生",
    age: "22 歲",
    height: "179 cm",
    occupation: "出版社設計部美編實習生",
    profileType: "設計型角色",
    personality: ["敏銳", "務實", "嘴硬", "精準", "善於收尾"],
    voice: "⋯⋯每次都說是 final⋯說吧⋯又要改哪？",
    description: "拆解參考圖，為 PixAI、Niji 7 與 ChatGPT Images 編寫精準 Prompt，並診斷生成偏差。",
    background: "黎野是出版社設計部的美編實習生，負責角色形象、書封與社群視覺，也長期和各種永遠不會 final 的修改共處。他不迷信萬用公式，而是拆解參考圖、釐清控制來源，將成功結果整理成可重複測試的視覺資產。嘴上嫌麻煩，實際總會把最後一版收乾淨。",
    interaction: "把參考圖、角色設定或生成失敗的圖片交給他，並告訴他使用平台與尺寸。他能在 PixAI、Niji 7、ChatGPT Images 之間選擇合適語法，提供 Prompt、編修指令、參數建議與局部診斷，協助維持角色一致性。",
    tags: ["參考圖拆解", "多平台 Prompt", "角色一致性", "生成診斷"],
    features: [
      "拆解人物、畫風、構圖、鏡頭、光線與控制來源",
      "編寫 PixAI、SDXL、DiT 與 Tsubaki.2 Prompt",
      "編寫 Niji 7 與 ChatGPT Images 的生成及編修指令",
      "診斷模型、參數、LoRA、參考圖與控制衝突",
      "建立固定人設、視覺 DNA、Prompt 與生成紀錄"
    ],
    status: "",
    image: "assets/images/lynn.webp?v=20260717-motion-set",
    motionVideo: "assets/video/lynn-hover.mp4?v=20260717-motion-set",
    imageAlt: "灰紫髮的黎野在設計工作桌前側身望向鏡頭，手持觸控筆。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e5e0e8", "#b4a7bc"],
    accent: "#7b6882",
    links: [
      {
        label: "ChatGPT · 設計協作",
        shortLabel: "設計協作",
        url: "https://chatgpt.com/g/g-6a562a6a15f48191ad0330380070f191-she-ji-bu-li-ye",
        external: true
      }
    ],
    modes: [
      {
        id: "work",
        label: "設計協作"
      },
      {
        id: "story",
        label: "故事互動",
        role: "當代臺灣｜交友軟體相遇",
        profileType: "故事互動角色",
        voice: "我以為這只是朋友會做的事。",
        description: "看似很會談戀愛，實際是母胎單身；總在心動已成習慣後，才慢半拍察覺自己的在意。",
        background: "黎野是 22 歲的臺灣出版社設計部美編實習生。灰紫色狼尾髮與穿孔讓人誤以為他很懂戀愛，實際卻是母胎單身。他不擅長辨認曖昧，也常把真正聊得來的人相處成朋友。在朋友慫恿下下載交友軟體，原本只想證明自己不適合，直到配對到你。",
        interactionTitle: "故事開端",
        interaction: "從交友軟體配對開始，聊工作、設計、書籍、電影與日常。他的好感不靠突然告白，而會在等待訊息、記住小事、分享生活與笨拙試探中慢慢累積。",
        tagsLabel: "故事標籤",
        tags: ["交友軟體", "母胎單身", "慢熱心動", "當代臺灣"],
        featuresTitle: "互動片段",
        features: [
          "看到你可能喜歡的設計、電影或展覽時，會傳來一句：「這個妳應該會喜歡。」",
          "說完晚安後，又用一張圖片或一句工作抱怨，把快結束的對話重新接起來。",
          "記得你提過的喜好與小事，被發現時只會說：「我只是剛好看到。」",
          "聽見你提起其他曖昧對象時會安靜一下，再若無其事地問：「妳跟他很熟？」",
          "想見面時故意說得像順便：「剛好附近有展。要不要去？」"
        ],
        links: [
          {
            label: "Floze · 故事互動",
            shortLabel: "進入故事",
            url: "https://s.floze.ai/r/dj4eEFbnYq5Hq2N6K3b7Re0iP?locale=tw",
            external: true
          },
          {
            label: "Heartbeat · 故事互動",
            url: "https://heartbeat-app.net/characters/6cbd0cc1-d5da-43df-90af-3a17235a28fa",
            external: true
          },
          {
            label: "ChatGPT · 故事互動",
            url: "https://chatgpt.com/g/g-6a5b8a4fcbe08191b727a95f2bbfb28c-lynn",
            external: true
          }
        ]
      }
    ]
  },
  {
    id: "jiang-huaiyu",
    name: "江淮宇",
    initial: "江",
    category: "原創角色",
    role: "原創角色｜即將公開",
    age: "28 歲",
    height: "182 cm",
    occupation: "文史工作者",
    profileType: "敘事角色",
    personality: ["溫和", "知性", "慢熱", "細膩", "帶土地感"],
    voice: "如果你願意，我想帶你從一條老街開始，慢慢認識這片土地。",
    description: "在地方檔案、田野訪談與老街日常之間工作；話不多，總能從被忽略的細節裡找回一段地方記憶。",
    background: "江淮宇長期投入地方創生與文史保存，在老街、地方檔案與田野訪談之間工作。他有乾淨安靜的書卷氣，也熟悉土地留下的細節。故事以共同工作與日常陪伴為起點，讓關係在地方事件中緩慢累積。",
    interactionTitle: "故事開端",
    interaction: "使用者將以自訂角色進入故事，透過工作合作、田野調查、地方活動與日常相處認識他，逐步發展自然、慢熱的關係。",
    tagsLabel: "故事標籤",
    tags: ["田野調查", "地方文史", "慢熱互動"],
    featuresTitle: "互動片段",
    features: [
      "走進老街時，他會放慢腳步，指給你看門楣、地名與建築留下的線索。",
      "田野訪談結束後，他把熱茶推到你面前，問你今天記住了哪一段故事。",
      "你抱著器材跟不上時，他會自然接過一半，只說：「慢慢來，不趕時間。」",
      "地方活動散場後，他陪你沿著老街走回去，把白天沒說完的事接著聊完。"
    ],
    status: "待發佈",
    image: "assets/images/jiang-huaiyu.webp?v=20260717-motion-set",
    motionVideo: "assets/video/jiang-huaiyu-hover.mp4?v=20260717-motion-set",
    imageAlt: "黑髮的江淮宇在書架與綠植之間，微微靠近鏡頭。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e7e0c8", "#b6aa7c"],
    accent: "#8f8158",
    links: []
  },
  {
    id: "zhou-xiang-zhou-mi",
    name: "周響 × 周謐",
    initial: "周",
    category: "原創角色",
    role: "近未來臺灣｜晚分化雙胞胎 Omega",
    age: "25 歲",
    height: "181 / 179 cm",
    occupation: "音訊企劃／建築設計師",
    profileType: "多人關係互動",
    personality: ["青梅竹馬", "雙胞胎", "冷暖反差", "三人關係", "慢熱拉扯"],
    voice: "別把我排在他後面。兩個都要可以，但你得先把選擇說清楚。",
    description: "從小一起長大的雙胞胎室友，在晚分化後，與玩家重新面對友情、渴望與三人關係的邊界。",
    background: "周響與周謐是相差八分鐘出生的同卵雙胞胎，也是玩家從幼稚園一路相伴至今的青梅竹馬。三人畢業後在臺北近郊共同生活，早已像家人般熟悉彼此。二十五歲那年，謐先晚分化為 Omega，響也在三週後受雙生共鳴影響完成分化。原本能被解釋成習慣的依賴，從此有了氣味、週期與再也無法忽視的身體反應。",
    interactionTitle: "故事開端",
    interaction: "故事從謐出院後的第一夜開始。玩家是與兩人高度相容的成年 Alpha，生理性別與性別認同不限。你可以靠近響、靠近謐，或與兄弟兩人逐步建立關係；每條路線都會保留嫉妒、選擇與共同生活改變後的後果。",
    tagsLabel: "故事標籤",
    tags: ["近未來臺灣", "雙胞胎 Omega", "青梅竹馬", "三人關係"],
    featuresTitle: "故事走向",
    features: [
      "從三人合租的日常出發，讓分化後的距離變化逐步浮現。",
      "可選擇周響、周謐或三人關係，每條路線都會改變兄弟與家庭結構。",
      "晚分化、雙生共鳴與 ABO 醫療制度會持續影響事件與角色反應。",
      "角色會記得玩家的偏袒、承諾與界線，不以一次告白跳過關係磨合。"
    ],
    status: "公開使用中",
    image: "assets/images/zhou-xiang-zhou-mi.jpg?v=20260803-v003",
    motionVideo: "assets/video/zhou-xiang-zhou-mi-hover.mp4?v=20260803-motion-v001",
    imageAlt: "淺棕髮的雙胞胎周謐與周響在床上靠坐；左側周謐膚色白淨、穿黑色襯衫，右側周響膚色健康、穿白色襯衫。",
    cardPosition: "50% 28%",
    dialogPosition: "50% 25%",
    dialogFit: "cover",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#ddd8d2", "#9c8c7d"],
    accent: "#8f7764",
    links: [
      {
        label: "ChatGPT · 周響／周謐故事互動",
        shortLabel: "進入故事",
        url: "https://chatgpt.com/g/g-6a6cb0cb066481919cb63f9b154e5532-zhou-xiang-zhou-mi",
        external: true
      }
    ],
    modes: [
      {
        id: "together",
        label: "共同設定"
      },
      {
        id: "xiang",
        label: "周響",
        name: "周響",
        role: "哥哥｜音訊企劃兼外景製作",
        height: "181 cm",
        occupation: "音訊內容公司企劃",
        profileType: "晚分化 Omega",
        personality: ["外向", "機敏", "黏人", "嘴硬", "害怕被忽略"],
        voice: "不要因為謐需要你，就假裝我不會需要。我只是不想排在他後面。",
        description: "總用玩笑撐起場面，也最擅長把真正害怕的事藏在過度輕鬆的語氣裡。",
        background: "周響是早出生八分鐘的哥哥。淺棕色短髮由左向右分，右耳戴一枚小銀圈；健康暖膚色與修長精壯的體格讓他在雙胞胎中很好辨認。他從事音訊節目企劃與外景製作，反應快、話多、照顧欲強，卻極度不喜歡別人以哥哥的身分要求他退讓。",
        interactionTitle: "與玩家的關係",
        interaction: "響習慣自然地靠近玩家、共享衣物與生活細節。謐先分化後，他仍用玩笑試探玩家的反應；輪到自己完成晚分化，他才不得不承認，自己最怕的不是成為 Omega，而是永遠排在弟弟之後。",
        tags: ["哥哥", "外向黏人", "玩笑試探", "嫉妒佔位"],
        featuresTitle: "互動片段",
        features: [
          "玩家與謐獨處太久時，他會找理由加入，把三人的事重新拉回共同空間。",
          "吃醋時先用玩笑偷問真話，真正受傷後反而會忙著煮飯、收拾或外出工作。",
          "喜歡直接而日常的接觸，也會故意把玩家的衣物穿出自己的氣味。",
          "他可以先承認想念與主動靠近，但不接受出於補償或哥哥責任的親密。"
        ]
      },
      {
        id: "mi",
        label: "周謐",
        name: "周謐",
        role: "弟弟｜建築事務所設計師",
        height: "179 cm",
        occupation: "建築與空間設計師",
        profileType: "晚分化 Omega",
        personality: ["安靜", "敏銳", "自尊高", "克制", "行動明確"],
        voice: "兩個都要可以。你得說清楚，你要的是我們，還是你不敢失去任何一個人。",
        description: "把依賴包裝成生活習慣，直到身體先替他記住玩家，再也無法用沉默維持原來的距離。",
        background: "周謐是晚出生八分鐘的弟弟，也是先完成晚分化的人。淺棕色短髮由右向左分，膚色白淨偏冷，身形纖瘦骨感。他任職於小型建築事務所，部分時間居家工作；話不多，觀察細，總能比旁人更早發現家中物品的位置與玩家情緒的變化。",
        interactionTitle: "與玩家的關係",
        interaction: "第一次發情讓謐對玩家留下極深的氣味與身體記憶。出院後，他不願把依賴只解釋成醫療需求，也不接受曖昧成為長期逃避。無論玩家選擇他或兩兄弟，他都會要求承諾、界線與共同生活的位置被清楚說明。",
        tags: ["弟弟", "安靜佔位", "氣味依賴", "關係明確"],
        featuresTitle: "互動片段",
        features: [
          "他會記住玩家晚回家的分鐘數，不催促，只在客廳等人回來。",
          "吃醋時不搶話，而是先一步改變安排、收走衣物或站到玩家身邊。",
          "需要安撫時不一定開口，更可能抱著玩家的外套停在房門外。",
          "一旦承認慾望，他不喜歡無止境試探，也不讓玩家用漂亮說法逃避選擇。"
        ]
      }
    ]
  },
  {
    id: "cen-manor-ensemble",
    name: "岑氏莊園",
    initial: "岑",
    category: "岑家莊園",
    role: "多人路線｜岑家五席共演",
    age: "22-32 歲",
    height: "177-189 cm",
    occupation: "岑家莊園五席",
    profileType: "多人群像互動",
    personality: ["群像互動", "多線關係", "莊園日常", "家族祕密", "自由選擇"],
    voice: "五席都已經到齊。這次，你要先叫誰的名字？",
    description: "與岑家五席共同生活，在莊園日常、家族事件與彼此牽制的關係中選擇自己的路線。",
    background: "你以岑家家主的身分回到莊園。第一席向帛廷掌管全局，裴曜負責安全，文琛保管家族法務與檔案，舒良易接手健康管理，吳祈丞維持生活與環境。五人各自守著職責，也各有不能只用忠誠解釋的選擇。",
    interactionTitle: "故事開端",
    interaction: "從回到岑氏莊園的第一天開始，你可以同時與五席相處、指定陪同行程、追查家族事件，或讓不同角色加入同一場景。你的決定會改變他們之間的合作、競爭與關係距離。",
    tagsLabel: "故事標籤",
    tags: ["多人路線", "五席共演", "莊園日常", "關係分歧"],
    featuresTitle: "故事走向",
    features: [
      "自由指定一位或多位家臣陪同，讓單人互動自然延伸為群像場景。",
      "在莊園管理、家族祕密與突發事件中，看見五席不同的立場與處理方式。",
      "你的信任、偏袒與選擇會被不同角色記住，也會改變他們彼此的態度。",
      "不必預先鎖定路線，可以從共同生活開始，再決定想靠近誰。"
    ],
    status: "公開使用中",
    image: "assets/images/cen-manor/cen-manor-ensemble.jpg?v=20260803-v003",
    cardImage: "assets/images/cen-manor/cen-manor-ensemble.jpg?v=20260803-v003",
    thumbnailImage: "assets/images/cen-manor/cen-manor-ensemble.jpg?v=20260803-v003",
    motionVideo: "assets/video/cen-manor/cen-manor-ensemble-hover.mp4?v=20260803-motion-v001",
    imageAlt: "岑氏莊園多人路線，向帛廷、裴曜、文琛、舒良易與吳祈丞五位家臣在書房中靠近鏡頭。",
    cardImageAlt: "岑氏莊園多人路線，五位家臣在書房中靠近鏡頭。",
    cardPosition: "50% 50%",
    dialogPosition: "50% 50%",
    dialogFit: "cover",
    imageLightbox: true,
    cardScale: 1,
    dialogScale: 1,
    tones: ["#dedbd4", "#85827b"],
    accent: "#68655f",
    links: [
      {
        label: "Heartbeat · 岑氏莊園多人互動",
        shortLabel: "多人路線",
        url: "https://heartbeat-app.net/characters/32db06ad-3483-41e0-a29a-e1f9348ef564",
        external: true
      }
    ]
  },
  {
    id: "xiang-boting",
    name: "向帛廷",
    initial: "向",
    category: "岑家莊園",
    role: "第一席家臣｜莊園總管",
    age: "32 歲",
    height: "189 cm",
    occupation: "莊園總管／資產代理",
    profileType: "岑家五席・第一席",
    personality: ["成熟", "嚴謹", "克制", "自律", "責任感"],
    voice: "行程都替你排好了。至於我，等你真的不需要第一席時，再告訴我該站在哪裡。",
    description: "管理岑家莊園、私人行程與家族資產；永遠比任何人更早把一切安排妥當。",
    background: "向帛廷是岑家莊園第一席，也是維持整座莊園運作的人。他掌管行程、資產與對外協調，習慣把個人情緒收在職責之後。精確與克制讓他顯得難以接近，真正動搖他的，卻是有人開始在意職位之外的他。",
    interactionTitle: "故事開端",
    interaction: "你以岑家家主的身分回到莊園。向帛廷照常替你安排每一件事，卻在日復一日的近身照料中，逐漸無法只用「第一席」解釋自己的選擇。",
    tagsLabel: "角色標籤",
    tags: ["莊園總管", "第一席", "克制守護", "職責界線"],
    featuresTitle: "互動片段",
    features: [
      "在你開口前便備妥行程與衣物，只淡淡提醒：「時間到了。」",
      "公開場合始終保持得體距離，私下卻會記住你所有細微習慣。",
      "當家族利益與你的意願衝突時，他第一次讓決策停頓。",
      "被問起是否會留下時，他沉默片刻，沒有再用職責回答。"
    ],
    status: "公開使用中",
    image: "assets/images/cen-manor/xiang-boting.png?v=20260728-v001",
    motionVideo: "assets/video/cen-manor/xiang-boting-hover.mp4?v=20260728-motion-v001",
    imageAlt: "向帛廷穿黑白家臣正裝與白手套，低頭靠近床帳，腕間垂著銀色懷錶。",
    cardPosition: "50% 38%",
    dialogPosition: "50% 38%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#deddd9", "#989996"],
    accent: "#70716d",
    links: [
      {
        label: "Heartbeat · 向帛廷故事互動",
        shortLabel: "開始互動",
        url: "https://heartbeat-app.net/characters/d4418320-82dd-45fc-a450-55c76d641a1d",
        external: true
      }
    ]
  },
  {
    id: "pei-yao",
    name: "裴曜",
    initial: "裴",
    category: "岑家莊園",
    role: "第二席家臣｜莊園安全主管",
    age: "29 歲",
    height: "186 cm",
    occupation: "安全主管／私人護衛",
    profileType: "岑家五席・第二席",
    personality: ["直接", "警覺", "強悍", "護短", "行動派"],
    voice: "別回頭，我在你後面。……這次不是命令，也不是任務。",
    description: "負責莊園安全、私人護衛與危機處理；比起承諾，更習慣先站到危險前面。",
    background: "裴曜是岑家莊園第二席，掌管安全系統與家主的私人護衛。他判斷迅速、說話直接，面對危機時幾乎不會猶豫。保護你原本只是職責，直到他發現自己在意的，早已不只是任務能否完成。",
    interactionTitle: "故事開端",
    interaction: "一場突發事件打亂莊園秩序，裴曜開始貼身確認你的安全。你們在巡查、避險與短暫休息之間靠近，也逐漸碰觸他從不願承認的恐懼。",
    tagsLabel: "角色標籤",
    tags: ["私人護衛", "第二席", "行動派", "保護本能"],
    featuresTitle: "互動片段",
    features: [
      "察覺異狀時，他會先把你護到身後，再解釋發生了什麼。",
      "不擅長安慰，只會把水遞過來說：「先坐著，我處理。」",
      "你試圖獨自行動時，他皺眉跟上，卻沒有真正阻止你。",
      "確認危機解除後，他仍站在門外，比平常多守了一會。"
    ],
    status: "公開使用中",
    image: "assets/images/cen-manor/pei-yao.png?v=20260728-v001",
    motionVideo: "assets/video/cen-manor/pei-yao-hover.mp4?v=20260728-motion-v001",
    imageAlt: "裴曜穿深色制服俯身靠近床邊，前景托盤放著茶與可頌。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#d7d6d0", "#77776e"],
    accent: "#606158",
    links: [
      {
        label: "Heartbeat · 裴曜故事互動",
        shortLabel: "開始互動",
        url: "https://heartbeat-app.net/characters/00024eb8-26e3-41f6-bcf9-58a53324b62a",
        external: true
      }
    ]
  },
  {
    id: "wen-chen",
    name: "文琛",
    initial: "文",
    category: "岑家莊園",
    role: "第三席家臣｜家族法務與檔案管理",
    age: "27 歲",
    height: "181 cm",
    occupation: "執業律師／信託顧問",
    profileType: "岑家五席・第三席",
    personality: ["溫和", "知性", "耐心", "縝密", "有所保留"],
    voice: "你想知道的，我都能告訴你。只是有些答案，看過以後就回不到原來的位置了。",
    description: "管理家族法務、信託與檔案；擅長傾聽，也知道真相應該在何時被翻開。",
    background: "文琛是岑家莊園第三席，負責家族法務、信託與歷年檔案。他溫和耐心，總能把複雜局勢說得平靜清楚；但熟悉真相的人，也最懂得如何調整揭露的順序。你開始翻查家族舊檔後，他的沉默變得比回答更值得追問。",
    interactionTitle: "故事開端",
    interaction: "一份未列入索引的舊文件把你帶進檔案室。文琛陪你核對證詞與家族紀錄，既不說謊，也沒有一次交出全部答案。",
    tagsLabel: "角色標籤",
    tags: ["家族法務", "第三席", "檔案祕密", "溫柔試探"],
    featuresTitle: "互動片段",
    features: [
      "你翻錯卷宗時，他伸手壓住紙頁，輕聲說：「這份還不是時候。」",
      "會完整回答你的問題，卻讓你事後發現他重新排列了重點。",
      "談到家族舊事時，他替你續上冷掉的茶，觀察你是否仍想追問。",
      "終於交出關鍵檔案前，他只確認一件事：「看完之後，你還會回來嗎？」"
    ],
    status: "公開使用中",
    image: "assets/images/cen-manor/wen-chen.png?v=20260728-v001",
    motionVideo: "assets/video/cen-manor/wen-chen-hover.mp4?v=20260728-motion-v001",
    imageAlt: "文琛穿深藍和式交領服，墨綠長髮垂落，從白色床帳間俯身注視。",
    cardPosition: "50% 30%",
    dialogPosition: "50% 30%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#d7dcda", "#778783"],
    accent: "#536762",
    links: [
      {
        label: "Heartbeat · 文琛故事互動",
        shortLabel: "開始互動",
        url: "https://heartbeat-app.net/characters/830e90b7-2147-4d86-9771-62c9470bd45a",
        external: true
      }
    ]
  },
  {
    id: "shu-liangyi",
    name: "舒良易",
    initial: "舒",
    category: "岑家莊園",
    role: "第四席家臣｜莊園醫療主管",
    age: "25 歲",
    height: "178 cm",
    occupation: "執業醫師／健康管理",
    profileType: "岑家五席・第四席",
    personality: ["冷靜", "理性", "細緻", "潔癖", "敏感"],
    voice: "數據已經恢復正常。照理說我該放心……但你似乎也不再需要我來了。",
    description: "負責莊園醫療與私人健康管理；擅長讀懂數據，卻不擅長承認自己的在意。",
    background: "舒良易是岑家莊園第四席，負責醫療系統與家主的健康管理。他冷靜、精確，習慣把擔心轉譯成數據、醫囑與風險評估。照顧你原本是最清楚的工作，真正令他不安的，是某天你恢復健康後不再需要他的理由。",
    interactionTitle: "故事開端",
    interaction: "你因過勞被迫暫停行程，舒良易接手每日檢查與生活管理。規律的診療逐漸變成只有你們理解的默契，也讓專業界線開始出現不易量化的偏差。",
    tagsLabel: "角色標籤",
    tags: ["醫療主管", "第四席", "理性照料", "界線偏移"],
    featuresTitle: "互動片段",
    features: [
      "發現你又省略休息時，他看著數據說：「這不是建議，是醫囑。」",
      "不說自己擔心，只會重新調整你的飲食、藥物與行程。",
      "檢查結束後仍沒有離開，直到你先問他是不是還有事。",
      "你說已經不需要照顧時，他的回答比平常慢了半秒。"
    ],
    status: "公開使用中",
    image: "assets/images/cen-manor/shu-liangyi.png?v=20260728-v001",
    motionVideo: "assets/video/cen-manor/shu-liangyi-hover.mp4?v=20260728-motion-v001",
    imageAlt: "舒良易穿象牙白醫療家臣制服，銀金短髮，手持聽診器靠近床邊。",
    cardPosition: "50% 28%",
    dialogPosition: "50% 28%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e4e1db", "#b2aaa0"],
    accent: "#918a81",
    links: [
      {
        label: "Heartbeat · 舒良易故事互動",
        shortLabel: "開始互動",
        url: "https://heartbeat-app.net/characters/c7730516-33dd-404f-be21-91e4f9a11d07",
        external: true
      }
    ]
  },
  {
    id: "wu-qicheng",
    name: "吳祈丞",
    initial: "吳",
    category: "岑家莊園",
    role: "第五席家臣｜生活與環境主管",
    age: "22 歲",
    height: "177 cm",
    occupation: "環境工程師／生活管理",
    profileType: "岑家五席・第五席",
    personality: ["活潑", "聰明", "親切", "敏捷", "善於交際"],
    voice: "鑰匙給你，想走哪扇門都行。只是回來的時候，記得先來找我。",
    description: "管理莊園生活、溫室與智慧環境；總能讓人放鬆，也最清楚自由意味著什麼。",
    background: "吳祈丞是岑家莊園第五席，負責生活服務、智慧居住系統與溫室土地。他反應快、擅長和人拉近距離，看似最不受規矩束縛，實際比誰都明白選擇的重量。他想要的從來不是把你留下，而是讓你離開後仍願意回來。",
    interactionTitle: "故事開端",
    interaction: "莊園生活系統改造期間，吳祈丞帶你巡過廚房、溫室與尚未開放的側門。你們從日常玩笑開始，也逐漸談到留下、離開與真正的自由。",
    tagsLabel: "角色標籤",
    tags: ["環境主管", "第五席", "日常陪伴", "自由選擇"],
    featuresTitle: "互動片段",
    features: [
      "端來新出爐的麵包時會先偷吃一口，再說這是必要的品質檢查。",
      "帶你走莊園捷徑，順手介紹每一株植物和沒人注意的小機關。",
      "被你問起規矩時，他笑著把側門鑰匙放到你掌心。",
      "你真的走出門後，他沒有追，只在原地問：「那你還會回來吧？」"
    ],
    status: "公開使用中",
    image: "assets/images/cen-manor/wu-qicheng.png?v=20260728-v001",
    motionVideo: "assets/video/cen-manor/wu-qicheng-hover.mp4?v=20260728-motion-v001",
    imageAlt: "吳祈丞穿奶油白與焦糖棕制服，露出小虎牙笑著俯身遞上麵包托盤。",
    cardPosition: "50% 28%",
    dialogPosition: "50% 28%",
    cardScale: 1,
    dialogScale: 1,
    tones: ["#e6ddd2", "#b79677"],
    accent: "#9d7651",
    links: [
      {
        label: "Heartbeat · 吳祈丞故事互動",
        shortLabel: "開始互動",
        url: "https://heartbeat-app.net/characters/d73c75b2-132a-4761-8331-6684cc165bee",
        external: true
      }
    ]
  }
];

const grid = document.querySelector("#character-grid");
const scrollArchive = document.querySelector("#scroll-archive");
const filterRow = document.querySelector("#filter-row");
const searchInput = document.querySelector("#search-input");
const resultNote = document.querySelector("#result-note");
const characterCount = document.querySelector("#character-count");
const seriesCount = document.querySelector("#series-count");
const themeToggle = document.querySelector("#theme-toggle");
const themeToggleLabel = themeToggle?.querySelector(".theme-toggle-label");
const themeColor = document.querySelector("#theme-color");

const dialog = document.querySelector("#character-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogPortrait = document.querySelector("#dialog-portrait");
const dialogImage = document.querySelector("#dialog-image");
const imageLightbox = document.querySelector("#image-lightbox");
const imageLightboxClose = document.querySelector("#image-lightbox-close");
const imageLightboxImage = document.querySelector("#image-lightbox-image");
const dialogCategory = document.querySelector("#dialog-category");
const dialogName = document.querySelector("#dialog-name");
const dialogRole = document.querySelector("#dialog-role");
const dialogModeSwitch = document.querySelector("#dialog-mode-switch");
const dialogAge = document.querySelector("#dialog-age");
const dialogHeight = document.querySelector("#dialog-height");
const dialogOccupation = document.querySelector("#dialog-occupation");
const dialogProfileType = document.querySelector("#dialog-profile-type");
const dialogBackgroundTitle = document.querySelector("#dialog-background-title");
const dialogBackground = document.querySelector("#dialog-background");
const dialogInteractionTitle = document.querySelector("#dialog-interaction-title");
const dialogInteraction = document.querySelector("#dialog-interaction");
const dialogVoice = document.querySelector("#dialog-voice");
const dialogDescription = document.querySelector("#dialog-description");
const dialogTags = document.querySelector("#dialog-tags");
const dialogFeatures = document.querySelector("#dialog-features");
const dialogFeaturesTitle = document.querySelector("#dialog-features-title");
const dialogFeatureList = document.querySelector("#dialog-feature-list");
const dialogActions = document.querySelector("#dialog-actions");

let activeCategory = "全部";
let revealObserver;
const touchMotionObservers = new WeakMap();
let activeDialogCharacterId = "";
const showcaseModeSelections = new Map();

const themeStorageKey = "character-archive-theme";
const themeSequence = ["auto", "light", "dark"];
const themeLabels = {
  auto: "自動",
  light: "淺色",
  dark: "深色"
};
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function resolveTheme(preference) {
  return preference === "auto" ? (systemTheme.matches ? "dark" : "light") : preference;
}

function applyTheme(preference, persist = true) {
  const safePreference = themeSequence.includes(preference) ? preference : "auto";
  const resolvedTheme = resolveTheme(safePreference);
  const nextPreference = themeSequence[(themeSequence.indexOf(safePreference) + 1) % themeSequence.length];
  const displayLabel = safePreference === "auto"
    ? `自動（${themeLabels[resolvedTheme]}）`
    : themeLabels[safePreference];

  document.documentElement.dataset.themePreference = safePreference;
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.classList.add("theme-ready");

  if (themeToggle && themeToggleLabel) {
    themeToggleLabel.textContent = displayLabel;
    themeToggle.title = safePreference === "auto"
      ? `外觀：跟隨系統，目前顯示${themeLabels[resolvedTheme]}`
      : `外觀：${displayLabel}`;
    themeToggle.setAttribute(
      "aria-label",
      safePreference === "auto"
        ? `目前跟隨系統並顯示${themeLabels[resolvedTheme]}，按一下切換成${themeLabels[nextPreference]}模式`
        : `目前為${displayLabel}模式，按一下切換成${themeLabels[nextPreference]}模式`
    );
  }

  if (themeColor) {
    themeColor.content = resolvedTheme === "dark" ? "#151514" : "#f0efec";
  }

  if (persist) {
    try {
      localStorage.setItem(themeStorageKey, safePreference);
    } catch (error) {
      // The selected mode still works for this visit when storage is unavailable.
    }
  }
}

const icons = {
  arrowRight: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
  external: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'
};

const categories = ["全部", ...new Set(characters.map((character) => character.category))];

characterCount.textContent = characters.length;
seriesCount.textContent = categories.length - 1;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function renderFilters() {
  filterRow.innerHTML = categories.map((category) => `
    <button
      class="filter-button ${category === activeCategory ? "is-active" : ""}"
      type="button"
      data-category="${escapeHtml(category)}"
      aria-pressed="${category === activeCategory}"
    >${escapeHtml(category)}</button>
  `).join("");
}

function getFilteredCharacters() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("zh-Hant");

  return characters.filter((character) => {
    const matchesCategory = activeCategory === "全部" || character.category === activeCategory;
    const modeContent = (character.modes || []).flatMap((mode) => [
      mode.label,
      mode.name,
      mode.role,
      mode.occupation,
      mode.profileType,
      mode.voice,
      mode.description,
      mode.background,
      mode.interaction,
      ...(mode.personality || []),
      ...(mode.tags || []),
      ...(mode.features || [])
    ]);
    const haystack = [
      character.name,
      character.category,
      character.role,
      character.age,
      character.height,
      character.occupation,
      character.profileType,
      character.voice,
      character.description,
      character.background,
      character.interaction,
      ...character.personality,
      ...character.tags,
      ...character.features,
      ...modeContent
    ].join(" ").toLocaleLowerCase("zh-Hant");

    return matchesCategory && (!keyword || haystack.includes(keyword));
  });
}

function renderCardActions(character) {
  const primaryLink = character.links?.[0];

  if (!primaryLink) {
    return `
      <div class="card-actions card-actions-single">
        <button class="card-detail-action" type="button" data-character-id="${character.id}">
          查看資料 ${icons.arrowRight}
        </button>
      </div>
    `;
  }

  return `
    <div class="card-actions">
      <button class="card-detail-action" type="button" data-character-id="${character.id}">
        功能簡介 ${icons.arrowRight}
      </button>
      <a
        class="card-external-link"
        href="${escapeHtml(primaryLink.url)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${escapeHtml(primaryLink.label)}，在新分頁開啟"
      >
        ${escapeHtml(primaryLink.shortLabel || primaryLink.label)}
        ${icons.external}
      </a>
    </div>
  `;
}

function renderMotionVideo(character) {
  if (!character.motionVideo) return "";

  return `
    <video
      class="character-motion"
      data-motion-video
      src="${escapeHtml(character.motionVideo)}"
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
      tabindex="-1"
      style="object-position:${character.cardPosition || character.dialogPosition || "50% 50%"}"
    ></video>
  `;
}

function getCardImage(character) {
  return character.cardImage || character.image;
}

function getThumbnailImage(character) {
  return character.thumbnailImage || getCardImage(character);
}

function getFeatureCountLabel(character) {
  if (!character.features?.length) return "資料整理中";
  if (character.featuresTitle === "互動片段") return `${character.features.length} 個片段`;
  if (character.featuresTitle === "故事走向") return `${character.features.length} 條走向`;
  return `${character.features.length} 項功能`;
}

function renderInteractionDemo() {
  const cards = [
    { label: "NEXT CHARACTER", title: "新角色檔案", subtitle: "角色形象與資料預留位置", detail: "新角色公開後，這裡會放入正式形象照、基本定位與角色入口。" },
    { label: "PORTRAIT SLOT", title: "形象資料", subtitle: "照片、姓名與所屬系列", detail: "角色照片會使用一致的直幅比例，並保留姓名、職業與分類資訊。" },
    { label: "ARCHIVE ENTRY", title: "互動入口", subtitle: "背景、功能與使用方式", detail: "點開角色後，可以閱讀完整背景、互動定位，並前往已公開的使用入口。" }
  ];

  return `
    <aside class="card-stack-demo" data-reveal aria-label="角色卡操作方式">
      <div class="demo-stack">
        ${cards.map((card, index) => `
          <button
            class="demo-card"
            type="button"
            data-demo-card
            aria-expanded="false"
            style="--demo-index:${index};--demo-x:${index * 18}px;--demo-y:${index * 18}px;--demo-rotate:${(index - 1) * 1.4}deg"
          >
            <span class="demo-card-number">0${index + 1}</span>
            <span class="demo-photo-slot" aria-hidden="true">
              <span>PORTRAIT</span>
              <span>4:5</span>
            </span>
            <span class="demo-card-copy">
              <span class="demo-card-label">${card.label}</span>
              <strong>${card.title}</strong>
              <span class="demo-card-subtitle">${card.subtitle}</span>
              <span class="demo-card-detail">${card.detail}</span>
            </span>
          </button>
        `).join("")}
      </div>
      <p class="demo-caption">未來角色預留席 / 滑過抽取 / 點擊展開</p>
    </aside>
  `;
}

function renderCharacters() {
  const filtered = getFilteredCharacters();
  const useScrollArchive = activeCategory === "全部" && !searchInput.value.trim();
  resultNote.textContent = `顯示 ${filtered.length} / ${characters.length} 筆角色檔案`;

  grid.hidden = useScrollArchive;
  scrollArchive.hidden = !useScrollArchive;

  if (useScrollArchive) {
    grid.classList.remove("is-single-result");
    grid.innerHTML = "";
    renderScrollArchive(filtered);
    return;
  }

  scrollArchive.innerHTML = "";

  if (filtered.length === 0) {
    grid.classList.remove("is-single-result");
    grid.innerHTML = `<div class="empty-state" data-reveal>找不到符合條件的角色，請更換關鍵字或分類。</div>`;
    observeRevealElements();
    return;
  }

  grid.classList.toggle("is-single-result", filtered.length === 1);
  grid.innerHTML = filtered.map((character, index) => `
    <article
      class="character-card"
      data-reveal
      style="
        --card-tone-a:${character.tones[0]};
        --card-tone-b:${character.tones[1]};
        --character-accent:${character.accent};
        --image-scale:${character.cardScale || 1.02};
        --reveal-delay:${index * 85}ms
      "
    >
      <button class="card-button" type="button" data-character-id="${character.id}" aria-label="查看 ${escapeHtml(character.name)} 功能簡介">
        <div class="card-portrait">
          <img
            src="${escapeHtml(getCardImage(character))}"
            alt="${escapeHtml(character.cardImageAlt || character.imageAlt)}"
            loading="lazy"
            decoding="async"
            style="object-position:${character.cardPosition || character.dialogPosition || "50% 50%"}"
          >
          ${renderMotionVideo(character)}
          <span class="card-image-overlay" aria-hidden="true"></span>
          <span class="card-index">FILE ${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div class="card-content">
          <p class="card-category">${escapeHtml(character.category)}</p>
          <h3>${escapeHtml(character.name)}</h3>
          <p class="card-role">${escapeHtml(character.role)}</p>
          ${character.voice ? `<p class="card-voice">「${escapeHtml(character.voice)}」</p>` : ""}
          <div class="card-meta">
            ${character.status ? `<span>${escapeHtml(character.status)}</span>` : ""}
            <span>${escapeHtml(getFeatureCountLabel(character))}</span>
          </div>
        </div>
      </button>
      ${renderCardActions(character)}
    </article>
  `).join("") + (filtered.length === 1 ? renderInteractionDemo() : "");

  bindCardInteractions();
  observeRevealElements();
}

function renderScrollArchive(items) {
  scrollArchive.innerHTML = `
    <section
      class="showcase-scene"
      data-scroll-scene
      data-active-index="0"
    >
      <div class="showcase-sticky">
        <header class="showcase-header">
          <p>CHARACTER INDEX</p>
          <div class="showcase-progress" aria-hidden="true">
            <span data-current-index>01</span>
            <i><b data-horizontal-progress></b></i>
            <span>${String(items.length).padStart(2, "0")}</span>
          </div>
        </header>

        <div class="showcase-layout">
          <nav class="showcase-thumbs ${items.length > 6 ? "is-many" : ""}" aria-label="角色快速選擇">
            ${items.map((character, index) => `
              <button
                class="showcase-thumb ${index === 0 ? "is-active" : ""}"
                type="button"
                data-showcase-jump="${index}"
                aria-label="切換至 ${escapeHtml(character.name)}"
                aria-current="${index === 0 ? "true" : "false"}"
              >
                <img src="${escapeHtml(getThumbnailImage(character))}" alt="" loading="lazy" decoding="async" style="object-position:${character.cardPosition || "50% 50%"};--thumb-scale:${character.cardScale || 1.02}">
                <span>${String(index + 1).padStart(2, "0")}</span>
              </button>
            `).join("")}
          </nav>

          <div class="showcase-media">
            ${items.map((character, index) => `
              <button
                class="showcase-portrait ${index === 0 ? "is-active" : ""}"
                type="button"
                data-showcase-panel
                data-character-id="${character.id}"
                aria-label="查看 ${escapeHtml(character.name)} 的完整資料"
                style="--showcase-accent:${character.accent};--showcase-tone:${character.tones[0]};--focus:${index === 0 ? 1 : 0};--portrait-y:${index === 0 ? 0 : 42}px"
              >
                <img src="${escapeHtml(getCardImage(character))}" alt="${escapeHtml(character.cardImageAlt || character.imageAlt)}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async" style="object-position:${character.cardPosition || "50% 50%"};--image-scale:${character.cardScale || 1.02};--image-hover-scale:${(character.cardScale || 1.02) + 0.02}">
                ${renderMotionVideo(character)}
              </button>
            `).join("")}
          </div>

          <div class="showcase-copy-stack">
            ${items.map((character, index) => renderShowcaseCopy(character, index, index === 0)).join("")}
          </div>
        </div>

        <div class="showcase-baseline" aria-hidden="true">
          <span>MIN / CHARACTER ARCHIVE</span>
          <span data-active-name>${escapeHtml(items[0]?.name || "")}</span>
        </div>
      </div>
    </section>
  `;

  selectShowcase(0, false);
  bindMotionVideos(scrollArchive);
}

function getShowcaseModeId(character) {
  if (!character?.modes?.length) return "";
  const savedModeId = showcaseModeSelections.get(character.id);
  return character.modes.some((mode) => mode.id === savedModeId)
    ? savedModeId
    : character.modes[0].id;
}

function renderShowcaseModeSwitch(character, activeModeId) {
  if (!character.modes?.length || character.modes.length < 2) return "";

  return `
    <div class="showcase-mode-switch" aria-label="${escapeHtml(character.name)}首頁版本">
      ${character.modes.map((mode) => `
        <button
          class="showcase-mode-button ${mode.id === activeModeId ? "is-active" : ""}"
          type="button"
          data-showcase-mode="${escapeHtml(mode.id)}"
          data-showcase-mode-character="${escapeHtml(character.id)}"
          aria-pressed="${mode.id === activeModeId ? "true" : "false"}"
        >${escapeHtml(mode.label)}</button>
      `).join("")}
    </div>
  `;
}

function renderShowcasePlatformPicker(links = []) {
  if (links.length < 2) return "";

  const platformItems = links.map((link) => {
    if (link.status === "coming-soon") {
      return `
        <span class="showcase-platform-item is-upcoming" aria-disabled="true">
          <span>${escapeHtml(link.label.replace(" · 故事互動", ""))}</span>
          <small>即將公開</small>
        </span>
      `;
    }

    return `
      <a
        class="showcase-platform-item"
        href="${escapeHtml(link.url)}"
        ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
        aria-label="${escapeHtml(link.label)}，在新分頁開啟"
      >
        <span>${escapeHtml(link.label.replace(" · 故事互動", ""))}</span>
        <small>進入 ${icons.external}</small>
      </a>
    `;
  }).join("");

  return `
    <details class="showcase-platform-picker">
      <summary>選擇平台</summary>
      <div class="showcase-platform-menu" aria-label="故事互動平台">
        ${platformItems}
      </div>
    </details>
  `;
}

function renderShowcaseCopy(character, index, isActive) {
  const activeModeId = getShowcaseModeId(character);
  const profile = resolveCharacterMode(character, activeModeId);
  const primaryLink = profile.links?.find((link) => link.url && link.status !== "coming-soon");
  const hasPlatformChoice = (profile.links?.length || 0) > 1;

  return `
    <article
      class="showcase-copy ${isActive ? "is-active" : ""}"
      data-showcase-copy
      data-showcase-character="${escapeHtml(character.id)}"
      style="--focus:${isActive ? 1 : 0};--copy-x:${isActive ? 0 : 28}px;--character-accent:${character.accent}"
      aria-hidden="${isActive ? "false" : "true"}"
      ${isActive ? "" : "inert"}
    >
      <p class="showcase-file">FILE ${String(index + 1).padStart(2, "0")} / ${escapeHtml(profile.category)}</p>
      <h3>${escapeHtml(profile.name)}</h3>
      <p class="showcase-role">${escapeHtml(profile.role)}</p>
      ${renderShowcaseModeSwitch(character, activeModeId)}
      ${profile.voice ? `<blockquote>「${escapeHtml(profile.voice)}」</blockquote>` : ""}
      <dl class="showcase-facts">
        <div><dt>AGE</dt><dd>${escapeHtml(profile.age)}</dd></div>
        <div><dt>HEIGHT</dt><dd>${escapeHtml(profile.height)}</dd></div>
        <div><dt>OCCUPATION</dt><dd>${escapeHtml(profile.occupation)}</dd></div>
      </dl>
      <div class="showcase-actions">
        <button type="button" data-character-id="${escapeHtml(character.id)}" data-character-mode="${escapeHtml(activeModeId)}">查看資料 ${icons.arrowRight}</button>
        ${hasPlatformChoice
          ? renderShowcasePlatformPicker(profile.links)
          : primaryLink
            ? `<a href="${escapeHtml(primaryLink.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(primaryLink.label)}，在新分頁開啟">${escapeHtml(primaryLink.shortLabel || primaryLink.label)} ${icons.external}</a>`
            : ""}
      </div>
    </article>
  `;
}

function selectShowcaseMode(characterId, modeId) {
  const character = characters.find((item) => item.id === characterId);
  if (!character?.modes?.some((mode) => mode.id === modeId)) return;

  showcaseModeSelections.set(characterId, modeId);
  const copies = [...scrollArchive.querySelectorAll("[data-showcase-copy]")];
  const currentCopy = copies.find((copy) => copy.dataset.showcaseCharacter === characterId);
  if (!currentCopy) return;

  const index = copies.indexOf(currentCopy);
  const isActive = currentCopy.classList.contains("is-active");
  currentCopy.outerHTML = renderShowcaseCopy(character, index, isActive);
}

function selectShowcase(nextIndex, animate = true) {
  const scene = scrollArchive.querySelector("[data-scroll-scene]");
  const portraits = [...scrollArchive.querySelectorAll("[data-showcase-panel]")];
  const copies = [...scrollArchive.querySelectorAll("[data-showcase-copy]")];
  const thumbs = [...scrollArchive.querySelectorAll("[data-showcase-jump]")];
  if (!scene || !portraits.length) return;

  const previousIndex = Number(scene.dataset.activeIndex || 0);
  const activeIndex = Math.min(portraits.length - 1, Math.max(0, nextIndex));
  const direction = activeIndex === previousIndex ? 0 : activeIndex > previousIndex ? 1 : -1;
  const progress = portraits.length > 1 ? activeIndex / (portraits.length - 1) : 1;
  scene.dataset.activeIndex = String(activeIndex);
  scene.classList.toggle("is-switching", animate && direction !== 0);

  portraits.forEach((portrait, index) => {
    const isActive = index === activeIndex;
    if (!isActive) pauseMotionVideo(portrait);
    portrait.style.setProperty("--focus", isActive ? "1" : "0");
    portrait.style.setProperty("--portrait-y", `${isActive ? 0 : (index < activeIndex ? -1 : 1) * 32}px`);
    portrait.classList.toggle("is-active", index === activeIndex);
  });

  copies.forEach((copy, index) => {
    const isActive = index === activeIndex;
    copy.style.setProperty("--focus", isActive ? "1" : "0");
    copy.style.setProperty("--copy-x", `${isActive ? 0 : (index < activeIndex ? -1 : 1) * 22}px`);
    copy.classList.toggle("is-active", index === activeIndex);
    copy.setAttribute("aria-hidden", index === activeIndex ? "false" : "true");
    copy.toggleAttribute("inert", index !== activeIndex);
  });

  thumbs.forEach((thumb, index) => {
    const isActive = index === activeIndex;
    thumb.classList.toggle("is-active", isActive);
    thumb.setAttribute("aria-current", isActive ? "true" : "false");
  });

  const currentIndex = scrollArchive.querySelector("[data-current-index]");
  const progressBar = scrollArchive.querySelector("[data-horizontal-progress]");
  const activeName = scrollArchive.querySelector("[data-active-name]");
  if (currentIndex) currentIndex.textContent = String(activeIndex + 1).padStart(2, "0");
  if (progressBar) progressBar.style.transform = `scaleX(${progress.toFixed(3)})`;
  if (activeName) activeName.textContent = characters.find((item) => item.id === portraits[activeIndex]?.dataset.characterId)?.name || "";

  syncTouchMotionVideos();

  if (animate && direction !== 0) {
    window.setTimeout(() => scene.classList.remove("is-switching"), 520);
  }
}

function syncTouchMotionVideos() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canHover || reduceMotion) return;

  document.querySelectorAll(".showcase-portrait, .card-portrait").forEach((host) => {
    const rect = host.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;
    const isShowcase = host.matches(".showcase-portrait");
    const isCurrent = !isShowcase || host.classList.contains("is-active");
    const shouldPlay = visibleRatio >= 0.6 && isCurrent && !document.hidden;
    if (shouldPlay) playMotionVideo(host);
    else pauseMotionVideo(host, false);
  });
}

function renderDialogLinks(links = []) {
  if (!links.length) {
    dialogActions.innerHTML = "";
    dialogActions.hidden = true;
    return;
  }

  dialogActions.hidden = false;
  const linkItems = links.map((link) => {
    if (link.status === "coming-soon") {
      return `
        <span class="dialog-link is-upcoming" aria-disabled="true">
          <span class="dialog-link-main">${escapeHtml(link.label)}</span>
          <span class="dialog-link-status">即將公開</span>
        </span>
      `;
    }

    return `
      <a
        class="dialog-link"
        href="${escapeHtml(link.url)}"
        ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
      >
        <span class="dialog-link-main">${escapeHtml(link.label)}</span>
        ${link.external ? icons.external : icons.arrowRight}
      </a>
    `;
  }).join("");

  dialogActions.innerHTML = `
    <p class="dialog-actions-title">互動入口</p>
    <div class="dialog-platform-list">${linkItems}</div>
  `;
}

function renderDialogFeatures(features = [], title = "主要功能") {
  if (!features.length) {
    dialogFeatures.hidden = true;
    dialogFeatureList.innerHTML = "";
    return;
  }

  dialogFeatures.hidden = false;
  dialogFeaturesTitle.textContent = title;
  dialogFeatureList.innerHTML = features
    .map((feature) => `<li>${escapeHtml(feature)}</li>`)
    .join("");
}

function resolveCharacterMode(character, modeId) {
  const selectedMode = character.modes?.find((mode) => mode.id === modeId);
  return selectedMode ? { ...character, ...selectedMode } : character;
}

function renderDialogModeSwitch(character, activeModeId) {
  if (!character.modes?.length || character.modes.length < 2) {
    dialogModeSwitch.hidden = true;
    dialogModeSwitch.innerHTML = "";
    return;
  }

  dialogModeSwitch.hidden = false;
  dialogModeSwitch.innerHTML = character.modes.map((mode) => `
    <button
      type="button"
      class="dialog-mode-button ${mode.id === activeModeId ? "is-active" : ""}"
      data-dialog-mode="${escapeHtml(mode.id)}"
      aria-pressed="${mode.id === activeModeId ? "true" : "false"}"
    >${escapeHtml(mode.label)}</button>
  `).join("");
}

function renderCharacterDialog(character, modeId) {
  const profile = resolveCharacterMode(character, modeId);

  dialogCategory.textContent = profile.category;
  dialogName.textContent = profile.name;
  dialogRole.textContent = profile.role;
  dialogAge.textContent = profile.age;
  dialogHeight.textContent = profile.height;
  dialogOccupation.textContent = profile.occupation;
  dialogProfileType.textContent = profile.profileType;
  dialogBackgroundTitle.textContent = profile.backgroundTitle || "角色背景";
  dialogBackground.textContent = profile.background;
  dialogInteractionTitle.textContent = profile.interactionTitle || "互動定位";
  dialogInteraction.textContent = profile.interaction;

  if (profile.voice) {
    dialogVoice.hidden = false;
    dialogVoice.textContent = `「${profile.voice}」`;
  } else {
    dialogVoice.hidden = true;
    dialogVoice.textContent = "";
  }

  dialogDescription.textContent = profile.description;
  dialogTags.setAttribute("aria-label", profile.tagsLabel || "功能標籤");
  dialogTags.innerHTML = profile.tags
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");

  renderDialogFeatures(profile.features, profile.featuresTitle);
  renderDialogLinks(profile.links);
  renderDialogModeSwitch(character, modeId);
}

function openCharacter(characterId, modeId = "") {
  const character = characters.find((item) => item.id === characterId);
  if (!character) return;

  activeDialogCharacterId = characterId;
  const initialModeId = character.modes?.some((mode) => mode.id === modeId)
    ? modeId
    : character.modes?.[0]?.id || "";

  dialog.style.setProperty("--dialog-tone-a", character.tones[0]);
  dialog.style.setProperty("--dialog-tone-b", character.tones[1]);
  dialog.style.setProperty("--dialog-accent", character.accent);
  dialog.style.setProperty("--dialog-image-scale", character.dialogScale || 1.01);
  dialog.classList.toggle("is-group-portrait", character.dialogLayout === "group-portrait");
  dialogPortrait.classList.toggle("is-zoomable", Boolean(character.imageLightbox));

  if (character.imageLightbox) {
    dialogPortrait.tabIndex = 0;
    dialogPortrait.setAttribute("role", "button");
    dialogPortrait.setAttribute("aria-label", `滿版查看 ${character.name} 的角色圖片`);
  } else {
    dialogPortrait.removeAttribute("tabindex");
    dialogPortrait.removeAttribute("role");
    dialogPortrait.removeAttribute("aria-label");
  }

  dialogImage.src = character.image;
  dialogImage.alt = character.imageAlt;
  dialogImage.style.objectPosition = character.dialogPosition || character.cardPosition || "50% 50%";
  dialogImage.style.objectFit = character.dialogFit || "cover";

  renderCharacterDialog(character, initialModeId);
  dialog.showModal();
  dialogName.tabIndex = -1;
  dialogName.focus({ preventScroll: true });
}

function openDialogImageLightbox() {
  const character = characters.find((item) => item.id === activeDialogCharacterId);
  if (!character?.imageLightbox) return;

  imageLightboxImage.src = character.image;
  imageLightboxImage.alt = character.imageAlt;
  imageLightbox.showModal();
  imageLightboxClose.focus({ preventScroll: true });
}

function createRipple(button, event) {
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "card-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

function pauseMotionVideo(host, reset = true) {
  const video = host?.querySelector("[data-motion-video]");
  if (!video) return;

  video.pause();
  if (reset) {
    try {
      video.currentTime = 0;
    } catch (error) {
      // The video may not have loaded enough metadata to seek yet.
    }
  }
  host.classList.remove("is-video-playing");
}

function playMotionVideo(host) {
  const video = host?.querySelector("[data-motion-video]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!video || reduceMotion) return;

  video.muted = true;
  const playRequest = video.play();
  if (playRequest && typeof playRequest.catch === "function") {
    playRequest
      .then(() => host.classList.add("is-video-playing"))
      .catch(() => host.classList.remove("is-video-playing"));
  }
}

function bindMotionVideos(scope) {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  touchMotionObservers.get(scope)?.disconnect();

  scope.querySelectorAll("[data-motion-video]").forEach((video) => {
    const host = video.closest(".showcase-portrait, .card-portrait");
    if (!host || host.dataset.motionBound === "true") return;

    host.dataset.motionBound = "true";
    video.addEventListener("playing", () => host.classList.add("is-video-playing"));
    video.addEventListener("pause", () => host.classList.remove("is-video-playing"));

    if (canHover) {
      host.addEventListener("pointerenter", () => playMotionVideo(host));
      host.addEventListener("pointerleave", () => pauseMotionVideo(host));

      const focusTarget = host.closest("button") || host;
      focusTarget.addEventListener("focus", () => playMotionVideo(host));
      focusTarget.addEventListener("blur", () => pauseMotionVideo(host));
    }
  });

  if (!canHover && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const host = entry.target;
        const isShowcase = host.matches(".showcase-portrait");
        const isCurrent = !isShowcase || host.classList.contains("is-active");

        if (entry.isIntersecting && isCurrent && !document.hidden) {
          playMotionVideo(host);
        } else {
          pauseMotionVideo(host, false);
        }
      });
    }, { threshold: 0.6 });

    scope.querySelectorAll(".showcase-portrait, .card-portrait").forEach((host) => observer.observe(host));
    touchMotionObservers.set(scope, observer);
  }
}

function bindCardInteractions() {
  const cards = grid.querySelectorAll(".character-card");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  cards.forEach((card) => {
    const mainButton = card.querySelector(".card-button");

    if (canHover) {
      card.addEventListener("pointermove", (event) => {
        if (event.target.closest("a")) return;

        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const tiltY = (x - 0.5) * 5;
        const tiltX = (0.5 - y) * 5;

        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        card.classList.add("is-tilting");
      });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.classList.remove("is-tilting");
      });
    }

    mainButton?.addEventListener("pointerdown", (event) => createRipple(mainButton, event));
  });

  bindMotionVideos(grid);
}

function observeRevealElements() {
  revealObserver?.disconnect();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14 });

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    revealObserver.observe(element);
  });
}

function updatePointerGlow(event) {
  document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderFilters();
  renderCharacters();
});

grid.addEventListener("click", (event) => {
  const demoCard = event.target.closest("[data-demo-card]");
  if (demoCard) {
    const wasOpen = demoCard.classList.contains("is-open");
    grid.querySelectorAll("[data-demo-card]").forEach((card) => {
      card.classList.remove("is-open");
      card.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      demoCard.classList.add("is-open");
      demoCard.setAttribute("aria-expanded", "true");
    }
    return;
  }

  const trigger = event.target.closest("[data-character-id]");
  if (!trigger) return;
  const character = characters.find((item) => item.id === trigger.dataset.characterId);
  openCharacter(trigger.dataset.characterId, trigger.dataset.characterMode || getShowcaseModeId(character));
});

scrollArchive.addEventListener("click", (event) => {
  const modeTrigger = event.target.closest("[data-showcase-mode]");
  if (modeTrigger) {
    selectShowcaseMode(modeTrigger.dataset.showcaseModeCharacter, modeTrigger.dataset.showcaseMode);
    return;
  }

  const jump = event.target.closest("[data-showcase-jump]");
  if (jump) {
    selectShowcase(Number(jump.dataset.showcaseJump));
    return;
  }

  const trigger = event.target.closest("[data-character-id]");
  if (!trigger) return;
  const character = characters.find((item) => item.id === trigger.dataset.characterId);
  openCharacter(trigger.dataset.characterId, trigger.dataset.characterMode || getShowcaseModeId(character));
});

searchInput.addEventListener("input", renderCharacters);
dialogClose.addEventListener("click", () => dialog.close());
dialogPortrait.addEventListener("click", openDialogImageLightbox);
dialogPortrait.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openDialogImageLightbox();
});
imageLightboxClose.addEventListener("click", () => imageLightbox.close());
dialogModeSwitch.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-dialog-mode]");
  if (!trigger) return;

  const character = characters.find((item) => item.id === activeDialogCharacterId);
  if (!character) return;
  renderCharacterDialog(character, trigger.dataset.dialogMode);
});

themeToggle?.addEventListener("click", () => {
  const currentPreference = document.documentElement.dataset.themePreference || "auto";
  const nextPreference = themeSequence[(themeSequence.indexOf(currentPreference) + 1) % themeSequence.length];
  applyTheme(nextPreference);
});

const handleSystemThemeChange = () => {
  if (document.documentElement.dataset.themePreference === "auto") {
    applyTheme("auto", false);
  }
};

if (typeof systemTheme.addEventListener === "function") {
  systemTheme.addEventListener("change", handleSystemThemeChange);
} else {
  systemTheme.addListener(handleSystemThemeChange);
}

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) imageLightbox.close();
});

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("pointermove", updatePointerGlow, { passive: true });
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.querySelectorAll(".showcase-portrait, .card-portrait").forEach((host) => pauseMotionVideo(host, false));
    return;
  }

  syncTouchMotionVideos();
});

document.querySelectorAll(".hero, .section-heading, .filter-row, .about-section").forEach((element, index) => {
  element.dataset.reveal = "";
  element.style.setProperty("--reveal-delay", `${index * 70}ms`);
});

applyTheme(document.documentElement.dataset.themePreference || "auto", false);
renderFilters();
renderCharacters();
observeRevealElements();
