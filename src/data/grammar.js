// Norwegian grammar lessons with Vietnamese explanations
export const grammarTopics = [
  {
    id: 'articles',
    title: 'Articles',
    titleVi: 'Mạo từ',
    icon: '📖',
    difficulty: 'beginner',
    content: {
      introduction: 'Trong tiếng Na Uy, danh từ có giới tính ngữ pháp. Có ba giới tính: nam (maskulin), nữ (feminin), và trung tính (nøytrum). Mỗi giới tính có mạo từ không xác định riêng.',
      sections: [
        {
          title: 'Mạo từ không xác định (Indefinite Articles)',
          content: 'Mạo từ không xác định đứng trước danh từ và tương đương với "a/an" trong tiếng Anh.',
          table: {
            headers: ['Giới tính', 'Mạo từ', 'Ví dụ', 'Nghĩa'],
            rows: [
              ['Nam (Maskulin)', 'en', 'en gutt', 'một cậu bé'],
              ['Nữ (Feminin)', 'ei', 'ei jente', 'một cô gái'],
              ['Trung tính (Nøytrum)', 'et', 'et barn', 'một đứa trẻ'],
            ]
          }
        },
        {
          title: 'Mạo từ xác định (Definite Articles)',
          content: 'Trong tiếng Na Uy, mạo từ xác định được gắn vào cuối danh từ (hậu tố).',
          table: {
            headers: ['Giới tính', 'Hậu tố', 'Ví dụ', 'Nghĩa'],
            rows: [
              ['Nam', '-en', 'gutten', 'cậu bé (đó)'],
              ['Nữ', '-a', 'jenta', 'cô gái (đó)'],
              ['Trung tính', '-et', 'barnet', 'đứa trẻ (đó)'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg ser en hund.', vietnamese: 'Tôi thấy một con chó.' },
        { norwegian: 'Hunden er stor.', vietnamese: 'Con chó (đó) lớn.' },
        { norwegian: 'Et hus er dyrt.', vietnamese: 'Một ngôi nhà đắt tiền.' },
        { norwegian: 'Huset er gammelt.', vietnamese: 'Ngôi nhà (đó) cũ.' },
      ],
      tips: [
        'Hầu hết người Na Uy hiện đại sử dụng "en" thay cho "ei" cho giới tính nữ.',
        'Học thuộc giới tính của danh từ cùng với từ vựng.',
        'Danh từ trung tính thường là từ một âm tiết.',
      ],
      exercises: [
        { question: 'Hoàn thành: ___ bok (một quyển sách)', answer: 'en/ei', type: 'fill' },
        { question: 'Dạng xác định của "hus":', answer: 'huset', type: 'fill' },
        { question: 'Dạng xác định của "gutt":', answer: 'gutten', type: 'fill' },
      ]
    }
  },
  {
    id: 'pronouns',
    title: 'Personal Pronouns',
    titleVi: 'Đại từ nhân xưng',
    icon: '👤',
    difficulty: 'beginner',
    content: {
      introduction: 'Đại từ nhân xưng trong tiếng Na Uy thay đổi theo vai trò trong câu (chủ ngữ, tân ngữ). Đây là những từ cơ bản và quan trọng nhất.',
      sections: [
        {
          title: 'Đại từ chủ ngữ (Subject Pronouns)',
          content: 'Được sử dụng khi đại từ là chủ ngữ của câu.',
          table: {
            headers: ['Tiếng Na Uy', 'Tiếng Việt', 'Ví dụ'],
            rows: [
              ['jeg', 'tôi', 'Jeg er student.'],
              ['du', 'bạn', 'Du er snill.'],
              ['han', 'anh ấy', 'Han jobber her.'],
              ['hun', 'cô ấy', 'Hun leser bok.'],
              ['det/den', 'nó', 'Det regner.'],
              ['vi', 'chúng tôi', 'Vi bor i Norge.'],
              ['dere', 'các bạn', 'Dere er velkommen.'],
              ['de', 'họ', 'De snakker norsk.'],
            ]
          }
        },
        {
          title: 'Đại từ tân ngữ (Object Pronouns)',
          content: 'Được sử dụng khi đại từ là tân ngữ của động từ hoặc giới từ.',
          table: {
            headers: ['Chủ ngữ', 'Tân ngữ', 'Nghĩa'],
            rows: [
              ['jeg', 'meg', 'tôi'],
              ['du', 'deg', 'bạn'],
              ['han', 'ham/han', 'anh ấy'],
              ['hun', 'henne', 'cô ấy'],
              ['vi', 'oss', 'chúng tôi'],
              ['dere', 'dere', 'các bạn'],
              ['de', 'dem', 'họ'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg ser deg.', vietnamese: 'Tôi thấy bạn.' },
        { norwegian: 'Han gir meg en bok.', vietnamese: 'Anh ấy cho tôi một quyển sách.' },
        { norwegian: 'Vi liker dem.', vietnamese: 'Chúng tôi thích họ.' },
        { norwegian: 'Hun snakker med oss.', vietnamese: 'Cô ấy nói chuyện với chúng tôi.' },
      ],
      tips: [
        '"Deg" được phát âm như "day".',
        '"De" (họ) được phát âm giống "dee".',
        'Trong tiếng Na Uy nói, "ham" thường được thay bằng "han" cho tân ngữ.',
      ],
      exercises: [
        { question: 'Dạng tân ngữ của "jeg":', answer: 'meg', type: 'fill' },
        { question: 'Dạng tân ngữ của "hun":', answer: 'henne', type: 'fill' },
        { question: 'Hoàn thành: De ser ___. (chúng tôi)', answer: 'oss', type: 'fill' },
      ]
    }
  },
  {
    id: 'verbs-present',
    title: 'Present Tense Verbs',
    titleVi: 'Động từ thì hiện tại',
    icon: '⏰',
    difficulty: 'beginner',
    content: {
      introduction: 'Thì hiện tại trong tiếng Na Uy được tạo bằng cách thêm -r vào gốc động từ. Điều tuyệt vời là động từ không thay đổi theo ngôi!',
      sections: [
        {
          title: 'Quy tắc chung',
          content: 'Hầu hết động từ thêm -r vào nguyên thể (bỏ "å").',
          table: {
            headers: ['Nguyên thể', 'Hiện tại', 'Nghĩa'],
            rows: [
              ['å snakke', 'snakker', 'nói'],
              ['å bo', 'bor', 'sống'],
              ['å jobbe', 'jobber', 'làm việc'],
              ['å lese', 'leser', 'đọc'],
              ['å spise', 'spiser', 'ăn'],
            ]
          }
        },
        {
          title: 'Động từ bất quy tắc quan trọng',
          content: 'Một số động từ quan trọng có dạng bất quy tắc.',
          table: {
            headers: ['Nguyên thể', 'Hiện tại', 'Nghĩa'],
            rows: [
              ['å være', 'er', 'là/ở'],
              ['å ha', 'har', 'có'],
              ['å gjøre', 'gjør', 'làm'],
              ['å si', 'sier', 'nói'],
              ['å vite', 'vet', 'biết'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg snakker norsk.', vietnamese: 'Tôi nói tiếng Na Uy.' },
        { norwegian: 'Hun leser en bok.', vietnamese: 'Cô ấy đọc một quyển sách.' },
        { norwegian: 'Vi er studenter.', vietnamese: 'Chúng tôi là sinh viên.' },
        { norwegian: 'De har en bil.', vietnamese: 'Họ có một chiếc xe.' },
      ],
      tips: [
        'Động từ không thay đổi theo ngôi: jeg snakker, du snakker, han snakker...',
        'Học thuộc động từ bất quy tắc vì chúng rất phổ biến.',
        '"Å være" (er) tương đương với "to be" trong tiếng Anh.',
      ],
      exercises: [
        { question: 'Chia động từ "å lære" (học):', answer: 'lærer', type: 'fill' },
        { question: 'Chia động từ "å komme" (đến):', answer: 'kommer', type: 'fill' },
        { question: 'Dạng hiện tại của "å ha":', answer: 'har', type: 'fill' },
      ]
    }
  },
  {
    id: 'verbs-past',
    title: 'Past Tense Verbs',
    titleVi: 'Động từ thì quá khứ',
    icon: '📅',
    difficulty: 'intermediate',
    content: {
      introduction: 'Thì quá khứ trong tiếng Na Uy phức tạp hơn hiện tại vì có nhiều nhóm động từ khác nhau với các quy tắc khác nhau.',
      sections: [
        {
          title: 'Nhóm 1: Động từ yếu đuôi -et',
          content: 'Động từ có gốc kết thúc bằng hai phụ âm hoặc -v, -g.',
          table: {
            headers: ['Nguyên thể', 'Quá khứ', 'Nghĩa'],
            rows: [
              ['å jobbe', 'jobbet', 'làm việc'],
              ['å snakke', 'snakket', 'nói'],
              ['å leve', 'levde', 'sống'],
            ]
          }
        },
        {
          title: 'Nhóm 2: Động từ yếu đuôi -te/-de',
          content: 'Động từ có gốc kết thúc bằng một phụ âm.',
          table: {
            headers: ['Nguyên thể', 'Quá khứ', 'Nghĩa'],
            rows: [
              ['å lese', 'leste', 'đọc'],
              ['å kjøpe', 'kjøpte', 'mua'],
              ['å bo', 'bodde', 'sống'],
            ]
          }
        },
        {
          title: 'Động từ bất quy tắc',
          content: 'Những động từ quan trọng nhất thường bất quy tắc.',
          table: {
            headers: ['Nguyên thể', 'Quá khứ', 'Nghĩa'],
            rows: [
              ['å være', 'var', 'là/ở'],
              ['å ha', 'hadde', 'có'],
              ['å gå', 'gikk', 'đi'],
              ['å komme', 'kom', 'đến'],
              ['å se', 'så', 'thấy'],
              ['å ta', 'tok', 'lấy'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg jobbet i går.', vietnamese: 'Tôi đã làm việc hôm qua.' },
        { norwegian: 'Hun leste en bok.', vietnamese: 'Cô ấy đã đọc một quyển sách.' },
        { norwegian: 'Vi var i Oslo.', vietnamese: 'Chúng tôi đã ở Oslo.' },
        { norwegian: 'De kom sent.', vietnamese: 'Họ đã đến trễ.' },
      ],
      tips: [
        'Quá khứ không thay đổi theo ngôi, giống như hiện tại.',
        'Học thuộc động từ bất quy tắc vì chúng rất phổ biến.',
        'Nhiều động từ mạnh thay đổi nguyên âm trong quá khứ.',
      ],
      exercises: [
        { question: 'Quá khứ của "å spise":', answer: 'spiste', type: 'fill' },
        { question: 'Quá khứ của "å gå":', answer: 'gikk', type: 'fill' },
        { question: 'Quá khứ của "å være":', answer: 'var', type: 'fill' },
      ]
    }
  },
  {
    id: 'word-order',
    title: 'Word Order (V2 Rule)',
    titleVi: 'Trật tự từ (Quy tắc V2)',
    icon: '📝',
    difficulty: 'intermediate',
    content: {
      introduction: 'Tiếng Na Uy tuân theo quy tắc V2 (Verb Second): động từ chính luôn ở vị trí thứ hai trong câu trần thuật. Đây là một trong những khác biệt lớn so với tiếng Việt và tiếng Anh.',
      sections: [
        {
          title: 'Câu cơ bản',
          content: 'Trong câu đơn giản, trật tự là: Chủ ngữ + Động từ + Tân ngữ (như tiếng Anh).',
          table: {
            headers: ['Vị trí 1', 'Vị trí 2 (Động từ)', 'Phần còn lại'],
            rows: [
              ['Jeg', 'snakker', 'norsk.'],
              ['Hun', 'leser', 'en bok.'],
              ['Vi', 'bor', 'i Oslo.'],
            ]
          }
        },
        {
          title: 'Khi có trạng ngữ đầu câu',
          content: 'Nếu câu bắt đầu bằng trạng ngữ (thời gian, nơi chốn...), chủ ngữ phải đảo sau động từ.',
          table: {
            headers: ['Vị trí 1', 'Vị trí 2 (V)', 'Chủ ngữ', 'Phần còn lại'],
            rows: [
              ['I dag', 'snakker', 'jeg', 'norsk.'],
              ['I morgen', 'reiser', 'vi', 'til Bergen.'],
              ['Her', 'bor', 'hun', '.'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg jobber i dag.', vietnamese: 'Tôi làm việc hôm nay.' },
        { norwegian: 'I dag jobber jeg.', vietnamese: 'Hôm nay tôi làm việc.' },
        { norwegian: 'Vanligvis spiser vi middag klokken seks.', vietnamese: 'Thông thường chúng tôi ăn tối lúc 6 giờ.' },
        { norwegian: 'Nå går jeg hjem.', vietnamese: 'Bây giờ tôi về nhà.' },
      ],
      tips: [
        'Luôn nhớ: động từ ở vị trí THỨ HAI, không phải đầu câu.',
        'Khi bắt đầu bằng trạng ngữ, chủ ngữ "nhảy" sang sau động từ.',
        'So sánh với tiếng Việt: "Hôm nay tôi làm việc" vs Na Uy "I dag jobber jeg".',
      ],
      exercises: [
        { question: 'Sắp xếp: "norsk / i dag / snakker / jeg"', answer: 'I dag snakker jeg norsk.', type: 'arrange' },
        { question: 'Sắp xếp: "vi / nå / spiser"', answer: 'Nå spiser vi.', type: 'arrange' },
      ]
    }
  },
  {
    id: 'negation',
    title: 'Negation',
    titleVi: 'Câu phủ định',
    icon: '🚫',
    difficulty: 'beginner',
    content: {
      introduction: 'Để tạo câu phủ định trong tiếng Na Uy, chúng ta sử dụng "ikke" (không). Vị trí của "ikke" rất quan trọng!',
      sections: [
        {
          title: 'Quy tắc cơ bản',
          content: '"Ikke" thường đặt SAU động từ chính.',
          table: {
            headers: ['Khẳng định', 'Phủ định'],
            rows: [
              ['Jeg snakker norsk.', 'Jeg snakker ikke norsk.'],
              ['Hun er student.', 'Hun er ikke student.'],
              ['Vi har bil.', 'Vi har ikke bil.'],
            ]
          }
        },
        {
          title: 'Các từ phủ định khác',
          content: 'Ngoài "ikke", còn có các từ phủ định khác.',
          table: {
            headers: ['Từ', 'Nghĩa', 'Ví dụ'],
            rows: [
              ['ikke', 'không', 'Jeg liker ikke kaffe.'],
              ['aldri', 'không bao giờ', 'Hun kommer aldri sent.'],
              ['ingen/ingenting', 'không gì', 'Det er ingen her.'],
              ['hverken...eller', 'không...cũng không', 'Hverken han eller hun.'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg forstår ikke norsk.', vietnamese: 'Tôi không hiểu tiếng Na Uy.' },
        { norwegian: 'Det er ikke dyrt.', vietnamese: 'Nó không đắt.' },
        { norwegian: 'Vi drar aldri dit.', vietnamese: 'Chúng tôi không bao giờ đi đó.' },
        { norwegian: 'Han liker hverken kaffe eller te.', vietnamese: 'Anh ấy không thích cả cà phê lẫn trà.' },
      ],
      tips: [
        '"Ikke" đứng SAU động từ trong câu chính.',
        'Trong câu phụ, "ikke" đứng TRƯỚC động từ.',
        '"Ingen" được dùng cho danh từ, "ingenting" cho "không có gì".',
      ],
      exercises: [
        { question: 'Phủ định: "Jeg spiser fisk."', answer: 'Jeg spiser ikke fisk.', type: 'transform' },
        { question: 'Phủ định: "Hun er her."', answer: 'Hun er ikke her.', type: 'transform' },
      ]
    }
  },
  {
    id: 'questions',
    title: 'Question Formation',
    titleVi: 'Cách đặt câu hỏi',
    icon: '❓',
    difficulty: 'beginner',
    content: {
      introduction: 'Có hai loại câu hỏi chính trong tiếng Na Uy: câu hỏi Yes/No và câu hỏi có từ hỏi (Wh-questions).',
      sections: [
        {
          title: 'Câu hỏi Yes/No',
          content: 'Đảo động từ lên đầu câu.',
          table: {
            headers: ['Câu trần thuật', 'Câu hỏi'],
            rows: [
              ['Du snakker norsk.', 'Snakker du norsk?'],
              ['Han er student.', 'Er han student?'],
              ['De kommer i morgen.', 'Kommer de i morgen?'],
            ]
          }
        },
        {
          title: 'Các từ hỏi (Question Words)',
          content: 'Từ hỏi đứng đầu câu, theo sau là động từ.',
          table: {
            headers: ['Từ hỏi', 'Nghĩa', 'Ví dụ'],
            rows: [
              ['Hva', 'Cái gì', 'Hva heter du?'],
              ['Hvem', 'Ai', 'Hvem er det?'],
              ['Hvor', 'Ở đâu', 'Hvor bor du?'],
              ['Når', 'Khi nào', 'Når kommer du?'],
              ['Hvorfor', 'Tại sao', 'Hvorfor lærer du norsk?'],
              ['Hvordan', 'Như thế nào', 'Hvordan har du det?'],
              ['Hvilken/Hvilket/Hvilke', 'Cái nào', 'Hvilken bok leser du?'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Hva gjør du?', vietnamese: 'Bạn đang làm gì?' },
        { norwegian: 'Hvor er toalettet?', vietnamese: 'Nhà vệ sinh ở đâu?' },
        { norwegian: 'Når begynner filmen?', vietnamese: 'Phim bắt đầu lúc mấy giờ?' },
        { norwegian: 'Liker du norsk mat?', vietnamese: 'Bạn có thích đồ ăn Na Uy không?' },
      ],
      tips: [
        'Câu hỏi Yes/No: đảo động từ + chủ ngữ.',
        'Câu hỏi Wh-: Từ hỏi + động từ + chủ ngữ.',
        '"Hvilken/Hvilket/Hvilke" thay đổi theo giới tính và số.',
      ],
      exercises: [
        { question: 'Tạo câu hỏi: "Du bor i Oslo."', answer: 'Bor du i Oslo?', type: 'transform' },
        { question: 'Hỏi "ở đâu" với "du jobber"', answer: 'Hvor jobber du?', type: 'transform' },
      ]
    }
  },
  {
    id: 'adjectives',
    title: 'Adjectives',
    titleVi: 'Tính từ',
    icon: '🎨',
    difficulty: 'intermediate',
    content: {
      introduction: 'Tính từ trong tiếng Na Uy phải hòa hợp với danh từ về giới tính và số. Vị trí tính từ cũng thay đổi tùy theo cách sử dụng.',
      sections: [
        {
          title: 'Tính từ với danh từ không xác định',
          content: 'Tính từ đứng trước danh từ và thay đổi theo giới tính.',
          table: {
            headers: ['Giới tính', 'Cấu trúc', 'Ví dụ', 'Nghĩa'],
            rows: [
              ['Nam', 'en + adj + noun', 'en stor bil', 'một xe lớn'],
              ['Nữ', 'ei + adj + noun', 'ei stor jente', 'một cô gái lớn'],
              ['Trung', 'et + adj-t + noun', 'et stort hus', 'một nhà lớn'],
              ['Số nhiều', 'adj-e + noun', 'store biler', 'những xe lớn'],
            ]
          }
        },
        {
          title: 'Tính từ với danh từ xác định',
          content: 'Cần dùng "double definite" với tính từ.',
          table: {
            headers: ['Cấu trúc', 'Ví dụ', 'Nghĩa'],
            rows: [
              ['den + adj-e + noun-en', 'den store bilen', 'chiếc xe lớn đó'],
              ['det + adj-e + noun-et', 'det store huset', 'ngôi nhà lớn đó'],
              ['de + adj-e + noun-ene', 'de store bilene', 'những chiếc xe lớn đó'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg har en ny bil.', vietnamese: 'Tôi có một chiếc xe mới.' },
        { norwegian: 'Huset er stort.', vietnamese: 'Ngôi nhà thì lớn.' },
        { norwegian: 'Den nye bilen er dyr.', vietnamese: 'Chiếc xe mới đó đắt.' },
        { norwegian: 'Små barn liker is.', vietnamese: 'Trẻ nhỏ thích kem.' },
      ],
      tips: [
        'Tính từ trung tính thêm -t: stor → stort.',
        'Số nhiều và xác định thêm -e: stor → store.',
        'Một số tính từ bất quy tắc: liten (små), gammel (gamle).',
      ],
      exercises: [
        { question: 'Điền vào: et ___ hus (stor)', answer: 'stort', type: 'fill' },
        { question: 'Điền vào: de ___ barna (liten)', answer: 'små', type: 'fill' },
      ]
    }
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    titleVi: 'Giới từ',
    icon: '📍',
    difficulty: 'intermediate',
    content: {
      introduction: 'Giới từ trong tiếng Na Uy chỉ vị trí, hướng, thời gian và mối quan hệ. Việc sử dụng giới từ thường khác với tiếng Việt.',
      sections: [
        {
          title: 'Giới từ chỉ nơi chốn',
          content: 'Các giới từ phổ biến chỉ vị trí và hướng.',
          table: {
            headers: ['Giới từ', 'Nghĩa', 'Ví dụ'],
            rows: [
              ['i', 'trong', 'i huset (trong nhà)'],
              ['på', 'trên', 'på bordet (trên bàn)'],
              ['til', 'đến', 'til Oslo (đến Oslo)'],
              ['fra', 'từ', 'fra Vietnam (từ Việt Nam)'],
              ['ved', 'cạnh/bên', 'ved vinduet (cạnh cửa sổ)'],
              ['mellom', 'giữa', 'mellom to hus (giữa hai nhà)'],
              ['under', 'dưới', 'under bordet (dưới bàn)'],
              ['over', 'trên/qua', 'over broen (qua cầu)'],
            ]
          }
        },
        {
          title: 'Giới từ chỉ thời gian',
          content: 'Cách sử dụng giới từ với thời gian.',
          table: {
            headers: ['Giới từ', 'Dùng với', 'Ví dụ'],
            rows: [
              ['i', 'tháng, năm, mùa', 'i januar, i 2024, i sommer'],
              ['på', 'ngày trong tuần', 'på mandag, på fredag'],
              ['om', 'thời điểm trong ngày', 'om morgenen, om kvelden'],
              ['klokken', 'giờ cụ thể', 'klokken tre (lúc 3 giờ)'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg bor i Oslo.', vietnamese: 'Tôi sống ở Oslo.' },
        { norwegian: 'Boken er på bordet.', vietnamese: 'Quyển sách trên bàn.' },
        { norwegian: 'Vi reiser til Bergen.', vietnamese: 'Chúng tôi đi đến Bergen.' },
        { norwegian: 'Møtet er på mandag.', vietnamese: 'Cuộc họp vào thứ Hai.' },
      ],
      tips: [
        '"I" dùng cho nơi kín/trong, "på" cho bề mặt/mở.',
        '"Til" chỉ hướng đi, "fra" chỉ xuất phát điểm.',
        'Thành phố lớn dùng "i", đảo và khu vực dùng "på".',
      ],
      exercises: [
        { question: 'Điền giới từ: Jeg kommer ___ Vietnam.', answer: 'fra', type: 'fill' },
        { question: 'Điền giới từ: Vi møtes ___ tirsdag.', answer: 'på', type: 'fill' },
      ]
    }
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    titleVi: 'Động từ khuyết thiếu',
    icon: '🔧',
    difficulty: 'intermediate',
    content: {
      introduction: 'Động từ khuyết thiếu (modal verbs) diễn tả khả năng, sự cần thiết, mong muốn. Chúng được theo sau bởi động từ nguyên thể KHÔNG có "å".',
      sections: [
        {
          title: 'Các động từ khuyết thiếu chính',
          content: 'Modal verbs phổ biến nhất trong tiếng Na Uy.',
          table: {
            headers: ['Modal', 'Nghĩa', 'Ví dụ'],
            rows: [
              ['kan', 'có thể', 'Jeg kan svømme.'],
              ['må', 'phải', 'Du må gå nå.'],
              ['vil', 'muốn', 'Hun vil lære norsk.'],
              ['skal', 'sẽ/nên', 'Vi skal reise i morgen.'],
              ['bør', 'nên', 'Du bør lese mer.'],
            ]
          }
        },
        {
          title: 'Cấu trúc câu',
          content: 'Modal + động từ nguyên thể (không có "å").',
          table: {
            headers: ['Sai', 'Đúng'],
            rows: [
              ['Jeg kan å svømme', 'Jeg kan svømme'],
              ['Hun vil å reise', 'Hun vil reise'],
              ['Vi må å gå', 'Vi må gå'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Kan du hjelpe meg?', vietnamese: 'Bạn có thể giúp tôi không?' },
        { norwegian: 'Jeg må jobbe i morgen.', vietnamese: 'Tôi phải làm việc ngày mai.' },
        { norwegian: 'Vi vil besøke Norge.', vietnamese: 'Chúng tôi muốn thăm Na Uy.' },
        { norwegian: 'Du bør spise mer grønnsaker.', vietnamese: 'Bạn nên ăn nhiều rau hơn.' },
      ],
      tips: [
        'KHÔNG dùng "å" trước động từ theo sau modal.',
        '"Skal" thường chỉ kế hoạch tương lai hoặc lời hứa.',
        '"Vil" có thể là "muốn" hoặc "sẽ" tùy ngữ cảnh.',
      ],
      exercises: [
        { question: 'Hoàn thành: Jeg ___ snakke norsk. (có thể)', answer: 'kan', type: 'fill' },
        { question: 'Hoàn thành: Du ___ komme tidlig. (phải)', answer: 'må', type: 'fill' },
      ]
    }
  },
  {
    id: 'comparison',
    title: 'Comparison',
    titleVi: 'So sánh',
    icon: '⚖️',
    difficulty: 'intermediate',
    content: {
      introduction: 'Tính từ và trạng từ có thể được chia thành ba cấp: nguyên cấp (positive), so sánh hơn (comparative), và so sánh nhất (superlative).',
      sections: [
        {
          title: 'So sánh quy tắc',
          content: 'Hầu hết tính từ thêm -ere cho so sánh hơn và -est cho so sánh nhất.',
          table: {
            headers: ['Nguyên cấp', 'So sánh hơn', 'So sánh nhất', 'Nghĩa'],
            rows: [
              ['billig', 'billigere', 'billigst', 'rẻ'],
              ['lang', 'lengre', 'lengst', 'dài'],
              ['ung', 'yngre', 'yngst', 'trẻ'],
              ['stor', 'større', 'størst', 'lớn'],
            ]
          }
        },
        {
          title: 'So sánh bất quy tắc',
          content: 'Một số tính từ phổ biến có dạng bất quy tắc.',
          table: {
            headers: ['Nguyên cấp', 'So sánh hơn', 'So sánh nhất', 'Nghĩa'],
            rows: [
              ['god/bra', 'bedre', 'best', 'tốt'],
              ['dårlig', 'verre', 'verst', 'xấu/kém'],
              ['liten', 'mindre', 'minst', 'nhỏ'],
              ['mye', 'mer', 'mest', 'nhiều'],
              ['gammel', 'eldre', 'eldst', 'già'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Hun er eldre enn meg.', vietnamese: 'Cô ấy già hơn tôi.' },
        { norwegian: 'Dette er det største huset.', vietnamese: 'Đây là ngôi nhà lớn nhất.' },
        { norwegian: 'Norsk er bedre enn engelsk.', vietnamese: 'Tiếng Na Uy tốt hơn tiếng Anh.' },
        { norwegian: 'Han løper raskere.', vietnamese: 'Anh ấy chạy nhanh hơn.' },
      ],
      tips: [
        'Dùng "enn" (hơn) để so sánh: eldre enn meg.',
        'So sánh nhất cần mạo từ xác định: den/det/de + adj-este.',
        'Tính từ một âm tiết thường thay đổi nguyên âm.',
      ],
      exercises: [
        { question: 'So sánh hơn của "god":', answer: 'bedre', type: 'fill' },
        { question: 'So sánh nhất của "stor":', answer: 'størst', type: 'fill' },
      ]
    }
  },
  {
    id: 'possessives',
    title: 'Possessives',
    titleVi: 'Sở hữu cách',
    icon: '🏷️',
    difficulty: 'beginner',
    content: {
      introduction: 'Đại từ sở hữu trong tiếng Na Uy phải hòa hợp với danh từ được sở hữu (không phải người sở hữu). Chúng có thể đứng trước hoặc sau danh từ.',
      sections: [
        {
          title: 'Đại từ sở hữu',
          content: 'Các dạng đại từ sở hữu theo giới tính của danh từ.',
          table: {
            headers: ['Người', 'Nam (en)', 'Trung (et)', 'Số nhiều'],
            rows: [
              ['của tôi', 'min', 'mitt', 'mine'],
              ['của bạn', 'din', 'ditt', 'dine'],
              ['của anh ấy', 'hans', 'hans', 'hans'],
              ['của cô ấy', 'hennes', 'hennes', 'hennes'],
              ['của chúng tôi', 'vår', 'vårt', 'våre'],
              ['của các bạn', 'deres', 'deres', 'deres'],
              ['của họ', 'deres', 'deres', 'deres'],
            ]
          }
        },
        {
          title: 'Vị trí sở hữu cách',
          content: 'Có thể đặt trước hoặc sau danh từ.',
          table: {
            headers: ['Trước danh từ', 'Sau danh từ'],
            rows: [
              ['min bil', 'bilen min'],
              ['mitt hus', 'huset mitt'],
              ['mine bøker', 'bøkene mine'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Det er min bok.', vietnamese: 'Đó là sách của tôi.' },
        { norwegian: 'Huset mitt er stort.', vietnamese: 'Nhà của tôi lớn.' },
        { norwegian: 'Hvor er bilnøklene dine?', vietnamese: 'Chìa khóa xe của bạn ở đâu?' },
        { norwegian: 'Hans søster bor i Bergen.', vietnamese: 'Chị/em gái của anh ấy sống ở Bergen.' },
      ],
      tips: [
        '"Hans/hennes/deres" không thay đổi theo danh từ.',
        'Khi đặt sau, danh từ phải ở dạng xác định.',
        'Vị trí sau danh từ phổ biến hơn trong văn nói.',
      ],
      exercises: [
        { question: 'Điền: ___ hus (của tôi, trung tính)', answer: 'mitt', type: 'fill' },
        { question: 'Điền: bilen ___ (của bạn)', answer: 'din', type: 'fill' },
      ]
    }
  },
  {
    id: 'plurals',
    title: 'Plural Nouns',
    titleVi: 'Danh từ số nhiều',
    icon: '📊',
    difficulty: 'intermediate',
    content: {
      introduction: 'Số nhiều trong tiếng Na Uy có nhiều dạng khác nhau tùy thuộc vào giới tính và đuôi của danh từ. Đây là một trong những phần khó nhất của ngữ pháp Na Uy.',
      sections: [
        {
          title: 'Quy tắc chung số nhiều không xác định',
          content: 'Cách thêm hậu tố cho danh từ số nhiều.',
          table: {
            headers: ['Loại', 'Số ít', 'Số nhiều', 'Ví dụ'],
            rows: [
              ['Nam/Nữ đa âm tiết', 'en/ei + X', 'X + er', 'gutt → gutter'],
              ['Nam/Nữ đơn âm tiết', 'en/ei + X', 'X + er', 'dag → dager'],
              ['Trung đa âm tiết', 'et + X', 'X + er', 'eple → epler'],
              ['Trung đơn âm tiết', 'et + X', 'X (không đổi)', 'hus → hus'],
            ]
          }
        },
        {
          title: 'Số nhiều xác định',
          content: 'Thêm -ene cho hầu hết danh từ.',
          table: {
            headers: ['Số ít XĐ', 'Số nhiều XĐ', 'Nghĩa'],
            rows: [
              ['gutten', 'guttene', 'những cậu bé'],
              ['jenta', 'jentene', 'những cô gái'],
              ['huset', 'husene', 'những ngôi nhà'],
              ['eplet', 'eplene', 'những quả táo'],
            ]
          }
        },
        {
          title: 'Danh từ bất quy tắc',
          content: 'Một số danh từ thay đổi nguyên âm trong số nhiều.',
          table: {
            headers: ['Số ít', 'Số nhiều', 'Nghĩa'],
            rows: [
              ['bok', 'bøker', 'sách'],
              ['mann', 'menn', 'đàn ông'],
              ['fot', 'føtter', 'chân'],
              ['barn', 'barn', 'trẻ em'],
            ]
          }
        }
      ],
      examples: [
        { norwegian: 'Jeg har to søstre.', vietnamese: 'Tôi có hai chị/em gái.' },
        { norwegian: 'Bøkene er på bordet.', vietnamese: 'Những quyển sách trên bàn.' },
        { norwegian: 'Vi har tre barn.', vietnamese: 'Chúng tôi có ba đứa con.' },
        { norwegian: 'Mennene jobber her.', vietnamese: 'Những người đàn ông làm việc ở đây.' },
      ],
      tips: [
        'Danh từ trung tính đơn âm thường không đổi ở số nhiều không xác định.',
        'Học thuộc số nhiều của danh từ bất quy tắc.',
        'Số nhiều xác định luôn thêm -ene (hoặc -a cho một số).',
      ],
      exercises: [
        { question: 'Số nhiều của "bil":', answer: 'biler', type: 'fill' },
        { question: 'Số nhiều xác định của "bok":', answer: 'bøkene', type: 'fill' },
      ]
    }
  }
];

export default grammarTopics;
