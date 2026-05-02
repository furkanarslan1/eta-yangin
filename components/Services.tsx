import { services } from "@/lib/constants/services";

export default function Services() {
  return (
    <section className="relative w-full py-20 px-6 bg-white overflow-hidden">

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Ne Yapıyoruz
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Hizmetlerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 hover:border-red-400/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-2 items-center text-center">
                  <h3 className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-neutral-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-600 transition-colors duration-300">
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
