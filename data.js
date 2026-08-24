const ieltsData = {
  units: [
    {
      id: 1,
      title: "Food & Nutrition",
      vietnameseTitle: "Ẩm thực & Dinh dưỡng",
      description: "Learn about diets, nutrients, and global eating habits while master tenses.",
      vocabulary: [
        {
          word: "Nutritious",
          ipa: "/njuːˈtrɪʃəs/",
          pos: "adj",
          meaning: "Có dinh dưỡng, bổ dưỡng",
          definition: "Providing nourishment; nourishing.",
          example: "It is important to eat a nutritious meal to start your day.",
          exampleVi: "Ăn một bữa ăn bổ dưỡng để bắt đầu ngày mới là rất quan trọng.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Consume",
          ipa: "/kənˈsjuːm/",
          pos: "verb",
          meaning: "Tiêu thụ, ăn uống",
          definition: "Eat, drink, or ingest food or drink.",
          example: "Teenagers consume a large amount of fast food nowadays.",
          exampleVi: "Giới trẻ ngày nay tiêu thụ một lượng lớn thức ăn nhanh.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Dietary",
          ipa: "/ˈdaɪətəri/",
          pos: "adj",
          meaning: "Thuộc về chế độ ăn uống",
          definition: "Relating to the rules of eating or diets.",
          example: "You should follow the dietary guidelines for better health.",
          exampleVi: "Bạn nên làm theo các hướng dẫn ăn kiêng để có sức khỏe tốt hơn.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Obesity",
          ipa: "/əʊˈbiːsəti/",
          pos: "noun",
          meaning: "Bệnh béo phì",
          definition: "The state of being grossly fat or overweight.",
          example: "Obesity is a major public health problem in developed nations.",
          exampleVi: "Béo phì là một vấn đề sức khỏe cộng đồng lớn ở các quốc gia phát triển.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Preservative",
          ipa: "/prɪˈzɜːvətɪv/",
          pos: "noun",
          meaning: "Chất bảo quản",
          definition: "A substance used to preserve food or other materials.",
          example: "Organic foods are grown without artificial preservatives.",
          exampleVi: "Thực phẩm hữu cơ được trồng mà không có chất bảo quản nhân tạo.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Balanced diet",
          ipa: "/ˈbælhns t ˈdaɪət/",
          pos: "noun phrase",
          meaning: "Chế độ ăn cân bằng",
          definition: "A diet that contains the proper proportions of nutrients.",
          example: "A balanced diet combined with exercise keeps you fit.",
          exampleVi: "Chế độ ăn cân bằng kết hợp với tập thể dục giúp bạn giữ dáng.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "Present Simple vs. Present Continuous",
        explanation: "Thì Hiện tại đơn dùng cho thói quen, sự thật hiển nhiên. Thì Hiện tại tiếp diễn dùng cho hành động đang diễn ra tại thời điểm nói hoặc xu hướng tạm thời.",
        rules: [
          { eng: "Present Simple: S + V(s/es) | Use for habits, routines, general truths.", vi: "Hiện tại đơn: S + V(s/es) | Dùng cho thói quen, lịch trình, sự thật hiển nhiên." },
          { eng: "Present Continuous: S + am/is/are + V-ing | Use for actions happening right now or ongoing temporary changes.", vi: "Hiện tại tiếp diễn: S + am/is/are + V-ing | Dùng cho hành động đang xảy ra lúc nói hoặc thay đổi tạm thời." }
        ],
        exercises: [
          {
            question: "Currently, global food consumption ________ (increase) rapidly due to population growth.",
            options: ["increases", "is increasing", "increased", "has increased"],
            answer: "is increasing",
            explanation: "Từ 'Currently' chỉ hành động đang diễn ra hoặc một xu hướng đang tiến triển, dùng hiện tại tiếp diễn."
          },
          {
            question: "My father usually ________ (drink) green tea after breakfast.",
            options: ["is drinking", "drinks", "drink", "has drunk"],
            answer: "drinks",
            explanation: "Thói quen hàng ngày ('usually'), chủ ngữ số ít 'My father' nên chia động từ thêm 's/es' (drinks)."
          },
          {
            question: "At the moment, scientists ________ (research) new types of organic fertilizers.",
            options: ["are researching", "research", "researches", "is researching"],
            answer: "are researching",
            explanation: "'At the moment' báo hiệu thì Hiện tại tiếp diễn. Chủ ngữ số nhiều 'scientists' đi với 'are researching'."
          }
        ]
      },
      reading: {
        title: "The Shift in Global Diets",
        vietnameseTitle: "Sự thay đổi trong chế độ ăn uống toàn cầu",
        passage: "Over the past few decades, there has been a significant shift in what people eat worldwide. Traditional diets, which were rich in grains, vegetables, and fibers, are being replaced by modern diets containing high amounts of processed food, sugars, and fats. This transition is closely linked to urbanization and economic development. As cities expand, fast food becomes a convenient option for busy workers. Consequently, health authorities are reporting a steep rise in chronic conditions like diabetes and heart diseases. To combat this, nutritional education programs are being introduced in schools to teach children the benefits of a balanced diet containing fresh vegetables and lean proteins.",
        passageVi: "Trong vài thập kỷ qua, đã có một sự thay đổi đáng kể trong những gì mọi người ăn trên toàn thế giới. Chế độ ăn uống truyền thống giàu ngũ cốc, rau và chất xơ đang được thay thế bằng chế độ ăn hiện đại chứa lượng lớn thực phẩm chế biến sẵn, đường và chất béo. Sự chuyển dịch này liên kết chặt chẽ với quá trình đô thị hóa và phát triển kinh tế. Khi các thành phố mở rộng, thức ăn nhanh trở thành một lựa chọn thuận tiện cho những người lao động bận rộn. Do đó, các cơ quan y tế đang báo cáo sự gia tăng mạnh mẽ của các bệnh mãn tính như tiểu đường và bệnh tim. Để chống lại điều này, các chương trình giáo dục dinh dưỡng đang được giới thiệu trong các trường học để dạy trẻ em về lợi ích của một chế độ ăn uống cân bằng bao gồm rau tươi và protein nạc.",
        questions: [
          {
            type: "tfng",
            question: "Modern diets contain fewer sugars and fats compared to traditional diets.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Bài viết ghi: 'Traditional diets... are being replaced by modern diets containing high amounts of processed food, sugars, and fats.' Vậy modern diets chứa nhiều chất béo và đường hơn."
          },
          {
            type: "tfng",
            question: "Urbanization has contributed to the popularity of fast food.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Bài viết ghi: 'As cities expand (urbanization), fast food becomes a convenient option for busy workers.' Do đó đô thị hóa góp phần làm thức ăn nhanh phổ biến."
          },
          {
            type: "mcq",
            question: "What is the main purpose of the school nutritional programs mentioned?",
            options: [
              "To ban fast food from school cafeterias.",
              "To teach children the values of a balanced diet.",
              "To encourage students to cook their own meals.",
              "To reduce the price of school meals."
            ],
            answer: "To teach children the values of a balanced diet.",
            explanation: "Đoạn cuối ghi: '...to teach children the benefits of a balanced diet containing fresh vegetables...'"
          }
        ]
      },
      listening: {
        title: "Ordering Healthy Lunch options",
        vietnameseTitle: "Đặt các món ăn trưa lành mạnh",
        transcript: "Receptionist: Good afternoon, GreenBite Catering. How can I help you today?\nCustomer: Hello, I would like to order healthy lunches for our office meeting tomorrow. We have 12 people attending.\nReceptionist: Sure. We offer three lunch boxes. The 'Vapor Pack' consists of steamed chicken, brown rice, and broccoli. The 'Green Garden' features a rich mixed salad with tofu. Finally, our 'Ocean Fresh' box contains baked salmon with quinoa.\nCustomer: Perfect. We have 5 vegetarians, so they will take the Green Garden salad. The rest of the group (7 people) would prefer the baked salmon with quinoa.\nReceptionist: Understood. 5 Green Garden boxes and 7 Ocean Fresh salmon boxes. The total will be 144 dollars. We will deliver it at 11:30 AM tomorrow.\nCustomer: Excellent. Thank you very much.",
        audioText: "Good afternoon, GreenBite Catering. How can I help you today? Hello, I would like to order healthy lunches for our office meeting tomorrow. We have 12 people attending. Sure. We offer three lunch boxes. The Vapor Pack consists of steamed chicken, brown rice, and broccoli. The Green Garden features a rich mixed salad with tofu. Finally, our Ocean Fresh box contains baked salmon with quinoa. Perfect. We have 5 vegetarians, so they will take the Green Garden salad. The rest of the group, that is 7 people, would prefer the baked salmon with quinoa. Understood. 5 Green Garden boxes and 7 Ocean Fresh salmon boxes. The total will be 144 dollars. We will deliver it at 11:30 AM tomorrow. Excellent. Thank you very much.",
        questions: [
          {
            question: "How many lunch boxes are being ordered in total?",
            options: ["10", "12", "5", "7"],
            answer: "12",
            explanation: "Khách hàng nói: 'We have 12 people attending' và đặt thức ăn cho từng người."
          },
          {
            question: "Which ingredient is NOT in the Green Garden lunch box?",
            options: ["Salad", "Tofu", "Salmon", "Mixed vegetables"],
            answer: "Salmon",
            explanation: "Hộp Green Garden dành cho người ăn chay ('vegetarians') và chứa salad với tofu (đậu phụ), salmon nằm trong hộp Ocean Fresh."
          },
          {
            question: "At what time will the lunch order be delivered?",
            options: ["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"],
            answer: "11:30 AM",
            explanation: "Nhân viên nói: 'We will deliver it at 11:30 AM tomorrow.'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "Do you prefer eating at home or eating at restaurants?",
          vietnameseHint: "Gợi ý: Cố gắng trả lời từ 2-3 câu. Nêu sở thích của bạn (ăn ở nhà tiết kiệm/lành mạnh hơn, hoặc ăn ở tiệm tiện lợi/nhiều lựa chọn). Sử dụng các từ vựng đã học như 'nutritious' hoặc 'balanced diet'.",
          sampleAnswer: "I definitely prefer eating at home. Cooking meals myself allows me to ensure the food is nutritious and fresh. Eating out is convenient, but restaurant foods often contain high amount of salt and preservatives.",
          keywords: ["prefer", "nutritious", "convenient", "preservatives"]
        },
        part2: {
          cueCard: "Describe a healthy meal that you remember eating.\nYou should say:\n- What the meal was\n- Where you ate it\n- Who you ate it with\nAnd explain why you think this meal was healthy.",
          vietnameseHint: "Gợi ý: Hãy chuẩn bị nói trong vòng 1-2 phút. Nói về một món salad, cá nướng hoặc súp. Sử dụng thì Quá khứ đơn (vì kể lại kỷ niệm) kết hợp hiện tại đơn khi giải thích lý do món ăn tốt cho sức khỏe.",
          sampleAnswer: "Today, I would like to share my experience of a highly nutritious lunch that I ate last month. I had this meal at a small organic café near my university, with my closest classmate. We ordered baked salmon served with brown rice and a side of steamed broccoli. This meal was extremely healthy because salmon is rich in omega-3 fats, which is great for brain development. Furthermore, we chose brown rice instead of white rice because it has a lower glycemic index and contains more fiber, keeping us full for a longer time. Overall, it was a balanced diet option that tasted delicious.",
          keywords: ["nutritious", "salmon", "organic", "balanced diet", "fiber"]
        },
        part3: {
          question: "Why do you think fast food is becoming more popular among young people?",
          vietnameseHint: "Gợi ý: Trả lời sâu sắc hơn, nêu nguyên nhân khách quan (nhịp sống bận rộn, quảng cáo bắt mắt) và tác hại (béo phì). Cố gắng sử dụng từ 'consume' hoặc 'obesity'.",
          sampleAnswer: "In my opinion, fast food is expanding rapidly among youth primarily due to convenience and affordability. Young people today live in a fast-paced environment and have limited time, so they consume fast food to save time. Additionally, advertising campaigns target young audiences aggressively. However, this trend is dangerous since regular consumption can lead to obesity and other severe health issues.",
          keywords: ["convenience", "consume", "advertising", "obesity", "consumption"]
        }
      },
      writing: {
        taskType: "Task 2",
        prompt: "Some people believe that the best way to encourage people to eat healthy is to increase the prices of fast food. To what extent do you agree or disagree?",
        vietnameseHint: "Gợi ý: Bài viết của bạn cần dài ít nhất 150-250 từ. Bạn cần phân tích xem việc tăng giá đồ ăn nhanh có hiệu quả không (làm giảm lượng tiêu thụ - consume) và đề xuất các giải pháp khác (giáo dục dinh dưỡng - nutrition education).",
        sampleAnswer: "It is argued by some that raising taxes on fast food to increase its price is the optimal method to promote healthy eating habits. I partially agree with this approach, though I believe education is also vital.\n\nOn the one hand, raising prices can deter consumers, especially students with limited budgets. When burgers and soft drinks become expensive, people will consume them less frequently. This could lead to a decline in obesity rates. For example, countries that introduced sugar taxes saw a drop in soda sales.\n\nOn the other hand, price hikes alone cannot solve the problem. Healthy organic foods are already expensive. Instead of just penalizing unhealthy options, governments should subsidize nutritious foods like fruits and vegetables to make them more affordable. Moreover, educational campaigns in schools are essential to teach the long-term benefits of a balanced diet.\n\nIn conclusion, while increasing fast food prices helps reduce consumption, it must be combined with subsidies for healthy food and public education to create lasting dietary changes.",
        minWords: 150,
        suggestedVocab: ["promote", "consume", "obesity", "nutritious", "balanced diet", "subsidize", "consumption"]
      }
    },
    {
      id: 2,
      title: "Family & Relationships",
      vietnameseTitle: "Gia đình & Mối quan hệ",
      description: "Discuss family values, upbringing, and relationships while practicing comparisons.",
      vocabulary: [
        {
          word: "Upbringing",
          ipa: "/ˈʌpˌbrɪŋ.ɪŋ/",
          pos: "noun",
          meaning: "Sự nuôi dưỡng, giáo dục",
          definition: "The treatment and instruction received by a child from its parents.",
          example: "Her polite manners are a result of a strict upbringing.",
          exampleVi: "Cách cư xử lịch sự của cô ấy là kết quả của sự nuôi dạy nghiêm khắc.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Sibling",
          ipa: "/ˈsɪb.lɪŋ/",
          pos: "noun",
          meaning: "Anh chị em ruột",
          definition: "A brother or sister.",
          example: "I have three siblings: two brothers and a sister.",
          exampleVi: "Tôi có ba anh chị em ruột: hai anh trai và một chị gái.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Nuclear family",
          ipa: "/ˌnjuː.kli.ə ˈfæm.əl.i/",
          pos: "noun",
          meaning: "Gia đình hạt nhân (bố mẹ và con cái)",
          definition: "A couple and their dependent children, regarded as a basic social unit.",
          example: "In modern times, nuclear families are more common than extended families.",
          exampleVi: "Trong thời hiện đại, gia đình hạt nhân phổ biến hơn gia đình nhiều thế hệ.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Foster",
          ipa: "/ˈfɒs.tər/",
          pos: "verb",
          meaning: "Nuôi dưỡng, thúc đẩy, vun đắp",
          definition: "Encourage or promote the development of (something, typically something regarded as good).",
          example: "Parents should try to foster a warm and supportive home environment.",
          exampleVi: "Cha mẹ nên cố gắng vun đắp một môi trường gia đình ấm áp và hỗ trợ nhau.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Generational gap",
          ipa: "/ˌdʒen.əˈreɪ.ʃən.əl ɡæp/",
          pos: "noun phrase",
          meaning: "Khoảng cách thế hệ",
          definition: "Differences of outlook or opinion between people of different generations.",
          example: "A major generational gap exists between grandchildren and grandparents.",
          exampleVi: "Có một khoảng cách thế hệ lớn giữa cháu và ông bà.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "Comparatives and Superlatives",
        explanation: "So sánh hơn (Short adj + er / More + Long adj) và So sánh nhất (The + Short adj + est / The most + Long adj). Thêm 'than' trong so sánh hơn.",
        rules: [
          { eng: "Short Adjectives: comparative (+er than), superlative (the +est). e.g., big -> bigger -> the biggest.", vi: "Tính từ ngắn: so sánh hơn (+er than), so sánh nhất (the +est)." },
          { eng: "Long Adjectives: comparative (more + adj + than), superlative (the most + adj). e.g., expensive -> more expensive -> the most expensive.", vi: "Tính từ dài: so sánh hơn (more + tính từ + than), so sánh nhất (the most + tính từ)." }
        ],
        exercises: [
          {
            question: "Living in an extended family can be ________ (complex) than living in a nuclear family.",
            options: ["complexer", "more complex", "most complex", "the most complex"],
            answer: "more complex",
            explanation: "Có chữ 'than' thể hiện so sánh hơn. 'Complex' là tính từ dài nên chọn 'more complex'."
          },
          {
            question: "My oldest brother is the ________ (wise) person in our family.",
            options: ["wiser", "wisest", "more wise", "most wise"],
            answer: "wisest",
            explanation: "Có mạo từ 'the' đứng trước và chỉ sự so sánh cao nhất trong gia đình. 'Wise' kết thúc bằng 'e', ta chỉ thêm 'st' thành 'wisest'."
          },
          {
            question: "In my opinion, grandparents have the ________ (important) role in teaching traditions.",
            options: ["more important", "most important", "importanter", "as important"],
            answer: "most important",
            explanation: "Có chữ 'the' chỉ so sánh nhất. 'Important' là tính từ dài nên ta dùng 'most important'."
          }
        ]
      },
      reading: {
        title: "The Evolution of Family Structures",
        vietnameseTitle: "Sự phát triển của cấu trúc gia đình",
        passage: "Family units are changing significantly around the globe. Historically, extended families, consisting of grandparents, parents, aunts, uncles, and cousins living under one roof, were the norm. This setup provided shared child-rearing and financial support. However, industrialization and globalization led to a shift. Today, nuclear families are much more common as individuals migrate to cities for job opportunities. Interestingly, in some societies, the high cost of living is causing a mini-reversal: young adults are staying longer with their parents, fostering closer inter-generational bonds, but sometimes increasing domestic conflicts due to the generational gap in values.",
        passageVi: "Các đơn vị gia đình đang thay đổi đáng kể trên toàn cầu. Trước đây, gia đình mở rộng gồm ông bà, cha mẹ, cô dì, chú bác và anh em họ sống chung dưới một mái nhà là tiêu chuẩn. Cấu trúc này giúp chia sẻ gánh nặng nuôi dạy con cái và hỗ trợ tài chính. Tuy nhiên, công nghiệp hóa và toàn cầu hóa dẫn đến sự thay đổi. Ngày nay, gia đình hạt nhân phổ biến hơn nhiều khi mọi người di cư ra thành phố tìm việc. Điều thú vị là ở một số xã hội, chi phí sinh hoạt cao đang tạo ra xu hướng ngược lại: người trẻ tuổi ở với cha mẹ lâu hơn, vun đắp các mối quan hệ liên thế hệ chặt chẽ hơn, nhưng đôi khi làm tăng xung đột gia đình do khoảng cách thế hệ về các giá trị sống.",
        questions: [
          {
            type: "tfng",
            question: "In the past, extended families were less common than nuclear families.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Đoạn văn ghi: 'Historically, extended families... were the norm' (Trong quá khứ, gia đình mở rộng là tiêu chuẩn/phổ biến). Vì vậy câu trên là FALSE."
          },
          {
            type: "tfng",
            question: "Industrialization contributed to the rise of nuclear families.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Đoạn văn ghi: 'However, industrialization and globalization led to a shift. Today, nuclear families are much more common...'"
          },
          {
            type: "mcq",
            question: "Why do some young adults continue to live with their parents today?",
            options: [
              "Because they do not want to work.",
              "Because of the expensive cost of living.",
              "Because they enjoy doing chores.",
              "Because their grandparents force them."
            ],
            answer: "Because of the expensive cost of living.",
            explanation: "Đoạn văn có ghi: '...the high cost of living is causing a mini-reversal: young adults are staying longer with their parents...'"
          }
        ]
      },
      listening: {
        title: "Discussing Childhood Memories",
        vietnameseTitle: "Thảo luận về kỷ niệm thời thơ ấu",
        transcript: "Tom: Hey Sarah, are you close to your siblings?\nSarah: Oh yes! I have an elder brother and a younger sister. We fought a lot when we were younger, but now we are very close. What about you, Tom?\nTom: I'm an only child. Sometimes I wished I had siblings, but my parents gave me all their attention. My upbringing was quite peaceful.\nSarah: That sounds nice. I grew up in an extended family because my grandparents lived with us. There were always people around, which fostered a very sociable environment, but it was rarely quiet!\nTom: Yes, my home was always very quiet. I guess there are pros and cons to both structures.",
        audioText: "Hey Sarah, are you close to your siblings? Oh yes! I have an elder brother and a younger sister. We fought a lot when we were younger, but now we are very close. What about you, Tom? I'm an only child. Sometimes I wished I had siblings, but my parents gave me all their attention. My upbringing was quite peaceful. That sounds nice. I grew up in an extended family because my grandparents lived with us. There were always people around, which fostered a very sociable environment, but it was rarely quiet! Yes, my home was always very quiet. I guess there are pros and cons to both structures.",
        questions: [
          {
            question: "How many siblings does Sarah have?",
            options: ["None", "One", "Two", "Three"],
            answer: "Two",
            explanation: "Sarah nói: 'I have an elder brother and a younger sister' (tổng cộng 2 anh chị em)."
          },
          {
            question: "Tom's childhood was described by him as...",
            options: ["Noisy", "Peaceful", "Difficult", "Lonely"],
            answer: "Peaceful",
            explanation: "Tom nói: 'My upbringing was quite peaceful.'"
          },
          {
            question: "Who lived with Sarah's family that made it an extended family?",
            options: ["Her cousins", "Her grandparents", "Her uncle", "Her step-parents"],
            answer: "Her grandparents",
            explanation: "Sarah nói: 'I grew up in an extended family because my grandparents lived with us.'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "How much time do you spend with your family?",
          vietnameseHint: "Gợi ý: Cố gắng mô tả tần suất (mỗi ngày, cuối tuần). Trả lời khoảng 3 câu. Dùng từ so sánh như 'more time' hoặc 'closer'.",
          sampleAnswer: "I spend a lot of time with my family, especially during dinners. On weekends, we usually watch movies together. I believe spending time together helps foster closer bonds between family members.",
          keywords: ["spend", "especially", "foster", "bonds"]
        },
        part2: {
          cueCard: "Describe a member of your family who you are close to.\nYou should say:\n- Who this person is\n- What they look like\n- How often you see them\nAnd explain why you are close to this person.",
          vietnameseHint: "Gợi ý: Hãy kể về cha, mẹ, hoặc anh chị em. Mô tả ngoại hình đơn giản và tích cách bằng các từ so sánh (nhỏ tuổi hơn, thông thái hơn). Giải thích sợi dây liên kết giữa hai người.",
          sampleAnswer: "Today, I will describe my elder brother, who is two years older than me. He is quite tall, with short black hair and a very friendly smile. Since we live in the same apartment, I see him every day. We are extremely close because we share similar hobbies, such as playing soccer and listening to music. During our upbringing, he was always supportive. Whenever I face a problem in my studies or life, he is the first person I ask for advice. He is much wiser than me and always gives the best solutions.",
          keywords: ["older", "brother", "upbringing", "supportive", "wiser"]
        },
        part3: {
          question: "How has the role of grandparents changed in modern families?",
          vietnameseHint: "Gợi ý: Phân tích sự khác biệt giữa gia đình xưa và nay. Ông bà ngày nay có còn chăm sóc cháu thường xuyên không? Dùng từ 'generational gap' hoặc 'nuclear family'.",
          sampleAnswer: "In the past, grandparents played a central role in child-rearing because extended families lived together. However, in modern nuclear families, grandparents often live separately. Therefore, their daily influence on grandchildren has decreased. Nevertheless, they still provide valuable emotional support and bridge the generational gap by sharing traditional values during family gatherings.",
          keywords: ["child-rearing", "nuclear families", "influence", "generational gap", "values"]
        }
      },
      writing: {
        taskType: "Task 1",
        prompt: "The table below shows the percentage of households of different structures in a country between 1980 and 2010. Describe the main trends and make comparisons where relevant.\n\nStructure | 1980 | 2010\n--- | --- | ---\nNuclear Family | 60% | 42%\nSingle Parent | 8% | 15%\nLiving Alone | 12% | 25%\nExtended Family | 20% | 18%",
        vietnameseHint: "Gợi ý: Đây là dạng mô tả bảng biểu (Task 1). Bạn phải viết ít nhất 150 từ. So sánh tỉ lệ giữa hai năm 1980 và 2010. Dùng các cấu trúc so sánh vừa học (e.g. 'Nuclear family remained the most common... but declined').",
        sampleAnswer: "The table compares the proportion of various household arrangements in a specific country in two years, 1980 and 2010.\n\nOverall, it is clear that nuclear families remained the most common household structure in both years, despite a significant decline. In contrast, the percentage of people living alone and single-parent households experienced notable increases.\n\nIn 1980, nuclear families constituted the largest share at 60%, but this figure fell sharply to 42% by 2010. Conversely, the proportion of individuals living alone more than doubled, rising from 12% in 1980 to 25% in 2010, making it the second most popular living arrangement.\n\nMeanwhile, single-parent households saw their share increase from 8% to 15% over the thirty-year period. Extended families, however, experienced only a minor decrease, slipping from 20% in 1980 to 18% in 2010.",
        minWords: 150,
        suggestedVocab: ["compares", "proportion", "overall", "declined", "doubled", "constituted", "remained"]
      }
    },
    {
      id: 3,
      title: "Technology & Society",
      vietnameseTitle: "Công nghệ & Xã hội",
      description: "Explore the effects of automation and virtual communication while mastering passive voice.",
      vocabulary: [
        {
          word: "Automation",
          ipa: "/ˌɔː.təˈmeɪ.ʃən/",
          pos: "noun",
          meaning: "Sự tự động hóa",
          definition: "The use of automatic equipment in a manufacturing or other process.",
          example: "Automation in factories has replaced many manual laborers.",
          exampleVi: "Tự động hóa trong các nhà máy đã thay thế nhiều lao động thủ công.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Innovation",
          ipa: "/ˌɪn.əˈveɪ.ʃən/",
          pos: "noun",
          meaning: "Sự đổi mới, sáng kiến",
          definition: "The action or process of innovating; a new method, idea, product, etc.",
          example: "Technological innovation drives economic growth.",
          exampleVi: "Đổi mới công nghệ thúc đẩy tăng trưởng kinh tế.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Virtual",
          ipa: "/ˈvɜː.tʃu.əl/",
          pos: "adj",
          meaning: "Ảo (mạng máy tính), thực tế ảo",
          definition: "Almost or nearly as described, or carried out by means of a computer.",
          example: "During the pandemic, many schools switched to virtual classrooms.",
          exampleVi: "Trong đại dịch, nhiều trường học đã chuyển sang các lớp học ảo.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Revolutionize",
          ipa: "/ˌrev.əˈluː.ʃən.aɪz/",
          pos: "verb",
          meaning: "Cách mạng hóa",
          definition: "Change something radically or fundamentally.",
          example: "Smartphones have revolutionized the way we communicate.",
          exampleVi: "Điện thoại thông minh đã cách mạng hóa cách chúng ta giao tiếp.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Obsolete",
          ipa: "/ˌɒb.səˈliːt/",
          pos: "adj",
          meaning: "Lỗi thời, không còn sử dụng",
          definition: "No longer produced or used; out of date.",
          example: "Many old computer systems are now completely obsolete.",
          exampleVi: "Nhiều hệ thống máy tính cũ hiện nay đã hoàn toàn lỗi thời.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "The Passive Voice",
        explanation: "Thể bị động: S + be + V3/Ved. Dùng khi muốn nhấn mạnh vào hành động/đối tượng chịu tác động hơn là người thực hiện hành động.",
        rules: [
          { eng: "Form: Subject + auxiliary verb (be) + past participle (V3/Ved).", vi: "Cấu trúc: Chủ ngữ + động từ 'to be' chia theo thì + Động từ phân từ 2." },
          { eng: "Used when the actor is unknown, obvious, or less important than the action itself.", vi: "Dùng khi người thực hiện hành động không rõ, hiển nhiên, hoặc kém quan trọng hơn bản thân hành động." }
        ],
        exercises: [
          {
            question: "Millions of emails ________ (send) every minute worldwide.",
            options: ["are sent", "is sent", "sent", "are sending"],
            answer: "are sent",
            explanation: "emails là chủ ngữ số nhiều, hành động gửi thư diễn ra lặp lại (hiện tại đơn bị động): 'are sent'."
          },
          {
            question: "The first mechanical computer ________ (invent) by Charles Babbage in the 19th century.",
            options: ["invented", "was invented", "is invented", "were invented"],
            answer: "was invented",
            explanation: "Thì quá khứ đơn bị động do sự kiện đã xảy ra ở thế kỷ 19. Chủ ngữ 'The first mechanical computer' số ít nên dùng 'was invented'."
          },
          {
            question: "In the future, driverless cars ________ (use) widely for public transport.",
            options: ["will use", "will be used", "are used", "would use"],
            answer: "will be used",
            explanation: "Có trạng từ 'In the future' chỉ tương lai, thể bị động là 'will be used' (sẽ được sử dụng)."
          }
        ]
      },
      reading: {
        title: "The Impact of Artificial Intelligence",
        vietnameseTitle: "Tác động của Trí tuệ Nhân tạo",
        passage: "Artificial Intelligence (AI) is transforming many sectors of modern society. Today, tasks that were once performed by humans are being automated by computers. For instance, in manufacturing, assembly lines are entirely operated by robotic arms. In the financial sector, market trends are analyzed by algorithms within milliseconds. Proponents argue that this innovation increases efficiency and reduces human errors. However, critics express concern that entry-level clerical jobs will be made obsolete. To prepare for this transition, school curricula must be updated to focus on problem-solving and creative skills, which cannot easily be copied by machines.",
        passageVi: "Trí tuệ Nhân tạo (AI) đang biến đổi nhiều lĩnh vực của xã hội hiện đại. Ngày nay, những nhiệm vụ từng được thực hiện bởi con người đang được tự động hóa bằng máy tính. Ví dụ, trong ngành sản xuất, các dây chuyền lắp ráp được vận hành hoàn toàn bởi các cánh tay robot. Trong lĩnh vực tài chính, xu hướng thị trường được phân tích bởi các thuật toán chỉ trong vòng mili giây. Những người ủng hộ lập luận rằng đổi mới này giúp tăng hiệu quả và giảm sai sót của con người. Tuy nhiên, các nhà phê bình bày tỏ lo ngại rằng các công việc văn phòng cơ bản sẽ bị lỗi thời. Để chuẩn bị cho sự chuyển dịch này, chương trình học của nhà trường cần được cập nhật để tập trung vào kỹ năng giải quyết vấn đề và sáng tạo, điều mà máy móc không dễ sao chép.",
        questions: [
          {
            type: "tfng",
            question: "Assembly lines in modern manufacturing are mostly run by humans.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Đoạn văn ghi: 'assembly lines are entirely operated by robotic arms' (hoàn toàn được vận hành bởi cánh tay robot). Vì vậy câu trên là FALSE."
          },
          {
            type: "tfng",
            question: "Proponents believe AI makes more mistakes than humans.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Đoạn văn ghi: 'Proponents argue that this innovation... reduces human errors' (giúp giảm thiểu lỗi con người). Do đó câu trên là FALSE."
          },
          {
            type: "mcq",
            question: "What skills should modern school curricula focus on, according to the text?",
            options: [
              "Data entry and typing.",
              "Manual assembly line skills.",
              "Problem-solving and creativity.",
              "Traditional history and memorization."
            ],
            answer: "Problem-solving and creativity.",
            explanation: "Đoạn cuối ghi: 'curricula must be updated to focus on problem-solving and creative skills...'"
          }
        ]
      },
      listening: {
        title: "Smart Home Devices Interview",
        vietnameseTitle: "Cuộc phỏng vấn về Thiết bị nhà thông minh",
        transcript: "Interviewer: Today we are joined by Dr. Alan Green, an expert in consumer technology. Dr. Green, how are smart homes changing our lives?\nDr. Green: Well, smart homes use automation to manage energy, security, and chores. For example, lights are turned off automatically when you leave a room. The temperature is controlled by smart thermostats. All these actions are managed through a central smartphone app.\nInterviewer: That sounds incredibly convenient. But what about privacy issues?\nDr. Green: A very important point. Data is collected by these devices constantly. If security protocols are breached, personal habits could be exposed to hackers. That is why users are advised to update their passwords regularly and use secure Wi-Fi networks.",
        audioText: "Today we are joined by Dr. Alan Green, an expert in consumer technology. Dr. Green, how are smart homes changing our lives? Well, smart homes use automation to manage energy, security, and chores. For example, lights are turned off automatically when you leave a room. The temperature is controlled by smart thermostats. All these actions are managed through a central smartphone app. That sounds incredibly convenient. But what about privacy issues? A very important point. Data is collected by these devices constantly. If security protocols are breached, personal habits could be exposed to hackers. That is why users are advised to update their passwords regularly and use secure Wi-Fi networks.",
        questions: [
          {
            question: "How are smart home devices managed?",
            options: ["Through desktop computers", "Via voice command only", "Through a central smartphone app", "By physical buttons on walls"],
            answer: "Through a central smartphone app",
            explanation: "Dr. Green nói: 'All these actions are managed through a central smartphone app.'"
          },
          {
            question: "What benefit of smart homes is mentioned regarding lighting?",
            options: ["It changes color according to mood", "Lights are turned off automatically when empty", "It charges itself with solar energy", "It warns users of storm damage"],
            answer: "Lights are turned off automatically when empty",
            explanation: "Dr. Green phát biểu: 'lights are turned off automatically when you leave a room.'"
          },
          {
            question: "What advice is given to users to ensure privacy?",
            options: ["Buy new devices every year", "Avoid connecting to the internet", "Update passwords regularly", "Install physical locks on screens"],
            answer: "Update passwords regularly",
            explanation: "Dr. Green khuyên: 'users are advised to update their passwords regularly...'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "How often do you use social media?",
          vietnameseHint: "Gợi ý: Mô tả thời gian bạn sử dụng mạng xã hội hàng ngày. Nêu lợi ích (kết nối) và tác hại (lãng phí thời gian). Dùng cấu trúc bị động đơn giản (e.g. 'My time is spent on...').",
          sampleAnswer: "I use social media every day, typically for about one hour. Platforms like Facebook are used by me to connect with friends and read news. However, I try to limit my usage because it can be quite distracting.",
          keywords: ["social media", "used", "connect", "limit", "distracting"]
        },
        part2: {
          cueCard: "Describe an important technological invention that you use daily.\nYou should say:\n- What the invention is\n- How long you have used it\n- What you use it for\nAnd explain how your life would be different without this invention.",
          vietnameseHint: "Gợi ý: Chủ đề này cực kỳ phổ biến. Bạn có thể tả điện thoại thông minh (smartphone) hoặc máy tính xách tay (laptop). Dùng các từ 'revolutionize', 'obsolete' hoặc thể bị động.",
          sampleAnswer: "Today, I will talk about the smartphone, which is probably the most essential innovation I use daily. I got my first smartphone about six years ago, and now it is used for almost everything. I use it to search for information, make virtual calls with classmates, and manage my daily schedule. Without this invention, my life would be significantly harder. Communication would be much slower, and I would have to carry heavy paper maps and physical books everywhere. It has completely revolutionized how I learn and work, making many old devices like alarm clocks and MP3 players obsolete.",
          keywords: ["smartphone", "innovation", "virtual", "revolutionized", "obsolete"]
        },
        part3: {
          question: "How do you think technology will impact classrooms in the future?",
          vietnameseHint: "Gợi ý: Trả lời sâu về tương lai học tập. Có bị thay thế bởi robot không? Việc dạy học ảo (virtual classroom) phát triển thế nào? Dùng thể bị động ở thì tương lai 'will be taught'.",
          sampleAnswer: "In the future, classrooms will be heavily impacted by virtual technologies and artificial intelligence. I think traditional textbooks will be completely replaced by tablets and interactive digital books. Students will be taught by AI tutors that adapt lessons to each child's learning speed. However, I believe human teachers will still be valued because social and emotional skills cannot be easily fostered by computers alone.",
          keywords: ["classrooms", "virtual", "replaced", "taught", "fostered"]
        }
      },
      writing: {
        taskType: "Task 2",
        prompt: "Nowadays, people communicate more online than face-to-face. Do the advantages of this trend outweigh the disadvantages?",
        vietnameseHint: "Gợi ý: Đây là dạng bài viết thảo luận ưu/nhược điểm (Advantages vs Disadvantages). Bạn cần viết từ 150-250 từ. Phân tích lợi ích (liên lạc nhanh, khoảng cách ảo - virtual) và tác hại (thiếu giao tiếp thực tế, cô đơn).",
        sampleAnswer: "In the modern era, technological innovation has shifted the way people communicate, with virtual interactions largely replacing face-to-face conversations. In my view, the disadvantages of this trend outweigh the advantages.\n\nOn the one hand, online communication offers undeniable convenience. People can contact anyone globally within seconds, regardless of distance. This is highly beneficial for international businesses and online learning. For instance, virtual meetings are easily held on platforms like Zoom, reducing travel costs and saving valuable time.\n\nOn the other hand, the drawbacks are much more severe. Excessive reliance on digital communication can weaken real-life social skills. Human relationships require body language and physical presence to build trust. When face-to-face contact is reduced, individuals may feel isolated and lonely, which can lead to mental health issues. Moreover, misunderstanding often occurs in texts since tone of voice cannot be heard.\n\nIn conclusion, while virtual communication provides convenience, I believe it has a negative overall impact. Social connections should be fostered in the real world rather than solely on screens.",
        minWords: 150,
        suggestedVocab: ["innovation", "virtual", "outweigh", "convenience", "drawbacks", "isolated", "fostered"]
      }
    },
    {
      id: 4,
      title: "Nature & Environment",
      vietnameseTitle: "Tự nhiên & Môi trường",
      description: "Discuss environmental issues, biodiversity, and conservation using conditional sentences.",
      vocabulary: [
        {
          word: "Biodiversity",
          ipa: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
          pos: "noun",
          meaning: "Đa dạng sinh học",
          definition: "The variety of plant and animal life in the world or in a particular habitat.",
          example: "Tropical rainforests have a rich biodiversity.",
          exampleVi: "Rừng mưa nhiệt đới có sự đa dạng sinh học phong phú.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Conservation",
          ipa: "/ˌkɒn.səˈveɪ.ʃən/",
          pos: "noun",
          meaning: "Sự bảo tồn (thiên nhiên, năng lượng)",
          definition: "Prevention of wasteful use of a resource; protection of wildlife.",
          example: "Wildlife conservation is essential to save endangered species.",
          exampleVi: "Bảo tồn động vật hoang dã là điều cần thiết để cứu các loài có nguy cơ tuyệt chủng.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Emission",
          ipa: "/iˈmɪʃ.ən/",
          pos: "noun",
          meaning: "Khí thải, sự phát thải",
          definition: "The production and discharge of something, especially gas or radiation.",
          example: "Carbon emissions from cars contribute to global warming.",
          exampleVi: "Khí thải carbon từ ô tô góp phần vào sự nóng lên toàn cầu.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Eco-friendly",
          ipa: "/ˌiː.kəʊˈfrend.li/",
          pos: "adj",
          meaning: "Thân thiện với môi trường",
          definition: "Not harmful to the environment.",
          example: "We should switch to eco-friendly packaging to reduce waste.",
          exampleVi: "Chúng ta nên chuyển sang bao bì thân thiện với môi trường để giảm thiểu chất thải.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Deplete",
          ipa: "/dɪˈpliːt/",
          pos: "verb",
          meaning: "Làm cạn kiệt",
          definition: "Use up the supply or resources of.",
          example: "Overfishing will deplete fish populations in the ocean.",
          exampleVi: "Đánh bắt quá mức sẽ làm cạn kiệt các quần thể cá trong đại dương.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "First and Second Conditionals",
        explanation: "Câu điều kiện loại 1 (If + Present Simple, Will + V) cho tình huống có thật ở hiện tại/tương lai. Câu điều kiện loại 2 (If + Past Simple, Would + V) cho tình huống giả định, không có thật ở hiện tại.",
        rules: [
          { eng: "First Conditional: If + S + V(present), S + will/can/must + V(inf). Real future possibilities.", vi: "Điều kiện loại 1: Diễn tả khả năng có thể xảy ra trong tương lai." },
          { eng: "Second Conditional: If + S + V(past) [were for all subjects], S + would/could + V(inf). Unreal/imaginary situations now.", vi: "Điều kiện loại 2: Diễn tả tình huống giả định không có thật ở hiện tại." }
        ],
        exercises: [
          {
            question: "If carbon emissions ________ (continue) to rise, global temperatures will increase.",
            options: ["continue", "continued", "will continue", "continues"],
            answer: "continue",
            explanation: "Vế sau dùng 'will increase' (loại 1). Chủ ngữ số nhiều 'carbon emissions' đi với động từ nguyên mẫu 'continue'."
          },
          {
            question: "If everyone ________ (use) solar energy, we would reduce environmental pollution significantly.",
            options: ["uses", "used", "will use", "use"],
            answer: "used",
            explanation: "Vế sau có 'would reduce' (loại 2). Vế 'if' chia ở thì quá khứ đơn: 'used'."
          },
          {
            question: "If I ________ (be) the environment minister, I would ban plastic bags immediately.",
            options: ["am", "was", "were", "been"],
            answer: "were",
            explanation: "Câu điều kiện loại 2 (giả định không thật). Trong câu điều kiện loại 2, động từ to be chia là 'were' cho tất cả các ngôi."
          }
        ]
      },
      reading: {
        title: "Deforestation and Biodiversity Loss",
        vietnameseTitle: "Phá rừng và Mất đa dạng sinh học",
        passage: "Forests are home to more than half of the world's terrestrial species, making them critical for global biodiversity. However, huge areas of forest are cut down daily for agriculture and urban development. If this deforestation continues at the current rate, many species will lose their habitats and face extinction. Scientists warn that if we do not act immediately to support forest conservation, the earth's ecosystem will be severely depleted. Moreover, forests absorb carbon dioxide; without them, greenhouse gas emissions will accumulate in the atmosphere, accelerating climate change. Protecting forests is not just about saving trees, it is about securing our own survival.",
        passageVi: "Rừng là nơi sinh sống của hơn một nửa các loài sinh vật trên cạn của thế giới, khiến chúng trở nên quan trọng đối với đa dạng sinh học toàn cầu. Tuy nhiên, các diện tích rừng lớn bị chặt hạ hàng ngày để phục vụ nông nghiệp và phát triển đô thị. Nếu tình trạng phá rừng này tiếp tục diễn ra với tốc độ hiện tại, nhiều loài sẽ mất môi trường sống và đối mặt với nguy cơ tuyệt chủng. Các nhà khoa học cảnh báo rằng nếu chúng ta không hành động ngay lập tức để hỗ trợ bảo tồn rừng, hệ sinh thái của trái đất sẽ bị suy giảm nghiêm trọng. Hơn nữa, rừng hấp thụ khí carbon dioxide; không có chúng, khí thải nhà kính sẽ tích tụ trong bầu khí quyển, đẩy nhanh biến đổi khí hậu. Bảo vệ rừng không chỉ là cứu cây xanh, mà là bảo vệ chính sự sinh tồn của chúng ta.",
        questions: [
          {
            type: "tfng",
            question: "Forests contain over 50% of the world's land species.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Đoạn văn ghi: 'Forests are home to more than half (trên 50%) of the world's terrestrial (đất liền/trên cạn) species'."
          },
          {
            type: "tfng",
            question: "Agriculture is the only reason for deforestation.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Đoạn văn ghi: 'cut down daily for agriculture and urban development' (cho nông nghiệp và phát triển đô thị). Nên từ 'only' làm câu này thành FALSE."
          },
          {
            type: "mcq",
            question: "What will happen if deforestation continues at the current pace?",
            options: [
              "Carbon dioxide levels will decrease.",
              "Many species will lose their homes.",
              "More forests will grow naturally.",
              "Rainfall will double immediately."
            ],
            answer: "Many species will lose their homes.",
            explanation: "Đoạn văn ghi: '...many species will lose their habitats (môi trường sống/nhà) and face extinction.'"
          }
        ]
      },
      listening: {
        title: "Protecting National Parks Podcast",
        vietnameseTitle: "Podcast bảo vệ Vườn quốc gia",
        transcript: "Speaker: Welcome back to GreenPlanet Podcast. Today we look at Yellowstone National Park. Yellowstone has incredible biodiversity, with wolves, grizzly bears, and bison. However, these animals face danger due to rising tourist numbers. If visitors do not follow park rules, littering will deplete the soil quality. Also, if tourists feed the wild animals, these creatures will lose their hunting instincts. Park ranger Julia warns: 'If we don't limit the daily number of cars inside the park, noise emissions will drive animals away from the roads. If you visit, please stay on the trails to protect this beautiful nature.'",
        audioText: "Welcome back to GreenPlanet Podcast. Today we look at Yellowstone National Park. Yellowstone has incredible biodiversity, with wolves, grizzly bears, and bison. However, these animals face danger due to rising tourist numbers. If visitors do not follow park rules, littering will deplete the soil quality. Also, if tourists feed the wild animals, these creatures will lose their hunting instincts. Park ranger Julia warns: 'If we don't limit the daily number of cars inside the park, noise emissions will drive animals away from the roads. If you visit, please stay on the trails to protect this beautiful nature.'",
        questions: [
          {
            question: "Which of the following animals is NOT mentioned in Yellowstone?",
            options: ["Wolves", "Grizzly bears", "Bison", "Tigers"],
            answer: "Tigers",
            explanation: "Speaker liệt kê: 'wolves, grizzly bears, and bison'. Tigers không được nhắc đến."
          },
          {
            question: "What happens if tourists feed wild animals?",
            options: ["Animals will get fatter", "Animals will lose their hunting instincts", "Animals will become friendly to cars", "Animals will breed faster"],
            answer: "Animals will lose their hunting instincts",
            explanation: "Podcast ghi rõ: 'if tourists feed the wild animals, these creatures will lose their hunting instincts.'"
          },
          {
            question: "According to ranger Julia, what must be limited to reduce noise emissions?",
            options: ["The number of tour guides", "The daily number of cars", "The volume of music speakers", "The tourist cameras"],
            answer: "The daily number of cars",
            explanation: "Ranger khuyên: 'If we don't limit the daily number of cars inside the park, noise emissions...'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "Do you like visiting natural places like parks or forests?",
          vietnameseHint: "Gợi ý: Nói về sở thích của bạn với thiên nhiên. Thích không khí trong lành, cây cối giúp giảm căng thẳng. Cố gắng dùng từ 'eco-friendly' hoặc 'biodiversity'.",
          sampleAnswer: "Yes, I absolutely love visiting natural places. Whenever I feel stressed, I go to a local park to enjoy the fresh air. I believe preserving these eco-friendly spots is important for city residents to connect with nature.",
          keywords: ["natural", "stressed", "fresh air", "eco-friendly"]
        },
        part2: {
          cueCard: "Describe an environmental problem in your country.\nYou should say:\n- What the problem is\n- What causes this problem\n- How it affects people's lives\nAnd explain what can be done to solve this problem.",
          vietnameseHint: "Gợi ý: Bạn có thể chọn ô nhiễm không khí (air pollution), rác thải nhựa (plastic waste), hoặc khí thải carbon (carbon emissions). Sử dụng câu điều kiện loại 1 & 2 để đưa ra giải pháp.",
          sampleAnswer: "Today, I will talk about air pollution, which is a critical environmental problem in my city. This issue is mainly caused by exhaust emissions from millions of motorcycles and factories operating nearby. As a result, the air quality index is often unhealthy, affecting people's lungs and causing respiratory diseases. If the government improved public transport, more people would leave their motorbikes at home, which would reduce emissions. Furthermore, if we planted more trees, the leaves would filter the dusty air. If we do not act now, the health of our children will be severely depleted.",
          keywords: ["air pollution", "emissions", "respiratory", "reduce", "depleted"]
        },
        part3: {
          question: "Whose responsibility is it to protect the environment: governments or individuals?",
          vietnameseHint: "Gợi ý: Cân bằng cả hai phía. Chính phủ có luật pháp và ngân sách, cá nhân có thói quen hàng ngày. Sử dụng cấu trúc điều kiện: 'If governments pass laws...', 'If individuals recycle...'.",
          sampleAnswer: "I strongly believe protecting the environment is a shared responsibility. On the one hand, if governments implement strict laws, factories will be forced to reduce their carbon emissions. Governments can also invest in renewable energy. On the other hand, if individuals do not adopt eco-friendly habits like recycling and saving electricity, laws will not succeed. Therefore, if both sides collaborate, we will protect global biodiversity effectively.",
          keywords: ["responsibility", "implement", "emissions", "eco-friendly", "biodiversity"]
        }
      },
      writing: {
        taskType: "Task 2",
        prompt: "Global warming is one of the most serious issues facing the world today. What are the causes of global warming, and what measures can be taken to solve it?",
        vietnameseHint: "Gợi ý: Dạng bài viết tìm nguyên nhân và giải pháp (Causes and Solutions). Bạn viết ít nhất 150-250 từ. Nguyên nhân: Khí thải (emissions), phá rừng (deforestation làm cạn kiệt - deplete cây xanh). Giải pháp: Năng lượng sạch, luật bảo tồn (conservation).",
        sampleAnswer: "Global warming has emerged as one of the most threatening environmental issues in modern times. This essay will examine the primary causes of this phenomenon and propose some practical solutions.\n\nTo begin with, the main driver of global warming is the excessive emission of greenhouse gases. The burning of fossil fuels like coal and oil for electricity and transportation releases carbon dioxide into the atmosphere, trapping heat. Another major cause is deforestation. As massive forest areas are cleared for farming, the earth's capacity to absorb CO2 is severely depleted, which accelerates temperature rises.\n\nTo combat this crisis, several measures must be implemented. Firstly, governments should subsidize renewable energy sources such as solar and wind power. If green energy becomes cheaper, factories and households will switch to eco-friendly options. Secondly, reforestation programs must be launched globally. If we plant more trees, they will absorb atmospheric carbon. Finally, individuals should reduce car usage and support wildlife conservation efforts.\n\nIn conclusion, global warming is caused by industrial emissions and forest loss. However, it can be mitigated if governments promote green energy and individuals adopt eco-friendly lifestyles.",
        minWords: 150,
        suggestedVocab: ["warming", "emissions", "deforestation", "depleted", "measures", "eco-friendly", "conservation"]
      }
    },
    {
      id: 5,
      title: "Health & Lifestyle",
      vietnameseTitle: "Sức khỏe & Lối sống",
      description: "Discuss physical fitness, stress management, and active lifestyles using modal verbs.",
      vocabulary: [
        {
          word: "Sedentary",
          ipa: "/ˈsed.ən.tər.i/",
          pos: "adj",
          meaning: "Thụ động, ngồi nhiều (lối sống)",
          definition: "Tending to spend much time seated; somewhat inactive.",
          example: "Office workers often lead a sedentary lifestyle.",
          exampleVi: "Nhân viên văn phòng thường có lối sống ngồi nhiều ít vận động.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Well-being",
          ipa: "/ˌwelˈbiː.ɪŋ/",
          pos: "noun",
          meaning: "Trạng thái khỏe mạnh và hạnh phúc",
          definition: "The state of being comfortable, healthy, or happy.",
          example: "Physical exercise is important for mental well-being.",
          exampleVi: "Tập thể dục thể chất rất quan trọng đối với sức khỏe tinh thần.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Preventative",
          ipa: "/prɪˈven.tə.tɪv/",
          pos: "adj",
          meaning: "Phòng ngừa, ngăn chặn",
          definition: "Designed to keep something undesirable from happening.",
          example: "Regular health checks are a good preventative measure.",
          exampleVi: "Khám sức khỏe định kỳ là một biện pháp phòng ngừa tốt.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Cope",
          ipa: "/cope/",
          pos: "verb",
          meaning: "Đương đầu, giải quyết khó khăn",
          definition: "Deal effectively with something difficult.",
          example: "Yoga helps me cope with work stress.",
          exampleVi: "Yoga giúp tôi đương đầu với áp lực công việc.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Nutrient-dense",
          ipa: "/ˈnjuː.tri.ənt-dens/",
          pos: "adj",
          meaning: "Giàu dinh dưỡng (nhiều vi chất)",
          definition: "Foods that are high in nutrients but relatively low in calories.",
          example: "Spinach and blueberries are nutrient-dense foods.",
          exampleVi: "Rau bina và quả việt quất là những thực phẩm giàu dinh dưỡng.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "Modal Verbs of Obligation and Advice",
        explanation: "Các động từ khuyết thiếu: 'Must' (bắt buộc từ bản thân/luật lệ nghiêm khắc), 'Have to' (bắt buộc khách quan do tình huống), 'Should' (lời khuyên nên làm).",
        rules: [
          { eng: "Advice: should / ought to. e.g., You should sleep 8 hours.", vi: "Lời khuyên: dùng 'should' hoặc 'ought to'." },
          { eng: "Strong Obligation/Necessity: must (internal belief/rules) / have to (external rules). e.g., Doctors must wear masks.", vi: "Bắt buộc: dùng 'must' (tự nhận thấy) hoặc 'have to' (do quy định ngoài)." }
        ],
        exercises: [
          {
            question: "To improve your fitness, you ________ (should) exercise at least three times a week.",
            options: ["must to", "should", "have", "ought"],
            answer: "should",
            explanation: "Đây là một lời khuyên thông thường nên dùng 'should'. 'Ought' cần có 'to', 'must' không đi kèm với 'to'."
          },
          {
            question: "Before entering the operating room, surgeons ________ (have to) wash their hands thoroughly.",
            options: ["must to", "have to", "should to", "ought"],
            answer: "have to",
            explanation: "Quy định y tế bắt buộc khách quan nên dùng 'have to'. (Nếu dùng 'must' cũng mang nghĩa bắt buộc nhưng không bao giờ đi kèm 'to' như trong phương án 'must to')."
          },
          {
            question: "Patients ________ (must not) eat anything for 12 hours before this specific blood test.",
            options: ["don't have to", "must not", "shouldn't to", "haven't to"],
            answer: "must not",
            explanation: "Lệnh cấm tuyệt đối ('must not') trong y khoa để kết quả xét nghiệm chính xác."
          }
        ]
      },
      reading: {
        title: "The Danger of Sedentary Lifestyles",
        vietnameseTitle: "Nguy hiểm từ Lối sống Thụ động",
        passage: "In modern societies, an increasing number of people are leading sedentary lifestyles. Most office workers spend more than eight hours a day sitting in front of computer screens. Health experts warn that this lack of movement is severely detrimental to long-term well-being. It is associated with a higher risk of heart disease, diabetes, and mental fatigue. To combat this, individuals should make active choices, such as taking the stairs instead of the elevator. Furthermore, employers must introduce preventative measures, like standing desks or mandatory stretching breaks. We do not have to run marathons to stay healthy, but we must keep moving throughout the day.",
        passageVi: "Trong các xã hội hiện đại, số lượng người có lối sống thụ động ngày càng tăng. Hầu hết nhân viên văn phòng dành hơn tám tiếng mỗi ngày để ngồi trước màn hình máy tính. Các chuyên gia y tế cảnh báo sự thiếu vận động này cực kỳ có hại cho sức khỏe lâu dài. Nó liên quan đến nguy cơ mắc bệnh tim, tiểu đường và mệt mỏi tinh thần cao hơn. Để chống lại điều này, cá nhân nên đưa ra những lựa chọn tích cực, chẳng hạn như đi cầu thang bộ thay vì thang máy. Hơn nữa, người sử dụng lao động phải giới thiệu các biện pháp phòng ngừa, như bàn làm việc đứng hoặc giờ nghỉ giải lao bắt buộc. Chúng ta không cần chạy việt dã để giữ sức khỏe, nhưng chúng ta phải liên tục vận động suốt cả ngày.",
        questions: [
          {
            type: "tfng",
            question: "According to the text, only office workers suffer from sedentary habits.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Đoạn văn ghi 'Most office workers spend...' nhưng không bảo 'chỉ duy nhất' (only) nhân viên văn phòng mới bị thói quen này."
          },
          {
            type: "tfng",
            question: "Standing desks are mentioned as a preventative measure for offices.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Đoạn văn ghi rõ: 'employers must introduce preventative measures, like standing desks...'"
          },
          {
            type: "mcq",
            question: "What is the main message of the author regarding exercise?",
            options: [
              "We must run marathons every week.",
              "We should avoid working in offices.",
              "We don't need extreme sports, but we must avoid sitting all day.",
              "We have to eat less carbohydrates."
            ],
            answer: "We don't need extreme sports, but we must avoid sitting all day.",
            explanation: "Đoạn cuối ghi: 'We do not have to run marathons to stay healthy, but we must keep moving throughout the day.'"
          }
        ]
      },
      listening: {
        title: "Work-Life Balance Interview",
        vietnameseTitle: "Cuộc phỏng vấn Cân bằng Cuộc sống & Công việc",
        transcript: "Host: Today we discuss stress with psychologist Dr. Baker. Dr. Baker, how should we cope with heavy workloads?\nDr. Baker: A major issue today is work stress, which damages our mental well-being. Firstly, workers must learn to disconnect. You shouldn't check emails after 8 PM. Secondly, you should eat nutrient-dense meals instead of sugary snacks when tired. Sugar gives a fast boost but causes a crash. Finally, you don't have to spend hours at the gym; a simple 20-minute daily walk can help your brain cope with pressure.",
        audioText: "Today we discuss stress with psychologist Dr. Baker. Dr. Baker, how should we cope with heavy workloads? A major issue today is work stress, which damages our mental well-being. Firstly, workers must learn to disconnect. You should not check emails after 8 PM. Secondly, you should eat nutrient-dense meals instead of sugary snacks when tired. Sugar gives a fast boost but causes a crash. Finally, you do not have to spend hours at the gym; a simple 20-minute daily walk can help your brain cope with pressure.",
        questions: [
          {
            question: "According to Dr. Baker, when should you avoid checking work emails?",
            options: ["During lunch time", "After 8 PM", "On Monday mornings", "While exercising"],
            answer: "After 8 PM",
            explanation: "Dr. Baker nói: 'You shouldn't check emails after 8 PM.'"
          },
          {
            question: "What dietary advice does Dr. Baker give when feeling tired?",
            options: ["Drink coffee", "Eat sugary snacks", "Eat nutrient-dense meals", "Skip dinner"],
            answer: "Eat nutrient-dense meals",
            explanation: "Dr. Baker khuyên: 'you should eat nutrient-dense meals instead of sugary snacks when tired.'"
          },
          {
            question: "How long is the recommended daily walk to cope with pressure?",
            options: ["5 minutes", "20 minutes", "1 hour", "2 hours"],
            answer: "20 minutes",
            explanation: "Dr. Baker cho rằng: 'a simple 20-minute daily walk can help...'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "What do you do to stay healthy?",
          vietnameseHint: "Gợi ý: Liệt kê các thói quen tốt (tập thể dục, uống nước, ngủ sớm). Dùng động từ khuyết thiếu 'should' hoặc 'try to'.",
          sampleAnswer: "To stay healthy, I try to avoid a sedentary routine. I exercise regularly by running in the morning. Also, I believe we should drink enough water and eat plenty of fruits to support our well-being.",
          keywords: ["healthy", "sedentary", "exercise", "should", "well-being"]
        },
        part2: {
          cueCard: "Describe a health habit you would like to develop in the future.\nYou should say:\n- What the habit is\n- Why you want to develop it\n- How easy or difficult it will be\nAnd explain how this habit will benefit your lifestyle.",
          vietnameseHint: "Gợi ý: Có thể nói về việc tập thiền (meditation), ngủ sớm hơn, hoặc nấu ăn lành mạnh hơn. Dùng động từ khuyết thiếu chỉ sự cam kết như 'must', 'should'.",
          sampleAnswer: "Today, I will talk about a healthy habit I want to start, which is preparing nutrient-dense lunch boxes at home. Currently, I lead a busy lifestyle, so I often consume fast food, which is bad for my long-term well-being. I want to develop this new habit because I must reduce my sodium and preservative intake. I think it will be quite difficult initially, because I have to wake up 30 minutes earlier to cook. However, this habit will definitely benefit my lifestyle. It will help me cope with work stress better by providing stable physical energy, and it is a good preventative measure against weight gain. I should make this change as soon as possible.",
          keywords: ["nutrient-dense", "well-being", "must", "have to", "cope", "preventative", "should"]
        },
        part3: {
          question: "Whose duty is it to educate children about healthy lifestyles: schools or parents?",
          vietnameseHint: "Gợi ý: Cả hai bên đều có nghĩa vụ (duty / must). Cha mẹ làm gương qua bữa ăn hàng ngày, trường học dạy kiến thức khoa học và thể chất.",
          sampleAnswer: "In my opinion, both parents and schools must collaborate to educate children. Parents should set a good example at home by avoiding sedentary activities and cooking balanced meals. Meanwhile, schools have to provide physical education classes and teach the science behind health. If both play their parts, children will naturally develop preventative habits for their future well-being.",
          keywords: ["must", "should", "sedentary", "have to", "preventative", "well-being"]
        }
      },
      writing: {
        taskType: "Task 2",
        prompt: "In many countries, life expectancy is increasing. What problems could this trend cause for society, and what should be done to resolve them?",
        vietnameseHint: "Gợi ý: Dạng bài viết vấn đề và giải pháp (Problems and Solutions). Dùng ít nhất 150-250 từ. Vấn đề: Gánh nặng hệ thống y tế, thiếu lao động trẻ, người già cần chăm sóc nhiều hơn. Giải pháp: Khuyến khích lối sống lành mạnh ngăn ngừa bệnh tật (preventative), nâng tuổi nghỉ hưu.",
        sampleAnswer: "In recent years, many nations have experienced a rise in average life expectancy. While this reflects progress in healthcare, it introduces severe challenges for society. This essay will outline these issues and propose modal recommendations to address them.\n\nTo begin with, an aging population places a massive financial burden on the state. Governments must allocate huge budgets to pay for pensions and healthcare. Since older citizens are more likely to suffer from chronic illnesses, hospital resources could be depleted. Additionally, a shrinking youth workforce means tax revenues will decline, leading to a weaker economy.\n\nTo mitigate these problems, several policies should be implemented. Firstly, governments have to gradually raise the retirement age. This keeps experienced workers in the economy and reduces pension stress. Secondly, society should promote preventative health education for elders. If seniors stay active and avoid sedentary lifestyles, they will maintain their well-being longer, reducing hospital dependency. Finally, young people ought to be encouraged to have children through tax incentives.\n\nIn conclusion, an aging population threatens economic stability and healthcare capacity. However, societies can cope with this trend by raising retirement ages and fostering active, healthy senior lifestyles.",
        minWords: 150,
        suggestedVocab: ["expectancy", "pensions", "depleted", "preventative", "sedentary", "well-being", "cope"]
      }
    },
    {
      id: 6,
      title: "Work & Career",
      vietnameseTitle: "Công việc & Sự nghiệp",
      description: "Discuss workplace trends, recruitment, and colleagues using the past perfect tense.",
      vocabulary: [
        {
          word: "Colleague",
          ipa: "/ˈkɒliːɡ/",
          pos: "noun",
          meaning: "Đồng nghiệp",
          definition: "A person with whom one works in a profession or business.",
          example: "I usually discuss work strategies with my colleagues.",
          exampleVi: "Tôi thường thảo luận về các chiến lược công việc với các đồng nghiệp của mình.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Recruitment",
          ipa: "/rɪˈkruːtmənt/",
          pos: "noun",
          meaning: "Sự tuyển dụng",
          definition: "The action of finding new people to join an organization.",
          example: "The company launched a recruitment drive to find young talents.",
          exampleVi: "Công ty đã phát động một đợt tuyển dụng để tìm kiếm tài năng trẻ.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Promotion",
          ipa: "/prəˈməʊʃən/",
          pos: "noun",
          meaning: "Sự thăng chức, thăng tiến",
          definition: "Activity that supports or encourages a cause, venture, or aim; advancement in rank.",
          example: "After working hard for two years, she finally received a promotion.",
          exampleVi: "Sau khi làm việc chăm chỉ trong hai năm, cô ấy cuối cùng đã được thăng chức.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Profession",
          ipa: "/prəˈfeʃən/",
          pos: "noun",
          meaning: "Nghề nghiệp (đặc thù chuyên môn)",
          definition: "A paid occupation, especially one that involves prolonged training.",
          example: "He chose the medical profession because he wanted to help patients.",
          exampleVi: "Anh ấy chọn ngành y vì muốn giúp đỡ các bệnh nhân.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Remuneration",
          ipa: "/rɪˌmjuːnəˈreɪʃən/",
          pos: "noun",
          meaning: "Thù lao, tiền lương công việc",
          definition: "Money paid for work or service.",
          example: "They demand fair remuneration for their long working hours.",
          exampleVi: "Họ yêu cầu mức thù lao công bằng cho những giờ làm việc kéo dài.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "The Past Perfect Tense",
        explanation: "Thì Quá khứ hoàn thành: S + had + V3/Ved. Dùng để diễn tả một hành động xảy ra trước một hành động khác trong quá khứ.",
        rules: [
          { eng: "Form: Subject + had + past participle (V3/Ved).", vi: "Cấu trúc: Chủ ngữ + had + động từ phân từ 2." },
          { eng: "Used to show that one action in the past happened before another action in the past.", vi: "Dùng để diễn tả một hành động đã hoàn tất trước một thời điểm hoặc một hành động khác trong quá khứ." }
        ],
        exercises: [
          {
            question: "Before she got the promotion, she ________ (work) in the marketing sector for five years.",
            options: ["worked", "had worked", "has worked", "works"],
            answer: "had worked",
            explanation: "Hành động làm việc ở bộ phận marketing diễn ra trước hành động thăng chức ('got' chia quá khứ đơn), dùng 'had worked'."
          },
          {
            question: "By the time the manager arrived, the colleagues ________ (already complete) the project proposal.",
            options: ["completed", "have completed", "had already completed", "are completing"],
            answer: "had already completed",
            explanation: "Sự việc hoàn thành đề xuất dự án xảy ra trước sự việc quản lý đến ('arrived' chia quá khứ đơn). Dùng 'had already completed'."
          },
          {
            question: "He realized he ________ (lose) his workplace security badge after he reached home.",
            options: ["had lost", "lost", "has lost", "was losing"],
            answer: "had lost",
            explanation: "Việc mất thẻ an ninh xảy ra trước việc nhận ra và về nhà. Dùng 'had lost'."
          }
        ]
      },
      reading: {
        title: "The Changing Nature of Careers",
        vietnameseTitle: "Bản chất đang thay đổi của các ngành nghề",
        passage: "In the past, employees typically stayed with a single company for their entire working lives. Loyalty was highly valued, and promotion was mostly based on seniority. However, the rise of technology and modern recruitment methods had changed this trend before the turn of the 21st century. Today, individuals change jobs frequently in search of better remuneration and work-life balance. Colleague networks are now built online via professional platforms. Recruitment is no longer limited to local talent pools; companies can hire experts worldwide. Professional agility has become the most critical skill in the modern workplace.",
        passageVi: "Trong quá khứ, nhân viên thường ở lại với một công ty duy nhất trong suốt cuộc đời làm việc của họ. Lòng trung thành được đánh giá cao và việc thăng chức chủ yếu dựa trên thâm niên. Tuy nhiên, sự phát triển của công nghệ và các phương pháp tuyển dụng hiện đại đã thay đổi xu hướng này trước khi bước sang thế kỷ 21. Ngày nay, các cá nhân thường xuyên nhảy việc để tìm kiếm mức thù lao tốt hơn và sự cân bằng giữa công việc và cuộc sống. Mạng lưới đồng nghiệp hiện được xây dựng trực tuyến thông qua các nền tảng chuyên nghiệp. Việc tuyển dụng không còn giới hạn ở các nguồn tài năng địa phương; các công ty có thể thuê các chuyên gia trên toàn thế giới. Sự nhạy bén trong nghề nghiệp đã trở thành kỹ năng quan trọng nhất tại nơi làm việc hiện đại.",
        questions: [
          {
            type: "tfng",
            question: "Before the 21st century, job loyalty was not considered important by employers.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Đoạn văn ghi: 'In the past... Loyalty was highly valued' (Lòng trung thành từng được đánh giá rất cao)."
          },
          {
            type: "tfng",
            question: "Modern employees shift jobs frequently to find higher salaries.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Đoạn văn viết: 'individuals change jobs frequently in search of better remuneration (lương/thù lao)...'"
          },
          {
            type: "mcq",
            question: "According to the text, what is the impact of online networks on colleagues?",
            options: [
              "It increases office arguments.",
              "It helps build relationships online.",
              "It replaces the need to work.",
              "It makes recruitment more expensive."
            ],
            answer: "It helps build relationships online.",
            explanation: "Văn bản ghi: 'Colleague networks are now built online via professional platforms.'"
          }
        ]
      },
      listening: {
        title: "A Job Interview Dialogue",
        vietnameseTitle: "Cuộc đối thoại phỏng vấn xin việc",
        transcript: "Interviewer: Welcome to our office, Mr. Vance. Before you applied, had you worked in software recruitment?\nApplicant: Yes, absolutely. I had worked at TechStaffing for three years before I joined my current agency. My primary role was managing colleague relations and candidate sourcing.\nInterviewer: Excellent. Why did you leave TechStaffing?\nApplicant: I left because I wanted a new challenge. I had already achieved my sales target for six consecutive quarters, so I wanted to join a bigger profession.\nInterviewer: Impressive. Our company offers competitive remuneration and promotion plans based on quarterly performance.",
        audioText: "Welcome to our office, Mr. Vance. Before you applied, had you worked in software recruitment? Yes, absolutely. I had worked at TechStaffing for three years before I joined my current agency. My primary role was managing colleague relations and candidate sourcing. Excellent. Why did you leave TechStaffing? I left because I wanted a new challenge. I had already achieved my sales target for six consecutive quarters, so I wanted to join a bigger profession. Impressive. Our company offers competitive remuneration and promotion plans based on quarterly performance.",
        questions: [
          {
            question: "How long had Mr. Vance worked at TechStaffing before leaving?",
            options: ["One year", "Two years", "Three years", "Six quarters"],
            answer: "Three years",
            explanation: "Mr. Vance nói: 'I had worked at TechStaffing for three years before...'"
          },
          {
            question: "Why did Mr. Vance leave TechStaffing?",
            options: ["He wanted a higher salary", "He wanted a new challenge", "He was fired by his manager", "His colleagues were unfriendly"],
            answer: "He wanted a new challenge",
            explanation: "Mr. Vance giải thích: 'I left because I wanted a new challenge.'"
          },
          {
            question: "Company promotions are based on...",
            options: ["Seniority", "Quarterly performance", "Age", "Education level"],
            answer: "Quarterly performance",
            explanation: "Người phỏng vấn nói: 'promotion plans based on quarterly performance.'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "Do you work or are you a student?",
          vietnameseHint: "Gợi ý: Trả lời về công việc hoặc việc học của bạn. Đề cập đến ngành nghề (profession).",
          sampleAnswer: "Currently, I am working in the IT sector. I chose this profession because I love technological innovation and automation. My colleagues are also very supportive, which makes my daily tasks enjoyable.",
          keywords: ["working", "profession", "colleagues", "supportive"]
        },
        part2: {
          cueCard: "Describe a job you would like to do in the future.\nYou should say:\n- What the job is\n- What qualifications you need\n- Why you want to do this job\nAnd explain what benefits you will get from this career.",
          vietnameseHint: "Gợi ý: Tả công việc mơ ước của bạn. Đề cập đến thăng tiến (promotion), thù lao (remuneration), và kỹ năng.",
          sampleAnswer: "In the future, I would love to work as a Human Resource Manager. To qualify for this role, I need a degree in business administration and strong interpersonal skills. I want to do this job because I enjoy help people with their career paths. The profession will bring several benefits. Firstly, it offers excellent remuneration and rapid promotion opportunities for hard workers. Secondly, I will have the chance to interact with diverse colleagues, which will foster my communication skills and help me cope with industrial changes.",
          keywords: ["manager", "profession", "remuneration", "promotion", "colleagues"]
        },
        part3: {
          question: "Is high salary the most important factor when choosing a job?",
          vietnameseHint: "Gợi ý: Cân nhắc giữa thù lao (remuneration) và các yếu tố khác (môi trường làm việc, đồng nghiệp, cân bằng cuộc sống).",
          sampleAnswer: "While high remuneration is vital for financial security, I do not believe it is the only factor. A healthy work environment is equally important. If someone has toxic colleagues or a stressful workload, their well-being will suffer, regardless of salary. Therefore, career satisfaction and promotion prospects are also essential components.",
          keywords: ["remuneration", "environment", "colleagues", "well-being", "satisfaction"]
        }
      },
      writing: {
        taskType: "Task 2",
        prompt: "Some people believe that university education should focus on preparing students for their future careers. Others think it should focus on academic knowledge. Discuss both views and give your opinion.",
        vietnameseHint: "Gợi ý: Dạng bài thảo luận 2 mặt (Discuss both views). Bạn viết 150-250 từ. Phân tích lợi ích học nghề (tuyển dụng dễ hơn - recruitment) và học thuật sâu rộng (phục vụ nghiên cứu - academic).",
        sampleAnswer: "There is an ongoing debate regarding the primary goal of tertiary education. Some argue that universities ought to focus on practical training for future professions, while others believe that the pursuit of academic knowledge is more important. In my opinion, universities should balance both aspects.\n\nOn the one hand, preparing students for the job market has clear benefits. The main reason people attend university is to secure employment. Therefore, school curricula should teach skills that are in high demand by recruitment agencies. If students graduate with practical experience, they will secure jobs with better remuneration more quickly. For instance, engineering programs that include corporate internships produce graduates who adapt rapidly to their workplaces.\n\nOn the other hand, focusing purely on work training can deplete the value of education. Universities are centers of innovation and research. If academic subjects like history or philosophy are ignored, cultural heritage and deep intellectual values will be lost. Academic research has revolutionized society by making key discoveries in medicine and physics, which had not been possible through simple vocational training.\n\nIn conclusion, while preparing students for recruitment is crucial, universities must also support pure academic study to foster holistic societal development.",
        minWords: 150,
        suggestedVocab: ["professions", "recruitment", "remuneration", "academic", "discoveries", "vocational"]
      }
    },
    {
      id: 7,
      title: "Travel & Tourism",
      vietnameseTitle: "Du lịch & Lữ hành",
      description: "Discuss global travel, ecotourism, and cultural destinations using gerunds and infinitives.",
      vocabulary: [
        {
          word: "Itinerary",
          ipa: "/aɪˈtɪnərəri/",
          pos: "noun",
          meaning: "Lộ trình chuyến đi, lịch trình",
          definition: "A planned route or journey.",
          example: "We prepared a detailed itinerary for our trip to Japan.",
          exampleVi: "Chúng tôi đã chuẩn bị một lịch trình chi tiết cho chuyến đi Nhật Bản.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Destination",
          ipa: "/ˌdestɪˈneɪʃən/",
          pos: "noun",
          meaning: "Điểm đến",
          definition: "The place to which someone or something is going or being sent.",
          example: "Ha Long Bay is a popular tourist destination in Vietnam.",
          exampleVi: "Vịnh Hạ Long là một điểm đến du lịch nổi tiếng ở Việt Nam.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Souvenir",
          ipa: "/ˌsuːvəˈnɪər/",
          pos: "noun",
          meaning: "Quà lưu niệm",
          definition: "A thing that is kept as a reminder of a person, place, or event.",
          example: "She bought a handmade scarf as a souvenir from Sapa.",
          exampleVi: "Cô ấy đã mua một chiếc khăn quàng cổ làm bằng tay làm quà lưu niệm từ Sa Pa.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Hospitality",
          ipa: "/ˌhɒspɪˈtæliti/",
          pos: "noun",
          meaning: "Lòng hiếu khách, ngành khách sạn nhà hàng",
          definition: "The friendly and generous reception and entertainment of guests, visitors, or strangers.",
          example: "Local residents are famous for their warm hospitality.",
          exampleVi: "Người dân địa phương nổi tiếng vì lòng hiếu khách nồng hậu.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Eco-tourism",
          ipa: "/ˈiːkəʊˌtʊərɪzəm/",
          pos: "noun",
          meaning: "Du lịch sinh thái",
          definition: "Tourism directed toward exotic, often threatened, natural environments, intended to support conservation.",
          example: "Eco-tourism promotes wildlife conservation and green travel.",
          exampleVi: "Du lịch sinh thái thúc đẩy bảo tồn động vật hoang dã và du lịch xanh.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "Gerunds vs. Infinitives",
        explanation: "Sử dụng Danh động từ (V-ing) hoặc Động từ nguyên mẫu (To V) tùy thuộc vào động từ đứng trước (Ví dụ: enjoy + V-ing, decide + to V).",
        rules: [
          { eng: "Verbs followed by Gerund (V-ing): enjoy, avoid, suggest, consider, practice.", vi: "Động từ theo sau bởi V-ing: thích, tránh, gợi ý, cân nhắc, thực hành." },
          { eng: "Verbs followed by Infinitive (to V): decide, plan, hope, want, refuse, offer.", vi: "Động từ theo sau bởi To V: quyết định, lên kế hoạch, hy vọng, muốn, từ chối." }
        ],
        exercises: [
          {
            question: "I decided ________ (book) a trip to Sapa after reading a travel blog.",
            options: ["booking", "to book", "book", "booked"],
            answer: "to book",
            explanation: "Động từ 'decide' theo sau bởi động từ nguyên mẫu có to: 'to book'."
          },
          {
            question: "Many tourists enjoy ________ (visit) local markets to buy handmade souvenirs.",
            options: ["to visit", "visiting", "visit", "visited"],
            answer: "visiting",
            explanation: "Động từ 'enjoy' bắt buộc theo sau bởi danh động từ: 'visiting'."
          },
          {
            question: "They suggested ________ (develop) eco-tourism to protect local forests.",
            options: ["developing", "to develop", "develop", "developed"],
            answer: "developing",
            explanation: "Động từ 'suggest' theo sau bởi V-ing: 'developing'."
          }
        ]
      },
      reading: {
        title: "The Growth of Eco-Tourism",
        vietnameseTitle: "Sự phát triển của du lịch sinh thái",
        passage: "Tourism is one of the fastest-growing industries globally, but standard tourism often damages natural habitats. To solve this problem, many countries decide to promote eco-tourism. This type of travel encourages tourists to respect nature. In eco-tourism destinations, hotels avoid using plastic and instead focus on saving energy. Visitors plan to learn about local biodiversity and purchase local souvenirs to support the economy. Furthermore, local guides teach tourists how to avoid depleting natural resources. Hopefully, this green transition will continue to protect endangered ecosystems.",
        passageVi: "Du lịch là một trong những ngành công nghiệp phát triển nhanh nhất trên toàn cầu, nhưng du lịch thông thường thường hủy hoại môi trường sống tự nhiên. Để giải quyết vấn đề này, nhiều quốc gia quyết định thúc đẩy du lịch sinh thái. Loại hình du lịch này khuyến khích du khách tôn trọng thiên nhiên. Tại các điểm đến du lịch sinh thái, các khách sạn tránh sử dụng nhựa và thay vào đó tập trung vào tiết kiệm năng lượng. Du khách lên kế hoạch tìm hiểu về đa dạng sinh học địa phương và mua quà lưu niệm địa phương để hỗ trợ nền kinh tế. Hơn nữa, các hướng dẫn viên địa phương dạy du khách cách tránh làm cạn kiệt tài nguyên thiên nhiên. Hy vọng rằng quá trình chuyển đổi xanh này sẽ tiếp tục bảo vệ các hệ sinh thái đang bị đe dọa.",
        questions: [
          {
            type: "tfng",
            question: "Standard tourism typically has a positive effect on natural habitats.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Đoạn văn ghi: 'standard tourism often damages natural habitats' (hủy hoại môi trường tự nhiên, nên tác động là tiêu cực chứ không phải tích cực)."
          },
          {
            type: "tfng",
            question: "Eco-tourism hotels try to minimize their energy consumption.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Văn bản ghi: 'hotels avoid using plastic and instead focus on saving energy' (tiết kiệm/giảm tiêu thụ năng lượng)."
          },
          {
            type: "mcq",
            question: "Why do eco-tourists buy local souvenirs, according to the passage?",
            options: [
              "Because they are very cheap.",
              "To support the local economy.",
              "Because plastic is banned.",
              "To win a free travel ticket."
            ],
            answer: "To support the local economy.",
            explanation: "Đoạn văn ghi: 'purchase local souvenirs to support the economy.'"
          }
        ]
      },
      listening: {
        title: "Booking a Holiday Package",
        vietnameseTitle: "Đặt một gói kỳ nghỉ",
        transcript: "Agent: Hello, welcome to Horizon Travel. How can I assist you?\nTourist: Hi. I want to plan a family trip. Our destination is Da Nang, and we hope to visit Hoi An as well. We enjoy visiting historic towns.\nAgent: Wonderful. I suggest booking our 5-day package. The itinerary includes visiting the Marble Mountains, relaxing on My Khe Beach, and a day trip to Hoi An.\nTourist: That sounds excellent. Does the hotel provide good hospitality?\nAgent: Yes, indeed. The resort is famous for its warm hospitality. They also avoid using plastic bottles to support green travel.\nTourist: Perfect. I decide to sign the contract now.",
        audioText: "Hello, welcome to Horizon Travel. How can I assist you? Hi. I want to plan a family trip. Our destination is Da Nang, and we hope to visit Hoi An as well. We enjoy visiting historic towns. Wonderful. I suggest booking our 5-day package. The itinerary includes visiting the Marble Mountains, relaxing on My Khe Beach, and a day trip to Hoi An. That sounds excellent. Does the hotel provide good hospitality? Yes, indeed. The resort is famous for its warm hospitality. They also avoid using plastic bottles to support green travel. Perfect. I decide to sign the contract now.",
        questions: [
          {
            question: "What is the primary tourist destination of the family?",
            options: ["Sapa", "Nha Trang", "Da Nang", "Hue"],
            answer: "Da Nang",
            explanation: "Du khách nói: 'Our destination is Da Nang...'"
          },
          {
            question: "How long is the holiday package itinerary?",
            options: ["3 days", "5 days", "7 days", "10 days"],
            answer: "5 days",
            explanation: "Nhân viên đề xuất: 'I suggest booking our 5-day package.'"
          },
          {
            question: "Why does the hotel avoid plastic bottles?",
            options: ["To save money", "To support green travel", "Because tourists hate plastic", "Because of government fines"],
            answer: "To support green travel",
            explanation: "Agent nói: 'They also avoid using plastic bottles to support green travel.'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "Do you like traveling to natural areas or big cities?",
          vietnameseHint: "Gợi ý: Nói về sở thích của bạn (du lịch sinh thái - eco-tourism, thư giãn). Dùng danh động từ sau động từ chỉ sở thích: 'I enjoy traveling...', 'I prefer visiting...'.",
          sampleAnswer: "I definitely enjoy traveling to natural areas. I prefer visiting eco-tourism destinations because they allow me to connect with nature and escape busy cities. I avoid going to noisy towns when I am on holiday.",
          keywords: ["enjoy", "traveling", "eco-tourism", "avoid", "nature"]
        },
        part2: {
          cueCard: "Describe a memorable holiday destination you have visited.\nYou should say:\n- Where this place is\n- Who you went with\n- What you did there\nAnd explain why you decided to choose this destination.",
          vietnameseHint: "Gợi ý: Tả chuyến đi Đà Nẵng, Phú Quốc hay Đà Lạt. Nêu lộ trình (itinerary), lòng hiếu khách (hospitality) và quà lưu niệm (souvenir).",
          sampleAnswer: "Last year, I decided to take a trip to Hoi An, which is a historic destination in central Vietnam. I traveled there with my family. We followed a detailed itinerary that included walking around the old town and trying local foods. The local people welcomed us with exceptional hospitality, making us feel at home. Before going back, I visited the local market to buy some traditional lanterns as souvenirs. I decided to choose this destination because I wanted to learn about history and enjoy peaceful environments. I look forward to returning there soon.",
          keywords: ["destination", "itinerary", "hospitality", "souvenir", "decided"]
        },
        part3: {
          question: "What are some negative effects of mass tourism on local environments?",
          vietnameseHint: "Gợi ý: Nêu tác hại (làm cạn kiệt tài nguyên - deplete, xả rác). Sử dụng V-ing/To V: 'Mass tourism causes damaging...', 'Governments need to regulate...' .",
          sampleAnswer: "Mass tourism can cause severe damage to local habitats. Firstly, excessive tourist numbers often deplete natural water supplies and generate huge amounts of plastic waste. If hotels refuse to adopt eco-friendly practices, pollution increases. Secondly, constructing massive resorts near beaches destroys biodiversity. To protect these destinations, governments must suggest limiting daily visitor numbers and promoting eco-tourism instead.",
          keywords: ["damage", "deplete", "eco-friendly", "destinations", "eco-tourism"]
        }
      },
      writing: {
        taskType: "Task 1",
        prompt: "The bar chart below shows the number of international tourists (in millions) visiting three different European countries: France, Spain, and Italy, between 1995 and 2005. Describe the main trends and make comparisons where relevant.",
        vietnameseHint: "Gợi ý: Viết ít nhất 150 từ mô tả xu hướng. So sánh số lượng khách du lịch (international tourists) đến 3 quốc gia qua các năm. Dùng các từ nối so sánh.",
        sampleAnswer: "The bar chart compares the number of international visitors to France, Spain, and Italy over a ten-year period from 1995 to 2005.\n\nOverall, it is obvious that all three destinations experienced upward trends in tourist arrivals. France remained the most popular country for tourists throughout the entire period, while Spain showed the fastest growth.\n\nIn 1995, France was the top destination, hosting 30 million international tourists. This figure increased steadily to reach 45 million by 2005. Spain also saw a significant rise; starting at 20 million visitors in 1995, the numbers doubled to 40 million in 2005, closing the gap with France.\n\nMeanwhile, Italy attracted 15 million tourists in 1995. Despite a minor drop in 2000, the visitor count recovered and climbed to 25 million by 2005. Although Italy remained the least visited among the three countries, its tourism sector showed overall positive development.",
        minWords: 150,
        suggestedVocab: ["compares", "destinations", "arrivals", "steadily", "doubled", "recovered", "visitors"]
      }
    },
    {
      id: 8,
      title: "Education & Learning",
      vietnameseTitle: "Giáo dục & Học tập",
      description: "Discuss modern schooling, online learning, and study methods using relative clauses.",
      vocabulary: [
        {
          word: "Curriculum",
          ipa: "/kəˈrɪkjʊləm/",
          pos: "noun",
          meaning: "Khung chương trình giảng dạy",
          definition: "The subjects comprising a course of study in a school or college.",
          example: "The school curriculum should focus on practical career skills.",
          exampleVi: "Chương trình giảng dạy của nhà trường nên tập trung vào các kỹ năng nghề nghiệp thực tế.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Academic",
          ipa: "/ˌækəˈdemɪk/",
          pos: "adj",
          meaning: "Thuộc về học thuật, lý thuyết",
          definition: "Relating to education and scholarship.",
          example: "He achieved high academic performance in university.",
          exampleVi: "Anh ấy đã đạt được thành tích học tập cao ở trường đại học.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Scholarship",
          ipa: "/ˈskɒləʃɪp/",
          pos: "noun",
          meaning: "Học bổng",
          definition: "A grant or payment made to support a student's education, awarded on the basis of academic achievement.",
          example: "She won a full scholarship to study in the UK.",
          exampleVi: "Cô ấy đã giành được một học bổng toàn phần để học tập tại Anh.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Literacy",
          ipa: "/ˈlɪtərəsi/",
          pos: "noun",
          meaning: "Sự biết chữ, khả năng đọc viết",
          definition: "The ability to read and write.",
          example: "Adult literacy rates have improved globally over the last century.",
          exampleVi: "Tỷ lệ biết chữ ở người lớn đã được cải thiện trên toàn cầu trong thế kỷ qua.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Pedagogical",
          ipa: "/ˌpedəˈɡɒdʒɪkəl/",
          pos: "adj",
          meaning: "Thuộc về sư khoa học sư phạm, phương pháp giảng dạy",
          definition: "Relating to teaching or pedagogy.",
          example: "Teachers need to adapt their pedagogical methods to match student needs.",
          exampleVi: "Giáo viên cần điều chỉnh các phương pháp sư phạm của họ để phù hợp với nhu cầu của học sinh.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "Relative Clauses (Mệnh đề quan hệ)",
        explanation: "Dùng đại từ quan hệ (Who, Which, That, Whose) để nối hai câu hoặc bổ nghĩa cho danh từ đứng trước.",
        rules: [
          { eng: "Who: replaces human subjects. e.g., The teacher who taught me was helpful.", vi: "Who: thay thế cho chủ ngữ chỉ người." },
          { eng: "Which / That: replaces objects or non-human subjects. e.g., The curriculum which they use is modern.", vi: "Which / That: thay thế cho sự vật, sự việc." }
        ],
        exercises: [
          {
            question: "The teacher ________ (who) helped me study for IELTS was very experienced.",
            options: ["which", "who", "whom", "whose"],
            answer: "who",
            explanation: "Chủ ngữ phía trước chỉ người ('The teacher') nên dùng đại từ quan hệ 'who'."
          },
          {
            question: "I want to apply for a scholarship ________ (which) pays for tuition fees.",
            options: ["who", "whose", "which", "whom"],
            answer: "which",
            explanation: "Danh từ phía trước chỉ vật ('a scholarship') làm chủ ngữ cho vế sau, dùng 'which'."
          },
          {
            question: "Online learning is a method ________ (that) has revolutionized modern education.",
            options: ["who", "that", "whose", "whom"],
            answer: "that",
            explanation: "Học trực tuyến là một phương pháp ('a method' - chỉ vật) nên dùng 'that' (hoặc which)."
          }
        ]
      },
      reading: {
        title: "Online Education vs Traditional Classrooms",
        vietnameseTitle: "Giáo dục trực tuyến với Lớp học truyền thống",
        passage: "In recent years, virtual learning platforms, which offer flexible study schedules, have grown in popularity. Students who have part-time jobs prefer online courses because they can study at night. However, traditional classrooms offer social interactions that online study cannot replicate. Educational researchers who study pedagogical methods argue that children need physical contact to foster communication skills. Furthermore, schools that use a hybrid model, which combines face-to-face classes with online homework, see higher academic results. Therefore, the curriculum must adapt to integrate both tools.",
        passageVi: "Trong những năm gần đây, các nền tảng học tập ảo cung cấp lịch học linh hoạt đã trở nên phổ biến hơn. Sinh viên đi làm thêm thích các khóa học trực tuyến vì họ có thể học vào ban đêm. Tuy nhiên, lớp học truyền thống cung cấp các tương tác xã hội mà việc học trực tuyến không thể sao chép. Các nhà nghiên cứu giáo dục nghiên cứu về phương pháp sư phạm lập luận rằng trẻ em cần tiếp xúc thể chất để vun đắp các kỹ năng giao tiếp. Hơn nữa, các trường học sử dụng mô hình kết hợp (kết hợp các lớp học trực tiếp với bài tập trực tuyến) thấy kết quả học tập cao hơn. Do đó, chương trình giảng dạy phải thích ứng để tích hợp cả hai công cụ.",
        questions: [
          {
            type: "tfng",
            question: "Online courses are preferred by students with jobs due to flexibility.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Bài viết ghi: 'Students who have part-time jobs prefer online courses because they can study at night (flexibility).'"
          },
          {
            type: "tfng",
            question: "Traditional classrooms are cheaper to run than online courses.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "NOT GIVEN",
            explanation: "Bài viết thảo luận về phương pháp học và sư phạm, không hề so sánh chi phí vận hành (cheaper/expensive) giữa hai mô hình."
          },
          {
            type: "mcq",
            question: "What is the main finding regarding schools that use hybrid models?",
            options: [
              "They report lower graduation rates.",
              "They achieve better academic results.",
              "They ban textbooks completely.",
              "They hire fewer teachers."
            ],
            answer: "They achieve better academic results.",
            explanation: "Văn bản ghi: 'schools that use a hybrid model... see higher academic results.'"
          }
        ]
      },
      listening: {
        title: "University Orientation Seminar",
        vietnameseTitle: "Hội thảo định hướng trường đại học",
        transcript: "Presenter: Good morning. Welcome to the orientation seminar for students who won scholarships this year. The academic curriculum which you will follow contains core and elective modules. We employ pedagogical methods that prioritize group projects. Additionally, our library offers literacy support programs that help students write research papers. If you have any issues, please contact your tutor, who will guide you through university life.",
        audioText: "Good morning. Welcome to the orientation seminar for students who won scholarships this year. The academic curriculum which you will follow contains core and elective modules. We employ pedagogical methods that prioritize group projects. Additionally, our library offers literacy support programs that help students write research papers. If you have any issues, please contact your tutor, who will guide you through university life.",
        questions: [
          {
            question: "Who is the orientation seminar designed for?",
            options: ["All university workers", "Students who won scholarships", "Local parents", "High school principals"],
            answer: "Students who won scholarships",
            explanation: "Presenter nói: 'Welcome to the orientation seminar for students who won scholarships this year.'"
          },
          {
            question: "What type of pedagogical methods are prioritized?",
            options: ["Traditional lectures", "Group projects", "Individual examinations", "Self-study only"],
            answer: "Group projects",
            explanation: "Seminar ghi rõ: 'We employ pedagogical methods that prioritize group projects.'"
          },
          {
            question: "Who should students contact if they have problems?",
            options: ["The librarian", "Their university tutor", "The security guard", "Their classmates"],
            answer: "Their university tutor",
            explanation: "Presenter khuyên: 'please contact your tutor, who will guide you...'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "What is your favorite subject at school?",
          vietnameseHint: "Gợi ý: Trả lời về môn học yêu thích. Sử dụng mệnh đề quan hệ để giải thích lý do (ví dụ: môn học giúp tôi...).",
          sampleAnswer: "My favorite subject was English, which is a global language. I had a teacher who made lessons very engaging. She used interesting pedagogical tools that helped us remember new vocabulary easily.",
          keywords: ["subject", "English", "teacher", "pedagogical", "vocabulary"]
        },
        part2: {
          cueCard: "Describe a teacher who influenced your academic journey.\nYou should say:\n- Who this teacher was\n- What subject they taught\n- How they conducted lessons\nAnd explain how this teacher helped you improve your studies.",
          vietnameseHint: "Gợi ý: Tả thầy/cô giáo dạy toán hoặc tiếng Anh. Nêu phương pháp sư phạm (pedagogical), giáo trình (curriculum) và tác động học tập (academic).",
          sampleAnswer: "Today, I will describe Mr. Nguyen, who was my English teacher in high school. He taught us the official curriculum but always added real-world examples. His pedagogical style, which was highly interactive, made us look forward to every class. He created word games that helped improve our vocabulary and literacy rates. He was also the person who encouraged me to apply for an academic scholarship. Thanks to his support, I scored very high in my final exams. He influenced me greatly by showing that learning should be fun and meaningful.",
          keywords: ["teacher", "curriculum", "pedagogical", "literacy", "scholarship"]
        },
        part3: {
          question: "Do you think schools should focus more on vocational training or academic study?",
          vietnameseHint: "Gợi ý: Thảo luận việc tích hợp định hướng công việc với tri thức hàn lâm (academic). Sử dụng các câu chứa mệnh đề quan hệ.",
          sampleAnswer: "I believe schools should strike a balance between vocational and academic study. A curriculum which only focuses on theories will produce graduates who struggle to find jobs. However, if we neglect academic research, which drives technological innovation, society's growth will stall. Therefore, a hybrid education system that teaches both hard science and career skills is the best solution.",
          keywords: ["balance", "curriculum", "academic", "vocational", "research"]
        }
      },
      writing: {
        taskType: "Task 2",
        prompt: "In many countries, governments pay for university education. In others, students have to pay tuition fees. Discuss both views and give your opinion.",
        vietnameseHint: "Gợi ý: Bài viết 150-250 từ. Phân tích lợi ích miễn học phí (bình đẳng giáo dục, nâng cao dân trí - literacy) và việc tự đóng học phí (giảm gánh nặng chính phủ, đầu tư thiết bị tốt hơn).",
        sampleAnswer: "The question of who should fund university education is a subject of major debate. Some believe that tertiary study, which benefits society as a whole, should be funded by governments. Others argue that students who get degrees should pay for their own tuition fees. In my opinion, governments should provide partial scholarships while students cover remaining costs.\n\nOn the one hand, free university education improves social equality. If tuition fees are covered by taxes, poor students who achieve high academic results can access higher learning. This will increase national literacy rates and create a skilled workforce. For example, countries like Germany, which offer free higher education, see high levels of innovation and industrial efficiency.\n\nOn the other hand, funding universities places a heavy burden on government budgets. If tax revenues are depleted, governments may struggle to fund essential public sectors like healthcare. Furthermore, when students pay for their education, they are often more motivated to study hard. Universities that collect tuition fees can also invest more in advanced research laboratories and hire international experts with modern pedagogical skills.\n\nIn conclusion, while free education fosters equality, paid tuition improves university quality. Therefore, a system which offers government scholarships based on academic merit is the most balanced approach.",
        minWords: 150,
        suggestedVocab: ["tertiary", "academic", "literacy", "pedagogical", "scholarships", "revenues"]
      }
    },
    {
      id: 9,
      title: "Arts & Culture",
      vietnameseTitle: "Nghệ thuật & Văn hóa",
      description: "Discuss historical heritage, museums, and local traditions using double comparatives.",
      vocabulary: [
        {
          word: "Heritage",
          ipa: "/ˈherɪtɪdʒ/",
          pos: "noun",
          meaning: "Di sản (văn hóa, truyền thống)",
          definition: "Property that is or may be inherited; valued objects and qualities such as historic buildings and cultural traditions.",
          example: "We must protect our cultural heritage for future generations.",
          exampleVi: "Chúng ta phải bảo vệ di sản văn hóa của chúng ta cho các thế hệ tương lai.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Exhibit",
          ipa: "/ɪɡˈzɪbɪt/",
          pos: "noun/verb",
          meaning: "Vật trưng bày, triển lãm",
          definition: "An object or collection of objects on public display in a art gallery or museum.",
          example: "The museum opened a new exhibit displaying ancient pottery.",
          exampleVi: "Bảo tàng đã mở một cuộc triển lãm mới trưng bày gốm cổ.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Masterpiece",
          ipa: "/ˈmɑːstəpiːs/",
          pos: "noun",
          meaning: "Kiệt tác, tác phẩm nghệ thuật xuất sắc",
          definition: "A work of outstanding artistry, skill, or workmanship.",
          example: "The Mona Lisa is Leonardo da Vinci's masterpiece.",
          exampleVi: "Mona Lisa là kiệt tác của Leonardo da Vinci.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Aesthetic",
          ipa: "/iːsˈθetɪk/",
          pos: "adj/noun",
          meaning: "Thuộc về thẩm mỹ, tính mỹ thuật",
          definition: "Concerned with beauty or the appreciation of beauty.",
          example: "The design of the building has high aesthetic value.",
          exampleVi: "Thiết kế của tòa nhà có giá trị thẩm mỹ cao.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Preservation",
          ipa: "/ˌprezəˈveɪʃən/",
          pos: "noun",
          meaning: "Sự giữ gìn, bảo quản (tránh hư hại)",
          definition: "The action of preserving something, especially historic buildings or art.",
          example: "The government funded the preservation of the ancient temple.",
          exampleVi: "Chính phủ đã tài trợ cho việc bảo tồn ngôi đền cổ.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "Double Comparatives (So sánh kép)",
        explanation: "Cấu trúc 'The + so sánh hơn + S + V, The + so sánh hơn + S + V' (Càng... thì càng...). Dùng để thể hiện mối tương quan đồng tiến giữa hai sự việc.",
        rules: [
          { eng: "Structure: The + comparative + Subject + Verb, the + comparative + Subject + Verb.", vi: "Cấu trúc: The + Tính từ so sánh hơn + S + V, the + Tính từ so sánh hơn + S + V." },
          { eng: "Example: The older the building is, the more interesting it becomes.", vi: "Ví dụ: Tòa nhà càng lâu đời, nó càng trở nên thú vị." }
        ],
        exercises: [
          {
            question: "The ________ (more beautiful) the art exhibit is, the more tourists it attracts.",
            options: ["beautifuler", "more beautiful", "most beautiful", "as beautiful"],
            answer: "more beautiful",
            explanation: "Cấu trúc so sánh kép 'The + comparative'. 'Beautiful' là tính từ dài nên dạng so sánh hơn là 'more beautiful'."
          },
          {
            question: "The more we learn about our heritage, the ________ (deep) our appreciation becomes.",
            options: ["deeper", "deepest", "more deep", "as deep"],
            answer: "deeper",
            explanation: "Vế thứ hai của câu so sánh kép cần tính từ ngắn chia so sánh hơn: 'deeper'."
          },
          {
            question: "The higher the aesthetic value of the temple is, the ________ (expensive) its preservation costs.",
            options: ["expensiver", "more expensive", "most expensive", "as expensive"],
            answer: "more expensive",
            explanation: "Tính từ dài 'expensive' dạng so sánh hơn là 'more expensive', khớp với cấu trúc 'the + comparative'."
          }
        ]
      },
      reading: {
        title: "The Value of Museums in Modern Society",
        vietnameseTitle: "Giá trị của Bảo tàng trong Xã hội hiện đại",
        passage: "Museums play an essential role in the preservation of human history and culture. By collecting and displaying historical exhibits, they educate the public about ancestral traditions. Proponents argue that the more people visit museums, the more aware they become of their cultural heritage. Modern galleries also focus on the aesthetic presentation of masterpieces to attract younger audiences. However, maintaining these heritage sites requires large investments. Critics argue that public funds should be spent on healthcare instead. Nevertheless, protecting our art remains vital; the more we neglect our culture, the weaker our national identity becomes.",
        passageVi: "Bảo tàng đóng vai trò thiết yếu trong việc bảo tồn lịch sử và văn hóa nhân loại. Bằng cách thu thập và trưng bày các hiện vật lịch sử, họ giáo dục công chúng về truyền thống của tổ tiên. Những người ủng hộ lập luận rằng càng nhiều người đến thăm bảo tàng, họ càng nhận thức rõ hơn về di sản văn hóa của mình. Các phòng trưng bày hiện đại cũng tập trung vào việc trình bày thẩm mỹ các kiệt tác để thu hút khán giả trẻ hơn. Tuy nhiên, việc duy trì các di sản này đòi hỏi các khoản đầu tư lớn. Các nhà phê bình lập luận rằng các quỹ công nên được chi cho chăm sóc sức khỏe. Tuy nhiên, bảo vệ nghệ thuật của chúng ta vẫn cực kỳ quan trọng; chúng ta càng bỏ bê văn hóa của mình, bản sắc dân tộc của chúng ta càng yếu đi.",
        questions: [
          {
            type: "tfng",
            thought: "",
            question: "According to proponents, visiting museums helps raise cultural awareness.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Đoạn văn ghi: 'Proponents argue that the more people visit museums, the more aware they become of their cultural heritage.'"
          },
          {
            type: "tfng",
            question: "Younger audiences dislike visiting art galleries.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Bài viết ghi: 'galleries also focus on the aesthetic presentation... to attract younger audiences' (Phòng trưng bày tập trung thẩm mỹ để THU HÚT khán giả trẻ). Việc bảo họ ghét đi triển lãm là FALSE."
          },
          {
            type: "mcq",
            question: "What according to the author happens if we neglect our culture?",
            options: [
              "We will save money for hospitals.",
              "Our national identity will become weaker.",
              "More masterpiece artworks will be created.",
              "Museum entrance fees will double."
            ],
            answer: "Our national identity will become weaker.",
            explanation: "Dựa vào câu cuối: 'the more we neglect our culture, the weaker our national identity becomes.'"
          }
        ]
      },
      listening: {
        title: "Art Gallery Audio Tour",
        vietnameseTitle: "Tour nghe hướng dẫn tại phòng trưng bày nghệ thuật",
        transcript: "Guide: Welcome to Hall 3. In front of you is a classic masterpiece painted in the 17th century. The longer you look at the portrait, the more details you will see. Notice the color tones, which reflect high aesthetic value. The preservation of this artwork has been difficult because paper is highly sensitive to humidity. In our next room, we will visit an exhibit dedicated to the country's national heritage.",
        audioText: "Welcome to Hall 3. In front of you is a classic masterpiece painted in the 17th century. The longer you look at the portrait, the more details you will see. Notice the color tones, which reflect high aesthetic value. The preservation of this artwork has been difficult because paper is highly sensitive to humidity. In our next room, we will visit an exhibit dedicated to the country's national heritage.",
        questions: [
          {
            question: "When was the masterpiece painted?",
            options: ["15th century", "17th century", "19th century", "20th century"],
            answer: "17th century",
            explanation: "Hướng dẫn viên nói: 'masterpiece painted in the 17th century.'"
          },
          {
            question: "Why has preservation of this painting been difficult?",
            options: ["It was stolen twice", "It is very heavy", "Paper is sensitive to humidity", "The paint contains lead"],
            answer: "Paper is sensitive to humidity",
            explanation: "Audio ghi nhận: 'preservation... has been difficult because paper is highly sensitive to humidity.'"
          },
          {
            question: "What is displayed in the next room?",
            options: ["Modern sculptures", "National heritage exhibit", "Photography collection", "Ancient tools"],
            answer: "National heritage exhibit",
            explanation: "Guide nói: 'we will visit an exhibit dedicated to the country's national heritage.'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "Do you like art or visiting historical museums?",
          vietnameseHint: "Gợi ý: Trả lời về việc thích nghệ thuật. Áp dụng so sánh kép (ví dụ: càng nhìn tranh càng thích).",
          sampleAnswer: "Yes, I really enjoy visiting museums. In my opinion, the more exhibits I see, the more interested I become. Looking at masterpieces helps improve my aesthetic understanding of history.",
          keywords: ["museums", "more", "interested", "masterpieces", "aesthetic"]
        },
        part2: {
          cueCard: "Describe a traditional cultural object/handicraft from your country.\nYou should say:\n- What the object is\n- What it is made of\n- How it is used\nAnd explain why this object is important for your national heritage.",
          vietnameseHint: "Gợi ý: Tả chiếc áo dài, nón lá hoặc gốm Bát Tràng. Đề cập đến di sản (heritage), thẩm mỹ (aesthetic), bảo tồn (preservation).",
          sampleAnswer: "Today, I will talk about the traditional 'Non La' or conical hat, which is a key symbol of Vietnamese heritage. It is made of palm leaves and bamboo frames, keeping it lightweight. It is used to protect women from rain and sunlight, and sometimes as a fashion accessory. This object is extremely important for our national heritage because it reflects our agricultural history. The more we promote the conical hat, the better we protect our cultural identity. I believe its preservation is vital. Even though modern fashions are popular, the Non La has a unique aesthetic appeal that can never be made obsolete.",
          keywords: ["heritage", "traditional", "aesthetic", "preservation", "identity"]
        },
        part3: {
          question: "Should governments spend money to support local artists?",
          vietnameseHint: "Gợi ý: Bàn về tính kinh tế và giá trị tinh thần nghệ thuật. Áp dụng câu so sánh kép (Ví dụ: chính phủ càng hỗ trợ, nghệ thuật càng phát triển).",
          sampleAnswer: "Yes, I strongly believe governments should fund art preservation. The more support artists receive, the richer a country's culture becomes. Artistic creations define a nation's aesthetic status and tourism appeal. If we only invest in infrastructure, we will deplete our cultural resources, which makes local communities feel isolated. Protecting masterpieces is a crucial duty of the state.",
          keywords: ["preservation", "richer", "artists", "aesthetic", "masterpieces"]
        }
      },
      writing: {
        taskType: "Task 2",
        prompt: "Some people believe that local cultures are being destroyed by globalization and should be protected. Others think that globalization is a positive trend that brings people together. Discuss both views and give your opinion.",
        vietnameseHint: "Gợi ý: Bài viết 150-250 từ. Một mặt: Nhập khẩu văn hóa ngoại lai làm phai mờ bản sắc (heritage). Mặt khác: Giao lưu kinh tế giúp các nước gần nhau hơn, phát triển du lịch.",
        sampleAnswer: "Globalization has connected societies worldwide, but its impact on local traditions remains a topic of intense debate. While some argue that local cultures are being eroded by global influences and must be protected, others believe that globalization fosters mutual understanding. I agree that cultural preservation is essential to prevent global homogenization.\n\nOn the one hand, globalization poses a serious threat to national heritage. The faster western media and food chains expand, the more local customs are made obsolete. For instance, young people in Asia are consuming more fast food and adopting western fashions, neglecting their traditional cuisines and clothing. The more local communities copy global trends, the weaker their historical identity becomes. Therefore, active preservation measures are required to protect local handicrafts and architectural heritage.\n\nOn the other hand, proponents argue that globalization brings positive development. The more countries interact, the easier it is to share cultural exhibits and scientific discoveries. International tourism has actually funded the preservation of many ancient temples, as countries try to showcase their aesthetic history to global visitors. Furthermore, global networks allow local artists to reach a wider audience, sharing their masterpieces worldwide.\n\nIn conclusion, while globalization offers economic and travel benefits, it must not deplete cultural diversity. Protecting our traditional heritage is crucial to maintain our unique identity in a globalized world.",
        minWords: 150,
        suggestedVocab: ["heritage", "globalization", "obsolete", "preservation", "aesthetic", "masterpieces", "deplete"]
      }
    },
    {
      id: 10,
      title: "Town & Infrastructure",
      vietnameseTitle: "Đô thị & Cơ sở hạ tầng",
      description: "Discuss urban development, traffic congestion, and smart cities using reported speech.",
      vocabulary: [
        {
          word: "Congestion",
          ipa: "/kənˈdʒestʃən/",
          pos: "noun",
          meaning: "Sự tắc nghẽn giao thông",
          definition: "The state of being congested or overcrowded.",
          example: "Traffic congestion is a daily problem in Hanoi and Ho Chi Minh City.",
          exampleVi: "Tắc nghẽn giao thông là một vấn đề hàng ngày ở Hà Nội và Thành phố Hồ Chí Minh.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Residential",
          ipa: "/ˌrezɪˈdenʃəl/",
          pos: "adj",
          meaning: "Thuộc về khu dân cư (để ở)",
          definition: "Designed for people to live in.",
          example: "The government built a new residential area in the suburbs.",
          exampleVi: "Chính phủ đã xây dựng một khu dân cư mới ở ngoại ô.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Suburb",
          ipa: "/ˈsʌbɜːb/",
          pos: "noun",
          meaning: "Ngoại ô, vùng lân cận thành phố",
          definition: "An outlying district of a city, especially a residential one.",
          example: "Many families prefer living in the suburbs because the air is fresher.",
          exampleVi: "Nhiều gia đình thích sống ở ngoại ô vì không khí trong lành hơn.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Urbanization",
          ipa: "/ˌɜːbənaɪˈzeɪʃən/",
          pos: "noun",
          meaning: "Quá trình đô thị hóa",
          definition: "The process of making an area more urban.",
          example: "Rapid urbanization has led to housing shortages in major cities.",
          exampleVi: "Đô thị hóa nhanh chóng đã dẫn đến tình trạng thiếu nhà ở tại các thành phố lớn.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        },
        {
          word: "Demolish",
          ipa: "/dɪˈmɒlɪʃ/",
          pos: "verb",
          meaning: "Phá bỏ, san bằng (tòa nhà cũ)",
          definition: "Pull down or destroy (a building).",
          example: "They decided to demolish the old factory to build a green park.",
          exampleVi: "Họ quyết định phá dỡ nhà máy cũ để xây dựng một công viên xanh.",
          easiness: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: null
        }
      ],
      grammar: {
        title: "Reported Speech (Câu gián tiếp)",
        explanation: "Thuật lại lời nói của người khác bằng cách thay đổi thì (lùi thì), đổi đại từ nhân xưng và trạng ngữ chỉ thời gian/nơi chốn.",
        rules: [
          { eng: "Direct: 'I live in the suburb,' she said. -> Indirect: She said that she lived in the suburb.", vi: "Hiện tại đơn lùi thành Quá khứ đơn." },
          { eng: "Direct: 'We will solve the traffic congestion tomorrow,' the mayor promised. -> Indirect: The mayor promised they would solve the traffic congestion the following day.", vi: "Will lùi thành Would, tomorrow đổi thành the following day." }
        ],
        exercises: [
          {
            question: "The engineer reported that they ________ (plan) to build a new residential zone.",
            options: ["plan", "planned", "will plan", "are planning"],
            answer: "planned",
            explanation: "Lời nói gián tiếp lùi thì từ Hiện tại đơn sang Quá khứ đơn: 'planned'."
          },
          {
            question: "The officer said that traffic congestion ________ (become) worse recently.",
            options: ["becomes", "had become", "will become", "is becoming"],
            answer: "had become",
            explanation: "Thì Hiện tại hoàn thành (has become) trong câu trực tiếp lùi thành Quá khứ hoàn thành (had become) trong câu gián tiếp."
          },
          {
            question: "They announced that they ________ (demolish) the obsolete bridge the following year.",
            options: ["will demolish", "would demolish", "demolished", "are demolishing"],
            answer: "would demolish",
            explanation: "Trực tiếp là 'will' (do có trạng từ 'the following year' gốc là next year) lùi thành 'would demolish'."
          }
        ]
      },
      reading: {
        title: "Smart Cities of the Future",
        vietnameseTitle: "Thành phố thông minh của tương lai",
        passage: "Urbanization is accelerating, with more than 60% of the world's population expected to live in cities by 2050. To manage this growth, engineers announced that they would build smart cities. The city council reported that they had started installing traffic sensors to reduce congestion. In residential areas, smart grids will distribute electricity efficiently. Furthermore, urban planners stated that they would avoid demolishing historic architecture, choosing instead to modernize the interiors. Suburbs will be connected to the city center via clean high-speed trains, reducing dependence on private cars.",
        passageVi: "Đô thị hóa đang tăng tốc, với hơn 60% dân số thế giới dự kiến sẽ sống ở các thành phố vào năm 2050. Để quản lý sự tăng trưởng này, các kỹ sư thông báo rằng họ sẽ xây dựng các thành phố thông minh. Hội đồng thành phố báo cáo rằng họ đã bắt đầu lắp đặt các cảm biến giao thông để giảm thiểu tắc nghẽn. Tại các khu dân cư, mạng lưới điện thông minh sẽ phân phối điện hiệu quả. Hơn nữa, các nhà quy hoạch đô thị tuyên bố rằng họ sẽ tránh phá dỡ kiến trúc lịch sử, thay vào đó chọn hiện đại hóa nội thất. Các vùng ngoại ô sẽ được kết nối với trung tâm thành phố thông qua các đoàn tàu tốc hành sạch, giảm sự phụ thuộc vào ô tô cá nhân.",
        questions: [
          {
            type: "tfng",
            question: "By 2050, a minority of global populations will live in urban areas.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE",
            explanation: "Văn bản ghi: 'more than 60% (đa số - majority) of the world's population expected to live in cities' (chứ không phải thiểu số - minority)."
          },
          {
            type: "tfng",
            question: "Traffic sensors have already been installed in some areas to manage congestion.",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "TRUE",
            explanation: "Văn bản ghi: 'city council reported that they had started installing traffic sensors' (đã bắt đầu lắp đặt)."
          },
          {
            type: "mcq",
            question: "What is the policy regarding old historic architecture in smart cities?",
            options: [
              "It will be completely demolished.",
              "It will be modernized internally without being pulled down.",
              "It will be relocated to the suburbs.",
              "It will be converted into residential apartments."
            ],
            answer: "It will be modernized internally without being pulled down.",
            explanation: "Văn bản ghi: 'avoid demolishing historic architecture, choosing instead to modernize the interiors.'"
          }
        ]
      },
      listening: {
        title: "Public Transport Debate",
        vietnameseTitle: "Cuộc tranh luận về giao thông công cộng",
        transcript: "Presenter: Yesterday, the mayor spoke about urban congestion. He announced that the city would invest 50 million dollars in public transport. He stated that they had demolished the old bus station and were constructing a modern transit center. Planners also reported that a new residential railway would connect the distant suburbs to the commercial zone. Community representative Ms. Jane said that residents welcomed the changes but worried about noise levels.",
        audioText: "Yesterday, the mayor spoke about urban congestion. He announced that the city would invest 50 million dollars in public transport. He stated that they had demolished the old bus station and were constructing a modern transit center. Planners also reported that a new residential railway would connect the distant suburbs to the commercial zone. Community representative Ms. Jane said that residents welcomed the changes but worried about noise levels.",
        questions: [
          {
            question: "How much money did the mayor announce they would invest?",
            options: ["15 million dollars", "50 million dollars", "500 million dollars", "5 million dollars"],
            answer: "50 million dollars",
            explanation: "Mayor nói: 'would invest 50 million dollars in public transport.'"
          },
          {
            question: "What structure did the planners say they had demolished?",
            options: ["An old railway track", "A residential building", "The old bus station", "A suburb library"],
            answer: "The old bus station",
            explanation: "Báo cáo: 'stated that they had demolished the old bus station...'"
          },
          {
            question: "What was Ms. Jane's concern regarding the transit center?",
            options: ["Ticket prices", "Construction time", "Noise levels", "Air quality"],
            answer: "Noise levels",
            explanation: "Jane nói: 'residents welcomed the changes but worried about noise levels.'"
          }
        ]
      },
      speaking: {
        part1: {
          question: "Where do you live: in a city center or a suburb?",
          vietnameseHint: "Gợi ý: Trả lời về địa điểm sống. Có bị kẹt xe không (congestion), cuộc sống vùng ngoại ô thế nào (suburb).",
          sampleAnswer: "I live in a residential suburb of Hanoi. It is much quieter than the city center, and the air is fresh. However, I face severe traffic congestion every morning when I travel to my office in the center.",
          keywords: ["residential", "suburb", "quiet", "congestion", "morning"]
        },
        part2: {
          cueCard: "Describe an infrastructure improvement in your town.\nYou should say:\n- What the improvement is\n- When it was built\n- How it changed your daily route\nAnd explain how this improvement helped solve traffic congestion.",
          vietnameseHint: "Gợi ý: Kể về việc mở đường, xây cầu vượt hoặc tuyến tàu điện trên cao Cát Linh. Dùng từ 'urbanization', 'demolish', 'congestion'.",
          sampleAnswer: "Today, I will describe a new elevated railway line that was recently constructed in my city. Before it was built, our mayor announced that the project would solve severe urban congestion. Planners reported that they had demolished several old warehouses in the suburb to build the main station. It opened last year, and it has completely revolutionized my daily route. Now, I do not have to ride my motorbike in the crowded traffic. The train takes me directly to the center in 15 minutes. It has helped reduce traffic congestion because thousands of commuters now prefer the train over private vehicles, supporting cleaner urbanization.",
          keywords: ["railway", "congestion", "demolished", "suburb", "urbanization"]
        },
        part3: {
          question: "What problems does rapid urbanization cause for city residents?",
          vietnameseHint: "Gợi ý: Thảo luận về các hệ lụy: kẹt xe (congestion), thiếu nhà ở (residential), rác thải. Sử dụng câu gián tiếp thuật lại cảnh báo của các chuyên gia.",
          sampleAnswer: "Rapid urbanization causes several severe issues. Firstly, medical experts reported that high noise and air pollution from vehicles damaged residents' well-being. Secondly, housing prices in residential zones are very high. Planners stated that cities were expanding too fast, forcing them to demolish green spaces to construct concrete buildings. If we do not implement preventative rules, suburbs will become crowded, and traffic congestion will paralyze the economy.",
          keywords: ["urbanization", "pollution", "residential", "demolish", "congestion"]
        }
      },
      writing: {
        taskType: "Task 2",
        prompt: "Many people are migrating from rural areas to major cities. What problems does this cause, and what solutions can you propose?",
        vietnameseHint: "Gợi ý: Bài viết 150-250 từ. Nguyên nhân: Đô thị hóa nhanh (urbanization), kẹt xe (congestion), thiếu nhà ở khu dân cư (residential). Giải pháp: Phát triển kinh tế nông thôn, xây dựng hạ tầng ngoại ô (suburb).",
        sampleAnswer: "In the modern era, rapid urbanization has led to massive migration from rural areas to major cities. While this shift offers employment opportunities, it creates severe infrastructure challenges. This essay will examine these problems and propose practical solutions.\n\nTo begin with, rural migration places immense pressure on urban infrastructure. As millions move to cities, housing demands rise, causing rent prices in residential zones to skyrocket. This forces low-income families to live in crowded slums. Additionally, the increase in private vehicles leads to daily traffic congestion, depleting economic productivity and polluting the air. Environmental scientists reported that air quality index in centers had reached dangerous levels, causing severe lung diseases.\n\nTo resolve this crisis, governments must implement decentralized development plans. Firstly, governments should invest in rural industries. If fair remuneration and promotion prospects are offered in countryside regions, people will decide to stay. Secondly, infrastructure in suburbs must be improved. Building residential apartments and connecting them to city centers via high-speed railways will encourage commuters to live outside centers, reducing urban congestion. Planners stated that this strategy would distribute populations more evenly.\n\nIn conclusion, rural migration leads to housing shortages and congestion. However, these issues can be mitigated by developing rural economies and constructing efficient public transport in suburbs.",
        minWords: 150,
        suggestedVocab: ["urbanization", "migration", "residential", "congestion", "suburbs", "infrastructure", "remuneration"]
      }
    }
  ],
  placementTest: {
    title: "IELTS Initial Diagnostic Test",
    vietnameseTitle: "Bài kiểm tra Đánh giá Năng lực ban đầu",
    description: "Determine your current vocabulary and grammar level to customize the learning roadmap.",
    questions: [
      {
        id: 1,
        question: "Regular physical activity is vital for maintaining a healthy weight and mental ________.",
        options: ["emission", "obesity", "well-being", "preservative"],
        answer: "well-being",
        explanation: "Well-being chỉ trạng thái khỏe mạnh tinh thần và thể chất, phù hợp nhất với ngữ cảnh."
      },
      {
        id: 2,
        question: "If we don't protect forests, many wild animals ________ their habitats.",
        options: ["lose", "will lose", "would lose", "lost"],
        answer: "will lose",
        explanation: "Mệnh đề 'If' chia hiện tại đơn (don't protect), đây là câu điều kiện loại 1 nên vế sau dùng 'will lose'."
      },
      {
        id: 3,
        question: "Currently, local organizations ________ new methods to clean the local river.",
        options: ["test", "are testing", "tested", "has tested"],
        answer: "are testing",
        explanation: "Trạng từ 'Currently' chỉ hành động đang diễn ra ở hiện tại, dùng thì Hiện tại tiếp diễn."
      },
      {
        id: 4,
        question: "In the digital era, face-to-face communication is sometimes replaced by ________ meetings.",
        options: ["sedentary", "foster", "virtual", "nutritious"],
        answer: "virtual",
        explanation: "Virtual meetings là các cuộc họp ảo/họp trực tuyến, phù hợp trong thời đại số."
      },
      {
        id: 5,
        question: "Factories ________ obey environmental regulations to avoid hefty fines.",
        options: ["must", "should to", "ought", "must not"],
        answer: "must",
        explanation: "Bắt buộc nghiêm khắc (luật lệ pháp lý) dùng 'must'. 'Ought' thiếu 'to', 'should to' bị thừa 'to'."
      }
    ]
  },
  mockTest: {
    title: "IELTS Full Practice Exam (Target 5.0 - 6.0)",
    vietnameseTitle: "Đề thi thử IELTS chuẩn hóa (Mục tiêu 5.0 - 6.0)",
    listening: {
      title: "Listening Module: Environmental Lecture",
      audioText: "Good morning class. Today we will focus on conservation efforts in tropical rainforests. These forests represent the highest biodiversity on earth. Over forty percent of all oxygen on earth is produced here. However, logging emissions and agriculture continue to deplete these areas. If we lose the Amazon rainforest, the global climate will shift permanently. Therefore, eco-friendly strategies must be supported by international organizations. Individuals should also minimize their paper and wood consumption. Remember, minor changes in your daily life can help foster global conservation.",
      questions: [
        {
          id: 1,
          question: "What percentage of the earth's oxygen is produced in tropical rainforests?",
          options: ["14%", "40%", "50%", "60%"],
          answer: "40%",
          explanation: "Người nói phát biểu: 'Over forty percent (hơn 40%) of all oxygen on earth is produced here.'"
        },
        {
          id: 2,
          question: "Which factors are blamed for depleting these forest areas?",
          options: ["Forest fires and drought", "Logging emissions and agriculture", "Tourism and heavy rain", "Insects and diseases"],
          answer: "Logging emissions and agriculture",
          explanation: "Transcript ghi rõ: 'logging emissions and agriculture continue to deplete these areas.'"
        },
        {
          id: 3,
          question: "What action is recommended for individuals to support conservation?",
          options: ["Plant ten trees a year", "Stop eating meat", "Minimize paper and wood consumption", "Avoid traveling to tropical regions"],
          answer: "Minimize paper and wood consumption",
          explanation: "Lời khuyên trong bài: 'Individuals should also minimize their paper and wood consumption.'"
        }
      ]
    },
    reading: {
      title: "Reading Module: The Future of Remote Working",
      passage: "Remote working, or working from home, has grown exponentially over the past ten years. Enabled by technological innovation and high-speed internet, many companies no longer require physical offices. Employees argue that remote work fosters a better work-life balance since commute times are eliminated. This helps them cope with parental responsibilities and stress. On the other hand, management experts caution that virtual communication can lead to a sedentary lifestyle and professional isolation. If employees sit all day without physical interaction, their mental well-being could decline. Thus, a hybrid model, combining home and office working, is recommended as the most balanced option.",
      questions: [
        {
          id: 4,
          type: "tfng",
          question: "High-speed internet has helped enable the growth of remote working.",
          options: ["TRUE", "FALSE", "NOT GIVEN"],
          answer: "TRUE",
          explanation: "Đoạn văn ghi: 'Enabled by technological innovation and high-speed internet...'"
        },
        {
          id: 5,
          type: "tfng",
          question: "Remote workers are always happier than office workers.",
          options: ["TRUE", "FALSE", "NOT GIVEN"],
          answer: "NOT GIVEN",
          explanation: "Đoạn văn nói về sự cải thiện cân bằng cuộc sống và lo ngại về cô lập, nhưng không hề khẳng định remote workers 'luôn luôn vui vẻ hơn' (always happier)."
        },
        {
          id: 6,
          type: "mcq",
          question: "What solution is proposed to balance the benefits and drawbacks of remote work?",
          options: [
            "Returning to the office full-time.",
            "A hybrid model of working.",
            "Giving employees more salary.",
            "Reducing work hours to 6 hours."
          ],
          answer: "A hybrid model of working.",
          explanation: "Đoạn cuối đề cập: 'Thus, a hybrid model, combining home and office working, is recommended...'"
        }
      ]
    },
    writing: {
      prompt: "Some people believe that school students should do unpaid community service as a compulsory part of their curriculum. To what extent do you agree or disagree?",
      vietnameseHint: "Gợi ý: Bài viết học thuật dài ít nhất 150-250 từ. Phân tích lợi ích (foster responsibility, learn teamwork, understand society) và tác hại (gây áp lực học tập, học sinh quá tải). Đưa ra quan điểm cá nhân.",
      suggestedVocab: ["compulsory", "community service", "responsibility", "foster", "burden", "well-being", "skills"]
    },
    speaking: {
      part1: "Do you use a computer or tablet for your studies?",
      part2: "Describe a book you have read recently that you found useful.\nYou should say:\n- What the book was\n- When you read it\n- What it was about\nAnd explain why you found this book useful.",
      part3: "Do you think digital books will completely replace paper books in schools in the future? Why?"
    }
  },
  grammarRoadmapData: {
    title: "Lộ Trình Ngữ Pháp & Bài Tập Điền Từ Reading",
    vietnameseTitle: "Huấn luyện chuyên sâu: Dạng Động từ, Mệnh đề & Từ vựng ngữ cảnh",
    modules: [
      {
        id: "verb_forms",
        title: "Dạng Động Từ (Verb Forms)",
        description: "Phân biệt V-bare, to V, V-ing, V-ed và Will V dựa vào dấu hiệu đứng trước & sau chỗ trống.",
        questions: [
          {
            id: 1,
            question: "To improve air quality, city officials decided ________ (implement) stricter vehicle emission limits.",
            options: ["implement", "to implement", "implementing", "implemented"],
            answer: "to implement",
            explanation: "Đứng sau động từ 'decided' (quá khứ của decide) ta dùng động từ nguyên mẫu có 'to' (to V).",
            vocabInSentence: [
              { word: "Improve", meaning: "Cải thiện, nâng cao", pos: "verb" },
              { word: "Official", meaning: "Quan chức, giới chức", pos: "noun" },
              { word: "Decide", meaning: "Quyết định", pos: "verb" },
              { word: "Implement", meaning: "Thực thi, áp dụng", pos: "verb" },
              { word: "Stricter", meaning: "Nghiêm ngặt hơn", pos: "adj" },
              { word: "Vehicle emission", meaning: "Khí thải phương tiện", pos: "noun phrase" }
            ]
          },
          {
            id: 2,
            question: "After ________ (complete) the survey, residents were offered a discount voucher for public transport.",
            options: ["completed", "complete", "completing", "to complete"],
            answer: "completing",
            explanation: "Đứng sau giới từ 'After' bắt buộc dùng dạng Danh động từ (V-ing).",
            vocabInSentence: [
              { word: "Complete", meaning: "Hoàn thành", pos: "verb" },
              { word: "Survey", meaning: "Bài khảo sát", pos: "noun" },
              { word: "Resident", meaning: "Cư dân", pos: "noun" },
              { word: "Offer", meaning: "Cung cấp, tặng", pos: "verb" },
              { word: "Discount voucher", meaning: "Phiếu giảm giá", pos: "noun phrase" }
            ]
          },
          {
            id: 3,
            question: "The historic monument ________ (restore) by international architects last month.",
            options: ["was restored", "restoring", "to restore", "will restore"],
            answer: "was restored",
            explanation: "Câu ở thể Bị động quá khứ đơn (was/were + V-ed) vì 'monument' (di tích) chịu tác động của hành động trùng tu.",
            vocabInSentence: [
              { word: "Historic monument", meaning: "Di tích lịch sử", pos: "noun phrase" },
              { word: "Restore", meaning: "Trùng tu, khôi phục", pos: "verb" },
              { word: "Architect", meaning: "Kiến trúc sư", pos: "noun" }
            ]
          },
          {
            id: 4,
            question: "Local companies must ________ (comply) with safety standards to prevent workplace accidents.",
            options: ["complying", "to comply", "comply", "complied"],
            answer: "comply",
            explanation: "Đứng sau động từ khuyết thiếu 'must' bắt buộc dùng động từ nguyên mẫu không 'to' (V-bare).",
            vocabInSentence: [
              { word: "Must", meaning: "Bắt buộc phải", pos: "modal verb" },
              { word: "Comply with", meaning: "Tuân thủ theo", pos: "verb phrase" },
              { word: "Safety standards", meaning: "Tiêu chuẩn an toàn", pos: "noun phrase" },
              { word: "Prevent", meaning: "Ngăn chặn", pos: "verb" },
              { word: "Accident", meaning: "Tai nạn", pos: "noun" }
            ]
          },
          {
            id: 5,
            question: "If the city council invests in green parks, urban well-being ________ (improve) rapidly.",
            options: ["improved", "will improve", "improving", "to improve"],
            answer: "will improve",
            explanation: "Vế 'If' chia hiện tại đơn (invests), đây là câu điều kiện loại 1 nên vế chính dùng 'will + V'.",
            vocabInSentence: [
              { word: "Council", meaning: "Hội đồng", pos: "noun" },
              { word: "Invest in", meaning: "Đầu tư vào", pos: "verb" },
              { word: "Urban well-being", meaning: "Chất lượng sống đô thị", pos: "noun phrase" },
              { word: "Improve", meaning: "Cải thiện", pos: "verb" }
            ]
          }
        ]
      },
      {
        id: "clauses",
        title: "Mệnh Đề (Clauses)",
        description: "Rèn luyện Mệnh đề quan hệ (who/which/that/whose), Mệnh đề điều kiện và Mệnh đề bị động rút gọn.",
        questions: [
          {
            id: 6,
            question: "The scientist ________ (who) discovered the renewable material received an international prize.",
            options: ["which", "who", "whose", "whom"],
            answer: "who",
            explanation: "Chủ ngữ phía trước là 'The scientist' (người) làm chủ ngữ cho vế sau nên dùng 'who'.",
            vocabInSentence: [
              { word: "Scientist", meaning: "Nhà khoa học", pos: "noun" },
              { word: "Discover", meaning: "Phát hiện, phát minh", pos: "verb" },
              { word: "Renewable material", meaning: "Vật liệu tái tạo", pos: "noun phrase" },
              { word: "International prize", meaning: "Giải thưởng quốc tế", pos: "noun phrase" }
            ]
          },
          {
            id: 7,
            question: "Artefacts ________ (found) during the subway excavation were placed in the national museum.",
            options: ["found", "finding", "were found", "which found"],
            answer: "found",
            explanation: "Mệnh đề quan hệ rút gọn dạng bị động (viết tắt của 'which were found'). Mang nghĩa 'các cổ vật ĐƯỢC TÌM THẤY'.",
            vocabInSentence: [
              { word: "Artefact", meaning: "Cổ vật, hiện vật", pos: "noun" },
              { word: "Excavation", meaning: "Sự khai quật", pos: "noun" },
              { word: "Subway", meaning: "Tàu điện ngầm", pos: "noun" }
            ]
          },
          {
            id: 8,
            question: "If households ________ (reduce) plastic consumption, marine ecosystems would recover.",
            options: ["reduce", "reduced", "will reduce", "are reducing"],
            answer: "reduced",
            explanation: "Vế sau có 'would recover' ➔ Câu điều kiện loại 2 (giả định), vế 'If' chia thì quá khứ đơn (reduced).",
            vocabInSentence: [
              { word: "Household", meaning: "Hộ gia đình", pos: "noun" },
              { word: "Plastic consumption", meaning: "Lượng tiêu thụ nhựa", pos: "noun phrase" },
              { word: "Marine ecosystem", meaning: "Hệ sinh thái biển", pos: "noun phrase" },
              { word: "Recover", meaning: "Phục hồi", pos: "verb" }
            ]
          }
        ]
      },
      {
        id: "context_fill",
        title: "Điền Từ Theo Ngữ Cảnh (Contextual Fill)",
        description: "Luyện tập chọn từ vựng chuẩn xác dựa vào ý nghĩa và từ đi kèm (Collocations) trong câu.",
        questions: [
          {
            id: 9,
            question: "Office workers who sit for eight hours a day often lead a ________ (sedentary) lifestyle.",
            options: ["nutritious", "sedentary", "virtual", "eco-friendly"],
            answer: "sedentary",
            explanation: "Sedentary nghĩa là 'thụ động, ngồi nhiều', phù hợp với ngữ cảnh nhân viên ngồi 8 tiếng.",
            vocabInSentence: [
              { word: "Sedentary", meaning: "Thụ động, ngồi nhiều", pos: "adj" },
              { word: "Lifestyle", meaning: "Lối sống", pos: "noun" },
              { word: "Office worker", meaning: "Nhân viên văn phòng", pos: "noun phrase" }
            ]
          },
          {
            id: 10,
            question: "The museum exhibition has high ________ (aesthetic) value, attracting thousands of art lovers.",
            options: ["aesthetic", "congestion", "suburb", "pension"],
            answer: "aesthetic",
            explanation: "Aesthetic value có nghĩa là 'giá trị thẩm mỹ', phù hợp với ngữ cảnh triển lãm nghệ thuật.",
            vocabInSentence: [
              { word: "Exhibition", meaning: "Cuộc triển lãm", pos: "noun" },
              { word: "Aesthetic value", meaning: "Giá trị thẩm mỹ", pos: "noun phrase" },
              { word: "Art lover", meaning: "Người yêu nghệ thuật", pos: "noun phrase" }
            ]
          }
        ]
      },
      {
        id: 'tenses',
        title: "Các Thì Trong Tiếng Anh (Tenses)",
        description: "Chia động từ đúng thì dựa vào trạng từ chỉ thời gian và ngữ cảnh câu.",
        questions: [
          {
            id: 11,
            question: "I ________ (Present Simple vs Present Continuous) English right now, but I usually ________ (study) math at this time.",
            options: ["am studying / study", "study / am studying", "study / study", "am studying / am studying"],
            answer: "am studying / study",
            explanation: "Hành động đang diễn ra dùng thì Hiện tại tiếp diễn (am studying), thói quen dùng thì Hiện tại đơn (study).",
            vocabInSentence: [
              { word: "Usually", meaning: "Thường xuyên", pos: "adv" }
            ]
          },
          {
            id: 12,
            question: "She ________ (Present Perfect) three books so far this year.",
            options: ["has read", "read", "reads", "is reading"],
            answer: "has read",
            explanation: "Với từ nhận biết 'so far', ta dùng thì Hiện tại hoàn thành để diễn tả hành động từ quá khứ kéo dài đến hiện tại.",
            vocabInSentence: [
              { word: "So far", meaning: "Cho đến nay", pos: "adv" }
            ]
          },
          {
            id: 13,
            question: "They ________ (Past Simple) a new hospital in our town last year.",
            options: ["built", "have built", "build", "were building"],
            answer: "built",
            explanation: "Trạng từ 'last year' là dấu hiệu của thì Quá khứ đơn.",
            vocabInSentence: [
              { word: "Hospital", meaning: "Bệnh viện", pos: "noun" }
            ]
          },
          {
            id: 14,
            question: "While I ________ (Past Continuous), the phone rang.",
            options: ["was reading", "read", "am reading", "have read"],
            answer: "was reading",
            explanation: "Hành động đang diễn ra trong quá khứ bị cắt ngang, hành động đang diễn ra dùng thì Quá khứ tiếp diễn.",
            vocabInSentence: [
              { word: "While", meaning: "Trong khi", pos: "conj" }
            ]
          }
        ]
      },
      {
        id: 'passive_voice',
        title: "Câu Bị Động (Passive Voice)",
        description: "Nhận biết và chuyển đổi giữa câu chủ động và bị động trong các thì khác nhau.",
        questions: [
          {
            id: 15,
            question: "The new bridge ________ by the construction team next month.",
            options: ["will be completed", "will complete", "completes", "is completed"],
            answer: "will be completed",
            explanation: "Chủ ngữ chỉ vật ('The new bridge') nên cần dùng thể bị động tương lai: will be + V3.",
            vocabInSentence: [
              { word: "Bridge", meaning: "Cây cầu", pos: "noun" },
              { word: "Construction team", meaning: "Đội thi công", pos: "noun phrase" }
            ]
          },
          {
            id: 16,
            question: "My car ________ right now at the mechanic.",
            options: ["is being repaired", "is repaired", "repairs", "has been repaired"],
            answer: "is being repaired",
            explanation: "Hành động đang diễn ra ở hiện tại bị động: is/are/am + being + V3.",
            vocabInSentence: [
              { word: "Mechanic", meaning: "Thợ cơ khí", pos: "noun" }
            ]
          },
          {
            id: 17,
            question: "The report ________ before the meeting started.",
            options: ["had been finished", "has been finished", "was finished", "finished"],
            answer: "had been finished",
            explanation: "Hành động hoàn thành trước một hành động khác trong quá khứ, bị động: had been + V3.",
            vocabInSentence: [
              { word: "Report", meaning: "Báo cáo", pos: "noun" }
            ]
          }
        ]
      },
      {
        id: 'comparatives',
        title: "So Sánh Hơn & Nhất (Comparatives & Superlatives)",
        description: "Luyện cấu trúc so sánh hơn (-er/more), so sánh nhất (-est/most) và so sánh bằng (as...as).",
        questions: [
          {
            id: 18,
            question: "This test is ________ than the one we took last week.",
            options: ["more difficult", "most difficult", "difficult", "as difficult"],
            answer: "more difficult",
            explanation: "Có 'than' nên dùng so sánh hơn, tính từ dài 'difficult' dùng 'more + adj'.",
            vocabInSentence: [
              { word: "Difficult", meaning: "Khó", pos: "adj" }
            ]
          },
          {
            id: 19,
            question: "He is the ________ student in the class.",
            options: ["smartest", "smarter", "most smart", "smart"],
            answer: "smartest",
            explanation: "Có 'the' và phạm vi 'in the class' nên dùng so sánh nhất.",
            vocabInSentence: [
              { word: "Smart", meaning: "Thông minh", pos: "adj" }
            ]
          },
          {
            id: 20,
            question: "My house is not as ________ as yours.",
            options: ["big", "bigger", "biggest", "more big"],
            answer: "big",
            explanation: "Cấu trúc so sánh bằng (as...as) dùng tính từ nguyên mẫu.",
            vocabInSentence: [
              { word: "Big", meaning: "To lớn", pos: "adj" }
            ]
          }
        ]
      },
      {
        id: 'articles_preps',
        title: "Mạo Từ & Giới Từ (Articles & Prepositions)",
        description: "Phân biệt a/an/the/zero article và chọn giới từ phù hợp (in/on/at/for/by/with).",
        questions: [
          {
            id: 21,
            question: "I always read a book ________ the morning.",
            options: ["in", "on", "at", "for"],
            answer: "in",
            explanation: "Giới từ đi với các buổi trong ngày (morning/afternoon/evening) là 'in'.",
            vocabInSentence: [
              { word: "Read", meaning: "Đọc", pos: "verb" }
            ]
          },
          {
            id: 22,
            question: "She is ________ honest person.",
            options: ["an", "a", "the", "zero article"],
            answer: "an",
            explanation: "Từ 'honest' bắt đầu bằng âm nguyên âm /ɒ/ nên dùng mạo từ 'an'.",
            vocabInSentence: [
              { word: "Honest", meaning: "Trung thực", pos: "adj" }
            ]
          },
          {
            id: 23,
            question: "He traveled to Paris ________ train.",
            options: ["by", "on", "in", "with"],
            answer: "by",
            explanation: "Di chuyển bằng phương tiện giao thông nói chung dùng giới từ 'by'.",
            vocabInSentence: [
              { word: "Travel", meaning: "Du lịch, di chuyển", pos: "verb" }
            ]
          }
        ]
      }
    ]
  },
  grammarCheatsheet: {
    title: "Bảng Mẹo Tra Cứu Ngữ Pháp & Quy Tắc Điền Từ Reading",
    sections: [
      {
        heading: "1. Quy tắc chia Dạng Động Từ (Verb Forms)",
        rules: [
          { label: "V-bare (Nguyên mẫu)", detail: "Sau động từ khuyết thiếu (can, could, will, would, must, should...) hoặc sau do/does/did." },
          { label: "to V (Có 'to')", detail: "Chỉ mục đích (để làm gì) HOẶC sau: decide, plan, hope, want, agree, offer, prepare, expect, promise." },
          { label: "V-ing (Danh động từ)", detail: "Sau giới từ (in, on, at, for, about, after, before...) HOẶC sau: enjoy, avoid, suggest, consider, practice, delay." },
          { label: "V-ed / V3 (Bị động)", detail: "Sau động từ to be (is/are/was/were/been) HOẶC rút gọn mệnh đề bị động (Danh từ + V3 + by...)." },
          { label: "Will V (Tương lai)", detail: "Có trạng từ tương lai (next year, tomorrow, soon) HOẶC vế chính câu điều kiện loại 1." }
        ]
      },
      {
        heading: "2. Quy tắc Mệnh Đề Quan Hệ (Relative Clauses)",
        rules: [
          { label: "Who", detail: "Thay thế cho Danh từ chỉ người, làm Chủ ngữ (e.g., The teacher WHO taught me...)." },
          { label: "Which / That", detail: "Thay thế cho Danh từ chỉ vật/sự việc (e.g., The book WHICH I read...)." },
          { label: "Rút gọn Bị động", detail: "Bỏ 'who/which is', chỉ giữ lại V-ed/V3 (e.g., Products MADE in Vietnam)." }
        ]
      },
      {
        heading: "3. Quy tắc Điền Từ Theo Ngữ Cảnh",
        rules: [
          { label: "Nhìn Từ Loại", detail: "Sau a/an/the cần Danh từ; Sau to be cần Tính từ; Sau Động từ cần Trạng từ." },
          { label: "Ghép Collocation", detail: "Chú ý các cụm từ cố định (e.g., traffic congestion, balanced diet, aesthetic value)." }
        ]
      }
    ]
  },
  readingPracticeData: [
    {
      id: 1,
      title: "The Benefits of Regular Exercise",
      titleVi: "Lợi ích của tập thể dục đều đặn",
      level: "Band 5.0",
      sentences: [
        {
          text: "Regular physical activity is essential for maintaining good health and preventing chronic diseases.",
          words: [
            { w: "Regular", vi: "Đều đặn, thường xuyên", ipa: "/ˈreɡjʊlər/" },
            { w: "physical", vi: "Thuộc về thể chất", ipa: "/ˈfɪzɪkəl/" },
            { w: "activity", vi: "Hoạt động", ipa: "/ækˈtɪvɪti/" },
            { w: "essential", vi: "Thiết yếu, cần thiết", ipa: "/ɪˈsenʃəl/" },
            { w: "maintaining", vi: "Duy trì", ipa: "/meɪnˈteɪnɪŋ/" },
            { w: "health", vi: "Sức khỏe", ipa: "/helθ/" },
            { w: "preventing", vi: "Ngăn ngừa", ipa: "/prɪˈventɪŋ/" },
            { w: "chronic", vi: "Mãn tính", ipa: "/ˈkrɒnɪk/" },
            { w: "diseases", vi: "Bệnh tật", ipa: "/dɪˈziːzɪz/" }
          ]
        },
        {
          text: "Exercise improves cardiovascular function, strengthens muscles, and boosts mental well-being.",
          words: [
            { w: "Exercise", vi: "Tập thể dục", ipa: "/ˈeksərsaɪz/" },
            { w: "improves", vi: "Cải thiện", ipa: "/ɪmˈpruːvz/" },
            { w: "cardiovascular", vi: "Thuộc tim mạch", ipa: "/ˌkɑːdioʊˈvæskjʊlər/" },
            { w: "function", vi: "Chức năng", ipa: "/ˈfʌŋkʃən/" },
            { w: "strengthens", vi: "Tăng cường", ipa: "/ˈstreŋθənz/" },
            { w: "muscles", vi: "Cơ bắp", ipa: "/ˈmʌsəlz/" },
            { w: "boosts", vi: "Thúc đẩy, nâng cao", ipa: "/buːsts/" },
            { w: "mental", vi: "Tinh thần", ipa: "/ˈmentəl/" },
            { w: "well-being", vi: "Sự khỏe mạnh", ipa: "/ˌwelˈbiːɪŋ/" }
          ]
        },
        {
          text: "Experts recommend at least thirty minutes of moderate exercise five times per week.",
          words: [
            { w: "Experts", vi: "Chuyên gia", ipa: "/ˈekspɜːrts/" },
            { w: "recommend", vi: "Khuyến nghị", ipa: "/ˌrekəˈmend/" },
            { w: "moderate", vi: "Vừa phải", ipa: "/ˈmɒdərət/" },
            { w: "exercise", vi: "Bài tập, thể dục", ipa: "/ˈeksərsaɪz/" }
          ]
        },
        {
          text: "Walking, swimming, and cycling are popular forms of aerobic activity that suit all age groups.",
          words: [
            { w: "Walking", vi: "Đi bộ", ipa: "/ˈwɔːkɪŋ/" },
            { w: "swimming", vi: "Bơi lội", ipa: "/ˈswɪmɪŋ/" },
            { w: "cycling", vi: "Đạp xe", ipa: "/ˈsaɪklɪŋ/" },
            { w: "popular", vi: "Phổ biến", ipa: "/ˈpɒpjʊlər/" },
            { w: "aerobic", vi: "Thuộc hiếu khí", ipa: "/eəˈroʊbɪk/" },
            { w: "suit", vi: "Phù hợp", ipa: "/suːt/" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Technology in Education",
      titleVi: "Công nghệ trong giáo dục",
      level: "Band 5.5",
      sentences: [
        {
          text: "Technology has revolutionized the way students access information and interact with learning materials.",
          words: [
            { w: "Technology", vi: "Công nghệ", ipa: "/tekˈnɒlədʒi/" },
            { w: "revolutionized", vi: "Cách mạng hóa", ipa: "/ˌrevəˈluːʃənaɪzd/" },
            { w: "access", vi: "Truy cập", ipa: "/ˈækses/" },
            { w: "information", vi: "Thông tin", ipa: "/ˌɪnfərˈmeɪʃən/" },
            { w: "interact", vi: "Tương tác", ipa: "/ˌɪntərˈækt/" },
            { w: "materials", vi: "Tài liệu", ipa: "/məˈtɪəriəlz/" }
          ]
        },
        {
          text: "Online platforms enable students to study at their own pace from any location worldwide.",
          words: [
            { w: "Online", vi: "Trực tuyến", ipa: "/ˌɒnˈlaɪn/" },
            { w: "platforms", vi: "Nền tảng", ipa: "/ˈplætfɔːrmz/" },
            { w: "enable", vi: "Cho phép", ipa: "/ɪˈneɪbəl/" },
            { w: "pace", vi: "Tốc độ, nhịp độ", ipa: "/peɪs/" },
            { w: "location", vi: "Địa điểm", ipa: "/loʊˈkeɪʃən/" },
            { w: "worldwide", vi: "Toàn cầu", ipa: "/ˌwɜːrldˈwaɪd/" }
          ]
        },
        {
          text: "However, excessive screen time can negatively affect concentration and social skills among young learners.",
          words: [
            { w: "However", vi: "Tuy nhiên", ipa: "/haʊˈevər/" },
            { w: "excessive", vi: "Quá mức", ipa: "/ɪkˈsesɪv/" },
            { w: "screen", vi: "Màn hình", ipa: "/skriːn/" },
            { w: "negatively", vi: "Tiêu cực", ipa: "/ˈneɡətɪvli/" },
            { w: "affect", vi: "Ảnh hưởng", ipa: "/əˈfekt/" },
            { w: "concentration", vi: "Sự tập trung", ipa: "/ˌkɒnsənˈtreɪʃən/" },
            { w: "social skills", vi: "Kỹ năng xã hội", ipa: "/ˈsoʊʃəl skɪlz/" }
          ]
        }
      ]
    }
  ],
  pronunciationDrills: [
    { id: 1, word: "Environment", ipa: "/ɪnˈvaɪrənmənt/", vi: "Môi trường", level: 1 },
    { id: 2, word: "Technology", ipa: "/tekˈnɒlədʒi/", vi: "Công nghệ", level: 1 },
    { id: 3, word: "Communication", ipa: "/kəˌmjuːnɪˈkeɪʃən/", vi: "Giao tiếp", level: 1 },
    { id: 4, word: "Sustainable", ipa: "/səˈsteɪnəbəl/", vi: "Bền vững", level: 2 },
    { id: 5, word: "Infrastructure", ipa: "/ˈɪnfrəstrʌktʃər/", vi: "Cơ sở hạ tầng", level: 2 },
    { id: 6, word: "Cardiovascular", ipa: "/ˌkɑːdioʊˈvæskjʊlər/", vi: "Tim mạch", level: 2 },
    { id: 7, word: "Urbanization", ipa: "/ˌɜːbənaɪˈzeɪʃən/", vi: "Đô thị hóa", level: 2 },
    { id: 8, word: "Aesthetic", ipa: "/esˈθetɪk/", vi: "Thẩm mỹ", level: 1 },
    { id: 9, word: "Sedentary", ipa: "/ˈsedəntəri/", vi: "Ngồi nhiều, thụ động", level: 2 },
    { id: 10, word: "Entrepreneur", ipa: "/ˌɒntrəprəˈnɜːr/", vi: "Doanh nhân", level: 3 },
    { id: 11, word: "Phenomenon", ipa: "/fɪˈnɒmɪnən/", vi: "Hiện tượng", level: 3 },
    { id: 12, word: "Consequently", ipa: "/ˈkɒnsɪkwəntli/", vi: "Do đó, hệ quả là", level: 2 },
    { id: 13, word: "Preservation", ipa: "/ˌprezərˈveɪʃən/", vi: "Sự bảo tồn", level: 2 },
    { id: 14, word: "Approximately", ipa: "/əˈprɒksɪmətli/", vi: "Xấp xỉ, khoảng", level: 3 },
    { id: 15, word: "Deteriorate", ipa: "/dɪˈtɪəriəreɪt/", vi: "Xấu đi, xuống cấp", level: 3 }
  ]
};

