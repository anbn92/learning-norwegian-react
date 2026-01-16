// Norwegian phrases with Vietnamese translations
export const phraseCategories = [
  { id: 'meeting', name: 'Meeting People', nameVi: 'Gặp gỡ', icon: '🤝', color: 'bg-blue-500' },
  { id: 'restaurant', name: 'At Restaurant', nameVi: 'Nhà hàng', icon: '🍽️', color: 'bg-orange-500' },
  { id: 'shopping', name: 'Shopping', nameVi: 'Mua sắm', icon: '🛒', color: 'bg-pink-500' },
  { id: 'directions', name: 'Asking Directions', nameVi: 'Hỏi đường', icon: '🗺️', color: 'bg-green-500' },
  { id: 'transport', name: 'Transportation', nameVi: 'Phương tiện', icon: '🚌', color: 'bg-cyan-500' },
  { id: 'emergency', name: 'Emergency', nameVi: 'Khẩn cấp', icon: '🚨', color: 'bg-red-500' },
  { id: 'hotel', name: 'At Hotel', nameVi: 'Khách sạn', icon: '🏨', color: 'bg-purple-500' },
  { id: 'work', name: 'At Work', nameVi: 'Công sở', icon: '💼', color: 'bg-indigo-500' },
  { id: 'phone', name: 'Phone Calls', nameVi: 'Gọi điện', icon: '📞', color: 'bg-amber-500' },
  { id: 'smalltalk', name: 'Small Talk', nameVi: 'Trò chuyện', icon: '💬', color: 'bg-teal-500' },
];

export const phrases = [
  // Meeting People
  { id: 1, norwegian: 'Hva heter du?', vietnamese: 'Bạn tên là gì?', category: 'meeting', formality: 'informal', context: 'First meeting, casual setting', culturalNote: 'Norwegians often use informal language even when meeting for the first time' },
  { id: 2, norwegian: 'Jeg heter...', vietnamese: 'Tôi tên là...', category: 'meeting', formality: 'neutral', context: 'Introducing yourself' },
  { id: 3, norwegian: 'Hvor kommer du fra?', vietnamese: 'Bạn đến từ đâu?', category: 'meeting', formality: 'informal', context: 'Getting to know someone' },
  { id: 4, norwegian: 'Jeg kommer fra Vietnam.', vietnamese: 'Tôi đến từ Việt Nam.', category: 'meeting', formality: 'neutral', context: 'Stating your origin' },
  { id: 5, norwegian: 'Hyggelig å møte deg!', vietnamese: 'Rất vui được gặp bạn!', category: 'meeting', formality: 'neutral', context: 'After introduction', culturalNote: 'Handshakes are common in Norway when meeting someone' },
  { id: 6, norwegian: 'Hvordan har du det?', vietnamese: 'Bạn khỏe không?', category: 'meeting', formality: 'informal', context: 'Greeting someone you know' },
  { id: 7, norwegian: 'Jeg har det bra, takk.', vietnamese: 'Tôi khỏe, cảm ơn.', category: 'meeting', formality: 'neutral', context: 'Response to how are you' },
  { id: 8, norwegian: 'Hva jobber du med?', vietnamese: 'Bạn làm nghề gì?', category: 'meeting', formality: 'informal', context: 'Getting to know someone' },
  { id: 9, norwegian: 'Hvor gammel er du?', vietnamese: 'Bạn bao nhiêu tuổi?', category: 'meeting', formality: 'informal', context: 'Personal questions', culturalNote: 'This can be considered personal, but Norwegians are generally open about age' },
  { id: 10, norwegian: 'Snakker du engelsk?', vietnamese: 'Bạn nói tiếng Anh không?', category: 'meeting', formality: 'neutral', context: 'When you need language help' },

  // At Restaurant
  { id: 11, norwegian: 'Kan jeg få menyen?', vietnamese: 'Tôi có thể xem thực đơn không?', category: 'restaurant', formality: 'formal', context: 'Asking for the menu' },
  { id: 12, norwegian: 'Jeg vil gjerne bestille...', vietnamese: 'Tôi muốn gọi...', category: 'restaurant', formality: 'formal', context: 'Ordering food' },
  { id: 13, norwegian: 'Kan jeg få regningen?', vietnamese: 'Tôi có thể thanh toán không?', category: 'restaurant', formality: 'formal', context: 'Asking for the bill', culturalNote: 'Tipping is not expected in Norway but appreciated for good service' },
  { id: 14, norwegian: 'Er det vegetarmat på menyen?', vietnamese: 'Có đồ chay trong thực đơn không?', category: 'restaurant', formality: 'formal', context: 'Dietary requirements' },
  { id: 15, norwegian: 'Hva anbefaler du?', vietnamese: 'Bạn đề xuất món gì?', category: 'restaurant', formality: 'informal', context: 'Asking for recommendations' },
  { id: 16, norwegian: 'Kan jeg få et glass vann?', vietnamese: 'Tôi có thể có một ly nước không?', category: 'restaurant', formality: 'formal', context: 'Ordering water', culturalNote: 'Tap water (kranvann) is free and excellent quality in Norway' },
  { id: 17, norwegian: 'Maten var deilig!', vietnamese: 'Đồ ăn rất ngon!', category: 'restaurant', formality: 'neutral', context: 'Complimenting the food' },
  { id: 18, norwegian: 'Har dere bord for to?', vietnamese: 'Các bạn có bàn cho hai người không?', category: 'restaurant', formality: 'formal', context: 'Requesting a table' },
  { id: 19, norwegian: 'Jeg er allergisk mot...', vietnamese: 'Tôi bị dị ứng với...', category: 'restaurant', formality: 'neutral', context: 'Food allergies' },
  { id: 20, norwegian: 'Kan vi dele regningen?', vietnamese: 'Chúng tôi có thể chia hóa đơn không?', category: 'restaurant', formality: 'formal', context: 'Splitting the bill', culturalNote: 'Splitting bills is very common in Norway' },

  // Shopping
  { id: 21, norwegian: 'Hvor mye koster dette?', vietnamese: 'Cái này giá bao nhiêu?', category: 'shopping', formality: 'neutral', context: 'Asking for price' },
  { id: 22, norwegian: 'Kan jeg prøve denne?', vietnamese: 'Tôi có thể thử cái này không?', category: 'shopping', formality: 'formal', context: 'Trying on clothes' },
  { id: 23, norwegian: 'Har dere en større størrelse?', vietnamese: 'Các bạn có cỡ lớn hơn không?', category: 'shopping', formality: 'formal', context: 'Asking for different size' },
  { id: 24, norwegian: 'Jeg bare ser.', vietnamese: 'Tôi chỉ xem thôi.', category: 'shopping', formality: 'neutral', context: 'When shop assistant asks if you need help' },
  { id: 25, norwegian: 'Tar dere kort?', vietnamese: 'Các bạn nhận thẻ không?', category: 'shopping', formality: 'informal', context: 'Payment method', culturalNote: 'Card payment is very common in Norway, even for small amounts' },
  { id: 26, norwegian: 'Hvor er kassen?', vietnamese: 'Quầy tính tiền ở đâu?', category: 'shopping', formality: 'neutral', context: 'Finding checkout' },
  { id: 27, norwegian: 'Kan jeg få kvittering?', vietnamese: 'Tôi có thể lấy hóa đơn không?', category: 'shopping', formality: 'formal', context: 'Asking for receipt' },
  { id: 28, norwegian: 'Det er for dyrt.', vietnamese: 'Nó quá đắt.', category: 'shopping', formality: 'informal', context: 'Price reaction' },

  // Asking Directions
  { id: 29, norwegian: 'Unnskyld, hvor er...?', vietnamese: 'Xin lỗi, ... ở đâu?', category: 'directions', formality: 'formal', context: 'Starting to ask for directions' },
  { id: 30, norwegian: 'Hvordan kommer jeg til...?', vietnamese: 'Làm thế nào để đi đến...?', category: 'directions', formality: 'formal', context: 'Asking for directions' },
  { id: 31, norwegian: 'Er det langt herfra?', vietnamese: 'Có xa đây không?', category: 'directions', formality: 'neutral', context: 'Asking about distance' },
  { id: 32, norwegian: 'Gå rett fram.', vietnamese: 'Đi thẳng.', category: 'directions', formality: 'neutral', context: 'Giving directions' },
  { id: 33, norwegian: 'Ta til venstre.', vietnamese: 'Rẽ trái.', category: 'directions', formality: 'neutral', context: 'Giving directions' },
  { id: 34, norwegian: 'Ta til høyre.', vietnamese: 'Rẽ phải.', category: 'directions', formality: 'neutral', context: 'Giving directions' },
  { id: 35, norwegian: 'Det er på hjørnet.', vietnamese: 'Nó ở góc đường.', category: 'directions', formality: 'neutral', context: 'Location description' },
  { id: 36, norwegian: 'Kan du vise meg på kartet?', vietnamese: 'Bạn có thể chỉ cho tôi trên bản đồ không?', category: 'directions', formality: 'formal', context: 'When you need more help' },

  // Transportation
  { id: 37, norwegian: 'Når går neste buss?', vietnamese: 'Khi nào có xe buýt tiếp theo?', category: 'transport', formality: 'neutral', context: 'Bus schedule' },
  { id: 38, norwegian: 'Hvor stopper bussen til...?', vietnamese: 'Xe buýt đi... dừng ở đâu?', category: 'transport', formality: 'formal', context: 'Finding bus stop' },
  { id: 39, norwegian: 'En billett til..., takk.', vietnamese: 'Một vé đi..., cảm ơn.', category: 'transport', formality: 'formal', context: 'Buying ticket' },
  { id: 40, norwegian: 'Er dette toget til Oslo?', vietnamese: 'Đây có phải tàu đi Oslo không?', category: 'transport', formality: 'neutral', context: 'Confirming train' },
  { id: 41, norwegian: 'Jeg vil gjerne ha en tur-retur billett.', vietnamese: 'Tôi muốn mua vé khứ hồi.', category: 'transport', formality: 'formal', context: 'Round trip ticket' },
  { id: 42, norwegian: 'Hvilken plattform går toget fra?', vietnamese: 'Tàu khởi hành từ sân ga nào?', category: 'transport', formality: 'formal', context: 'Train platform' },
  { id: 43, norwegian: 'Er det forsinkelser?', vietnamese: 'Có bị trễ không?', category: 'transport', formality: 'neutral', context: 'Asking about delays' },
  { id: 44, norwegian: 'Kan jeg få en taxi?', vietnamese: 'Tôi có thể gọi taxi không?', category: 'transport', formality: 'formal', context: 'Getting a taxi' },

  // Emergency
  { id: 45, norwegian: 'Hjelp!', vietnamese: 'Cứu!', category: 'emergency', formality: 'urgent', context: 'Calling for help', culturalNote: 'Emergency number in Norway is 113 (ambulance), 110 (fire), 112 (police)' },
  { id: 46, norwegian: 'Ring en ambulanse!', vietnamese: 'Gọi xe cấp cứu!', category: 'emergency', formality: 'urgent', context: 'Medical emergency' },
  { id: 47, norwegian: 'Jeg trenger en lege.', vietnamese: 'Tôi cần bác sĩ.', category: 'emergency', formality: 'urgent', context: 'Medical need' },
  { id: 48, norwegian: 'Hvor er nærmeste sykehus?', vietnamese: 'Bệnh viện gần nhất ở đâu?', category: 'emergency', formality: 'urgent', context: 'Finding hospital' },
  { id: 49, norwegian: 'Jeg har mistet passet mitt.', vietnamese: 'Tôi đã mất hộ chiếu.', category: 'emergency', formality: 'neutral', context: 'Lost passport', culturalNote: 'Contact your embassy and local police if you lose your passport' },
  { id: 50, norwegian: 'Kan du hjelpe meg?', vietnamese: 'Bạn có thể giúp tôi không?', category: 'emergency', formality: 'formal', context: 'Asking for help' },
  { id: 51, norwegian: 'Det har vært en ulykke.', vietnamese: 'Đã xảy ra tai nạn.', category: 'emergency', formality: 'urgent', context: 'Reporting accident' },

  // At Hotel
  { id: 52, norwegian: 'Jeg har en reservasjon.', vietnamese: 'Tôi có đặt phòng.', category: 'hotel', formality: 'formal', context: 'Check-in' },
  { id: 53, norwegian: 'Har dere ledige rom?', vietnamese: 'Các bạn còn phòng trống không?', category: 'hotel', formality: 'formal', context: 'Checking availability' },
  { id: 54, norwegian: 'Hvor mye koster et rom per natt?', vietnamese: 'Một phòng một đêm giá bao nhiêu?', category: 'hotel', formality: 'formal', context: 'Room price' },
  { id: 55, norwegian: 'Er frokost inkludert?', vietnamese: 'Bữa sáng có bao gồm không?', category: 'hotel', formality: 'formal', context: 'Breakfast inquiry' },
  { id: 56, norwegian: 'Kan jeg få nøkkelen min?', vietnamese: 'Tôi có thể lấy chìa khóa không?', category: 'hotel', formality: 'formal', context: 'Getting room key' },
  { id: 57, norwegian: 'Hva er WiFi-passordet?', vietnamese: 'Mật khẩu WiFi là gì?', category: 'hotel', formality: 'informal', context: 'Internet access' },
  { id: 58, norwegian: 'Jeg vil gjerne sjekke ut.', vietnamese: 'Tôi muốn trả phòng.', category: 'hotel', formality: 'formal', context: 'Check-out' },
  { id: 59, norwegian: 'Kan jeg forlenge oppholdet?', vietnamese: 'Tôi có thể gia hạn thêm không?', category: 'hotel', formality: 'formal', context: 'Extending stay' },

  // At Work
  { id: 60, norwegian: 'Når begynner møtet?', vietnamese: 'Cuộc họp bắt đầu lúc mấy giờ?', category: 'work', formality: 'formal', context: 'Meeting time' },
  { id: 61, norwegian: 'Kan vi ta en pause?', vietnamese: 'Chúng ta có thể nghỉ giải lao không?', category: 'work', formality: 'formal', context: 'Work break' },
  { id: 62, norwegian: 'Jeg forstår ikke.', vietnamese: 'Tôi không hiểu.', category: 'work', formality: 'neutral', context: 'Asking for clarification' },
  { id: 63, norwegian: 'Kan du gjenta det?', vietnamese: 'Bạn có thể nhắc lại không?', category: 'work', formality: 'formal', context: 'Asking to repeat' },
  { id: 64, norwegian: 'Jeg er enig.', vietnamese: 'Tôi đồng ý.', category: 'work', formality: 'neutral', context: 'Agreement' },
  { id: 65, norwegian: 'Jeg har et spørsmål.', vietnamese: 'Tôi có một câu hỏi.', category: 'work', formality: 'formal', context: 'Before asking question' },
  { id: 66, norwegian: 'Kan vi diskutere dette senere?', vietnamese: 'Chúng ta có thể thảo luận điều này sau không?', category: 'work', formality: 'formal', context: 'Postponing discussion' },

  // Phone Calls
  { id: 67, norwegian: 'Hallo, det er... som ringer.', vietnamese: 'Xin chào, đây là... gọi.', category: 'phone', formality: 'formal', context: 'Introducing yourself on phone' },
  { id: 68, norwegian: 'Kan jeg snakke med...?', vietnamese: 'Tôi có thể nói chuyện với... không?', category: 'phone', formality: 'formal', context: 'Asking for someone' },
  { id: 69, norwegian: 'Et øyeblikk.', vietnamese: 'Một chút.', category: 'phone', formality: 'neutral', context: 'Asking to wait' },
  { id: 70, norwegian: 'Han/Hun er ikke her akkurat nå.', vietnamese: 'Anh ấy/Cô ấy không có ở đây ngay lúc này.', category: 'phone', formality: 'formal', context: 'Person not available' },
  { id: 71, norwegian: 'Kan du ringe tilbake?', vietnamese: 'Bạn có thể gọi lại không?', category: 'phone', formality: 'formal', context: 'Asking to call back' },
  { id: 72, norwegian: 'Jeg ringer for å...', vietnamese: 'Tôi gọi để...', category: 'phone', formality: 'formal', context: 'Stating purpose' },

  // Small Talk
  { id: 73, norwegian: 'Fint vær i dag!', vietnamese: 'Hôm nay thời tiết đẹp!', category: 'smalltalk', formality: 'informal', context: 'Weather talk', culturalNote: 'Weather is a popular small talk topic in Norway' },
  { id: 74, norwegian: 'Hva gjør du i helgen?', vietnamese: 'Cuối tuần bạn làm gì?', category: 'smalltalk', formality: 'informal', context: 'Weekend plans' },
  { id: 75, norwegian: 'Har du vært i Norge lenge?', vietnamese: 'Bạn ở Na Uy lâu chưa?', category: 'smalltalk', formality: 'informal', context: 'Getting to know someone' },
  { id: 76, norwegian: 'Liker du Norge?', vietnamese: 'Bạn thích Na Uy không?', category: 'smalltalk', formality: 'informal', context: 'Opinion question' },
  { id: 77, norwegian: 'Hva synes du om...?', vietnamese: 'Bạn nghĩ gì về...?', category: 'smalltalk', formality: 'informal', context: 'Asking opinion' },
  { id: 78, norwegian: 'Det høres bra ut!', vietnamese: 'Nghe hay đấy!', category: 'smalltalk', formality: 'informal', context: 'Positive response' },
  { id: 79, norwegian: 'Jeg er spent på...', vietnamese: 'Tôi háo hức về...', category: 'smalltalk', formality: 'informal', context: 'Expressing excitement' },
  { id: 80, norwegian: 'Ha en fin dag!', vietnamese: 'Chúc một ngày tốt lành!', category: 'smalltalk', formality: 'neutral', context: 'Saying goodbye' },
];

// Dialogue scenarios
export const dialogues = [
  {
    id: 1,
    title: 'At the Coffee Shop',
    titleVi: 'Tại quán cà phê',
    category: 'restaurant',
    exchanges: [
      { speaker: 'Barista', norwegian: 'Hei! Hva kan jeg hjelpe deg med?', vietnamese: 'Xin chào! Tôi có thể giúp gì cho bạn?' },
      { speaker: 'Customer', norwegian: 'Hei! Kan jeg få en kaffe latte?', vietnamese: 'Xin chào! Tôi có thể lấy một ly cà phê latte không?' },
      { speaker: 'Barista', norwegian: 'Ja, selvfølgelig. Liten, medium eller stor?', vietnamese: 'Vâng, tất nhiên. Nhỏ, vừa hay lớn?' },
      { speaker: 'Customer', norwegian: 'Medium, takk.', vietnamese: 'Vừa, cảm ơn.' },
      { speaker: 'Barista', norwegian: 'Vil du ha noe å spise?', vietnamese: 'Bạn có muốn ăn gì không?' },
      { speaker: 'Customer', norwegian: 'Nei takk, bare kaffen.', vietnamese: 'Không, cảm ơn, chỉ cà phê thôi.' },
      { speaker: 'Barista', norwegian: 'Det blir 55 kroner.', vietnamese: 'Tất cả là 55 kroner.' },
      { speaker: 'Customer', norwegian: 'Vær så god.', vietnamese: 'Đây ạ.' },
      { speaker: 'Barista', norwegian: 'Takk! Kaffen kommer snart.', vietnamese: 'Cảm ơn! Cà phê sẽ đến ngay.' },
    ]
  },
  {
    id: 2,
    title: 'Meeting a Colleague',
    titleVi: 'Gặp đồng nghiệp',
    category: 'work',
    exchanges: [
      { speaker: 'Person A', norwegian: 'Hei! Er du ny her?', vietnamese: 'Xin chào! Bạn mới đến đây à?' },
      { speaker: 'Person B', norwegian: 'Ja, jeg begynte i går. Jeg heter Minh.', vietnamese: 'Vâng, tôi bắt đầu hôm qua. Tôi tên Minh.' },
      { speaker: 'Person A', norwegian: 'Hyggelig å møte deg, Minh! Jeg heter Erik.', vietnamese: 'Rất vui được gặp bạn, Minh! Tôi tên Erik.' },
      { speaker: 'Person B', norwegian: 'Hyggelig! Hvor lenge har du jobbet her?', vietnamese: 'Vui quá! Bạn làm ở đây bao lâu rồi?' },
      { speaker: 'Person A', norwegian: 'I tre år nå. Hvis du trenger hjelp, bare spør!', vietnamese: 'Ba năm rồi. Nếu bạn cần giúp đỡ, cứ hỏi nhé!' },
      { speaker: 'Person B', norwegian: 'Tusen takk! Det setter jeg pris på.', vietnamese: 'Cảm ơn rất nhiều! Tôi rất trân trọng điều đó.' },
    ]
  },
  {
    id: 3,
    title: 'Asking for Directions',
    titleVi: 'Hỏi đường',
    category: 'directions',
    exchanges: [
      { speaker: 'Tourist', norwegian: 'Unnskyld, kan du hjelpe meg?', vietnamese: 'Xin lỗi, bạn có thể giúp tôi không?' },
      { speaker: 'Local', norwegian: 'Ja, selvfølgelig. Hva lurer du på?', vietnamese: 'Vâng, tất nhiên. Bạn cần gì?' },
      { speaker: 'Tourist', norwegian: 'Hvordan kommer jeg til sentralstasjonen?', vietnamese: 'Làm thế nào để đến ga trung tâm?' },
      { speaker: 'Local', norwegian: 'Gå rett fram her, og ta til venstre ved trafikklyset.', vietnamese: 'Đi thẳng ở đây, rồi rẽ trái tại đèn giao thông.' },
      { speaker: 'Tourist', norwegian: 'Er det langt?', vietnamese: 'Có xa không?' },
      { speaker: 'Local', norwegian: 'Nei, bare fem minutter til fots.', vietnamese: 'Không, chỉ năm phút đi bộ.' },
      { speaker: 'Tourist', norwegian: 'Tusen takk for hjelpen!', vietnamese: 'Cảm ơn rất nhiều vì sự giúp đỡ!' },
      { speaker: 'Local', norwegian: 'Bare hyggelig! Ha det bra!', vietnamese: 'Không có gì! Tạm biệt!' },
    ]
  },
  {
    id: 4,
    title: 'At the Supermarket',
    titleVi: 'Tại siêu thị',
    category: 'shopping',
    exchanges: [
      { speaker: 'Customer', norwegian: 'Unnskyld, hvor finner jeg melk?', vietnamese: 'Xin lỗi, tôi tìm sữa ở đâu?' },
      { speaker: 'Staff', norwegian: 'Melk er i kjøledisken, der borte til høyre.', vietnamese: 'Sữa ở tủ lạnh, bên phải kia.' },
      { speaker: 'Customer', norwegian: 'Takk! Og brød?', vietnamese: 'Cảm ơn! Còn bánh mì?' },
      { speaker: 'Staff', norwegian: 'Brød er i hylle tre, rett ved inngangen.', vietnamese: 'Bánh mì ở kệ số ba, ngay cạnh lối vào.' },
      { speaker: 'Customer', norwegian: 'Perfekt, tusen takk!', vietnamese: 'Tuyệt vời, cảm ơn rất nhiều!' },
    ]
  },
  {
    id: 5,
    title: 'Booking a Hotel Room',
    titleVi: 'Đặt phòng khách sạn',
    category: 'hotel',
    exchanges: [
      { speaker: 'Guest', norwegian: 'God dag! Har dere ledige rom for i natt?', vietnamese: 'Xin chào! Các bạn còn phòng trống cho tối nay không?' },
      { speaker: 'Receptionist', norwegian: 'Ja, vi har ett dobbeltrom ledig.', vietnamese: 'Vâng, chúng tôi còn một phòng đôi.' },
      { speaker: 'Guest', norwegian: 'Hvor mye koster det per natt?', vietnamese: 'Giá một đêm bao nhiêu?' },
      { speaker: 'Receptionist', norwegian: 'Det koster 1200 kroner, inkludert frokost.', vietnamese: 'Giá 1200 kroner, bao gồm bữa sáng.' },
      { speaker: 'Guest', norwegian: 'Det høres bra ut. Jeg tar det.', vietnamese: 'Nghe được đấy. Tôi lấy phòng đó.' },
      { speaker: 'Receptionist', norwegian: 'Flott! Kan jeg få navnet ditt og passet?', vietnamese: 'Tuyệt! Tôi có thể xin tên và hộ chiếu của bạn không?' },
      { speaker: 'Guest', norwegian: 'Selvfølgelig, vær så god.', vietnamese: 'Tất nhiên, đây ạ.' },
      { speaker: 'Receptionist', norwegian: 'Takk. Rommet ditt er nummer 305 på tredje etasje.', vietnamese: 'Cảm ơn. Phòng của bạn số 305 ở tầng ba.' },
    ]
  }
];

export default phrases;
