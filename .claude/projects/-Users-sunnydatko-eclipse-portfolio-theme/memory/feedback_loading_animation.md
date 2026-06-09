---
name: feedback-loading-animation
description: User feedback on loading animation style — prefers atmospheric/moody over cartoony/bold
metadata:
  type: feedback
---

Avoid hard-edged, equally-spaced discrete rays for eclipse-themed elements — they read as a cartoon sun icon.

**Why:** First iteration used 12 golden ellipse spokes at 30° intervals with saturated amber/orange colors. User said it looked "cartoony" and didn't match the site's moodiness.

**How to apply:** For any eclipse or space-themed visual, favor soft radial gradients with heavy blur (feGaussianBlur) over discrete geometric shapes. Use the site's purple/lavender palette (`#7B5DB8`, `#A892D8`) for atmospheric glow — not warm oranges/yellows. The site's aesthetic is dark, diffuse, photographic — like looking at a real eclipse, not a drawn sun symbol.
