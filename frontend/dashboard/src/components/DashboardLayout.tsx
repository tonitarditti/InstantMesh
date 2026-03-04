import { Search, Share2, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  categories,
  projects,
  statuses,
  type ProjectCategory,
  type ProjectStatus,
} from '../data/mockProjects';
import { ProjectCard } from './ProjectCard';
import { SystemPanel } from './SystemPanel';

type FilterCategory = ProjectCategory | 'All';
type FilterStatus = ProjectStatus | 'All';

interface Toast {
  id: number;
  message: string;
}

export function DashboardLayout() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<FilterCategory>('All');
  const [status, setStatus] = useState<FilterStatus>('All');
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2500);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchQuery = project.name.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === 'All' || project.category === category;
      const matchStatus = status === 'All' || project.status === status;
      return matchQuery && matchCategory && matchStatus;
    });
  }, [query, category, status]);

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto grid w-full max-w-7xl gap-6 xl:grid-cols-[1fr_320px]">
        <main className="space-y-5">
          <header className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-zinc-200 md:p-5">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-xl font-semibold text-zinc-900">Architectural Projects</h1>
                <p className="text-sm text-zinc-500">Panel profesional con estado y seguimiento</p>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
                onClick={() => showToast('Enlace de compartir generado (demo).')}
                type="button"
              >
                <Share2 className="h-4 w-4" />
                Compartir
              </button>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px]">
              <label className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <input
                  className="w-full rounded-xl border border-zinc-300 bg-zinc-50 py-2.5 pl-9 pr-3 text-sm outline-none ring-blue-400 transition focus:bg-white focus:ring"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar proyecto..."
                />
              </label>

              <select
                className="rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm outline-none ring-blue-400 transition focus:bg-white focus:ring"
                value={category}
                onChange={(event) => setCategory(event.target.value as FilterCategory)}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    Categoría: {item}
                  </option>
                ))}
              </select>

              <select
                className="rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm outline-none ring-blue-400 transition focus:bg-white focus:ring"
                value={status}
                onChange={(event) => setStatus(event.target.value as FilterStatus)}
              >
                {statuses.map((item) => (
                  <option key={item} value={item}>
                    Estado: {item}
                  </option>
                ))}
              </select>
            </div>
          </header>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <ProjectCard isNew onAction={showToast} />
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onAction={showToast} />
            ))}
          </section>
        </main>

        <SystemPanel onAction={showToast} />
      </div>

      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            className="flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 text-sm text-zinc-100 shadow-lg"
            key={toast.id}
            role="status"
          >
            <span>{toast.message}</span>
            <button
              className="text-zinc-400 transition hover:text-zinc-100"
              onClick={() => setToasts((prev) => prev.filter((item) => item.id !== toast.id))}
              type="button"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
