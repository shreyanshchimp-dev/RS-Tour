# RS Tours & Travels — Complete Website Bundle

This is the complete static website source bundle, not a patch. It includes the homepage, group tours page, all tour package itinerary pages, shared CSS/JavaScript, and local image assets.

## Pages included
- Homepage (`index.html`)
- Group Tours (`group-tours.html`)
- Kerala, Haridwar & North India, Nainital & Uttarakhand, Himachal, Kashmir, Braj Spiritual, and Char Dham itinerary pages

## Run locally
Open this folder in VS Code and run a local static server (for example, the VS Code Live Server extension), then open `index.html` through that server. This project is a static HTML/CSS/JS site and does not require `npm`.

## Image corrections in this bundle
- Replaced stale/incorrect hero backgrounds on Nainital, Himachal, Kashmir, and Braj with their generated page-specific images.
- Updated the Haridwar, Nainital, Himachal, and Kashmir overview areas to use the generated high-resolution destination images.
- Ensured Himachal and Kashmir galleries contain four image tiles.
- Updated the Himachal Group Tour card to use the new Himachal hero image; the train and flight variants also use Himachal-specific generated images.
- Updated homepage Kashmir, Himachal, and Uttarakhand destination imagery to the matching generated images.
- Preserved overview gallery image CSS at `height: 146px` and `object-fit: cover`.
- Preserved Himachal hero background position at `center top`.

All local image references were checked for missing files. Remote images remain only where the page still intentionally uses externally hosted imagery.
