<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- Each homepage concept lives in `src/concepts/ConceptN.tsx`, with a thin route file `src/routes/concept-N.tsx`; this keeps designs easy to lift into another codebase.
- All copy shared by the concepts lives in `src/content/mercenta.ts` and photos in `src/content/images.ts`; concepts differ in layout only, never in claims.
- Brand colours are only the `ink`, `paper` and `signal` tokens in `src/styles.css`; every other token (`live`, `tracker-*`, shadcn tokens) aliases one of them, and colour classes use no opacity modifiers so no greys appear.
- `src/components/mercenta/ShipmentTracker.tsx` keeps the demo.mercenta.co.uk layout and motion, coloured only via brand-aliased `tracker-*` tokens; do not restyle it per page.
- This project is a visual design showcase: buttons and links are presentational, with no backend, forms or app logic.
