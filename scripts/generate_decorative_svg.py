from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "decor"
OUTPUT.mkdir(parents=True, exist_ok=True)


MARKS = [
    {
        "file": "archive-title.svg",
        "font": "assets/fonts/JingHwaOldSong.ttf",
        "lines": ["角色", "檔案冊"],
        "size": 112,
        "line_height": 103,
    },
    {
        "file": "archive-note.svg",
        "font": "assets/fonts/ChenYuluoyan-Thin.ttf",
        "lines": ["選一位角色，", "查看公開檔案。"],
        "size": 52,
        "line_height": 61,
    },
    {
        "file": "creator-min.svg",
        "font": "assets/fonts/MrsSaintDelafield-Regular.ttf",
        "lines": ["Min"],
        "size": 180,
        "line_height": 184,
    },
    {
        "file": "creator-signature.svg",
        "font": "assets/fonts/ChenYuluoyan-Thin.ttf",
        "lines": ["原創角色與故事，慢慢收進這本檔案冊。"],
        "size": 48,
        "line_height": 56,
    },
]


def make_mark(mark):
    font = TTFont(ROOT / mark["font"])
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    metrics = font["hmtx"].metrics
    units_per_em = font["head"].unitsPerEm
    scale = mark["size"] / units_per_em
    margin = mark["size"] * 0.16
    ascender = font["hhea"].ascent * scale

    line_records = []
    max_width = 0.0
    for line_index, line in enumerate(mark["lines"]):
        x = 0.0
        records = []
        for character in line:
            glyph_name = cmap.get(ord(character), ".notdef")
            pen = SVGPathPen(glyph_set)
            glyph_set[glyph_name].draw(pen)
            path = pen.getCommands()
            if path:
                records.append((path, x))
            x += metrics.get(glyph_name, metrics[".notdef"])[0] * scale
        max_width = max(max_width, x)
        baseline = margin + ascender + line_index * mark["line_height"]
        line_records.append((records, baseline))

    width = max_width + margin * 2
    height = margin * 2 + mark["size"] + max(0, len(mark["lines"]) - 1) * mark["line_height"]
    paths = []
    for records, baseline in line_records:
        for path, x in records:
            paths.append(
                f'<path d="{path}" transform="translate({margin + x:.3f} {baseline:.3f}) scale({scale:.7f} {-scale:.7f})"/>'
            )

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width:.3f} {height:.3f}" aria-hidden="true">\n'
        + "\n".join(paths)
        + "\n</svg>\n"
    )
    (OUTPUT / mark["file"]).write_text(svg, encoding="utf-8")
    print(f'generated {mark["file"]} {round(width)}x{round(height)}')


for item in MARKS:
    make_mark(item)
