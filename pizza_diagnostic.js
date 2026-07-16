/**
 * PIZZA 4P'S HALF & HALF DIAGNOSTIC TOOL
 * 
 * Tool này chạy bằng Playwright để chẩn đoán lỗi không hiển thị nửa bánh còn lại.
 * Nó sẽ ghi nhận toàn bộ:
 *  1. Network API requests/responses liên quan đến Half & Half
 *  2. Các lỗi JavaScript Console Error
 *  3. Chụp ảnh màn hình (screenshot) khi phát hiện lỗi
 * 
 * HƯỚNG DẪN CHẠY:
 *  1. Đảm bảo đã cài đặt Node.js
 *  2. Chạy lệnh: npm install playwright
 *  3. Chạy lệnh: node pizza_diagnostic.js
 */

const { chromium } = require('playwright');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Tạo thư mục lưu kết quả nếu chưa có
const outputDir = path.join(__dirname, 'pizza_diagnostic_results');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
const screenshotDir = path.join(outputDir, 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir);
}

// Helper để hỏi ý kiến người dùng qua Console
function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

(async () => {
  console.log('================================================================');
  console.log('🍕 KHỞI ĐỘNG CÔNG CỤ CHẨN ĐOÁN LỖI HALF & HALF PIZZA 4P\'S 🍕');
  console.log('================================================================');
  console.log('1. Mở trình duyệt Chrome...');
  
  const browser = await chromium.launch({
    headless: false, // Chạy giao diện để bạn dễ theo dõi và tương tác
    args: ['--start-maximized']
  });
  
  const context = await browser.newContext({
    viewport: null, // Sử dụng toàn bộ kích thước màn hình
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1' // Giả lập iPhone để giống giao diện khách hàng bị lỗi
  });

  const page = await context.newPage();
  
  // Lưu danh sách API requests và console errors để đối chiếu
  const networkLogs = [];
  const consoleErrors = [];

  // Lắng nghe các lỗi JavaScript trên giao diện
  page.on('pageerror', error => {
    console.error(`❌ [Console Error]: ${error.message}`);
    consoleErrors.push({
      time: new Date().toISOString(),
      message: error.message,
      stack: error.stack
    });
  });

  // Lắng nghe các console.error/warn
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`⚠️ [Browser Console]: ${msg.text()}`);
      consoleErrors.push({
        time: new Date().toISOString(),
        text: msg.text()
      });
    }
  });

  // Theo dõi toàn bộ API Network Requests/Responses
  page.on('response', async response => {
    const url = response.url();
    // Lọc các API gọi lên backend (chứa /api/, /graphql, /products, /combos hoặc strapi)
    if (url.includes('/api/') || url.includes('/graphql') || url.includes('strapi') || url.includes('products')) {
      const status = response.status();
      let responseBody = 'Could not parse response body';
      try {
        responseBody = await response.json();
      } catch (e) {
        try {
          responseBody = await response.text();
        } catch (err) {}
      }

      networkLogs.push({
        time: new Date().toISOString(),
        url: url,
        method: response.request().method(),
        status: status,
        payload: response.request().postData(),
        response: responseBody
      });

      if (status >= 400) {
        console.log(`❌ [API Error] Status ${status} - URL: ${url}`);
      }
    }
  });

  console.log('2. Đang điều hướng tới trang UAT Pizza 4P\'S...');
  await page.goto('https://uat-deli-v2-mconsumer.pizza4ps.io/');

  console.log('\n👉 BƯỚC THAO TÁC CỦA BẠN:');
  console.log(' - Trên màn hình điện thoại giả lập vừa hiện ra, vui lòng CHỌN ĐỊA CHỈ hoặc PHƯƠNG THỨC GIAO HÀNG (ví dụ: Mang về > Chọn 1 cửa hàng bất kỳ).');
  console.log(' - Đi tới danh sách món ăn cho tới khi bạn thấy tab "Bánh Pizza".');
  console.log('================================================================');
  
  await askQuestion('👉 SAU KHI ĐÃ CHỌN XONG CỬA HÀNG VÀ THẤY MENU, NHẤN [ENTER] TẠI ĐÂY ĐỂ BẮT ĐẦU CHẨN ĐOÁN...');

  console.log('\n3. Đang chuyển sang trang Bánh Pizza...');
  await page.goto('https://uat-deli-v2-mconsumer.pizza4ps.io/pizza');
  await page.waitForTimeout(3000); // Chờ menu load xong

  // Quét xem có bao nhiêu Pizza trên màn hình
  console.log('4. Đang phân tích danh sách Pizza trên màn hình...');
  
  // Lấy các thẻ chứa sản phẩm Pizza. 
  // Next.js của Pizza 4P's thường dùng thẻ <a> hoặc <div> chứa tên sản phẩm
  const pizzaSelectors = [
    'a[href*="/pizza/"]', 
    '.product-card', 
    '.item', 
    'div[class*="product"]',
    'div[class*="item"]'
  ];
  
  let pizzas = [];
  for (const selector of pizzaSelectors) {
    const count = await page.locator(selector).count();
    if (count > 0) {
      console.log(`Đã tìm thấy ${count} sản phẩm với selector "${selector}"`);
      pizzas = await page.locator(selector).all();
      break;
    }
  }

  if (pizzas.length === 0) {
    console.log('Không tìm thấy selector tự động. Chuyển sang chế độ chẩn đoán thủ công (Interactive Assist Mode).');
  }

  // CHẾ ĐỘ 1: CHẨN ĐOÁN TỰ ĐỘNG (Nếu tìm thấy danh sách món)
  if (pizzas.length > 0) {
    console.log('\n--- BẮT ĐẦU QUÉT TỰ ĐỘNG ---');
    for (let i = 0; i < Math.min(pizzas.length, 10); i++) { // Quét thử tối đa 10 bánh đầu tiên để kiểm tra
      try {
        const pizzaName = await pizzas[i].innerText();
        const cleanName = pizzaName.split('\n')[0] || `Pizza_${i}`;
        console.log(`\n🔍 Đang kiểm tra bánh: "${cleanName}"...`);
        
        // Click vào bánh
        await pizzas[i].click();
        await page.waitForTimeout(2000); // Chờ modal mở ra

        // Kiểm tra xem có tùy chọn "Pizza ghép" hay không
        const pizzaGhepBtn = page.locator('text="Pizza ghép"');
        const hasHalfAndHalf = await pizzaGhepBtn.count() > 0;

        if (!hasHalfAndHalf) {
          console.log(`   -> Bánh này không có chế độ ghép Half & Half. Bỏ qua.`);
          // Đóng modal (thường click nút Back hoặc vùng ngoài)
          const backBtn = page.locator('button[aria-label*="Back"], svg[class*="back"], button:has-text("Quay lại")');
          if (await backBtn.count() > 0) {
            await backBtn.first().click();
          } else {
            await page.goBack();
          }
          await page.waitForTimeout(1000);
          continue;
        }

        // Chọn chế độ Pizza ghép
        console.log(`   -> Có chế độ ghép Half & Half. Đang click chọn...`);
        await pizzaGhepBtn.first().click();
        await page.waitForTimeout(1500);

        // Click chọn làm nửa bánh đầu tiên (thường là click vào chính pizza đó hoặc nút Chọn nửa này)
        // Pizza 4P's: Chọn pizza ghép thì mặc định bánh hiện tại là nửa bánh 1.
        // Kiểm tra xem danh sách "Chọn nửa bánh còn lại" có xuất hiện các lựa chọn hay không
        const warningText = page.locator('text="Vui lòng chọn nửa bánh còn lại."');
        const hasWarning = await warningText.count() > 0;
        
        // Kiểm tra xem danh sách các option nửa bánh còn lại có được hiển thị
        // Thường các option nửa bánh sẽ có radio button hoặc chứa text "(1/2)" hoặc giá tiền "+... vnđ"
        const optionItems = page.locator('.option-item, input[type="radio"], div:has-text("(1/2)")');
        const optionCount = await optionItems.count();

        console.log(`   -> Số lượng tùy chọn cho nửa bánh còn lại tìm thấy: ${optionCount}`);

        if (optionCount === 0) {
          console.log(`🚨 PHÁT HIỆN LỖI (BUG): Bánh "${cleanName}" bị lỗi không hiển thị nửa bánh còn lại!`);
          
          // Chụp ảnh màn hình lỗi
          const screenshotPath = path.join(screenshotDir, `error_${cleanName.replace(/[^a-zA-Z0-9]/g, '_')}.png`);
          await page.screenshot({ path: screenshotPath });
          console.log(`   📷 Đã chụp ảnh màn hình lỗi tại: ${screenshotPath}`);

          // Ghi lại DOM HTML của vùng hiển thị lỗi
          const domDump = await page.evaluate(() => document.body.innerHTML);
          fs.writeFileSync(path.join(outputDir, `dom_error_${cleanName.replace(/[^a-zA-Z0-9]/g, '_')}.html`), domDump);
        } else {
          console.log(`✅ Hoạt động bình thường. Có ${optionCount} lựa chọn ghép.`);
        }

        // Đóng modal để kiểm tra bánh tiếp theo
        const backBtn = page.locator('button[aria-label*="Back"], svg[class*="back"], button:has-text("Quay lại"), button[class*="close"]');
        if (await backBtn.count() > 0) {
          await backBtn.first().click();
        } else {
          // Quay lại bằng click nút Close hoặc go back
          await page.evaluate(() => window.history.back());
        }
        await page.waitForTimeout(1500);

      } catch (err) {
        console.log(`⚠️ Có lỗi xảy ra khi quét tự động bánh thứ ${i}: ${err.message}`);
      }
    }
  }

  // CHẾ ĐỘ 2: HỖ TRỢ TƯƠNG TÁC THỦ CÔNG (Nếu cấu hình UI thay đổi không tự quét được)
  console.log('\n================================================================');
  console.log('👉 CHUYỂN SANG CHẾ ĐỘ TƯƠNG TÁC THỦ CÔNG (INTERACTIVE MODE):');
  console.log(' - Bạn có thể tự bấm chọn bất kỳ loại Pizza nào trên màn hình điện thoại.');
  console.log(' - Bấm chọn chế độ "Pizza ghép" và chọn nửa thứ nhất.');
  console.log(' - Tool sẽ liên tục giám sát và ghi lại tất cả các API/Console lỗi phía sau.');
  console.log(' - Khi bạn gặp case lỗi (trắng danh sách), hãy gõ "exit" vào Terminal này.');
  console.log('================================================================');

  let input = '';
  while (input.toLowerCase() !== 'exit') {
    input = await askQuestion('Gõ "exit" và nhấn Enter sau khi bạn đã tái dựng được lỗi để xuất báo cáo chẩn đoán: ');
  }

  // TẠO BÁO CÁO CHẨN ĐOÁN CUỐI CÙNG
  console.log('\n================================================================');
  console.log('📝 ĐANG XUẤT BÁO CÁO CHẨN ĐOÁN...');
  
  const report = {
    scanTime: new Date().toISOString(),
    storeDetails: await page.evaluate(() => {
      // Cố gắng lấy tên cửa hàng đang chọn trên UI
      return document.querySelector('.store-name, .delivery-info, div[class*="store"]')?.innerText || 'Không rõ cửa hàng';
    }),
    url: page.url(),
    consoleErrorsCount: consoleErrors.length,
    consoleErrors: consoleErrors,
    apiLogsCount: networkLogs.length,
    apiLogs: networkLogs.filter(log => log.status >= 400 || typeof log.response === 'object') // Chỉ lưu các API lỗi hoặc trả về JSON dữ liệu
  };

  const reportPath = path.join(outputDir, 'diagnostic_report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`✅ Đã xuất file báo cáo chẩn đoán tại: ${reportPath}`);
  console.log(`📂 Các ảnh chụp màn hình lỗi và DOM HTML được lưu tại thư mục: ${outputDir}`);
  console.log('================================================================');

  await browser.close();
  console.log('Trình duyệt đã đóng. Cảm ơn bạn đã sử dụng công cụ chẩn đoán!');
})();
