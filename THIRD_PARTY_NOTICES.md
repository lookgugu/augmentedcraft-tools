# Third-Party Notices & Data Attributions

## 1. TerraHour (Inspiration, Solar Math & Curated City Dataset)
- **Author**: Alessio Coci
- **Copyright**: Copyright (c) 2026 Alessio Coci
- **License**: MIT License
- **Usage in this Suite**:
  - The `/terrahour` (`terrahour.augmentedcraft.com`) browser-native application is inspired by Alessio Coci's `terrahour` terminal world clock.
  - Solar declination and equation-of-time calculations in `src/apps/terrahour/terrahour-engine.js` and the curated city coordinates/IANA zone list in `src/apps/terrahour/terrahour-data.js` are adapted from `terrahour`.

```text
MIT License

Copyright (c) 2026 Alessio Coci

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 2. GeoNames (Curated City Names & Coordinates Reference)
- **Source**: https://www.geonames.org/
- **License**: Creative Commons Attribution 4.0 International (CC BY 4.0)
- **Usage**: City names, coordinates, and IANA timezone associations in the curated city list.

## 3. Natural Earth (Continental Land Geometry)
- **Source**: https://www.naturalearthdata.com/
- **License**: Public Domain
- **Usage**: Simplified continental land boundary polygons used for offline rasterization of the world map in TerraHour.

## 4. IANA Time Zone Database
- **Source**: Browser / Host `Intl.DateTimeFormat` runtime implementation of the IANA Time Zone Database (Public Domain).
