import { services } from "@/lib/constants/services";

export default function Services() {
  return (
    <section className="relative w-full py-20 px-6 bg-neutral-900 overflow-hidden">
      {/* Blob arka plan */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-red-800/40 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-red-900/35 blur-3xl animate-blob-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-red-700/30 blur-3xl animate-blob-3 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-rose-800/25 blur-3xl animate-blob-1 pointer-events-none" />

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
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-red-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/20 shrink-0 group-hover:bg-red-600/40 transition-colors duration-300">
                  <Icon size={22} className="text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-white/90 leading-snug group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
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
