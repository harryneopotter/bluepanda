import { describe, it, expect } from 'vitest'
import { caseStudiesData } from '../caseStudiesData.js'

describe('caseStudiesData', () => {
  describe('module structure', () => {
    it('exports a non-null object', () => {
      expect(caseStudiesData).toBeDefined()
      expect(typeof caseStudiesData).toBe('object')
      expect(caseStudiesData).not.toBeNull()
    })
  })

  // --- linkText fields added in this PR ---
  describe('linkText field', () => {
    it('Almaha Foods entry has linkText "Live Website"', () => {
      const entry = caseStudiesData['Almaha Foods — Frontend Deconstruction & Security Hardening']
      expect(entry).toBeDefined()
      expect(entry.linkText).toBe('Live Website')
    })

    it('Codex-webui entry has linkText "Live Website"', () => {
      const entry = caseStudiesData['Codex-webui']
      expect(entry).toBeDefined()
      expect(entry.linkText).toBe('Live Website')
    })

    it('PandaBanana entry has linkText "Live Demo"', () => {
      const entry = caseStudiesData['PandaBanana']
      expect(entry).toBeDefined()
      expect(entry.linkText).toBe('Live Demo')
    })

    it('Nobius Content Bot entry has linkText "Live Website"', () => {
      const entry = caseStudiesData['Nobius Content Bot — Self-Healing CMS via Telegram']
      expect(entry).toBeDefined()
      expect(entry.linkText).toBe('Live Website')
    })

    it('entries without a liveUrl do not have a linkText', () => {
      // Telegram CMS has no linkText since its liveUrl was always there but no linkText was added
      const noLinkTextEntries = ['Remote Cloud Dashboard — Secure VM Orchestration', 'Smriti — AI Context Engine', 'PlaytimeFun', 'aicli']
      noLinkTextEntries.forEach((key) => {
        expect(caseStudiesData[key].linkText).toBeUndefined()
      })
    })
  })

  // --- liveUrl updated for Almaha Foods in this PR ---
  describe('Almaha Foods liveUrl', () => {
    it('uses the updated URL almahafoods.com', () => {
      const entry = caseStudiesData['Almaha Foods — Frontend Deconstruction & Security Hardening']
      expect(entry.liveUrl).toBe('https://almahafoods.com')
    })

    it('does not point to the old bhaiyaji.co.in URL', () => {
      const entry = caseStudiesData['Almaha Foods — Frontend Deconstruction & Security Hardening']
      expect(entry.liveUrl).not.toContain('bhaiyaji.co.in')
    })
  })

  // --- New entry: Nobius Content Bot ---
  describe('Nobius Content Bot — Self-Healing CMS via Telegram', () => {
    const KEY = 'Nobius Content Bot — Self-Healing CMS via Telegram'

    it('exists in the data', () => {
      expect(caseStudiesData[KEY]).toBeDefined()
    })

    it('has required fields: challenge, solution, techStack, keyFeatures, impact', () => {
      const entry = caseStudiesData[KEY]
      expect(entry.challenge).toBeTruthy()
      expect(entry.solution).toBeTruthy()
      expect(Array.isArray(entry.techStack)).toBe(true)
      expect(entry.techStack.length).toBeGreaterThan(0)
      expect(Array.isArray(entry.keyFeatures)).toBe(true)
      expect(entry.keyFeatures.length).toBeGreaterThan(0)
      expect(entry.impact).toBeTruthy()
    })

    it('has a liveUrl pointing to nobius.audio', () => {
      expect(caseStudiesData[KEY].liveUrl).toBe('https://nobius.audio')
    })

    it('techStack includes Node.js and Telegram Bot API', () => {
      const { techStack } = caseStudiesData[KEY]
      expect(techStack).toContain('Node.js 20.x')
      expect(techStack).toContain('Telegram Bot API')
    })

    it('keyFeatures mentions self-healing and 60+ sections', () => {
      const { keyFeatures } = caseStudiesData[KEY]
      expect(keyFeatures.some(f => f.includes('60+'))).toBe(true)
      expect(keyFeatures.some(f => /self-healing/i.test(f))).toBe(true)
    })
  })

  // --- New entry: Legacy Retail ---
  describe('Legacy Retail — Quotation Intelligence & Catalog Recovery', () => {
    const KEY = 'Legacy Retail — Quotation Intelligence & Catalog Recovery'

    it('exists in the data', () => {
      expect(caseStudiesData[KEY]).toBeDefined()
    })

    it('has required fields: challenge, solution, techStack, keyFeatures, impact', () => {
      const entry = caseStudiesData[KEY]
      expect(entry.challenge).toBeTruthy()
      expect(entry.solution).toBeTruthy()
      expect(Array.isArray(entry.techStack)).toBe(true)
      expect(entry.techStack.length).toBeGreaterThan(0)
      expect(Array.isArray(entry.keyFeatures)).toBe(true)
      expect(entry.keyFeatures.length).toBeGreaterThan(0)
      expect(entry.impact).toBeTruthy()
    })

    it('has status "In Development"', () => {
      expect(caseStudiesData[KEY].status).toBe('In Development')
    })

    it('does not have a liveUrl', () => {
      expect(caseStudiesData[KEY].liveUrl).toBeUndefined()
    })

    it('techStack includes FastAPI and Sarvam AI Vision', () => {
      const { techStack } = caseStudiesData[KEY]
      expect(techStack).toContain('FastAPI')
      expect(techStack.some(t => t.includes('Sarvam AI Vision'))).toBe(true)
    })

    it('impact mentions catalog rows and time savings', () => {
      expect(caseStudiesData[KEY].impact).toMatch(/1,250\+/)
      expect(caseStudiesData[KEY].impact).toMatch(/40%/)
    })
  })

  // --- New entry: WhatsApp Lead Management ---
  describe('WhatsApp Lead Management — Recovering Lost Ad Leads', () => {
    const KEY = 'WhatsApp Lead Management — Recovering Lost Ad Leads'

    it('exists in the data', () => {
      expect(caseStudiesData[KEY]).toBeDefined()
    })

    it('has required fields: challenge, solution, techStack, keyFeatures, impact', () => {
      const entry = caseStudiesData[KEY]
      expect(entry.challenge).toBeTruthy()
      expect(entry.solution).toBeTruthy()
      expect(Array.isArray(entry.techStack)).toBe(true)
      expect(entry.techStack.length).toBeGreaterThan(0)
      expect(Array.isArray(entry.keyFeatures)).toBe(true)
      expect(entry.keyFeatures.length).toBeGreaterThan(0)
      expect(entry.impact).toBeTruthy()
    })

    it('has status "In Development"', () => {
      expect(caseStudiesData[KEY].status).toBe('In Development')
    })

    it('does not have a liveUrl', () => {
      expect(caseStudiesData[KEY].liveUrl).toBeUndefined()
    })

    it('techStack includes FastAPI and WhatsApp Business API', () => {
      const { techStack } = caseStudiesData[KEY]
      expect(techStack.some(t => t.includes('FastAPI'))).toBe(true)
      expect(techStack.some(t => t.includes('WhatsApp Business API'))).toBe(true)
    })

    it('keyFeatures includes 5-stage workflow and win/loss surveys', () => {
      const { keyFeatures } = caseStudiesData[KEY]
      expect(keyFeatures.some(f => /5-stage/i.test(f))).toBe(true)
      expect(keyFeatures.some(f => /win.loss/i.test(f))).toBe(true)
    })

    it('impact mentions lead recovery rate', () => {
      expect(caseStudiesData[KEY].impact).toMatch(/50-60%/)
    })
  })

  // --- Regression: existing entries still intact ---
  describe('pre-existing entries remain intact', () => {
    it('Telegram CMS Website entry is still present', () => {
      expect(caseStudiesData['Telegram CMS Website']).toBeDefined()
    })

    it('Remote Cloud Dashboard entry is still present', () => {
      expect(caseStudiesData['Remote Cloud Dashboard — Secure VM Orchestration']).toBeDefined()
    })

    it('PandaBanana entry still has correct liveUrl', () => {
      expect(caseStudiesData['PandaBanana'].liveUrl).toBe('https://banana.bluepanda.cloud/')
    })

    it('Codex-webui liveUrl is unchanged', () => {
      expect(caseStudiesData['Codex-webui'].liveUrl).toBe('https://codex-webui-ts.hnpart.xyz')
    })
  })

  // --- Boundary / negative cases ---
  describe('boundary and negative cases', () => {
    it('all entries have at least a challenge and solution', () => {
      Object.entries(caseStudiesData).forEach(([key, value]) => {
        expect(value.challenge, `${key} missing challenge`).toBeTruthy()
        expect(value.solution, `${key} missing solution`).toBeTruthy()
      })
    })

    it('accessing a non-existent key returns undefined', () => {
      expect(caseStudiesData['Non-Existent Project']).toBeUndefined()
    })

    it('all entries with liveUrl have a string URL starting with http', () => {
      Object.entries(caseStudiesData)
        .filter(([, v]) => v.liveUrl)
        .forEach(([key, v]) => {
          expect(v.liveUrl, `${key} liveUrl should start with http`).toMatch(/^https?:\/\//)
        })
    })

    it('all entries with githubUrl have a string URL', () => {
      Object.entries(caseStudiesData)
        .filter(([, v]) => v.githubUrl)
        .forEach(([key, v]) => {
          expect(typeof v.githubUrl, `${key} githubUrl should be string`).toBe('string')
        })
    })
  })
})