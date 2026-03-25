import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b">
      <div className="container-wide flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TL</span>
          </div>
          <div className="leading-tight">
            <span className="font-bold text-foreground text-sm tracking-tight">THĂNG LONG</span>
            <span className="block text-[10px] text-muted-foreground tracking-wide">XỬ LÝ NƯỚC THẢI</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#quy-trinh" className="hover:text-foreground transition-colors">Quy trình</a>
          <a href="#vi-sao" className="hover:text-foreground transition-colors">Vì sao chọn chúng tôi</a>
          <a href="#faq" className="hover:text-foreground transition-colors">Câu hỏi thường gặp</a>
        </nav>

        <a
          href="#lien-he"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Nhận tư vấn</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
