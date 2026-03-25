import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import { FadeIn } from "@/components/ui/fade-in";

const HeroSection = () => {
  return (
    <section className="relative pt-16">
      {/* Hero image with overlay */}
      <div className="relative h-[85vh] min-h-[600px] max-h-[800px]">
        <img
          src={heroImg}
          alt="Công trình trạm xử lý nước thải đang thi công tại khu công nghiệp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(160,15%,12%)] via-[hsl(160,15%,12%,0.6)] to-[hsl(160,15%,12%,0.3)]" />

        <div className="relative h-full container-wide flex flex-col justify-end pb-16 md:pb-20">
          <div className="max-w-2xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-surface-dark-foreground">Nhà thầu chuyên môn tại các KCN phía Nam</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-surface-dark-foreground leading-[1.15] tracking-tight mb-5 text-balance">
                Thi công Trạm xử lý nước thải cho nhà máy trong KCN
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="flex items-center gap-3 md:gap-4 mb-5">
                <span className="text-xl md:text-2xl font-bold text-primary bg-primary/15 px-4 py-1.5 rounded-lg">Nhanh</span>
                <span className="text-surface-dark-foreground/40 text-2xl font-light">—</span>
                <span className="text-xl md:text-2xl font-bold text-primary bg-primary/15 px-4 py-1.5 rounded-lg">Gọn</span>
                <span className="text-surface-dark-foreground/40 text-2xl font-light">—</span>
                <span className="text-xl md:text-2xl font-bold text-primary bg-primary/15 px-4 py-1.5 rounded-lg">Đạt chuẩn</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-base md:text-lg text-surface-dark-foreground/80 leading-relaxed mb-8 max-w-xl">
                Từ khảo sát, thiết kế đến xây lắp và vận hành — kết quả phân tích mẫu nước đầu ra đạt quy chuẩn, đủ điều kiện cấp Giấy phép Môi trường.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Nhận báo giá thi công
                </a>
                <a
                  href="#quy-trinh"
                  className="inline-flex items-center justify-center gap-2 border border-surface-dark-foreground/30 text-surface-dark-foreground px-7 py-3.5 rounded-lg text-sm font-medium hover:bg-surface-dark-foreground/10 transition-colors"
                >
                  Xem quy trình làm việc
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
