import type { RecipeEntry } from "@/lib/types";

import { summerAndSweetRecipes } from "./summer";
import { winterRecipes } from "./winter";

export const recipes: RecipeEntry[] = [...winterRecipes, ...summerAndSweetRecipes];
