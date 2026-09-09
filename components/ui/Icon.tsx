import type { IconBaseProps } from "react-icons";
import {
  FiCpu,
  FiCreditCard,
  FiDatabase,
  FiDownloadCloud,
  FiCode,
  FiGitCommit,
  FiGlobe,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiPackage,
  FiServer,
  FiShield,
  FiStar,
  FiTool,
  FiClock,
} from "react-icons/fi";
import type { IconName } from "@/constants";

/**
 * The one place a semantic icon name becomes a glyph. Feather only — don't mix
 * in a second icon set, and don't import `react-icons` into `constants/`, which
 * is what keeps it out of the metadata routes' module graph.
 */
const ICONS: Record<IconName, (props: IconBaseProps) => JSX.Element> = {
  installs: FiDownloadCloud,
  products: FiPackage,
  rating: FiStar,
  clock: FiClock,
  globe: FiGlobe,
  ai: FiCpu,
  payments: FiCreditCard,
  security: FiShield,
  servers: FiServer,
  blocks: FiLayers,
  commits: FiGitCommit,
  database: FiDatabase,
  code: FiCode,
  wordpress: FiGrid,
  frontend: FiMonitor,
  toolbox: FiTool,
};

export const Icon = ({ name, ...props }: { name: IconName } & IconBaseProps) => {
  const Glyph = ICONS[name];
  return <Glyph aria-hidden="true" {...props} />;
};

/** Icon in a tinted square. The one badge shape on the page. */
export const IconBadge = ({ name, className = "" }: { name: IconName; className?: string }) => (
  <span
    className={`inline-grid h-10 w-10 shrink-0 place-items-center rounded border border-line bg-accent-subtle text-accent ${className}`}
  >
    <Icon name={name} size={18} />
  </span>
);
