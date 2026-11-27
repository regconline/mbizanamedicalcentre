"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { ArrowLeft, ArrowRight, CalendarCheck2, CheckCircle2, FlaskConical, RotateCcw } from "lucide-react";

/**
 * Interactive Booking Demo — NOT a live appointment.
 * Purely client-side state. Nothing is sent to Navitas or stored anywhere.
 */
const types = [
  { id: "consult", name: "General consultation (demo)", mins: 15 },
  { id: "follow", name: "Follow-up visit (demo)", mins: 15 },
  { id: "chronic", name: "Chronic care review (demo)", mins: 30 },
  { id: "pdp", name: "PDP medical (demo)", mins: 20 },
];
const times = ["08:30", "09:15", "10:00", "11:30", "13:45", "14:30", "15:15", "16:00"];
const steps = ["Appointment", "Date", "Time", "Details", "Confirmed"];

export function BookingDemo() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("Demo Patient");
  const [phone, setPhone] = useState("000 000 0000");

  const days = useMemo(() => {
    const out: { iso: string; label: string; dow: string }[] = [];
    const d = new Date();
    while (out.length < 6) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() === 0) continue;
      out.push({
        iso: d.toISOString().slice(0, 10),
        dow: d.toLocaleDateString("en-ZA", { weekday: "short" }),
        label: d.toLocaleDateString("en-ZA", { day: "numeric", month: "short" }),
      });
    }
    return out;
  }, []);

  const canNext = [!!type, !!date, !!time, name.trim().length > 1 && phone.trim().length > 5][step];
  const restart = () => { setStep(0); setType(null); setDate(null); setTime(null); };
  const chosen = types.find((t) => t.id === type);

  const choice = (active: boolean) =>
    clsx("rounded-xl border px-4 py-3 text-left text-sm font-medium transition", active ? "border-navy bg-navy text-white" : "border-line bg-white hover:border-blue");

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-3 border-b border-amber-200 bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-900">
        <FlaskConical className="h-4 w-4 shrink-0" aria-hidden /> Interactive Booking Demo — Not a Live Appointment.
      </div>
      <div className="p-6 sm:p-8">
        <ol className="mb-8 flex gap-2" aria-label="Demo progress">
          {steps.map((s, i) => (
            <li key={s} className="flex-1">
              <span className={clsx("block h-1.5 rounded-full", i <= step ? "bg-blue" : "bg-line")} />
              <span className={clsx("mt-2 hidden text-xs sm:block", i === step ? "font-semibold text-navy" : "text-muted")}>{i + 1}. {s}</span>
            </li>
          ))}
        </ol>

        {step === 0 && (
          <fieldset>
            <legend className="font-heading text-lg font-bold text-navy">Select a fictional appointment type</legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {types.map((t) => (
                <button key={t.id} type="button" aria-pressed={type === t.id} onClick={() => setType(t.id)} className={choice(type === t.id)}>
                  {t.name}<span className="block text-xs opacity-70">{t.mins} min</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}
        {step === 1 && (
          <fieldset>
            <legend className="font-heading text-lg font-bold text-navy">Select a demonstration date</legend>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {days.map((d) => (
                <button key={d.iso} type="button" aria-pressed={date === d.iso} onClick={() => setDate(d.iso)} className={clsx(choice(date === d.iso), "text-center")}>
                  <span className="block text-xs opacity-70">{d.dow}</span>{d.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}
        {step === 2 && (
          <fieldset>
            <legend className="font-heading text-lg font-bold text-navy">Select an available demonstration time</legend>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {times.map((t) => (
                <button key={t} type="button" aria-pressed={time === t} onClick={() => setTime(t)} className={clsx(choice(time === t), "text-center")}>{t}</button>
              ))}
            </div>
          </fieldset>
        )}
        {step === 3 && (
          <fieldset className="space-y-4">
            <legend className="font-heading text-lg font-bold text-navy">Enter fictional patient details</legend>
            <p className="text-sm text-muted">Use made-up details only. Nothing you type here is saved or sent.</p>
            <label className="block text-sm font-medium">Name (fictional)
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 block w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-blue" autoComplete="off" />
            </label>
            <label className="block text-sm font-medium">Phone (fictional)
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 block w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-blue" autoComplete="off" />
            </label>
          </fieldset>
        )}
        {step === 4 && (
          <div role="status" className="text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" aria-hidden />
            <p className="mt-4 font-heading text-xl font-bold text-navy">Simulated booking confirmation</p>
            <dl className="mx-auto mt-6 max-w-sm space-y-2 rounded-xl bg-bg p-5 text-left text-sm">
              <div className="flex justify-between gap-4"><dt className="text-muted">Appointment</dt><dd className="text-right font-medium">{chosen?.name}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted">Date</dt><dd className="font-medium">{date}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted">Time</dt><dd className="font-medium">{time}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted">Patient</dt><dd className="font-medium">{name}</dd></div>
            </dl>
            <p className="mx-auto mt-5 max-w-md text-sm font-semibold text-amber-800">This is a demonstration. No appointment has been made. Use the live booking options above to book a real appointment.</p>
          </div>
        )}

        <div className="mt-8 flex justify-between gap-3">
          {step > 0 && step < 4 ? (
            <button type="button" onClick={() => setStep(step - 1)} className="btn btn-outline min-h-11"><ArrowLeft className="h-4 w-4" aria-hidden /> Back</button>
          ) : <span />}
          {step < 3 && <button type="button" disabled={!canNext} onClick={() => setStep(step + 1)} className="btn btn-navy min-h-11 disabled:opacity-40">Next <ArrowRight className="h-4 w-4" aria-hidden /></button>}
          {step === 3 && <button type="button" disabled={!canNext} onClick={() => setStep(4)} className="btn btn-primary min-h-11 disabled:opacity-40"><CalendarCheck2 className="h-4 w-4" aria-hidden /> Confirm demo booking</button>}
          {step === 4 && <button type="button" onClick={restart} className="btn btn-outline mx-auto min-h-11"><RotateCcw className="h-4 w-4" aria-hidden /> Restart demo</button>}
        </div>
      </div>
    </div>
  );
}
