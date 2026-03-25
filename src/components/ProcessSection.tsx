import { ClipboardList, HardHat, Wrench, FlaskConical, FileCheck } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    num: "01",
    title: "Khảo sát & Báo giá",
    desc: "Đội ngũ kỹ thuật lên hiện trường khảo sát thực tế, đánh giá lưu lượng và tính chất nước thải. Báo giá chi tiết trong 3–5 ngày.",
  },
  {
    icon: <HardHat className="w-5 h-5" />,
    num: "02",
    title: "Ký hợp đồng & Thiết kế",
    desc: "Chốt hợp đồng xây lắp rõ ràng về phạm vi, tiến độ và cam kết chất lượng. Thiết kế bản vẽ thi công phù hợp.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    num: "03",
    title: "Gia công, Mua thiết bị & Lắp đặt",
    desc: "Gia công bồn bể, mua sắm thiết bị chính hãng, vận chuyển và lắp đặt tại công trường theo đúng thiết kế.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    num: "04",
    title: "Vận hành & Lấy mẫu kiểm nghiệm",
    desc: "Vận hành hệ thống, nuôi cấy vi sinh, lấy mẫu nước đầu ra gửi phòng thí nghiệm kiểm nghiệm đạt quy chuẩn.",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    num: "05",
    title: "Bàn giao & Hỗ trợ cấp phép",
    desc: "Bàn giao công trình kèm hồ sơ kết quả phân tích mẫu — điều kiện cần để doanh nghiệp hoàn tất Giấy phép Môi trường.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding" id="quy-trinh">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Quy trình làm việc</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Từ khảo sát đến bàn giao — rõ ràng từng bước
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Quy trình 5 bước được chuẩn hóa giúp rút ngắn thời gian và đảm bảo kết quả đầu ra đạt chuẩn.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={step.num} className="relative md:grid md:grid-cols-2 md:gap-12 md:py-8">
                  {/* Dot on line */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary items-center justify-center z-10">
                    <span className="text-xs font-bold text-primary-foreground">{step.num}</span>
                  </div>

                  {isLeft ? (
                    <>
                      <div className="md:text-right md:pr-16">
                        <div className="flex items-center gap-3 md:justify-end mb-3">
                          <span className="md:hidden inline-flex w-8 h-8 rounded-full bg-primary items-center justify-center text-xs font-bold text-primary-foreground">{step.num}</span>
                          <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-primary">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="md:pl-16">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="md:hidden inline-flex w-8 h-8 rounded-full bg-primary items-center justify-center text-xs font-bold text-primary-foreground">{step.num}</span>
                          <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-primary">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
