import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Chi phí thi công trạm XLNT quy mô nhỏ khoảng bao nhiêu?",
    a: "Chi phí phụ thuộc vào lưu lượng, tính chất nước thải và yêu cầu đầu ra. Sau khảo sát, chúng tôi sẽ báo giá chi tiết trong 3–5 ngày làm việc. Quý khách có thể liên hệ để nhận tư vấn sơ bộ miễn phí.",
  },
  {
    q: "Thời gian thi công mất bao lâu?",
    a: "Với quy mô nhỏ (5–50 m³/ngày), thời gian thi công trung bình từ 4–8 tuần tùy mức độ phức tạp và điều kiện mặt bằng.",
  },
  {
    q: "Làm sao đảm bảo nước đầu ra đạt quy chuẩn?",
    a: "Chúng tôi thiết kế hệ thống dựa trên thông số nước thải thực tế, vận hành nuôi cấy vi sinh đúng quy trình và lấy mẫu gửi phòng thí nghiệm được công nhận. Kết quả phân tích là cam kết trong hợp đồng.",
  },
  {
    q: "Thăng Long có hỗ trợ làm Giấy phép Môi trường không?",
    a: "Chúng tôi hỗ trợ chuẩn bị hồ sơ kỹ thuật liên quan đến trạm XLNT — phần quan trọng nhất trong hồ sơ xin Giấy phép. Phần thủ tục pháp lý, chúng tôi có thể giới thiệu đơn vị tư vấn uy tín nếu cần.",
  },
  {
    q: "Có bảo hành sau thi công không?",
    a: "Có. Công trình được bảo hành theo hợp đồng. Trong thời gian bảo hành, nếu hệ thống gặp sự cố, đội ngũ kỹ thuật sẽ có mặt xử lý trong vòng 24–48 giờ.",
  },
  {
    q: "Thăng Long đã thi công ở những KCN nào?",
    a: "Chúng tôi đã triển khai tại hơn 15 KCN & CCN tại khu vực phía Nam, bao gồm Long Hậu, Tân Phú Trung, Nhơn Trạch, Bình Dương, Long An và nhiều khu vực khác.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-secondary/50" id="faq">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Câu hỏi thường gặp</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Những điều doanh nghiệp thường thắc mắc
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-card rounded-xl border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-48 pb-5" : "max-h-0"}`}
                >
                  <p className="px-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
