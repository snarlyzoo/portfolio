export function VideoEmbed({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-ink shadow-sm">
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title={`${title} — gameplay`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
