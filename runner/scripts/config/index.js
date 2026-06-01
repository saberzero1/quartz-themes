import { entries as baseEntries, aspect as baseAspect } from "./base.js";
import {
  entries as propertiesEntries,
  aspect as propertiesAspect,
} from "./properties.js";
import { entries as linksEntries, aspect as linksAspect } from "./links.js";
import {
  entries as typographyEntries,
  aspect as typographyAspect,
} from "./typography.js";
import { entries as searchEntries, aspect as searchAspect } from "./search.js";
import { entries as listsEntries, aspect as listsAspect } from "./lists.js";
import { entries as codeEntries, aspect as codeAspect } from "./code.js";
import {
  entries as checkboxesEntries,
  aspect as checkboxesAspect,
} from "./checkboxes.js";
import {
  entries as blockquotesEntries,
  aspect as blockquotesAspect,
} from "./blockquotes.js";
import { entries as miscEntries, aspect as miscAspect } from "./misc.js";
import { entries as tocEntries, aspect as tocAspect } from "./toc.js";
import {
  entries as scrollbarsEntries,
  aspect as scrollbarsAspect,
} from "./scrollbars.js";
import {
  entries as calloutsEntries,
  aspect as calloutsAspect,
} from "./callouts.js";
import { entries as tablesEntries, aspect as tablesAspect } from "./tables.js";
import { entries as imagesEntries, aspect as imagesAspect } from "./images.js";
import { entries as embedsEntries, aspect as embedsAspect } from "./embeds.js";
import {
  entries as popoverEntries,
  aspect as popoverAspect,
} from "./popover.js";
import {
  entries as explorerEntries,
  aspect as explorerAspect,
} from "./explorer.js";
import { entries as basesEntries, aspect as basesAspect } from "./bases.js";
import { entries as canvasEntries, aspect as canvasAspect } from "./canvas.js";
import { entries as graphEntries, aspect as graphAspect } from "./graph.js";
import {
  entries as headingsEntries,
  aspect as headingsAspect,
} from "./headings.js";
import { entries as footerEntries, aspect as footerAspect } from "./footer.js";
import {
  entries as recentNotesEntries,
  aspect as recentNotesAspect,
} from "./recentNotes.js";
import {
  entries as listPageEntries,
  aspect as listPageAspect,
} from "./listPage.js";
import {
  entries as darkmodeEntries,
  aspect as darkmodeAspect,
} from "./darkmode.js";
import {
  entries as breadcrumbsEntries,
  aspect as breadcrumbsAspect,
} from "./breadcrumbs.js";
import {
  entries as stackedEntries,
  aspect as stackedAspect,
} from "./stacked.js";

const aspectModules = [
  { entries: baseEntries, aspect: baseAspect },
  { entries: propertiesEntries, aspect: propertiesAspect },
  { entries: linksEntries, aspect: linksAspect },
  { entries: typographyEntries, aspect: typographyAspect },
  { entries: searchEntries, aspect: searchAspect },
  { entries: listsEntries, aspect: listsAspect },
  { entries: codeEntries, aspect: codeAspect },
  { entries: checkboxesEntries, aspect: checkboxesAspect },
  { entries: blockquotesEntries, aspect: blockquotesAspect },
  { entries: miscEntries, aspect: miscAspect },
  { entries: tocEntries, aspect: tocAspect },
  { entries: scrollbarsEntries, aspect: scrollbarsAspect },
  { entries: calloutsEntries, aspect: calloutsAspect },
  { entries: tablesEntries, aspect: tablesAspect },
  { entries: imagesEntries, aspect: imagesAspect },
  { entries: embedsEntries, aspect: embedsAspect },
  { entries: popoverEntries, aspect: popoverAspect },
  { entries: explorerEntries, aspect: explorerAspect },
  { entries: basesEntries, aspect: basesAspect },
  { entries: canvasEntries, aspect: canvasAspect },
  { entries: graphEntries, aspect: graphAspect },
  { entries: headingsEntries, aspect: headingsAspect },
  { entries: footerEntries, aspect: footerAspect },
  { entries: recentNotesEntries, aspect: recentNotesAspect },
  { entries: listPageEntries, aspect: listPageAspect },
  { entries: darkmodeEntries, aspect: darkmodeAspect },
  { entries: breadcrumbsEntries, aspect: breadcrumbsAspect },
  { entries: stackedEntries, aspect: stackedAspect },
];

export const config = aspectModules.flatMap((m) => m.entries);
export const aspectMap = aspectModules.flatMap((m) =>
  m.entries.map(() => m.aspect),
);
export { expansions, defaults } from "./shared.js";
