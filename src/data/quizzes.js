// Quiz questions for Norwegian learning
export const quizCategories = [
  { id: 'vocabulary', name: 'Vocabulary', nameVi: 'Từ vựng', icon: '📚', color: 'bg-blue-500' },
  { id: 'phrases', name: 'Phrases', nameVi: 'Cụm từ', icon: '💬', color: 'bg-purple-500' },
  { id: 'grammar', name: 'Grammar', nameVi: 'Ngữ pháp', icon: '📝', color: 'bg-green-500' },
  { id: 'listening', name: 'Listening', nameVi: 'Nghe', icon: '🎧', color: 'bg-orange-500' },
  { id: 'mixed', name: 'Mixed', nameVi: 'Tổng hợp', icon: '🎯', color: 'bg-pink-500' },
];

// Multiple choice questions (Norwegian -> Vietnamese)
export const multipleChoiceNoVi = [
  { id: 1, question: 'Hei', options: ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'], correct: 0, category: 'vocabulary', difficulty: 'beginner' },
  { id: 2, question: 'Takk', options: ['Xin lỗi', 'Tạm biệt', 'Cảm ơn', 'Xin chào'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 3, question: 'Vann', options: ['Bánh mì', 'Nước', 'Sữa', 'Cà phê'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 4, question: 'Brød', options: ['Nước', 'Trứng', 'Bánh mì', 'Phô mai'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 5, question: 'Kaffe', options: ['Trà', 'Nước', 'Bia', 'Cà phê'], correct: 3, category: 'vocabulary', difficulty: 'beginner' },
  { id: 6, question: 'Mor', options: ['Bố', 'Mẹ', 'Anh trai', 'Chị gái'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 7, question: 'Far', options: ['Mẹ', 'Ông', 'Bố', 'Bà'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 8, question: 'Hus', options: ['Căn hộ', 'Khách sạn', 'Nhà', 'Trường học'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 9, question: 'Bil', options: ['Xe buýt', 'Xe đạp', 'Máy bay', 'Xe hơi'], correct: 3, category: 'vocabulary', difficulty: 'beginner' },
  { id: 10, question: 'Tog', options: ['Xe buýt', 'Tàu hỏa', 'Taxi', 'Thuyền'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 11, question: 'Fisk', options: ['Thịt', 'Gà', 'Cá', 'Tôm'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 12, question: 'Ost', options: ['Bơ', 'Sữa', 'Phô mai', 'Kem'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 13, question: 'Fjell', options: ['Biển', 'Sông', 'Rừng', 'Núi'], correct: 3, category: 'vocabulary', difficulty: 'beginner' },
  { id: 14, question: 'Hav', options: ['Núi', 'Biển', 'Hồ', 'Sông'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 15, question: 'Sol', options: ['Mặt trăng', 'Sao', 'Mặt trời', 'Mây'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 16, question: 'Regn', options: ['Tuyết', 'Gió', 'Nắng', 'Mưa'], correct: 3, category: 'vocabulary', difficulty: 'beginner' },
  { id: 17, question: 'Snø', options: ['Mưa', 'Tuyết', 'Mưa đá', 'Sương mù'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 18, question: 'Rød', options: ['Xanh', 'Vàng', 'Đỏ', 'Trắng'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 19, question: 'Blå', options: ['Đỏ', 'Xanh dương', 'Xanh lá', 'Vàng'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 20, question: 'Grønn', options: ['Đỏ', 'Vàng', 'Xanh dương', 'Xanh lá'], correct: 3, category: 'vocabulary', difficulty: 'beginner' },
  { id: 21, question: 'Svart', options: ['Trắng', 'Đen', 'Xám', 'Nâu'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 22, question: 'Hvit', options: ['Đen', 'Xám', 'Trắng', 'Hồng'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 23, question: 'Jobb', options: ['Trường học', 'Công việc', 'Nhà', 'Bệnh viện'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 24, question: 'Kontor', options: ['Nhà máy', 'Cửa hàng', 'Văn phòng', 'Ngân hàng'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 25, question: 'Leilighet', options: ['Nhà', 'Căn hộ', 'Phòng', 'Tầng hầm'], correct: 1, category: 'vocabulary', difficulty: 'intermediate' },
];

// Multiple choice questions (Vietnamese -> Norwegian)
export const multipleChoiceViNo = [
  { id: 26, question: 'Xin chào', options: ['Takk', 'Ha det', 'Hei', 'Unnskyld'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 27, question: 'Cảm ơn', options: ['Hei', 'Takk', 'Ha det', 'Ja'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 28, question: 'Tạm biệt', options: ['Hei', 'Takk', 'Ha det', 'God dag'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 29, question: 'Nước', options: ['Melk', 'Kaffe', 'Vann', 'Øl'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 30, question: 'Bánh mì', options: ['Ost', 'Brød', 'Smør', 'Egg'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 31, question: 'Cà phê', options: ['Te', 'Vann', 'Kaffe', 'Melk'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 32, question: 'Gia đình', options: ['Venner', 'Familie', 'Kollegaer', 'Naboer'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 33, question: 'Mẹ', options: ['Far', 'Søster', 'Mor', 'Bror'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 34, question: 'Bố', options: ['Mor', 'Far', 'Bestefar', 'Onkel'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 35, question: 'Nhà', options: ['Leilighet', 'Hus', 'Hytte', 'Hotell'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 36, question: 'Xe hơi', options: ['Buss', 'Tog', 'Bil', 'Sykkel'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 37, question: 'Máy bay', options: ['Tog', 'Buss', 'Båt', 'Fly'], correct: 3, category: 'vocabulary', difficulty: 'beginner' },
  { id: 38, question: 'Núi', options: ['Hav', 'Elv', 'Fjell', 'Skog'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 39, question: 'Biển', options: ['Fjell', 'Hav', 'Innsjø', 'Elv'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 40, question: 'Mưa', options: ['Sol', 'Snø', 'Vind', 'Regn'], correct: 3, category: 'vocabulary', difficulty: 'beginner' },
  { id: 41, question: 'Tuyết', options: ['Regn', 'Snø', 'Is', 'Tåke'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 42, question: 'Đỏ', options: ['Blå', 'Grønn', 'Rød', 'Gul'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 43, question: 'Xanh dương', options: ['Rød', 'Blå', 'Grønn', 'Hvit'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 44, question: 'Vàng', options: ['Gul', 'Oransje', 'Brun', 'Rosa'], correct: 0, category: 'vocabulary', difficulty: 'beginner' },
  { id: 45, question: 'Đen', options: ['Hvit', 'Grå', 'Svart', 'Brun'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 46, question: 'Công việc', options: ['Skole', 'Jobb', 'Hjem', 'Ferie'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 47, question: 'Văn phòng', options: ['Fabrikk', 'Kontor', 'Butikk', 'Skole'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
  { id: 48, question: 'Thời tiết', options: ['Tid', 'Dag', 'Vær', 'Sesong'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 49, question: 'Hôm nay', options: ['I morgen', 'I går', 'I dag', 'Nå'], correct: 2, category: 'vocabulary', difficulty: 'beginner' },
  { id: 50, question: 'Ngày mai', options: ['I dag', 'I morgen', 'I går', 'Snart'], correct: 1, category: 'vocabulary', difficulty: 'beginner' },
];

// Fill in the blanks questions
export const fillInTheBlanks = [
  { id: 51, sentence: 'Jeg ____ norsk.', answer: 'snakker', options: ['snakker', 'spiser', 'drikker', 'leser'], translation: 'Tôi nói tiếng Na Uy.', category: 'grammar', difficulty: 'beginner' },
  { id: 52, sentence: 'Hun ____ kaffe hver morgen.', answer: 'drikker', options: ['spiser', 'drikker', 'lager', 'kjøper'], translation: 'Cô ấy uống cà phê mỗi sáng.', category: 'grammar', difficulty: 'beginner' },
  { id: 53, sentence: 'Vi ____ til skolen.', answer: 'går', options: ['sover', 'går', 'spiser', 'leser'], translation: 'Chúng tôi đi đến trường.', category: 'grammar', difficulty: 'beginner' },
  { id: 54, sentence: 'De ____ i Oslo.', answer: 'bor', options: ['jobber', 'bor', 'reiser', 'kommer'], translation: 'Họ sống ở Oslo.', category: 'grammar', difficulty: 'beginner' },
  { id: 55, sentence: 'Jeg ____ i en bank.', answer: 'jobber', options: ['bor', 'sover', 'jobber', 'går'], translation: 'Tôi làm việc ở ngân hàng.', category: 'grammar', difficulty: 'beginner' },
  { id: 56, sentence: 'Barna ____ på skolen.', answer: 'er', options: ['har', 'er', 'gjør', 'tar'], translation: 'Những đứa trẻ ở trường.', category: 'grammar', difficulty: 'beginner' },
  { id: 57, sentence: 'Han ____ en ny bil.', answer: 'har', options: ['er', 'har', 'gjør', 'tar'], translation: 'Anh ấy có một chiếc xe mới.', category: 'grammar', difficulty: 'beginner' },
  { id: 58, sentence: 'Huset ____ stort.', answer: 'er', options: ['har', 'er', 'blir', 'var'], translation: 'Ngôi nhà lớn.', category: 'grammar', difficulty: 'beginner' },
  { id: 59, sentence: 'Jeg ____ mat nå.', answer: 'lager', options: ['lager', 'spiser', 'kjøper', 'selger'], translation: 'Tôi đang nấu ăn.', category: 'grammar', difficulty: 'intermediate' },
  { id: 60, sentence: 'De ____ til Norge i sommer.', answer: 'reiser', options: ['bor', 'reiser', 'kommer', 'går'], translation: 'Họ đi Na Uy vào mùa hè.', category: 'grammar', difficulty: 'intermediate' },
  { id: 61, sentence: 'Været ____ fint i dag.', answer: 'er', options: ['har', 'er', 'blir', 'gjør'], translation: 'Thời tiết đẹp hôm nay.', category: 'grammar', difficulty: 'beginner' },
  { id: 62, sentence: 'Jeg ____ ikke norsk.', answer: 'forstår', options: ['snakker', 'hører', 'forstår', 'ser'], translation: 'Tôi không hiểu tiếng Na Uy.', category: 'grammar', difficulty: 'intermediate' },
  { id: 63, sentence: 'Kan du ____ meg?', answer: 'hjelpe', options: ['hjelpe', 'se', 'høre', 'finne'], translation: 'Bạn có thể giúp tôi không?', category: 'grammar', difficulty: 'beginner' },
  { id: 64, sentence: 'Jeg ____ å lære norsk.', answer: 'liker', options: ['hater', 'liker', 'trenger', 'prøver'], translation: 'Tôi thích học tiếng Na Uy.', category: 'grammar', difficulty: 'beginner' },
  { id: 65, sentence: 'Hun ____ veldig pen.', answer: 'er', options: ['har', 'er', 'ser', 'blir'], translation: 'Cô ấy rất đẹp.', category: 'grammar', difficulty: 'beginner' },
];

// Sentence construction questions
export const sentenceConstruction = [
  { id: 66, words: ['Jeg', 'norsk', 'snakker'], correct: 'Jeg snakker norsk', translation: 'Tôi nói tiếng Na Uy', category: 'grammar', difficulty: 'beginner' },
  { id: 67, words: ['heter', 'Hva', 'du'], correct: 'Hva heter du', translation: 'Bạn tên là gì', category: 'grammar', difficulty: 'beginner' },
  { id: 68, words: ['er', 'Hvor', 'du', 'fra'], correct: 'Hvor er du fra', translation: 'Bạn đến từ đâu', category: 'grammar', difficulty: 'beginner' },
  { id: 69, words: ['Det', 'regner', 'dag', 'i'], correct: 'Det regner i dag', translation: 'Hôm nay trời mưa', category: 'grammar', difficulty: 'beginner' },
  { id: 70, words: ['Jeg', 'kaffe', 'drikker', 'liker', 'å'], correct: 'Jeg liker å drikke kaffe', translation: 'Tôi thích uống cà phê', category: 'grammar', difficulty: 'intermediate' },
  { id: 71, words: ['bor', 'i', 'Vi', 'Norge'], correct: 'Vi bor i Norge', translation: 'Chúng tôi sống ở Na Uy', category: 'grammar', difficulty: 'beginner' },
  { id: 72, words: ['Kan', 'meg', 'hjelpe', 'du'], correct: 'Kan du hjelpe meg', translation: 'Bạn có thể giúp tôi không', category: 'grammar', difficulty: 'beginner' },
  { id: 73, words: ['fint', 'er', 'Været', 'dag', 'i'], correct: 'Været er fint i dag', translation: 'Thời tiết đẹp hôm nay', category: 'grammar', difficulty: 'beginner' },
  { id: 74, words: ['har', 'søster', 'en', 'Jeg'], correct: 'Jeg har en søster', translation: 'Tôi có một chị/em gái', category: 'grammar', difficulty: 'beginner' },
  { id: 75, words: ['toalettet', 'Hvor', 'er'], correct: 'Hvor er toalettet', translation: 'Nhà vệ sinh ở đâu', category: 'grammar', difficulty: 'beginner' },
];

// Image matching questions (descriptions for images)
export const imageMatching = [
  { id: 76, image: 'apple', correctWord: 'Eple', options: ['Eple', 'Appelsin', 'Banan', 'Pære'], category: 'vocabulary', difficulty: 'beginner', description: '🍎' },
  { id: 77, image: 'car', correctWord: 'Bil', options: ['Buss', 'Tog', 'Bil', 'Sykkel'], category: 'vocabulary', difficulty: 'beginner', description: '🚗' },
  { id: 78, image: 'house', correctWord: 'Hus', options: ['Leilighet', 'Hus', 'Hytte', 'Hotell'], category: 'vocabulary', difficulty: 'beginner', description: '🏠' },
  { id: 79, image: 'dog', correctWord: 'Hund', options: ['Katt', 'Hund', 'Fugl', 'Fisk'], category: 'vocabulary', difficulty: 'beginner', description: '🐕' },
  { id: 80, image: 'cat', correctWord: 'Katt', options: ['Hund', 'Katt', 'Mus', 'Kanin'], category: 'vocabulary', difficulty: 'beginner', description: '🐱' },
  { id: 81, image: 'sun', correctWord: 'Sol', options: ['Måne', 'Stjerne', 'Sol', 'Sky'], category: 'vocabulary', difficulty: 'beginner', description: '☀️' },
  { id: 82, image: 'tree', correctWord: 'Tre', options: ['Blomst', 'Tre', 'Gress', 'Busk'], category: 'vocabulary', difficulty: 'beginner', description: '🌳' },
  { id: 83, image: 'book', correctWord: 'Bok', options: ['Avis', 'Magasin', 'Bok', 'Brev'], category: 'vocabulary', difficulty: 'beginner', description: '📚' },
  { id: 84, image: 'phone', correctWord: 'Telefon', options: ['Datamaskin', 'Telefon', 'TV', 'Radio'], category: 'vocabulary', difficulty: 'beginner', description: '📱' },
  { id: 85, image: 'water', correctWord: 'Vann', options: ['Melk', 'Kaffe', 'Vann', 'Juice'], category: 'vocabulary', difficulty: 'beginner', description: '💧' },
  { id: 86, image: 'bread', correctWord: 'Brød', options: ['Kake', 'Brød', 'Kjeks', 'Bolle'], category: 'vocabulary', difficulty: 'beginner', description: '🍞' },
  { id: 87, image: 'fish', correctWord: 'Fisk', options: ['Kjøtt', 'Kylling', 'Fisk', 'Reke'], category: 'vocabulary', difficulty: 'beginner', description: '🐟' },
  { id: 88, image: 'mountain', correctWord: 'Fjell', options: ['Hav', 'Fjell', 'Elv', 'Skog'], category: 'vocabulary', difficulty: 'beginner', description: '🏔️' },
  { id: 89, image: 'rain', correctWord: 'Regn', options: ['Sol', 'Snø', 'Regn', 'Vind'], category: 'vocabulary', difficulty: 'beginner', description: '🌧️' },
  { id: 90, image: 'snow', correctWord: 'Snø', options: ['Regn', 'Snø', 'Is', 'Tåke'], category: 'vocabulary', difficulty: 'beginner', description: '❄️' },
];

// Phrase completion questions
export const phraseCompletion = [
  { id: 91, question: 'Complete the greeting: "God ____"', options: ['morgen', 'dag', 'kveld', 'All of the above'], correct: 3, translation: 'Chào buổi sáng/trưa/tối', category: 'phrases', difficulty: 'beginner' },
  { id: 92, question: 'How do you say "Nice to meet you"?', options: ['Ha det bra', 'Hyggelig å møte deg', 'Takk for sist', 'Vi sees'], correct: 1, translation: 'Rất vui được gặp bạn', category: 'phrases', difficulty: 'beginner' },
  { id: 93, question: '"Unnskyld" means:', options: ['Thank you', 'Goodbye', 'Excuse me/Sorry', 'Hello'], correct: 2, translation: 'Xin lỗi', category: 'phrases', difficulty: 'beginner' },
  { id: 94, question: 'How do you ask "Where is...?"', options: ['Hva er...?', 'Hvor er...?', 'Hvem er...?', 'Når er...?'], correct: 1, translation: '... ở đâu?', category: 'phrases', difficulty: 'beginner' },
  { id: 95, question: '"Tusen takk" means:', options: ['One thousand', 'Thank you very much', 'Please', 'You\'re welcome'], correct: 1, translation: 'Cảm ơn rất nhiều', category: 'phrases', difficulty: 'beginner' },
  { id: 96, question: 'How do you ask "How much does it cost?"', options: ['Hvor mye koster det?', 'Hva heter du?', 'Hvor bor du?', 'Hvordan går det?'], correct: 0, translation: 'Cái này giá bao nhiêu?', category: 'phrases', difficulty: 'beginner' },
  { id: 97, question: '"Vær så snill" is used to say:', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 0, translation: 'Làm ơn', category: 'phrases', difficulty: 'beginner' },
  { id: 98, question: 'What does "Jeg forstår ikke" mean?', options: ['I don\'t know', 'I don\'t understand', 'I don\'t want', 'I don\'t have'], correct: 1, translation: 'Tôi không hiểu', category: 'phrases', difficulty: 'intermediate' },
  { id: 99, question: 'How do you say "See you later"?', options: ['Ha det', 'Vi sees', 'God natt', 'Farvel'], correct: 1, translation: 'Hẹn gặp lại', category: 'phrases', difficulty: 'beginner' },
  { id: 100, question: '"Kan jeg få..." means:', options: ['Can you give...', 'Can I have...', 'Do you have...', 'Where is...'], correct: 1, translation: 'Tôi có thể lấy...', category: 'phrases', difficulty: 'beginner' },
];

// Grammar questions
export const grammarQuestions = [
  { id: 101, question: 'Which is the correct indefinite article for masculine nouns?', options: ['en', 'et', 'ei', 'den'], correct: 0, explanation: '"En" is used for masculine nouns (en gutt, en bil)', category: 'grammar', difficulty: 'beginner' },
  { id: 102, question: 'Which is the correct indefinite article for neuter nouns?', options: ['en', 'et', 'ei', 'det'], correct: 1, explanation: '"Et" is used for neuter nouns (et hus, et barn)', category: 'grammar', difficulty: 'beginner' },
  { id: 103, question: 'How do you form the plural of "en bok"?', options: ['boker', 'bøker', 'bokene', 'boken'], correct: 1, explanation: 'Many nouns change vowel in plural: bok → bøker', category: 'grammar', difficulty: 'intermediate' },
  { id: 104, question: 'What is the past tense of "å være" (to be)?', options: ['er', 'var', 'vært', 'være'], correct: 1, explanation: 'Å være is irregular: er (present) → var (past)', category: 'grammar', difficulty: 'beginner' },
  { id: 105, question: 'Which sentence uses correct word order?', options: ['Jeg i dag går til skolen', 'I dag jeg går til skolen', 'I dag går jeg til skolen', 'Går jeg i dag til skolen'], correct: 2, explanation: 'V2 rule: verb must be second element. Time expressions can come first.', category: 'grammar', difficulty: 'intermediate' },
  { id: 106, question: 'How do you say "the house" (definite form)?', options: ['en hus', 'et hus', 'huset', 'husen'], correct: 2, explanation: 'Neuter nouns add -et for definite: hus → huset', category: 'grammar', difficulty: 'beginner' },
  { id: 107, question: 'Which is correct: "Jeg liker ____" (I like to read)', options: ['lese', 'å lese', 'leser', 'lest'], correct: 1, explanation: 'After "liker" use infinitive with "å": liker å lese', category: 'grammar', difficulty: 'intermediate' },
  { id: 108, question: 'What is "stor" (big) in comparative form?', options: ['stor', 'større', 'størst', 'storere'], correct: 1, explanation: 'Most adjectives add -ere for comparative: stor → større', category: 'grammar', difficulty: 'intermediate' },
  { id: 109, question: 'Which pronoun means "we"?', options: ['jeg', 'du', 'vi', 'de'], correct: 2, explanation: 'Vi = we, jeg = I, du = you, de = they', category: 'grammar', difficulty: 'beginner' },
  { id: 110, question: 'How do you negate a verb?', options: ['Add "nei" before', 'Add "ikke" after', 'Add "ingen" before', 'Add "aldri" before'], correct: 1, explanation: '"Ikke" comes after the verb: Jeg snakker ikke norsk', category: 'grammar', difficulty: 'beginner' },
];

// Export all quiz data
export const allQuizzes = [
  ...multipleChoiceNoVi,
  ...multipleChoiceViNo,
  ...fillInTheBlanks,
  ...sentenceConstruction,
  ...imageMatching,
  ...phraseCompletion,
  ...grammarQuestions,
];

export default allQuizzes;
