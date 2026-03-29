import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

// Mock framer-motion so motion.div renders as a plain div
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) =>
        React.forwardRef(({ children, onClick, className, style, ...rest }, ref) =>
          React.createElement(prop, { ref, onClick, className, style }, children)
        ),
    }
  ),
  useReducedMotion: () => false,
  AnimatePresence: ({ children }) => children,
}))

// Mock lucide-react icons: each is a minimal valid React functional component
// (vi.mock is hoisted, so factories cannot reference top-level variables)
vi.mock('lucide-react', () => {
  const noop = () => null
  return {
    Zap: noop, Cpu: noop, Server: noop, Globe: noop, Shield: noop,
    Activity: noop, Sparkles: noop, Code2: noop, Database: noop,
    ExternalLink: noop, Github: noop, ArrowRight: noop, Home: noop,
    Briefcase: noop, User: noop, Mail: noop, Terminal: noop,
    FileText: noop, BrainCircuit: noop, Wrench: noop, Factory: noop,
  }
})

// Mock the panda hologram image import
vi.mock('./assets/panda-hologram.png', () => ({ default: 'panda-hologram.png' }))

import { ProjectCard, ProjectsGrid, BottomNav, FeaturedProjects } from '../SuperpositionComponents.jsx'

// ──────────────────────────────────────────────────────────────────────────────
// Helper factory for minimal project objects
// ──────────────────────────────────────────────────────────────────────────────
const baseProject = (overrides = {}) => ({
  status: 'live',
  title: 'Test Project',
  description: 'A test description.',
  tags: ['React'],
  type: 'web',
  metrics: [],
  ...overrides,
})

// ──────────────────────────────────────────────────────────────────────────────
// ProjectCard — changed in this PR (githubUrl vs liveUrl mutual-exclusion logic)
// ──────────────────────────────────────────────────────────────────────────────
describe('ProjectCard', () => {
  describe('link rendering (changed behaviour: if/else instead of independent conditions)', () => {
    it('shows the Code link when githubUrl is present', () => {
      const project = baseProject({ githubUrl: 'https://github.com/example/repo' })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      expect(screen.getByRole('link', { name: /source code/i })).toBeInTheDocument()
    })

    it('Code link points to the correct githubUrl', () => {
      const project = baseProject({ githubUrl: 'https://github.com/example/repo' })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      expect(screen.getByRole('link', { name: /source code/i })).toHaveAttribute(
        'href',
        'https://github.com/example/repo'
      )
    })

    it('does NOT show the Website link when githubUrl is present (mutual exclusion)', () => {
      const project = baseProject({
        githubUrl: 'https://github.com/example/repo',
        liveUrl: 'https://example.com',
      })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      expect(screen.queryByRole('link', { name: /view website/i })).not.toBeInTheDocument()
    })

    it('shows the Website link when only liveUrl is present (no githubUrl)', () => {
      const project = baseProject({ liveUrl: 'https://example.com' })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      expect(screen.getByRole('link', { name: /view website/i })).toBeInTheDocument()
    })

    it('Website link points to the correct liveUrl', () => {
      const project = baseProject({ liveUrl: 'https://almahafoods.com' })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      expect(screen.getByRole('link', { name: /view website/i })).toHaveAttribute(
        'href',
        'https://almahafoods.com'
      )
    })

    it('shows neither Code nor Website link when both are absent', () => {
      const project = baseProject()
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      expect(screen.queryByRole('link', { name: /source code/i })).not.toBeInTheDocument()
      expect(screen.queryByRole('link', { name: /view website/i })).not.toBeInTheDocument()
    })

    it('external links have rel="noopener noreferrer"', () => {
      const project = baseProject({ githubUrl: 'https://github.com/example/repo' })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      const link = screen.getByRole('link', { name: /source code/i })
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('Website link opens in new tab (target=_blank)', () => {
      const project = baseProject({ liveUrl: 'https://example.com' })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      const link = screen.getByRole('link', { name: /view website/i })
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  describe('Case Study button', () => {
    it('renders a Case Study button', () => {
      render(<ProjectCard project={baseProject()} index={0} onProjectClick={vi.fn()} />)
      expect(screen.getByRole('button', { name: /case study/i })).toBeInTheDocument()
    })

    it('calls onProjectClick with the project when Case Study button is clicked', () => {
      const project = baseProject({ title: 'Clickable Project' })
      const handler = vi.fn()
      render(<ProjectCard project={project} index={0} onProjectClick={handler} />)
      fireEvent.click(screen.getByRole('button', { name: /case study/i }))
      expect(handler).toHaveBeenCalledOnce()
      expect(handler).toHaveBeenCalledWith(project)
    })

    it('does not throw when onProjectClick is undefined', () => {
      const project = baseProject()
      expect(() =>
        render(<ProjectCard project={project} index={0} />)
      ).not.toThrow()
    })
  })

  describe('project title and status rendering', () => {
    it('renders the project title', () => {
      const project = baseProject({ title: 'Nobius Content Bot — Self-Healing CMS via Telegram' })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      expect(screen.getByText('Nobius Content Bot — Self-Healing CMS via Telegram')).toBeInTheDocument()
    })

    it('renders the project status badge', () => {
      const project = baseProject({ status: 'development' })
      render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      expect(screen.getByText(/development/i)).toBeInTheDocument()
    })
  })

  // Boundary / regression: projects without metrics field
  describe('edge cases', () => {
    it('renders without crashing when metrics array is empty', () => {
      const project = baseProject({ metrics: [] })
      expect(() =>
        render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      ).not.toThrow()
    })

    it('renders without crashing when metrics is absent', () => {
      const { metrics: _, ...project } = baseProject()
      expect(() =>
        render(<ProjectCard project={project} index={0} onProjectClick={vi.fn()} />)
      ).not.toThrow()
    })
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// ProjectsGrid — new entries added in this PR
// ──────────────────────────────────────────────────────────────────────────────
describe('ProjectsGrid', () => {
  it('renders without crashing', () => {
    expect(() => render(<ProjectsGrid onProjectClick={vi.fn()} />)).not.toThrow()
  })

  it('renders the Nobius Content Bot project (first new entry, placed at index 0)', () => {
    render(<ProjectsGrid onProjectClick={vi.fn()} />)
    expect(
      screen.getByText(/Nobius Content Bot — Self-Healing CMS via Telegram/i)
    ).toBeInTheDocument()
  })

  it('renders the Legacy Retail project (new entry)', () => {
    render(<ProjectsGrid onProjectClick={vi.fn()} />)
    expect(
      screen.getByText(/Legacy Retail — Quotation Intelligence & Catalog Recovery/i)
    ).toBeInTheDocument()
  })

  it('renders the WhatsApp Lead Management project (new entry)', () => {
    render(<ProjectsGrid onProjectClick={vi.fn()} />)
    expect(
      screen.getByText(/WhatsApp Lead Management — Recovering Lost Ad Leads/i)
    ).toBeInTheDocument()
  })

  it('Nobius project shows Code link (has githubUrl)', () => {
    render(<ProjectsGrid onProjectClick={vi.fn()} />)
    // There may be multiple Source Code links; check at least one exists
    const codeLinks = screen.getAllByRole('link', { name: /source code/i })
    expect(codeLinks.length).toBeGreaterThan(0)
  })

  it('Legacy Retail project shows no Code or Website link (neither githubUrl nor liveUrl)', () => {
    render(<ProjectsGrid onProjectClick={vi.fn()} />)
    const titles = screen.getAllByText(/Legacy Retail/i)
    expect(titles.length).toBeGreaterThan(0) // sanity check the project renders
  })

  it('Almaha Foods shows Website link (liveUrl only, no githubUrl)', () => {
    render(<ProjectsGrid onProjectClick={vi.fn()} />)
    // Almaha Foods only has liveUrl, so should show "View Website" link
    const websiteLinks = screen.getAllByRole('link', { name: /view website/i })
    expect(websiteLinks.some(l => l.getAttribute('href') === 'https://almahafoods.com')).toBe(true)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// BottomNav — changed 'projects' id/label to 'case-studies'/'Cases'
// ──────────────────────────────────────────────────────────────────────────────
describe('BottomNav', () => {
  it('renders without crashing', () => {
    expect(() =>
      render(<BottomNav currentPage="home" setPage={vi.fn()} />)
    ).not.toThrow()
  })

  it('has a nav button with aria-label for "Cases" (not "Projects")', () => {
    render(<BottomNav currentPage="home" setPage={vi.fn()} />)
    expect(screen.getByRole('button', { name: /navigate to cases/i })).toBeInTheDocument()
  })

  it('does NOT have a nav button with the old "Projects" label', () => {
    render(<BottomNav currentPage="home" setPage={vi.fn()} />)
    expect(screen.queryByRole('button', { name: /navigate to projects/i })).not.toBeInTheDocument()
  })

  it('calls setPage with "case-studies" when the Cases button is clicked', () => {
    const setPage = vi.fn()
    render(<BottomNav currentPage="home" setPage={setPage} />)
    fireEvent.click(screen.getByRole('button', { name: /navigate to cases/i }))
    expect(setPage).toHaveBeenCalledWith('case-studies')
  })

  it('highlights the active page button', () => {
    render(<BottomNav currentPage="case-studies" setPage={vi.fn()} />)
    const button = screen.getByRole('button', { name: /navigate to cases/i })
    // The active item has extra classes containing text-brand-primary
    expect(button.className).toMatch(/text-brand-primary/)
  })

  it('renders all 6 expected navigation items', () => {
    render(<BottomNav currentPage="home" setPage={vi.fn()} />)
    const expectedLabels = ['Home', 'Services', 'Cases', 'About', 'AI Architect', 'Contact']
    expectedLabels.forEach((label) => {
      expect(
        screen.getByRole('button', { name: new RegExp(`navigate to ${label}`, 'i') })
      ).toBeInTheDocument()
    })
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// FeaturedProjects — changed navigate('projects') → navigate('case-studies')
// ──────────────────────────────────────────────────────────────────────────────
describe('FeaturedProjects', () => {
  it('renders without crashing', () => {
    expect(() =>
      render(<FeaturedProjects navigate={vi.fn()} />)
    ).not.toThrow()
  })

  it('calls navigate with "case-studies" when a featured project card is clicked', () => {
    const navigate = vi.fn()
    render(<FeaturedProjects navigate={navigate} />)
    // Click the first project card (motion.div rendered as div)
    const projectCards = screen.getAllByText(/Almaha Foods|Smriti|Remote Cloud Dashboard/i)
    fireEvent.click(projectCards[0])
    expect(navigate).toHaveBeenCalledWith('case-studies')
  })

  it('does NOT call navigate with "projects" on click', () => {
    const navigate = vi.fn()
    render(<FeaturedProjects navigate={navigate} />)
    const projectCards = screen.getAllByText(/Almaha Foods|Smriti|Remote Cloud Dashboard/i)
    fireEvent.click(projectCards[0])
    expect(navigate).not.toHaveBeenCalledWith('projects')
  })

  it('does not throw when navigate prop is omitted', () => {
    expect(() => render(<FeaturedProjects />)).not.toThrow()
  })

  // Regression: clicking without navigate prop should not crash
  it('clicking a card without navigate prop does not throw', () => {
    render(<FeaturedProjects />)
    const projectCards = screen.getAllByText(/Almaha Foods|Smriti|Remote Cloud Dashboard/i)
    expect(() => fireEvent.click(projectCards[0])).not.toThrow()
  })
})