# Maintenance Guide

## Content Updates

- Projects: update `src/components/ProjectsSection.jsx`
- Contact details: update `src/components/ContactSection.jsx`
- About section text: update `src/components/AboutSection.jsx`
- Resume: replace `public/Durgesh_resume.pdf`

## Release Checklist

1. Run `npm run lint`
2. Run `npm run build`
3. Run `npm run generate-sitemap`
4. Verify `public/sitemap.xml`
5. Deploy to Vercel

## Security Routine

- Run `npm run audit`
- Keep dependencies updated
- Rotate external service keys if misuse is detected
