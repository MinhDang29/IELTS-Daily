// ============================================
// CONVERSATION DIALOGUES DATA
// 20 bài hội thoại A & B với dịch tiếng Việt
// ============================================

const conversationData = [
  // ── 1. HOTEL BOOKING ──
  {
    id: 1,
    title: "Hotel Booking",
    titleVi: "Đặt Phòng Khách Sạn",
    icon: "🏨",
    roleA: "Guest (Khách)",
    roleB: "Receptionist (Lễ tân)",
    level: "Easy",
    lines: [
      { role: "A", en: "Good afternoon. I'd like to book a room, please.", vi: "Xin chào buổi chiều. Tôi muốn đặt phòng ạ." },
      { role: "B", en: "Good afternoon, sir. What type of room would you prefer?", vi: "Xin chào buổi chiều, thưa ông. Ông muốn loại phòng nào ạ?" },
      { role: "A", en: "I'd like a double room with a sea view, if possible.", vi: "Tôi muốn phòng đôi có view biển, nếu được." },
      { role: "B", en: "Certainly. How many nights will you be staying?", vi: "Dạ được ạ. Ông ở lại bao nhiêu đêm ạ?" },
      { role: "A", en: "Three nights, from this Friday to Monday.", vi: "Ba đêm, từ thứ Sáu này đến thứ Hai." },
      { role: "B", en: "Let me check availability... Yes, we have a room available. It's $120 per night.", vi: "Để tôi kiểm tra... Vâng, chúng tôi có phòng trống. Giá $120 một đêm ạ." },
      { role: "A", en: "Does that include breakfast?", vi: "Giá đó có bao gồm bữa sáng không?" },
      { role: "B", en: "Yes, it includes a buffet breakfast from 6:30 to 10:00 AM.", vi: "Có ạ, bao gồm bữa sáng buffet từ 6:30 đến 10:00 sáng." },
      { role: "A", en: "That sounds great. I'll take it. Can I pay by credit card?", vi: "Nghe tuyệt vời. Tôi lấy phòng đó. Tôi có thể thanh toán bằng thẻ tín dụng không?" },
      { role: "B", en: "Of course. May I have your name and passport, please?", vi: "Tất nhiên ạ. Xin cho tôi tên và hộ chiếu của ông ạ?" },
      { role: "A", en: "Here you go. My name is David Nguyen.", vi: "Đây ạ. Tên tôi là David Nguyễn." },
      { role: "B", en: "Thank you, Mr. Nguyen. Your room number is 507. Here's your key card. Enjoy your stay!", vi: "Cảm ơn ông Nguyễn. Phòng của ông là số 507. Đây là thẻ chìa khóa. Chúc ông ở vui vẻ!" }
    ]
  },

  // ── 2. RESTAURANT ORDERING ──
  {
    id: 2,
    title: "Restaurant Ordering",
    titleVi: "Gọi Món Nhà Hàng",
    icon: "🍽️",
    roleA: "Customer (Khách hàng)",
    roleB: "Waiter (Phục vụ)",
    level: "Easy",
    lines: [
      { role: "B", en: "Good evening! Welcome to La Bella. A table for two?", vi: "Xin chào buổi tối! Chào mừng đến La Bella. Bàn cho hai người ạ?" },
      { role: "A", en: "Yes, please. Could we sit near the window?", vi: "Vâng, cho tôi xin. Chúng tôi ngồi gần cửa sổ được không?" },
      { role: "B", en: "Of course! Right this way. Here are the menus.", vi: "Được ạ! Mời đi lối này. Đây là thực đơn ạ." },
      { role: "A", en: "Thank you. What do you recommend tonight?", vi: "Cảm ơn. Tối nay bạn giới thiệu món gì?" },
      { role: "B", en: "Our grilled salmon with lemon butter sauce is very popular.", vi: "Món cá hồi nướng sốt bơ chanh của chúng tôi rất được ưa chuộng ạ." },
      { role: "A", en: "That sounds delicious. I'll have that. And my wife will have the pasta.", vi: "Nghe ngon quá. Cho tôi món đó. Và vợ tôi sẽ dùng mì ý." },
      { role: "B", en: "Excellent choice. Would you like anything to drink?", vi: "Lựa chọn tuyệt vời. Quý khách dùng gì uống ạ?" },
      { role: "A", en: "A glass of red wine for me and sparkling water for her, please.", vi: "Cho tôi một ly rượu vang đỏ và nước có ga cho cô ấy." },
      { role: "B", en: "Sure. Would you like any appetizers or a salad to start?", vi: "Dạ vâng. Quý khách có muốn khai vị hoặc salad không ạ?" },
      { role: "A", en: "Yes, we'll share the Caesar salad.", vi: "Có, chúng tôi sẽ chia nhau salad Caesar." },
      { role: "B", en: "Perfect. Your order will be ready in about 15 minutes.", vi: "Tuyệt vời. Món của quý khách sẽ sẵn sàng trong khoảng 15 phút ạ." },
      { role: "A", en: "Great, thank you very much!", vi: "Tuyệt, cảm ơn bạn rất nhiều!" }
    ]
  },

  // ── 3. AT THE AIRPORT ──
  {
    id: 3,
    title: "At the Airport",
    titleVi: "Tại Sân Bay",
    icon: "✈️",
    roleA: "Passenger (Hành khách)",
    roleB: "Check-in Agent (Nhân viên check-in)",
    level: "Medium",
    lines: [
      { role: "A", en: "Hello, I'm checking in for the 3 PM flight to London.", vi: "Xin chào, tôi check-in chuyến bay 3 giờ chiều đi London." },
      { role: "B", en: "Sure. Can I see your passport and booking confirmation, please?", vi: "Dạ vâng. Cho tôi xem hộ chiếu và xác nhận đặt vé ạ?" },
      { role: "A", en: "Here they are. I booked online last week.", vi: "Đây ạ. Tôi đặt trực tuyến tuần trước." },
      { role: "B", en: "Thank you. Would you prefer a window or an aisle seat?", vi: "Cảm ơn. Ông thích ghế cửa sổ hay ghế lối đi ạ?" },
      { role: "A", en: "A window seat, please. And could I get an exit row for extra legroom?", vi: "Ghế cửa sổ ạ. Và tôi có thể ngồi hàng thoát hiểm để rộng chân hơn không?" },
      { role: "B", en: "Let me check... Yes, seat 14A is available. How many bags are you checking in?", vi: "Để tôi kiểm tra... Vâng, ghế 14A còn trống. Ông gửi bao nhiêu hành lý ạ?" },
      { role: "A", en: "Just one suitcase and one carry-on bag.", vi: "Chỉ một vali và một túi xách tay." },
      { role: "B", en: "Please place your suitcase on the scale. It's 22 kilos — within the limit.", vi: "Xin đặt vali lên cân ạ. 22 ký — trong giới hạn cho phép." },
      { role: "A", en: "What time does boarding start?", vi: "Mấy giờ bắt đầu lên máy bay?" },
      { role: "B", en: "Boarding begins at 2:30 PM at Gate B7. Here's your boarding pass.", vi: "Lên máy bay bắt đầu lúc 2:30 chiều tại cửa B7. Đây là thẻ lên máy bay của ông." },
      { role: "A", en: "Thank you. Is there a lounge I can use before the flight?", vi: "Cảm ơn. Có phòng chờ VIP nào tôi có thể dùng trước chuyến bay không?" },
      { role: "B", en: "Yes, the business lounge is on the second floor, past security. Have a pleasant flight!", vi: "Có ạ, phòng chờ thương gia ở tầng hai, qua khu an ninh. Chúc ông chuyến bay tốt đẹp!" }
    ]
  },

  // ── 4. TAKING A TAXI ──
  {
    id: 4,
    title: "Taking a Taxi",
    titleVi: "Đi Taxi",
    icon: "🚕",
    roleA: "Passenger (Hành khách)",
    roleB: "Taxi Driver (Tài xế taxi)",
    level: "Easy",
    lines: [
      { role: "A", en: "Hi, could you take me to the Central Station, please?", vi: "Xin chào, anh cho tôi đến ga Trung tâm được không?" },
      { role: "B", en: "Sure, hop in. Do you know the fastest route from here?", vi: "Được, mời lên xe. Anh có biết đường nào nhanh nhất từ đây không?" },
      { role: "A", en: "I'm not from around here. Just take the quickest way, please.", vi: "Tôi không phải người ở đây. Anh đi đường nhanh nhất nhé." },
      { role: "B", en: "No problem. There's a bit of traffic now, so I'll take the highway. It should take about 20 minutes.", vi: "Không vấn đề. Bây giờ hơi kẹt xe nên tôi sẽ đi đường cao tốc. Khoảng 20 phút ạ." },
      { role: "A", en: "That's fine. How much will it cost approximately?", vi: "Được. Khoảng bao nhiêu tiền vậy anh?" },
      { role: "B", en: "It should be around $15 to $18, depending on traffic.", vi: "Khoảng $15 đến $18, tùy tình hình giao thông." },
      { role: "A", en: "Can I pay by card or do you only accept cash?", vi: "Tôi trả bằng thẻ được không hay chỉ nhận tiền mặt?" },
      { role: "B", en: "We accept both card and cash. No worries.", vi: "Chúng tôi nhận cả thẻ lẫn tiền mặt. Đừng lo." },
      { role: "A", en: "Great. Could you also turn on the air conditioning, please?", vi: "Tuyệt. Anh bật điều hòa được không ạ?" },
      { role: "B", en: "Of course. Here we are — Central Station. That'll be $16.50.", vi: "Được ạ. Tới rồi — ga Trung tâm. Hết $16.50 ạ." },
      { role: "A", en: "Here's $20. Keep the change.", vi: "Đây $20. Anh giữ tiền thừa nhé." },
      { role: "B", en: "Thank you very much! Have a good day!", vi: "Cảm ơn anh nhiều! Chúc anh một ngày tốt lành!" }
    ]
  },

  // ── 5. SHOPPING FOR CLOTHES ──
  {
    id: 5,
    title: "Shopping for Clothes",
    titleVi: "Mua Sắm Quần Áo",
    icon: "👗",
    roleA: "Customer (Khách hàng)",
    roleB: "Shop Assistant (Nhân viên cửa hàng)",
    level: "Easy",
    lines: [
      { role: "B", en: "Good morning! Can I help you find something today?", vi: "Chào buổi sáng! Tôi có thể giúp bạn tìm gì không?" },
      { role: "A", en: "Yes, I'm looking for a formal shirt for a job interview.", vi: "Vâng, tôi đang tìm áo sơ mi trang trọng để đi phỏng vấn xin việc." },
      { role: "B", en: "What size do you wear? And do you have a color preference?", vi: "Bạn mặc size bao nhiêu? Bạn có thích màu nào không?" },
      { role: "A", en: "I'm a medium. I'd prefer something in light blue or white.", vi: "Tôi mặc size M. Tôi thích màu xanh nhạt hoặc trắng." },
      { role: "B", en: "We have some great options. How about this slim-fit one? It's very popular.", vi: "Chúng tôi có vài mẫu rất đẹp. Mẫu ôm sát này thì sao? Rất được ưa chuộng đấy." },
      { role: "A", en: "It looks nice. Can I try it on?", vi: "Trông đẹp đấy. Tôi thử được không?" },
      { role: "B", en: "Of course! The fitting rooms are right over there.", vi: "Tất nhiên! Phòng thử đồ ở ngay đằng kia." },
      { role: "A", en: "It fits perfectly. How much is it?", vi: "Vừa quá. Bao nhiêu tiền vậy?" },
      { role: "B", en: "It's $45, but we have a 20% discount today. So it's $36.", vi: "Giá $45, nhưng hôm nay giảm 20%. Nên chỉ còn $36 thôi." },
      { role: "A", en: "That's a good deal! I'll take it. Do you have matching pants?", vi: "Giá tốt quá! Tôi lấy. Bạn có quần tây phối không?" },
      { role: "B", en: "Yes! These dark navy pants would go perfectly with the shirt.", vi: "Có! Quần tây xanh đen này phối rất hợp với áo đó." },
      { role: "A", en: "I'll take both. Can you wrap them up for me?", vi: "Tôi lấy cả hai. Bạn gói lại giùm tôi nhé?" }
    ]
  },

  // ── 6. DOCTOR'S APPOINTMENT ──
  {
    id: 6,
    title: "Doctor's Appointment",
    titleVi: "Khám Bệnh",
    icon: "🏥",
    roleA: "Patient (Bệnh nhân)",
    roleB: "Doctor (Bác sĩ)",
    level: "Medium",
    lines: [
      { role: "B", en: "Good morning. Please have a seat. What seems to be the problem?", vi: "Chào buổi sáng. Mời ngồi. Bạn thấy vấn đề gì ạ?" },
      { role: "A", en: "Good morning, doctor. I've had a terrible headache for the past three days.", vi: "Chào buổi sáng, bác sĩ. Tôi bị đau đầu dữ dội suốt ba ngày qua." },
      { role: "B", en: "I see. Have you had any fever or dizziness along with it?", vi: "Tôi hiểu. Bạn có bị sốt hay chóng mặt kèm theo không?" },
      { role: "A", en: "Yes, I've felt a bit dizzy in the mornings, but no fever.", vi: "Có, tôi hơi chóng mặt vào buổi sáng, nhưng không sốt." },
      { role: "B", en: "Have you been getting enough sleep? How many hours per night?", vi: "Bạn có ngủ đủ giấc không? Mỗi đêm bao nhiêu tiếng?" },
      { role: "A", en: "Honestly, only about 4 to 5 hours. I've been very stressed at work.", vi: "Thành thật mà nói, chỉ khoảng 4 đến 5 tiếng. Tôi rất căng thẳng ở công việc." },
      { role: "B", en: "That's likely the cause. Lack of sleep and stress can trigger severe headaches.", vi: "Đó có thể là nguyên nhân. Thiếu ngủ và căng thẳng có thể gây đau đầu nặng." },
      { role: "A", en: "Should I take any medication?", vi: "Tôi có cần uống thuốc gì không?" },
      { role: "B", en: "I'll prescribe some pain relief. But more importantly, try to sleep at least 7 hours.", vi: "Tôi sẽ kê đơn thuốc giảm đau. Nhưng quan trọng hơn, hãy cố ngủ ít nhất 7 tiếng." },
      { role: "A", en: "I understand. Is there anything else I should do?", vi: "Tôi hiểu. Có điều gì khác tôi nên làm không?" },
      { role: "B", en: "Drink plenty of water, avoid screens before bed, and try some light exercise.", vi: "Uống nhiều nước, tránh nhìn màn hình trước khi ngủ, và tập thể dục nhẹ." },
      { role: "A", en: "Thank you, doctor. I'll follow your advice.", vi: "Cảm ơn bác sĩ. Tôi sẽ làm theo lời khuyên." }
    ]
  },

  // ── 7. AT THE BANK ──
  {
    id: 7,
    title: "At the Bank",
    titleVi: "Tại Ngân Hàng",
    icon: "🏦",
    roleA: "Customer (Khách hàng)",
    roleB: "Bank Teller (Giao dịch viên)",
    level: "Medium",
    lines: [
      { role: "A", en: "Hello, I'd like to open a savings account.", vi: "Xin chào, tôi muốn mở tài khoản tiết kiệm." },
      { role: "B", en: "Sure. Do you already have an account with us?", vi: "Dạ vâng. Anh đã có tài khoản ở ngân hàng chúng tôi chưa?" },
      { role: "A", en: "No, this is my first time. What do I need to bring?", vi: "Chưa, đây là lần đầu tiên. Tôi cần mang theo gì?" },
      { role: "B", en: "You'll need your ID or passport, proof of address, and an initial deposit of at least $50.", vi: "Anh cần mang CMND hoặc hộ chiếu, giấy xác nhận địa chỉ, và khoản gửi ban đầu ít nhất $50." },
      { role: "A", en: "I have everything here. What's the interest rate for savings?", vi: "Tôi có đủ hết rồi. Lãi suất tiết kiệm là bao nhiêu?" },
      { role: "B", en: "Currently, our annual interest rate is 3.5% for a 12-month fixed deposit.", vi: "Hiện tại, lãi suất hàng năm là 3.5% cho khoản gửi cố định 12 tháng." },
      { role: "A", en: "Can I withdraw money before the 12 months are up?", vi: "Tôi có thể rút tiền trước khi đủ 12 tháng không?" },
      { role: "B", en: "Yes, but you'll lose some interest if you withdraw early.", vi: "Được, nhưng anh sẽ mất một phần lãi nếu rút sớm." },
      { role: "A", en: "I understand. I'd like to deposit $500 to start.", vi: "Tôi hiểu. Tôi muốn gửi $500 để bắt đầu." },
      { role: "B", en: "Great. Please fill out this form and sign here.", vi: "Tuyệt vời. Xin vui lòng điền vào mẫu này và ký tên ở đây." },
      { role: "A", en: "Done. How long will it take to activate the account?", vi: "Xong rồi. Bao lâu thì tài khoản được kích hoạt?" },
      { role: "B", en: "It will be active within 24 hours. You'll receive a confirmation email. Thank you!", vi: "Sẽ kích hoạt trong vòng 24 giờ. Anh sẽ nhận email xác nhận. Cảm ơn anh!" }
    ]
  },

  // ── 8. POST OFFICE ──
  {
    id: 8,
    title: "At the Post Office",
    titleVi: "Tại Bưu Điện",
    icon: "📮",
    roleA: "Customer (Khách hàng)",
    roleB: "Postal Clerk (Nhân viên bưu điện)",
    level: "Easy",
    lines: [
      { role: "A", en: "Hi, I need to send this package to Vietnam.", vi: "Xin chào, tôi cần gửi bưu kiện này đến Việt Nam." },
      { role: "B", en: "Sure. Let me weigh it first. It's 2.3 kilograms.", vi: "Dạ vâng. Để tôi cân trước. Nặng 2.3 ký ạ." },
      { role: "A", en: "How long will it take to arrive?", vi: "Bao lâu thì đến nơi?" },
      { role: "B", en: "Standard shipping takes about 10 to 14 business days. Express is 3 to 5 days.", vi: "Gửi thường mất khoảng 10 đến 14 ngày làm việc. Gửi nhanh 3 đến 5 ngày." },
      { role: "A", en: "How much is the express option?", vi: "Gửi nhanh bao nhiêu tiền?" },
      { role: "B", en: "Express to Vietnam for this weight is $35. Standard is $12.", vi: "Gửi nhanh đến Việt Nam với cân nặng này là $35. Gửi thường là $12." },
      { role: "A", en: "I'll go with express. It's a birthday gift, so I need it to arrive soon.", vi: "Tôi chọn gửi nhanh. Đây là quà sinh nhật nên tôi cần đến sớm." },
      { role: "B", en: "Understood. Would you like to add insurance for the package?", vi: "Tôi hiểu. Anh có muốn mua bảo hiểm cho bưu kiện không?" },
      { role: "A", en: "Yes, please. How much is insurance?", vi: "Có, cho tôi mua. Bảo hiểm bao nhiêu?" },
      { role: "B", en: "It's an additional $5 for coverage up to $200.", vi: "Thêm $5 cho mức bảo hiểm tới $200." },
      { role: "A", en: "That's fine. Here's my credit card.", vi: "Được rồi. Đây là thẻ tín dụng của tôi." },
      { role: "B", en: "All done! Here's your tracking number. You can track it online.", vi: "Xong rồi! Đây là mã theo dõi. Anh có thể theo dõi trực tuyến ạ." }
    ]
  },

  // ── 9. JOB INTERVIEW ──
  {
    id: 9,
    title: "Job Interview",
    titleVi: "Phỏng Vấn Xin Việc",
    icon: "💼",
    roleA: "Candidate (Ứng viên)",
    roleB: "Interviewer (Người phỏng vấn)",
    level: "Hard",
    lines: [
      { role: "B", en: "Good morning! Please have a seat. Thank you for coming in today.", vi: "Chào buổi sáng! Mời ngồi. Cảm ơn bạn đã đến hôm nay." },
      { role: "A", en: "Good morning. Thank you for giving me this opportunity.", vi: "Chào buổi sáng. Cảm ơn anh/chị đã cho tôi cơ hội này." },
      { role: "B", en: "So, tell me a little about yourself and your work experience.", vi: "Vậy, hãy kể cho tôi nghe về bản thân và kinh nghiệm làm việc của bạn." },
      { role: "A", en: "I graduated with a degree in Marketing and have 3 years of experience in digital advertising.", vi: "Tôi tốt nghiệp ngành Marketing và có 3 năm kinh nghiệm quảng cáo số." },
      { role: "B", en: "That's impressive. Why are you interested in this position?", vi: "Ấn tượng đấy. Tại sao bạn quan tâm đến vị trí này?" },
      { role: "A", en: "I admire your company's innovation. I believe my skills can contribute to your marketing team.", vi: "Tôi ngưỡng mộ sự đổi mới của công ty. Tôi tin kỹ năng của mình có thể đóng góp cho đội marketing." },
      { role: "B", en: "What would you say is your greatest strength?", vi: "Bạn nghĩ điểm mạnh lớn nhất của mình là gì?" },
      { role: "A", en: "I'm very analytical. I enjoy using data to make decisions and improve campaigns.", vi: "Tôi rất có năng lực phân tích. Tôi thích dùng dữ liệu để đưa ra quyết định và cải thiện chiến dịch." },
      { role: "B", en: "And your weakness?", vi: "Còn điểm yếu của bạn?" },
      { role: "A", en: "I sometimes focus too much on details, but I've been working on managing my time better.", vi: "Đôi khi tôi quá chú trọng chi tiết, nhưng tôi đang cải thiện quản lý thời gian." },
      { role: "B", en: "Good answer. When could you start if we offer you the position?", vi: "Câu trả lời tốt. Bạn có thể bắt đầu khi nào nếu chúng tôi đề nghị vị trí này?" },
      { role: "A", en: "I can start within two weeks after giving notice to my current employer.", vi: "Tôi có thể bắt đầu trong vòng hai tuần sau khi báo cho công ty hiện tại." }
    ]
  },

  // ── 10. AT THE GYM ──
  {
    id: 10,
    title: "At the Gym",
    titleVi: "Tại Phòng Tập Gym",
    icon: "🏋️",
    roleA: "New Member (Thành viên mới)",
    roleB: "Trainer (Huấn luyện viên)",
    level: "Easy",
    lines: [
      { role: "A", en: "Hi, I just signed up. I'm not sure where to start.", vi: "Xin chào, tôi vừa đăng ký. Tôi không biết bắt đầu từ đâu." },
      { role: "B", en: "Welcome! I'm your personal trainer. Let's start with your fitness goals.", vi: "Chào mừng! Tôi là huấn luyện viên cá nhân của bạn. Hãy bắt đầu với mục tiêu thể dục nhé." },
      { role: "A", en: "I want to lose weight and build some muscle.", vi: "Tôi muốn giảm cân và tăng cơ." },
      { role: "B", en: "Great goals! How often can you come to the gym each week?", vi: "Mục tiêu tốt! Bạn có thể đến phòng gym mấy lần mỗi tuần?" },
      { role: "A", en: "About three or four times a week.", vi: "Khoảng ba hoặc bốn lần mỗi tuần." },
      { role: "B", en: "Perfect. I'll create a plan combining cardio and strength training.", vi: "Hoàn hảo. Tôi sẽ lập kế hoạch kết hợp cardio và tập sức mạnh." },
      { role: "A", en: "Should I change my diet too?", vi: "Tôi có cần thay đổi chế độ ăn không?" },
      { role: "B", en: "Definitely. Eat more protein and cut down on sugar and processed food.", vi: "Chắc chắn rồi. Ăn nhiều protein và giảm đường cùng thực phẩm chế biến sẵn." },
      { role: "A", en: "How long before I see results?", vi: "Bao lâu thì tôi thấy kết quả?" },
      { role: "B", en: "With consistency, you should see changes in about 4 to 6 weeks.", vi: "Nếu kiên trì, bạn sẽ thấy thay đổi trong khoảng 4 đến 6 tuần." },
      { role: "A", en: "That's motivating! Let's start the first workout.", vi: "Thật có động lực! Bắt đầu buổi tập đầu tiên thôi." },
      { role: "B", en: "Let's go! We'll begin with a 10-minute warm-up on the treadmill.", vi: "Đi thôi! Chúng ta sẽ bắt đầu khởi động 10 phút trên máy chạy bộ." }
    ]
  },

  // ── 11. AT THE LIBRARY ──
  {
    id: 11,
    title: "At the Library",
    titleVi: "Tại Thư Viện",
    icon: "📚",
    roleA: "Student (Sinh viên)",
    roleB: "Librarian (Thủ thư)",
    level: "Easy",
    lines: [
      { role: "A", en: "Excuse me, I'm looking for books about British history.", vi: "Xin lỗi, tôi đang tìm sách về lịch sử nước Anh." },
      { role: "B", en: "History books are in Section C, second floor. Are you looking for a specific period?", vi: "Sách lịch sử ở khu C, tầng hai. Bạn tìm giai đoạn cụ thể nào không?" },
      { role: "A", en: "Yes, the Victorian era. It's for my university assignment.", vi: "Vâng, thời đại Victoria. Để làm bài tập đại học." },
      { role: "B", en: "I recommend 'The Age of Reform' by Asa Briggs. We have two copies.", vi: "Tôi giới thiệu cuốn 'The Age of Reform' của Asa Briggs. Chúng tôi có hai bản." },
      { role: "A", en: "Can I borrow it? How long can I keep it?", vi: "Tôi mượn được không? Giữ được bao lâu?" },
      { role: "B", en: "You can borrow up to 5 books for 3 weeks. Do you have a library card?", vi: "Bạn có thể mượn tối đa 5 cuốn trong 3 tuần. Bạn có thẻ thư viện chưa?" },
      { role: "A", en: "Not yet. How do I get one?", vi: "Chưa ạ. Làm thế nào để có thẻ?" },
      { role: "B", en: "Just bring your student ID to the front desk. It takes about 5 minutes.", vi: "Chỉ cần mang thẻ sinh viên đến quầy lễ tân. Mất khoảng 5 phút." },
      { role: "A", en: "Is there a quiet study area I can use?", vi: "Có khu học yên tĩnh nào tôi có thể dùng không?" },
      { role: "B", en: "Yes, the silent study zone is on the third floor. No phones or talking allowed.", vi: "Có, khu học yên lặng ở tầng ba. Không được dùng điện thoại hay nói chuyện." },
      { role: "A", en: "That's exactly what I need. Thank you so much!", vi: "Đó đúng là cái tôi cần. Cảm ơn rất nhiều!" },
      { role: "B", en: "You're welcome! Good luck with your assignment.", vi: "Không có gì! Chúc bạn may mắn với bài tập nhé." }
    ]
  },

  // ── 12. AT THE PHARMACY ──
  {
    id: 12,
    title: "At the Pharmacy",
    titleVi: "Tại Nhà Thuốc",
    icon: "💊",
    roleA: "Customer (Khách hàng)",
    roleB: "Pharmacist (Dược sĩ)",
    level: "Medium",
    lines: [
      { role: "A", en: "Hello, I have a prescription from my doctor. Can you fill it?", vi: "Xin chào, tôi có đơn thuốc từ bác sĩ. Bạn có thể bán cho tôi không?" },
      { role: "B", en: "Of course. Let me see... This is for antibiotics and pain relief. I'll prepare it now.", vi: "Tất nhiên. Để tôi xem... Đây là thuốc kháng sinh và giảm đau. Tôi sẽ chuẩn bị ngay." },
      { role: "A", en: "How should I take the antibiotics?", vi: "Tôi nên uống kháng sinh như thế nào?" },
      { role: "B", en: "Take one tablet three times a day, after meals. Complete the full 7-day course.", vi: "Uống một viên ba lần một ngày, sau bữa ăn. Phải uống đủ đợt 7 ngày." },
      { role: "A", en: "What about the pain relief?", vi: "Còn thuốc giảm đau thì sao?" },
      { role: "B", en: "Take one or two tablets when you feel pain, but no more than 6 tablets per day.", vi: "Uống một hoặc hai viên khi bạn cảm thấy đau, nhưng không quá 6 viên mỗi ngày." },
      { role: "A", en: "Are there any side effects I should know about?", vi: "Có tác dụng phụ nào tôi cần biết không?" },
      { role: "B", en: "The antibiotics may cause stomach upset. Take them with food to reduce this.", vi: "Kháng sinh có thể gây khó chịu dạ dày. Uống cùng thức ăn để giảm triệu chứng." },
      { role: "A", en: "Can I drink alcohol while taking these?", vi: "Tôi có thể uống rượu khi đang uống thuốc không?" },
      { role: "B", en: "No, you should avoid alcohol completely while on antibiotics.", vi: "Không, bạn nên tránh hoàn toàn rượu khi đang uống kháng sinh." },
      { role: "A", en: "Understood. How much is the total?", vi: "Tôi hiểu. Tổng cộng bao nhiêu?" },
      { role: "B", en: "That'll be $24.50. Take care and finish the entire course!", vi: "Tổng $24.50. Bạn giữ sức khỏe và uống hết đợt thuốc nhé!" }
    ]
  },

  // ── 13. RENTING A CAR ──
  {
    id: 13,
    title: "Renting a Car",
    titleVi: "Thuê Xe Ô Tô",
    icon: "🚗",
    roleA: "Customer (Khách hàng)",
    roleB: "Rental Agent (Nhân viên cho thuê xe)",
    level: "Medium",
    lines: [
      { role: "A", en: "Hello, I'd like to rent a car for the weekend.", vi: "Xin chào, tôi muốn thuê xe ô tô cuối tuần." },
      { role: "B", en: "Sure! What type of car are you looking for? We have sedans, SUVs, and compact cars.", vi: "Được ạ! Anh cần loại xe nào? Chúng tôi có sedan, SUV, và xe nhỏ gọn." },
      { role: "A", en: "An SUV would be great. We're going to the mountains.", vi: "Xe SUV thì tuyệt. Chúng tôi sẽ đi lên núi." },
      { role: "B", en: "We have a Toyota RAV4 available. It's $65 per day, including insurance.", vi: "Chúng tôi có Toyota RAV4 còn trống. $65 một ngày, bao gồm bảo hiểm." },
      { role: "A", en: "Does it come with a GPS navigation system?", vi: "Xe có hệ thống định vị GPS không?" },
      { role: "B", en: "Yes, GPS is included. We also provide a full tank of gas.", vi: "Có, GPS được tích hợp. Chúng tôi cũng cung cấp đầy bình xăng." },
      { role: "A", en: "Do I need to return it with a full tank?", vi: "Tôi có cần trả xe với bình xăng đầy không?" },
      { role: "B", en: "Yes, please return it with a full tank, or we'll charge a refueling fee.", vi: "Có, xin trả xe với bình đầy, nếu không chúng tôi sẽ tính phí đổ xăng." },
      { role: "A", en: "Can I drop the car off at a different location?", vi: "Tôi có thể trả xe ở địa điểm khác không?" },
      { role: "B", en: "Yes, but there's an additional $30 drop-off fee for that.", vi: "Được, nhưng sẽ có phí trả xe khác địa điểm $30." },
      { role: "A", en: "That's fine. I'll rent it from Friday morning to Sunday evening.", vi: "Được rồi. Tôi thuê từ sáng thứ Sáu đến tối Chủ nhật." },
      { role: "B", en: "Great! That's 3 days, so $195 total. Please sign here and here's the key.", vi: "Tuyệt! 3 ngày, tổng cộng $195. Xin ký tên ở đây và đây là chìa khóa xe." }
    ]
  },

  // ── 14. TOURIST INFORMATION CENTER ──
  {
    id: 14,
    title: "Tourist Information",
    titleVi: "Trung Tâm Thông Tin Du Lịch",
    icon: "🗺️",
    roleA: "Tourist (Khách du lịch)",
    roleB: "Info Staff (Nhân viên tư vấn)",
    level: "Easy",
    lines: [
      { role: "A", en: "Hi, we just arrived in the city. What are the must-see attractions?", vi: "Xin chào, chúng tôi vừa đến thành phố. Có những điểm tham quan nào nhất định phải đến?" },
      { role: "B", en: "Welcome! The top attractions are the Old Town, the Royal Palace, and the Art Museum.", vi: "Chào mừng! Các điểm nổi bật nhất là Khu phố cổ, Cung điện Hoàng gia, và Bảo tàng Nghệ thuật." },
      { role: "A", en: "Can we visit all three in one day?", vi: "Chúng tôi có thể tham quan cả ba trong một ngày không?" },
      { role: "B", en: "Yes, if you start early. I'd suggest the Old Town in the morning, the Palace at noon, and the Museum in the afternoon.", vi: "Được, nếu đi sớm. Tôi gợi ý Khu phố cổ buổi sáng, Cung điện trưa, và Bảo tàng buổi chiều." },
      { role: "A", en: "Is there a city tour bus we can take?", vi: "Có xe buýt tham quan thành phố không?" },
      { role: "B", en: "Yes! The hop-on hop-off bus runs every 20 minutes. A day pass costs $25 per person.", vi: "Có! Xe buýt nhảy lên nhảy xuống chạy mỗi 20 phút. Vé ngày giá $25 mỗi người." },
      { role: "A", en: "That sounds convenient. Where can we buy the tickets?", vi: "Nghe tiện lợi quá. Mua vé ở đâu?" },
      { role: "B", en: "You can buy them right here, or online with a 10% discount.", vi: "Bạn có thể mua ngay đây, hoặc mua online giảm 10%." },
      { role: "A", en: "Can you recommend a good local restaurant nearby?", vi: "Bạn có thể giới thiệu nhà hàng địa phương ngon gần đây không?" },
      { role: "B", en: "Try 'The Local Kitchen' on Main Street. They serve traditional dishes at reasonable prices.", vi: "Hãy thử 'The Local Kitchen' trên đường Main. Họ phục vụ món truyền thống giá hợp lý." },
      { role: "A", en: "Thank you! Can we take this free map?", vi: "Cảm ơn! Chúng tôi lấy bản đồ miễn phí này được không?" },
      { role: "B", en: "Of course! Enjoy your stay. Feel free to come back if you need more help!", vi: "Tất nhiên! Chúc bạn ở vui vẻ. Cứ quay lại nếu cần thêm giúp đỡ nhé!" }
    ]
  },

  // ── 15. PHONE REPAIR SHOP ──
  {
    id: 15,
    title: "Phone Repair Shop",
    titleVi: "Cửa Hàng Sửa Điện Thoại",
    icon: "📱",
    roleA: "Customer (Khách hàng)",
    roleB: "Technician (Kỹ thuật viên)",
    level: "Medium",
    lines: [
      { role: "A", en: "Hi, my phone screen is cracked. Can you fix it?", vi: "Xin chào, màn hình điện thoại tôi bị nứt. Bạn sửa được không?" },
      { role: "B", en: "Let me take a look... It's a Samsung Galaxy S23. Yes, we can replace the screen.", vi: "Để tôi xem... Đây là Samsung Galaxy S23. Vâng, chúng tôi thay được màn hình." },
      { role: "A", en: "How much will the repair cost?", vi: "Phí sửa chữa bao nhiêu?" },
      { role: "B", en: "Screen replacement for this model is $150, with a 90-day warranty.", vi: "Thay màn hình cho dòng này giá $150, bảo hành 90 ngày." },
      { role: "A", en: "How long will it take?", vi: "Mất bao lâu?" },
      { role: "B", en: "About 2 hours. We have the part in stock.", vi: "Khoảng 2 tiếng. Chúng tôi có sẵn linh kiện." },
      { role: "A", en: "Will my data be safe? I haven't backed up my photos.", vi: "Dữ liệu của tôi có an toàn không? Tôi chưa sao lưu ảnh." },
      { role: "B", en: "Don't worry, your data should be fine. We only replace the screen, not the motherboard.", vi: "Đừng lo, dữ liệu sẽ an toàn. Chúng tôi chỉ thay màn hình, không thay bo mạch." },
      { role: "A", en: "Good. Can you also check the battery? It drains very quickly.", vi: "Tốt. Bạn kiểm tra pin giùm tôi được không? Pin hết rất nhanh." },
      { role: "B", en: "Sure. If the battery health is below 80%, I'd recommend replacing it too. That's an extra $40.", vi: "Được. Nếu sức khỏe pin dưới 80%, tôi khuyên nên thay luôn. Phí thêm $40." },
      { role: "A", en: "OK, check it and let me know. I'll come back in 2 hours.", vi: "OK, kiểm tra rồi báo tôi nhé. Tôi quay lại sau 2 tiếng." },
      { role: "B", en: "Got it. I'll text you when it's ready!", vi: "Được rồi. Tôi sẽ nhắn tin khi xong!" }
    ]
  },

  // ── 16. HAIR SALON ──
  {
    id: 16,
    title: "At the Hair Salon",
    titleVi: "Tại Tiệm Cắt Tóc",
    icon: "💇",
    roleA: "Customer (Khách hàng)",
    roleB: "Hairdresser (Thợ cắt tóc)",
    level: "Easy",
    lines: [
      { role: "B", en: "Welcome! Do you have an appointment, or are you a walk-in?", vi: "Chào mừng! Bạn có đặt lịch hay đến trực tiếp?" },
      { role: "A", en: "I don't have an appointment. Is there a wait?", vi: "Tôi không đặt lịch. Có phải chờ không?" },
      { role: "B", en: "Just about 10 minutes. Please have a seat. What would you like done today?", vi: "Chỉ khoảng 10 phút. Mời ngồi. Hôm nay bạn muốn làm gì?" },
      { role: "A", en: "I'd like a haircut and maybe dye it a lighter color.", vi: "Tôi muốn cắt tóc và có thể nhuộm màu sáng hơn." },
      { role: "B", en: "Any specific style in mind? Short on the sides, longer on top?", vi: "Bạn có kiểu tóc cụ thể nào không? Ngắn hai bên, dài trên đỉnh?" },
      { role: "A", en: "Yes, that sounds good. And I'd like a warm brown color.", vi: "Ừ, nghe hay đấy. Và tôi muốn màu nâu ấm." },
      { role: "B", en: "Great choice. A haircut is $25 and coloring starts at $50.", vi: "Lựa chọn tuyệt vời. Cắt tóc $25 và nhuộm từ $50." },
      { role: "A", en: "That's fine. Go ahead.", vi: "Được. Bắt đầu đi." },
      { role: "B", en: "Would you like to wash your hair first?", vi: "Bạn muốn gội đầu trước không?" },
      { role: "A", en: "Yes, please.", vi: "Có, cho tôi gội." },
      { role: "B", en: "All done! What do you think? Do you like the new look?", vi: "Xong rồi! Bạn thấy thế nào? Thích kiểu mới không?" },
      { role: "A", en: "I love it! It looks amazing. Thank you!", vi: "Tôi rất thích! Trông tuyệt vời. Cảm ơn bạn!" }
    ]
  },

  // ── 17. SUPERMARKET ──
  {
    id: 17,
    title: "At the Supermarket",
    titleVi: "Tại Siêu Thị",
    icon: "🛒",
    roleA: "Shopper (Người mua hàng)",
    roleB: "Staff (Nhân viên siêu thị)",
    level: "Easy",
    lines: [
      { role: "A", en: "Excuse me, where can I find the organic vegetables?", vi: "Xin lỗi, tôi tìm rau hữu cơ ở đâu?" },
      { role: "B", en: "They're in aisle 3, on the left side. We just restocked this morning.", vi: "Ở dãy 3, bên trái. Chúng tôi vừa nhập hàng sáng nay." },
      { role: "A", en: "Thanks. Do you also sell gluten-free bread?", vi: "Cảm ơn. Các bạn có bán bánh mì không gluten không?" },
      { role: "B", en: "Yes, the gluten-free section is in aisle 7. Look for the green labels.", vi: "Có, khu không gluten ở dãy 7. Tìm nhãn màu xanh lá." },
      { role: "A", en: "Is there a discount on dairy products today?", vi: "Hôm nay sản phẩm sữa có giảm giá không?" },
      { role: "B", en: "Yes! Buy two, get one free on all yogurts and milk.", vi: "Có! Mua hai tặng một cho tất cả sữa chua và sữa." },
      { role: "A", en: "That's a great deal. One more thing — where are the self-checkout machines?", vi: "Ưu đãi tốt quá. Thêm điều nữa — máy thanh toán tự động ở đâu?" },
      { role: "B", en: "They're near the main entrance, on the right side.", vi: "Ở gần cửa chính, bên phải." },
      { role: "A", en: "Can I use my own bags?", vi: "Tôi dùng túi tự mang theo được không?" },
      { role: "B", en: "Absolutely! We encourage bringing your own bags. You'll save 10 cents per bag.", vi: "Hoàn toàn được! Chúng tôi khuyến khích mang túi riêng. Bạn tiết kiệm 10 xu mỗi túi." },
      { role: "A", en: "Perfect. Thank you for your help!", vi: "Hoàn hảo. Cảm ơn bạn đã giúp!" },
      { role: "B", en: "You're welcome! Happy shopping!", vi: "Không có gì! Mua sắm vui nhé!" }
    ]
  },

  // ── 18. BUYING A MOVIE TICKET ──
  {
    id: 18,
    title: "Buying a Movie Ticket",
    titleVi: "Mua Vé Xem Phim",
    icon: "🎬",
    roleA: "Customer (Khách hàng)",
    roleB: "Ticket Seller (Nhân viên bán vé)",
    level: "Easy",
    lines: [
      { role: "A", en: "Hi, what movies are showing tonight?", vi: "Xin chào, tối nay chiếu phim gì?" },
      { role: "B", en: "We have three options: an action movie at 7 PM, a comedy at 7:30, and a horror film at 8.", vi: "Có ba lựa chọn: phim hành động lúc 7 giờ, phim hài lúc 7:30, và phim kinh dị lúc 8 giờ." },
      { role: "A", en: "I'd like two tickets for the comedy, please.", vi: "Cho tôi hai vé phim hài nhé." },
      { role: "B", en: "Sure. Would you like regular or VIP seats?", vi: "Dạ vâng. Bạn muốn ghế thường hay VIP?" },
      { role: "A", en: "What's the difference in price?", vi: "Chênh lệch giá bao nhiêu?" },
      { role: "B", en: "Regular seats are $10 each. VIP is $16 each with a bigger screen and reclining chairs.", vi: "Ghế thường $10 mỗi vé. VIP $16 mỗi vé với màn hình lớn hơn và ghế nằm." },
      { role: "A", en: "We'll go with VIP. Can we choose our seats?", vi: "Chúng tôi chọn VIP. Chọn chỗ ngồi được không?" },
      { role: "B", en: "Of course! Here's the seating chart. Rows D and E are the best.", vi: "Tất nhiên! Đây là sơ đồ chỗ ngồi. Hàng D và E là tốt nhất." },
      { role: "A", en: "We'll take D5 and D6. Can we also get a combo — popcorn and drinks?", vi: "Chúng tôi lấy D5 và D6. Cho thêm combo bỏng ngô và nước nhé?" },
      { role: "B", en: "Sure! The large combo is $12 — popcorn, two sodas, and nachos.", vi: "Được! Combo lớn $12 — bỏng ngô, hai nước ngọt, và nachos." },
      { role: "A", en: "Perfect. Here's my card.", vi: "Hoàn hảo. Đây là thẻ của tôi." },
      { role: "B", en: "That's $44 total. Enjoy the movie! Screen 3, second floor.", vi: "Tổng $44. Chúc xem phim vui! Phòng chiếu 3, tầng hai." }
    ]
  },

  // ── 19. REAL ESTATE / APARTMENT VIEWING ──
  {
    id: 19,
    title: "Apartment Viewing",
    titleVi: "Xem Căn Hộ Cho Thuê",
    icon: "🏠",
    roleA: "Tenant (Người thuê nhà)",
    roleB: "Landlord (Chủ nhà)",
    level: "Hard",
    lines: [
      { role: "A", en: "Hello, I saw your listing online. Is the apartment still available?", vi: "Xin chào, tôi thấy tin đăng trên mạng. Căn hộ còn trống không?" },
      { role: "B", en: "Yes, it is! Would you like to come and see it?", vi: "Có, vẫn còn! Bạn muốn đến xem không?" },
      { role: "A", en: "I'm here now. The location seems very convenient.", vi: "Tôi đang ở đây. Vị trí rất tiện lợi." },
      { role: "B", en: "Yes, it's close to the metro station, supermarkets, and a park.", vi: "Đúng vậy, gần ga tàu điện, siêu thị, và công viên." },
      { role: "A", en: "How many bedrooms does it have?", vi: "Căn hộ có bao nhiêu phòng ngủ?" },
      { role: "B", en: "It has two bedrooms, one bathroom, a living room, and a fully equipped kitchen.", vi: "Có hai phòng ngủ, một phòng tắm, phòng khách, và bếp đầy đủ tiện nghi." },
      { role: "A", en: "What's the monthly rent?", vi: "Tiền thuê hàng tháng bao nhiêu?" },
      { role: "B", en: "It's $800 per month, including water. Electricity is separate.", vi: "$800 mỗi tháng, bao gồm nước. Điện tính riêng." },
      { role: "A", en: "Is there a deposit required?", vi: "Có cần đặt cọc không?" },
      { role: "B", en: "Yes, two months' deposit upfront. It will be returned when you move out.", vi: "Có, cọc trước hai tháng tiền thuê. Sẽ hoàn lại khi bạn chuyển đi." },
      { role: "A", en: "Can I move in at the beginning of next month?", vi: "Tôi dọn vào đầu tháng tới được không?" },
      { role: "B", en: "Absolutely. Let's sign the contract this week. Welcome to your new home!", vi: "Hoàn toàn được. Chúng ta ký hợp đồng tuần này nhé. Chào mừng đến nhà mới!" }
    ]
  },

  // ── 20. ORDERING COFFEE ──
  {
    id: 20,
    title: "Ordering Coffee",
    titleVi: "Gọi Cà Phê",
    icon: "☕",
    roleA: "Customer (Khách hàng)",
    roleB: "Barista (Nhân viên pha chế)",
    level: "Easy",
    lines: [
      { role: "B", en: "Hi there! Welcome to Sunrise Café. What can I get for you today?", vi: "Xin chào! Chào mừng đến Sunrise Café. Hôm nay bạn dùng gì ạ?" },
      { role: "A", en: "Hi! Can I have a large iced latte with oat milk?", vi: "Xin chào! Cho tôi một ly latte đá lớn với sữa yến mạch được không?" },
      { role: "B", en: "Sure! Would you like any flavor syrup? We have vanilla, caramel, and hazelnut.", vi: "Được ạ! Bạn có muốn thêm syrup hương vị không? Có vanilla, caramel, và hạt dẻ." },
      { role: "A", en: "Caramel, please. And one pump is enough.", vi: "Caramel nhé. Và một lần bơm là đủ." },
      { role: "B", en: "Got it. Anything else? A pastry or sandwich maybe?", vi: "Được rồi. Cần gì thêm không? Bánh ngọt hay sandwich?" },
      { role: "A", en: "What do you recommend? I haven't had breakfast yet.", vi: "Bạn giới thiệu gì? Tôi chưa ăn sáng." },
      { role: "B", en: "Our croissant with ham and cheese is very popular. It's freshly baked!", vi: "Bánh sừng bò với giăm bông và phô mai rất được ưa chuộng. Mới nướng xong!" },
      { role: "A", en: "Sounds perfect. I'll have that too.", vi: "Nghe hoàn hảo. Cho tôi thêm cái đó." },
      { role: "B", en: "For here or to go?", vi: "Dùng tại đây hay mang đi?" },
      { role: "A", en: "To go, please. I'm heading to work.", vi: "Mang đi, cảm ơn. Tôi đang đi làm." },
      { role: "B", en: "That'll be $8.50 total. Would you like to pay by cash or card?", vi: "Tổng cộng $8.50. Bạn muốn trả tiền mặt hay thẻ?" },
      { role: "A", en: "Card, please. Thank you! Have a great day!", vi: "Thẻ nhé. Cảm ơn! Chúc bạn một ngày tốt đẹp!" }
    ]
  }
];
