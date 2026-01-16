// Norwegian vocabulary data with Vietnamese translations
export const vocabularyCategories = [
  { id: 'greetings', name: 'Greetings', nameVi: 'Chào hỏi', icon: '👋', color: 'bg-blue-500' },
  { id: 'numbers', name: 'Numbers', nameVi: 'Số đếm', icon: '🔢', color: 'bg-purple-500' },
  { id: 'food', name: 'Food & Drinks', nameVi: 'Đồ ăn & Thức uống', icon: '🍽️', color: 'bg-orange-500' },
  { id: 'travel', name: 'Travel', nameVi: 'Du lịch', icon: '✈️', color: 'bg-cyan-500' },
  { id: 'family', name: 'Family', nameVi: 'Gia đình', icon: '👨‍👩‍👧‍👦', color: 'bg-pink-500' },
  { id: 'work', name: 'Work', nameVi: 'Công việc', icon: '💼', color: 'bg-indigo-500' },
  { id: 'daily', name: 'Daily Life', nameVi: 'Cuộc sống hàng ngày', icon: '🏠', color: 'bg-green-500' },
  { id: 'nature', name: 'Nature', nameVi: 'Thiên nhiên', icon: '🌿', color: 'bg-emerald-500' },
  { id: 'time', name: 'Time & Date', nameVi: 'Thời gian', icon: '⏰', color: 'bg-amber-500' },
  { id: 'body', name: 'Body Parts', nameVi: 'Bộ phận cơ thể', icon: '🦶', color: 'bg-rose-500' },
  { id: 'colors', name: 'Colors', nameVi: 'Màu sắc', icon: '🎨', color: 'bg-violet-500' },
  { id: 'weather', name: 'Weather', nameVi: 'Thời tiết', icon: '🌤️', color: 'bg-sky-500' },
];

export const vocabulary = [
  // Greetings
  { id: 1, norwegian: 'Hei', vietnamese: 'Xin chào', category: 'greetings', difficulty: 'beginner', pronunciation: 'hay', exampleNo: 'Hei, hvordan har du det?', exampleVi: 'Xin chào, bạn khỏe không?' },
  { id: 2, norwegian: 'God morgen', vietnamese: 'Chào buổi sáng', category: 'greetings', difficulty: 'beginner', pronunciation: 'goo MOR-en', exampleNo: 'God morgen! Har du sovet godt?', exampleVi: 'Chào buổi sáng! Bạn ngủ ngon chứ?' },
  { id: 3, norwegian: 'God dag', vietnamese: 'Chào buổi trưa', category: 'greetings', difficulty: 'beginner', pronunciation: 'goo dahg', exampleNo: 'God dag, kan jeg hjelpe deg?', exampleVi: 'Chào buổi trưa, tôi có thể giúp gì cho bạn?' },
  { id: 4, norwegian: 'God kveld', vietnamese: 'Chào buổi tối', category: 'greetings', difficulty: 'beginner', pronunciation: 'goo kvell', exampleNo: 'God kveld, velkommen hjem!', exampleVi: 'Chào buổi tối, chào mừng về nhà!' },
  { id: 5, norwegian: 'God natt', vietnamese: 'Chúc ngủ ngon', category: 'greetings', difficulty: 'beginner', pronunciation: 'goo naht', exampleNo: 'God natt, sov godt!', exampleVi: 'Chúc ngủ ngon, ngủ thật ngon!' },
  { id: 6, norwegian: 'Ha det', vietnamese: 'Tạm biệt', category: 'greetings', difficulty: 'beginner', pronunciation: 'hah deh', exampleNo: 'Ha det, vi sees!', exampleVi: 'Tạm biệt, hẹn gặp lại!' },
  { id: 7, norwegian: 'Takk', vietnamese: 'Cảm ơn', category: 'greetings', difficulty: 'beginner', pronunciation: 'tahk', exampleNo: 'Takk for hjelpen!', exampleVi: 'Cảm ơn vì sự giúp đỡ!' },
  { id: 8, norwegian: 'Tusen takk', vietnamese: 'Cảm ơn rất nhiều', category: 'greetings', difficulty: 'beginner', pronunciation: 'TOO-sen tahk', exampleNo: 'Tusen takk for gaven!', exampleVi: 'Cảm ơn rất nhiều vì món quà!' },
  { id: 9, norwegian: 'Vær så snill', vietnamese: 'Làm ơn', category: 'greetings', difficulty: 'beginner', pronunciation: 'vair saw snill', exampleNo: 'Vær så snill å vente her.', exampleVi: 'Làm ơn đợi ở đây.' },
  { id: 10, norwegian: 'Unnskyld', vietnamese: 'Xin lỗi', category: 'greetings', difficulty: 'beginner', pronunciation: 'OON-shil', exampleNo: 'Unnskyld, hvor er toalettet?', exampleVi: 'Xin lỗi, nhà vệ sinh ở đâu?' },

  // Numbers
  { id: 11, norwegian: 'En', vietnamese: 'Một', category: 'numbers', difficulty: 'beginner', pronunciation: 'ehn', exampleNo: 'Jeg har en bror.', exampleVi: 'Tôi có một anh trai.' },
  { id: 12, norwegian: 'To', vietnamese: 'Hai', category: 'numbers', difficulty: 'beginner', pronunciation: 'too', exampleNo: 'Jeg vil ha to kopper kaffe.', exampleVi: 'Tôi muốn hai cốc cà phê.' },
  { id: 13, norwegian: 'Tre', vietnamese: 'Ba', category: 'numbers', difficulty: 'beginner', pronunciation: 'treh', exampleNo: 'Det er tre personer her.', exampleVi: 'Có ba người ở đây.' },
  { id: 14, norwegian: 'Fire', vietnamese: 'Bốn', category: 'numbers', difficulty: 'beginner', pronunciation: 'FEE-reh', exampleNo: 'Huset har fire rom.', exampleVi: 'Ngôi nhà có bốn phòng.' },
  { id: 15, norwegian: 'Fem', vietnamese: 'Năm', category: 'numbers', difficulty: 'beginner', pronunciation: 'fem', exampleNo: 'Jeg jobber fem dager i uken.', exampleVi: 'Tôi làm việc năm ngày một tuần.' },
  { id: 16, norwegian: 'Seks', vietnamese: 'Sáu', category: 'numbers', difficulty: 'beginner', pronunciation: 'seks', exampleNo: 'Klokken er seks.', exampleVi: 'Bây giờ là sáu giờ.' },
  { id: 17, norwegian: 'Sju', vietnamese: 'Bảy', category: 'numbers', difficulty: 'beginner', pronunciation: 'shoo', exampleNo: 'Det er sju dager i en uke.', exampleVi: 'Có bảy ngày trong một tuần.' },
  { id: 18, norwegian: 'Åtte', vietnamese: 'Tám', category: 'numbers', difficulty: 'beginner', pronunciation: 'OH-teh', exampleNo: 'Butikken åpner klokken åtte.', exampleVi: 'Cửa hàng mở cửa lúc tám giờ.' },
  { id: 19, norwegian: 'Ni', vietnamese: 'Chín', category: 'numbers', difficulty: 'beginner', pronunciation: 'nee', exampleNo: 'Jeg våkner klokken ni.', exampleVi: 'Tôi thức dậy lúc chín giờ.' },
  { id: 20, norwegian: 'Ti', vietnamese: 'Mười', category: 'numbers', difficulty: 'beginner', pronunciation: 'tee', exampleNo: 'Jeg har ti fingre.', exampleVi: 'Tôi có mười ngón tay.' },
  { id: 21, norwegian: 'Tjue', vietnamese: 'Hai mươi', category: 'numbers', difficulty: 'beginner', pronunciation: 'CHOO-eh', exampleNo: 'Hun er tjue år gammel.', exampleVi: 'Cô ấy hai mươi tuổi.' },
  { id: 22, norwegian: 'Hundre', vietnamese: 'Một trăm', category: 'numbers', difficulty: 'intermediate', pronunciation: 'HOON-dreh', exampleNo: 'Det koster hundre kroner.', exampleVi: 'Nó có giá một trăm kroner.' },
  { id: 23, norwegian: 'Tusen', vietnamese: 'Một nghìn', category: 'numbers', difficulty: 'intermediate', pronunciation: 'TOO-sen', exampleNo: 'Byen har tusen innbyggere.', exampleVi: 'Thành phố có một nghìn cư dân.' },

  // Food & Drinks
  { id: 24, norwegian: 'Brød', vietnamese: 'Bánh mì', category: 'food', difficulty: 'beginner', pronunciation: 'bruh', exampleNo: 'Kan jeg få litt brød?', exampleVi: 'Tôi có thể lấy một ít bánh mì không?' },
  { id: 25, norwegian: 'Kaffe', vietnamese: 'Cà phê', category: 'food', difficulty: 'beginner', pronunciation: 'KAH-feh', exampleNo: 'Jeg drikker kaffe hver morgen.', exampleVi: 'Tôi uống cà phê mỗi sáng.' },
  { id: 26, norwegian: 'Vann', vietnamese: 'Nước', category: 'food', difficulty: 'beginner', pronunciation: 'vahn', exampleNo: 'Kan jeg få et glass vann?', exampleVi: 'Tôi có thể lấy một ly nước không?' },
  { id: 27, norwegian: 'Ost', vietnamese: 'Phô mai', category: 'food', difficulty: 'beginner', pronunciation: 'oost', exampleNo: 'Norsk ost er veldig god.', exampleVi: 'Phô mai Na Uy rất ngon.' },
  { id: 28, norwegian: 'Fisk', vietnamese: 'Cá', category: 'food', difficulty: 'beginner', pronunciation: 'fisk', exampleNo: 'Vi spiser fisk til middag.', exampleVi: 'Chúng tôi ăn cá cho bữa tối.' },
  { id: 29, norwegian: 'Kjøtt', vietnamese: 'Thịt', category: 'food', difficulty: 'beginner', pronunciation: 'chuht', exampleNo: 'Jeg liker ikke kjøtt.', exampleVi: 'Tôi không thích thịt.' },
  { id: 30, norwegian: 'Grønnsaker', vietnamese: 'Rau củ', category: 'food', difficulty: 'intermediate', pronunciation: 'GRUH-nah-ker', exampleNo: 'Spis grønnsakene dine!', exampleVi: 'Ăn rau củ của bạn đi!' },
  { id: 31, norwegian: 'Frukt', vietnamese: 'Trái cây', category: 'food', difficulty: 'beginner', pronunciation: 'frookt', exampleNo: 'Jeg kjøper frukt på torget.', exampleVi: 'Tôi mua trái cây ở chợ.' },
  { id: 32, norwegian: 'Melk', vietnamese: 'Sữa', category: 'food', difficulty: 'beginner', pronunciation: 'melk', exampleNo: 'Barna drikker melk.', exampleVi: 'Những đứa trẻ uống sữa.' },
  { id: 33, norwegian: 'Egg', vietnamese: 'Trứng', category: 'food', difficulty: 'beginner', pronunciation: 'ehg', exampleNo: 'Jeg spiser egg til frokost.', exampleVi: 'Tôi ăn trứng vào bữa sáng.' },
  { id: 34, norwegian: 'Suppe', vietnamese: 'Súp', category: 'food', difficulty: 'beginner', pronunciation: 'SOO-peh', exampleNo: 'Suppen er varm.', exampleVi: 'Súp thì nóng.' },
  { id: 35, norwegian: 'Smør', vietnamese: 'Bơ', category: 'food', difficulty: 'beginner', pronunciation: 'smur', exampleNo: 'Kan du gi meg smøret?', exampleVi: 'Bạn có thể đưa tôi bơ không?' },
  { id: 36, norwegian: 'Øl', vietnamese: 'Bia', category: 'food', difficulty: 'beginner', pronunciation: 'url', exampleNo: 'Han bestiller et øl.', exampleVi: 'Anh ấy gọi một ly bia.' },
  { id: 37, norwegian: 'Vin', vietnamese: 'Rượu vang', category: 'food', difficulty: 'beginner', pronunciation: 'veen', exampleNo: 'Vi drikker vin til maten.', exampleVi: 'Chúng tôi uống rượu vang với bữa ăn.' },

  // Travel
  { id: 38, norwegian: 'Fly', vietnamese: 'Máy bay', category: 'travel', difficulty: 'beginner', pronunciation: 'fly', exampleNo: 'Flyet lander klokken tre.', exampleVi: 'Máy bay hạ cánh lúc ba giờ.' },
  { id: 39, norwegian: 'Tog', vietnamese: 'Tàu hỏa', category: 'travel', difficulty: 'beginner', pronunciation: 'tohg', exampleNo: 'Toget er forsinket.', exampleVi: 'Tàu hỏa bị trễ.' },
  { id: 40, norwegian: 'Buss', vietnamese: 'Xe buýt', category: 'travel', difficulty: 'beginner', pronunciation: 'boos', exampleNo: 'Bussen kommer om fem minutter.', exampleVi: 'Xe buýt đến trong năm phút nữa.' },
  { id: 41, norwegian: 'Bil', vietnamese: 'Xe hơi', category: 'travel', difficulty: 'beginner', pronunciation: 'beel', exampleNo: 'Vi kjører bil til fjellene.', exampleVi: 'Chúng tôi lái xe đến núi.' },
  { id: 42, norwegian: 'Hotell', vietnamese: 'Khách sạn', category: 'travel', difficulty: 'beginner', pronunciation: 'hoo-TELL', exampleNo: 'Hotellet ligger i sentrum.', exampleVi: 'Khách sạn nằm ở trung tâm.' },
  { id: 43, norwegian: 'Flyplass', vietnamese: 'Sân bay', category: 'travel', difficulty: 'intermediate', pronunciation: 'FLY-plahs', exampleNo: 'Flyplassen er stor.', exampleVi: 'Sân bay thì lớn.' },
  { id: 44, norwegian: 'Billett', vietnamese: 'Vé', category: 'travel', difficulty: 'beginner', pronunciation: 'bi-LETT', exampleNo: 'Jeg trenger en billett til Oslo.', exampleVi: 'Tôi cần một vé đi Oslo.' },
  { id: 45, norwegian: 'Bagasje', vietnamese: 'Hành lý', category: 'travel', difficulty: 'intermediate', pronunciation: 'bah-GAH-sheh', exampleNo: 'Bagasjen min er tung.', exampleVi: 'Hành lý của tôi nặng.' },
  { id: 46, norwegian: 'Kart', vietnamese: 'Bản đồ', category: 'travel', difficulty: 'beginner', pronunciation: 'kahrt', exampleNo: 'Kan du vise meg på kartet?', exampleVi: 'Bạn có thể chỉ cho tôi trên bản đồ không?' },
  { id: 47, norwegian: 'Reise', vietnamese: 'Chuyến đi', category: 'travel', difficulty: 'beginner', pronunciation: 'RAY-seh', exampleNo: 'Reisen tok tre timer.', exampleVi: 'Chuyến đi mất ba giờ.' },

  // Family
  { id: 48, norwegian: 'Mor', vietnamese: 'Mẹ', category: 'family', difficulty: 'beginner', pronunciation: 'moor', exampleNo: 'Min mor lager mat.', exampleVi: 'Mẹ tôi nấu ăn.' },
  { id: 49, norwegian: 'Far', vietnamese: 'Bố', category: 'family', difficulty: 'beginner', pronunciation: 'fahr', exampleNo: 'Far hjelper meg med leksene.', exampleVi: 'Bố giúp tôi làm bài tập.' },
  { id: 50, norwegian: 'Bror', vietnamese: 'Anh/Em trai', category: 'family', difficulty: 'beginner', pronunciation: 'broor', exampleNo: 'Min bror er eldre enn meg.', exampleVi: 'Anh trai tôi lớn hơn tôi.' },
  { id: 51, norwegian: 'Søster', vietnamese: 'Chị/Em gái', category: 'family', difficulty: 'beginner', pronunciation: 'SUS-ter', exampleNo: 'Min søster bor i Bergen.', exampleVi: 'Chị gái tôi sống ở Bergen.' },
  { id: 52, norwegian: 'Bestemor', vietnamese: 'Bà', category: 'family', difficulty: 'beginner', pronunciation: 'BES-teh-moor', exampleNo: 'Bestemor strikker gensere.', exampleVi: 'Bà đan áo len.' },
  { id: 53, norwegian: 'Bestefar', vietnamese: 'Ông', category: 'family', difficulty: 'beginner', pronunciation: 'BES-teh-fahr', exampleNo: 'Bestefar forteller historier.', exampleVi: 'Ông kể chuyện.' },
  { id: 54, norwegian: 'Barn', vietnamese: 'Con/Trẻ em', category: 'family', difficulty: 'beginner', pronunciation: 'bahrn', exampleNo: 'Vi har to barn.', exampleVi: 'Chúng tôi có hai đứa con.' },
  { id: 55, norwegian: 'Mann', vietnamese: 'Chồng', category: 'family', difficulty: 'beginner', pronunciation: 'mahn', exampleNo: 'Min mann er på jobb.', exampleVi: 'Chồng tôi đang đi làm.' },
  { id: 56, norwegian: 'Kone', vietnamese: 'Vợ', category: 'family', difficulty: 'beginner', pronunciation: 'KOO-neh', exampleNo: 'Hans kone er lege.', exampleVi: 'Vợ anh ấy là bác sĩ.' },
  { id: 57, norwegian: 'Familie', vietnamese: 'Gia đình', category: 'family', difficulty: 'beginner', pronunciation: 'fah-MEE-lee-eh', exampleNo: 'Familien min er stor.', exampleVi: 'Gia đình tôi lớn.' },

  // Work
  { id: 58, norwegian: 'Jobb', vietnamese: 'Công việc', category: 'work', difficulty: 'beginner', pronunciation: 'yohb', exampleNo: 'Jeg liker jobben min.', exampleVi: 'Tôi thích công việc của mình.' },
  { id: 59, norwegian: 'Kontor', vietnamese: 'Văn phòng', category: 'work', difficulty: 'beginner', pronunciation: 'kohn-TOOR', exampleNo: 'Kontoret åpner klokken åtte.', exampleVi: 'Văn phòng mở cửa lúc tám giờ.' },
  { id: 60, norwegian: 'Sjef', vietnamese: 'Sếp', category: 'work', difficulty: 'beginner', pronunciation: 'sheff', exampleNo: 'Sjefen min er snill.', exampleVi: 'Sếp của tôi tử tế.' },
  { id: 61, norwegian: 'Kollega', vietnamese: 'Đồng nghiệp', category: 'work', difficulty: 'intermediate', pronunciation: 'koh-LEH-gah', exampleNo: 'Mine kollegaer er hjelpsomme.', exampleVi: 'Đồng nghiệp của tôi hay giúp đỡ.' },
  { id: 62, norwegian: 'Møte', vietnamese: 'Cuộc họp', category: 'work', difficulty: 'beginner', pronunciation: 'MUH-teh', exampleNo: 'Vi har et møte i dag.', exampleVi: 'Chúng tôi có một cuộc họp hôm nay.' },
  { id: 63, norwegian: 'Lønn', vietnamese: 'Lương', category: 'work', difficulty: 'intermediate', pronunciation: 'luhn', exampleNo: 'Lønnen kommer på fredag.', exampleVi: 'Lương đến vào thứ Sáu.' },
  { id: 64, norwegian: 'Ferie', vietnamese: 'Kỳ nghỉ', category: 'work', difficulty: 'beginner', pronunciation: 'FEH-ree-eh', exampleNo: 'Jeg tar ferie i juli.', exampleVi: 'Tôi nghỉ phép vào tháng Bảy.' },
  { id: 65, norwegian: 'Datamaskin', vietnamese: 'Máy tính', category: 'work', difficulty: 'intermediate', pronunciation: 'DAH-tah-mah-sheen', exampleNo: 'Datamaskinen min er ny.', exampleVi: 'Máy tính của tôi mới.' },

  // Daily Life
  { id: 66, norwegian: 'Hus', vietnamese: 'Nhà', category: 'daily', difficulty: 'beginner', pronunciation: 'hoos', exampleNo: 'Huset vårt er stort.', exampleVi: 'Nhà của chúng tôi lớn.' },
  { id: 67, norwegian: 'Leilighet', vietnamese: 'Căn hộ', category: 'daily', difficulty: 'intermediate', pronunciation: 'LAY-li-het', exampleNo: 'Leiligheten har tre soverom.', exampleVi: 'Căn hộ có ba phòng ngủ.' },
  { id: 68, norwegian: 'Kjøkken', vietnamese: 'Nhà bếp', category: 'daily', difficulty: 'beginner', pronunciation: 'CHUK-en', exampleNo: 'Jeg lager mat på kjøkkenet.', exampleVi: 'Tôi nấu ăn trong bếp.' },
  { id: 69, norwegian: 'Soverom', vietnamese: 'Phòng ngủ', category: 'daily', difficulty: 'beginner', pronunciation: 'SOH-veh-rom', exampleNo: 'Soverommet er rolig.', exampleVi: 'Phòng ngủ yên tĩnh.' },
  { id: 70, norwegian: 'Bad', vietnamese: 'Phòng tắm', category: 'daily', difficulty: 'beginner', pronunciation: 'bahd', exampleNo: 'Badet er på andre etasje.', exampleVi: 'Phòng tắm ở tầng hai.' },
  { id: 71, norwegian: 'Stue', vietnamese: 'Phòng khách', category: 'daily', difficulty: 'beginner', pronunciation: 'STOO-eh', exampleNo: 'Vi ser TV i stuen.', exampleVi: 'Chúng tôi xem TV trong phòng khách.' },
  { id: 72, norwegian: 'Dør', vietnamese: 'Cửa', category: 'daily', difficulty: 'beginner', pronunciation: 'duhr', exampleNo: 'Lukk døren, vær så snill.', exampleVi: 'Làm ơn đóng cửa.' },
  { id: 73, norwegian: 'Vindu', vietnamese: 'Cửa sổ', category: 'daily', difficulty: 'beginner', pronunciation: 'VIN-doo', exampleNo: 'Åpne vinduet!', exampleVi: 'Mở cửa sổ đi!' },
  { id: 74, norwegian: 'Bord', vietnamese: 'Bàn', category: 'daily', difficulty: 'beginner', pronunciation: 'boor', exampleNo: 'Bordet er i tre.', exampleVi: 'Cái bàn làm bằng gỗ.' },
  { id: 75, norwegian: 'Stol', vietnamese: 'Ghế', category: 'daily', difficulty: 'beginner', pronunciation: 'stool', exampleNo: 'Sett deg på stolen.', exampleVi: 'Ngồi xuống ghế đi.' },

  // Nature
  { id: 76, norwegian: 'Fjell', vietnamese: 'Núi', category: 'nature', difficulty: 'beginner', pronunciation: 'fyell', exampleNo: 'Fjellene i Norge er vakre.', exampleVi: 'Những ngọn núi ở Na Uy đẹp.' },
  { id: 77, norwegian: 'Hav', vietnamese: 'Biển', category: 'nature', difficulty: 'beginner', pronunciation: 'hahv', exampleNo: 'Havet er kaldt.', exampleVi: 'Biển thì lạnh.' },
  { id: 78, norwegian: 'Skog', vietnamese: 'Rừng', category: 'nature', difficulty: 'beginner', pronunciation: 'skohg', exampleNo: 'Vi går tur i skogen.', exampleVi: 'Chúng tôi đi dạo trong rừng.' },
  { id: 79, norwegian: 'Elv', vietnamese: 'Sông', category: 'nature', difficulty: 'beginner', pronunciation: 'elv', exampleNo: 'Elven er dyp.', exampleVi: 'Con sông sâu.' },
  { id: 80, norwegian: 'Tre', vietnamese: 'Cây', category: 'nature', difficulty: 'beginner', pronunciation: 'treh', exampleNo: 'Treet er høyt.', exampleVi: 'Cái cây cao.' },
  { id: 81, norwegian: 'Blomst', vietnamese: 'Hoa', category: 'nature', difficulty: 'beginner', pronunciation: 'blomst', exampleNo: 'Blomsten lukter godt.', exampleVi: 'Bông hoa thơm.' },
  { id: 82, norwegian: 'Sol', vietnamese: 'Mặt trời', category: 'nature', difficulty: 'beginner', pronunciation: 'sool', exampleNo: 'Solen skinner i dag.', exampleVi: 'Mặt trời chiếu sáng hôm nay.' },
  { id: 83, norwegian: 'Måne', vietnamese: 'Mặt trăng', category: 'nature', difficulty: 'beginner', pronunciation: 'MOH-neh', exampleNo: 'Månen er full i natt.', exampleVi: 'Đêm nay trăng tròn.' },

  // Time & Date
  { id: 84, norwegian: 'Dag', vietnamese: 'Ngày', category: 'time', difficulty: 'beginner', pronunciation: 'dahg', exampleNo: 'Dagen er lang.', exampleVi: 'Ngày thì dài.' },
  { id: 85, norwegian: 'Natt', vietnamese: 'Đêm', category: 'time', difficulty: 'beginner', pronunciation: 'naht', exampleNo: 'Natten er stille.', exampleVi: 'Đêm yên tĩnh.' },
  { id: 86, norwegian: 'Uke', vietnamese: 'Tuần', category: 'time', difficulty: 'beginner', pronunciation: 'OO-keh', exampleNo: 'Neste uke reiser vi.', exampleVi: 'Tuần sau chúng tôi đi.' },
  { id: 87, norwegian: 'Måned', vietnamese: 'Tháng', category: 'time', difficulty: 'beginner', pronunciation: 'MOH-ned', exampleNo: 'Denne måneden er juni.', exampleVi: 'Tháng này là tháng Sáu.' },
  { id: 88, norwegian: 'År', vietnamese: 'Năm', category: 'time', difficulty: 'beginner', pronunciation: 'ohr', exampleNo: 'I år fyller jeg 30.', exampleVi: 'Năm nay tôi tròn 30.' },
  { id: 89, norwegian: 'Mandag', vietnamese: 'Thứ Hai', category: 'time', difficulty: 'beginner', pronunciation: 'MAHN-dahg', exampleNo: 'Mandag er første dag i uken.', exampleVi: 'Thứ Hai là ngày đầu tuần.' },
  { id: 90, norwegian: 'Fredag', vietnamese: 'Thứ Sáu', category: 'time', difficulty: 'beginner', pronunciation: 'FREH-dahg', exampleNo: 'Jeg gleder meg til fredag!', exampleVi: 'Tôi mong đợi thứ Sáu!' },
  { id: 91, norwegian: 'I dag', vietnamese: 'Hôm nay', category: 'time', difficulty: 'beginner', pronunciation: 'ee dahg', exampleNo: 'I dag er det fint vær.', exampleVi: 'Hôm nay thời tiết đẹp.' },
  { id: 92, norwegian: 'I morgen', vietnamese: 'Ngày mai', category: 'time', difficulty: 'beginner', pronunciation: 'ee MOR-en', exampleNo: 'I morgen har jeg fri.', exampleVi: 'Ngày mai tôi được nghỉ.' },
  { id: 93, norwegian: 'I går', vietnamese: 'Hôm qua', category: 'time', difficulty: 'beginner', pronunciation: 'ee gohr', exampleNo: 'I går regnet det.', exampleVi: 'Hôm qua trời mưa.' },

  // Body Parts
  { id: 94, norwegian: 'Hode', vietnamese: 'Đầu', category: 'body', difficulty: 'beginner', pronunciation: 'HOO-deh', exampleNo: 'Hodet mitt gjør vondt.', exampleVi: 'Đầu tôi đau.' },
  { id: 95, norwegian: 'Øye', vietnamese: 'Mắt', category: 'body', difficulty: 'beginner', pronunciation: 'UY-eh', exampleNo: 'Hun har blå øyne.', exampleVi: 'Cô ấy có đôi mắt xanh.' },
  { id: 96, norwegian: 'Øre', vietnamese: 'Tai', category: 'body', difficulty: 'beginner', pronunciation: 'UH-reh', exampleNo: 'Jeg hører med ørene.', exampleVi: 'Tôi nghe bằng tai.' },
  { id: 97, norwegian: 'Nese', vietnamese: 'Mũi', category: 'body', difficulty: 'beginner', pronunciation: 'NEH-seh', exampleNo: 'Nesen min er tett.', exampleVi: 'Mũi tôi bị nghẹt.' },
  { id: 98, norwegian: 'Munn', vietnamese: 'Miệng', category: 'body', difficulty: 'beginner', pronunciation: 'moon', exampleNo: 'Lukk munnen når du spiser!', exampleVi: 'Ngậm miệng khi ăn!' },
  { id: 99, norwegian: 'Hånd', vietnamese: 'Tay', category: 'body', difficulty: 'beginner', pronunciation: 'hond', exampleNo: 'Vask hendene dine!', exampleVi: 'Rửa tay đi!' },
  { id: 100, norwegian: 'Fot', vietnamese: 'Chân', category: 'body', difficulty: 'beginner', pronunciation: 'foot', exampleNo: 'Foten min er sår.', exampleVi: 'Chân tôi bị đau.' },

  // Colors
  { id: 101, norwegian: 'Rød', vietnamese: 'Đỏ', category: 'colors', difficulty: 'beginner', pronunciation: 'ruh', exampleNo: 'Bilen er rød.', exampleVi: 'Xe hơi màu đỏ.' },
  { id: 102, norwegian: 'Blå', vietnamese: 'Xanh dương', category: 'colors', difficulty: 'beginner', pronunciation: 'bloh', exampleNo: 'Himmelen er blå.', exampleVi: 'Bầu trời màu xanh dương.' },
  { id: 103, norwegian: 'Grønn', vietnamese: 'Xanh lá', category: 'colors', difficulty: 'beginner', pronunciation: 'gruhn', exampleNo: 'Gresset er grønt.', exampleVi: 'Cỏ màu xanh lá.' },
  { id: 104, norwegian: 'Gul', vietnamese: 'Vàng', category: 'colors', difficulty: 'beginner', pronunciation: 'gool', exampleNo: 'Solen er gul.', exampleVi: 'Mặt trời màu vàng.' },
  { id: 105, norwegian: 'Svart', vietnamese: 'Đen', category: 'colors', difficulty: 'beginner', pronunciation: 'svahrt', exampleNo: 'Katten er svart.', exampleVi: 'Con mèo màu đen.' },
  { id: 106, norwegian: 'Hvit', vietnamese: 'Trắng', category: 'colors', difficulty: 'beginner', pronunciation: 'veet', exampleNo: 'Snøen er hvit.', exampleVi: 'Tuyết màu trắng.' },
  { id: 107, norwegian: 'Brun', vietnamese: 'Nâu', category: 'colors', difficulty: 'beginner', pronunciation: 'broon', exampleNo: 'Hunden er brun.', exampleVi: 'Con chó màu nâu.' },
  { id: 108, norwegian: 'Rosa', vietnamese: 'Hồng', category: 'colors', difficulty: 'beginner', pronunciation: 'ROO-sah', exampleNo: 'Kjolen er rosa.', exampleVi: 'Váy màu hồng.' },

  // Weather
  { id: 109, norwegian: 'Regn', vietnamese: 'Mưa', category: 'weather', difficulty: 'beginner', pronunciation: 'rayn', exampleNo: 'Det regner i dag.', exampleVi: 'Hôm nay trời mưa.' },
  { id: 110, norwegian: 'Snø', vietnamese: 'Tuyết', category: 'weather', difficulty: 'beginner', pronunciation: 'snuh', exampleNo: 'Det snør mye om vinteren.', exampleVi: 'Tuyết rơi nhiều vào mùa đông.' },
  { id: 111, norwegian: 'Vind', vietnamese: 'Gió', category: 'weather', difficulty: 'beginner', pronunciation: 'vind', exampleNo: 'Vinden er sterk i dag.', exampleVi: 'Hôm nay gió mạnh.' },
  { id: 112, norwegian: 'Sky', vietnamese: 'Mây', category: 'weather', difficulty: 'beginner', pronunciation: 'shee', exampleNo: 'Skyene er grå.', exampleVi: 'Mây màu xám.' },
  { id: 113, norwegian: 'Varmt', vietnamese: 'Nóng', category: 'weather', difficulty: 'beginner', pronunciation: 'vahrmt', exampleNo: 'Det er varmt i dag.', exampleVi: 'Hôm nay nóng.' },
  { id: 114, norwegian: 'Kaldt', vietnamese: 'Lạnh', category: 'weather', difficulty: 'beginner', pronunciation: 'kahlt', exampleNo: 'Det er kaldt ute.', exampleVi: 'Ngoài trời lạnh.' },
  { id: 115, norwegian: 'Vær', vietnamese: 'Thời tiết', category: 'weather', difficulty: 'beginner', pronunciation: 'vair', exampleNo: 'Været er fint i dag.', exampleVi: 'Hôm nay thời tiết đẹp.' },
];

export default vocabulary;
