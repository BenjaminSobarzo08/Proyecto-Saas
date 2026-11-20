"use client";

import { FormEvent, useState } from "react";

const services = [
  { id: "facial", name: "Limpieza facial profunda", duration: "60 min", price: "$ 18.000", symbol: "✳" },
  { id: "cejas", name: "Perfilado + laminado de cejas", duration: "45 min", price: "$ 14.000", symbol: "〰" },
  { id: "manos", name: "Manicura semipermanente", duration: "75 min", price: "$ 16.500", symbol: "✧" },
];

function getAvailableDates() {
  const todayParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Argentina/Buenos_Aires",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const part = (type: string) => Number(todayParts.find((item) => item.type === type)?.value);
  const candidate = new Date(Date.UTC(part("year"), part("month") - 1, part("day")));
  const weekdays = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];
  const monthNames = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  const available = [];

  while (available.length < 5) {
    candidate.setUTCDate(candidate.getUTCDate() + 1);
    const weekday = candidate.getUTCDay();
    if (weekday === 0 || weekday === 1) continue;
    available.push({
      day: weekdays[weekday],
      date: String(candidate.getUTCDate()).padStart(2, "0"),
      month: monthNames[candidate.getUTCMonth()],
    });
  }

  return available;
}

const dates = getAvailableDates();
const timeSlots = ["09:30", "10:30", "11:45", "14:00", "15:30", "17:00"];
type BookingStep = "selection" | "details" | "done";

export default function Home() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState("10:30");
  const [step, setStep] = useState<BookingStep>("selection");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const selectedService = services.find((service) => service.id === selectedServiceId)!;

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep("done");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf9f5] text-[#29251f]">
      <header className="relative z-10 mx-auto flex h-[76px] w-[calc(100%_-_38px)] max-w-[1160px] items-center justify-between sm:h-[90px] sm:w-[calc(100%_-_64px)]">
        <a className="flex items-center gap-2.5" href="#inicio" aria-label="Alma Estética, inicio">
          <span className="grid size-[37px] place-items-center rounded-full border border-[#b7a59a] font-serif text-[26px] italic leading-none text-[#714c5c]">a</span>
          <span className="flex flex-col font-serif text-[18px] leading-none tracking-[.04em]">alma<span className="mt-1 font-sans text-[8px] tracking-[.21em] text-[#8b8175] uppercase">estética</span></span>
        </a>
        <nav className="hidden gap-[38px] text-xs text-[#716b62] transition-colors sm:flex" aria-label="Navegación principal">
          <a className="hover:text-[#714c5c]" href="#servicios">Servicios</a>
          <a className="hover:text-[#714c5c]" href="#ubicacion">Encontranos</a>
        </nav>
        <a className="flex items-center gap-2.5 text-[10px] text-[#746e65] transition-colors hover:text-[#714c5c] sm:text-[11px]" href="tel:+541145678920">
          <span className="size-1.75 rounded-full bg-[#9aab8c] shadow-[0_0_0_4px_#9aab8c20]" />
          <span className="hidden sm:inline">¿Tenés dudas? </span><strong className="font-semibold text-[#29251f]">Contactanos</strong>
        </a>
      </header>

      <section className="relative mx-auto grid w-[calc(100%_-_38px)] max-w-[1080px] grid-cols-1 items-center gap-8 py-9 sm:w-[calc(100%_-_64px)] sm:gap-10 sm:py-12 md:min-h-[665px] md:grid-cols-[minmax(300px,1fr)_minmax(440px,520px)] md:gap-[clamp(40px,9vw,135px)] md:py-[18px] md:pb-[52px]">
        <div className="pointer-events-none absolute -left-[320px] -top-[20px] -z-0 hidden size-[670px] rounded-full border border-[#eee8df] md:block" />
        <div className="relative z-[1] max-w-[430px] pb-0 md:pb-5">
          <div className="mb-4 flex items-center gap-2.5 text-[8px] font-bold tracking-[.2em] text-[#887466] sm:mb-[21px] sm:text-[9px]"><span className="h-px w-6 bg-[#aa9585]" />UN MOMENTO PARA VOS</div>
          <h1 className="font-serif text-[clamp(52px,13vw,70px)] leading-[.98] tracking-[-.055em] text-[#34302a] sm:text-[clamp(58px,7vw,76px)]">Tu bienestar<br />empieza <em className="font-normal text-[#855a6b]">acá.</em></h1>
          <p className="mt-[17px] mb-[14px] max-w-[345px] font-serif text-sm leading-[1.7] text-[#746d63] sm:mt-[26px] sm:mb-[22px] sm:text-base">Elegí tu tratamiento y encontrá el momento perfecto. Nosotras nos ocupamos del resto.</p>
          <div className="flex flex-wrap items-center gap-2 text-[9px] text-[#827b71] sm:text-[10px]"><span className="text-[19px] leading-[.5] text-[#714c5c]">⌖</span><span>Palermo, Buenos Aires</span><span className="text-[#b8afa4]">·</span><span>Mar a sáb, 9 a 19 h</span></div>
          <div className="mt-8 hidden max-w-[330px] items-center gap-3 border-t border-[#e7e0d7] pt-[17px] font-serif text-xs italic leading-[1.55] text-[#847c72] md:flex md:mt-[50px]"><span className="font-sans text-[19px] not-italic text-[#a48675]">✳</span><span>Un espacio tranquilo, atención personalizada y tiempo para vos.</span></div>
        </div>

        <div className="relative z-[1] w-full rounded-[5px] border border-[#eee9e1] bg-white px-[18px] py-[23px] shadow-[0_18px_55px_#5546360b] sm:px-[32px] sm:py-[29px]">
          <div className="mb-[19px] flex items-start justify-between sm:mb-[23px]">
            <div><p className="mb-[7px] text-[8px] font-bold tracking-[.18em] text-[#887466]">RESERVÁ ONLINE</p><h2 className="font-serif text-[23px] tracking-[-.02em] sm:text-[25px]">{step === "done" ? "¡Te esperamos!" : step === "details" ? "Un último paso" : "Encontrá tu momento"}</h2></div>
            <span className="text-[25px] text-[#b7837b]">✳</span>
          </div>

          {step === "selection" && <>
            <div className="mb-3 flex items-center gap-2.5 text-[10px] font-semibold text-[#69635b]"><span className="font-serif text-[13px] text-[#855a6b]">01</span><span className="h-px w-[19px] bg-[#dfd5cd]" />Elegí un servicio</div>
            <div className="grid gap-[7px]" id="servicios">
              {services.map((service) => {
                const selected = service.id === selectedServiceId;
                return <button className={`flex min-h-[59px] w-full items-center gap-[11px] rounded-[3px] border px-3 py-[9px] text-left transition hover:border-[#c9b4b6] ${selected ? "border-[#a27e88] bg-[#fcf9f8] shadow-[inset_2px_0_0_#714c5c]" : "border-[#ede9e3] bg-white"}`} type="button" key={service.id} aria-pressed={selected} onClick={() => setSelectedServiceId(service.id)}>
                  <span className="grid size-[33px] shrink-0 place-items-center rounded-full bg-[#f4efeb] font-serif text-[19px] text-[#986b70]">{service.symbol}</span>
                  <span className="grid flex-1 gap-[5px]"><strong className="text-[9px] font-semibold sm:text-[10px]">{service.name}</strong><span className="flex items-center gap-[7px] text-[9px] text-[#898278]">{service.duration}<i className="size-[2px] rounded-full bg-[#b7aca1]" />{service.price}</span></span>
                  <span className={`grid size-[15px] place-items-center rounded-full border ${selected ? "border-[#714c5c]" : "border-[#d9d2ca]"}`}>{selected && <span className="size-[7px] rounded-full bg-[#714c5c]" />}</span>
                </button>;
              })}
            </div>

            <div className="my-[18px] h-px bg-[#eeeae4] sm:my-5" />
            <div className="mb-3 flex items-center gap-2.5 text-[10px] font-semibold text-[#69635b]"><span className="font-serif text-[13px] text-[#855a6b]">02</span><span className="h-px w-[19px] bg-[#dfd5cd]" />Elegí día y horario</div>
            <div className="mb-[11px] grid grid-cols-5 gap-[5px] sm:gap-[7px]" aria-label="Días disponibles">
              {dates.map((date, index) => <button className={`grid min-h-[57px] content-center justify-items-center gap-0.5 rounded-[3px] border transition hover:border-[#c9b4b6] ${selectedDate === index ? "border-[#714c5c] bg-[#f7f1f1] text-[#5d3b4b]" : "border-[#ede9e3] bg-white text-[#8a8278]"}`} type="button" key={`${date.month}-${date.date}`} aria-pressed={selectedDate === index} onClick={() => setSelectedDate(index)}><span className="text-[6px] tracking-[.08em] sm:text-[7px]">{date.day}</span><strong className="font-serif text-[15px] font-normal sm:text-[17px]">{date.date}</strong><span className="text-[6px] tracking-[.08em] sm:text-[7px]">{date.month}</span></button>)}
            </div>
            <div className="mb-[18px] grid grid-cols-3 gap-[7px] sm:grid-cols-6 sm:gap-[6px]" aria-label="Horarios disponibles">
              {timeSlots.map((time) => <button className={`min-h-[34px] rounded-[3px] border px-[3px] text-[10px] transition hover:border-[#b3939b] sm:min-h-[31px] sm:text-[9px] ${selectedTime === time ? "border-[#714c5c] bg-[#714c5c] text-white" : "border-[#eeeae4] bg-white text-[#716a61]"}`} type="button" key={time} aria-pressed={selectedTime === time} onClick={() => setSelectedTime(time)}>{time}</button>)}
            </div>
            <button className="flex min-h-[43px] w-full items-center justify-center gap-3 rounded-[3px] bg-[#855a6b] text-[11px] font-semibold text-white transition hover:-translate-y-px hover:bg-[#5d3b4b]" type="button" onClick={() => setStep("details")}>Continuar <span className="text-base font-normal">→</span></button>
            <p className="mt-[13px] mb-0 flex items-center justify-center gap-[7px] text-[8px] text-[#979086]"><span className="text-[13px] text-[#839078]">♧</span>Sin compromiso · Cancelá cuando necesites</p>
          </>}

          {step === "details" && <form className="flex flex-col" onSubmit={submitBooking}>
            <div className="mb-3 flex items-center gap-2.5 text-[10px] font-semibold text-[#69635b]"><span className="font-serif text-[13px] text-[#855a6b]">03</span><span className="h-px w-[19px] bg-[#dfd5cd]" />Tus datos</div>
            <div className="mb-[21px] flex items-center gap-[11px] border border-[#eee9e2] bg-[#fcfaf8] p-3"><span className="grid size-[34px] shrink-0 place-items-center rounded-full bg-[#f1e9e5] font-serif text-lg text-[#986b70]">{selectedService.symbol}</span><span className="grid flex-1 gap-[5px]"><strong className="text-[10px] font-semibold">{selectedService.name}</strong><small className="text-[9px] text-[#827b71]">{dates[selectedDate].day.toLowerCase()} {dates[selectedDate].date} de {dates[selectedDate].month.toLowerCase()} · {selectedTime} h</small></span><strong className="whitespace-nowrap text-[10px] font-semibold">{selectedService.price}</strong></div>
            <label className="mb-[6px] text-[10px] font-semibold text-[#554f47]" htmlFor="client-name">Tu nombre</label>
            <input id="client-name" className="mb-[15px] h-10 w-full rounded-[3px] border border-[#e8e2da] px-[11px] text-[11px] placeholder:text-[#aaa297]" autoComplete="name" required value={clientName} onChange={(event) => setClientName(event.target.value)} placeholder="¿Cómo te llamás?" />
            <label className="mb-[6px] text-[10px] font-semibold text-[#554f47]" htmlFor="client-phone">Tu celular</label>
            <input id="client-phone" className="mb-[15px] h-10 w-full rounded-[3px] border border-[#e8e2da] px-[11px] text-[11px] placeholder:text-[#aaa297]" type="tel" autoComplete="tel" required value={clientPhone} onChange={(event) => setClientPhone(event.target.value)} placeholder="Ej. 11 2345 6789" />
            <p className="mb-[15px] border-l-2 border-[#9aab8c] bg-[#f4f5ee] px-[10px] py-[9px] text-[9px] leading-[1.5] text-[#626c58]">Esta es una demostración: los datos no se guardan ni se envían.</p>
            <button className="flex min-h-[43px] w-full items-center justify-center gap-3 rounded-[3px] bg-[#855a6b] text-[11px] font-semibold text-white transition hover:bg-[#5d3b4b]" type="submit">Solicitar este turno <span className="text-base font-normal">→</span></button>
            <button className="mt-3 self-center p-1 text-[10px] text-[#766e65] hover:text-[#714c5c]" type="button" onClick={() => setStep("selection")}>← Volver a elegir horario</button>
          </form>}

          {step === "done" && <div className="px-0.5 pt-2 text-center">
            <span className="mx-auto mb-[17px] grid size-[50px] place-items-center rounded-full bg-[#edf1e8] text-2xl text-[#68765a]">✓</span>
            <p className="mb-[7px] text-[8px] font-bold tracking-[.18em] text-[#887466]">SOLICITUD DE DEMOSTRACIÓN</p>
            <h3 className="mb-[10px] font-serif text-[29px]">Gracias{clientName ? `, ${clientName.split(" ")[0]}` : ""}.</h3>
            <p className="mx-auto mb-[18px] max-w-[310px] text-[11px] leading-[1.7] text-[#716a60]">Elegiste <strong className="font-semibold text-[#29251f]">{selectedService.name}</strong> para el {dates[selectedDate].date} de {dates[selectedDate].month.toLowerCase()} a las {selectedTime} h.</p>
            <p className="mb-[15px] border-l-2 border-[#9aab8c] bg-[#f4f5ee] px-[10px] py-[9px] text-left text-[9px] leading-[1.5] text-[#626c58]">Todavía no se guardó ni se envió ningún turno. Más adelante conectaremos esta pantalla a una agenda real.</p>
            <button className="mt-3 p-1 text-[10px] text-[#766e65] hover:text-[#714c5c]" type="button" onClick={() => setStep("selection")}>Hacer otra reserva de prueba</button>
          </div>}
        </div>

        <div className="pointer-events-none absolute -right-[420px] top-5 hidden size-[400px] rounded-full border border-[#eee8df] md:block" />
        <div className="pointer-events-none absolute -right-[377px] top-[62px] hidden size-[315px] rounded-full border border-[#f0ebe4] md:block" />
      </section>

      <section className="grid grid-cols-2 gap-x-3 gap-y-[18px] border-t border-[#eee9e1] bg-[#f7f4ee] px-[19px] py-[22px] sm:flex sm:min-h-[111px] sm:items-center sm:justify-center sm:gap-[clamp(30px,7vw,100px)] sm:px-8 sm:py-5" id="ubicacion" aria-label="Información del espacio">
        <div className="flex items-center gap-2 sm:gap-[11px]"><span className="grid size-[30px] shrink-0 place-items-center rounded-full border border-[#e4ddd2] font-serif text-sm text-[#8b7668] sm:size-[34px] sm:text-base">✳</span><span className="grid gap-1"><strong className="text-[8px] font-semibold sm:text-[9px]">Atención personalizada</strong><small className="text-[7px] text-[#8b8379] sm:text-[8px]">Cada visita, a tu ritmo</small></span></div>
        <div className="flex items-center gap-2 sm:gap-[11px]"><span className="grid size-[30px] shrink-0 place-items-center rounded-full border border-[#e4ddd2] font-serif text-sm text-[#8b7668] sm:size-[34px] sm:text-base">⌖</span><span className="grid gap-1"><strong className="text-[8px] font-semibold sm:text-[9px]">Palermo, Buenos Aires</strong><small className="text-[7px] text-[#8b8379] sm:text-[8px]">Un espacio hecho para vos</small></span></div>
        <div className="flex items-center gap-2 sm:gap-[11px]"><span className="grid size-[30px] shrink-0 place-items-center rounded-full border border-[#e4ddd2] font-serif text-sm text-[#8b7668] sm:size-[34px] sm:text-base">♡</span><span className="grid gap-1"><strong className="text-[8px] font-semibold sm:text-[9px]">Reservá en un minuto</strong><small className="text-[7px] text-[#8b8379] sm:text-[8px]">Elegí día y horario online</small></span></div>
        <p className="col-span-2 m-0 text-center text-[7px] tracking-[.14em] text-[#aaa297] sm:hidden">DEMO DE PRODUCTO · DATOS DE EJEMPLO</p>
      </section>
    </main>
  );
}
