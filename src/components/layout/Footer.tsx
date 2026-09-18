import { siteConfig } from '@/data/siteConfig';
import { navigationLinks } from '@/data/navigation';
import { socialLinks } from '@/data/social';
import { GithubIcon, TwitterXIcon, InstagramIcon, DiscordIcon } from '@/components/ui/Icons';

function getFooterSocialIcon(platform: string) {
  switch (platform) {
    case 'github':
      return <GithubIcon size={16} />;
    case 'twitter':
      return <TwitterXIcon size={15} />;
    case 'instagram':
      return <InstagramIcon size={16} />;
    case 'discord':
      return <DiscordIcon size={16} />;
    default:
      return null;
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Footer"
      className="w-full bg-[#050505] text-white relative overflow-hidden pt-20 pb-8 border-t border-neutral-900"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-16">
        {/* Top Headline */}
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            <span>Designed with precision.</span>{' '}
            <span className="text-neutral-400">Built for scale.</span>
          </h2>
        </div>

        {/* Contact & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8 border-y border-neutral-800">
          {/* Col 1: Email */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Email
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-base text-white hover:text-neutral-300 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Col 2: Chat */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Call / Message
            </span>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-neutral-300 transition-colors"
            >
              Book a Call (WhatsApp) ↗
            </a>
          </div>

          {/* Col 3: Social Icons */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Social
            </span>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all hover:scale-105"
                >
                  {getFooterSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span>© {currentYear} {siteConfig.name}</span>
          </div>
        </div>

        {/* Huge Brand Typography Overflow at bottom in Pure White */}
        <div className="pt-10 select-none pointer-events-none text-center font-black tracking-tighter text-7xl sm:text-9xl md:text-[13rem] text-white truncate leading-none">
          JIGNESH
        </div>
      </div>
    </footer>
  );
}
