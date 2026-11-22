import type { GuideEntry } from "@/lib/types";

import { diyGuides } from "./diy";
import { remedyGuides } from "./remedies";

export const guides: GuideEntry[] = [...remedyGuides, ...diyGuides];
