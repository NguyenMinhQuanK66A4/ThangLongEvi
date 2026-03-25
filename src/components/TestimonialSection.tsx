import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Phản hồi từ khách hàng</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Doanh nghiệp nói gì sau khi hợp tác?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-8 border relative">
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">
              "Nhà máy chúng tôi vào CCN được 2 tháng thì bị yêu cầu bổ sung hệ thống XLNT. Thăng Long khảo sát và thi công xong trong vòng 6 tuần, kết quả mẫu nước đạt ngay lần đầu. Rất hài lòng."
            </p>
            <div>
              <p className="font-semibold text-sm">Anh Trần Văn Hùng</p>
              <p className="text-xs text-muted-foreground">Giám đốc nhà máy sản xuất bao bì — CCN Tân Phú Trung, TP.HCM</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border relative">
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">
              "Trước đó tôi đã hỏi 3 đơn vị, ai cũng nói làm được nhưng không ai đưa ra quy trình rõ ràng. Thăng Long là đơn vị duy nhất cho thấy từng bước cụ thể và cam kết kết quả bằng hợp đồng."
            </p>
            <div>
              <p className="font-semibold text-sm">Chị Nguyễn Thị Mai</p>
              <p className="text-xs text-muted-foreground">Phụ trách hành chính — Nhà máy chế biến thực phẩm, KCN Long Hậu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
