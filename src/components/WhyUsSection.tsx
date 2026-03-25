import { ShieldCheck, Zap, Target, Handshake } from "lucide-react";
import completedImg from "@/assets/completed-plant.jpg";
import treatedWaterImg from "@/assets/treated-water.jpg";

const features = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Giải quyết đúng vấn đề",
    desc: "Không tư vấn thừa, không thiết kế thừa. Tập trung vào đúng nhu cầu: xây trạm XLNT đạt chuẩn để được cấp phép.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Thi công nhanh, gọn",
    desc: "Rút ngắn tiến độ nhờ quy trình chuẩn hóa và đội ngũ thi công chuyên trách tại các KCN phía Nam.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Cam kết kết quả đầu ra",
    desc: "Nước thải sau xử lý được lấy mẫu, gửi kiểm nghiệm tại phòng thí nghiệm. Kết quả đạt quy chuẩn QCVN.",
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "Đồng hành đến khi hoàn tất",
    desc: "Hỗ trợ khách hàng hoàn thiện hồ sơ kỹ thuật — điều kiện để nộp xin Giấy phép Môi trường từ Ban quản lý KCN.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-secondary/50" id="vi-sao">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Vì sao chọn Thăng Long</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Nhà thầu chuyên thi công trạm XLNT quy mô nhỏ tại KCN
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Chúng tôi không làm mọi thứ — chỉ tập trung vào thi công trạm xử lý nước thải cho nhà máy sản xuất trong Khu & Cụm công nghiệp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-6 border">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border">
              <img
                src={completedImg}
                alt="Trạm xử lý nước thải hoàn thiện và đang vận hành"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border">
              <img
                src={treatedWaterImg}
                alt="Nước thải đầu ra sau xử lý đạt quy chuẩn"
                className="w-full h-40 object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Hình ảnh công trình thực tế do đội ngũ Thăng Long thi công
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
