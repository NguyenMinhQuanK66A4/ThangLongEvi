import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    location: "",
    hasPlant: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-surface-dark" id="lien-he">
        <div className="container-tight text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-surface-dark-foreground mb-3">
            Cảm ơn bạn đã để lại thông tin!
          </h2>
          <p className="text-surface-dark-foreground/70">
            Đội ngũ Thăng Long sẽ liên hệ lại trong vòng 24 giờ làm việc.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-surface-dark" id="lien-he">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Liên hệ tư vấn</p>
            <h2 className="text-2xl md:text-3xl font-bold text-surface-dark-foreground leading-snug mb-5">
              Nhận báo giá thi công trạm XLNT cho nhà máy của bạn
            </h2>
            <p className="text-surface-dark-foreground/70 leading-relaxed mb-8">
              Để lại thông tin, đội ngũ kỹ thuật sẽ liên hệ tư vấn sơ bộ và sắp xếp khảo sát hiện trường — hoàn toàn miễn phí.
            </p>

            <div className="space-y-4 text-sm text-surface-dark-foreground/80">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Tư vấn sơ bộ trong 24 giờ
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Khảo sát hiện trường miễn phí
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Báo giá chi tiết trong 3–5 ngày
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 border space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Họ tên *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Số điện thoại *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="0912 345 678"
                  className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@congty.vn"
                  className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Tên công ty *</label>
              <input
                type="text"
                name="company"
                required
                value={form.company}
                onChange={handleChange}
                placeholder="Công ty TNHH ABC"
                className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Vị trí nhà máy (KCN / CCN)</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="VD: KCN Long Hậu, Long An"
                className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Công ty đã có trạm XLNT chưa?</label>
              <select
                name="hasPlant"
                value={form.hasPlant}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              >
                <option value="">Chọn</option>
                <option value="no">Chưa có</option>
                <option value="yes-upgrade">Đã có, cần nâng cấp</option>
                <option value="yes-new">Đã có, cần xây thêm</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:-translate-y-1 hover:shadow-lg active:translate-y-0 transition-all duration-300 mt-2"
            >
              <Send className="w-4 h-4" />
              Gửi yêu cầu tư vấn
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Thông tin của bạn được bảo mật. Chúng tôi chỉ liên hệ để tư vấn.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
