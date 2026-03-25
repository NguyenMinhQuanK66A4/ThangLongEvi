import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container-wide py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TL</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-sm tracking-tight">THĂNG LONG</span>
                <span className="block text-[10px] text-muted-foreground tracking-wide">XỬ LÝ NƯỚC THẢI</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chuyên thi công trạm xử lý nước thải quy mô nhỏ cho nhà máy sản xuất tại các Khu & Cụm công nghiệp.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Liên kết</h4>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <a href="#quy-trinh" className="block hover:text-foreground transition-colors">Quy trình làm việc</a>
              <a href="#vi-sao" className="block hover:text-foreground transition-colors">Vì sao chọn chúng tôi</a>
              <a href="#faq" className="block hover:text-foreground transition-colors">Câu hỏi thường gặp</a>
              <a href="#lien-he" className="block hover:text-foreground transition-colors">Liên hệ tư vấn</a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Thông tin liên hệ</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span>0909 123 456</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span>info@thanglong-xlnt.vn</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-xs text-muted-foreground">
          © 2025 Công ty Thăng Long. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
