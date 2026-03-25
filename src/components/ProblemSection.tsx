import { AlertTriangle, Clock, FileWarning, Ban } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Chưa có trạm XLNT, không đủ điều kiện cấp phép",
      desc: "Nhà máy mới vào KCN cần có hệ thống xử lý nước thải để được cấp Giấy phép Môi trường, nhưng chưa biết bắt đầu từ đâu.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Thời gian gấp, cần triển khai nhanh",
      desc: "Deadline cấp phép sát nút, cần nhà thầu có thể triển khai ngay, không kéo dài thời gian.",
    },
    {
      icon: <FileWarning className="w-5 h-5" />,
      title: "Sợ làm xong không đạt quy chuẩn",
      desc: "Nhiều đơn vị thi công xong nhưng nước đầu ra không đạt, phải làm lại tốn kém gấp đôi.",
    },
    {
      icon: <Ban className="w-5 h-5" />,
      title: "Khó tìm nhà thầu chuyên môn thật sự",
      desc: "Thị trường nhiều đơn vị nhận làm nhưng thiếu năng lực thực tế, không có công trình tham chiếu.",
    },
  ];

  return (
    <section className="section-padding bg-surface-dark" id="van-de">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Vấn đề thực tế</p>
          <h2 className="text-2xl md:text-3xl font-bold text-surface-dark-foreground leading-snug mb-4">
            Nhà máy trong KCN đang gặp khó gì với nước thải?
          </h2>
          <p className="text-surface-dark-foreground/70 leading-relaxed">
            Đây là những tình huống chúng tôi gặp mỗi ngày khi làm việc với các doanh nghiệp sản xuất tại Khu & Cụm công nghiệp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-xl border border-surface-dark-foreground/10 bg-surface-dark-foreground/5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-4">
                {p.icon}
              </div>
              <h3 className="font-semibold text-surface-dark-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-surface-dark-foreground/65 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
