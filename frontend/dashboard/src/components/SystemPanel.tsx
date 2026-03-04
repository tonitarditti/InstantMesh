import { Activity, Bot, Cpu, FileClock, Pencil, Share2 } from 'lucide-react';

interface SystemPanelProps {
  onAction: (message: string) => void;
}

const activity = [
  { icon: Pencil, text: 'Editaste “Torre Alameda”', time: 'Hace 5 min' },
  { icon: Share2, text: 'Compartiste “Villa Cedros”', time: 'Hace 22 min' },
  { icon: FileClock, text: 'Render final exportado', time: 'Hace 1 h' },
];

function Gauge({ label, value, tone }: { label: string; value: number; tone: 'blue' | 'emerald' }) {
  const toneClass = tone === 'blue' ? 'from-blue-500 to-blue-300' : 'from-emerald-500 to-emerald-300';
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-medium text-zinc-500">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-200">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${toneClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function SystemPanel({ onAction }: SystemPanelProps) {
  return (
    <aside className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-zinc-200">
      <header className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">System</h2>
        <Activity className="h-4 w-4 text-zinc-400" />
      </header>

      <section className="mb-6 space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
          <Bot className="h-4 w-4 text-blue-500" />
          Motor AI
        </div>
        <Gauge label="Inference Queue" value={74} tone="blue" />
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
          <Cpu className="h-4 w-4 text-emerald-500" />
          GPU
        </div>
        <Gauge label="VRAM Usage" value={61} tone="emerald" />
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-zinc-700">Actividad reciente</h3>
          <button
            className="text-xs font-medium text-blue-600 hover:text-blue-700"
            onClick={() => onAction('Actividad completa abierta (demo).')}
            type="button"
          >
            Ver todo
          </button>
        </div>

        <ul className="space-y-3">
          {activity.map(({ icon: Icon, text, time }) => (
            <li className="rounded-xl bg-zinc-50 px-3 py-2" key={text}>
              <div className="flex items-start gap-2">
                <Icon className="mt-0.5 h-3.5 w-3.5 text-zinc-500" />
                <div>
                  <p className="text-sm text-zinc-700">{text}</p>
                  <p className="text-xs text-zinc-400">{time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
