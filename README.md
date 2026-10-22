# 마비노기 던전 공략집

GitHub Pages로 운영하는 개인 마비노기 던전 공략 사이트입니다.

## 새 공략 올리기

1. `_posts` 폴더에 `YYYY-MM-DD-영문-제목.md` 이름으로 파일을 만듭니다.
   예: `2026-10-25-alby-hard.md`
2. `_posts/2026-10-22-guide-template.md` 내용을 복사해 위쪽 설정(제목, 던전, 난이도 등)과 본문을 채웁니다.
3. 커밋하면 1~2분 뒤 사이트에 자동으로 올라갑니다.

GitHub 웹사이트에서 **Add file → Create new file** 로 바로 써도 됩니다.
사진은 `assets/images` 폴더에 올리고, 글 위쪽 `image:` 에 경로를 적으면 돼요.
(예: `image: /assets/images/alby.jpg`)

| 설정 | 설명 |
| --- | --- |
| `title` | 공략 제목 |
| `dungeon` | 던전 이름 (카드 위쪽에 표시) |
| `difficulty` | 난이도 (글 안에 표시) |
| `party` | 권장 인원 |
| `level` | 권장 스펙 |
| `tags` | 검색용 태그 `[보스, 솔플]` |
| `image` | 대표 사진 — 목록 카드와 글 첫 화면(전체 화면)에 사용 |
| `card_text` | 카드에 마우스를 올리면 보이는 글자 (비우면 `dungeon` 사용) |
| `summary` | 검색용 한 줄 요약 |

## 배포 (처음 한 번)

1. 저장소 **Settings → Pages** 에서 Source를 **Deploy from a branch**, 브랜치를 `main` / `/(root)` 로 설정
2. 저장소 이름이 `아이디.github.io` 가 아니라면 `_config.yml` 의 `baseurl` 을 `"/저장소이름"` 으로 수정
3. 사이트 주소: `https://아이디.github.io/저장소이름/`

## 내 컴퓨터에서 미리 보기 (선택)

```
bundle install
bundle exec jekyll serve
```
