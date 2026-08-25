const I18N = {
  en: {
    docTitle: "3D Printer Database",
    brandTitle: "Printer Database",
    brandSub: "Browse and compare 3D printer models",
    records: (n) => n + " record" + (n === 1 ? "" : "s"),
    search: "Search",
    searchPlaceholder: "Search name, brand, description...",
    technology: "Technology",
    features: "Features",
    maxPrice: "Max Price",
    reset: "Reset Filters",
    sortBy: "Sort by:",
    sortName: "Name (A-Z)",
    sortPriceAsc: "Price (Low to High)",
    sortPriceDesc: "Price (High to Low)",
    sortYear: "Year (Newest)",
    empty: "No printers match your filters.",
    buildVolume: "Build volume",
    layer: "Layer",
    speed: "Speed",
    weight: "Weight",
    viewDetails: "View details →",
    brand: "Brand",
    modalBuildVolume: "Build Volume",
    layerResolution: "Layer Resolution",
    maxSpeed: "Max Speed",
    heatedBed: "Heated Bed",
    autoBedLeveling: "Auto Bed Leveling",
    enclosure: "Enclosure",
    filamentDiameter: "Filament Diameter",
    connectivity: "Connectivity",
    year: "Year",
    country: "Country",
    yes: "Yes",
    no: "No",
    keyFeatures: "Key Features",
    na: "N/A",
    recordId: (id) => "Record #" + id,
    close: "Close",
    footer: "3D Printer Database — demo dataset",
    compareTitle: "Compare 3D Printers",
    compareSub: "Select and compare 3D printer specifications side by side",
    browsePrinters: "Browse Printers",
    comparePrinters: "Compare Printers",
    selected: (n) => n + " selected",
    selectPrintersTitle: "Select Printers to Compare",
    selectHint: "Choose up to 4 printers for side-by-side comparison",
    searchPrintersPlaceholder: "Search printers...",
    noPrintersSelected: "No printers selected yet",
    selectAtLeastTwo: "Select at least 2 printers to start comparing",
    specification: "Specification",
    add: "Add",
    remove: "Remove",
    price: "Price",
    description: "Description",
    reportText: "Did you find any incorrect information? Please report it!",
    compareFooter: "3D Printer Database — Comparison Tool",
    aboutTitle: "About This Site",
    aboutSub: "A practical reference for exploring 3D printers",
    aboutNav: "About This Site",
    aboutIntroTitle: "What This Site Is",
    aboutIntro: "This site is a searchable reference for comparing 3D printers across technologies, manufacturers, and generations.",
    aboutNotice: "This site was created using AI. If any information is incorrect or if a model is missing, please feel free to send an email to report@example.com to let us know!",
    aboutDatabaseTitle: "About the Database",
    aboutDatabase: "Each entry includes core specifications such as build volume, layer resolution, print speed, price, connectivity, and notable features.",
    aboutCompareTitle: "Compare Models",
    aboutCompare: "Use the comparison page to select up to four printers and review their specifications side by side.",
    aboutDataTitle: "Data Notes",
    aboutData: "Prices, availability, and specifications can change over time. Treat this database as a starting point and confirm important details with the manufacturer before purchasing.",
    aboutReportTitle: "Help Improve the Database",
    aboutReport: "If you find incorrect or outdated information, please report it using the message at the top of the page.",
    aboutBrowse: "Browse the Database",
    aboutCompareLink: "Compare Printers",
    aboutFooter: "3D Printer Database — About This Site"
  },
  ja: {
    docTitle: "3Dプリンターデータベース",
    brandTitle: "プリンターデータベース",
    brandSub: "3Dプリンターモデルを閲覧・比較",
    records: (n) => n + "件",
    search: "検索",
    searchPlaceholder: "名前・ブランド・説明で検索...",
    technology: "造形方式",
    features: "機能・特長",
    maxPrice: "価格の上限",
    reset: "フィルターをリセット",
    sortBy: "並び順:",
    sortName: "名前（昇順）",
    sortPriceAsc: "価格（安い順）",
    sortPriceDesc: "価格（高い順）",
    sortYear: "年（新しい順）",
    empty: "条件に一致するプリンターがありません。",
    buildVolume: "造形サイズ",
    layer: "積層厚",
    speed: "速度",
    weight: "重量",
    viewDetails: "詳細を見る →",
    brand: "ブランド",
    modalBuildVolume: "造形サイズ",
    layerResolution: "積層ピッチ",
    maxSpeed: "最大速度",
    heatedBed: "ヒートベッド",
    autoBedLeveling: "自動ベッドレベリング",
    enclosure: "エンクロージャー",
    filamentDiameter: "フィラメント径",
    connectivity: "接続方法",
    year: "年",
    country: "製造国",
    yes: "はい",
    no: "いいえ",
    keyFeatures: "主な特長",
    na: "なし",
    recordId: (id) => "No. " + id,
    close: "閉じる",
    footer: "3Dプリンターデータベース — デモデータセット",
    compareTitle: "3Dプリンター比較",
    compareSub: "3Dプリンターのスペックを並べて比較",
    browsePrinters: "プリンターを閲覧",
    comparePrinters: "プリンターを比較",
    selected: (n) => n + "件選択",
    selectPrintersTitle: "比較するプリンターを選択",
    selectHint: "最大4台まで選択して並べて比較できます",
    searchPrintersPlaceholder: "プリンターを検索...",
    noPrintersSelected: "まだプリンターが選択されていません",
    selectAtLeastTwo: "比較を開始するには2台以上選択してください",
    specification: "項目",
    add: "追加",
    remove: "削除",
    price: "価格",
    description: "説明",
    reportText: "情報に誤りを見つけましたか？ぜひご報告ください！",
    compareFooter: "3Dプリンターデータベース — 比較ツール",
    aboutTitle: "このサイトについて",
    aboutSub: "3Dプリンターを調べて比較するための実用的なデータベース",
    aboutNav: "このサイトについて",
    aboutIntroTitle: "このサイトについて",
    aboutIntro: "このサイトは、造形方式、メーカー、世代の異なる3Dプリンターを検索・比較できるデータベースです。",
    aboutNotice: "このサイトはAIを使って作成されています。情報に誤りがある場合やモデルが不足している場合は、report@example.comまでお気軽にメールでお知らせください。",
    aboutDatabaseTitle: "データベースについて",
    aboutDatabase: "各項目には、造形サイズ、積層ピッチ、印刷速度、価格、接続方法、主な機能などの基本仕様を掲載しています。",
    aboutCompareTitle: "モデルを比較する",
    aboutCompare: "比較ページでは最大4台のプリンターを選択し、仕様を横並びで確認できます。",
    aboutDataTitle: "データに関する注意",
    aboutData: "価格、在庫状況、仕様は時間とともに変わる場合があります。購入前にはメーカーの公式情報で重要な内容を確認してください。",
    aboutReportTitle: "データベースの改善にご協力ください",
    aboutReport: "誤りや古い情報を見つけた場合は、ページ上部のメッセージからお知らせください。",
    aboutBrowse: "データベースを見る",
    aboutCompareLink: "プリンターを比較",
    aboutFooter: "3Dプリンターデータベース — このサイトについて"
  }
};

const TECH_JA = {
  "FDM": "FDM（熱溶解積層）",
  "SLA (Resin)": "SLA（レジン光造形）",
  "DLP (Resin)": "DLP（レジン光造形）",
  "SLS (Powder)": "SLS（粉末焼結）"
};

const COUNTRY_JA = {
  "China": "中国",
  "Czech Republic": "チェコ共和国",
  "Netherlands": "オランダ",
  "Open Source": "オープンソース",
  "Taiwan": "台湾",
  "USA": "アメリカ合衆国"
};

const PRINTERS_JA = {
  1: {
    description: "伝説のPrusa i3の第4世代。Nextruderと全自動ベッドレベリングを搭載し、箱出しから信頼性の高い印刷が可能。",
    features: ["Nextruderエクストルーダー", "ロードセルセンサー", "着脱式マグネットPEIシート", "入力整形（Input Shaper）"]
  },
  2: {
    description: "ライダー支援キャリブレーション、アクティブ振動補正、AMSシステムによる多色印刷を備えた高速Core-XY 3Dプリンター。",
    features: ["Core-XY機構", "マイクロライダー", "AI不良検知", "AMSマルチマテリアル"]
  },
  3: {
    description: "ダイレクトドライブエクストルーダー、CR Touchオートレベリング、剛性の高いデュアルZ軸設計を備えたお手頃なエントリーモデル。",
    features: ["スプライト・ダイレクトドライブ", "CR Touchレベリング", "デュアルZ軸", "停電復旧印刷"]
  },
  4: {
    description: "6KモノクロLCDを搭載した高解像度レジンプリンター。ミニチュアや試作の造形がくっきりと細部まで表現可能。",
    features: ["6KモノクロLCD", "大型造形サイズ", "空気清浄機能", "高速硬化レジン対応"]
  },
  5: {
    description: "スピード・精度・完全なカスタマイズ性で名高い、コミュニティ主導のオープンソースCoreXYプリンター。",
    features: ["CoreXY機構", "Klipperファームウェア", "密閉チャンバー", "セルフソースキット"]
  },
  6: {
    description: "エンジニアリング、試作、複合材フィラメントの安定した印刷に対応する、プロ仕様のデュアル押出マシン。",
    features: ["デュアル押出", "交換式プリントコア", "アクティブレベリング", "複合材対応CCコア"]
  },
  7: {
    description: "12KモノクロLCDとCOB光源を搭載し、卓越したディテールと高速硬化を実現する高速レジンプリンター。",
    features: ["12KモノクロLCD", "COB光源", "Wi-Fiファイル転送", "空気清浄機ポート"]
  },
  8: {
    description: "Klipperベースの高速な動作と内蔵カメラによる監視を備えた、すぐに印刷できる密閉型プリンター。",
    features: ["Klipperファームウェア", "内蔵カメラ", "振動補正", "自動ベッドレベリング"]
  },
  9: {
    description: "X1 Carbonの後継機。クイックスワップ式デュアルノズル、65℃のアクティブチャンバー加熱、AIカメラ監視を搭載。",
    features: ["クイックスワップ式デュアルノズル", "65℃アクティブチャンバー加熱", "PMSMサーボエクストルーダー", "AI不良検知"]
  },
  10: {
    description: "20,000 mm/s²の高加速度とデータ保護を重視したKlipperフォークを備える、手頃な価格の完全密閉CoreXY高速機。",
    features: ["20,000 mm/s² の高加速度", "Elegoo Klipperフォーク", "完全密閉筐体", "クラウドアカウント不要"]
  },
  11: {
    description: "スチール外骨格フレームと50℃チャンバーを備えたPrusa初のCoreXY機。先進フィラメントの造形も安定。",
    features: ["CoreXY機構", "50℃加熱チャンバー", "スチール外骨格フレーム", "MK4Sアップグレードパス"]
  },
  12: {
    description: "メンテナンスフリーの4色給餌システムと静音動作を備えた、初心者にやさしいマルチカラーベッドスリンガー。",
    features: ["CFS Lite 4色給餌", "クイックスワップ式ホットエンド", "プログラマブルRGBライト", "初心者にやさしいUI"]
  },
  13: {
    description: "自動レベリングとオプションのACE Proマルチカラーシステムに対応した、お手頃なCoreXYプリンター。",
    features: ["CoreXY機構", "自動ベッドレベリング", "ACE Proマルチカラー対応", "クイックスワップ式ホットエンド"]
  },
  14: {
    description: "65℃チャンバーと370℃ノズルを備えた高温エンジニアリング向けマシン。ミドルレンジの価格で提供。",
    features: ["65℃アクティブ加熱チャンバー", "370℃高温ノズル", "3段HEPAフィルター", "OrcaSlicer / PrusaSlicer対応"]
  },
  15: {
    description: "サーボロック式ツールヘッド、アクティブチャンバー加熱、レーザー彫刻オプションを備えたプロ仕様デュアルノズルプラットフォーム。",
    features: ["デュアルノズル・マルチマテリアル", "AMS HTフィラメント乾燥", "オプションの10W/40Wレーザー", "カメラガイド式レーザー位置決め"]
  },
  16: {
    description: "4つの交換式ツールヘッドを備えたオープンソースのツールチェンジャー機。無駄の少ない多色・多素材印刷を実現。",
    features: ["4つの交換式ツールヘッド", "10〜12秒で色切替", "Klipper + OrcaSlicer", "マルチマテリアルサポート材印刷"]
  },
  17: {
    description: "ヘルメットや鎧、コスプレ小道具向けの大型ベッドスリンガー。ハイフローホットエンドとオプションのACE Pro多色に対応。",
    features: ["420 x 420 mm造形ベッド", "ハイフローホットエンド", "入力整形（Input Shaping）", "ACE Proマルチカラー・アドオン"]
  },
  18: {
    description: "XY解像度18μmの9K超高解像度レジンプリンター。チルトリリース機構とAI不良検知を搭載。",
    features: ["9KモノクロLCD（XY解像度18μm）", "チルトリリース機構", "AIカメラ＆不良検知", "レジン残量検知"]
  },
  19: {
    description: "温かいレジンを循環させる加熱バットを備えた大型7Kレジンプリンター。高速かつ大量の印刷が可能。",
    features: ["7K 13.6インチモノクロLCD", "ポンプ付きレジン加熱バット", "自動レジン補充", "チルトバックUVフード"]
  },
  20: {
    description: "ホビー界に火をつけた格安プリンター。巨大なコミュニティ、豊富な交換部品、無限のアップグレード可能性。",
    features: ["Vスロットアルミフレーム", "ボーデン式エクストルーダー", "ヒートベッド", "巨大な改造コミュニティ"]
  },
  21: {
    description: "MeanWell電源、着脱式マグネットビルド面、剛性を高めたY軸を備えるEnder-3の強化版。",
    features: ["MeanWell電源ユニット", "着脱式マグネットベッド", "強化4040 Y軸", "中断再開機能"]
  },
  22: {
    description: "静音32ビット基板、カーボランダムガラスベッド、ベルトテンショナーを備えた改良版Ender-3。",
    features: ["静音32ビット基板", "カーボランダムガラスベッド", "ベルトテンショナー", "カラーLCD画面"]
  },
  23: {
    description: "300mm角ベッドと340mmの造形高を備えた大型Ender-3。大型の一体造形に対応。",
    features: ["300 x 300 mmベッド", "340mm造形高", "デュアルY軸ロッド", "停電復旧印刷"]
  },
  24: {
    description: "クラウドファンディング発のEnder後継機。ひずみゲージ式オートレベリング、タッチスクリーン、モジュラー式ケーブルレスホットエンドを搭載。",
    features: ["ひずみゲージ式オートレベリング", "モジュラー式ツールヘッド", "4.3インチタッチスクリーン", "静音32ビット基板"]
  },
  25: {
    description: "SpriteダイレクトドライブエクストルーダーとCR TouchオートレベリングをクラシックなEnder-3プラットフォームに搭載。",
    features: ["スプライト・ダイレクトドライブ", "CR Touchオートレベリング", "PCばね鋼プレート", "デュアルZ軸"]
  },
  26: {
    description: "オールメタル300℃Spriteホットエンド、PEIばね鋼シート、内蔵LEDライトを備えたEnder-3 S1。",
    features: ["オールメタル300℃ホットエンド", "PEIばね鋼シート", "内蔵LEDライト", "スプライト・ダイレクトドライブ"]
  },
  27: {
    description: "Wi-Fi監視と自動ベッドレベリングを標準装備した、クラウド接続型の大型プリンター。",
    features: ["Wi-Fiクラウド制御", "自動ベッドレベリング", "デュアルZ軸", "300 x 300 mmベッド"]
  },
  28: {
    description: "軽量ガントリーを備え、箱出し250mm/sを謳うCrealityのCoreXY高速機。",
    features: ["CoreXY機構", "最大速度250mm/s", "軽量ガントリー", "32ビット基板"]
  },
  29: {
    description: "ひずみゲージ式オートレベリングを備えた400mm立方版CR-6 SE。大型の一体造形に対応。",
    features: ["400mm立方造形サイズ", "ひずみゲージ式オートレベリング", "デュアルZ軸", "タッチスクリーン"]
  },
  30: {
    description: "Spriteダイレクトドライブ、オールメタルホットエンド、自動ベッドレベリングを搭載した大型CR-10 Smart。",
    features: ["スプライト・ダイレクトドライブ", "オールメタルホットエンド", "自動ベッドレベリング", "Wi-Fiクラウド制御"]
  },
  31: {
    description: "コンベアベルトによる無限Z軸を備えた「PrintMill」。量産や長尺パーツの連続造形に対応。",
    features: ["コンベアベルトベッド", "無限Z軸", "コンベア式一括印刷", "45度ツールヘッド"]
  },
  32: {
    description: "箱出し600mm/sを実現したCrealityのフラッグシップCoreXY。KlipperベースのCreality OSを搭載。",
    features: ["600mm/s CoreXY", "KlipperベースのCreality OS", "密閉チャンバー", "自動セルフキャリブレーション"]
  },
  33: {
    description: "カーボンファイバーや研磨材フィラメントを扱える耐摩耗スチールノズルを備えた、ワークショップ向けK1。",
    features: ["600mm/s CoreXY", "ハードニング鋼ノズル", "密閉チャンバー", "カーボンファイバー対応"]
  },
  34: {
    description: "AIカメラとライダーを搭載し、ハンズオフのキャリブレーションと自動不良検知を実現した300mm立方K1。",
    features: ["300mm立方造形サイズ", "AIカメラ + ライダー", "600mm/s CoreXY", "密閉チャンバー"]
  },
  35: {
    description: "60℃のアクティブチャンバー加熱とCFS多色システムを備えた大型350mm立方CoreXY。",
    features: ["350mm立方造形サイズ", "60℃アクティブ加熱チャンバー", "CFSマルチカラーシステム", "600mm/s CoreXY"]
  },
  36: {
    description: "リニアレールと入力整形により600mm/sを実現する、クラシックEnder-3のCoreXZ再設計版。",
    features: ["CoreXZ機構", "600mm/s の高速印刷", "リニアレール", "入力整形（Input Shaping）"]
  },
  37: {
    description: "X軸リニアレール、自動ベッドレベリング、レスポンシブなタッチインターフェースを備えた500mm/sベッドスリンガー。",
    features: ["500mm/s ベッドスリンガー", "X軸リニアレール", "自動ベッドレベリング", "タッチスクリーンUI"]
  },
  38: {
    description: "300mm角ベッドを備え、リニアレール上で600mm/sのCoreXZ駆動を実現した大型Ender-3 V3。",
    features: ["300 x 300 mmベッド", "600mm/s CoreXZ", "リニアレール", "自動ベッドレベリング"]
  },
  39: {
    description: "CFS多色印刷向けに作られたCrealityの高速オープンCoreXY。エントリー価格で提供。",
    features: ["高速CoreXY", "CFSマルチカラー対応", "500mm/s の高速印刷", "自動ベッドレベリング"]
  },
  40: {
    description: "現代のキットプリンターとオープンソース改造文化を定義した、オリジナルの自己組立式Prusa i3。",
    features: ["オリジナルi3デザイン", "ヒートベッド", "完全オープンソース", "自己組立キット"]
  },
  41: {
    description: "PINDAオートベッドレベリングとPEIコートヒートベッドをi3ラインに導入した画期的なアップグレード版。",
    features: ["PINDAオートレベリング", "PEIヒートベッド", "RAMBo mini基板", "フィラメントセンサー"]
  },
  42: {
    description: "LM8UUベアリングとY軸を改良し、より信頼性が高く再現性のある印刷を実現したブラッシュアップ版MK2。",
    features: ["改良型LM8UUベアリング", "PINDAオートレベリング", "PEIヒートベッド", "フィラメントセンサー"]
  },
  43: {
    description: "24Vシステム、着脱式マグネットPEIスチールシート、静音Trinamicドライバを備えた節目の大改修モデル。",
    features: ["着脱式マグネットPEIシート", "フィラメントセンサー", "停電保護機能", "静音ドライバ"]
  },
  44: {
    description: "IRフィラメントセンサーを刷新し、ツール不要のノズル交換を実現したメンテナンス性の高いMK3。",
    features: ["改良型フィラメントセンサー", "ノズル交換の簡素化", "着脱式PEIシート", "静音ドライバ"]
  },
  45: {
    description: "SuperPINDAプローブとミスミベアリングを搭載し、盤石の信頼性を誇るMK3の決定版。",
    features: ["SuperPINDAプローブ", "ミスミ製ベアリング", "着脱式PEIシート", "停電保護機能"]
  },
  46: {
    description: "360度冷却ファン、ゼロから作り直した入力整形、ハイフローノズルで高速化を実現した洗練版MK4。",
    features: ["Nextruder + 入力整形", "360度冷却", "標準Wi-Fi・Ethernet", "ロードセルレベリング"]
  },
  47: {
    description: "32ビットBuddy基板と鮮明なカラーディスプレイを備えた、手頃な価格のコンパクト片持ち式Prusa。",
    features: ["180mm立方造形サイズ", "片持ち式デザイン", "32ビットBuddy基板", "マグネットPEIシート"]
  },
  48: {
    description: "SuperPINDAベッドレベリングとオプションのWi-Fiモジュールを備えた完成度の高いMINI。",
    features: ["SuperPINDAオートレベリング", "着脱式PEIシート", "Ethernet・USB対応", "オプションのWi-Fiモジュール"]
  },
  49: {
    description: "大型のエンジニアリンググレード造形に向け、完全密閉チャンバーとスチールフレームを備えた大型Core One。",
    features: ["大型CoreXY造形サイズ", "密閉式加熱チャンバー", "Nextruderエクストルーダー", "スチール外骨格フレーム"]
  },
  50: {
    description: "最大5基の独立Nextruderツールヘッドを運用できるオプションのツールチェンジャーを備えた大型CoreXY。",
    features: ["360mm立方造形サイズ", "最大5つのツールヘッド", "ツールチェンジャー", "Nextruderエクストルーダー"]
  },
  51: {
    description: "2KモノクロLCD、自動チルトレベリング、スマートネットワーク硬化を備えたPrusa初のMSLAレジンプリンター。",
    features: ["5.5インチ2K LCD", "自動チルトレベリング", "スマートネットワーク硬化", "Wi-Fi・Ethernet"]
  },
  52: {
    description: "X1と同じモーションシステムを採用しつつ筐体を省略し、価格対速度を追求したBambuのエントリーCoreXY。",
    features: ["CoreXYモーションシステム", "500mm/s の高速印刷", "MicroSD・Wi-Fi印刷", "カメラ設置対応"]
  },
  53: {
    description: "カーボンフィルター付きチャンバーとガラス天板を備えた密閉型P1P。ABSなど高温フィラメントに対応。",
    features: ["密閉チャンバー", "500mm/s CoreXY", "内蔵エアフィルター", "AMS 4色対応"]
  },
  54: {
    description: "換気付きの密閉筐体と有線ネットワーク制御を備え、安全な生産用途に対応するBambuの産業向けX1。",
    features: ["産業用密閉筐体", "アクティブチャンバー加熱", "LAN・Ethernet制御", "AMS対応"]
  },
  55: {
    description: "Bambuの使いやすさとAMSの多色印刷を手頃な価格で提供する、フルサイズのベッドスリンガー。",
    features: ["フルサイズベッドスリンガー", "500mm/s の高速印刷", "AMSマルチカラー（オプション）", "クイックスワップ式ホットエンド"]
  },
  56: {
    description: "Bambuの洗練された仕上げとオプションのAMS Lite多色印刷を小さなフットプリントで実現するコンパクトベッドスリンガー。",
    features: ["コンパクトな180mm造形", "500mm/s の高速印刷", "AMS Liteマルチカラー（オプション）", "工具不要のメンテナンス"]
  },
  57: {
    description: "Klipperファームウェアと500mm/sの速度をエントリー市場にもたらした、Elegooの格安ベッドスリンガー。",
    features: ["Klipperファームウェア", "500mm/sの高速印刷", "ダイレクトドライブ・デュアルギア", "PEIマグネットベッド"]
  },
  58: {
    description: "Wi-Fiモジュールと強化されたモーションパーツにより、より信頼性の高い高速印刷を実現したNeptune 4の上位版。",
    features: ["Klipperファームウェア", "500mm/sの高速印刷", "Wi-Fi・LAN制御", "ダイレクトドライブエクストルーダー"]
  },
  59: {
    description: "320mm角ベッドと高いZ軸ストロークを備えた、大型高速造形向けの大判Neptune 4。",
    features: ["320 x 320 mmベッド", "500mm/sの高速印刷", "Klipperファームウェア", "PEIマグネットベッド"]
  },
  60: {
    description: "420mm角ベッドを備えた最大級のNeptune 4。大型の一体造形やコスプレ小道具向け。",
    features: ["420 x 420 mmベッド", "500mm/sの高速印刷", "Klipperファームウェア", "ハイフローダイレクトドライブ"]
  },
  61: {
    description: "簡単なセットアップ、スマートな自動キャリブレーション、高速かつ安定した高精度印刷を実現するCoreXYプリンター。",
    features: ["500mm/s CoreXY動作", "自動キャリブレーション", "アクティブ振動補正", "350℃高温ノズル"]
  },
  62: {
    description: "家具、試作、巨大パーツ向けの800mm角ベッドを備えた、大型産業用FDMマシン。",
    features: ["800 x 800 mmベッド", "1000mm造形高", "デュアル500mm/sガントリー", "産業用ヒートベッド"]
  },
  63: {
    description: "モノクロLCDを搭載し、ミニチュアや卓上モデルをくっきりと造形するコンパクトなレジンプリンター。",
    features: ["4KモノクロLCD", "コンパクト設計", "強化ガラスベッド", "空気清浄機ポート"]
  },
  64: {
    description: "9K LCD、チルトリリース、自動レベリングを備え、より速くシャープな造形を実現したMars 4。",
    features: ["9KモノクロLCD", "チルトリリース機構", "自動ベッドレベリング", "強化ガラスベッド"]
  },
  65: {
    description: "8KモノクロLCDを備えた高解像度ミッドサイズのレジンプリンター。大きく詳細な造形に対応。",
    features: ["8K 10インチモノクロLCD", "COB光源", "大型造形サイズ", "活性炭フィルター"]
  },
  66: {
    description: "チルトリリース、自動レベリング、高速硬化を備えた12Kレジンプリンター。ミッドサイズの詳細造形に。",
    features: ["12K 10インチモノクロLCD", "チルトリリース機構", "自動ベッドレベリング", "AI不良検知"]
  },
  67: {
    description: "12.8インチLCDを備えた大型6Kレジンプリンター。より低価格で大型かつ高精細な造形が可能。",
    features: ["6K 12.8インチLCD", "大型造形サイズ", "高いZ軸ストローク", "活性炭フィルター"]
  },
  68: {
    description: "家庭用レジン印刷の普及を世界的に後押しした、Elegoo初の手頃なMSLAレジンプリンター。",
    features: ["2K 5.5インチLCD", "初代MSLA", "低価格", "コンパクト設計"]
  },
  69: {
    description: "密閉された機械加工フレーム、内蔵カーボンフィルター、改良された光学系を備えた洗練版Mars。",
    features: ["密閉式機械加工フレーム", "活性炭フィルター", "改良光学系", "2K LCD"]
  },
  70: {
    description: "積層硬化時間を大幅に短縮し、造形品質を引き上げた2KモノクロLCDを導入。",
    features: ["2KモノクロLCD", "高速硬化", "CNCアルミフレーム", "コンパクト設計"]
  },
  71: {
    description: "大型で高精細なレジン造形向けの4K 8.9インチモノクロLCDを備えた、初代ミッドサイズSaturn。",
    features: ["4K 8.9インチモノクロLCD", "大型ミッドサイズ造形", "COB光源", "カーボンフィルター"]
  },
  72: {
    description: "カーボランダムガラスベッドと静音ステッパードライバーを備えた、Elegoo第2世代の格安FDM。",
    features: ["カーボランダムガラスベッド", "静音ドライバ", "中断再開印刷", "ボーデン式エクストルーダー"]
  },
  73: {
    description: "ダイレクトドライブ押出、自動レベリング、マグネットPEIベッドを備えた改良型ベッドスリンガー。",
    features: ["自動ベッドレベリング", "ダイレクトドライブエクストルーダー", "250mm/sの速度", "PEIマグネットベッド"]
  },
  74: {
    description: "Neptuneラインの基礎を築いた、Elegoo初の手頃なFDMカーテシアンベッドスリンガー。",
    features: ["ボーデン式エクストルーダー", "カーボランダムガラスベッド", "中断再開印刷", "格安エントリー"]
  },
  75: {
    description: "デュアルZ軸リードスクリューと剛性の高い金属フレームで、よりきれいな高さのある造形を実現したNeptune 2。",
    features: ["デュアルZ軸リードスクリュー", "剛性強化フレーム", "カーボランダムガラスベッド", "中断再開印刷"]
  },
  76: {
    description: "格安のカーテシアン機で2色・水溶性サポート印刷を実現するデュアルエクストルーダー型Neptune。",
    features: ["デュアルエクストルーダー", "2色印刷", "カーボランダムガラスベッド", "ボーデン式駆動"]
  },
  77: {
    description: "ダイレクトドライブ押出、自動ベッドレベリング、マグネットPEIシートを備えた第3世代Neptune。",
    features: ["自動ベッドレベリング", "ダイレクトドライブエクストルーダー", "PEIマグネットシート", "静音ドライバ"]
  },
  78: {
    description: "320mm角ベッドとダイレクトドライブを備えた、大型プロジェクト向けの大判Neptune 3。",
    features: ["320 x 320 mmベッド", "ダイレクトドライブエクストルーダー", "自動ベッドレベリング", "PEIマグネットシート"]
  },
  79: {
    description: "420mm角ベッドと500mm造形高を備えた、大型造形向けの最大級Neptune 3。",
    features: ["420 x 420 mmベッド", "500mm造形高", "ダイレクトドライブ", "自動ベッドレベリング"]
  },
  80: {
    description: "一部の便利機能を省き、価格競争力を重視したシンプルな格安Neptune。",
    features: ["ボーデン式エクストルーダー", "カーボランダムガラスベッド", "格安価格", "中断再開印刷"]
  },
  81: {
    description: "スマートな自動キャリブレーション、チャンバーカメラ、強化冷却を備えた第2世代Centauri Carbon。",
    features: ["500mm/s CoreXY", "20,000mm/s²の加速度", "密閉チャンバー", "自動キャリブレーション＋カメラ"]
  },
  82: {
    description: "Elegooの4色切替システムを同梱した、多色印刷対応のCentauri Carbon 2。",
    features: ["4色切替システム", "500mm/s CoreXY", "密閉チャンバー", "自動キャリブレーション＋カメラ"]
  },
  83: {
    description: "一体型活性炭フィルターと強化CNCフレームで、より清潔で静かな造形を実現したMars 2。",
    features: ["2KモノクロLCD", "内蔵カーボンフィルター", "CNCアルミフレーム", "改良Z軸レール"]
  },
  84: {
    description: "大型ビルドプレートとCOB光源を備え、よりシャープで速いレジン造形を実現する4KモノクロMars。",
    features: ["4K 6.6インチモノクロLCD", "COB光源", "大型ビルドプレート", "アルミフレーム"]
  },
  85: {
    description: "内蔵空気清浄機と強化されたCOB光学系で、さらに微細なディテールを実現したMars 3。",
    features: ["4KモノクロLCD", "内蔵空気清浄機", "COB光源", "フレネルレンズ光学系"]
  },
  86: {
    description: "光を投影するDLP方式でLCDの焼き付きを回避し、長寿命を実現したDLPベースのMars。",
    features: ["2K DLPプロジェクター", "LCD劣化なし", "長寿命", "コンパクト設計"]
  },
  87: {
    description: "剛性の高いフレームと掃除しやすいレジンタンクを低価格で備えた、信頼性の高い4KモノクロMars。",
    features: ["4KモノクロLCD", "剛性アルミフレーム", "掃除しやすいレジンタンク", "USB印刷"]
  },
  88: {
    description: "4KモノクロLCDと改良されたZ軸を備え、より大きく背の高いモデルに対応するSaturn。",
    features: ["4K 9.1インチモノクロLCD", "大型造形サイズ", "デュアルリニアZ軸", "CNCフレーム"]
  },
  89: {
    description: "10インチLCDと28.5µmの微細XY解像度を備えた8KモノクロSaturn。",
    features: ["8K 10インチモノクロLCD", "28.5µm XY解像度", "COB光源", "大型造形サイズ"]
  },
  90: {
    description: "高解像度で大型のレジン造形向けに、260mmの造形高を備えた12K Saturn。",
    features: ["12K 10インチモノクロLCD", "260mm造形高", "COB光源", "FEPフィルム"]
  },
  91: {
    description: "ワンピースフレームとメンテナンスのしやすさを追求した、再設計された12K Saturn。",
    features: ["12K 10インチモノクロLCD", "ワンピースフレーム", "掃除しやすいレジンタンク", "COB光源"]
  },
  92: {
    description: "CoreXY、デュアル自動レベリング、ライダーキャリブレーション、密閉高温印刷を組み合わせた初代Bambu Lab X1。",
    features: ["500mm/s CoreXY", "マイクロライダーキャリブレーション", "デュアル自動レベリング", "AIスパゲッティ検知"]
  },
  93: {
    description: "AI不良検知、自動流量キャリブレーション、アクティブ換気式フィラメント乾燥を備えた密閉型Pシリーズ。",
    features: ["5インチタッチスクリーン", "AI不良検知", "自動流量キャリブレーション", "アクティブフィラメント乾燥"]
  },
  94: {
    description: "全自動キャリブレーション、適応型振動補正、AMS互換を備えた大型のBambuベッドスリンガー。",
    features: ["330 x 320 x 325 mm造形", "全自動キャリブレーション", "適応型振動補正", "モジュラー式ブレードカッター追加"]
  },
  95: {
    description: "超硬タングステンデュアルノズル、有線エンタープライズネットワーク、65℃アクティブチャンバーを備えたプロ仕様H2D。",
    features: ["350℃デュアルノズル", "超硬タングステンノズル", "WPA2-Enterprise Wi-Fi", "65℃アクティブチャンバー"]
  },
  96: {
    description: "350℃焼入鋼ホットエンド、AI監視、65℃アクティブチャンバーを備えた大型密閉H2。",
    features: ["340 x 320 x 340 mm造形", "1000mm/sツールヘッド速度", "350℃焼入鋼ホットエンド", "3カメラAI監視"]
  },
  97: {
    description: "Vortekホットエンド切替で最大7素材を組み合わせ、パージ廃棄を大幅に削減する密閉型H2プラットフォーム。",
    features: ["Vortekホットエンド切替", "最大7素材対応", "350℃ノズル", "65℃アクティブチャンバー"]
  },
  98: {
    description: "手頃なオープンフレームCRラインの基礎を築いた、初期のCrealityカーテシアンプリンター。",
    features: ["アルミVスロットフレーム", "ヒートベッド", "ボーデン式エクストルーダー", "自己組立設計"]
  },
  99: {
    description: "手頃な卓上試作と小型モデルを狙った、コンパクトな初期のCrealityプリンター。",
    features: ["コンパクトな造形サイズ", "オープンフレーム設計", "ボーデン式エクストルーダー", "格安価格"]
  },
  100: {
    description: "シンプルなカーテシアンモーションと加熱ビルドプラットフォームを備えた初期のオープンフレームCR。",
    features: ["アルミVスロットフレーム", "ヒートベッド", "ボーデン式エクストルーダー", "中断再開機能"]
  },
  101: {
    description: "より大きな可動範囲とおなじみのオープンカーテシアンフレームを備えた、過渡期のCreality CRモデル。",
    features: ["オープンフレーム設計", "ヒートベッド", "ボーデン式エクストルーダー", "停電復旧"]
  },
  102: {
    description: "300mm角ビルドプレートをホビイストにもたらした、影響力の大きい大型CRプリンター。",
    features: ["300 x 300 mmベッド", "400mm造形高", "ボーデン式エクストルーダー", "巨大な改造コミュニティ"]
  },
  103: {
    description: "広い300mm X軸はそのままに、全体の設置面積と高さを抑えた小型のCR-10。",
    features: ["300mm X軸", "コンパクトなCR-10フレーム", "ヒートベッド", "ボーデン式エクストルーダー"]
  },
  104: {
    description: "デュアルZスクリュー、フィラメント切れ検知、改良された復旧機能を備えたCR-10の改訂版。",
    features: ["デュアルZ軸スクリュー", "フィラメント切れセンサー", "中断再開印刷", "300 x 300 x 400 mm造形"]
  },
  105: {
    description: "フルサイズの小道具や大型機能部品向けに、400mm角プラットフォームへ拡大したCR-10S。",
    features: ["400 x 400 mmベッド", "400mm造形高", "デュアルZ軸スクリュー", "フィラメント切れセンサー"]
  },
  106: {
    description: "500mm立方の造形エリアを備えた、大型試作やコスプレ向けの巨大CR-10S。",
    features: ["500 x 500 mmベッド", "500mm造形高", "デュアルZ軸スクリュー", "フィラメント切れセンサー"]
  },
  107: {
    description: "静音32ビット制御、強化フレーム、デュアル冷却ファンを備えた大幅刷新のCR-10。",
    features: ["静音32ビット基板", "デュアル冷却ファン", "デュアルZ軸", "強化フレーム"]
  },
  108: {
    description: "フレキシブルフィラメント制御を改善するTitanタイプのダイレクトドライブを備えたCR-10 V2。",
    features: ["Titanダイレクトドライブ", "静音32ビット基板", "デュアルZ軸", "自動ベッドレベリング"]
  },
  109: {
    description: "自動キャリブレーション、入力整形、セラミックホットエンドを備えた現代の高速CRプリンター。",
    features: ["600mm/sの速度", "自動ベッドレベリング", "入力整形", "セラミックホットエンド"]
  },
  110: {
    description: "半組立フレームとシンプルな操作系で、手軽なFDM印刷を実現するコンパクトなCreality。",
    features: ["半組立フレーム", "ヒートベッド", "ボーデン式エクストルーダー", "中断再開印刷"]
  },
  111: {
    description: "自動ベッドレベリングと堅牢なセットアップで、より安定した一層目を実現したCR-20。",
    features: ["自動ベッドレベリング", "半組立フレーム", "ヒートベッド", "中断再開印刷"]
  },
  112: {
    description: "教室や家庭向けの安全な3Dプリントを目指した、小型密閉の入門機。",
    features: ["密閉フレーム", "コンパクト造形", "シンプルな操作", "初心者向け設計"]
  },
  113: {
    description: "CoreXY方式のモーションでコンパクトかつ安定したビルドを実現する、剛性フレームのCreality。",
    features: ["CoreXY方式モーション", "剛性フレーム", "ヒートベッド", "デュアルZ軸"]
  },
  114: {
    description: "背の高い造形エリアと自動ベッドレベリングを備えた、密閉プロスタイルのCRプリンター。",
    features: ["密閉フレーム", "300 x 225 mmベッド", "自動ベッドレベリング", "デュアルZ軸"]
  },
  115: {
    description: "小型デスクトップFDM印刷の手頃な入門機として設計された、コンパクトな初期Ender。",
    features: ["コンパクト150mmベッド", "ポータブルフレーム", "ボーデン式エクストルーダー", "ヒートベッド"]
  },
  116: {
    description: "折りたたみフレーム、着脱式ビルド面、持ち運びやすさを向上した、刷新されたコンパクトEnder。",
    features: ["折りたたみフレーム", "ポータブル設計", "着脱式ビルドプレート", "ヒートベッド"]
  },
  117: {
    description: "Spriteダイレクトドライブ、CR Touchレベリング、300mm立方造形を備えた大型S1。",
    features: ["300mm立方造形", "Spriteダイレクトドライブ", "CR Touchレベリング", "デュアルZ軸"]
  },
  118: {
    description: "CR Touch自動レベリング、カーボランダムガラスベッド、静音基板を備えた刷新版Ender-3。",
    features: ["CR Touchレベリング", "カーボランダムガラスベッド", "静音基板", "ボーデン式エクストルーダー"]
  },
  119: {
    description: "背の高い造形エリアと剛性モーション構造を備えた、初期のキューブフレームEnder。",
    features: ["キューブフレーム設計", "300mm造形高", "ヒートベッド", "ボーデン式エクストルーダー"]
  },
  120: {
    description: "X・Y方向でベッドが固定され、背の高い造形で安定性を高めたキューブフレームEnder。",
    features: ["キューブフレーム設計", "X-Y固定ベッド", "220 x 220 x 300 mm造形", "ヒートベッド"]
  },
  121: {
    description: "350mmベッド、デュアルZスクリュー、BLTouch方式の自動レベリングを備えた大型キューブフレームEnder。",
    features: ["350 x 350 mmベッド", "400mm造形高", "自動ベッドレベリング", "デュアルZ軸"]
  },
  122: {
    description: "強化フレーム、静音基板、改良エクストルーダー経路で、日常の確実な印刷を実現するEnder-5。",
    features: ["キューブフレーム設計", "静音基板", "メタルエクストルーダー", "X-Y固定ベッド"]
  },
  123: {
    description: "Spriteダイレクトドライブ、自動レベリング、300℃オールメタルホットエンドを備えた高速Ender-5。",
    features: ["250mm/sの速度", "Spriteダイレクトドライブ", "300℃オールメタルホットエンド", "自動ベッドレベリング"]
  },
  124: {
    description: "自動キャリブレーションと400mm角ビルドを備えた、大型・高速のEnder-5。",
    features: ["400 x 400 mmベッド", "700mm/sの速度", "自動ベッドレベリング", "ハイフローホットエンド"]
  },
  125: {
    description: "400mmの造形高と剛性キューブフレームを備えた、セミ密閉CoreXY Ender。",
    features: ["CoreXY機構", "250 x 250 x 400 mm造形", "セミ密閉フレーム", "静音基板"]
  },
  126: {
    description: "600mm/s動作、自動キャリブレーション、低価格を備えたオープンフレームのK1シリーズCoreXY。",
    features: ["600mm/s CoreXY", "自動セルフキャリブレーション", "入力整形", "ハイフローホットエンド"]
  },
  127: {
    description: "アクティブ加熱チャンバー、CFS互換、高速動作を備えたミッドサイズK2シリーズCoreXY。",
    features: ["300mm立方造形", "60℃加熱チャンバー", "CFS多色対応", "600mm/s CoreXY"]
  },
  128: {
    description: "高速動作、自動キャリブレーション、オプションのCFS多色印刷を備えた密閉K2 CoreXY。",
    features: ["260mm立方造形", "600mm/s CoreXY", "自動セルフキャリブレーション", "CFS対応"]
  },
  129: {
    description: "静かで親しみやすい家庭用に設計された、完全密閉・工場組立のデスクトッププリンター。",
    features: ["完全密閉チャンバー", "工場組立済み", "静音動作", "補助レベリング"]
  },
  130: {
    description: "カメラ、ドアセンサー、遠隔監視でより安全な家庭印刷を実現するネット接続型Sermoon V1 Pro。",
    features: ["完全密閉チャンバー", "内蔵カメラ", "遠隔監視", "ドアセンサー"]
  },
  131: {
    description: "大型造形エリア、デュアルZ軸、エンジニアリング素材対応を備えた剛性密閉Sermoon。",
    features: ["密閉チャンバー", "280 x 250 mmベッド", "自動ベッドレベリング", "デュアルZ軸"]
  },
  132: {
    description: "ネットワーク生産と2素材造形を想定した、プロ仕様の密閉デュアル押出プリンター。",
    features: ["デュアル押出", "密閉チャンバー", "ネットワーク一括管理", "自動ベッドレベリング"]
  },
  133: {
    description: "デュアル素材制御と遠隔生産管理を向上させた、プロ仕様のSermoon D3アップグレード版。",
    features: ["デュアル素材印刷", "密閉チャンバー", "ネットワーク一括管理", "自動ベッドレベリング"]
  },
  134: {
    description: "2K LCDとCreality Cloud接続を備えた、手頃なエントリーHALOTレジンプリンター。",
    features: ["2KモノクロLCD", "積分型光源", "Creality Cloud", "コンパクト造形"]
  },
  135: {
    description: "詳細なミニチュアや中型モデル向けの4K 7.9インチモノクロLCDを備えた大型HALOT-ONE。",
    features: ["4K 7.9インチモノクロLCD", "積分型光源", "Creality Cloud", "大型造形サイズ"]
  },
  136: {
    description: "4KモノクロLCD、改善された光の均一性、ネットワークファイル転送を備えた上位HALOT-ONE。",
    features: ["4KモノクロLCD", "改善された光均一性", "Creality Cloud", "CNCアルミビルドプレート"]
  },
  137: {
    description: "6K 8.9インチモノクロLCDと200mmのZ高さを備え、詳細な大型造形に対応する大型HALOT。",
    features: ["6K 8.9インチモノクロLCD", "大型造形サイズ", "積分型光源", "Creality Cloud"]
  },
  138: {
    description: "4K 8.9インチモノクロLCDとシンプルなタッチ操作を備えた、大型で扱いやすいHALOTレジン機。",
    features: ["4K 8.9インチモノクロLCD", "大型造形サイズ", "積分型光源", "タッチスクリーン操作"]
  },
  139: {
    description: "10.3インチモノクロLCDと跳ね上げ式カバーを備えた、高速8K大型レジンプリンター。",
    features: ["8K 10.3インチモノクロLCD", "170mm/hの速度", "積分型光源", "跳ね上げ式UVカバー"]
  },
  140: {
    description: "14KモノクロLCD、スマートレジン管理、改良された剥離機構を備えた高速MAGE。",
    features: ["14K 10.1インチモノクロLCD", "スマートレジン管理", "高速剥離フィルム", "跳ね上げ式UVカバー"]
  },
  141: {
    description: "8Kディスプレイ、自動レジン処理、一体型空気清浄機を備えたプロ仕様MAGE。",
    features: ["8K 10.3インチモノクロLCD", "自動レジン供給", "一体型空気清浄機", "170mm/hの速度"]
  },
  142: {
    description: "自動レジン処理、スマート監視、高いZ軸ストロークを備えたハイエンド大型HALOT。",
    features: ["高解像度モノクロLCD", "自動レジン処理", "スマート監視", "250mm造形高"]
  },
  143: {
    description: "シンプルな操作と手頃な高精細モデル造形に特化した、コンパクトなエントリーHALOT。",
    features: ["コンパクトな造形サイズ", "モノクロLCD", "シンプルなタッチ操作", "USB印刷"]
  },
  144: {
    description: "デスクトップFDM印刷へのシンプルな道筋を提供した、Anycubic初期のカーテシアンi3型機。",
    features: ["カーテシアンモーション", "ヒートベッド", "ボーデン式エクストルーダー", "オープンフレーム設計"]
  },
  145: {
    description: "プーリー駆動アームで高速な垂直動作とコンパクトな設置面積を実現した、初期のAnycubicデルタ機。",
    features: ["デルタ機構", "プーリー駆動アーム", "ヒートベッド", "コンパクト設計"]
  },
  146: {
    description: "Anycubicの初代Kosselを改良した、リニアレール方式のデルタプリンター。",
    features: ["デルタ機構", "リニアレール", "ヒートベッド", "オープンソースファームウェア"]
  },
  147: {
    description: "リニアレール、自動レベリング、より高いデルタ造形エリアを備えた拡大版Kossel。",
    features: ["デルタ機構", "リニアレール", "自動ベッドレベリング", "ヒートベッド"]
  },
  148: {
    description: "フレーム剛性とキャリブレーション補助を改善した、より大型のAnycubic Kosselデルタ機。",
    features: ["デルタ機構", "自動ベッドレベリング", "ヒートベッド", "剛性アルミフレーム"]
  },
  149: {
    description: "特大の縦長造形向けに455mmの造形高を備えた大型デルタプリンター。",
    features: ["大型デルタ造形", "自動ベッドレベリング", "ヒートベッド", "剛性アルミフレーム"]
  },
  150: {
    description: "剛性フレーム、タッチスクリーン、信頼性の高い加熱プラットフォームを備えた人気の組立済みカーテシアン機。",
    features: ["組立済みフレーム", "タッチスクリーン操作", "加熱Ultrabase", "フィラメント切れセンサー"]
  },
  151: {
    description: "Titan方式押出と堅牢なUltrabaseプラットフォームを改良した、i3 Megaの後継機。",
    features: ["Titan方式エクストルーダー", "Ultrabaseベッド", "フィラメント切れセンサー", "中断再開印刷"]
  },
  152: {
    description: "強化フレームと300mm角ビルドを備えた、機能部品や小道具向けの大型Mega。",
    features: ["300 x 300 mmベッド", "強化フレーム", "Titan方式エクストルーダー", "中断再開印刷"]
  },
  153: {
    description: "2色印刷対応と切替式レーザー彫刻アタッチメントを備えたMegaプラットフォーム。",
    features: ["2色印刷", "オプションのレーザーモジュール", "Ultrabaseベッド", "中断再開印刷"]
  },
  154: {
    description: "コンパクトなフレームと非加熱プラットフォームを備えた、PLA中心の低価格Mega。",
    features: ["格安価格", "220mm角造形", "ボーデン式エクストルーダー", "オープンフレーム設計"]
  },
  155: {
    description: "加熱プラットフォームと改良された押出で、幅広い素材に対応したMega Zero。",
    features: ["ヒートベッド", "220mm角造形", "ボーデン式エクストルーダー", "中断再開印刷"]
  },
  156: {
    description: "300mm角ベッドとフィルター換気を備えた、ワークショップ素材向けの密閉大型Anycubic。",
    features: ["密閉チャンバー", "300 x 300 mmベッド", "デュアルZ軸", "フィラメント切れセンサー"]
  },
  157: {
    description: "冷却と温度管理を強化し、素材の対応幅を広げた洗練された密閉4Max。",
    features: ["密閉チャンバー", "300 x 300 mmベッド", "デュアルZ軸", "改良冷却"]
  },
  158: {
    description: "400mm角Ultrabaseと自動メッシュレベリングを備えた大型カーテシアンプリンター。",
    features: ["400 x 400 mmベッド", "450mm造形高", "Ultrabaseプラットフォーム", "自動ベッドレベリング"]
  },
  159: {
    description: "ひずみゲージ式レベリング、デュアルZ軸スクリュー、ばね鋼プラットフォームを備えた高速カーテシアン機。",
    features: ["ひずみゲージ式レベリング", "デュアルZ軸", "ばね鋼プラットフォーム", "TMC2209静音ドライバ"]
  },
  160: {
    description: "ダイレクトドライブ、LeviQ自動レベリング、フレキシブル鋼板を備えた扱いやすいKobraベッドスリンガー。",
    features: ["ダイレクトドライブエクストルーダー", "LeviQ自動レベリング", "フレキシブル鋼板", "カラータッチスクリーン"]
  },
  161: {
    description: "自動レベリングとコンパクトな造形を備えた、初めてのユーザー向けシンプルKobra。",
    features: ["LeviQ自動レベリング", "ボーデン式エクストルーダー", "220mm角造形", "フレキシブルビルドプレート"]
  },
  162: {
    description: "ダイレクトドライブ、自動レベリング、堅牢なオープンアルミフレームを備えたKobra刷新版。",
    features: ["ダイレクトドライブエクストルーダー", "LeviQ自動レベリング", "フレキシブル鋼板", "中断再開印刷"]
  },
  163: {
    description: "300mm角プラットフォーム、ダイレクトドライブ、自動メッシュレベリングを備えた大型Kobra。",
    features: ["300 x 300 mmベッド", "350mm造形高", "ダイレクトドライブエクストルーダー", "LeviQ自動レベリング"]
  },
  164: {
    description: "400mm角プラットフォームと自動レベリングで、大型小道具や試作に対応する特大Kobra。",
    features: ["400 x 400 mmベッド", "450mm造形高", "ダイレクトドライブエクストルーダー", "LeviQ自動レベリング"]
  },
  165: {
    description: "冷却、ダイレクトドライブ、自動レベリングを改善し、日常印刷を高速化したKobra。",
    features: ["250mm/sの速度", "ダイレクトドライブエクストルーダー", "LeviQ自動レベリング", "改良冷却"]
  },
  166: {
    description: "自動レベリングとダイレクトドライブ押出を備えた、シンプルな高速Kobra 2。",
    features: ["250mm/sの速度", "ダイレクトドライブエクストルーダー", "LeviQ自動レベリング", "フレキシブルビルドプレート"]
  },
  167: {
    description: "500mm/sの動作と手軽な遠隔監視に最適化された、ネットワーク接続型Kobra 2。",
    features: ["500mm/sの速度", "Anycubicアプリ制御", "ダイレクトドライブエクストルーダー", "入力整形"]
  },
  168: {
    description: "500mm/s動作、自動レベリング、400mm造形高を備えた大型Kobra 2。",
    features: ["320 x 320 mmベッド", "500mm/sの速度", "ダイレクトドライブエクストルーダー", "入力整形"]
  },
  169: {
    description: "420mm角ベッドと500mm造形高を備えた、高速大型Kobra。",
    features: ["420 x 420 mmベッド", "500mm/sの速度", "自動ベッドレベリング", "入力整形"]
  },
  170: {
    description: "オプションのACE多色印刷とハンズオフキャリブレーションを想定した高速Kobraプラットフォーム。",
    features: ["600mm/sの速度", "ACE多色対応", "自動ベッドレベリング", "入力整形"]
  },
  171: {
    description: "4色・多素材印刷を実現するACEカラーエンジンを同梱したKobra 3。",
    features: ["600mm/sの速度", "ACE 4色システム", "自動ベッドレベリング", "入力整形"]
  },
  172: {
    description: "モーション制御、ACE対応、監視機能を更新した、刷新されたKobra 3カラーバンドル。",
    features: ["600mm/sの速度", "ACE多色システム", "自動ベッドレベリング", "スマート監視"]
  },
  173: {
    description: "高速動作、自動キャリブレーション、多素材対応を備えた次世代Kobraカラーバンドル。",
    features: ["600mm/sの速度", "多色システム", "自動ベッドレベリング", "スマート監視"]
  },
  174: {
    description: "ACE Pro多色印刷、アクティブ監視、高速動作を備えた密閉CoreXY Kobra。",
    features: ["600mm/s CoreXY", "ACE Pro多色", "密閉チャンバー", "自動ベッドレベリング"]
  },
  175: {
    description: "大型の多色プロジェクト向けに、ACE Proカラー印刷を備えた大型密閉CoreXY Kobra。",
    features: ["350mm立方造形", "600mm/s CoreXY", "ACE Pro多色", "密閉チャンバー"]
  },
  176: {
    description: "拡張された多色印刷のため、ACE 2 Pro素材システムと組み合わせた密閉Kobra S1バンドル。",
    features: ["600mm/s CoreXY", "ACE 2 Proシステム", "密閉チャンバー", "自動ベッドレベリング"]
  },
  177: {
    description: "手頃な高精細MSLA印刷をメイカーズにもたらした、Anycubicの初代Photonレジンプリンター。",
    features: ["2K LCD", "コンパクト造形", "UV遮断カバー", "USB印刷"]
  },
  178: {
    description: "デュアルZレール、改善されたUV露光、よりきれいな密閉フレームを備えたPhoton改訂版。",
    features: ["2K LCD", "デュアルZ軸レール", "改良UV光源", "活性炭フィルター"]
  },
  179: {
    description: "手頃なミニチュアや小型詳細モデル向けに設計された、コンパクトな格安レジンプリンター。",
    features: ["2K LCD", "コンパクト設計", "UV遮断カバー", "格安価格"]
  },
  180: {
    description: "高速硬化モノクロLCDを備え、サービス寿命を改善したコンパクトなPhoton。",
    features: ["2KモノクロLCD", "高速硬化", "調整可能プラットフォーム", "UV遮断カバー"]
  },
  181: {
    description: "密閉筐体、モノクロLCD、改善されたZ軸剛性を備えたネット接続Mono機。",
    features: ["2KモノクロLCD", "Wi-Fi制御", "デュアルリニアZ軸", "活性炭フィルター"]
  },
  182: {
    description: "微細なXYディテールと高速露光を備えた、コンパクトな4Kモノクロレジンプリンター。",
    features: ["4KモノクロLCD", "高速硬化", "微細XY解像度", "UV遮断カバー"]
  },
  183: {
    description: "大型の4KモノクロLCDとシンプルなメンテナンスを備えた、手頃なコンパクトレジン機。",
    features: ["4KモノクロLCD", "大型ビルドプレート", "簡単レベリング", "USB印刷"]
  },
  184: {
    description: "4KモノクロLCDと背の高い造形高を備えた、大型のMonoレジンプリンター。",
    features: ["4KモノクロLCD", "大型造形サイズ", "デュアルリニアZ軸", "Wi-Fi制御"]
  },
  185: {
    description: "9.1インチ4K LCD、改善された光均一性、自動レベリングを備えたMono X刷新版。",
    features: ["4KモノクロLCD", "自動レベリング", "改善された光均一性", "デュアルZ軸"]
  },
  186: {
    description: "4KモノクロLCDと、ミニチュア向けの信頼性の高いディテールを備えたコンパクトM3レジン機。",
    features: ["4KモノクロLCD", "マトリックス平行光源", "コンパクト造形", "UV遮断カバー"]
  },
  187: {
    description: "6KモノクロLCD、Wi-Fi監視、自動レジン補充対応を備えた大型M3。",
    features: ["6KモノクロLCD", "自動レジン補充", "Wi-Fi制御", "大型造形サイズ"]
  },
  188: {
    description: "13.6インチ7K、自動レジン補充、300mm造形高を備えた巨大レジンプリンター。",
    features: ["7K 13.6インチモノクロLCD", "自動レジン補充", "大型造形サイズ", "Wi-Fi制御"]
  },
  189: {
    description: "8K LCD、デュアル空気ろ過、改善された露光均一性を備えた上位ミッドサイズM3。",
    features: ["8KモノクロLCD", "デュアル空気ろ過", "Wi-Fi制御", "高精細ディテール"]
  },
  190: {
    description: "自動レベリング、露光監視、スマート印刷チェックを備えた高速12Kレジンプリンター。",
    features: ["12KモノクロLCD", "自動レベリング", "スマート印刷チェック", "105mm/hの速度"]
  },
  191: {
    description: "レジン加熱制御、自動レベリング、改良された高速監視を備えたM5sアップグレード版。",
    features: ["14KモノクロLCD", "レジン加熱バット", "自動レベリング", "スマート印刷チェック"]
  },
  192: {
    description: "14K LCD、自動レベリング、高速露光制御を備えた高解像度M7レジンプリンター。",
    features: ["14KモノクロLCD", "自動レベリング", "高速露光", "Wi-Fi監視"]
  },
  193: {
    description: "自動レジン補充、温度制御バット、14Kディテールを備えた高速M7。",
    features: ["14KモノクロLCD", "自動レジン補充", "レジン加熱バット", "170mm/hの速度"]
  },
  194: {
    description: "自動レジン処理と高速生産機能を備えた、ネット接続のプロフェッショナルPhoton。",
    features: ["高解像度モノクロLCD", "自動レジン処理", "ネットワーク監視", "自動レベリング"]
  },
  195: {
    description: "長寿命プロジェクター光学系と優れた画素レベルディテールを備えた、コンパクトなDLPレジン機。",
    features: ["DLPプロジェクター", "92%の光均一性", "長寿命プロジェクター", "Wi-Fi制御"]
  },
  196: {
    description: "耐久性の高いプロジェクター技術と51µmの微細XY解像度を備えた大型DLP Photon。",
    features: ["DLPプロジェクター", "51µm XY解像度", "長寿命プロジェクター", "UV遮断カバー"]
  },
  197: {
    description: "高速でアップグレード可能なデスクトップFDMプラットフォームの基礎を築いた、オリジナルのオープンソースUltimakerキット。",
    features: ["オープンソース設計", "ヒートベッド", "自己組立キット", "ボーデン式エクストルーダー"]
  },
  198: {
    description: "改良された電子系とヒートベッドを備え、おなじみのオープンソースメイカープラットフォームを踏襲した洗練版Original。",
    features: ["ヒートベッド", "オープンソース設計", "自己組立キット", "改良電子系"]
  },
  199: {
    description: "信頼性の高い加熱プラットフォームと精密なオープンフレーム機構を備えた、洗練された単一押出Ultimaker。",
    features: ["単一押出", "加熱ガラスベッド", "ボーデン式エクストルーダー", "ロータリーコントローラー"]
  },
  200: {
    description: "ワークショップ、教室、小型デスクトップ印刷向けの、コンパクトでポータブルなUltimaker 2。",
    features: ["ポータブル設計", "コンパクト造形サイズ", "ヒートベッド", "単一押出"]
  },
  201: {
    description: "同じ精密な単一ノズルプラットフォームを保ちつつ、大型試作向けに背を高くしたUltimaker 2。",
    features: ["305mm造形高", "単一押出", "加熱ガラスベッド", "ロータリーコントローラー"]
  },
  202: {
    description: "交換式ノズルと改良された押出で、より幅広いディテールに対応したアップグレード版Ultimaker 2。",
    features: ["交換式ノズル", "加熱ガラスベッド", "単一押出", "改良フィーダー"]
  },
  203: {
    description: "交換式ノズルと305mmのZ高さで大型部品に対応する、背の高いUltimaker 2+。",
    features: ["305mm造形高", "交換式ノズル", "加熱ガラスベッド", "改良フィーダー"]
  },
  204: {
    description: "遠隔ジョブ管理と実績ある交換式ノズルシステムを備えた、ネット接続型Ultimaker 2+。",
    features: ["Wi-Fi遠隔印刷", "交換式ノズル", "加熱ガラスベッド", "クラウド監視"]
  },
  205: {
    description: "プリントコア認識、アクティブレベリング、ネットワーク制御を備えたプロ仕様デュアル押出Ultimaker。",
    features: ["デュアル押出", "交換式プリントコア", "アクティブベッドレベリング", "Wi-Fi・Ethernet"]
  },
  206: {
    description: "デュアル押出、水溶性サポート、ネットワークジョブ管理を備えた背の高いUltimaker 3。",
    features: ["300mm造形高", "デュアル押出", "交換式プリントコア", "アクティブベッドレベリング"]
  },
  207: {
    description: "自動レベリング、交換式プリントコア、コンパクトなSシリーズフレームを備えたプロ仕様デュアル素材機。",
    features: ["デュアル素材印刷", "アクティブベッドレベリング", "交換式プリントコア", "素材認識"]
  },
  208: {
    description: "改良されたビルドプレート検知と一体型Air Managerワークフローを備えた、S5クラスのプロ機。",
    features: ["330 x 240 x 300 mm造形", "デュアル素材印刷", "自動ベッドレベリング", "Air Manager対応"]
  },
  209: {
    description: "再設計されたフィーダーと生産性重視のファームウェアを備えた、次世代Sシリーズデュアル素材機。",
    features: ["330 x 240 x 300 mm造形", "デュアル素材印刷", "再設計フィーダー", "Air Manager対応"]
  },
  210: {
    description: "Cheetahモーションプランナーと再設計されたプリントコアを採用した、高生産性Sシリーズデュアル素材機。",
    features: ["Cheetahモーションプランナー", "デュアル素材印刷", "内蔵加速度計", "再設計プリントコア"]
  },
  211: {
    description: "FlashForgeを立ち上げた、オリジナルの木製フレーム・デュアル押出デスクトップ3Dプリンター。",
    features: ["木製フレーム", "デュアル押出", "加熱ビルドプレート", "オープンソース由来"]
  },
  212: {
    description: "2色印刷と水溶性サポート印刷を実現する、初期のデュアル押出プリンター。",
    features: ["デュアル押出", "加熱ビルドプレート", "LCD操作パネル", "金属・木材ハイブリッド構造"]
  },
  213: {
    description: "デュアル押出時の構造剛性を高めるフルメタルスチールフレームを採用した過渡期モデル。",
    features: ["スチールフレーム", "デュアル押出", "加熱ビルドプレート", "LCD操作パネル"]
  },
  214: {
    description: "ABSとPLAの信頼性高い印刷で知られる、象徴的な密閉メタルフレームのデュアル押出ワークホース。",
    features: ["密閉メタルフレーム", "デュアル押出", "加熱アルミベッド", "アクリル上部フード"]
  },
  215: {
    description: "ミラー・複製モードを実現するIndependent Dual Extruder（IDEX）システムを備えたCreator Pro。",
    features: ["IDEXデュアル押出", "ミラー・複製モード", "タッチスクリーンUI", "密閉チャンバー"]
  },
  216: {
    description: "Wi-Fi、タッチスクリーン操作、内蔵空気ろ過を追加した、近代化されたデュアル押出Creator。",
    features: ["デュアル押出", "Wi-Fi・クラウド制御", "タッチスクリーンUI", "内蔵エアフィルター"]
  },
  217: {
    description: "デュアル素材、水溶性サポート、複製印刷を可能にするCreator MaxのIDEX版。",
    features: ["IDEXデュアル押出", "Wi-Fi接続", "ミラー・複製モード", "密閉チャンバー"]
  },
  218: {
    description: "独立ノズル、内蔵カメラ、高温ホットエンドを備えたハイエンド産業用IDEXプリンター。",
    features: ["産業用IDEXシステム", "300 x 250 x 200 mm造形", "独立ノズル", "内蔵HDカメラ"]
  },
  219: {
    description: "加熱アセンブリ、冷却、カーボンファイバーノズル対応を強化したCreator 3。",
    features: ["産業用IDEXシステム", "強化加熱アセンブリ", "カーボンファイバー印刷", "内蔵HDカメラ"]
  },
  220: {
    description: "エンジニアリングポリマー向けに最大65℃のアクティブチャンバー加熱を備えた、産業グレード大型IDEX。",
    features: ["400 x 350 x 500 mm造形", "65℃アクティブ加熱チャンバー", "交換式IDEXモジュール", "産業精度"]
  },
  221: {
    description: "高温カーボンファイバーエクストルーダーと高度な熱管理を備えた高仕様Creator 4。",
    features: ["400 x 350 x 500 mm造形", "高温カーボンファイバーエクストルーダー", "65℃アクティブ加熱チャンバー", "産業用IDEXシステム"]
  },
  222: {
    description: "自動キャリブレーション、高速動作、パージ材を大幅に削減する4ツールヘッドを備えたオープンフレームFDMプリンター。",
    features: ["4つの独立ツールヘッド", "256 x 256 x 256 mm造形", "自動キャリブレーションとレベリング", "最大600mm/sの移動速度"]
  },
  223: {
    description: "着脱式クイックチェンジノズル、内蔵カメラ、自動フィラメント送給を備えたコンパクト密閉機。",
    features: ["クイック着脱ノズル", "密閉安全設計", "内蔵カメラ", "Wi-Fi・クラウド印刷"]
  },
  224: {
    description: "内蔵カメラを省き、学校や家庭向けの手頃な入門機としたシンプルなAdventurer 3。",
    features: ["クイック着脱ノズル", "密閉安全設計", "Wi-Fi接続", "静音動作"]
  },
  225: {
    description: "265℃ノズル、ガラスビルドプレート、高温フィラメント互換性を向上したAdventurer 3。",
    features: ["265℃高温ノズル", "ガラスビルドプレート", "内蔵カメラ", "Wi-Fi・クラウド印刷"]
  },
  226: {
    description: "自動ベッドレベリングセンサー、PEI鋼板、高速モーションを備えた更新版Adventurer 3 Pro。",
    features: ["PEIフレキシブルビルドプレート", "自動ベッドレベリングセンサー", "265℃ノズル", "内蔵カメラ"]
  },
  227: {
    description: "HEPA H13エアフィルター、クイックリリースノズル、220 x 200 x 250 mm造形を備えた拡大版Adventurer。",
    features: ["HEPA H13エアフィルター", "クイックリリースノズル", "220 x 200 x 250 mm造形", "内蔵HDカメラ"]
  },
  228: {
    description: "内蔵カメラを省きつつ、密閉造形エリアとエアフィルターを残した手頃なAdventurer 4。",
    features: ["クイックリリースノズル", "220 x 200 x 250 mm造形", "HEPAエアフィルター", "フレキシブルビルドプレート"]
  },
  229: {
    description: "30ポイント自動レベリング、PEI鋼板、デュアルファン冷却、300mm/sを備えた高速Adventurer 4。",
    features: ["300mm/sの高速印刷", "30ポイント自動レベリング", "PEIフレキシブルプレート", "デュアルファン冷却"]
  },
  230: {
    description: "最大600mm/s・20,000mm/s²をエントリー価格で提供する、オープンCoreXY高速プリンター。",
    features: ["600mm/s CoreXY", "ワンクリック自動レベリング", "クイックスワップノズル", "20,000mm/s²の加速度"]
  },
  231: {
    description: "エンジニアリング試作と産業部品向けに設計された、初期のプロ仕様密閉単一押出プリンター。",
    features: ["密閉単一押出", "250 x 250 x 200 mm造形", "加熱ビルドプレート", "タッチスクリーンUI"]
  },
  232: {
    description: "大型280 x 250 x 300 mm造形、自動レベリング、中断再開印刷を備えた堅牢なプロ用ワークホース。",
    features: ["280 x 250 x 300 mm造形", "補助ベッドレベリング", "5インチタッチスクリーン", "停電復旧"]
  },
  233: {
    description: "内蔵HDカメラ、空気ろ過、カーボンファイバー向け300℃高温エクストルーダーを追加したGuider II。",
    features: ["300℃高温ノズル", "内蔵HDカメラ", "HEPA空気ろ過", "280 x 250 x 300 mm造形"]
  },
  234: {
    description: "自動レベリングと静かな産業生産を備えた、軽量・高速のプロ仕様CoreXYプリンター。",
    features: ["軽量CoreXY構造", "300 x 250 x 340 mm造形", "自動レベリング", "内蔵HDカメラ"]
  },
  235: {
    description: "600mmのZ高さとデュアル乾燥密閉フィラメント室を備えた、縦長フォーマットのプロCoreXY機。",
    features: ["350 x 350 x 600 mm造形", "600mm Z高さ", "乾燥密閉フィラメント室", "超静音動作"]
  },
  236: {
    description: "500mm/s印刷と20,000mm/s²の加速度を実現する、高速デュアル押出産業用プリンター。",
    features: ["500mm/sデュアル押出", "330 x 330 x 600 mm造形", "20,000mm/s²の加速度", "スマート圧力補正"]
  },
  237: {
    description: "補助ベッドレベリング、スライド式ビルドプレート、安全な非加熱ベッドを備えた教育向け入門機。",
    features: ["補助ベッドレベリング", "スライド式ビルドプレート", "安全な非加熱ベッド", "Wi-Fi接続"]
  },
  238: {
    description: "タッチスクリーンUI、静音動作、着脱式ビルドプレートを備えた、家庭・教室向け洗練版Finder。",
    features: ["3.5インチタッチスクリーン", "スライド式ビルドプレート", "静音印刷", "Wi-Fi接続"]
  },
  239: {
    description: "260℃ダイレクトドライブホットエンド、加熱プラットフォーム、ガラス/PEIデュアルビルド面を備えた拡大版Finder 3。",
    features: ["ダイレクトドライブエクストルーダー", "加熱ビルドプラットフォーム", "260℃ホットエンド", "190 x 195 x 200 mm造形"]
  },
  240: {
    description: "ダイレクトドライブエクストルーダー、260℃ホットエンド、ガラス/PEIデュアルフレキシブルプレートを備えたデスクトップFDM。",
    features: ["ダイレクトドライブエクストルーダー", "ガラス/PEIデュアルプレート", "自動ベッドレベリング", "260℃ホットエンド"]
  },
  241: {
    description: "ジュエリー、歯科、精密産業鋳造向けに設計された高精度DLPレジンプリンター。",
    features: ["FHD LED DLPエンジン", "バットフィルム自動光量調整", "ジュエリー・歯科用レジンプロファイル", "タッチスクリーンUI"]
  },
  242: {
    description: "拡大された造形サイズと強化された光エンジン均一性で歯科技工所向けに改良されたHunter DLP。",
    features: ["拡大DLP造形エリア", "高光均一性", "歯科・医療認証", "タッチスクリーンUI"]
  },
  243: {
    description: "卓上ミニチュアや詳細なホビーモデル向けの、コンパクトな2KモノクロLCDレジンプリンター。",
    features: ["2KモノクロLCD", "高速硬化時間", "コンパクトデスクトップ設計", "USB印刷"]
  },
  244: {
    description: "高解像度の試作モデル向け、ミッドサイズ4KモノクロLCDレジン3Dプリンター。",
    features: ["4KモノクロLCD", "マトリックス光源", "デュアルリニアZ軸", "Wi-Fi接続"]
  },
  245: {
    description: "詳細モデルや歯科用途向けに51µm精度を提供する、6KモノクロLCDレジンプリンター。",
    features: ["6KモノクロLCD", "51µm解像度", "マトリックスUV光源", "Wi-Fi接続"]
  },
  246: {
    description: "大型レジンモデル向けに400mmのZ高さを備えた、大型4KモノクロLCDレジン3Dプリンター。",
    features: ["4K 13.3インチモノクロLCD", "292 x 165 x 400 mm造形", "産業用Z軸リードスクリュー", "高効率冷却"]
  },
  247: {
    description: "MakerBot Replicatorアーキテクチャを基にした、初期の密閉デュアル押出デスクトッププリンター。",
    features: ["デュアル押出", "密閉メタルフレーム", "加熱ビルドプレート", "LCD操作パネル"]
  },
  248: {
    description: "エンジニアリング素材向けに350℃高温ノズルとアクティブチャンバー加熱を備えた、産業用デュアル押出機。",
    features: ["産業用デュアル押出", "330 x 250 x 320 mm造形", "350℃高温ノズル", "アクティブチャンバー加熱"]
  },
  249: {
    description: "教育・家庭向けに頑丈なスチールフレームで造られた、堅牢な単一押出密閉プリンター。",
    features: ["頑丈なスチールフレーム", "3.5インチタッチスクリーン", "加熱ビルドプレート", "密閉構造"]
  },
  250: {
    description: "着脱式マグネットビルドプレート、Wi-Fi接続、デュアルノズル機能を備えた密閉デュアル押出機。",
    features: ["デュアルノズル押出", "着脱式マグネットベッド", "4.3インチタッチスクリーン", "Wi-Fi接続"]
  },
  251: {
    description: "静音印刷、子ども向けソフト、Wi-Fi制御を備えた教育向け密閉プリンター。",
    features: ["密閉安全フレーム", "子ども向けソフト", "静音印刷", "Wi-Fi接続"]
  },
  252: {
    description: "ABS、ナイロン、PC向けに最大300℃の交換式高温ノズルを備えた大型密閉プリンター。",
    features: ["300℃高温ノズル", "270 x 200 x 200 mm造形", "空気ろ過", "デュアルZ軸"]
  },
  253: {
    description: "エンジニアリング素材向けに300 x 250 x 300 mm造形を備えた、旗艦の大型密閉プリンター。",
    features: ["300 x 250 x 300 mm造形", "300℃高温ノズル", "5インチタッチスクリーン", "空気ろ過"]
  },
  254: {
    description: "Wi-Fi制御、静音動作、着脱式ビルドプレートを備えたコンパクト密閉デスクトップ機。",
    features: ["コンパクト密閉フレーム", "着脱式ビルドプレート", "Wi-Fi接続", "タッチスクリーンUI"]
  },
  255: {
    description: "Klipperファームウェアで500mm/s・20,000mm/s²を実現する、高速コンパクトCoreXYプリンター。",
    features: ["500mm/s CoreXY", "Klipperファームウェア", "自動ベッドレベリング", "20,000mm/s²の加速度"]
  },
  256: {
    description: "60℃チャンバー加熱、Klipperファームウェア、350℃ホットエンドを備えた高速プロCoreXY。",
    features: ["600mm/s CoreXY", "60℃アクティブ加熱チャンバー", "350℃高温ホットエンド", "Klipperファームウェア"]
  },
  257: {
    description: "65℃アクティブチャンバー加熱、350℃ホットエンド、600mm/sを備えた旗艦大型高速CoreXY。",
    features: ["325 x 325 x 315 mm造形", "65℃アクティブ加熱チャンバー", "600mm/s CoreXY", "350℃高温ホットエンド"]
  },
  258: {
    description: "最大60℃のアクティブチャンバー加熱、デュアルセンサー自動レベリング、350℃ノズルを備えた密閉高速CoreXY。",
    features: ["60℃アクティブチャンバー加熱", "デュアルセンサー自動レベリング", "350℃高温ノズル", "600mm/s CoreXY"]
  },
  259: {
    description: "単一押出の熱安定性、タッチスクリーン操作、頑丈なスチールフレームを改善したX-One更新版。",
    features: ["頑丈なスチールフレーム", "3.5インチタッチスクリーン", "加熱ビルドプレート", "密閉チャンバー"]
  },
  260: {
    description: "高温エクストルーダーアセンブリと空気ろ過を改善した、アップグレード版大型X-Max。",
    features: ["300 x 250 x 300 mm造形", "300℃高温ノズル", "空気ろ過システム", "デュアルZ軸"]
  },
  261: {
    description: "標準PLAと最大300℃の高温エンジニアリングフィラメントに対応するデュアル押出オプションを備えた洗練版X-Plus。",
    features: ["300℃高温ノズル", "270 x 200 x 200 mm造形", "デュアル押出オプション", "空気ろ過"]
  },
  262: {
    description: "65℃アクティブチャンバー加熱、370℃ハイフローノズル、自動レベリングを備えた大型QIDI Max4 CoreXY。",
    features: ["390 x 390 x 340 mm造形", "65℃アクティブ加熱チャンバー", "370℃高温ホットエンド", "800mm/s CoreXY"]
  },
  263: {
    description: "Klipperモーション制御、アクティブチャンバー加熱、自動レベリングを備えた、密閉型Q1 Pro CoreXY。",
    features: ["密閉CoreXYモーション", "60℃アクティブチャンバー加熱", "自動ベッドレベリング", "Klipperファームウェア"]
  },
  264: {
    description: "アクティブチャンバー加熱、350℃ノズル、ハイフロー押出を備えた次世代Qシリーズ密閉CoreXY。",
    features: ["60℃アクティブチャンバー加熱", "350℃高温ホットエンド", "600mm/s CoreXY", "自動ベッドレベリング"]
  },
  265: {
    description: "詳細なエンジニアリングモデル向けに、追加の0.2mm高精度ノズルキットを備えた密閉単一押出機。",
    features: ["260 x 200 x 200 mm造形", "高精度0.2mmノズル", "3.5インチタッチスクリーン", "静音印刷"]
  },
  266: {
    description: "高硬度カーボンファイバーホットエンド、ドライボックス、アクティブ熱管理を備えたプロ用カーボンファイバー専用機。",
    features: ["カーボンファイバーホットエンド", "300 x 250 x 300 mm造形", "密閉ドライボックス付属", "デュアルZ軸モーション"]
  },
  267: {
    description: "70℃アクティブチャンバー加熱、内蔵マテリアルステーション、自動エア管理を備えた産業グレードのデュアル押出機。",
    features: ["70℃アクティブ加熱チャンバー", "産業用デュアル押出", "自動マテリアルステーション", "一体型Air Manager"]
  },
  268: {
    description: "60℃アクティブチャンバー加熱、デュアルパフォーマンスエクストルーダー、水溶性サポートを備えたプロ仕様デュアル押出機。",
    features: ["60℃アクティブ加熱チャンバー", "デュアルパフォーマンスエクストルーダー", "水溶性PVAサポート", "超剛性メタルシャーシ"]
  },
  269: {
    description: "反りなく本物のエンジニアリングABS、ASA、特殊ポリマーを印刷できる、100℃アクティブ加熱チャンバーを備えたMethod。",
    features: ["100℃アクティブ加熱チャンバー", "ABS・ASA対応", "溶解性SR-30サポート", "産業級の寸法精度"]
  },
  270: {
    description: "100℃加熱チャンバー、加熱ビルドプレート、RapidRinse溶解性サポートを備えた大型産業デスクトップ機。",
    features: ["305 x 305 x 320 mm造形", "100℃アクティブ加熱チャンバー", "RapidRinseサポート対応", "産業用デュアル押出"]
  },
  271: {
    description: "内蔵パティキュレートフィルター、タッチスクリーン操作、クラウド印刷管理を備えた教室向け密閉機。",
    features: ["密閉安全設計", "パティキュレートエアフィルター", "MakerBot Cloud", "加熱フレキシブルビルドプレート"]
  },
  272: {
    description: "220 x 200 x 250 mm造形、内蔵カメラ、デュアルろ過を備えた教室向け拡大版3Dプリンター。",
    features: ["220 x 200 x 250 mm造形", "パティキュレート・カーボンフィルター", "MakerBot Cloud", "内蔵カメラ"]
  },
  273: {
    description: "高速な教室での反復とPLA/PETGの迅速な出力を実現する、教育向け高速CoreXYプリンター。",
    features: ["500mm/s高速CoreXY", "密閉安全設計", "ノズル高速加熱", "MakerBot Cloud"]
  },
  274: {
    description: "3.5インチタッチスクリーン、プラスチック合金ボディ、内蔵スプールホルダーを備えた、定番の密閉デュアル押出デスクトップ機。",
    features: ["密閉プラスチック合金ボディ", "デュアル押出", "3.5インチタッチスクリーン", "Wi-Fi接続"]
  },
  275: {
    description: "手軽な密閉PLA/ABS/PETG印刷に特化した、定番Dreamerの単一押出バリアント。",
    features: ["単一押出", "密閉チャンバー", "3.5インチタッチスクリーン", "Wi-Fi接続"]
  },
  276: {
    description: "内蔵HDカメラ、停電復旧、内部温度制御ファンを備えた密閉デュアル押出プリンター。",
    features: ["密閉チャンバー", "デュアル押出", "内蔵HDカメラ", "停電復旧"]
  },
  277: {
    description: "教室向けにドア安全センサーと子どもに安全な非加熱ビルドプレートを備えた、コンパクト密閉単一押出機。",
    features: ["ドア安全センサー", "安全な非加熱ビルドプレート", "密閉コンパクトボディ", "補助ベッドレベリング"]
  },
  278: {
    description: "教育現場での遠隔映像監視用に内蔵カメラを追加した、更新版Inventor II。",
    features: ["内蔵カメラ", "ドア安全センサー", "密閉コンパクトボディ", "Wi-Fi印刷"]
  },
  279: {
    description: "CR Touch自動ベッドレベリング、PCばね鋼プレート、フルメタルボーデン式エクストルーダーを備えたEnder-3 V2。",
    features: ["CR Touch自動レベリング", "PCばね鋼マグネットベッド", "フルメタルエクストルーダー", "静音32ビット基板"]
  },
  280: {
    description: "CR Touch自動ベッドレベリング、デュアルZ軸モーター、静音32ビット基板を備えた大型Ender-3 Max。",
    features: ["300 x 300 x 320 mm造形", "CR Touch自動レベリング", "デュアルZ軸リードスクリュー", "静音基板"]
  },
  281: {
    description: "450 x 450 x 470 mm造形、マトリックスベッド加熱、プルロッドフレーム、BLTouchレベリングを備えた巨大CR-10。",
    features: ["450 x 450 x 470 mm造形", "BLTouch自動レベリング", "プルロッドフレーム補強", "マトリックス加熱ベッド"]
  },
  282: {
    description: "デュアルY軸リニアレール、Spriteダイレクトドライブ、450 x 450 x 470 mm造形を備えた産業グレードのプリントファーム向け機。",
    features: ["450 x 450 x 470 mm造形", "デュアルY軸リニアレール", "Spriteダイレクトドライブ", "複数台ファーム制御"]
  },
  283: {
    description: "透明チャンバー壁、スマートフィラメントセンサー、内蔵LEDライトを備えた完全密閉デスクトップFDM。",
    features: ["完全密閉チャンバー", "透明チャンバー壁", "フィラメント切れセンサー", "4.3インチタッチスクリーン"]
  },
  284: {
    description: "Spriteダイレクトドライブ、CR Touch自動ベッドレベリング、高温印刷対応を備えたCR-200Bアップグレード版。",
    features: ["Spriteダイレクトドライブエクストルーダー", "CR Touch自動レベリング", "完全密閉チャンバー", "Wi-Fiクラウド制御"]
  },
  285: {
    description: "300 x 300 x 400 mm造形、デュアルXYリニアガイド、HEPAエアフィルターを備えた産業用密閉機。",
    features: ["300 x 300 x 400 mm造形", "デュアルXY軸リニアガイド", "HEPA空気ろ過", "密閉産業ボディ"]
  },
  286: {
    description: "産業試作や特大モデル向けの、13.3インチ4KモノクロLCD大型レジンプリンター。",
    features: ["13.3インチ4KモノクロLCD", "293 x 165 x 300 mm造形", "積分型光源", "AIブレインチップ"]
  },
  287: {
    description: "アンチエイリアスと一体型空気ろ過を備えた、Crealityの定番格安2K RGB LCDレジン機。",
    features: ["2K RGB LCD", "空気ろ過システム", "アンチエイリアス技術", "ボールスクリューZ軸"]
  },
  288: {
    description: "2K解像度と2秒の積層硬化時間を実現する、LD-002のモノクロLCDアップグレード版。",
    features: ["2KモノクロLCD", "2秒の高速積層硬化", "マトリックスUV光源", "空気ろ過システム"]
  },
  289: {
    description: "8.9インチ4KモノクロLCD、デュアルリニアZ軸レール、方向性エアフィルターを備えた大型レジン機。",
    features: ["8.9インチ4KモノクロLCD", "デュアルZ軸リニアレール", "マトリックスUV光源", "4.3インチカラータッチスクリーン"]
  },
  290: {
    description: "65℃アクティブチャンバー加熱、370℃ホットエンド、Klipperモーションを備えた密閉CoreXY高速機。",
    features: ["305 x 305 x 280 mm造形", "65℃アクティブ加熱チャンバー", "370℃高温ホットエンド", "600mm/s CoreXY"]
  },
  291: {
    description: "デュアルZ軸リニアレールとデュアル活性炭エアフィルターを備えた、QIDIのエントリー2K LCDレジン機。",
    features: ["2K LCDスクリーン", "デュアルZ軸リニアレール", "デュアルカーボンフィルター", "3.5インチタッチスクリーン"]
  },
  292: {
    description: "産業用Z軸構造と高精度を備えた、10.1インチ2KモノクロLCD大型レジン機。",
    features: ["10.1インチ2KモノクロLCD", "大型造形サイズ", "産業用Z軸構造", "自動レベリングビルドプレート"]
  },
  293: {
    description: "5.96インチ2KモノクロLCDと超高速1.4秒の積層露光を備えた、高速MSLAレジンプリンター。",
    features: ["5.96インチ2KモノクロLCD", "1.4秒の積層硬化", "自動チルト機構", "Wi-Fi・Ethernet制御"]
  },
  294: {
    description: "エンジニアリングポリマー向けに500℃ノズルと90℃アクティブ加熱チャンバーを備えた、産業用高温デルタ3Dプリンター。",
    features: ["500℃高温ノズル", "90℃アクティブ加熱チャンバー", "高速デルタモーション", "産業素材対応"]
  },
  295: {
    description: "12.8インチ6KモノクロLCD、フルメタル構造、自動レジンフィーダーを備えた、初代大型Jupiterレジン機。",
    features: ["12.8インチ6KモノクロLCD", "自動レジンフィーダー", "フルメタルシャーシ", "5インチタッチスクリーン"]
  },
  296: {
    description: "超高解像度16K 12.8インチモノクロLCDと自動レジン管理を備えた、次世代旗艦レジン機。",
    features: ["16K 12.8インチモノクロLCD", "自動レジン管理", "チルトリリース機構", "Wi-Fi接続"]
  },
  297: {
    description: "チルトリリース、自動レベリング、AI不良検知を備えた、超高解像度16KモノクロLCDレジン機。",
    features: ["16K 10インチモノクロLCD", "チルトリリース機構", "自動ベッドレベリング", "AI不良検知"]
  },
  298: {
    description: "9.1インチ6KモノクロLCDとCOB光源でミニチュア造形を拡大した、ミッドサイズMars 4レジン機。",
    features: ["9.1インチ6KモノクロLCD", "COB光源", "拡大造形サイズ", "強化ガラス保護板"]
  },
  299: {
    description: "チルトリリース技術、4KモノクロLCD、AIカメラ監視、自動レベリングを備えた上位Mars 5。",
    features: ["4KモノクロLCD", "チルトリリース技術", "AIカメラ監視", "自動ベッドレベリング"]
  },
  300: {
    description: "200mm立方の造形サイズを手頃な価格で提供した、XYZprintingの先駆的な格安密閉3Dプリンター。",
    features: ["密閉造形チャンバー", "加熱プリントベッド", "EZロードフィラメントカセット", "2.6インチLCMディスプレイ"]
  },
  301: {
    description: "ABS印刷に加えて正式なPLAフィラメント対応を追加した、更新版da Vinci 1.0。",
    features: ["密閉造形チャンバー", "ABS・PLA対応", "加熱プリントベッド", "EZロードカートリッジ"]
  },
  302: {
    description: "ABS/PLAの2色・多素材印刷を実現する、密閉デュアル押出3Dプリンター。",
    features: ["デュアル押出ノズル", "密閉造形チャンバー", "加熱プリントベッド", "2色印刷"]
  },
  303: {
    description: "デュアルスキャンレーザー3Dスキャナーを内蔵し、そのままコピー＆プリントできるオールインワン機。",
    features: ["内蔵3Dレーザースキャナー", "密閉造形チャンバー", "加熱プリントベッド", "スキャンtoプリント"]
  },
  304: {
    description: "オープンフィラメント対応、アルミ加熱ベッド、Wi-Fi接続を備えたマニア向けProモデル。",
    features: ["オープンフィラメント", "アルミ加熱ベッド", "Wi-Fi接続", "オプションのレーザー彫刻"]
  },
  305: {
    description: "オープンフィラメント3D印刷、3Dスキャン、オプションのレーザー彫刻を一体化した多機能デスクトップ機。",
    features: ["オープンフィラメント3D印刷", "一体型3Dスキャナー", "オプションのレーザー彫刻", "Wi-Fi接続"]
  },
  306: {
    description: "非加熱ベッドと自動キャリブレーションで、教室や初心者向けに安全に設計されたコンパクト密閉機。",
    features: ["密閉安全設計", "非加熱プリントベッド", "自動キャリブレーション", "NFCフィラメント"]
  },
  307: {
    description: "クラウド印刷対応、非加熱ベッド、密閉構造を備えたワイヤレス対応da Vinci Jr。",
    features: ["Wi-Fi接続", "密閉安全設計", "自動キャリブレーション", "クラウド印刷管理"]
  },
  308: {
    description: "色の混色とグラデーション表現を可能にする、デュアル送給・単一ノズルの革新的プリンター。",
    features: ["2イン1アウトノズル", "混色・グラデーション", "Wi-Fi接続", "密閉ボディ"]
  },
  309: {
    description: "サードパーティ製1.75mmフィラメントと調整可能な印刷設定に対応する、Jrプラットフォームのプロ版。",
    features: ["オープンフィラメント", "Wi-Fi接続", "調整可能なスライサー設定", "オプションの0.3mmノズル"]
  },
  310: {
    description: "非加熱ベッドと自動キャリブレーションを備えた、軽量でカラフルな入門STEM 3Dプリンター。",
    features: ["コンパクトオープン設計", "自動キャリブレーション", "非加熱プリントベッド", "子どもに安全な無毒PLA"]
  },
  311: {
    description: "150mm造形サイズと自動ベッドレベリングを備えた、家庭・教育向けワイヤレスデスクトップ機。",
    features: ["Wi-Fi接続", "自動キャリブレーション", "軽量ポータブルフレーム", "モバイルアプリ印刷"]
  },
  312: {
    description: "300℃ノズル、100℃加熱ベッド、停電復旧を備えた大型密閉プロフェッショナル機。",
    features: ["300 x 300 x 300 mm造形", "300℃高温ノズル", "停電復旧", "オープンフィラメント"]
  },
  313: {
    description: "FDMプラスチック押出と3DColorJet CMYKインクジェットを組み合わせた、フルカラー3Dプリンター。",
    features: ["3DColorJetフルカラー", "CMYKインクカートリッジ", "EZ着脱ビルドプレート", "5インチカラータッチスクリーン"]
  },
  314: {
    description: "CMYKインクジェット混色をデスクトップサイズの造形エリアに統合した、コンパクトなフルカラー機。",
    features: ["フルカラーCMYK印刷", "コンパクトデスクトップ設計", "Wi-Fi接続", "自動キャリブレーション"]
  },
  315: {
    description: "フルカラー3D印刷、2D紙印刷、レーザー彫刻を一体化した多機能5Dマシン。",
    features: ["フルカラー3D印刷", "一体型2D紙プリンター", "レーザー彫刻モジュール", "5インチタッチスクリーン"]
  },
  316: {
    description: "405nm UVレーザーと自動レジン補充機構を採用した、デスクトップレーザーSLA 3Dプリンター。",
    features: ["405nm UVレーザーSLA", "自動レジン補充", "25µm高精度積層", "密閉UV遮断ボディ"]
  },
  317: {
    description: "130µmレーザースポット、自動レジン補充、幅広いレジンプロファイル対応を備えた強化レーザーSLA機。",
    features: ["130µmレーザースポット", "自動レジン補充", "フレキシブルレジン対応", "高いZ軸精度"]
  },
  318: {
    description: "ジュエリー鋳造、歯科モデル、微細部品向けに設計された、高精度DLPレジン3Dプリンター。",
    features: ["DLP光学エンジン", "50µm XY解像度", "鋳造用レジン対応", "コンパクトデスクトップ設計"]
  },
  319: {
    description: "剛性の高い光学キャリブレーションを備えた、歯科・エンジニアリング微細試作向けプロDLP機。",
    features: ["高精度DLPエンジン", "剛性光学アセンブリ", "ネットワーク一括管理", "エンジニアリングレジン対応"]
  },
  320: {
    description: "300℃エクストルーダー、100℃加熱ベッド、自動温度フィラメント乾燥室を備えた業務用デュアル押出FDM。",
    features: ["デュアル独立押出", "フィラメント乾燥室", "300℃高温ノズル", "産業用モーションシステム"]
  },
  321: {
    description: "30W CO2レーザーでサポート不要のナイロン部品を生産する、産業用選択的レーザー焼結（SLS）機。",
    features: ["30W CO2レーザー焼結", "サポート不要の複雑形状", "PA12・TPU粉末印刷", "不活性ガスチャンバーオプション"]
  },
  322: {
    description: "1080pモノクロLCDと2秒の高速積層硬化を備えた、Phrozenの画期的なコンパクトLCDプリンター。",
    features: ["モノクロLCD", "2秒積層露光", "コンパクト設計", "オフラインUSB印刷"]
  },
  323: {
    description: "4KモノクロLCDと35µmの微細XY画素解像度を備えた、超高解像度エントリーレジン機。",
    features: ["4KモノクロLCD", "35µm XY解像度", "ParaLED光学マトリックス", "コンパクトデスクトップ設計"]
  },
  324: {
    description: "8KモノクロLCDと驚異の22µm XY解像度を誇る、業界をリードするデスクトップ解像度プリンター。",
    features: ["8KモノクロLCD", "22µm XY解像度", "デュアルリニアZ軸レール", "ソリッドすりガラスビルドプレート"]
  },
  325: {
    description: "22µmの超高解像度ミニチュアを手頃な価格で実現する、合理化された8Kレジン機。",
    features: ["8KモノクロLCD", "22µm XY解像度", "オープンフォーマット対応", "手頃な8K価格"]
  },
  326: {
    description: "52µm XY解像度でより大きな造形サイズを提供する、9.3インチ4KモノクロLCDミッドサイズ機。",
    features: ["9.3インチ4KモノクロLCD", "200mm造形幅", "デュアルリニアZ軸", "ParaLED 3.0マトリックス"]
  },
  327: {
    description: "8K解像度、内蔵カメラ、ネットワーク接続を組み合わせた、高解像度ミッドサイズ機。",
    features: ["8K 10インチモノクロLCD", "28µm XY解像度", "内蔵カメラ・Wi-Fi", "ソリッドCNCメタルシャーシ"]
  },
  328: {
    description: "広いビルドプレート全域で19.5µm解像度を提供する12KモノクロLCDを備えた、アップグレード版Mighty。",
    features: ["12KモノクロLCD", "19.5µm XY解像度", "内蔵Wi-Fi・アプリ", "すりガラスレーザーカットプレート"]
  },
  329: {
    description: "自動レベリング、内蔵チャンバーヒーター、スマート残量検知を備えた次世代14Kレジン機。",
    features: ["14K 10.1インチモノクロLCD", "自動ベッドレベリング", "内蔵チャンバーヒーター", "スマート残量・不良検知"]
  },
  330: {
    description: "巨大な彫像、小道具、バッチ生産向けの、15インチ8KモノクロLCD産業級レジン3Dプリンター。",
    features: ["15インチ8KモノクロLCD", "330 x 185 x 400 mm造形", "事前キャリブレーション済みプレート", "高耐久デュアルリニアレール"]
  },
  331: {
    description: "高速ACFフィルムと自動レジンポンプオプションを備えた、生産志向の高速大型8Kレジン機。",
    features: ["15インチ8KモノクロLCD", "高速ACFフィルム", "330 x 185 x 300 mm造形", "自動レジンフィーダー対応"]
  },
  332: {
    description: "自動レジンフィーダー、デュアルカーボン空気清浄機、400mm Z高さを備えた、旗艦大型8Kレジン機更新版。",
    features: ["15インチ8KモノクロLCD", "自動レジンフィーダー", "デュアル空気清浄機", "330 x 185 x 400 mm造形"]
  },
  333: {
    description: "2K LCD、堅牢なCNCメタル構造、200mmのZ高さを備えた、Phrozen初期のワークホースParaLED機。",
    features: ["ParaLED光学システム", "デュアルリニアZ軸レール", "CNC加工ボディ", "タッチスクリーンUI"]
  },
  334: {
    description: "高い光均一性で造形容量を拡大した、8.9インチ2K LCDレジン機。",
    features: ["8.9インチ2K LCD", "ParaLED光学システム", "広いビルドプレート", "剛性メタルシャーシ"]
  },
  335: {
    description: "歯科・ジュエリー鋳造向けに4K LCDとParaLED 2.0光学マトリックスを備えた、高解像度コンパクトShuffle。",
    features: ["4K LCDスクリーン", "31µm XY解像度", "ParaLED 2.0マトリックス", "歯科・ジュエリー鋳造プロファイル"]
  },
  336: {
    description: "交換式13.3インチ4K LCDとデュアル5.5インチパネルオプションを備えた大型レジン機。",
    features: ["13.3インチ4K LCD", "デュアル5.5インチパネルオプション", "400mm Z軸ストローク", "ソリッドCNCアルミ構造"]
  },
  337: {
    description: "クリニックや歯科技工所向けに高輝度ParaLEDマトリックスと高速硬化を備えた、プロ用歯科認証3Dプリンター。",
    features: ["歯科認証ワークフロー", "高輝度ParaLEDマトリックス", "4KモノクロLCD", "ネットワーク一括管理"]
  },
  338: {
    description: "9.3インチ4KモノクロLCD、内蔵ヒーター、空気清浄機を備えた、プロ用歯科・臨床レジン機。",
    features: ["9.3インチ4KモノクロLCD", "内蔵ヒーター", "空気清浄機", "検証済み歯科用レジン"]
  },
  339: {
    description: "30,000mm/s²の加速度、強化メタルガントリー、多色Chroma Kit対応を備えた、高速CoreXY FDMプリンター。",
    features: ["600mm/s CoreXY", "30,000mm/s²の加速度", "Chroma Kit多色対応", "ダイレクトドライブ・ハイフロー"]
  },
  340: {
    description: "32ビット静音基板とカーボランダムガラスビルドを備えた、Voxelabの定番エントリーベッドスリンガー。",
    features: ["カーボランダムガラスベッド", "静音32ビット基板", "Vスロットアルミフレーム", "カラー画面ディスプレイ"]
  },
  341: {
    description: "一体型キャリーハンドル、フィラメント切れ検知、縦型カラーLCDを備えた洗練版Aquila。",
    features: ["フィラメント切れ検知", "一体型キャリーハンドル", "カーボランダムガラスベッド", "中断再開機能"]
  },
  342: {
    description: "モノクロロータリーノブ画面とテクスチャ付きシールベッドを備えた、予算重視のAquilaバリアント。",
    features: ["格安エントリー価格", "テクスチャ付きビルド面", "ボーデン式エクストルーダー", "中断再開機能"]
  },
  343: {
    description: "300℃ダイレクトドライブオールメタルエクストルーダーとPEIフレキシブルマグネットプレートを備えた高温Aquila。",
    features: ["300℃ダイレクトドライブエクストルーダー", "PEIマグネットビルドプレート", "オールメタルホットエンド", "幅広いフィラメント対応"]
  },
  344: {
    description: "25ポイント自動レベリング、X/Yデュアルリニアレール、デュアルZ軸、300℃ダイレクトドライブを備えた上位Aquila。",
    features: ["25ポイント自動レベリング", "X/Y軸リニアレール", "デュアルZ軸リードスクリュー", "300℃ダイレクトドライブ"]
  },
  345: {
    description: "25ポイント自動レベリング、PEIばね鋼ベッド、高速ノズル加熱を備えた第3世代Aquila。",
    features: ["25ポイント自動レベリング", "PEIばね鋼ベッド", "フィラメント切れセンサー", "中断再開機能"]
  },
  346: {
    description: "300mm立方造形、デュアルZ軸、25ポイント自動レベリングを備えた大型Aquila X3。",
    features: ["300 x 300 x 300 mm造形", "25ポイント自動レベリング", "デュアルZ軸リードスクリュー", "PEIマグネットビルドプレート"]
  },
  347: {
    description: "自動ベッドレベリングと強化デュアルZ軸フレームを備えた、400mm立方造形の特大Aquila。",
    features: ["400mm立方造形", "自動ベッドレベリング", "デュアルZ軸サポート", "PEIばね鋼プレート"]
  },
  348: {
    description: "300℃ダイレクトドライブ、自動レベリング、デュアルZ軸、PEIマグネットプレートを備えた高温S3。",
    features: ["300℃ダイレクトドライブ", "自動ベッドレベリング", "デュアルZ軸リードスクリュー", "PEIフレキシブルプレート"]
  },
  349: {
    description: "一体型デュアルZ軸設計、Wi-Fi印刷、タッチスクリーンUIを備えたセミ密閉デスクトップ機。",
    features: ["セミ密閉ボディ", "デュアルZ軸設計", "4.3インチタッチスクリーン", "Wi-Fiクラウド印刷"]
  },
  350: {
    description: "2秒の積層硬化とコンパクトなデスクトップボディを備えた、扱いやすい2KモノクロLCDレジン機。",
    features: ["2KモノクロLCD", "2秒の高速積層硬化", "リニアZ軸レール", "3.5インチタッチスクリーン"]
  },
  351: {
    description: "卓上ミニチュア向けに35µm XY解像度を提供する4KモノクロLCDを備えた、アップグレード版Proxima。",
    features: ["4KモノクロLCD", "35µm XY解像度", "デュアルリニアZ軸レール", "フルメタルシャーシ"]
  },
  352: {
    description: "予算内でレジン印刷を学ぶ初心者向けの、エントリーRGB LCDレジン3Dプリンター。",
    features: ["2K LCDスクリーン", "コンパクト設計", "UV遮断フード", "簡単レベリングビルドプレート"]
  },
  353: {
    description: "デュアルZ軸リードスクリューとダイレクトエクストルーダーを備えた、Sovolのデビュー作ダイレクトドライブカーテシアン機。",
    features: ["ダイレクトドライブエクストルーダー", "デュアルZ軸リードスクリュー", "240 x 280 x 300 mm造形", "ガラスビルドプレート"]
  },
  354: {
    description: "CR Touch自動レベリング、PEIばね鋼プレート、32ビット静音基板、タッチスクリーンを備えた更新版SV01。",
    features: ["CR Touch自動レベリング", "PEIばね鋼プレート", "静音32ビット基板", "タッチスクリーンUI"]
  },
  355: {
    description: "単一ノズルで2色・グラデーション印刷を可能にする、デュアル押出2イン1アウトのカーテシアン機。",
    features: ["2イン1アウトデュアル押出", "デュアルZ軸リードスクリュー", "タッチスクリーンディスプレイ", "中断再開機能"]
  },
  356: {
    description: "巨大な350 x 350 x 400 mm造形サイズとBLTouchレベリングを備えた、大型ダイレクトドライブ機。",
    features: ["350 x 350 x 400 mm造形", "ダイレクトドライブエクストルーダー", "BLTouch自動レベリング", "MeanWell電源"]
  },
  357: {
    description: "2色、複製、ミラー、水溶性サポート印刷に対応する、大型Independent Dual Extruder（IDEX）機。",
    features: ["IDEXデュアルエクストルーダー", "300 x 300 x 400 mm造形", "自動ベッドレベリング", "ミラー・複製モード"]
  },
  358: {
    description: "X/Yで固定されたビルドプレート、ダイレクトドライブ、CR Touchレベリングを備えたキューブフレーム機。",
    features: ["キューブフレーム設計", "X-Y固定ベッド", "ダイレクトドライブエクストルーダー", "CR Touch自動レベリング"]
  },
  359: {
    description: "オールメタル遊星ダイレクトエクストルーダー、誘導式プローブ、デュアルZ軸を備えた、Prusa MK3着想のオープンソース機。",
    features: ["遊星ギアダイレクトドライブ", "オールメタル300℃ホットエンド", "誘導式自動レベリング", "PEIフレキシブルシート"]
  },
  360: {
    description: "ハイフローオールメタルホットエンド、300 x 300 x 340 mm造形、タッチUIを備えた拡大版SV06。",
    features: ["300 x 300 x 340 mm造形", "ハイフローオールメタルホットエンド", "遊星ギアダイレクトドライブ", "誘導式自動レベリング"]
  },
  361: {
    description: "最大500mm/s、入力整形、ネットワーク制御を実現する、Klipper搭載版SV06 Plus。",
    features: ["500mm/s Klipperモーション", "300 x 300 x 340 mm造形", "入力整形キャリブレーション", "遊星ギアダイレクトドライブ"]
  },
  362: {
    description: "ハイフロー遊星エクストルーダー、大型補助冷却ファン、入力整形を備えた高速Klipperベッドスリンガー。",
    features: ["500mm/s Klipperモーション", "補助ブロワーファン", "遊星ギアダイレクトドライブ", "誘導式自動レベリング"]
  },
  363: {
    description: "300 x 300 x 350 mm造形、高速冷却、500mm/s動作を備えた大型Klipperベッドスリンガー。",
    features: ["300 x 300 x 350 mm造形", "500mm/s Klipperモーション", "補助冷却アレイ", "300℃ハイフローホットエンド"]
  },
  364: {
    description: "クアッドZ軸レベリング、Klipper OS、700mm/sを備えた、Voron 2.4着想のオープンソースCoreXY機。",
    features: ["クアッドZ独立レベリング", "350 x 350 x 345 mm造形", "700mm/s CoreXY", "40,000mm/s²の加速度"]
  },
  365: {
    description: "完全密閉チャンバー、クアッドZレベリング、高速動作を備えた特大産業級CoreXYプリンター。",
    features: ["500mm立方造形", "クアッドZレベリング", "700mm/s CoreXY", "密閉チャンバー"]
  },
  366: {
    description: "リニアレール、Klipperモーションプランナー、オールメタルダイレクトドライブツールヘッドを備えた高速ベッドスリンガー。",
    features: ["リニアレールモーション", "500mm/sの速度", "Klipperファームウェア", "300mm立方造形"]
  },
  367: {
    description: "巨大な500mm立方造形エリア、4基の高トルクZモーター、Klipper速度を備えた産業級ベッドスリンガー。",
    features: ["500 x 500 x 500 mm造形", "クアッドZ軸モーター", "ハイフローダイレクトドライブ", "Klipperファームウェア"]
  },
  368: {
    description: "405nm UVレーザーを搭載した、Formlabsの先駆的な精密デスクトップ光造形（SLA）3Dプリンター。",
    features: ["405nmバイオレットレーザー", "25µmの高精度積層", "ガルバノメーター式スキャナー", "ピール機構"]
  },
  369: {
    description: "自動レジンカートリッジ供給、加熱レジンタンク、スライド式ピール機構を備えた業界標準のSLA機。",
    features: ["自動レジン供給", "加熱レジンタンク", "スライド式ピール機構", "タッチスクリーン・Wi-Fi"]
  },
  370: {
    description: "フレキシブルレジンタンクと独自のLight Processing Unit（LPU）を備えた、Low Force Stereolithography（LFS）機。",
    features: ["Low Force Stereolithography", "Light Processing Unit（LPU）", "フレキシブルレジンタンク", "スマートセンサー・遠隔印刷"]
  },
  371: {
    description: "歯科・医療向け生体適合レジンとサージカルガイドに対応検証された、上位デスクトップLFS機。",
    features: ["医療・歯科認証", "生体適合レジン対応", "Light Processing Unit（LPU）", "検証済み臨床ワークフロー"]
  },
  372: {
    description: "改良されたHigh-Power LPU、自動温度安定化、クイックリリース式ビルドプラットフォームを備えた洗練版LFS機。",
    features: ["High-Power LPU", "Build Platform 2クイックリリース", "高速レーザースキャン", "強化熱管理"]
  },
  373: {
    description: "高速印刷と簡単な取り出しで生体適合用途に最適化された、医療・歯科向けLFS機。",
    features: ["生体適合検証済み", "Build Platform 2クイックリリース", "High-Power LPU", "臨床品質保証"]
  },
  374: {
    description: "フルスケール試作と高スループット生産に向け、デュアルLight Processing Unitで駆動する大型LFS機。",
    features: ["335 x 200 x 300 mm造形", "デュアルLight Processing Unit", "デュアルレジンカートリッジ", "自動レジン供給"]
  },
  375: {
    description: "解剖モデル、医療機器、大量の歯科用アプライアンス向けに設計された、大型生体適合3Dプリンター。",
    features: ["335 x 200 x 300 mm造形", "生体適合・歯科/医療", "デュアルLPU", "自動レジン管理"]
  },
  376: {
    description: "最大5倍高速の印刷、50µm画素、99%の印刷成功率を実現する、超高速Low Force Display（LFD）mSLA機。",
    features: ["Low Force Display（LFD）", "最大5倍の高速印刷", "50µm画素サイズ", "自動レジン処理"]
  },
  377: {
    description: "30種類以上の検証済み生体適合素材と迅速な臨床対応を備えた、医療・歯科向けLFD機。",
    features: ["検証済み生体適合ライブラリ", "Low Force Display（LFD）", "超高速臨床生産", "50µm画素精度"]
  },
  378: {
    description: "大型で生産グレードのレジン部品向けに、353 x 196 x 350 mm造形を備えた大型Low Force Display（LFD）機。",
    features: ["353 x 196 x 350 mm造形", "Low Force Display（LFD）", "超高速大型造形", "デュアルレジンカートリッジ"]
  },
  379: {
    description: "サポート構造なしで量産可能なナイロン部品を生産する、コンパクトな産業用選択的レーザー焼結（SLS）機。",
    features: ["10WファイバーレーザーSLS", "サポート不要のナイロン印刷", "Surface Armor技術", "70%の粉末リフレッシュ率"]
  },
  380: {
    description: "産業用ナイロン・TPU部品向けに窒素パージオプションを備えた、高スループット30WファイバーレーザーSLS機。",
    features: ["30WファイバーレーザーSLS", "窒素パージ対応", "最大2倍の高速焼結", "無駄のない粉末リフレッシュ"]
  },
  381: {
    description: "自動レベリング、AI支援監視、ダイレクトドライブエクストルーダーを備えた、AnkerMake初の高速FDMプリンター。",
    features: ["最大500mm/s", "AIカメラ監視", "自動ベッドレベリング", "ダイレクトドライブエクストルーダー"]
  },
  382: {
    description: "自動レベリング、アプリ制御、シンプルでコンパクトな設計を備えた、AnkerMakeの高速プリンター。",
    features: ["最大500mm/s", "自動ベッドレベリング", "アプリ・Bluetooth制御", "ダイレクトドライブエクストルーダー"]
  },
  383: {
    description: "3Dプリント、レーザー、CNCモジュールを交換できる、Snapmaker初のモジュラー式デスクトッププラットフォーム。",
    features: ["モジュラー式ツールヘッド", "3Dプリントモジュール", "レーザー彫刻モジュール", "CNC加工モジュール"]
  },
  384: {
    description: "3Dプリント、レーザー、CNC加工の各モジュールを交換できる、コンパクトなSnapmaker 2.0。",
    features: ["230 x 250 x 235 mm造形", "モジュラー式ツールシステム", "レーザー彫刻モジュール", "CNC加工モジュール"]
  },
  385: {
    description: "フルサイズの3D印刷、レーザー彫刻、CNC加工に対応する、大型Snapmaker 2.0モジュラー機。",
    features: ["320 x 350 x 330 mm造形", "モジュラー式ツールシステム", "レーザー彫刻モジュール", "CNC加工モジュール"]
  },
  386: {
    description: "デュアル押出3D印刷、レーザー加工、CNC加工を組み合わせた、大型密閉モジュラー工作機。",
    features: ["400 x 400 x 400 mm造形", "デュアル押出", "10Wレーザーモジュール", "CNC加工モジュール"]
  },
  387: {
    description: "複製、ミラー、多素材モードに対応する、高速独立デュアル押出デスクトッププリンター。",
    features: ["独立デュアル押出", "最大350mm/s", "複製・ミラーモード", "自動ベッドレベリング"]
  },
  388: {
    description: "小さな設置面積で高速な密閉印刷を実現する、オープンソースのコンパクトCoreXYキット。",
    features: ["コンパクトCoreXY", "密閉チャンバー", "Klipperファームウェア", "オープンソース設計"]
  },
  389: {
    description: "3点式Z軸、Klipper制御、豊富なコミュニティサポートを備えた、オープンソース密閉CoreXYキット。",
    features: ["CoreXYモーション", "3点式Zベッド", "密閉チャンバー", "オープンソース設計"]
  },
  390: {
    description: "CANVAS 4色システムを同梱し、シンプルで安定したマルチカラープリントを実現する高速CoreXYプリンター。",
    features: ["CANVAS 4色システム", "印刷中のカラー切替", "500mm/s CoreXY動作", "自動キャリブレーション"]
  }
};
