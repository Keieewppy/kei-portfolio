# Kei — Portfolio

Personal portfolio of **Chaitanya Yadav (Kei)**, software developer.
Built with **Next.js 15, React 19, Tailwind CSS v4, Framer Motion and Lenis**, using components from **Skiper UI** and **Vengeance UI**.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit the content

All text (projects, stack, journey, links) lives in **`src/data/profile.ts`**. Change it there and the page updates.

## Where each library is used

| Section | Component | Library |
|---|---|---|
| Navbar | Spotlight Navbar | Vengeance UI |
| Hero background | Animated Rays | Vengeance UI |
| Hero + section headings | Stagger Text | Vengeance UI |
| Terminal card edge | Border Beam | Vengeance UI |
| Project stats | Stats Counter | Vengeance UI |
| Contact card | Glow Border Card | Vengeance UI |
| Projects | Card stack scroll (skiper16) | Skiper UI |
| "BUILT TO SHIP" | Text scroll animation (skiper31) | Skiper UI |
| Contact links | Text roll (skiper58) | Skiper UI |
| Cursor | Spring mouse follow (skiper61) | Skiper UI |
| Scroll ring (bottom right) | Scroll progress (skiper89) | Skiper UI |
| Whole page | Smooth scrolling | Lenis |

Component source files are in `src/components/ui/vengeance` and `src/components/ui/skiper`. Each file notes where it came from and what was changed.

## Deploy (free)

1. Push this folder to a new GitHub repo, e.g. `kei-portfolio`.
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, pick the repo, and click **Deploy**.
3. Put the Vercel link on your resume, LinkedIn and GitHub profile.

## Credits

- [Skiper UI](https://skiper-ui.com) by @gurvinder-singh02. Free components; attribution required (kept in the footer and in each file).
- [Vengeance UI](https://www.vengenceui.com) by Ashutoshx7. MIT License.
