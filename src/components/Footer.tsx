import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import type { ElementType } from 'react'

type SocialLink = {
  href: string
  label: string
  icon: ElementType
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/hassansheikh33',
    label: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://linkedin.com/in/hassan-bilal-dev',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'https://www.upwork.com/freelancers/~01093f45f2308fd7d3?mp_source=share',
    label: 'Upwork',
    icon: SiUpwork,
  },
  {
    href: 'https://www.fiverr.com/s/XL23K6m',
    label: 'Fiverr',
    icon: SiFiverr,
  },
]

export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/10 bg-gradient-to-b from-transparent to-blue-950/30 py-6">
      <div className="mx-auto mb-6 flex w-full max-w-[1120px] items-center justify-between gap-8 px-5 max-[768px]:flex-col max-[640px]:px-3">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <CodeOffIcon className="h-5 w-5 transition-colors duration-200 hover:text-[#f9a66c]" />
            <p className="text-lg font-bold tracking-[0.08em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
              Portfolio
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:border-[#f9a66c]"
                key={link.href}
              >
                <Icon className="h-5 w-5 transition-colors duration-200 hover:text-[#f9a66c]" />
              </a>
            )
          })}
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="text-center text-sm text-[#9ba4ab]">
          Copyright © {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
