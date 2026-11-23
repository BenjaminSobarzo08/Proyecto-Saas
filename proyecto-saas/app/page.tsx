const appointments = [
  { time: "09:30", name: "Sofía Martínez", service: "Coloración", color: "bg-[#dce5f5]" },
  { time: "10:45", name: "Lucía Fernández", service: "Corte + brushing", color: "bg-[#e9edf8]" },
  { time: "12:00", name: "Valentina Ruiz", service: "Manicura", color: "bg-[#d9e8e5]" },
];

type Appointment = (typeof appointments)[number];

function AppointmentRow({ appointment }: { appointment: Appointment }) {
  return (
    <div className="flex items-center gap-2.5 border-t border-[#f2f2f7] py-2 sm:gap-3 sm:py-2.5">
      <span className="w-9 text-[8px] font-medium text-[#626b7d] sm:w-10 sm:text-[9px]">{appointment.time}</span>
      <span aria-hidden="true" className={`size-7 shrink-0 rounded-full ${appointment.color}`} />
      <span className="min-w-0 flex-1">
        <strong className="block truncate text-[9px] font-semibold text-[#42475e] sm:text-[10px]">{appointment.name}</strong>
        <small className="mt-0.5 block truncate text-[8px] text-[#686e80] sm:text-[9px]">{appointment.service}</small>
      </span>
    </div>
  );
}

const problemCards = [
  {
    icon: "calendar",
    title: "Turnos desorganizados",
    description: "Mantener la agenda actualizada y evitar confusiones puede llevar más tiempo del que debería.",
  },
  {
    icon: "messages",
    title: "Demasiados mensajes",
    description: "Responder consultas y coordinar disponibilidades se lleva horas de tu día.",
  },
  {
    icon: "team",
    title: "Profesionales y horarios",
    description: "Coordinar distintas agendas y disponibilidades no siempre es sencillo.",
  },
  {
    icon: "layers",
    title: "Información dispersa",
    description: "Los datos de clientes, servicios y turnos terminan repartidos en distintos lugares.",
  },
] as const;

type IconName = (typeof problemCards)[number]["icon"] | "services" | "client";

function LineIcon({ name }: { name: IconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      {name === "calendar" && <><rect x="3.5" y="5" width="17" height="15.5" rx="2.2" /><path d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01" /></>}
      {name === "messages" && <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.4-.75L4 20l1.7-4.1A7.4 7.4 0 0 1 5 12.5 7.5 7.5 0 0 1 12.5 5H13a7 7 0 0 1 7 6.5Z" /><path d="M9 12.5h.01M12.5 12.5h.01M16 12.5h.01" /></>}
      {name === "team" && <><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-1.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V19M16 5.3a3 3 0 0 1 0 5.8M16 13h.7a3.8 3.8 0 0 1 3.8 3.8V19" /></>}
      {name === "layers" && <><path d="m12 3.5 8.5 4.4-8.5 4.4-8.5-4.4L12 3.5Z" /><path d="m4 12 8 4.2 8-4.2M4 16.3l8 4.2 8-4.2" /></>}
      {name === "services" && <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>}
      {name === "client" && <><circle cx="12" cy="8" r="3.2" /><path d="M5 20a7 7 0 0 1 14 0" /></>}
    </svg>
  );
}

function ProblemCard({ icon, title, description }: (typeof problemCards)[number]) {
  return (
    <article className="rounded-2xl border border-[#e7eaf1] bg-white p-5 sm:p-6">
      <span className="mb-5 grid size-11 place-items-center rounded-xl bg-[#e9edf8] text-[#243b65]">
        <LineIcon name={icon} />
      </span>
      <h3 className="text-base font-semibold tracking-[-0.02em] text-[#243b65]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#53617a]">{description}</p>
    </article>
  );
}

const platformFeatures = [
  {
    icon: "calendar",
    title: "Agenda de turnos",
    description: "Visualizá y organizá las reservas de tu negocio.",
    preview: "agenda",
  },
  {
    icon: "team",
    title: "Profesionales y horarios",
    description: "Administrá el equipo y sus disponibilidades.",
    preview: "team",
  },
  {
    icon: "services",
    title: "Servicios y promociones",
    description: "Configurá servicios, precios, duraciones y combos.",
    preview: "services",
  },
  {
    icon: "client",
    title: "Gestión de clientes",
    description: "Mantené organizada la información de tus clientes.",
    preview: "clients",
  },
] as const;

type Feature = (typeof platformFeatures)[number];

function FeaturePreview({ kind }: { kind: Feature["preview"] }) {
  if (kind === "agenda") {
    return (
      <div className="grid gap-1.5" aria-hidden="true">
        <div className="flex items-center gap-2 text-[10px] text-[#53617a]"><span className="w-9">09:30</span><span className="h-2 flex-1 rounded-full bg-[#dce5f5]" /></div>
        <div className="flex items-center gap-2 text-[10px] text-[#53617a]"><span className="w-9">10:45</span><span className="h-2 flex-1 rounded-full bg-[#e9edf8]" /></div>
        <div className="flex items-center gap-2 text-[10px] text-[#53617a]"><span className="w-9">12:00</span><span className="h-2 flex-1 rounded-full bg-[#d9e8e5]" /></div>
      </div>
    );
  }

  if (kind === "team") {
    return (
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="grid size-7 place-items-center rounded-full bg-[#e9edf8] text-[9px] font-semibold text-[#243b65]">CM</span>
        <span className="grid size-7 place-items-center rounded-full bg-[#dce5f5] text-[9px] font-semibold text-[#243b65]">LP</span>
        <span className="grid size-7 place-items-center rounded-full bg-[#edf2f1] text-[9px] font-semibold text-[#53617a]">+2</span>
        <span className="ml-1 text-[10px] text-[#53617a]">4 profesionales</span>
      </div>
    );
  }

  if (kind === "services") {
    return (
      <div className="flex flex-wrap gap-2" aria-hidden="true">
        <span className="rounded-lg bg-[#f4f6fa] px-2.5 py-1.5 text-[10px] text-[#425779]">Corte · 45 min</span>
        <span className="rounded-lg bg-[#e9edf8] px-2.5 py-1.5 text-[10px] text-[#243b65]">Combo × 2</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5" aria-hidden="true">
      <span className="grid size-7 place-items-center rounded-full bg-[#e9edf8] text-[9px] font-semibold text-[#243b65]">MR</span>
      <span className="grid gap-1"><span className="h-1.5 w-20 rounded-full bg-[#cfd7e6]" /><span className="h-1 w-14 rounded-full bg-[#e3e7ee]" /></span>
      <span className="ml-auto text-[10px] text-[#53617a]">Cliente</span>
    </div>
  );
}

function FeatureItem({ icon, title, description, preview }: Feature) {
  return (
    <article className="min-w-0 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#e9edf8] text-[#243b65]"><LineIcon name={icon} /></span>
        <div>
          <h3 className="text-sm font-semibold text-[#243b65] sm:text-base">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-[#53617a]">{description}</p>
        </div>
      </div>
      <div className="mt-5 border-t border-[#edf0f5] pt-4">
        <FeaturePreview kind={preview} />
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen overflow-hidden bg-[#f7f8fc] text-[#171b2d]">

      <header className="mx-auto grid w-[min(100%-2rem,1180px)] grid-cols-[1fr_auto] items-center gap-y-3 py-4 sm:w-[min(100%-3rem,1180px)] sm:py-5 md:grid-cols-3 md:gap-y-0 md:py-7">
        <a href="#inicio" className="col-start-1 row-start-1 flex items-center gap-2.5" aria-label="Nuvora, inicio">
          <span aria-hidden="true" className="grid size-9 grid-cols-2 gap-1 rounded-[13px] bg-[#243b65] p-[9px] shadow-[0_5px_14px_#243b6525]">
            <span className="rounded-full bg-[#8da7df]" />
            <span className="rounded-full bg-white" />
            <span className="rounded-full bg-white" />
            <span className="rounded-full bg-[#76d5c4]" />
          </span>
          <span className="text-[19px] font-semibold tracking-[-0.055em]">nuvora</span>
        </a>

        <nav aria-label="Navegación principal" className="col-span-2 row-start-2 flex items-center justify-center gap-8 text-[12px] font-medium text-[#53617a] md:col-span-1 md:col-start-2 md:row-start-1 md:gap-9 md:text-[13px]">
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-[#243b65] motion-reduce:transition-none" href="#inicio">Inicio</a>
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-[#243b65] motion-reduce:transition-none" href="#plataforma">La plataforma</a>
        </nav>

        <a
          href="#plataforma"
          className="col-start-2 row-start-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#243b65] px-4 text-[12px] font-semibold text-white shadow-[0_7px_18px_#243b6520] transition hover:-translate-y-0.5 hover:bg-[#304d7d] motion-reduce:transform-none motion-reduce:transition-none sm:px-5 sm:text-[13px] md:col-start-3"
        >
          <span className="hidden sm:inline">Conocé nuestra plataforma</span>
          <span className="sm:hidden">Conocé Nuvora</span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="mx-auto flex w-[min(100%-2rem,1180px)] flex-col items-center gap-10 pb-16 pt-10 sm:w-[min(100%-3rem,1180px)] sm:gap-12 sm:pb-20 sm:pt-14 lg:gap-14 lg:pb-24 lg:pt-16">
        <div className="w-full max-w-[900px] text-center">
          <p className="mb-5 text-[11px] font-semibold tracking-[0.16em] text-[#425779] sm:mb-6 sm:text-xs">
            GESTIÓN INTELIGENTE PARA TU NEGOCIO
          </p>

          <h1 className="mx-auto max-w-[900px] text-center text-[clamp(2.75rem,7vw,5.35rem)] leading-[1.02] font-semibold tracking-[-0.075em] text-[#243b65]">
            <span className="block">Tu negocio merece</span>
            <span className="block text-[#557bbf]">funcionar mejor.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[720px] text-center text-[15px] leading-7 text-[#515b6d] sm:mt-6 sm:text-[17px] sm:leading-8">
            Gestioná turnos, servicios, profesionales y clientes desde un solo lugar. Simplificá tu día a día y dedicá más tiempo a hacer crecer tu negocio.
          </p>

          <div className="mt-7 flex justify-center sm:mt-8">
            <a
              href="#plataforma"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#243b65] px-6 text-[13px] font-semibold text-white shadow-[0_10px_24px_#243b653a] transition hover:-translate-y-0.5 hover:bg-[#304d7d] motion-reduce:transform-none motion-reduce:transition-none"
            >
              Conocé nuestra plataforma
              <span aria-hidden="true" className="text-base">→</span>
            </a>
          </div>
        </div>

        <div id="plataforma" className="relative mx-auto w-full max-w-[850px] scroll-mt-8">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold text-[#425779] sm:mb-4 sm:text-xs"><span aria-hidden="true" className="grid size-5 place-items-center rounded-md bg-[#e9edf8] text-[10px] text-[#243b65]">i</span>Vista ilustrativa del panel de gestión: agenda, profesionales y clientes</p>
          <div aria-hidden="true" className="overflow-hidden rounded-[20px] border border-white/90 bg-white/95 p-3 shadow-[0_24px_60px_#243b651c] sm:rounded-[24px] sm:p-4">
            <div className="flex min-h-[390px] overflow-hidden rounded-[14px] border border-[#e8ebf1] bg-[#fbfcfe] sm:min-h-[430px]">
              <aside aria-hidden="true" className="hidden w-[116px] shrink-0 flex-col border-r border-[#e8ebf1] bg-white px-3 py-4 sm:flex">
                <div className="mb-8 flex items-center gap-2 px-1">
                  <span aria-hidden="true" className="grid size-6 grid-cols-2 gap-[3px] rounded-[8px] bg-[#243b65] p-[6px]"><i className="rounded-full bg-[#6689d4]" /><i className="rounded-full bg-white" /><i className="rounded-full bg-white" /><i className="rounded-full bg-[#9acfc7]" /></span>
                  <span className="text-[11px] font-semibold tracking-[-0.04em]">nuvora</span>
                </div>
                <div className="grid gap-2 text-[9px] font-medium text-[#81869a]">
                  <span className="flex items-center gap-2 rounded-lg bg-[#e9edf8] px-2 py-2 text-[#243b65]"><i className="size-1.5 rounded-full bg-[#6689d4]" />Resumen</span>
                  <span className="flex items-center gap-2 px-2 py-2"><i className="size-1.5 rounded-full bg-[#c7cada]" />Turnos</span>
                  <span className="flex items-center gap-2 px-2 py-2"><i className="size-1.5 rounded-full bg-[#c7cada]" />Servicios</span>
                  <span className="flex items-center gap-2 px-2 py-2"><i className="size-1.5 rounded-full bg-[#c7cada]" />Profesionales</span>
                  <span className="flex items-center gap-2 px-2 py-2"><i className="size-1.5 rounded-full bg-[#c7cada]" />Clientes</span>
                </div>
                <div className="mt-auto rounded-xl bg-[#f5f6fb] p-2.5">
                  <div className="mb-2 size-5 rounded-full bg-[#e0e1ff]" />
                  <div className="h-1.5 w-14 rounded-full bg-[#d7d9e5]" />
                  <div className="mt-1.5 h-1 w-10 rounded-full bg-[#e7e8ef]" />
                </div>
              </aside>

              <div className="min-w-0 flex-1 p-4 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.13em] text-[#626b7d] uppercase sm:text-[10px]">Mi negocio</p>
                    <h2 className="mt-1 text-[17px] font-semibold tracking-[-0.045em] text-[#242943] sm:text-[20px]">Hola, Carolina <span aria-hidden="true">✦</span></h2>
                  </div>
                  <div className="grid size-8 place-items-center rounded-full border border-[#ececf3] bg-white text-[11px] text-[#73788c] sm:size-9">CM</div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="rounded-xl border border-[#eeeef5] bg-white p-3 sm:rounded-2xl sm:p-4">
                    <div className="mb-3 flex items-center justify-between"><span className="text-[9px] font-medium text-[#626b7d] sm:text-[10px]">Turnos de hoy</span><span className="grid size-6 place-items-center rounded-lg bg-[#e9edf8] text-[11px] text-[#243b65]">◷</span></div>
                    <div className="flex items-end gap-2"><strong className="text-[24px] leading-none font-semibold tracking-[-0.06em] text-[#242943] sm:text-[29px]">08</strong><span className="mb-0.5 rounded-full bg-[#eaf7f2] px-1.5 py-0.5 text-[8px] font-semibold text-[#4f9b7e]">+2</span></div>
                    <p className="mt-2 text-[8px] text-[#999dad] sm:text-[9px]">En tu agenda</p>
                  </div>
                  <div className="rounded-xl border border-[#eeeef5] bg-white p-3 sm:rounded-2xl sm:p-4">
                    <div className="mb-3 flex items-center justify-between"><span className="text-[9px] font-medium text-[#626b7d] sm:text-[10px]">Nuevos clientes</span><span className="grid size-6 place-items-center rounded-lg bg-[#edf5f3] text-[11px] text-[#397f73]">＋</span></div>
                    <div className="flex items-end gap-2"><strong className="text-[24px] leading-none font-semibold tracking-[-0.06em] text-[#242943] sm:text-[29px]">12</strong><span className="mb-0.5 text-[8px] font-semibold text-[#4f9b7e]">este mes</span></div>
                    <p className="mt-2 text-[8px] text-[#999dad] sm:text-[9px]">Personas que te eligen</p>
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-[#eeeef5] bg-white p-3 sm:mt-4 sm:rounded-2xl sm:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div><h3 className="text-[10px] font-semibold text-[#343951] sm:text-[11px]">Próximos turnos</h3><p className="mt-1 text-[8px] text-[#999dad] sm:text-[9px]">Tu día, de un vistazo</p></div>
                    <span className="rounded-md bg-[#f5f5fa] px-2 py-1 text-[8px] font-medium text-[#777c90]">Hoy, 18 jun</span>
                  </div>
                  <div className="grid gap-1">
                    {appointments.map((appointment) => <AppointmentRow key={appointment.time} appointment={appointment} />)}
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-xl bg-[#e9edf8] px-3 py-2.5 sm:mt-4 sm:rounded-2xl sm:px-4 sm:py-3">
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-lg bg-white text-[12px] text-[#243b65]">✦</span>
                  <p className="text-[9px] leading-4 text-[#425779] sm:text-[10px]">Todo organizado para que puedas enfocarte en lo que mejor hacés.</p>
                  <span aria-hidden="true" className="ml-auto text-[12px] text-[#243b65]">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="problemas-title" className="border-t border-[#e7eaf1] bg-white py-16 sm:py-24">
        <div className="mx-auto w-[min(100%-2rem,1180px)] sm:w-[min(100%-3rem,1180px)]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.16em] text-[#557bbf] sm:text-xs">EL DÍA A DÍA DE TU NEGOCIO</p>
            <h2 id="problemas-title" className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.055em] text-[#243b65]">
              ¿Tu negocio te demanda más tiempo del que debería?
            </h2>
            <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-[#53617a] sm:text-base sm:leading-8">
              Cuando trabajás con turnos, hay muchas piezas que coordinar. Y si cada una vive en un lugar distinto, organizar el día puede volverse un trabajo en sí mismo.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {problemCards.map((problem) => <ProblemCard key={problem.title} {...problem} />)}
          </div>

          <div className="mt-14 rounded-[24px] bg-[#243b65] px-6 py-10 text-center text-white sm:mt-20 sm:px-12 sm:py-14">
            <p className="text-[clamp(1.9rem,4.5vw,3.5rem)] leading-tight font-semibold tracking-[-0.055em]">
              Tu tiempo vale. <span className="text-[#b9cae9]">Tu negocio también.</span>
            </p>
            <p className="mx-auto mt-4 max-w-[680px] text-sm leading-7 text-[#e3e9f4] sm:text-base sm:leading-8">
              Nuvora reúne en una sola plataforma la gestión de turnos, equipo, servicios y clientes para que puedas llevar tu negocio con más claridad y menos tareas dispersas.
            </p>
          </div>

          <div className="mt-16 grid items-center gap-8 sm:mt-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div className="max-w-[420px]">
              <p className="mb-4 text-[11px] font-semibold tracking-[0.16em] text-[#557bbf] sm:text-xs">UNA PLATAFORMA, TODO CONECTADO</p>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.05em] text-[#243b65]">
                Una forma más simple de llevar tu negocio.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#53617a]">
                Encontrá lo que necesitás para organizar cada parte de tu trabajo, con la información a mano cuando la necesitás.
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-[#e3e7ef] bg-[#f7f8fc] shadow-[0_16px_44px_#243b650d]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e3e7ef] bg-white px-5 py-4 sm:px-7">
                <h3 className="text-sm font-semibold text-[#243b65]">Todo tu negocio, en un solo lugar</h3>
                <p className="text-[10px] font-medium text-[#53617a]">Vista ilustrativa</p>
              </div>
              <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-[#e3e7ef]">
                {platformFeatures.map((feature) => <FeatureItem key={feature.title} {...feature} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
