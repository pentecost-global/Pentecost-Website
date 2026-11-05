import {
  CalendarBlankIcon,
  CalendarCheckIcon,
  CompassIcon,
  MapPinLineIcon,
} from "@phosphor-icons/react/dist/ssr";
import { TextLink } from "@/components/ui/text-link";
import { UPCOMING_GATHERINGS } from "@/lib/constants";

export function GatheringsList() {
  if (UPCOMING_GATHERINGS.length === 0) {
    return (
      <div className="empty-gathering group relative overflow-hidden rounded-md border border-border bg-secondary px-6 sm:px-10 py-9 transition-colors duration-200 hover:border-primary/40">
        <div className="empty-icon transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
          <CalendarCheckIcon size={26} weight="duotone" />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-none bg-primary" />
              Discerning Next City
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
              <MapPinLineIcon size={14} className="text-primary" /> City-to-city
              movement
            </span>
          </div>
          <h3 className="tracking-[-0.03em]">
            New gatherings to be announced
          </h3>
          <p>Led by prayer. Guided by the Spirit. Gathered in unity.</p>
        </div>

        <div className="shrink-0">
          <TextLink href="/gatherings">Explore gatherings</TextLink>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {UPCOMING_GATHERINGS.map((gathering) => (
        <article
          key={gathering.id}
          className="empty-gathering rounded-md border border-border bg-secondary px-6 sm:px-10 py-8"
        >
          <div className="empty-icon">
            <CalendarBlankIcon size={25} weight="duotone" />
          </div>
          <div className="flex-1">
            <h3>{gathering.title}</h3>
            <p className="inline-flex items-center gap-2 font-semibold text-foreground">
              <CompassIcon size={15} className="text-primary" />
              {gathering.date} · {gathering.city} · {gathering.venue}
            </p>
            <p>{gathering.details}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
