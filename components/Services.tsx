import { services } from "@/lib/constants/services";

export default function Services() {
  return (
    <section
      className="relative w-full py-20 px-6 overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/services-bg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Ne Yapıyoruz
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Hizmetlerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-lg border border-white/15 bg-white/10 backdrop-blur-md p-6 hover:border-red-400/50 hover:bg-white/15 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-2 items-center text-center">
                  <h3 className="text-base font-semibold text-white leading-snug transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
