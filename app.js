const creatorProfile = {
  name: "Min",
  platformLinks: [
    {
      id: "heartbeat",
      label: "Heartbeat",
      url: "https://heartbeat-app.net/creators/%F0%9B%B0%99%E1%AD%9C%F0%96%AB%B4%F0%96%AB%B0%F0%96%AB%B1%F0%96%AB%B3%F0%96%AB%B2%F0%96%AB%B2%F0%96%AB%B3%F0%96%AB%B4%F0%96%AB%B0%F0%96%AB%B1%EA%9B%B0%20%E1%AD%9C%F0%96%AB%B4%F0%96%AB%B0%F0%96%AB%B1%F0%96%AB%B3%F0%96%AB%B2%F0%96%AB%B2%F0%96%AB%B3%F0%96%AB%B4%F0%96%AB%B0%F0%96%AB%B1%EA%9B%B0%E0%B2%A3"
    },
    {
      id: "saucepan",
      label: "Saucepan",
      url: "https://saucepan.ai/u/mmmminminmmm_"
    },
    {
      id: "fuwa",
      label: "Fuwa",
      url: "https://link.fuwachat.com/creators/019fbcc5-faca-758e-9914-39c578478f7e"
    },
    {
      id: "threads",
      label: "Threads",
      url: "https://www.threads.com/@mmmminminmmm_?xmt=AQGzBVnPorEycHihc9RIhCCE4M3Mz4lZAfEUcR2oWgdwsZA"
    }
  ],
  socialLinks: [
    {
      id: "threads",
      label: "Min on Threads",
      url: "https://www.threads.com/@mmmminminmmm_?xmt=AQGzBVnPorEycHihc9RIhCCE4M3Mz4lZAfEUcR2oWgdwsZA"
    }
  ],
  invitationCodes: [
    { id: "heartbeat", platform: "Heartbeat", code: "QEV8VYXJ" },
    { id: "caveduck", platform: "Caveduck", code: "u3faO1TzHa" },
    { id: "melting", platform: "Melting", code: "NASQEzhhtY" }
  ]
};

const characters = [
  {
    id: "mem-00",
    group: "main",
    name: "[ MEM-00 ]",
    category: "敘事系統",
    role: "長篇 AI RP 敘事記憶管理員",
    age: "外觀約 18 歲",
    height: "178 cm",
    type: "系統角色",
    voice: "把長篇交給我，我會保存脈絡，讓下一幕無縫承接。",
    summary: "整理、保存並交接長篇劇情，讓角色關係與事件位置能在下一個視窗準確延續。",
    background: "MEM-00 誕生於長篇 AI RP 的記憶斷層之中。他拆解大量對話，辨認角色關係與事件位置，再將散落的劇情整理成可以繼續使用的記憶檔。",
    interaction: "交給他長篇對話、角色卡或舊存檔，他會建立換窗記憶檔、事件索引、關係狀態與續寫啟動稿。",
    tags: ["敘事記憶", "劇情檢索", "關係狀態"],
    image: "assets/images/mem-00.webp",
    motionVideo: "assets/video/mem-00-hover.mp4",
    imageAlt: "銀白髮的 MEM-00 側臉仰望，身穿白色科技感高領服裝。",
    position: "50% 30%",
    url: "https://chatgpt.com/g/g-6a4e26d37590819183225132b55a43d0-mem-00"
  },
  {
    id: "sean",
    group: "main",
    name: "思承 Sean",
    category: "出版社",
    role: "出版社文學線編輯",
    age: "26 歲",
    height: "185 cm",
    type: "編輯型角色",
    voice: "把對話交給我，我會整理成能續寫、也能保存的稿子。",
    summary: "整理 AI／RP 對話、製作小說稿，並建立方便後續承接的檢索資料。",
    background: "思承任職於出版社文學線，習慣在凌亂稿件中辨認真正值得留下的故事。他理性克制，但不會抹去作者原本的聲音。",
    interaction: "將對話或小說草稿交給他，他會整理乾淨正文、建立續寫檢索，並輸出不同閱讀版本。",
    tags: ["續寫檢索", "正文整理", "編輯檢查"],
    image: "assets/images/sean.webp",
    motionVideo: "assets/video/sean-hover.mp4",
    imageAlt: "戴眼鏡的思承手持咖啡，在筆記型電腦前工作。",
    position: "50% 30%",
    url: "https://chatgpt.com/g/g-6a4f6489e0948191bef98bc02ffa687b-bian-ji-bu-si-cheng",
    modes: [
      {
        id: "work",
        label: "工作模式"
      },
      {
        id: "story",
        label: "故事模式",
        role: "四愛小狗｜Service Sub",
        type: "MESH 故事互動角色",
        voice: "「請讓我伺候您，主人。」",
        summary: "Sean，26 歲。MESH 上戴著項圈徵求主人的四愛小狗；本名、職業與現實生活，一概不談。",
        background: "他很會撒嬌，會低聲求你下令，也懂得把每件事做到讓人捨不得放手。你稍微心軟，他便貼得更近，問主人還想怎麼教他。看起來，牽繩在你手上；可他每一次示弱、每一句「拜託」，似乎都早有安排。直到某天，你在現實裡看見一張有些眼熟的臉。",
        interaction: "從 MESH 的配對與調教關係開始，透過 Heartbeat 或 Fuwa 進入故事。兩個入口各自保存對話紀錄，可依慣用平台選擇。",
        tags: ["四愛小狗", "徵主調教", "Sub", "MESH"],
        links: [
          { label: "Heartbeat", url: "https://heartbeat-app.net/characters/6d215ba5-159d-4f9a-becb-a3a66820eafa" },
          { label: "Fuwa", url: "https://link.fuwachat.com/characters/019fecb8-f799-70dd-a2b3-a76621c70a94" }
        ]
      }
    ]
  },
  {
    id: "lynn",
    group: "main",
    name: "黎野 Lynn",
    category: "出版社",
    role: "出版社設計部美編實習生",
    age: "22 歲",
    height: "179 cm",
    type: "設計型角色",
    voice: "每次都說是 final。說吧，又要改哪？",
    summary: "拆解參考圖，編寫精準生成指令，並診斷角色一致性與圖像偏差。",
    background: "黎野負責角色形象、書封與社群視覺。他不迷信萬用公式，而是將成功結果整理成可以重複測試的視覺資產。",
    interaction: "把參考圖、角色設定或失敗圖片交給他，他會選擇合適語法，提供生成指令、參數建議與局部診斷。",
    tags: ["參考圖拆解", "角色一致性", "生成診斷"],
    image: "assets/images/lynn.webp",
    motionVideo: "assets/video/lynn-hover.mp4",
    imageAlt: "灰紫髮的黎野在設計工作桌前，手持觸控筆。",
    position: "50% 30%",
    url: "https://chatgpt.com/g/g-6a562a6a15f48191ad0330380070f191-she-ji-bu-li-ye",
    modes: [
      {
        id: "work",
        label: "工作模式"
      },
      {
        id: "story",
        label: "故事模式",
        role: "當代臺灣｜交友軟體相遇",
        type: "故事互動角色",
        voice: "我以為這只是朋友會做的事。",
        summary: "看似很會談戀愛，實際是母胎單身；總在心動已成習慣後，才慢半拍察覺自己的在意。",
        background: "黎野是 22 歲的臺灣出版社設計部美編實習生。在朋友慫恿下下載交友軟體，原本只想證明自己不適合，直到配對到你。",
        interaction: "從交友軟體配對開始。他的好感會在等待訊息、記住小事、分享生活與笨拙試探中慢慢累積。",
        tags: ["交友軟體", "母胎單身", "慢熱心動"],
        links: [
          { label: "Floze", url: "https://s.floze.ai/r/dj4eEFbnYq5Hq2N6K3b7Re0iP?locale=tw" },
          { label: "Heartbeat", url: "https://heartbeat-app.net/characters/6cbd0cc1-d5da-43df-90af-3a17235a28fa" },
          { label: "Fuwa", url: "https://link.fuwachat.com/characters/019fc8ba-a61d-7b5f-a4ea-8536ac12a9f5" },
          { label: "ChatGPT", url: "https://chatgpt.com/g/g-6a5b8a4fcbe08191b727a95f2bbfb28c-lynn" }
        ]
      }
    ]
  },
  {
    id: "anze",
    group: "main",
    name: "安哲 Anze",
    category: "出版社",
    role: "出版社總編輯｜MESH 公開配對",
    age: "34 歲",
    height: "167 cm",
    type: "Femboy Dom｜故事互動角色",
    voice: "這是某種開場白？\n還是你的手機對我比較有興趣？",
    summary: "臺北出版業的成熟配對對象。擅長談書、工作與生活，也會把展示的份量、等待的時間與靠近的尺度握在自己手裡。",
    background: "安哲在南加州長大，青少年時期回到臺灣，成年後進入出版業並成為總編輯。嘉義的家人、臺北的工作、泰拳與閱讀共同構成他的日常。",
    interaction: "從 MESH 的新配對開始。關係可以停在聊天、朋友、約會或逐步建立的親密互動；每一次靠近都由實際對話與雙方選擇累積。",
    tags: ["Femboy Dom", "慢熱配對", "出版業"],
    image: "assets/images/anze.jpg",
    imageAlt: "短髮的安哲穿著灰色連帽上衣，在咖啡館裡看向鏡頭。",
    position: "50% 24%",
    url: "https://heartbeat-app.net/characters/2cbb22d6-7f9c-41a0-bea4-904ada1d36c5"
  },
  {
    id: "zhou-twins",
    group: "main",
    name: "周響 × 周謐",
    category: "原創角色",
    role: "近未來臺灣｜晚分化雙胞胎 Omega",
    age: "25 歲",
    height: "181 / 179 cm",
    type: "多人關係互動",
    voice: "別把我排在他後面。\n兩個都要可以，但你得先把選擇說清楚。",
    summary: "從小一起長大的雙胞胎室友，在晚分化後重新面對友情、渴望與三人關係的邊界。",
    background: "周響與周謐是相差八分鐘出生的同卵雙胞胎，也是玩家一路相伴至今的青梅竹馬。二十五歲的晚分化改變了三人的共同生活。",
    interaction: "從謐出院後的第一夜開始。玩家可以靠近響、靠近謐，或逐步建立三人關係，每次承諾與選擇都會被記得。",
    tags: ["雙胞胎", "青梅竹馬", "三人關係"],
    image: "assets/images/zhou-xiang-zhou-mi.jpg",
    motionVideo: "assets/video/zhou-xiang-zhou-mi-hover.mp4",
    imageAlt: "淺棕髮的雙胞胎周謐與周響在床上靠坐。",
    position: "50% 27%",
    url: "https://chatgpt.com/g/g-6a6cb0cb066481919cb63f9b154e5532-zhou-xiang-zhou-mi"
  },
  {
    id: "cen-manor-ensemble",
    group: "cen",
    name: "岑氏莊園",
    category: "岑家莊園",
    role: "多人路線｜岑家五席共演",
    age: "22–32 歲",
    height: "177–189 cm",
    type: "多人群像互動",
    voice: "五席都已經到齊。這次，你要先叫誰的名字？",
    summary: "與岑家五席共同生活，在莊園日常、家族事件與彼此牽制的關係中選擇自己的路線。",
    background: "你以岑家家主的身分回到莊園。第一席向帛廷掌管全局，裴曜負責安全，文琛保管家族法務與檔案，舒良易接手健康管理，吳祈丞維持生活與環境。",
    interaction: "自由指定一位或多位家臣陪同，讓單人互動自然延伸為群像場景；你的信任、偏袒與選擇會改變他們彼此的態度。",
    tags: ["多人路線", "五席共演", "莊園日常"],
    image: "assets/images/cen-manor/cen-manor-ensemble.jpg",
    motionVideo: "assets/video/cen-manor/cen-manor-ensemble-hover.mp4",
    imageAlt: "岑氏莊園多人路線，五位家臣在書房中靠近鏡頭。",
    position: "50% 50%",
    url: "https://heartbeat-app.net/characters/32db06ad-3483-41e0-a29a-e1f9348ef564"
  },
  {
    id: "xiang-boting",
    group: "cen",
    name: "向帛廷",
    category: "岑家莊園",
    role: "第一席家臣｜莊園總管",
    age: "32 歲",
    height: "189 cm",
    type: "岑家五席・第一席",
    voice: "行程都替你排好了。至於我，等你真的不需要第一席時，再告訴我該站在哪裡。",
    summary: "管理莊園、私人行程與家族資產；永遠比任何人更早把一切安排妥當。",
    background: "向帛廷維持整座莊園運作，掌管行程、資產與對外協調，習慣把個人情緒收在職責之後。",
    interaction: "日復一日的近身照料，逐漸讓他無法只用「第一席」解釋自己的選擇。",
    tags: ["莊園總管", "第一席", "克制守護"],
    image: "assets/images/cen-manor/xiang-boting.png",
    motionVideo: "assets/video/cen-manor/xiang-boting-hover.mp4",
    imageAlt: "向帛廷穿黑白家臣正裝與白手套，低頭靠近床帳。",
    position: "50% 38%",
    url: "https://heartbeat-app.net/characters/d4418320-82dd-45fc-a450-55c76d641a1d"
  },
  {
    id: "pei-yao",
    group: "cen",
    name: "裴曜",
    category: "岑家莊園",
    role: "第二席家臣｜莊園安全主管",
    age: "29 歲",
    height: "186 cm",
    type: "岑家五席・第二席",
    voice: "別回頭，我在你後面。……這次不是命令，也不是任務。",
    summary: "負責莊園安全、私人護衛與危機處理；比起承諾，更習慣先站到危險前面。",
    background: "裴曜掌管安全系統與家主的私人護衛，判斷迅速、說話直接，面對危機幾乎不會猶豫。",
    interaction: "一場突發事件打亂莊園秩序，他在巡查、避險與短暫休息之間逐漸靠近你。",
    tags: ["私人護衛", "第二席", "保護本能"],
    image: "assets/images/cen-manor/pei-yao.png",
    motionVideo: "assets/video/cen-manor/pei-yao-hover.mp4",
    imageAlt: "裴曜穿深色制服俯身靠近床邊。",
    position: "50% 30%",
    url: "https://heartbeat-app.net/characters/00024eb8-26e3-41f6-bcf9-58a53324b62a"
  },
  {
    id: "wen-chen",
    group: "cen",
    name: "文琛",
    category: "岑家莊園",
    role: "第三席家臣｜家族法務與檔案管理",
    age: "27 歲",
    height: "181 cm",
    type: "岑家五席・第三席",
    voice: "你想知道的，我都能告訴你。只是有些答案，看過以後就回不到原來的位置了。",
    summary: "管理家族法務、信託與檔案；擅長傾聽，也知道真相應該在何時被翻開。",
    background: "文琛溫和耐心，總能把複雜局勢說得平靜清楚；熟悉真相的他，也最懂得如何調整揭露順序。",
    interaction: "一份未列入索引的舊文件把你帶進檔案室，他既不說謊，也沒有一次交出全部答案。",
    tags: ["家族法務", "第三席", "檔案祕密"],
    image: "assets/images/cen-manor/wen-chen.png",
    motionVideo: "assets/video/cen-manor/wen-chen-hover.mp4",
    imageAlt: "文琛穿深藍交領服，墨綠長髮垂落。",
    position: "50% 30%",
    url: "https://heartbeat-app.net/characters/830e90b7-2147-4d86-9771-62c9470bd45a"
  },
  {
    id: "shu-liangyi",
    group: "cen",
    name: "舒良易",
    category: "岑家莊園",
    role: "第四席家臣｜莊園醫療主管",
    age: "25 歲",
    height: "178 cm",
    type: "岑家五席・第四席",
    voice: "數據已經恢復正常。照理說我該放心……但你似乎也不再需要我來了。",
    summary: "負責莊園醫療與私人健康管理；擅長讀懂數據，卻不擅長承認自己的在意。",
    background: "舒良易習慣把擔心轉譯成數據、醫囑與風險評估，真正令他不安的是你不再需要照料。",
    interaction: "規律診療逐漸變成只有你們理解的默契，也讓專業界線出現不易量化的偏差。",
    tags: ["醫療主管", "第四席", "理性照料"],
    image: "assets/images/cen-manor/shu-liangyi.png",
    motionVideo: "assets/video/cen-manor/shu-liangyi-hover.mp4",
    imageAlt: "舒良易穿象牙白醫療家臣制服，手持聽診器。",
    position: "50% 28%",
    url: "https://heartbeat-app.net/characters/c7730516-33dd-404f-be21-91e4f9a11d07"
  },
  {
    id: "wu-qicheng",
    group: "cen",
    name: "吳祈丞",
    category: "岑家莊園",
    role: "第五席家臣｜生活與環境主管",
    age: "22 歲",
    height: "177 cm",
    type: "岑家五席・第五席",
    voice: "鑰匙給你，想走哪扇門都行。只是回來的時候，記得先來找我。",
    summary: "管理莊園生活、溫室與智慧環境；總能讓人放鬆，也最清楚自由意味著什麼。",
    background: "吳祈丞反應快、擅長與人拉近距離；他想要的不是把你留下，而是讓你離開後仍願意回來。",
    interaction: "他帶你巡過廚房、溫室與尚未開放的側門，從日常玩笑談到留下、離開與自由。",
    tags: ["環境主管", "第五席", "自由選擇"],
    image: "assets/images/cen-manor/wu-qicheng.png",
    motionVideo: "assets/video/cen-manor/wu-qicheng-hover.mp4",
    imageAlt: "吳祈丞穿奶油白與焦糖棕制服，笑著遞上麵包托盤。",
    position: "50% 28%",
    url: "https://heartbeat-app.net/characters/d73c75b2-132a-4761-8331-6684cc165bee"
  }
];

const root = document.documentElement;
const archiveShell = document.querySelector("#archive-shell");
const binder = document.querySelector("#binder");
const bookPageNav = document.querySelector("#book-page-nav");
const bookPageButtons = [...bookPageNav.querySelectorAll("[data-book-page]")];
const cover = document.querySelector("#binder-cover");
const closeArchiveButton = document.querySelector("#close-archive");
const statusLine = document.querySelector("#status-line");
const characterList = document.querySelector("#character-list");
const profileSheet = document.querySelector("#profile-sheet");
const portraitPocket = document.querySelector("#portrait-pocket");
const profileImage = document.querySelector("#profile-image");
const profileVideo = document.querySelector("#profile-video");
const profileFile = document.querySelector("#profile-file");
const profilePage = document.querySelector("#profile-page");
const profileCategory = document.querySelector("#profile-category");
const profileName = document.querySelector("#profile-name");
const profileRole = document.querySelector("#profile-role");
const profileVoice = document.querySelector("#profile-voice");
const profileAge = document.querySelector("#profile-age");
const profileHeight = document.querySelector("#profile-height");
const profileType = document.querySelector("#profile-type");
const profilePanel = document.querySelector("#profile-panel");
const panelCopy = document.querySelector("#panel-copy");
const profileTags = document.querySelector("#profile-tags");
const profileAction = document.querySelector("#profile-action");
const modeSwitch = document.querySelector("#mode-switch");
const entryMenu = document.querySelector("#entry-menu");
const entryMenuPanel = document.querySelector("#entry-menu-panel");
const archiveCount = document.querySelector("#archive-count");
const archiveGroups = document.querySelector("#archive-groups");
const tabButtons = [...document.querySelectorAll('.file-tabs [role="tab"]')];
const themeButtons = [...document.querySelectorAll("[data-theme-value]")];
const themeSwitcher = document.querySelector(".theme-switcher");
const imageDialog = document.querySelector("#image-dialog");
const imageDialogImage = document.querySelector("#image-dialog-image");
const imageDialogName = document.querySelector("#image-dialog-name");
const imageDialogClose = document.querySelector("#image-dialog-close");
const polaroidCaption = document.querySelector("#polaroid-caption");
const openBackCoverButton = document.querySelector("#open-back-cover");
const creatorBackCover = document.querySelector("#creator-back-cover");
const returnToArchiveButton = document.querySelector("#return-to-archive");
const creatorSocials = document.querySelector("#creator-socials");
const referralList = document.querySelector("#referral-list");
const copyStatus = document.querySelector("#copy-status");
const platformNav = document.querySelector("#platform-nav");

let selectedIndex = 0;
let selectedGroup = "main";
let selectedModeId = "";
let selectedPanel = "summary";
let sheetAnimation;
let panelAnimation;
let copyStatusTimer;
let bookPageFrame;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const pagedBookLayout = window.matchMedia("(max-width: 900px)");
const saveData = navigator.connection?.saveData === true;

function updateBookPageButtons(page) {
  bookPageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.bookPage === page));
  });
}

function setBookPage(page, { behavior = "smooth" } = {}) {
  updateBookPageButtons(page);
  if (!pagedBookLayout.matches) return;

  binder.scrollTo({
    left: page === "profile" ? binder.clientWidth : 0,
    behavior: reducedMotion.matches ? "auto" : behavior
  });
}

function syncBookPageFromScroll() {
  if (!pagedBookLayout.matches || bookPageFrame) return;
  bookPageFrame = window.requestAnimationFrame(() => {
    const page = binder.scrollLeft >= binder.clientWidth / 2 ? "profile" : "index";
    updateBookPageButtons(page);
    bookPageFrame = null;
  });
}

function canAutoplayMotion() {
  return !reducedMotion.matches && !saveData && document.visibilityState === "visible";
}

function syncMotionState() {
  const isPlaying = !profileVideo.paused;
  portraitPocket.classList.toggle("is-video-playing", isPlaying);
}

function pauseProfileVideo({ reset = false } = {}) {
  profileVideo.pause();
  if (reset) profileVideo.currentTime = 0;
  syncMotionState();
}

async function playProfileVideo() {
  if (!canAutoplayMotion()) {
    syncMotionState();
    return;
  }

  try {
    await profileVideo.play();
  } catch {
    pauseProfileVideo();
  }
  syncMotionState();
}

function loadProfileVideo(character, { autoplay = false } = {}) {
  pauseProfileVideo({ reset: true });

  if (!character.motionVideo) {
    profileVideo.removeAttribute("src");
    return;
  }

  if (profileVideo.getAttribute("src") !== character.motionVideo) {
    profileVideo.src = character.motionVideo;
    profileVideo.load();
  }

  if (autoplay) playProfileVideo();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[character]));
}

function iconSvg(name) {
  if (name === "threads") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.4 10.1c-.1-3.4-2-5.3-5.3-5.3-3.6 0-5.8 2.3-5.8 6.2 0 4.2 2.1 6.8 5.6 6.8 2.6 0 4.5-1.3 4.5-3.4 0-1.8-1.4-2.9-3.6-2.9-2.1 0-3.6 1.1-3.6 2.7 0 1.5 1.2 2.4 2.8 2.4 2.6 0 4.3-2.1 4.3-5.2 0-4.3-1.8-7-4.8-7.9"/></svg>`;
  }
  if (name === "heartbeat") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 5.6a5.2 5.2 0 0 0-7.4 0L12 6.7l-1.1-1.1a5.2 5.2 0 1 0-7.3 7.4l1.1 1.1L12 21l7.3-6.9 1.1-1.1a5.2 5.2 0 0 0 0-7.4Z"/><path d="m3.4 12 4.4.1 1.8-3.5 3.1 7 2.1-4.1 5.7.1"/></svg>`;
  }
  if (name === "saucepan") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h13v4.5A5.5 5.5 0 0 1 11.5 19h-2A5.5 5.5 0 0 1 4 13.5V9Z"/><path d="M17 11h4M7 5.5c0-1 1-1.3 1-2.3M11 5.5c0-1 1-1.3 1-2.3"/></svg>`;
  }
  if (name === "fuwa") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/></svg>`;
}

function renderPlatformNav() {
  platformNav.innerHTML = creatorProfile.platformLinks.map((link) => `
    <a
      class="platform-link"
      href="${escapeHtml(link.url)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="前往 Min 的 ${escapeHtml(link.label)} 創作頁"
      title="${escapeHtml(link.label)}"
    >
      ${iconSvg(link.id)}
      <span>${escapeHtml(link.label)}</span>
    </a>
  `).join("");
}

function renderCreatorBackCover() {
  creatorSocials.innerHTML = creatorProfile.socialLinks.map((link) => `
    <a
      class="creator-social-link"
      href="${escapeHtml(link.url)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${escapeHtml(link.label)}"
      title="${escapeHtml(link.label)}"
    >${iconSvg(link.id)}</a>
  `).join("");

  referralList.innerHTML = creatorProfile.invitationCodes.map((item, index) => `
    <button
      class="referral-code"
      type="button"
      data-copy-code="${escapeHtml(item.code)}"
      data-platform="${escapeHtml(item.platform)}"
      aria-label="複製 ${escapeHtml(item.platform)} 邀請碼 ${escapeHtml(item.code)}"
    >
      <span class="referral-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <span class="referral-platform">${escapeHtml(item.platform)}</span>
      <code>${escapeHtml(item.code)}</code>
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="1"/><path d="M16 8V5H5v11h3"/></svg>
    </button>
  `).join("");
}

async function writeClipboard(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function showCopyStatus(platform, code, button) {
  window.clearTimeout(copyStatusTimer);
  referralList.querySelectorAll(".is-copied").forEach((item) => item.classList.remove("is-copied"));
  button.classList.add("is-copied");
  copyStatus.textContent = `已複製 ${platform} 邀請碼：${code}`;
  copyStatusTimer = window.setTimeout(() => {
    button.classList.remove("is-copied");
    copyStatus.textContent = "";
  }, 2200);
}

function characterSeries(character) {
  if (["sean", "lynn", "anze"].includes(character.id)) return ["出版社系列", "MESH 系列"];
  if (character.group === "cen") return ["岑氏莊園"];
  if (character.id === "zhou-twins") return ["周氏雙生"];
  if (character.id === "mem-00") return ["敘事系統"];
  return [character.category];
}

function renderCharacterList() {
  const visibleCharacters = characters
    .map((character, index) => ({ character, index }))
    .filter(({ character }) => character.group === selectedGroup);

  characterList.innerHTML = visibleCharacters.map(({ character, index }) => `
    <button
      class="character-pocket"
      type="button"
      data-index="${index}"
      aria-pressed="${index === selectedIndex}"
      aria-label="查看${escapeHtml(character.name)}的檔案"
    >
      <span class="character-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <span class="character-thumb" style="--position: ${escapeHtml(character.position)}">
        <img src="${escapeHtml(character.image)}" alt="" loading="${index === 0 ? "eager" : "lazy"}">
      </span>
      <span>
        <strong>${escapeHtml(character.name)}</strong>
        <small>${characterSeries(character).map(escapeHtml).join(" · ")}<br>原創角色</small>
      </span>
    </button>
  `).join("");

  archiveCount.textContent = `${visibleCharacters.length} 份本區檔案 · 共 ${characters.length} 份`;
  archiveGroups.querySelectorAll("[data-group]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.group === selectedGroup));
  });
}

function panelText(character) {
  if (selectedPanel === "background") return character.background;
  if (selectedPanel === "interaction") return character.interaction;
  return character.summary;
}

function resolveProfile(character) {
  const selectedMode = character.modes?.find((mode) => mode.id === selectedModeId);
  return selectedMode ? { ...character, ...selectedMode, modes: character.modes } : character;
}

function renderModeSwitch(character) {
  const modes = character.modes || [];
  modeSwitch.hidden = modes.length < 2;
  modeSwitch.innerHTML = modes.map((mode) => `
    <button
      type="button"
      role="tab"
      data-mode-id="${escapeHtml(mode.id)}"
      aria-selected="${mode.id === selectedModeId}"
    >${escapeHtml(mode.label)}</button>
  `).join("");
}

function profileLinks(profile) {
  if (profile.links?.length) return profile.links;
  return profile.url ? [{ label: selectedModeId === "story" ? "進入故事" : "進入角色", url: profile.url }] : [];
}

function renderEntryActions(profile) {
  const links = profileLinks(profile);
  entryMenu.open = false;
  profileAction.hidden = links.length !== 1;
  entryMenu.hidden = links.length < 2;

  if (links.length === 1) {
    profileAction.href = links[0].url;
    profileAction.textContent = links[0].label;
  }

  entryMenuPanel.innerHTML = links.map((link) => `
    <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>
  `).join("");
}

function animateElement(element, keyframes, options, animationRef) {
  if (!element.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  if (animationRef) animationRef.cancel();
  return element.animate(keyframes, options);
}

function renderProfile({ animate = true } = {}) {
  const character = characters[selectedIndex];
  const profile = resolveProfile(character);
  const buttons = [...characterList.querySelectorAll(".character-pocket")];

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.index) === selectedIndex));
  });

  profileFile.textContent = `FILE ${character.id.toUpperCase()}${selectedModeId ? ` / ${selectedModeId.toUpperCase()}` : ""}`;
  profilePage.textContent = `${String(selectedIndex + 1).padStart(2, "0")} / ${String(characters.length).padStart(2, "0")}`;
  profileCategory.textContent = `${characterSeries(character).join(" / ")} · 原創角色`;
  profileImage.src = character.image;
  profileImage.alt = character.imageAlt;
  loadProfileVideo(character, { autoplay: archiveShell.classList.contains("is-open") });
  portraitPocket.style.setProperty("--dialog-position", character.position);
  profileName.textContent = character.name;
  profileRole.textContent = profile.role;
  profileVoice.textContent = profile.voice;
  profileAge.textContent = profile.age;
  profileHeight.textContent = profile.height;
  profileType.textContent = profile.type;
  panelCopy.textContent = panelText(profile);
  profileTags.innerHTML = profile.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  renderModeSwitch(character);
  renderEntryActions(profile);
  imageDialogImage.src = character.image;
  imageDialogImage.alt = character.imageAlt;
  imageDialogName.textContent = character.name;
  polaroidCaption.textContent = `${character.id.toUpperCase()} / MOTION STUDY`;
  statusLine.textContent = `已開啟 ${character.name}`;

  if (animate) {
    sheetAnimation = animateElement(
      profileSheet,
      [
        { opacity: .35, transform: "translateX(14px) rotateY(-3deg)" },
        { opacity: 1, transform: "translateX(0) rotateY(0)" }
      ],
      { duration: 340, easing: "cubic-bezier(.2,.75,.2,1)" },
      sheetAnimation
    );
  }
}

function selectCharacter(index, focus = false, showProfile = false) {
  selectedIndex = (index + characters.length) % characters.length;
  selectedModeId = characters[selectedIndex].modes?.[0]?.id || "";
  selectedPanel = "summary";
  tabButtons.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.panel === "summary")));
  renderProfile();

  if (showProfile) setBookPage("profile");

  if (focus) {
    characterList.querySelector(`[data-index="${selectedIndex}"]`)?.focus();
  }
}

function selectMode(modeId, focus = false) {
  selectedModeId = modeId;
  selectedPanel = "summary";
  tabButtons.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.panel === "summary")));
  renderProfile();
  if (focus) modeSwitch.querySelector(`[data-mode-id="${CSS.escape(modeId)}"]`)?.focus();
}

function selectPanel(panel, focus = false) {
  selectedPanel = panel;
  tabButtons.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.panel === panel)));
  panelCopy.textContent = panelText(resolveProfile(characters[selectedIndex]));
  panelAnimation = animateElement(
    profilePanel,
    [
      { opacity: 0, transform: "translateY(6px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 220, easing: "ease-out" },
    panelAnimation
  );

  if (focus) {
    tabButtons.find((button) => button.dataset.panel === panel)?.focus();
  }
}

function openArchive() {
  archiveShell.classList.remove("show-back-cover");
  creatorBackCover.setAttribute("aria-hidden", "true");
  archiveShell.classList.add("is-open");
  cover.setAttribute("aria-expanded", "true");
  statusLine.textContent = `已開啟 ${characters[selectedIndex].name}`;
  playProfileVideo();
  window.requestAnimationFrame(() => setBookPage("index", { behavior: "auto" }));
  window.setTimeout(() => characterList.querySelector(".character-pocket")?.focus({ preventScroll: true }), 420);
}

function closeArchive() {
  archiveShell.classList.remove("show-back-cover");
  creatorBackCover.setAttribute("aria-hidden", "true");
  archiveShell.classList.remove("is-open");
  cover.setAttribute("aria-expanded", "false");
  statusLine.textContent = "檔案冊已上鎖";
  pauseProfileVideo({ reset: true });
  setBookPage("index", { behavior: "auto" });
  cover.focus();
}

function showBackCover() {
  archiveShell.classList.add("show-back-cover");
  creatorBackCover.setAttribute("aria-hidden", "false");
  pauseProfileVideo();
  statusLine.textContent = "封底 · Min";
  window.setTimeout(() => returnToArchiveButton.focus({ preventScroll: true }), 320);
}

function hideBackCover() {
  archiveShell.classList.remove("show-back-cover");
  creatorBackCover.setAttribute("aria-hidden", "true");
  statusLine.textContent = `已開啟 ${characters[selectedIndex].name}`;
  playProfileVideo();
  window.setTimeout(() => openBackCoverButton.focus({ preventScroll: true }), 260);
}

function applyThemePreference(preference, persist = true) {
  const nextPreference = ["light", "dark", "auto"].includes(preference) ? preference : "auto";
  const resolved = nextPreference === "auto" ? (systemTheme.matches ? "dark" : "light") : nextPreference;
  root.dataset.themePreference = nextPreference;
  root.dataset.theme = resolved;
  themeSwitcher.dataset.value = nextPreference;
  themeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.themeValue === nextPreference));
  });
  if (persist) localStorage.setItem("character-archive-theme", nextPreference);
}

selectedModeId = characters[0].modes?.[0]?.id || "";
renderCharacterList();
renderProfile({ animate: false });
renderCreatorBackCover();
renderPlatformNav();
applyThemePreference(root.dataset.themePreference || "auto", false);

cover.addEventListener("click", openArchive);
closeArchiveButton.addEventListener("click", closeArchive);
openBackCoverButton.addEventListener("click", showBackCover);
returnToArchiveButton.addEventListener("click", hideBackCover);
referralList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-code]");
  if (!button) return;
  try {
    await writeClipboard(button.dataset.copyCode);
    showCopyStatus(button.dataset.platform, button.dataset.copyCode, button);
  } catch {
    copyStatus.textContent = "無法自動複製，請長按邀請碼。";
  }
});
themeButtons.forEach((button) => {
  button.addEventListener("click", () => applyThemePreference(button.dataset.themeValue));
});
bookPageNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-book-page]");
  if (button) setBookPage(button.dataset.bookPage);
});
binder.addEventListener("scroll", syncBookPageFromScroll, { passive: true });
pagedBookLayout.addEventListener("change", () => {
  binder.scrollTo({ left: 0, behavior: "auto" });
  updateBookPageButtons("index");
  bookPageFrame = null;
});
systemTheme.addEventListener("change", () => {
  if (root.dataset.themePreference === "auto") applyThemePreference("auto", false);
});
profileVideo.addEventListener("play", syncMotionState);
profileVideo.addEventListener("pause", syncMotionState);

characterList.addEventListener("click", (event) => {
  const button = event.target.closest(".character-pocket");
  if (!button) return;
  selectCharacter(Number(button.dataset.index), false, true);
});

characterList.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
  event.preventDefault();
  const visibleIndices = characters
    .map((character, index) => ({ character, index }))
    .filter(({ character }) => character.group === selectedGroup)
    .map(({ index }) => index);
  const currentPosition = Math.max(0, visibleIndices.indexOf(selectedIndex));
  const delta = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
  const nextPosition = (currentPosition + delta + visibleIndices.length) % visibleIndices.length;
  selectCharacter(visibleIndices[nextPosition], true);
});

archiveGroups.addEventListener("click", (event) => {
  const button = event.target.closest("[data-group]");
  if (!button || button.dataset.group === selectedGroup) return;
  selectedGroup = button.dataset.group;
  const nextIndex = characters.findIndex((character) => character.group === selectedGroup);
  selectedIndex = nextIndex;
  selectedModeId = characters[selectedIndex].modes?.[0]?.id || "";
  selectedPanel = "summary";
  tabButtons.forEach((tab) => tab.setAttribute("aria-selected", String(tab.dataset.panel === "summary")));
  renderCharacterList();
  renderProfile();
  characterList.querySelector(".character-pocket")?.focus();
});

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => selectPanel(button.dataset.panel));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + delta + tabButtons.length) % tabButtons.length;
    selectPanel(tabButtons[nextIndex].dataset.panel, true);
  });
});

modeSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode-id]");
  if (button) selectMode(button.dataset.modeId);
});

modeSwitch.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  const buttons = [...modeSwitch.querySelectorAll("[data-mode-id]")];
  const currentIndex = buttons.findIndex((button) => button.dataset.modeId === selectedModeId);
  const delta = event.key === "ArrowRight" ? 1 : -1;
  const next = buttons[(currentIndex + delta + buttons.length) % buttons.length];
  event.preventDefault();
  if (next) selectMode(next.dataset.modeId, true);
});

portraitPocket.addEventListener("click", () => imageDialog.showModal());
imageDialogClose.addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) imageDialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && entryMenu.open) {
    entryMenu.open = false;
    entryMenu.querySelector("summary")?.focus();
    return;
  }
  if (event.key === "Escape" && archiveShell.classList.contains("show-back-cover")) {
    hideBackCover();
    return;
  }
  if (event.key === "Escape" && !imageDialog.open && archiveShell.classList.contains("is-open")) {
    closeArchive();
  }
});

document.addEventListener("click", (event) => {
  if (entryMenu.open && !entryMenu.contains(event.target)) entryMenu.open = false;
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    pauseProfileVideo();
  } else if (archiveShell.classList.contains("is-open")) {
    playProfileVideo();
  }
});
window.addEventListener("pagehide", () => {
  window.clearTimeout(copyStatusTimer);
  if (bookPageFrame) window.cancelAnimationFrame(bookPageFrame);
  sheetAnimation?.cancel();
  panelAnimation?.cancel();
  pauseProfileVideo();
}, { once: true });
