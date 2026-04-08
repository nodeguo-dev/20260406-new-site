from pathlib import Path
from typing import Optional
import html
import json
import re
import subprocess


ROOT = Path("/Users/jackson/Desktop/公司/常春藤国际咨询/20260406新网站")
SRC = ROOT / "src"
OUT = SRC / "data" / "nocCatalogRaw.json"


def scan_codes() -> list[str]:
    codes: set[str] = set()
    for path in SRC.rglob("*"):
        if path.is_dir() or path.name.startswith("."):
            continue
        if not re.search(r"\.(astro|mdx|md|ts|js|jsx|tsx)$", path.name):
            continue
        text = path.read_text("utf-8")
        for match in re.finditer(r"\b(?:NOC\s*)?(\d{5})\b", text):
            code = match.group(1)
            if code not in {"10000", "14000", "25000"}:
                codes.add(code)
    return sorted(codes)


def fetch_profile(code: str) -> Optional[dict]:
    html_text = subprocess.check_output(
        [
            "bash",
            "-lc",
            f"curl -ksL \"https://noc.esdc.gc.ca/Structure/NOCProfile?code={code}&version=2021.0\"",
        ],
        text=True,
    )
    title_match = re.search(
        rf"<span class=\"badge mrgn-rght-md nocCode\"[^>]*>{code}</span><span class=\"nocTitle\"[^>]*>(.*?)</span>",
        html_text,
    )
    if not title_match:
        return None
    teer_match = re.search(
        r"<dt[^>]*>\s*<abbr title=\"Training, Education, Experience and Responsibilities\"[^>]*>TEER</abbr></dt>\s*<dd[^>]*>(\d)",
        html_text,
        re.S,
    )
    broad_match = re.search(
        r"<dt[^>]*>Broad occupational category</dt>\s*<dd[^>]*><a[^>]*>(\d)\s*&ndash;\s*([^<]+)</a>",
        html_text,
        re.S,
    )
    return {
        "code": code,
        "titleEn": html.unescape(title_match.group(1)).strip(),
        "teer": teer_match.group(1) if teer_match else "",
        "broad": broad_match.group(1) if broad_match else ("0" if code.startswith("0") else "7"),
    }


def main() -> None:
    rows = []
    for code in scan_codes():
        item = fetch_profile(code)
        if item:
            rows.append(item)
    rows.sort(key=lambda x: x["code"])
    OUT.write_text(json.dumps(rows, ensure_ascii=False, indent=2), "utf-8")
    print(f"Wrote {len(rows)} rows to {OUT}")


if __name__ == "__main__":
    main()
