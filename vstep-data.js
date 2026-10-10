/**
 * VSTEP B2 (Bậc 4) - Kho Dữ Liệu Đề Thi & Từ Vựng
 * Định dạng chuẩn thi VSTEP trên máy tính
 * Cấu trúc: Nghe (3 phần, 35 câu), Đọc (4 bài, 40 câu), Viết (2 tasks), Nói (3 phần)
 */
const vstepData = {

  // ==============================
  // LISTENING - 3 Parts, 35 Questions
  // ==============================
  listening: {
    totalTime: 40, // minutes
    parts: [
      {
        id: 1,
        title: "Part 1: Short Conversations",
        titleVi: "Phần 1: Hội thoại ngắn",
        instructions: "You will hear 8 short conversations. After each conversation, you will be asked a question about what was said. Choose the best answer (A, B, C, or D).",
        instructionsVi: "Bạn sẽ nghe 8 đoạn hội thoại ngắn. Sau mỗi đoạn hội thoại, bạn sẽ được hỏi một câu hỏi về nội dung. Chọn đáp án đúng nhất (A, B, C hoặc D).",
        questions: [
          {
            id: 1,
            transcript: "Woman: Excuse me, could you tell me the way to the National Library? Man: Sure. Go straight ahead for about two blocks, then turn left at the traffic lights. You'll see it on your right, next to the post office.",
            transcriptVi: "Phụ nữ: Xin lỗi, anh có thể chỉ đường đến Thư viện Quốc gia không? Đàn ông: Được chứ. Đi thẳng khoảng hai dãy nhà, rồi rẽ trái ở đèn giao thông. Bạn sẽ thấy nó bên phải, cạnh bưu điện.",
            question: "Where is the National Library?",
            options: [
              "A. Next to the traffic lights",
              "B. Next to the post office",
              "C. Opposite the post office",
              "D. Behind the traffic lights"
            ],
            correctAnswer: 1,
            explanation: "The man says 'You'll see it on your right, next to the post office.' → Đáp án B."
          },
          {
            id: 2,
            transcript: "Man: Have you finished your research paper yet? Woman: Almost. I've completed the literature review and methodology sections. I just need to write the conclusion and proofread everything.",
            transcriptVi: "Đàn ông: Bạn đã hoàn thành bài nghiên cứu chưa? Phụ nữ: Gần xong rồi. Tôi đã hoàn thành phần tổng quan tài liệu và phương pháp nghiên cứu. Tôi chỉ cần viết kết luận và kiểm tra lại.",
            question: "What does the woman still need to do?",
            options: [
              "A. Write the literature review",
              "B. Complete the methodology section",
              "C. Write the conclusion and proofread",
              "D. Start her research paper"
            ],
            correctAnswer: 2,
            explanation: "She says 'I just need to write the conclusion and proofread everything.' → Đáp án C."
          },
          {
            id: 3,
            transcript: "Woman: I'm thinking of enrolling in the evening MBA program. What do you think? Man: It's a great idea, but you should consider the workload. The program requires at least 15 hours of study per week on top of your job.",
            transcriptVi: "Phụ nữ: Tôi đang nghĩ đến việc đăng ký chương trình MBA buổi tối. Anh nghĩ sao? Đàn ông: Ý tưởng hay, nhưng bạn nên cân nhắc khối lượng công việc. Chương trình yêu cầu ít nhất 15 giờ học mỗi tuần ngoài công việc của bạn.",
            question: "What does the man suggest the woman should consider?",
            options: [
              "A. The tuition fees",
              "B. The location of the school",
              "C. The workload of the program",
              "D. The reputation of the program"
            ],
            correctAnswer: 2,
            explanation: "The man says 'you should consider the workload' → Đáp án C."
          },
          {
            id: 4,
            transcript: "Man: The deadline for the scholarship application has been extended to March 15th. Woman: Oh, that's a relief! I was worried I wouldn't have time to gather all the necessary documents.",
            transcriptVi: "Đàn ông: Hạn nộp đơn xin học bổng đã được gia hạn đến ngày 15 tháng 3. Phụ nữ: Ôi, thật nhẹ nhõm! Tôi lo là mình sẽ không có thời gian thu thập đủ giấy tờ cần thiết.",
            question: "How does the woman feel about the extension?",
            options: [
              "A. Disappointed",
              "B. Confused",
              "C. Relieved",
              "D. Indifferent"
            ],
            correctAnswer: 2,
            explanation: "She says 'that's a relief!' expressing a feeling of relief → Đáp án C."
          },
          {
            id: 5,
            transcript: "Woman: Could you recommend a good reference book for the economics course? Man: Professor Nguyen recommended 'Principles of Macroeconomics' by Mankiw. You can borrow it from the university library.",
            transcriptVi: "Phụ nữ: Bạn có thể giới thiệu một cuốn sách tham khảo tốt cho khóa kinh tế không? Đàn ông: Giáo sư Nguyễn đã giới thiệu cuốn 'Nguyên lý Kinh tế Vĩ mô' của Mankiw. Bạn có thể mượn ở thư viện trường.",
            question: "Where can the woman find the recommended book?",
            options: [
              "A. At a bookstore",
              "B. At the university library",
              "C. Online",
              "D. At Professor Nguyen's office"
            ],
            correctAnswer: 1,
            explanation: "The man says 'You can borrow it from the university library.' → Đáp án B."
          },
          {
            id: 6,
            transcript: "Man: I've been experiencing terrible headaches lately. Woman: You should reduce your screen time and make sure you're drinking enough water. If it persists, you might want to see a doctor.",
            transcriptVi: "Đàn ông: Dạo này tôi bị đau đầu kinh khủng. Phụ nữ: Bạn nên giảm thời gian dùng màn hình và đảm bảo uống đủ nước. Nếu vẫn tiếp diễn, bạn nên đi khám bác sĩ.",
            question: "What does the woman advise the man to do first?",
            options: [
              "A. Take medication immediately",
              "B. Reduce screen time and drink water",
              "C. Go to the hospital right away",
              "D. Stop working completely"
            ],
            correctAnswer: 1,
            explanation: "She first suggests reducing screen time and drinking water → Đáp án B."
          },
          {
            id: 7,
            transcript: "Woman: The new environmental policy requires all companies to reduce carbon emissions by 30% within five years. Man: That's quite ambitious. Many small businesses might struggle to meet those targets without government subsidies.",
            transcriptVi: "Phụ nữ: Chính sách môi trường mới yêu cầu tất cả các công ty giảm 30% lượng khí thải carbon trong vòng 5 năm. Đàn ông: Khá tham vọng. Nhiều doanh nghiệp nhỏ có thể gặp khó khăn nếu không có trợ cấp của chính phủ.",
            question: "What concern does the man raise?",
            options: [
              "A. The policy is not ambitious enough",
              "B. Large companies will benefit unfairly",
              "C. Small businesses may struggle without subsidies",
              "D. The timeline is too long"
            ],
            correctAnswer: 2,
            explanation: "He says 'small businesses might struggle without government subsidies' → Đáp án C."
          },
          {
            id: 8,
            transcript: "Man: I heard the university is introducing a new online learning platform next semester. Woman: Yes, it's called EduConnect. It will integrate all course materials, assignments, and discussion forums in one place.",
            transcriptVi: "Đàn ông: Tôi nghe trường sẽ ra mắt nền tảng học trực tuyến mới vào học kỳ tới. Phụ nữ: Đúng vậy, tên là EduConnect. Nó sẽ tích hợp tất cả tài liệu, bài tập và diễn đàn thảo luận vào một nơi.",
            question: "What will EduConnect do?",
            options: [
              "A. Replace all face-to-face classes",
              "B. Only provide course materials",
              "C. Integrate materials, assignments, and forums",
              "D. Only be available for graduate students"
            ],
            correctAnswer: 2,
            explanation: "She says it 'will integrate all course materials, assignments, and discussion forums in one place' → Đáp án C."
          }
        ]
      },
      {
        id: 2,
        title: "Part 2: Long Conversations",
        titleVi: "Phần 2: Hội thoại dài",
        instructions: "You will hear 3 longer conversations. After each conversation, you will be asked several questions. Choose the best answer.",
        instructionsVi: "Bạn sẽ nghe 3 đoạn hội thoại dài. Sau mỗi đoạn, bạn sẽ trả lời một số câu hỏi. Chọn đáp án đúng nhất.",
        questions: [
          // Conversation 1: Academic advising (4 questions)
          {
            id: 9,
            conversationGroup: "Academic Advising Session",
            transcript: "Student: Good morning, Professor Tran. I'd like to discuss my thesis topic for the master's program. I'm considering writing about the impact of digital transformation on small businesses in Vietnam.\n\nProfessor: That's a very relevant topic. However, it's quite broad. You might want to narrow it down to a specific industry or region. Have you thought about focusing on a particular sector?\n\nStudent: I was thinking about the food and beverage industry, specifically how restaurants have adapted to online delivery platforms.\n\nProfessor: Excellent choice. That would give you plenty of primary data to work with. You could conduct surveys with restaurant owners in Ho Chi Minh City. I'd suggest you also look at recent studies on digital adoption rates in Southeast Asia for your literature review.\n\nStudent: Thank you. When should I submit my thesis proposal?\n\nProfessor: The deadline is October 30th. Make sure your proposal includes a clear research question, methodology outline, and preliminary bibliography of at least 20 sources.",
            transcriptVi: "Sinh viên: Chào buổi sáng, Giáo sư Trần. Em muốn thảo luận về đề tài luận văn thạc sĩ. Em đang cân nhắc viết về tác động của chuyển đổi số đối với doanh nghiệp nhỏ ở Việt Nam.\n\nGiáo sư: Đề tài rất phù hợp. Tuy nhiên, nó khá rộng. Em nên thu hẹp vào một ngành hoặc khu vực cụ thể. Em đã nghĩ đến lĩnh vực nào chưa?\n\nSinh viên: Em đang nghĩ đến ngành F&B, cụ thể là cách các nhà hàng thích ứng với nền tảng giao hàng trực tuyến.\n\nGiáo sư: Lựa chọn tuyệt vời. Điều đó sẽ cho em nhiều dữ liệu sơ cấp. Em có thể khảo sát các chủ nhà hàng ở TP.HCM. Thầy cũng gợi ý em nên xem các nghiên cứu gần đây về tỷ lệ áp dụng kỹ thuật số ở Đông Nam Á cho phần tổng quan tài liệu.\n\nSinh viên: Cảm ơn thầy. Khi nào em phải nộp đề cương?\n\nGiáo sư: Hạn chót là ngày 30 tháng 10. Đảm bảo đề cương có câu hỏi nghiên cứu rõ ràng, phác thảo phương pháp và danh mục tham khảo ít nhất 20 nguồn.",
            question: "What did the professor suggest the student do with the thesis topic?",
            options: [
              "A. Change it completely",
              "B. Narrow it down to a specific area",
              "C. Focus on large corporations",
              "D. Write about a different country"
            ],
            correctAnswer: 1,
            explanation: "The professor says 'it's quite broad. You might want to narrow it down to a specific industry or region.' → Đáp án B."
          },
          {
            id: 10,
            conversationGroup: "Academic Advising Session",
            question: "Which industry does the student decide to focus on?",
            options: [
              "A. Technology",
              "B. Education",
              "C. Food and beverage",
              "D. Healthcare"
            ],
            correctAnswer: 2,
            explanation: "The student says 'I was thinking about the food and beverage industry' → Đáp án C."
          },
          {
            id: 11,
            conversationGroup: "Academic Advising Session",
            question: "What research method does the professor suggest?",
            options: [
              "A. Laboratory experiments",
              "B. Surveys with restaurant owners",
              "C. Online questionnaires only",
              "D. Observation of delivery drivers"
            ],
            correctAnswer: 1,
            explanation: "The professor says 'You could conduct surveys with restaurant owners in Ho Chi Minh City.' → Đáp án B."
          },
          {
            id: 12,
            conversationGroup: "Academic Advising Session",
            question: "How many sources are required in the preliminary bibliography?",
            options: [
              "A. At least 10",
              "B. At least 15",
              "C. At least 20",
              "D. At least 25"
            ],
            correctAnswer: 2,
            explanation: "The professor says 'preliminary bibliography of at least 20 sources' → Đáp án C."
          },
          // Conversation 2: Workplace discussion (4 questions)
          {
            id: 13,
            conversationGroup: "Workplace Project Discussion",
            transcript: "Manager: Let's discuss the quarterly performance report. Our customer satisfaction rate has increased by 12% compared to last quarter. However, employee turnover remains a concern.\n\nAssistant: That's good news about customer satisfaction. What do you think is driving the high turnover rate?\n\nManager: Based on exit interviews, the main reasons are limited career advancement opportunities and below-market salaries for mid-level positions. We need to address these issues before we lose more experienced staff.\n\nAssistant: Should I prepare a proposal for a revised compensation structure?\n\nManager: Yes, please. Also include a mentorship program proposal. Research shows that employees who have mentors are 50% more likely to stay with the company. Let's present both proposals at the board meeting next Thursday.\n\nAssistant: I'll have the draft ready by Tuesday for your review.",
            transcriptVi: "Quản lý: Hãy thảo luận về báo cáo hiệu suất quý. Tỷ lệ hài lòng của khách hàng tăng 12% so với quý trước. Tuy nhiên, tỷ lệ nghỉ việc vẫn đáng lo ngại.\n\nTrợ lý: Tin tốt về sự hài lòng của khách hàng. Anh nghĩ nguyên nhân nào gây ra tỷ lệ nghỉ việc cao?\n\nQuản lý: Dựa trên phỏng vấn khi nghỉ việc, lý do chính là cơ hội thăng tiến hạn chế và mức lương thấp hơn thị trường cho vị trí cấp trung. Chúng ta cần giải quyết trước khi mất thêm nhân viên có kinh nghiệm.\n\nTrợ lý: Tôi có nên chuẩn bị đề xuất cơ cấu lương mới không?\n\nQuản lý: Vâng. Cũng bao gồm đề xuất chương trình mentoring. Nghiên cứu cho thấy nhân viên có mentor sẽ có khả năng ở lại công ty cao hơn 50%. Hãy trình bày cả hai đề xuất tại cuộc họp ban giám đốc thứ Năm tuần tới.\n\nTrợ lý: Tôi sẽ có bản nháp vào thứ Ba để anh xem.",
            question: "By how much did customer satisfaction increase?",
            options: [
              "A. 10%",
              "B. 12%",
              "C. 15%",
              "D. 20%"
            ],
            correctAnswer: 1,
            explanation: "The manager says 'customer satisfaction rate has increased by 12%' → Đáp án B."
          },
          {
            id: 14,
            conversationGroup: "Workplace Project Discussion",
            question: "What are the main reasons for high employee turnover?",
            options: [
              "A. Poor working conditions and long hours",
              "B. Limited advancement and below-market salaries",
              "C. Difficult management and office politics",
              "D. Lack of training programs"
            ],
            correctAnswer: 1,
            explanation: "Main reasons: 'limited career advancement opportunities and below-market salaries for mid-level positions' → Đáp án B."
          },
          {
            id: 15,
            conversationGroup: "Workplace Project Discussion",
            question: "What is the effect of having a mentor according to research?",
            options: [
              "A. Employees get promoted 50% faster",
              "B. Employees are 50% more productive",
              "C. Employees are 50% more likely to stay",
              "D. Employees earn 50% more"
            ],
            correctAnswer: 2,
            explanation: "'employees who have mentors are 50% more likely to stay with the company' → Đáp án C."
          },
          {
            id: 16,
            conversationGroup: "Workplace Project Discussion",
            question: "When will the draft proposals be ready?",
            options: [
              "A. Monday",
              "B. Tuesday",
              "C. Wednesday",
              "D. Thursday"
            ],
            correctAnswer: 1,
            explanation: "The assistant says 'I'll have the draft ready by Tuesday' → Đáp án B."
          },
          // Conversation 3: University seminar (4 questions)
          {
            id: 17,
            conversationGroup: "University Seminar Registration",
            transcript: "Receptionist: Good afternoon. Welcome to the Graduate Studies Office. How can I help you?\n\nStudent: Hi, I'd like to register for the international seminar on sustainable development next month. Is there still space available?\n\nReceptionist: Let me check. Yes, we still have 15 seats remaining out of 120. The seminar runs for three days, from November 5th to 7th. The registration fee is 500,000 VND for graduate students, which includes seminar materials and lunch.\n\nStudent: That sounds reasonable. Are there any guest speakers from abroad?\n\nReceptionist: Yes, we have two keynote speakers. Professor Kim from Seoul National University will speak about green technology, and Dr. Martinez from the University of Barcelona will present on circular economy models. You'll also receive a certificate of participation.\n\nStudent: Perfect. Can I pay by bank transfer?\n\nReceptionist: Yes, I'll give you the bank details. Please complete the payment within 5 business days to secure your spot.",
            transcriptVi: "Lễ tân: Chào buổi chiều. Chào mừng đến Phòng Sau đại học. Tôi có thể giúp gì?\n\nSinh viên: Chào, tôi muốn đăng ký hội thảo quốc tế về phát triển bền vững tháng tới. Còn chỗ không?\n\nLễ tân: Để tôi kiểm tra. Vẫn còn 15 chỗ trong tổng số 120. Hội thảo kéo dài 3 ngày, từ 5 đến 7 tháng 11. Phí đăng ký 500.000 VND cho học viên cao học, bao gồm tài liệu và ăn trưa.\n\nSinh viên: Nghe hợp lý. Có diễn giả khách mời từ nước ngoài không?\n\nLễ tân: Có, chúng tôi có 2 diễn giả chính. Giáo sư Kim từ ĐH Quốc gia Seoul sẽ nói về công nghệ xanh, và Tiến sĩ Martinez từ ĐH Barcelona sẽ trình bày về mô hình kinh tế tuần hoàn. Bạn cũng sẽ nhận giấy chứng nhận tham gia.\n\nSinh viên: Tuyệt vời. Tôi có thể chuyển khoản không?\n\nLễ tân: Được, tôi sẽ gửi thông tin tài khoản. Vui lòng thanh toán trong 5 ngày làm việc để giữ chỗ.",
            question: "How many seats are still available for the seminar?",
            options: [
              "A. 5",
              "B. 10",
              "C. 15",
              "D. 20"
            ],
            correctAnswer: 2,
            explanation: "'we still have 15 seats remaining' → Đáp án C."
          },
          {
            id: 18,
            conversationGroup: "University Seminar Registration",
            question: "What topic will Professor Kim present?",
            options: [
              "A. Circular economy models",
              "B. Green technology",
              "C. Sustainable agriculture",
              "D. Renewable energy sources"
            ],
            correctAnswer: 1,
            explanation: "'Professor Kim from Seoul National University will speak about green technology' → Đáp án B."
          },
          {
            id: 19,
            conversationGroup: "University Seminar Registration",
            question: "What does the registration fee include?",
            options: [
              "A. Accommodation and transport",
              "B. Seminar materials and lunch",
              "C. Only seminar materials",
              "D. Dinner and entertainment"
            ],
            correctAnswer: 1,
            explanation: "'includes seminar materials and lunch' → Đáp án B."
          },
          {
            id: 20,
            conversationGroup: "University Seminar Registration",
            question: "Within how many days must the payment be completed?",
            options: [
              "A. 3 business days",
              "B. 5 business days",
              "C. 7 business days",
              "D. 10 business days"
            ],
            correctAnswer: 1,
            explanation: "'complete the payment within 5 business days' → Đáp án B."
          }
        ]
      },
      {
        id: 3,
        title: "Part 3: Talks and Lectures",
        titleVi: "Phần 3: Bài nói/Bài giảng",
        instructions: "You will hear 3 short talks or lectures. After each talk, you will be asked several questions. Choose the best answer.",
        instructionsVi: "Bạn sẽ nghe 3 bài nói ngắn hoặc bài giảng. Sau mỗi bài, trả lời một số câu hỏi. Chọn đáp án đúng nhất.",
        questions: [
          // Lecture 1: Environmental Science (5 questions)
          {
            id: 21,
            conversationGroup: "Lecture on Climate Change",
            transcript: "Good morning, everyone. Today's lecture focuses on the urgent issue of climate change and its impact on Vietnamese agriculture. As you know, Vietnam is one of the most vulnerable countries to climate change, with its long coastline and dependence on agriculture.\n\nRecent data from the Ministry of Natural Resources shows that average temperatures in the Mekong Delta have increased by 0.5 degrees Celsius over the past decade. This may seem small, but it has significant consequences for rice production. Higher temperatures accelerate evaporation, leading to water shortages during critical growing periods.\n\nFurthermore, sea-level rise threatens to submerge approximately 40% of the Mekong Delta by 2100 if current trends continue. This would displace millions of farmers and reduce Vietnam's rice output by an estimated 25%. The government has initiated several adaptation strategies, including developing salt-tolerant rice varieties and promoting diversified farming practices.\n\nFor your assignment, I want you to research one specific adaptation strategy and evaluate its effectiveness. The paper should be 2,000 words, due in three weeks.",
            transcriptVi: "Chào buổi sáng. Bài giảng hôm nay tập trung vào vấn đề cấp bách của biến đổi khí hậu và tác động đến nông nghiệp Việt Nam. Như các bạn biết, Việt Nam là một trong những quốc gia dễ bị tổn thương nhất, với đường bờ biển dài và phụ thuộc vào nông nghiệp.\n\nDữ liệu gần đây từ Bộ Tài nguyên cho thấy nhiệt độ trung bình ở ĐBSCL đã tăng 0,5 độ C trong thập kỷ qua. Con số này tưởng nhỏ nhưng có hậu quả lớn cho sản xuất lúa gạo. Nhiệt độ cao hơn đẩy nhanh bốc hơi, dẫn đến thiếu nước trong giai đoạn sinh trưởng quan trọng.\n\nHơn nữa, mực nước biển dâng có thể nhấn chìm khoảng 40% ĐBSCL vào năm 2100 nếu xu hướng hiện tại tiếp diễn. Điều này sẽ khiến hàng triệu nông dân phải di dời và giảm sản lượng gạo khoảng 25%. Chính phủ đã khởi xướng nhiều chiến lược thích ứng, bao gồm phát triển giống lúa chịu mặn và khuyến khích đa dạng hóa canh tác.\n\nVới bài tập, tôi muốn các bạn nghiên cứu một chiến lược thích ứng cụ thể và đánh giá hiệu quả. Bài viết 2.000 từ, nộp trong 3 tuần.",
            question: "By how much have temperatures in the Mekong Delta increased?",
            options: [
              "A. 0.3 degrees Celsius",
              "B. 0.5 degrees Celsius",
              "C. 1.0 degree Celsius",
              "D. 1.5 degrees Celsius"
            ],
            correctAnswer: 1,
            explanation: "'average temperatures have increased by 0.5 degrees Celsius over the past decade' → Đáp án B."
          },
          {
            id: 22,
            conversationGroup: "Lecture on Climate Change",
            question: "What percentage of the Mekong Delta could be submerged by 2100?",
            options: [
              "A. 20%",
              "B. 30%",
              "C. 40%",
              "D. 50%"
            ],
            correctAnswer: 2,
            explanation: "'sea-level rise threatens to submerge approximately 40% of the Mekong Delta by 2100' → Đáp án C."
          },
          {
            id: 23,
            conversationGroup: "Lecture on Climate Change",
            question: "What is one adaptation strategy mentioned?",
            options: [
              "A. Building more dams",
              "B. Importing rice from abroad",
              "C. Developing salt-tolerant rice varieties",
              "D. Reducing farming areas"
            ],
            correctAnswer: 2,
            explanation: "'developing salt-tolerant rice varieties and promoting diversified farming practices' → Đáp án C."
          },
          {
            id: 24,
            conversationGroup: "Lecture on Climate Change",
            question: "How long is the assigned paper?",
            options: [
              "A. 1,000 words",
              "B. 1,500 words",
              "C. 2,000 words",
              "D. 2,500 words"
            ],
            correctAnswer: 2,
            explanation: "'The paper should be 2,000 words' → Đáp án C."
          },
          {
            id: 25,
            conversationGroup: "Lecture on Climate Change",
            question: "What is the main cause of water shortages during growing periods?",
            options: [
              "A. Pollution of rivers",
              "B. Overuse of irrigation",
              "C. Accelerated evaporation due to higher temperatures",
              "D. Decreased rainfall patterns"
            ],
            correctAnswer: 2,
            explanation: "'Higher temperatures accelerate evaporation, leading to water shortages' → Đáp án C."
          },
          // Lecture 2: Technology (5 questions)
          {
            id: 26,
            conversationGroup: "Lecture on AI in Education",
            transcript: "Today, I'd like to talk about the role of artificial intelligence in modern education. AI-powered learning platforms are revolutionizing how students study, particularly at the tertiary level.\n\nAdaptive learning systems use algorithms to analyze student performance in real time. When a student struggles with a particular concept, the system automatically provides additional exercises and explanations tailored to their weakness. Studies conducted at MIT in 2024 found that students using AI-adaptive platforms improved their test scores by an average of 23% compared to traditional study methods.\n\nHowever, there are legitimate concerns about AI in education. First, over-reliance on technology may reduce critical thinking skills. Second, algorithmic bias can disadvantage students from underrepresented backgrounds. Third, data privacy remains a significant issue, as these platforms collect extensive personal information.\n\nDespite these challenges, the potential benefits are enormous. By 2030, it is projected that 60% of higher education institutions worldwide will integrate AI tools into their core curriculum. The key is to use AI as a supplement to, not a replacement for, quality human instruction.",
            transcriptVi: "Hôm nay tôi muốn nói về vai trò của trí tuệ nhân tạo trong giáo dục hiện đại. Các nền tảng học tập AI đang cách mạng hóa cách sinh viên học, đặc biệt ở bậc đại học.\n\nHệ thống học thích ứng dùng thuật toán phân tích hiệu suất sinh viên theo thời gian thực. Khi sinh viên gặp khó với một khái niệm, hệ thống tự động cung cấp bài tập và giải thích phù hợp với điểm yếu. Nghiên cứu tại MIT năm 2024 cho thấy sinh viên dùng nền tảng AI thích ứng cải thiện điểm thi trung bình 23% so với phương pháp truyền thống.\n\nTuy nhiên, có những lo ngại chính đáng. Thứ nhất, phụ thuộc quá mức có thể giảm tư duy phản biện. Thứ hai, thiên kiến thuật toán có thể bất lợi cho sinh viên thiểu số. Thứ ba, quyền riêng tư dữ liệu vẫn là vấn đề lớn.\n\nBất chấp thách thức, tiềm năng rất lớn. Đến 2030, dự kiến 60% trường đại học trên thế giới sẽ tích hợp AI vào chương trình cốt lõi. Điều quan trọng là dùng AI như bổ trợ, không thay thế, giảng dạy chất lượng.",
            question: "By how much did AI-adaptive platform students improve their scores?",
            options: [
              "A. 15%",
              "B. 20%",
              "C. 23%",
              "D. 30%"
            ],
            correctAnswer: 2,
            explanation: "'improved their test scores by an average of 23%' → Đáp án C."
          },
          {
            id: 27,
            conversationGroup: "Lecture on AI in Education",
            question: "Which is NOT mentioned as a concern about AI in education?",
            options: [
              "A. Reduced critical thinking skills",
              "B. Algorithmic bias",
              "C. High implementation costs",
              "D. Data privacy issues"
            ],
            correctAnswer: 2,
            explanation: "Three concerns mentioned: critical thinking, algorithmic bias, data privacy. 'High implementation costs' is NOT mentioned → Đáp án C."
          },
          {
            id: 28,
            conversationGroup: "Lecture on AI in Education",
            question: "What percentage of institutions are projected to use AI by 2030?",
            options: [
              "A. 40%",
              "B. 50%",
              "C. 60%",
              "D. 70%"
            ],
            correctAnswer: 2,
            explanation: "'60% of higher education institutions worldwide will integrate AI tools' → Đáp án C."
          },
          // Lecture 3: Health (5 questions)
          {
            id: 29,
            conversationGroup: "Lecture on Public Health",
            transcript: "In this session, we'll examine the growing mental health crisis among university students in Southeast Asia. A comprehensive survey conducted by WHO in 2025 across six countries revealed that 35% of university students reported symptoms of anxiety, and 28% showed signs of depression.\n\nThe primary contributing factors include academic pressure, financial stress, and social isolation—particularly since the COVID-19 pandemic accelerated the shift to online learning. Interestingly, students in STEM fields reported higher stress levels than those in humanities, with engineering students showing the highest rates at 42%.\n\nWhat can institutions do? First, universities should establish accessible counseling centers with trained psychologists—ideally maintaining a ratio of one counselor for every 500 students. Second, peer support programs have proven effective; the University of Melbourne's program reduced dropout rates by 18%. Third, curriculum design should incorporate stress management workshops.\n\nRemember, mental health is not a luxury—it's a prerequisite for academic success. For next class, please read chapters 7 and 8 of our textbook on health psychology interventions.",
            transcriptVi: "Trong buổi này, chúng ta sẽ xem xét cuộc khủng hoảng sức khỏe tâm thần ngày càng tăng trong sinh viên Đông Nam Á. Khảo sát toàn diện của WHO năm 2025 tại 6 quốc gia cho thấy 35% sinh viên có triệu chứng lo âu và 28% có dấu hiệu trầm cảm.\n\nNguyên nhân chính bao gồm áp lực học tập, căng thẳng tài chính, và cô lập xã hội—đặc biệt kể từ khi COVID-19 đẩy nhanh chuyển đổi sang học trực tuyến. Đáng chú ý, sinh viên STEM có mức căng thẳng cao hơn nhóm khoa học xã hội, với sinh viên kỹ thuật có tỷ lệ cao nhất 42%.\n\nCác trường có thể làm gì? Thứ nhất, thiết lập trung tâm tư vấn với tâm lý gia được đào tạo—lý tưởng là tỷ lệ 1 tư vấn viên cho 500 sinh viên. Thứ hai, chương trình hỗ trợ ngang hàng đã chứng minh hiệu quả; chương trình của ĐH Melbourne giảm tỷ lệ bỏ học 18%. Thứ ba, thiết kế chương trình học nên bao gồm workshop quản lý stress.\n\nNhớ rằng sức khỏe tâm thần không phải xa xỉ—đó là tiền đề cho thành công học thuật. Lần tới, hãy đọc chương 7 và 8 về can thiệp tâm lý sức khỏe.",
            question: "What percentage of students reported anxiety symptoms?",
            options: [
              "A. 25%",
              "B. 28%",
              "C. 35%",
              "D. 42%"
            ],
            correctAnswer: 2,
            explanation: "'35% of university students reported symptoms of anxiety' → Đáp án C."
          },
          {
            id: 30,
            conversationGroup: "Lecture on Public Health",
            question: "Which group of students had the highest stress levels?",
            options: [
              "A. Humanities students",
              "B. Medical students",
              "C. Business students",
              "D. Engineering students"
            ],
            correctAnswer: 3,
            explanation: "'engineering students showing the highest rates at 42%' → Đáp án D."
          },
          {
            id: 31,
            conversationGroup: "Lecture on Public Health",
            question: "What counselor-to-student ratio is recommended?",
            options: [
              "A. 1:200",
              "B. 1:300",
              "C. 1:500",
              "D. 1:1000"
            ],
            correctAnswer: 2,
            explanation: "'maintaining a ratio of one counselor for every 500 students' → Đáp án C."
          },
          {
            id: 32,
            conversationGroup: "Lecture on Public Health",
            question: "By how much did the University of Melbourne's program reduce dropout rates?",
            options: [
              "A. 10%",
              "B. 15%",
              "C. 18%",
              "D. 22%"
            ],
            correctAnswer: 2,
            explanation: "'reduced dropout rates by 18%' → Đáp án C."
          },
          {
            id: 33,
            conversationGroup: "Lecture on Public Health",
            question: "What is NOT mentioned as a contributing factor to the mental health crisis?",
            options: [
              "A. Academic pressure",
              "B. Financial stress",
              "C. Social isolation",
              "D. Poor nutrition"
            ],
            correctAnswer: 3,
            explanation: "Contributing factors: academic pressure, financial stress, social isolation. 'Poor nutrition' is NOT mentioned → Đáp án D."
          },
          {
            id: 34,
            conversationGroup: "Lecture on Public Health",
            question: "How many countries were included in the WHO survey?",
            options: [
              "A. 4",
              "B. 5",
              "C. 6",
              "D. 8"
            ],
            correctAnswer: 2,
            explanation: "'conducted by WHO across six countries' → Đáp án C."
          },
          {
            id: 35,
            conversationGroup: "Lecture on Public Health",
            question: "What reading is assigned for the next class?",
            options: [
              "A. Chapters 5 and 6",
              "B. Chapters 7 and 8",
              "C. Chapters 9 and 10",
              "D. The entire textbook"
            ],
            correctAnswer: 1,
            explanation: "'please read chapters 7 and 8' → Đáp án B."
          }
        ]
      }
    ]
  },

  // ==============================
  // READING - 4 Passages, 40 Questions
  // ==============================
  reading: {
    totalTime: 60, // minutes
    passages: [
      {
        id: 1,
        title: "The Future of Remote Work",
        titleVi: "Tương lai của Làm việc Từ xa",
        passage: `The concept of remote work has undergone a dramatic transformation in recent years. What was once considered a privilege reserved for a select few has become a mainstream work arrangement adopted by organizations worldwide. According to a comprehensive study by Stanford University, 42% of the American workforce was working from home full-time by 2024, a figure that would have been unthinkable just five years earlier.

The benefits of remote work are well-documented. Employees report higher levels of job satisfaction, with 78% stating that flexible work arrangements improve their work-life balance. Companies have also recognized financial advantages, as reducing office space can save an average of $11,000 per employee annually. Furthermore, remote work has expanded the talent pool, allowing organizations to recruit skilled professionals regardless of geographical limitations.

However, the shift to remote work is not without challenges. Communication gaps can arise when team members are dispersed across different time zones. A survey by Harvard Business Review found that 65% of remote workers felt disconnected from their colleagues, leading to decreased collaboration and innovation. Additionally, the blurring of boundaries between work and personal life has contributed to burnout, with 40% of remote workers reporting longer working hours than their office-based counterparts.

To address these issues, companies are increasingly adopting hybrid work models that combine the flexibility of remote work with the collaborative benefits of in-person interaction. Leading technology firms such as Google and Microsoft have implemented "hub-and-spoke" models, where employees work remotely most of the week but gather at central offices for team meetings and collaborative projects. This approach aims to preserve the autonomy of remote work while fostering the social connections that drive creativity and innovation.

The future of work will likely be defined by this balance. Organizations that successfully integrate technology, trust, and flexibility into their work culture will be best positioned to attract and retain top talent in an increasingly competitive global market.`,
        passageVi: `Khái niệm làm việc từ xa đã trải qua sự chuyển đổi mạnh mẽ trong những năm gần đây. Điều từng được coi là đặc quyền dành cho số ít đã trở thành hình thức làm việc phổ biến được các tổ chức trên toàn thế giới áp dụng. Theo nghiên cứu toàn diện của Đại học Stanford, 42% lực lượng lao động Mỹ làm việc tại nhà toàn thời gian vào năm 2024.

Lợi ích của làm việc từ xa được ghi nhận rõ ràng. Nhân viên báo cáo mức hài lòng công việc cao hơn, với 78% cho rằng sắp xếp công việc linh hoạt cải thiện cân bằng cuộc sống. Các công ty cũng nhận ra lợi thế tài chính, vì giảm văn phòng có thể tiết kiệm trung bình 11.000 đô la mỗi nhân viên mỗi năm.

Tuy nhiên, chuyển đổi sang làm việc từ xa không phải không có thách thức. Khoảng cách giao tiếp có thể phát sinh khi các thành viên phân tán ở múi giờ khác nhau. Khảo sát của Harvard Business Review cho thấy 65% người làm việc từ xa cảm thấy mất kết nối với đồng nghiệp. Ngoài ra, ranh giới mờ giữa công việc và cuộc sống cá nhân góp phần gây kiệt sức, 40% người làm từ xa báo cáo giờ làm dài hơn.

Để giải quyết, các công ty ngày càng áp dụng mô hình hybrid kết hợp sự linh hoạt của làm việc từ xa với lợi ích hợp tác trực tiếp. Các công ty công nghệ hàng đầu như Google và Microsoft đã triển khai mô hình "hub-and-spoke".

Tương lai công việc sẽ được định nghĩa bởi sự cân bằng này. Tổ chức thành công tích hợp công nghệ, niềm tin và sự linh hoạt sẽ ở vị trí tốt nhất để thu hút nhân tài.`,
        questions: [
          {
            id: 1,
            question: "What percentage of the American workforce worked from home full-time by 2024?",
            options: ["A. 32%", "B. 42%", "C. 52%", "D. 62%"],
            correctAnswer: 1,
            explanation: "The passage states '42% of the American workforce was working from home full-time by 2024' → B."
          },
          {
            id: 2,
            question: "How much can companies save per employee by reducing office space?",
            options: ["A. $8,000", "B. $9,500", "C. $11,000", "D. $13,000"],
            correctAnswer: 2,
            explanation: "'reducing office space can save an average of $11,000 per employee annually' → C."
          },
          {
            id: 3,
            question: "According to Harvard Business Review, what percentage of remote workers felt disconnected?",
            options: ["A. 55%", "B. 60%", "C. 65%", "D. 70%"],
            correctAnswer: 2,
            explanation: "'65% of remote workers felt disconnected from their colleagues' → C."
          },
          {
            id: 4,
            question: "What model have Google and Microsoft implemented?",
            options: ["A. Fully remote model", "B. Traditional office model", "C. Hub-and-spoke model", "D. Rotating shift model"],
            correctAnswer: 2,
            explanation: "'Leading technology firms have implemented hub-and-spoke models' → C."
          },
          {
            id: 5,
            question: "What percentage of remote workers reported working longer hours?",
            options: ["A. 30%", "B. 35%", "C. 40%", "D. 45%"],
            correctAnswer: 2,
            explanation: "'40% of remote workers reporting longer working hours' → C."
          },
          {
            id: 6,
            question: "The word 'mainstream' in paragraph 1 is closest in meaning to ___.",
            options: ["A. uncommon", "B. conventional", "C. experimental", "D. temporary"],
            correctAnswer: 1,
            explanation: "'mainstream' means widely accepted, conventional → B."
          },
          {
            id: 7,
            question: "What is the main advantage of remote work for companies in terms of recruitment?",
            options: [
              "A. Lower salaries for employees",
              "B. Expanded talent pool without geographical limits",
              "C. Reduced training costs",
              "D. Fewer employee benefits required"
            ],
            correctAnswer: 1,
            explanation: "'remote work has expanded the talent pool, allowing organizations to recruit regardless of geographical limitations' → B."
          },
          {
            id: 8,
            question: "What is the main purpose of the hybrid work model?",
            options: [
              "A. To eliminate remote work entirely",
              "B. To reduce employee salaries",
              "C. To combine remote flexibility with in-person collaboration",
              "D. To monitor employee productivity"
            ],
            correctAnswer: 2,
            explanation: "'hybrid work models that combine the flexibility of remote work with the collaborative benefits of in-person interaction' → C."
          },
          {
            id: 9,
            question: "According to the passage, which statement is TRUE?",
            options: [
              "A. Remote work reduces job satisfaction",
              "B. 78% of employees prefer fully remote work",
              "C. Remote work has contributed to burnout for some workers",
              "D. All companies should adopt fully remote models"
            ],
            correctAnswer: 2,
            explanation: "'the blurring of boundaries...has contributed to burnout' → C."
          },
          {
            id: 10,
            question: "What is the best title for this passage?",
            options: [
              "A. Why Remote Work Will Replace Offices",
              "B. The Evolution and Challenges of Remote Work",
              "C. How to Work from Home Effectively",
              "D. The End of Traditional Employment"
            ],
            correctAnswer: 1,
            explanation: "The passage discusses both evolution, benefits, and challenges of remote work → B."
          }
        ]
      },
      {
        id: 2,
        title: "Sustainable Urban Development in Southeast Asia",
        titleVi: "Phát triển Đô thị Bền vững ở Đông Nam Á",
        passage: `Southeast Asian cities are experiencing unprecedented urbanization rates, creating both opportunities and challenges for sustainable development. The Asian Development Bank estimates that by 2030, approximately 65% of the region's population will live in urban areas, up from 49% in 2020. This rapid growth demands innovative approaches to city planning, infrastructure, and environmental management.

Singapore stands as the region's most successful example of sustainable urban development. The city-state has invested heavily in green infrastructure, including vertical gardens that cover over 200 hectares of building surfaces. Its comprehensive public transportation system serves 7.5 million passenger trips daily, reducing per-capita carbon emissions by 30% compared to cities of similar size. Singapore's water management system, which includes NEWater technology that recycles wastewater to ultra-pure quality, has reduced dependence on imported water by 40%.

In contrast, many rapidly growing cities in the region face significant challenges. Jakarta, with a population exceeding 10 million, struggles with severe flooding, traffic congestion, and air pollution. The Indonesian government has initiated an ambitious plan to relocate the capital to Nusantara in East Kalimantan, partly to alleviate environmental pressures on Jakarta. This $32 billion project aims to create a "forest city" that preserves 65% of its area as green space.

Ho Chi Minh City offers another perspective on urban sustainability. Despite its rapid economic growth—averaging 7.2% GDP growth annually over the past decade—the city faces mounting challenges from flooding, with approximately 40% of its area at risk of inundation by 2050. The city government has responded with a comprehensive Climate Action Plan that includes converting 15% of existing roads into green corridors, expanding the metro system to six lines by 2035, and implementing smart flood management systems using IoT sensors.

The path forward for Southeast Asian cities lies in learning from both successes and failures. Experts recommend three key strategies: investing in renewable energy infrastructure, prioritizing public transit over private vehicles, and integrating nature-based solutions into urban planning. As Dr. Pham Ngoc Linh of the Vietnam National University observes, "The challenge is not whether to grow, but how to grow sustainably while preserving the cultural identity and environmental integrity of our cities."`,
        passageVi: `Các thành phố Đông Nam Á đang trải qua tốc độ đô thị hóa chưa từng có. Ngân hàng Phát triển Châu Á ước tính đến năm 2030, khoảng 65% dân số khu vực sẽ sống ở đô thị.

Singapore là ví dụ thành công nhất về phát triển đô thị bền vững. Hệ thống giao thông công cộng phục vụ 7,5 triệu lượt đi lại mỗi ngày, giảm 30% lượng khí thải carbon. Hệ thống quản lý nước NEWater đã giảm 40% phụ thuộc vào nước nhập khẩu.

Jakarta với dân số trên 10 triệu đối mặt với ngập lụt, kẹt xe và ô nhiễm không khí. Chính phủ Indonesia đã khởi động kế hoạch di chuyển thủ đô đến Nusantara với chi phí 32 tỷ đô la.

TP.HCM cũng đối mặt thách thức, với 40% diện tích có nguy cơ ngập vào 2050. Thành phố đã đáp ứng bằng Kế hoạch Hành động Khí hậu toàn diện.

Con đường phía trước nằm ở việc học hỏi từ cả thành công và thất bại. Các chuyên gia đề xuất ba chiến lược: đầu tư năng lượng tái tạo, ưu tiên giao thông công cộng, và tích hợp giải pháp dựa trên thiên nhiên.`,
        questions: [
          {
            id: 11,
            question: "What percentage of Southeast Asia's population is expected to live in urban areas by 2030?",
            options: ["A. 49%", "B. 55%", "C. 60%", "D. 65%"],
            correctAnswer: 3,
            explanation: "'approximately 65% of the region's population will live in urban areas' → D."
          },
          {
            id: 12,
            question: "How many passenger trips does Singapore's public transport serve daily?",
            options: ["A. 5.5 million", "B. 6.5 million", "C. 7.5 million", "D. 8.5 million"],
            correctAnswer: 2,
            explanation: "'serves 7.5 million passenger trips daily' → C."
          },
          {
            id: 13,
            question: "How much has Singapore's NEWater reduced dependence on imported water?",
            options: ["A. 20%", "B. 30%", "C. 40%", "D. 50%"],
            correctAnswer: 2,
            explanation: "'reduced dependence on imported water by 40%' → C."
          },
          {
            id: 14,
            question: "How much does the Nusantara project cost?",
            options: ["A. $22 billion", "B. $27 billion", "C. $32 billion", "D. $37 billion"],
            correctAnswer: 2,
            explanation: "'This $32 billion project' → C."
          },
          {
            id: 15,
            question: "What percentage of Nusantara's area will be preserved as green space?",
            options: ["A. 45%", "B. 55%", "C. 65%", "D. 75%"],
            correctAnswer: 2,
            explanation: "'preserves 65% of its area as green space' → C."
          },
          {
            id: 16,
            question: "What is Ho Chi Minh City's average annual GDP growth?",
            options: ["A. 5.8%", "B. 6.5%", "C. 7.2%", "D. 8.0%"],
            correctAnswer: 2,
            explanation: "'averaging 7.2% GDP growth annually' → C."
          },
          {
            id: 17,
            question: "How many metro lines will HCMC have by 2035?",
            options: ["A. 4", "B. 5", "C. 6", "D. 8"],
            correctAnswer: 2,
            explanation: "'expanding the metro system to six lines by 2035' → C."
          },
          {
            id: 18,
            question: "The word 'unprecedented' in paragraph 1 is closest in meaning to ___.",
            options: ["A. predictable", "B. never seen before", "C. gradual", "D. common"],
            correctAnswer: 1,
            explanation: "'unprecedented' means never having happened before → B."
          },
          {
            id: 19,
            question: "Which is NOT one of the three expert-recommended strategies?",
            options: [
              "A. Investing in renewable energy",
              "B. Prioritizing public transit",
              "C. Building more highways",
              "D. Integrating nature-based solutions"
            ],
            correctAnswer: 2,
            explanation: "Three strategies: renewable energy, public transit, nature-based solutions. 'Building more highways' is NOT mentioned → C."
          },
          {
            id: 20,
            question: "What is the passage mainly about?",
            options: [
              "A. Singapore's environmental policies",
              "B. Problems of urbanization in Jakarta only",
              "C. Sustainable urban development approaches in Southeast Asia",
              "D. Why cities should stop growing"
            ],
            correctAnswer: 2,
            explanation: "The passage discusses sustainable urban development across multiple SE Asian cities → C."
          }
        ]
      },
      {
        id: 3,
        title: "The Digital Transformation of Higher Education",
        titleVi: "Chuyển đổi Số trong Giáo dục Đại học",
        passage: `The higher education sector is undergoing a fundamental digital transformation that is reshaping how knowledge is created, delivered, and assessed. This transformation, accelerated by global events such as the COVID-19 pandemic, has moved beyond simple digitization of existing practices to fundamentally rethinking the educational experience.

Massive Open Online Courses (MOOCs) have demonstrated the potential of digital education at scale. Platforms like Coursera and edX now offer over 19,000 courses from more than 200 universities worldwide, reaching 220 million registered learners. However, completion rates for MOOCs remain discouragingly low, averaging only 5-15%, suggesting that simply putting content online is insufficient for effective learning.

Blended learning—combining online and face-to-face instruction—has emerged as a more effective approach. Research conducted by the International Council for Open and Distance Education shows that blended learning programs achieve learning outcomes that are 20-35% better than purely online or purely face-to-face models. This approach allows students to engage with theoretical content at their own pace through digital platforms while developing practical skills and social competencies through in-person workshops and laboratory sessions.

Assessment methods are also evolving. Traditional examinations are increasingly being supplemented or replaced by competency-based assessments, digital portfolios, and project-based evaluations. The European University Association reports that 45% of its member institutions have introduced at least one form of digital assessment since 2022. These new methods aim to evaluate not just knowledge recall but also critical thinking, collaboration, and digital literacy—skills that are essential for the modern workplace.

Perhaps the most significant development is the rise of micro-credentials and stackable qualifications. Rather than committing to a four-year degree, learners can now earn specific competency certificates that can be accumulated toward a full qualification. IBM, Google, and Amazon have all launched professional certificate programs that are recognized by employers and can be completed in 3-6 months. This modular approach to education is particularly attractive to working professionals who need to upskill without leaving their jobs.`,
        passageVi: `Giáo dục đại học đang trải qua chuyển đổi số căn bản, định hình lại cách kiến thức được tạo ra, truyền đạt và đánh giá.

MOOC đã cho thấy tiềm năng của giáo dục số. Coursera và edX cung cấp hơn 19.000 khóa học từ hơn 200 trường đại học, tiếp cận 220 triệu người học. Tuy nhiên, tỷ lệ hoàn thành chỉ 5-15%.

Học kết hợp (blended learning) hiệu quả hơn 20-35% so với mô hình chỉ online hoặc chỉ trực tiếp.

Phương pháp đánh giá cũng đang tiến hóa. 45% tổ chức thành viên EUA đã giới thiệu ít nhất một hình thức đánh giá số từ 2022.

Phát triển đáng chú ý nhất là micro-credentials. IBM, Google, Amazon đã ra mắt chương trình chứng chỉ chuyên nghiệp có thể hoàn thành trong 3-6 tháng.`,
        questions: [
          {
            id: 21,
            question: "How many courses do MOOC platforms now offer?",
            options: ["A. Over 10,000", "B. Over 15,000", "C. Over 19,000", "D. Over 25,000"],
            correctAnswer: 2,
            explanation: "'Platforms offer over 19,000 courses' → C."
          },
          {
            id: 22,
            question: "What is the average completion rate for MOOCs?",
            options: ["A. 1-5%", "B. 5-15%", "C. 15-25%", "D. 25-35%"],
            correctAnswer: 1,
            explanation: "'completion rates for MOOCs remain...averaging only 5-15%' → B."
          },
          {
            id: 23,
            question: "By how much do blended learning outcomes exceed other models?",
            options: ["A. 10-20%", "B. 15-25%", "C. 20-35%", "D. 30-45%"],
            correctAnswer: 2,
            explanation: "'blended learning programs achieve learning outcomes that are 20-35% better' → C."
          },
          {
            id: 24,
            question: "What percentage of EUA institutions have introduced digital assessment?",
            options: ["A. 35%", "B. 40%", "C. 45%", "D. 50%"],
            correctAnswer: 2,
            explanation: "'45% of its member institutions have introduced at least one form of digital assessment' → C."
          },
          {
            id: 25,
            question: "How long do professional certificate programs typically take to complete?",
            options: ["A. 1-3 months", "B. 3-6 months", "C. 6-12 months", "D. 12-18 months"],
            correctAnswer: 1,
            explanation: "'can be completed in 3-6 months' → B."
          },
          {
            id: 26,
            question: "The word 'insufficient' in paragraph 2 is closest in meaning to ___.",
            options: ["A. adequate", "B. not enough", "C. excessive", "D. appropriate"],
            correctAnswer: 1,
            explanation: "'insufficient' means not adequate, not enough → B."
          },
          {
            id: 27,
            question: "Which company is NOT mentioned as offering professional certificates?",
            options: ["A. IBM", "B. Microsoft", "C. Google", "D. Amazon"],
            correctAnswer: 1,
            explanation: "IBM, Google, and Amazon are mentioned. Microsoft is NOT → B."
          },
          {
            id: 28,
            question: "What advantage does blended learning have over pure online learning?",
            options: [
              "A. It is cheaper to implement",
              "B. It allows practical skill development through in-person sessions",
              "C. It requires fewer teachers",
              "D. It eliminates the need for technology"
            ],
            correctAnswer: 1,
            explanation: "'developing practical skills and social competencies through in-person workshops' → B."
          },
          {
            id: 29,
            question: "Who are micro-credentials particularly attractive to?",
            options: [
              "A. High school students",
              "B. Retired professionals",
              "C. Working professionals who need to upskill",
              "D. Children under 18"
            ],
            correctAnswer: 2,
            explanation: "'particularly attractive to working professionals who need to upskill without leaving their jobs' → C."
          },
          {
            id: 30,
            question: "What does the passage suggest about the future of higher education?",
            options: [
              "A. Traditional degrees will completely disappear",
              "B. Online learning will replace all face-to-face teaching",
              "C. Education is becoming more flexible and modular",
              "D. Only technology companies should provide education"
            ],
            correctAnswer: 2,
            explanation: "The passage shows a trend toward flexible, modular, blended education → C."
          }
        ]
      },
      {
        id: 4,
        title: "The Economics of Renewable Energy Transition",
        titleVi: "Kinh tế học của Chuyển đổi Năng lượng Tái tạo",
        passage: `The global transition from fossil fuels to renewable energy sources represents one of the most significant economic shifts in human history. The International Renewable Energy Agency (IRENA) reports that the cost of solar photovoltaic energy has decreased by 89% since 2010, making it the cheapest source of electricity in most parts of the world. Similarly, onshore wind energy costs have fallen by 69% over the same period.

This cost revolution has fundamentally altered the investment landscape. In 2023, global investment in renewable energy reached $495 billion, surpassing fossil fuel investment for the first time. China led this transition with $167 billion in clean energy investment, followed by the European Union at $128 billion and the United States at $73 billion. These investments are not merely environmentally motivated; they represent sound economic decisions as renewable energy projects now offer higher returns than traditional energy investments.

The employment implications of this transition are substantial. The renewable energy sector employed 13.7 million people globally in 2023, with solar photovoltaic being the largest employer at 4.9 million jobs. Vietnam has emerged as a significant player in this sector, with its solar manufacturing industry creating over 50,000 direct jobs and contributing approximately $2.3 billion to the national economy. The Vietnamese government's Power Development Plan VIII targets 30-35% renewable energy in the national electricity mix by 2030.

However, the transition also presents challenges. Intermittency—the fact that solar and wind energy are not available 24/7—remains a significant technical hurdle. Energy storage solutions, particularly lithium-ion batteries, have seen costs decrease by 97% since 1991, but storage capacity still needs to increase tenfold to support a fully renewable grid. Additionally, the mining of rare earth elements required for renewable technology raises environmental and social concerns, particularly in developing countries.

The economic benefits of the renewable energy transition extend beyond direct energy production. A comprehensive study by Oxford University economists found that every dollar invested in renewable energy generates $3.50 in economic activity through supply chain effects, reduced healthcare costs from air pollution, and avoided climate damage. This multiplier effect suggests that the transition to renewable energy is not just an environmental imperative but an economic opportunity of unprecedented scale.`,
        passageVi: `Chuyển đổi từ nhiên liệu hóa thạch sang năng lượng tái tạo là một trong những thay đổi kinh tế lớn nhất lịch sử. Chi phí năng lượng mặt trời đã giảm 89% từ 2010.

Năm 2023, đầu tư toàn cầu vào năng lượng tái tạo đạt 495 tỷ đô la, vượt đầu tư nhiên liệu hóa thạch lần đầu tiên. Trung Quốc dẫn đầu với 167 tỷ đô la.

Ngành năng lượng tái tạo tạo việc làm cho 13,7 triệu người toàn cầu năm 2023. Việt Nam tạo hơn 50.000 việc làm trực tiếp và đóng góp khoảng 2,3 tỷ đô la cho nền kinh tế.

Tuy nhiên, tính gián đoạn vẫn là thách thức kỹ thuật lớn. Chi phí pin lithium-ion đã giảm 97% từ 1991.

Nghiên cứu Oxford cho thấy mỗi đô la đầu tư vào năng lượng tái tạo tạo ra 3,50 đô la hoạt động kinh tế.`,
        questions: [
          {
            id: 31,
            question: "By how much has the cost of solar energy decreased since 2010?",
            options: ["A. 79%", "B. 85%", "C. 89%", "D. 93%"],
            correctAnswer: 2,
            explanation: "'the cost of solar photovoltaic energy has decreased by 89% since 2010' → C."
          },
          {
            id: 32,
            question: "How much did global renewable energy investment reach in 2023?",
            options: ["A. $395 billion", "B. $445 billion", "C. $495 billion", "D. $545 billion"],
            correctAnswer: 2,
            explanation: "'global investment in renewable energy reached $495 billion' → C."
          },
          {
            id: 33,
            question: "Which country invested the most in clean energy?",
            options: ["A. United States", "B. Japan", "C. European Union", "D. China"],
            correctAnswer: 3,
            explanation: "'China led this transition with $167 billion' → D."
          },
          {
            id: 34,
            question: "How many people does the renewable energy sector employ globally?",
            options: ["A. 10.2 million", "B. 11.5 million", "C. 13.7 million", "D. 15.1 million"],
            correctAnswer: 2,
            explanation: "'The renewable energy sector employed 13.7 million people globally' → C."
          },
          {
            id: 35,
            question: "What is Vietnam's renewable energy target for 2030?",
            options: ["A. 20-25%", "B. 25-30%", "C. 30-35%", "D. 35-40%"],
            correctAnswer: 2,
            explanation: "'targets 30-35% renewable energy in the national electricity mix by 2030' → C."
          },
          {
            id: 36,
            question: "By how much have lithium-ion battery costs decreased since 1991?",
            options: ["A. 87%", "B. 92%", "C. 95%", "D. 97%"],
            correctAnswer: 3,
            explanation: "'lithium-ion batteries have seen costs decrease by 97% since 1991' → D."
          },
          {
            id: 37,
            question: "The word 'intermittency' in paragraph 4 refers to ___.",
            options: [
              "A. The high cost of renewable energy",
              "B. The inconsistent availability of solar and wind power",
              "C. The difficulty of installing solar panels",
              "D. The environmental impact of energy production"
            ],
            correctAnswer: 1,
            explanation: "'Intermittency—the fact that solar and wind energy are not available 24/7' → B."
          },
          {
            id: 38,
            question: "How much economic activity does every dollar in renewable energy generate?",
            options: ["A. $2.50", "B. $3.00", "C. $3.50", "D. $4.00"],
            correctAnswer: 2,
            explanation: "'every dollar invested generates $3.50 in economic activity' → C."
          },
          {
            id: 39,
            question: "How many direct jobs has Vietnam's solar industry created?",
            options: ["A. Over 30,000", "B. Over 40,000", "C. Over 50,000", "D. Over 60,000"],
            correctAnswer: 2,
            explanation: "'solar manufacturing industry creating over 50,000 direct jobs' → C."
          },
          {
            id: 40,
            question: "What is the main idea of the final paragraph?",
            options: [
              "A. Renewable energy is too expensive for developing countries",
              "B. The economic benefits of renewable energy extend beyond energy production",
              "C. Oxford University opposes renewable energy",
              "D. Healthcare costs are unrelated to energy choices"
            ],
            correctAnswer: 1,
            explanation: "Final paragraph argues that benefits extend beyond direct energy production → B."
          }
        ]
      }
    ]
  },

  // ==============================
  // WRITING - 2 Tasks
  // ==============================
  writing: {
    totalTime: 60, // minutes
    tasks: [
      {
        id: 1,
        type: "email",
        title: "Task 1: Formal Email / Letter",
        titleVi: "Task 1: Thư / Email trang trọng",
        wordCount: { min: 120, max: 150 },
        timeRecommended: 20,
        prompt: "You are a graduate student at Vietnam National University. You want to apply for a research assistant position in the Department of Environmental Science. Write an email to Professor Le Minh Duc to:\n\n1. Introduce yourself and your academic background\n2. Explain why you are interested in this position\n3. Describe your relevant skills and experience\n4. Ask about the application deadline and requirements",
        promptVi: "Bạn là sinh viên cao học tại Đại học Quốc gia Việt Nam. Bạn muốn ứng tuyển vị trí trợ lý nghiên cứu tại Khoa Khoa học Môi trường. Viết email cho Giáo sư Lê Minh Đức để:\n\n1. Giới thiệu bản thân và nền tảng học vấn\n2. Giải thích lý do bạn quan tâm đến vị trí này\n3. Mô tả kỹ năng và kinh nghiệm liên quan\n4. Hỏi về hạn nộp đơn và yêu cầu",
        sampleResponse: `Dear Professor Le Minh Duc,

I am writing to express my interest in the research assistant position recently advertised by the Department of Environmental Science. My name is Nguyen Thanh Hoa, and I am currently a second-year Master's student specializing in Environmental Management at Vietnam National University.

I am particularly drawn to this position because my thesis research focuses on the impact of urbanization on water quality in the Mekong Delta, which aligns closely with your department's ongoing research projects. During my undergraduate studies, I developed strong analytical skills through conducting field surveys and analyzing water samples using GIS technology.

In addition to my academic experience, I completed a six-month internship at the Ministry of Natural Resources, where I assisted in compiling environmental impact assessment reports. I am proficient in statistical software including SPSS and R, and I have published one research paper in a national peer-reviewed journal.

I would be grateful if you could inform me about the application deadline and any specific documents required for the selection process.

Thank you for your time and consideration. I look forward to hearing from you.

Yours sincerely,
Nguyen Thanh Hoa`,
        criteria: [
          { name: "Task Achievement", description: "Hoàn thành đầy đủ 4 yêu cầu của đề bài", maxScore: 2.5 },
          { name: "Coherence & Cohesion", description: "Bố cục logic, sử dụng liên kết từ phù hợp", maxScore: 2.5 },
          { name: "Lexical Resource", description: "Từ vựng phong phú, chính xác ở trình độ B2", maxScore: 2.5 },
          { name: "Grammar Range & Accuracy", description: "Ngữ pháp đa dạng, ít lỗi", maxScore: 2.5 }
        ]
      },
      {
        id: 2,
        type: "essay",
        title: "Task 2: Opinion Essay",
        titleVi: "Task 2: Bài luận quan điểm",
        wordCount: { min: 250, max: 300 },
        timeRecommended: 40,
        prompt: "Some people believe that online education will eventually replace traditional classroom learning at universities. Others argue that face-to-face interaction is essential for effective learning.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
        promptVi: "Một số người tin rằng giáo dục trực tuyến cuối cùng sẽ thay thế học tập truyền thống tại các trường đại học. Những người khác cho rằng tương tác trực tiếp là thiết yếu cho việc học hiệu quả.\n\nThảo luận cả hai quan điểm và đưa ra ý kiến của bạn.\n\nViết ít nhất 250 từ.",
        sampleResponse: `The rapid advancement of technology has sparked a debate about whether online education could eventually replace traditional classroom learning at the university level. While both modes of learning have their merits, I believe that a combination of both approaches offers the most effective educational experience.

Proponents of online education argue that it offers unparalleled flexibility and accessibility. Students can access course materials at any time and from any location, which is particularly beneficial for working professionals pursuing advanced degrees. Moreover, online platforms can utilize adaptive learning technologies that personalize the educational experience based on individual student performance, potentially leading to more efficient learning outcomes.

On the other hand, advocates of traditional classroom learning emphasize the irreplaceable value of face-to-face interaction. University education is not merely about acquiring knowledge; it also involves developing critical interpersonal skills such as teamwork, public speaking, and the ability to engage in scholarly debate. Laboratory work, field research, and collaborative projects often require physical presence and direct supervision from instructors. Furthermore, the social environment of a university campus plays a crucial role in personal development and professional networking.

In my opinion, the future of higher education lies in a blended approach that leverages the strengths of both models. Universities should integrate digital tools to enhance content delivery while maintaining in-person sessions for activities that require human interaction and hands-on practice. This hybrid model can accommodate diverse learning styles and provide a comprehensive educational experience.

In conclusion, rather than viewing online and traditional education as competing alternatives, institutions should embrace both as complementary components of a modern, effective educational system.`,
        criteria: [
          { name: "Task Response", description: "Trả lời đúng đề, có luận điểm rõ ràng", maxScore: 2.5 },
          { name: "Coherence & Cohesion", description: "Bố cục đoạn văn logic, liên kết chặt chẽ", maxScore: 2.5 },
          { name: "Lexical Resource", description: "Từ vựng học thuật phong phú ở trình độ B2", maxScore: 2.5 },
          { name: "Grammar Range & Accuracy", description: "Cấu trúc câu đa dạng, ít lỗi ngữ pháp", maxScore: 2.5 }
        ]
      }
    ]
  },

  // ==============================
  // SPEAKING - 3 Parts
  // ==============================
  speaking: {
    totalTime: 12, // minutes
    parts: [
      {
        id: 1,
        title: "Part 1: Social Interaction",
        titleVi: "Phần 1: Tương tác Xã hội",
        time: 3,
        instructions: "The examiner will ask you general questions about familiar topics. Answer each question in 2-3 sentences.",
        instructionsVi: "Giám khảo sẽ hỏi bạn các câu hỏi chung về chủ đề quen thuộc. Trả lời mỗi câu 2-3 câu.",
        questions: [
          {
            id: 1,
            question: "Can you tell me about yourself and what you are currently studying?",
            questionVi: "Bạn có thể giới thiệu về bản thân và hiện đang học gì?",
            sampleResponse: "My name is [Name], and I am currently pursuing a Master's degree in Business Administration at Vietnam National University. I have been studying for about one year now, and my research focuses on digital marketing strategies for small businesses in Vietnam. Before starting my graduate studies, I worked for three years as a marketing coordinator at a technology company in Ho Chi Minh City.",
            tips: "Giới thiệu tên, ngành học, trường, thời gian học, và một chi tiết thú vị về bản thân."
          },
          {
            id: 2,
            question: "What do you enjoy most about living in your city?",
            questionVi: "Bạn thích điều gì nhất khi sống ở thành phố của bạn?",
            sampleResponse: "I really enjoy the vibrant food culture in Ho Chi Minh City. There are countless street food stalls and restaurants offering diverse cuisines from all regions of Vietnam. I also appreciate the city's dynamic energy—there is always something happening, whether it is a cultural festival, a business networking event, or a community gathering.",
            tips: "Nêu 2-3 điều cụ thể bạn thích, giải thích lý do."
          },
          {
            id: 3,
            question: "How do you usually spend your free time?",
            questionVi: "Bạn thường dành thời gian rảnh như thế nào?",
            sampleResponse: "In my free time, I enjoy reading books about personal development and psychology. I also practice yoga three times a week to manage stress from my studies. On weekends, I like to explore new cafés and restaurants with my friends, which helps me unwind and maintain a healthy work-life balance.",
            tips: "Mô tả 2-3 hoạt động cụ thể, giải thích tại sao."
          }
        ]
      },
      {
        id: 2,
        title: "Part 2: Solution Discussion",
        titleVi: "Phần 2: Thảo luận Giải pháp",
        time: 4,
        instructions: "You will be given a topic with a problem. You have 1 minute to prepare, then speak for 2-3 minutes presenting your solution and reasoning.",
        instructionsVi: "Bạn sẽ được cho một chủ đề có vấn đề cần giải quyết. Bạn có 1 phút chuẩn bị, sau đó nói 2-3 phút trình bày giải pháp và lý lẽ.",
        questions: [
          {
            id: 4,
            topic: "Your university is experiencing low attendance in lectures. The administration has asked for suggestions to improve student engagement.",
            topicVi: "Trường đại học của bạn đang có tỷ lệ tham gia bài giảng thấp. Ban giám hiệu yêu cầu đề xuất cải thiện sự tham gia của sinh viên.",
            points: [
              "Describe the problem and its possible causes",
              "Suggest at least two practical solutions",
              "Explain why your solutions would be effective",
              "Discuss any potential challenges in implementing your ideas"
            ],
            pointsVi: [
              "Mô tả vấn đề và nguyên nhân có thể",
              "Đề xuất ít nhất hai giải pháp thực tế",
              "Giải thích tại sao giải pháp của bạn hiệu quả",
              "Thảo luận thách thức tiềm ẩn khi thực hiện"
            ],
            sampleResponse: "I believe the low attendance in lectures is primarily caused by two factors: the traditional lecture format which many students find passive and unengaging, and the availability of course materials online which reduces the perceived need to attend in person.\n\nTo address this issue, I would propose two main solutions. First, universities should adopt a flipped classroom model where students watch recorded lectures at home and use class time for interactive discussions, group projects, and problem-solving activities. This approach has been shown to increase student engagement by up to 40% according to research from Harvard University.\n\nSecond, I suggest implementing a participation-based grading system where a portion of the final grade is allocated to meaningful in-class contributions rather than just attendance. This would motivate students to not only attend but actively participate in discussions.\n\nHowever, I acknowledge that these changes would require significant investment in training faculty members and redesigning course structures. Some professors may resist changing their traditional teaching methods. Nevertheless, I believe the long-term benefits of increased student engagement and improved learning outcomes would justify the initial effort and investment.",
            tips: "Cấu trúc: Mô tả vấn đề → Nguyên nhân → Giải pháp 1 + lý do → Giải pháp 2 + lý do → Thách thức → Kết luận."
          }
        ]
      },
      {
        id: 3,
        title: "Part 3: Topic Development",
        titleVi: "Phần 3: Phát triển Chủ đề",
        time: 5,
        instructions: "You will discuss a topic in more depth with the examiner. Express and justify your opinions, evaluate arguments, and speculate about future developments.",
        instructionsVi: "Bạn sẽ thảo luận sâu hơn về một chủ đề với giám khảo. Trình bày và lập luận quan điểm, đánh giá các lý lẽ, và suy đoán về phát triển tương lai.",
        questions: [
          {
            id: 5,
            question: "Do you think technology has made education more accessible or has it created a digital divide?",
            questionVi: "Bạn nghĩ công nghệ đã làm giáo dục dễ tiếp cận hơn hay tạo ra khoảng cách số?",
            sampleResponse: "I think technology has had a dual effect on education accessibility. On one hand, platforms like Coursera, Khan Academy, and YouTube have democratized knowledge by making high-quality educational content available to anyone with an internet connection. This is particularly beneficial for people in remote areas or developing countries who previously had limited access to educational resources.\n\nHowever, there is a significant digital divide that cannot be ignored. Not all students have equal access to reliable internet connections, modern devices, or a suitable study environment at home. During the pandemic, many students in rural areas of Vietnam struggled to participate in online classes because of poor connectivity. This inequality risks widening the gap between privileged and disadvantaged students.\n\nLooking ahead, I believe governments and educational institutions need to invest more heavily in digital infrastructure, particularly in underserved communities. Programs that provide subsidized devices and internet access to low-income students could help bridge this divide and ensure that technology serves as an equalizer rather than a barrier.",
            tips: "Phân tích đa chiều: đưa ra cả mặt tích cực và tiêu cực, có ví dụ cụ thể."
          },
          {
            id: 6,
            question: "In your opinion, what skills will be most important for graduates in the next 10 years?",
            questionVi: "Theo bạn, kỹ năng nào sẽ quan trọng nhất cho sinh viên tốt nghiệp trong 10 năm tới?",
            sampleResponse: "I believe that three sets of skills will be particularly crucial for graduates in the coming decade. First, digital literacy and data analysis skills will be essential across virtually all industries. As businesses increasingly rely on data-driven decision-making, graduates who can interpret data, use analytical tools, and understand artificial intelligence will have a significant competitive advantage.\n\nSecond, adaptability and continuous learning will become indispensable. The pace of technological change means that specific technical skills may become obsolete within a few years. Graduates who demonstrate a growth mindset and the ability to quickly acquire new competencies will thrive in this rapidly evolving landscape.\n\nThird, I think cross-cultural communication and collaboration skills will be increasingly important as workplaces become more globalized and diverse. The ability to work effectively with people from different backgrounds, both in person and virtually, will be a key differentiator in the job market.\n\nOf these three areas, I would argue that adaptability is the most fundamental, as it underpins the ability to develop all other skills throughout one's career.",
            tips: "Nêu 3 kỹ năng cụ thể, mỗi kỹ năng có giải thích và ví dụ."
          }
        ]
      }
    ]
  },

  // ==============================
  // ACADEMIC VOCABULARY by Topic (B2 Level)
  // ==============================
  vocabulary: {
    topics: [
      {
        id: "education",
        name: "Giáo dục (Education)",
        icon: "🎓",
        words: [
          { word: "curriculum", ipa: "/kəˈrɪkjələm/", pos: "noun", meaning: "Chương trình giảng dạy", example: "The university has revised its curriculum to include more practical courses." },
          { word: "pedagogy", ipa: "/ˈpedəɡɒdʒi/", pos: "noun", meaning: "Phương pháp sư phạm", example: "Modern pedagogy emphasizes student-centered learning approaches." },
          { word: "assessment", ipa: "/əˈsesmənt/", pos: "noun", meaning: "Đánh giá, kiểm tra", example: "Continuous assessment is more effective than a single final exam." },
          { word: "dissertation", ipa: "/ˌdɪsəˈteɪʃn/", pos: "noun", meaning: "Luận văn", example: "She is working on her doctoral dissertation about climate change." },
          { word: "accreditation", ipa: "/əˌkredɪˈteɪʃn/", pos: "noun", meaning: "Kiểm định chất lượng", example: "The program received international accreditation last year." },
          { word: "enrollment", ipa: "/ɪnˈroʊlmənt/", pos: "noun", meaning: "Tuyển sinh, ghi danh", example: "University enrollment has increased by 15% this year." },
          { word: "scholarship", ipa: "/ˈskɒləʃɪp/", pos: "noun", meaning: "Học bổng", example: "She received a full scholarship for her outstanding academic performance." },
          { word: "thesis", ipa: "/ˈθiːsɪs/", pos: "noun", meaning: "Luận văn, luận điểm", example: "His thesis examines the effects of social media on youth." },
          { word: "seminar", ipa: "/ˈsemɪnɑːr/", pos: "noun", meaning: "Hội thảo chuyên đề", example: "The professor conducts weekly seminars on research methodology." },
          { word: "plagiarism", ipa: "/ˈpleɪdʒərɪzəm/", pos: "noun", meaning: "Đạo văn", example: "Plagiarism is considered a serious academic offense." }
        ]
      },
      {
        id: "economics",
        name: "Kinh tế (Economics)",
        icon: "📊",
        words: [
          { word: "inflation", ipa: "/ɪnˈfleɪʃn/", pos: "noun", meaning: "Lạm phát", example: "The central bank raised interest rates to control inflation." },
          { word: "fiscal policy", ipa: "/ˈfɪskl ˈpɒləsi/", pos: "noun phrase", meaning: "Chính sách tài khóa", example: "The government implemented new fiscal policies to stimulate economic growth." },
          { word: "subsidy", ipa: "/ˈsʌbsədi/", pos: "noun", meaning: "Trợ cấp", example: "Agricultural subsidies help farmers maintain competitive prices." },
          { word: "GDP (Gross Domestic Product)", ipa: "/ˌdʒiː diː ˈpiː/", pos: "noun", meaning: "Tổng sản phẩm quốc nội", example: "Vietnam's GDP growth rate has been consistently above 6%." },
          { word: "trade deficit", ipa: "/treɪd ˈdefɪsɪt/", pos: "noun phrase", meaning: "Thâm hụt thương mại", example: "The country is trying to reduce its trade deficit with China." },
          { word: "privatization", ipa: "/ˌpraɪvətaɪˈzeɪʃn/", pos: "noun", meaning: "Tư nhân hóa", example: "The privatization of state-owned enterprises has attracted foreign investment." },
          { word: "revenue", ipa: "/ˈrevənjuː/", pos: "noun", meaning: "Doanh thu", example: "Government revenue from taxation increased by 8% last year." },
          { word: "monopoly", ipa: "/məˈnɒpəli/", pos: "noun", meaning: "Độc quyền", example: "The new law aims to prevent monopolies in the telecommunications sector." },
          { word: "recession", ipa: "/rɪˈseʃn/", pos: "noun", meaning: "Suy thoái kinh tế", example: "Many countries experienced a recession during the global financial crisis." },
          { word: "entrepreneur", ipa: "/ˌɒntrəprəˈnɜːr/", pos: "noun", meaning: "Doanh nhân, người khởi nghiệp", example: "Young entrepreneurs are driving innovation in the technology sector." }
        ]
      },
      {
        id: "environment",
        name: "Môi trường (Environment)",
        icon: "🌍",
        words: [
          { word: "sustainability", ipa: "/səˌsteɪnəˈbɪləti/", pos: "noun", meaning: "Tính bền vững", example: "Sustainability should be at the core of urban development plans." },
          { word: "biodiversity", ipa: "/ˌbaɪoʊdaɪˈvɜːrsəti/", pos: "noun", meaning: "Đa dạng sinh học", example: "Deforestation threatens the biodiversity of tropical rainforests." },
          { word: "carbon footprint", ipa: "/ˈkɑːrbən ˈfʊtprɪnt/", pos: "noun phrase", meaning: "Dấu chân carbon", example: "Individuals can reduce their carbon footprint by using public transport." },
          { word: "ecosystem", ipa: "/ˈiːkoʊsɪstəm/", pos: "noun", meaning: "Hệ sinh thái", example: "Coral reefs are among the most productive ecosystems on Earth." },
          { word: "renewable energy", ipa: "/rɪˈnjuːəbl ˈenərdʒi/", pos: "noun phrase", meaning: "Năng lượng tái tạo", example: "Vietnam is investing heavily in renewable energy sources like solar and wind." },
          { word: "deforestation", ipa: "/ˌdiːˌfɒrɪˈsteɪʃn/", pos: "noun", meaning: "Phá rừng", example: "Deforestation contributes significantly to global greenhouse gas emissions." },
          { word: "pollution", ipa: "/pəˈluːʃn/", pos: "noun", meaning: "Ô nhiễm", example: "Air pollution in major cities has reached alarming levels." },
          { word: "conservation", ipa: "/ˌkɒnsəˈveɪʃn/", pos: "noun", meaning: "Bảo tồn", example: "Wildlife conservation efforts have helped increase the tiger population." },
          { word: "emission", ipa: "/ɪˈmɪʃn/", pos: "noun", meaning: "Khí thải", example: "Governments must reduce carbon emissions to combat climate change." },
          { word: "urbanization", ipa: "/ˌɜːrbənaɪˈzeɪʃn/", pos: "noun", meaning: "Đô thị hóa", example: "Rapid urbanization has put pressure on housing and infrastructure." }
        ]
      },
      {
        id: "technology",
        name: "Công nghệ (Technology)",
        icon: "💻",
        words: [
          { word: "artificial intelligence", ipa: "/ˌɑːrtɪˈfɪʃl ɪnˈtelɪdʒəns/", pos: "noun phrase", meaning: "Trí tuệ nhân tạo", example: "Artificial intelligence is transforming healthcare diagnostics." },
          { word: "algorithm", ipa: "/ˈælɡərɪðəm/", pos: "noun", meaning: "Thuật toán", example: "Social media algorithms determine what content users see." },
          { word: "cybersecurity", ipa: "/ˌsaɪbərsɪˈkjʊərəti/", pos: "noun", meaning: "An ninh mạng", example: "Companies must invest in cybersecurity to protect sensitive data." },
          { word: "automation", ipa: "/ˌɔːtəˈmeɪʃn/", pos: "noun", meaning: "Tự động hóa", example: "Automation has increased productivity in manufacturing industries." },
          { word: "digital literacy", ipa: "/ˈdɪdʒɪtl ˈlɪtərəsi/", pos: "noun phrase", meaning: "Kỹ năng số", example: "Digital literacy is now a prerequisite for most professional jobs." },
          { word: "blockchain", ipa: "/ˈblɒktʃeɪn/", pos: "noun", meaning: "Chuỗi khối", example: "Blockchain technology ensures transparent and secure financial transactions." },
          { word: "cloud computing", ipa: "/klaʊd kəmˈpjuːtɪŋ/", pos: "noun phrase", meaning: "Điện toán đám mây", example: "Cloud computing has reduced IT infrastructure costs for businesses." },
          { word: "data privacy", ipa: "/ˈdeɪtə ˈprɪvəsi/", pos: "noun phrase", meaning: "Quyền riêng tư dữ liệu", example: "Data privacy regulations like GDPR protect personal information." },
          { word: "innovation", ipa: "/ˌɪnəˈveɪʃn/", pos: "noun", meaning: "Sự đổi mới, sáng tạo", example: "Technological innovation drives economic growth in developing nations." },
          { word: "infrastructure", ipa: "/ˈɪnfrəstrʌktʃər/", pos: "noun", meaning: "Cơ sở hạ tầng", example: "The government is upgrading digital infrastructure in rural areas." }
        ]
      }
    ]
  },

  // ==============================
  // MOCK TEST Configuration
  // ==============================
  mockTestConfig: {
    totalTime: 180, // minutes total for full test
    sections: [
      { skill: "listening", time: 40, questions: 35 },
      { skill: "reading", time: 60, questions: 40 },
      { skill: "writing", time: 60, questions: 2 },
      { skill: "speaking", time: 12, questions: 6 }
    ],
    scoring: {
      // VSTEP B2 scoring: need >= 6/10 in each skill
      passingScore: 6.0,
      maxScore: 10.0,
      listeningScale: (correct, total) => ((correct / total) * 10).toFixed(1),
      readingScale: (correct, total) => ((correct / total) * 10).toFixed(1)
    }
  }
};
