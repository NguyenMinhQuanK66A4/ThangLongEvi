import React, { useMemo, useState } from 'react';
import './App.css';

const highlights = [
  'Giải quyết đúng bài toán khách cần làm',
  'Triển khai nhanh, gọn, đúng tiến độ',
  'Cam kết kết quả đầu ra phục vụ hồ sơ môi trường',
];

const processSteps = [
  {
    title: '1. Tiếp nhận yêu cầu',
    desc: 'Lắng nghe nhu cầu, quy mô xả thải, tiến độ mong muốn và điều kiện mặt bằng thực tế.',
  },
  {
    title: '2. Khảo sát & báo giá',
    desc: 'Đội ngũ kỹ thuật lên hiện trường khảo sát, đề xuất phương án và chốt hợp đồng xây lắp.',
  },
  {
    title: '3. Gia công & mua thiết bị',
    desc: 'Gia công hạng mục theo thiết kế, chuẩn bị thiết bị, vật tư và logistics lên công trường.',
  },
  {
    title: '4. Lắp đặt & vận hành',
    desc: 'Thi công, chạy thử, vận hành, lấy mẫu nước thải đầu ra và mang đi kiểm nghiệm.',
  },
];

const customers = [
  'Các nhà máy sản xuất trong KCN, CCN',
  'Doanh nghiệp cần hoàn thiện hồ sơ cấp phép môi trường',
  'Chủ đầu tư muốn thi công nhanh để kịp tiến độ hoạt động',
];

const testimonials = [
  {
    name: 'Cụm công nghiệp Cầu Giát',
    place: 'Hà Nam cũ / Ninh Bình',
  },
  {
    name: 'Cụm công nghiệp Cẩm Thịnh',
    place: 'Cẩm Phả / Quảng Ninh',
  },
  {
    name: 'Cụm công nghiệp Thụy Vân',
    place: 'Phú Thọ',
  },
];

function App() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    position: '',
    hasSystem: 'Chưa có',
  });

  const canSubmit = useMemo(() => {
    return form.fullName.trim() && form.phone.trim() && form.company.trim();
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Thăng Long sẽ liên hệ lại sớm để tư vấn phương án phù hợp.');
  };

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">ThawngLongEvi.com.vn</p>
          <h1>Thi công Trạm xử lý nước thải quy mô nhỏ — Nhanh, Gọn, Tốt</h1>
          <p className="hero__lead">
            Dành cho nhà máy sản xuất tại các Khu công nghiệp, Cụm công nghiệp cần nhà thầu
            chuyên môn, làm thật, và tạo ra kết quả đáp ứng điều kiện cấp phép môi trường.
          </p>

          <div className="hero__ctaRow">
            <a className="btn btn--primary" href="#lead-form">
              Nhận tư vấn ngay
            </a>
            <a className="btn btn--ghost" href="#process">
              Xem quy trình triển khai
            </a>
          </div>

          <div className="hero__badges">
            {highlights.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        </div>

        <aside className="hero__card">
          <div className="hero__cardTop">Thông điệp chính</div>
          <div className="hero__bigText">Nhanh</div>
          <div className="hero__bigText">Gọn</div>
          <div className="hero__bigText hero__bigText--accent">Tốt</div>
          <p>
            Tập trung vào kết quả thực tế: có hệ thống, có vận hành, có mẫu đầu ra phục vụ hồ sơ
            môi trường.
          </p>
        </aside>
      </header>

      <main>
        <section className="section section--split">
          <div className="panel">
            <h2>Khách hàng đang gặp vấn đề gì?</h2>
            <p>
              Cần tìm nhà thầu thực hiện xây lắp Trạm xử lý nước thải quy mô nhỏ trong thời gian
              ngắn, nhưng vẫn phải đảm bảo đủ điều kiện để cấp phép môi trường của cụm.
            </p>
          </div>
          <div className="panel panel--soft">
            <h2>Thăng Long giải quyết như thế nào?</h2>
            <p>
              Khi khách hàng có nhu cầu, công ty sẽ tiếp nhận yêu cầu, khảo sát thực tế, báo giá,
              ký hợp đồng xây lắp, gia công - mua thiết bị - lắp đặt công trường, vận hành và lấy
              mẫu nước thải đầu ra đi kiểm nghiệm.
            </p>
          </div>
        </section>

        <section className="section" id="process">
          <div className="section__heading">
            <p className="eyebrow">Quy trình triển khai</p>
            <h2>Đúng việc, đúng thời điểm, đúng kết quả</h2>
          </div>
          <div className="processGrid">
            {processSteps.map((step) => (
              <article key={step.title} className="stepCard">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--split">
          <div className="panel">
            <p className="eyebrow">Đối tượng phù hợp</p>
            <h2>Khách hàng mục tiêu</h2>
            <ul className="checkList">
              {customers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel panel--soft">
            <p className="eyebrow">Điểm nổi bật</p>
            <h2>Vì sao khách nên chọn?</h2>
            <ul className="checkList">
              <li>Giải quyết đúng vấn đề khách cần làm</li>
              <li>Thi công nhanh, gọn, dễ phối hợp</li>
              <li>Sản phẩm đầu ra đạt yêu cầu vận hành & hồ sơ</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="section__heading">
            <p className="eyebrow">Khách hàng tiêu biểu</p>
            <h2>Đối tác / cụm công nghiệp đã đồng hành</h2>
          </div>
          <div className="testimonialGrid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonialCard">
                <h3>{item.name}</h3>
                <p>{item.place}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--lead" id="lead-form">
          <div className="leadCopy">
            <p className="eyebrow">Nhận tư vấn nhanh</p>
            <h2>Gửi thông tin để Thăng Long khảo sát và báo giá</h2>
            <p>
              Chỉ cần để lại vài thông tin cơ bản, đội ngũ sẽ liên hệ lại để trao đổi phương án
              phù hợp với hiện trạng trạm xử lý nước thải của doanh nghiệp.
            </p>
          </div>

          <form className="leadForm" onSubmit={handleSubmit}>
            <div className="fieldGrid">
              <label>
                Họ tên
                <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Nhập họ tên" />
              </label>
              <label>
                SĐT
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Nhập số điện thoại" />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Nhập email" />
              </label>
              <label>
                Công ty
                <input name="company" value={form.company} onChange={handleChange} placeholder="Tên công ty" />
              </label>
              <label>
                Vị trí
                <input name="position" value={form.position} onChange={handleChange} placeholder="Chức vụ / vị trí" />
              </label>
              <label>
                Công ty đã có trạm xử lý nước thải chưa?
                <select name="hasSystem" value={form.hasSystem} onChange={handleChange}>
                  <option>Chưa có</option>
                  <option>Đã có nhưng cần nâng cấp</option>
                  <option>Đã có và cần bảo trì / tối ưu</option>
                </select>
              </label>
            </div>
            <button className="btn btn--primary btn--full" type="submit" disabled={!canSubmit}>
              Gửi yêu cầu tư vấn
            </button>
            <p className="formNote">Bắt buộc: Họ tên, SĐT, Công ty</p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
