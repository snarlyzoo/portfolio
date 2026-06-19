import type { FileTreeNode } from "@/content/types";

/**
 * The annotated file tree is the structural "diagram" — chosen over
 * box-and-line system diagrams, which were rejected as cluttered.
 */
export function FileTree({ nodes }: { nodes: FileTreeNode[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white p-5 font-mono text-[13px] leading-relaxed">
      <ul className="space-y-1">
        {nodes.map((n) => (
          <TreeNode key={n.name} node={n} depth={0} />
        ))}
      </ul>
    </div>
  );
}

function TreeNode({ node, depth }: { node: FileTreeNode; depth: number }) {
  const isDir = node.kind === "dir";
  return (
    <li>
      <div
        className="flex flex-wrap items-baseline gap-x-3"
        style={{ paddingLeft: `${depth * 18}px` }}
      >
        <span
          className={
            isDir ? "font-semibold text-teal-deep" : "text-ink"
          }
        >
          <span aria-hidden className="mr-1.5 text-ink-faint">
            {isDir ? "▸" : "•"}
          </span>
          {node.name}
        </span>
        {node.note && (
          <span className="font-sans text-xs text-ink-faint">— {node.note}</span>
        )}
      </div>
      {node.children && node.children.length > 0 && (
        <ul className="mt-1 space-y-1">
          {node.children.map((c) => (
            <TreeNode key={c.name} node={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
