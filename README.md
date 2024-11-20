# Web CV: Simple HTML/CSS based CV layouts

Just a few styled classes that are useful for CVs in general:
- A page with a grid layout, to contain sections
- Sections with a title, to contain items
- Items with a title and subtitle, to contain subitems
- Several types of subitems: text, grades, links with icons

The styling of these classes is based on the following CSS variables, so that the look can easily be modified:
- Colors: background-color, normal-color, accent-color
- Font: font, huge-font-size, large-font-size, normal-font-size, accent-font-weight, accent-font-style
- Page: column-width-1, column-width-2, min-page-margins, page-aspect-ratio
- Whitespace: row-break, column-break, section-break, item-break, subitem-break

All sizes are denoted in 'em' units for consistency with respect to the font. The margin.js script computes appropriate padddings so that the desired min-page-margins and the page-aspect-ratio are respected, which is important for printing to single standard sized pages. The print settings are modified in CSS to print only the single page at full scale.

[Click to render my current CV!](https://nlfsabbadini.github.io/Web-CV/)
