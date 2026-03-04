import { MoreVertical, Plus } from 'lucide-react';
import type { Project, ProjectStatus } from '../data/mockProjects';

const statusStyles: Record<ProjectStatus, string> = {
  COMPLETED: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'IN PROGRESS': 'bg-blue-100 text-blue-700 border-blue-200',
  REVIEW: 'bg-amber-100 text-amber-700 border-amber-200',
  DRAFT: 'bg-red-100 text-red-700 border-red-200',
};

interface ProjectCardProps {
  project?: Project;
  isNew?: boolean;
  onAction: (message: string) => void;
}

export function ProjectCard({ project, isNew = false, onAction }: ProjectCardProps) {
  if (isNew) {
    return (
      <button
        className="group flex min-h-[220px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-white p-6 text-zinc-500 transition hover:border-zinc-400 hover:bg-zinc-50"
        onClick={() => onAction('Nuevo proyecto creado (demo).')}
        type="button"
      >
        <div className="mb-4 rounded-full border border-zinc-300 p-3 transition group-hover:border-zinc-400">
          <Plus className="h-6 w-6" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-wide">New Project</p>
        <p className="mt-1 text-xs text-zinc-400">Crear un nuevo expediente</p>
      </button>
    );
  }

  if (!project) return null;

  return (
    <article className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-white p-5 shadow-card ring-1 ring-zinc-200 transition hover:-translate-y-0.5">
      <div>
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-zinc-900">{project.name}</h3>
            <p className="text-xs text-zinc-500">ID: {project.id}</p>
          </div>
          <button
            className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
            onClick={() => onAction(`Acciones rápidas para ${project.name}: Renombrar, Duplicar, Eliminar`) }
            type="button"
            aria-label={`Quick actions for ${project.name}`}
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-400">Categoría</p>
            <p className="font-medium text-zinc-700">{project.category}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-400">Tamaño</p>
            <p className="font-medium text-zinc-700">{project.fileSize}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-400">Última actualización</p>
          <p className="text-sm font-medium text-zinc-700">{project.updatedAt}</p>
        </div>
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>
    </article>
  );
}
