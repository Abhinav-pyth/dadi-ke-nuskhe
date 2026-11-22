import { notFound } from "next/navigation";

/**
 * Catch-all for URLs outside /hi and /en. Returning notFound() keeps the
 * correct 404 status code while rendering the site's own 404 design.
 */
export default function RootCatchAll() {
  notFound();
}
