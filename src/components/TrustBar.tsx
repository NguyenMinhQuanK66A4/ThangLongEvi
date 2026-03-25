const TrustBar = () => {
  const stats = [
    { value: "50+", label: "Công trình hoàn thành" },
    { value: "100%", label: "Đạt quy chuẩn đầu ra" },
    { value: "15+", label: "KCN & CCN đã triển khai" },
    { value: "7+", label: "Năm kinh nghiệm" },
  ];

  return (
    <section className="bg-card border-b">
      <div className="container-wide py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
