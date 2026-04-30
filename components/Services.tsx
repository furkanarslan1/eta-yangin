import { services } from "@/lib/constants/services";

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Ne Yapıyoruz
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hizmetlerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex gap-5 items-start bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-red-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/10 shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-red-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
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
