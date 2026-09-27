# brand/ - GENERATED, DO NOT HAND-EDIT

Every file in this directory was produced by `brand-pipeline/build.py` from the
frozen Athlytica masters in `SHARED_GTM/`. `MANIFEST.json` traces each one back to
its frozen source by sha256.

**Editing anything here is a defect, not a change.** The next pipeline run
overwrites it, and the change was never recorded anywhere that governs the
brand. If a mark, colour or typeface is wrong, it is wrong in the frozen tree,
and fixing it there is a change request against `BRAND-V1-FREEZE.md`.

This directory is self-contained and committed to this repository. The site
serves it from its own origin and has no runtime dependency on the pipeline or
on any other brand's repository.

- `tokens.css` - the frozen palette and type stack, byte-identical to source
- `logo/` - approved SVG marks, lockups and wordmarks
- `icons/` - favicons, app icons, maskable
- `social/` - og-default and platform covers
- `fonts/` - WOFF2 subsets of the approved families, with `OFL.txt`

---

## Verified gold is semantic. It is not a decorative colour.

`--brand-verified: #8C6D1F` may be applied **only to a record that genuinely
satisfies the published verification condition.** BRAND-V1 section 9. It is the
one colour in this system that carries a factual claim.

- Nothing in Athlytica currently carries the independently-verified state.
- `logo/seal-verified.svg` and `logo/mark-verified.svg` are therefore **not** the
  default mark. The default is `mark-standard.svg`.
- If gold appears on a heading, a border, a gradient or an icon because it looked
  good, that is a defect. The pipeline fails the build if `#8C6D1F` is bound to
  any token other than `--brand-verified`.

The retired `#D4AF37` is a different colour and is prohibited portfolio-wide.

## States this brand must keep distinct

**Recorded** - a measurement exists, with timestamp, session and author.
**Coach-attested** - an identified coach at a named organisation stands behind it.
**Independently verified** - confirmed by someone other than the recorder.

Do not collapse these into "verified data". Seal floor: **24px / 12mm**; below
that use the mark without the ring. Compact apex substitutes below **32px**.

## Labels that must never be rewritten

- **`NOT RECORDED`** - never rendered as `0`, blank, or a failure state.
- **`SAMPLE DATA`** - stays on the record master until the underlying capability
  is real.
