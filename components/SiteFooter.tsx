import { PROFILE, SOCIAL_MEDIA } from "@/constants";

export const SiteFooter = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row md:px-8">
      <p className="text-center text-small text-ink-faint sm:text-left">
        &copy; {new Date().getFullYear()} {PROFILE.name}
        <span className="mx-2 text-line-strong" aria-hidden="true">
          /
        </span>
        {PROFILE.focus}
      </p>

      <ul className="flex items-center gap-6">
        {SOCIAL_MEDIA.map(social => (
          <li key={social.id}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-small text-ink-muted transition-colors duration-200 hover:text-accent"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
