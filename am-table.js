var conversion = [
  {"l":"ሀ", "t":"hä"},
  {"l":"ለ", "t":"lä"},
  {"l":"ሐ", "t":"hä"},
  {"l":"መ", "t":"mä"},
  {"l":"ሠ", "t":"sä"},
  {"l":"ረ", "t":"rä"},
  {"l":"ሰ", "t":"sä"},
  {"l":"ሸ", "t":"šä"},
  {"l":"ቀ", "t":"qä"},
  {"l":"በ", "t":"bä"},
  {"l":"ተ", "t":"tä"},
  {"l":"ቸ", "t":"čä"},
  {"l":"ኀ", "t":"hä"},
  {"l":"ነ", "t":"nä"},
  {"l":"ኘ", "t":"ñä"},
  {"l":"አ", "t":"ʾä"},
  {"l":"ከ", "t":"kä"},
  {"l":"ኸ", "t":"hä"},
  {"l":"ወ", "t":"wä"},
  {"l":"ዐ", "t":"ʾä"},
  {"l":"ዘ", "t":"zä"},
  {"l":"ዠ", "t":"žä"},
  {"l":"የ", "t":"yä"},
  {"l":"ደ", "t":"dä"},
  {"l":"ጀ", "t":"ǧä"},
  {"l":"ገ", "t":"gä"},
  {"l":"ጠ", "t":"t'ä"},
  {"l":"ጨ", "t":"č'ä"},
  {"l":"ጰ", "t":"p'ä"},
  {"l":"ጸ", "t":"s'ä"},
  {"l":"ፀ", "t":"s'ä"},
  {"l":"ፈ", "t":"fä"},
  {"l":"ፐ", "t":"pä"},
  {"l":"ሁ", "t":"hu"},
  {"l":"ሉ", "t":"lu"},
  {"l":"ሑ", "t":"hu"},
  {"l":"ሙ", "t":"mu"},
  {"l":"ሡ", "t":"su"},
  {"l":"ሩ", "t":"ru"},
  {"l":"ሱ", "t":"su"},
  {"l":"ሹ", "t":"šu"},
  {"l":"ቁ", "t":"qu"},
  {"l":"ቡ", "t":"bu"},
  {"l":"ቱ", "t":"tu"},
  {"l":"ቹ", "t":"ču"},
  {"l":"ኁ", "t":"hu"},
  {"l":"ኑ", "t":"nu"},
  {"l":"ኙ", "t":"ñu"},
  {"l":"ኡ", "t":"ʾu"},
  {"l":"ኩ", "t":"ku"},
  {"l":"ኹ", "t":"hu"},
  {"l":"ዉ", "t":"wu"},
  {"l":"ዑ", "t":"ʾu"},
  {"l":"ዙ", "t":"zu"},
  {"l":"ዡ", "t":"žu"},
  {"l":"ዩ", "t":"yu"},
  {"l":"ዱ", "t":"du"},
  {"l":"ጁ", "t":"ǧu"},
  {"l":"ጉ", "t":"gu"},
  {"l":"ጡ", "t":"t'u"},
  {"l":"ጩ", "t":"č'u"},
  {"l":"ጱ", "t":"p'u"},
  {"l":"ጹ", "t":"s'u"},
  {"l":"ፁ", "t":"s'u"},
  {"l":"ፉ", "t":"fu"},
  {"l":"ፑ", "t":"pu"},
  {"l":"ሂ", "t":"hi"},
  {"l":"ሊ", "t":"li"},
  {"l":"ሒ", "t":"hi"},
  {"l":"ሚ", "t":"mi"},
  {"l":"ሢ", "t":"si"},
  {"l":"ሪ", "t":"ri"},
  {"l":"ሲ", "t":"si"},
  {"l":"ሺ", "t":"ši"},
  {"l":"ቂ", "t":"qi"},
  {"l":"ቢ", "t":"bi"},
  {"l":"ቲ", "t":"ti"},
  {"l":"ቺ", "t":"či"},
  {"l":"ኂ", "t":"hi"},
  {"l":"ኒ", "t":"ni"},
  {"l":"ኚ", "t":"ñi"},
  {"l":"ኢ", "t":"ʾi"},
  {"l":"ኪ", "t":"ki"},
  {"l":"ኺ", "t":"hi"},
  {"l":"ዊ", "t":"wi"},
  {"l":"ዒ", "t":"ʾi"},
  {"l":"ዚ", "t":"zi"},
  {"l":"ዢ", "t":"ži"},
  {"l":"ዪ", "t":"yi"},
  {"l":"ዲ", "t":"di"},
  {"l":"ጂ", "t":"ǧi"},
  {"l":"ጊ", "t":"gi"},
  {"l":"ጢ", "t":"t'i"},
  {"l":"ጪ", "t":"č'i"},
  {"l":"ጲ", "t":"p'i"},
  {"l":"ጺ", "t":"s'i"},
  {"l":"ፂ", "t":"s'i"},
  {"l":"ፊ", "t":"fi"},
  {"l":"ፒ", "t":"pi"},
  {"l":"ሃ", "t":"ha"},
  {"l":"ላ", "t":"la"},
  {"l":"ሓ", "t":"ha"},
  {"l":"ማ", "t":"ma"},
  {"l":"ሣ", "t":"sa"},
  {"l":"ራ", "t":"ra"},
  {"l":"ሳ", "t":"sa"},
  {"l":"ሻ", "t":"ša"},
  {"l":"ቃ", "t":"qa"},
  {"l":"ባ", "t":"ba"},
  {"l":"ታ", "t":"ta"},
  {"l":"ቻ", "t":"ča"},
  {"l":"ኃ", "t":"ha"},
  {"l":"ና", "t":"na"},
  {"l":"ኛ", "t":"ña"},
  {"l":"ኣ", "t":"ʾa"},
  {"l":"ካ", "t":"ka"},
  {"l":"ኻ", "t":"ha"},
  {"l":"ዋ", "t":"wa"},
  {"l":"ዓ", "t":"ʾa"},
  {"l":"ዛ", "t":"za"},
  {"l":"ዣ", "t":"ža"},
  {"l":"ያ", "t":"ya"},
  {"l":"ዳ", "t":"da"},
  {"l":"ጃ", "t":"ǧa"},
  {"l":"ጋ", "t":"ga"},
  {"l":"ጣ", "t":"t'a"},
  {"l":"ጫ", "t":"č'a"},
  {"l":"ጳ", "t":"p'a"},
  {"l":"ጻ", "t":"s'a"},
  {"l":"ፃ", "t":"s'a"},
  {"l":"ፋ", "t":"fa"},
  {"l":"ፓ", "t":"pa"},
  {"l":"ሄ", "t":"he"},
  {"l":"ሌ", "t":"le"},
  {"l":"ሔ", "t":"he"},
  {"l":"ሜ", "t":"me"},
  {"l":"ሤ", "t":"se"},
  {"l":"ሬ", "t":"re"},
  {"l":"ሴ", "t":"se"},
  {"l":"ሼ", "t":"še"},
  {"l":"ቄ", "t":"qe"},
  {"l":"ቤ", "t":"be"},
  {"l":"ቴ", "t":"te"},
  {"l":"ቼ", "t":"če"},
  {"l":"ኄ", "t":"he"},
  {"l":"ኔ", "t":"ne"},
  {"l":"ኜ", "t":"ñe"},
  {"l":"ኤ", "t":"ʾe"},
  {"l":"ኬ", "t":"ke"},
  {"l":"ኼ", "t":"he"},
  {"l":"ዌ", "t":"we"},
  {"l":"ዔ", "t":"ʾe"},
  {"l":"ዜ", "t":"ze"},
  {"l":"ዤ", "t":"že"},
  {"l":"ዬ", "t":"ye"},
  {"l":"ዴ", "t":"de"},
  {"l":"ጄ", "t":"ǧe"},
  {"l":"ጌ", "t":"ge"},
  {"l":"ጤ", "t":"t'e"},
  {"l":"ጬ", "t":"č'e"},
  {"l":"ጴ", "t":"p'e"},
  {"l":"ጼ", "t":"s'e"},
  {"l":"ፄ", "t":"s'e"},
  {"l":"ፌ", "t":"fe"},
  {"l":"ፔ", "t":"pe"},
  {"l":"ህ", "t":"hə"},
  {"l":"ል", "t":"lə"},
  {"l":"ሕ", "t":"hə"},
  {"l":"ም", "t":"mə"},
  {"l":"ሥ", "t":"sə"},
  {"l":"ር", "t":"rə"},
  {"l":"ስ", "t":"sə"},
  {"l":"ሽ", "t":"šə"},
  {"l":"ቅ", "t":"qə"},
  {"l":"ብ", "t":"bə"},
  {"l":"ት", "t":"tə"},
  {"l":"ች", "t":"čə"},
  {"l":"ኅ", "t":"hə"},
  {"l":"ን", "t":"nə"},
  {"l":"ኝ", "t":"ñə"},
  {"l":"እ", "t":"ʾə"},
  {"l":"ክ", "t":"kə"},
  {"l":"ኽ", "t":"hə"},
  {"l":"ው", "t":"wə"},
  {"l":"ዕ", "t":"ʾə"},
  {"l":"ዝ", "t":"zə"},
  {"l":"ዥ", "t":"žə"},
  {"l":"ይ", "t":"yə"},
  {"l":"ድ", "t":"də"},
  {"l":"ጅ", "t":"ǧə"},
  {"l":"ግ", "t":"gə"},
  {"l":"ጥ", "t":"t'ə"},
  {"l":"ጭ", "t":"č'ə"},
  {"l":"ጵ", "t":"p'ə"},
  {"l":"ጽ", "t":"s'ə"},
  {"l":"ፅ", "t":"s'ə"},
  {"l":"ፍ", "t":"fə"},
  {"l":"ፕ", "t":"pə"},
  {"l":"ሆ", "t":"ho"},
  {"l":"ሎ", "t":"lo"},
  {"l":"ሖ", "t":"ho"},
  {"l":"ሞ", "t":"mo"},
  {"l":"ሦ", "t":"so"},
  {"l":"ሮ", "t":"ro"},
  {"l":"ሶ", "t":"so"},
  {"l":"ሾ", "t":"šo"},
  {"l":"ቆ", "t":"qo"},
  {"l":"ቦ", "t":"bo"},
  {"l":"ቶ", "t":"to"},
  {"l":"ቾ", "t":"čo"},
  {"l":"ኆ", "t":"ho"},
  {"l":"ኖ", "t":"no"},
  {"l":"ኞ", "t":"ño"},
  {"l":"ኦ", "t":"ʾo"},
  {"l":"ኮ", "t":"ko"},
  {"l":"ኾ", "t":"ho"},
  {"l":"ዎ", "t":"wo"},
  {"l":"ዖ", "t":"ʾo"},
  {"l":"ዞ", "t":"zo"},
  {"l":"ዦ", "t":"žo"},
  {"l":"ዮ", "t":"yo"},
  {"l":"ዶ", "t":"do"},
  {"l":"ጐ", "t":"gu"},
  {"l":"ጓ", "t":"gä"},
  {"l":"ሏ", "t":"wa"},
  {"l":"ሟ", "t":"ma"},
  {"l":"ቷ", "t":"ta"},
  {"l":"ጆ", "t":"ǧo"},
  {"l":"ጎ", "t":"go"},
  {"l":"ጦ", "t":"t'o"},
  {"l":"ጮ", "t":"č'o"},
  {"l":"ጶ", "t":"p'o"},
  {"l":"ጾ", "t":"s'o"},
  {"l":"ፆ", "t":"s'o"},
  {"l":"ፎ", "t":"fo"},
  {"l":"ፖ", "t":"po"},
  {"l":"፤", "t":":"},
  {"l":"፡", "t":" "},
  {"l":"።", "t":"."},
  {"l":"፩", "t":"1"},
  {"l":"፪", "t":"2"},
  {"l":"፫", "t":"3"},
  {"l":"፬", "t":"4"},
  {"l":"፭", "t":"5"},
  {"l":"፮", "t":"6"},
  {"l":"፯", "t":"7"},
  {"l":"፰", "t":"8"},
  {"l":"፱", "t":"9"},
  {"l":"፲", "t":"10"},
  {"l":"ቋ", "t":"qwa"},
  {"l":"\n", "t":"\n"}
]
