export type LangCode = "en" | "es" | "fr" | "pt" | "de" | "ar" | "hi" | "ja";

export const LANGUAGES: { code: LangCode; label: string; flag: string; voice: string }[] = [
  { code: "en", label: "English",    flag: "🇬🇧", voice: "en-US" },
  { code: "es", label: "Español",    flag: "🇪🇸", voice: "es-ES" },
  { code: "fr", label: "Français",   flag: "🇫🇷", voice: "fr-FR" },
  { code: "pt", label: "Português",  flag: "🇧🇷", voice: "pt-BR" },
  { code: "de", label: "Deutsch",    flag: "🇩🇪", voice: "de-DE" },
  { code: "ar", label: "العربية",    flag: "🇸🇦", voice: "ar-SA" },
  { code: "hi", label: "हिंदी",       flag: "🇮🇳", voice: "hi-IN" },
  { code: "ja", label: "日本語",      flag: "🇯🇵", voice: "ja-JP" },
];

// Copilot response templates per language
type Intent = "seat" | "food" | "washroom" | "traffic" | "default" | "listening" | "greet";
export const COPILOT: Record<LangCode, Record<Intent, string>> = {
  en: {
    seat: "Optimal route: Gate 4, escalator B, row 22, seat 14. ETA 3 minutes.",
    food: "Shortest queue is Taco Cantina, two minutes on level two.",
    washroom: "Nearest accessible washroom is 40 meters north in sector B.",
    traffic: "Leave in 12 minutes on Metro Line A to beat 82% congestion.",
    default: "Routing your request through the digital twin. Recommendations updated on screen.",
    listening: "Listening.",
    greet: "Stadium Copilot online. How can I help?",
  },
  es: {
    seat: "Ruta óptima: puerta 4, escalera B, fila 22, asiento 14. Llegada en tres minutos.",
    food: "La fila más corta es Taco Cantina, dos minutos, nivel dos.",
    washroom: "El baño accesible más cercano está a 40 metros al norte, sector B.",
    traffic: "Sal en 12 minutos por la línea A del metro para evitar el 82% de congestión.",
    default: "Enrutando tu petición por el gemelo digital. Recomendaciones actualizadas en pantalla.",
    listening: "Escuchando.",
    greet: "Copiloto del estadio en línea. ¿En qué te ayudo?",
  },
  fr: {
    seat: "Itinéraire optimal : porte 4, escalator B, rangée 22, siège 14. Arrivée dans 3 minutes.",
    food: "File la plus courte : Taco Cantina, deux minutes, niveau deux.",
    washroom: "Toilettes accessibles les plus proches à 40 mètres au nord, secteur B.",
    traffic: "Partez dans 12 minutes par la ligne A du métro pour éviter 82% de congestion.",
    default: "Requête routée via le jumeau numérique. Recommandations mises à jour à l'écran.",
    listening: "J'écoute.",
    greet: "Copilote du stade en ligne. Comment puis-je aider ?",
  },
  pt: {
    seat: "Rota ideal: portão 4, escada B, fila 22, assento 14. Três minutos de caminho.",
    food: "Fila mais curta na Taco Cantina, dois minutos, nível dois.",
    washroom: "Banheiro acessível mais próximo a 40 metros ao norte, setor B.",
    traffic: "Saia em 12 minutos pela Linha A do metrô para evitar 82% de congestionamento.",
    default: "Roteando o pedido pelo gêmeo digital. Recomendações atualizadas na tela.",
    listening: "Ouvindo.",
    greet: "Copiloto do estádio online. Como posso ajudar?",
  },
  de: {
    seat: "Optimale Route: Tor 4, Rolltreppe B, Reihe 22, Platz 14. Drei Minuten Ankunft.",
    food: "Kürzeste Schlange: Taco Cantina, zwei Minuten, Ebene zwei.",
    washroom: "Nächste barrierefreie Toilette 40 Meter nördlich in Sektor B.",
    traffic: "In 12 Minuten mit Metrolinie A losfahren, um 82% Stau zu umgehen.",
    default: "Anfrage über den digitalen Zwilling geleitet. Empfehlungen auf dem Bildschirm.",
    listening: "Ich höre zu.",
    greet: "Stadion-Copilot online. Wie kann ich helfen?",
  },
  ar: {
    seat: "المسار الأمثل: البوابة ٤، السلم ب، الصف ٢٢، المقعد ١٤. الوصول خلال ٣ دقائق.",
    food: "أقصر طابور في تاكو كانتينا، دقيقتان، المستوى الثاني.",
    washroom: "أقرب دورة مياه مؤهلة على بعد ٤٠ متراً شمالاً في القطاع ب.",
    traffic: "غادر بعد ١٢ دقيقة عبر خط المترو أ لتجنب ازدحام ٨٢٪.",
    default: "تم توجيه طلبك عبر التوأم الرقمي. تم تحديث التوصيات على الشاشة.",
    listening: "أستمع.",
    greet: "مساعد الملعب متصل. كيف يمكنني المساعدة؟",
  },
  hi: {
    seat: "सर्वोत्तम मार्ग: गेट 4, एस्केलेटर B, पंक्ति 22, सीट 14. तीन मिनट में पहुँच।",
    food: "सबसे छोटी लाइन टाको कैंटीना पर है, दो मिनट, स्तर दो।",
    washroom: "निकटतम सुलभ शौचालय 40 मीटर उत्तर में सेक्टर B में है।",
    traffic: "82% भीड़ से बचने के लिए मेट्रो लाइन A से 12 मिनट में निकलें।",
    default: "आपका अनुरोध डिजिटल ट्विन से रूट किया जा रहा है। स्क्रीन पर सुझाव अपडेट हैं।",
    listening: "सुन रहा हूँ।",
    greet: "स्टेडियम कोपायलट ऑनलाइन। मैं कैसे मदद करूँ?",
  },
  ja: {
    seat: "最適ルート：ゲート4、エスカレーターB、22列14番席。到着まで3分です。",
    food: "最短行列はタコカンティーナ、2分、レベル2です。",
    washroom: "最寄りのバリアフリートイレはセクターBの40メートル北にあります。",
    traffic: "82%の混雑を避けるため、12分後にメトロA線で出発してください。",
    default: "リクエストをデジタルツインで処理中。画面上のレコメンドを更新しました。",
    listening: "聞いています。",
    greet: "スタジアムコパイロット、オンライン。ご用件は？",
  },
};

export function classifyIntent(q: string): Intent {
  const s = q.toLowerCase();
  if (/(seat|asiento|siège|assento|platz|मौسम|مقعد|席)/i.test(s)) return "seat";
  if (/(food|eat|stall|comida|nourriture|comida|essen|طعام|खाना|食)/i.test(s)) return "food";
  if (/(washroom|toilet|restroom|baño|toilette|banheiro|toilette|حمام|शौच|トイレ)/i.test(s)) return "washroom";
  if (/(leave|traffic|metro|tráfico|circulation|tráfego|verkehr|مرور|ट्रैफ़िक|交通)/i.test(s)) return "traffic";
  return "default";
}
