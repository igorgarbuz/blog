# Move the blog to rbuz.me

`rbuz.me` is already registered, uses Cloudflare DNS, and receives email through iCloud. The remaining website setup is to attach it to the existing Cloudflare Pages project. Keep the existing email service and nameservers.

The site is named **Igor Garbuz**, with the homepage title **Igor Garbuz — Software, AI & Hardware**. Canonical tags, social previews, structured data, sitemap, robots.txt, and RSS links use `https://rbuz.me/`. The footer contains only RSS and GitHub links. Existing post paths are unchanged. RSS item IDs now also use the new domain; some feed readers may rediscover existing posts once.

In the examples below, replace `OLD_DOMAIN` with the domain being retired and `<existing-project>.pages.dev` with the exact hosting address shown in the existing Pages project. These are placeholders, not DNS values to copy literally.

## 1. Attach rbuz.me to the existing Pages project

The activation screenshot shows the existing project’s hosting address. It also identifies a Registrar-managed root CNAME pointing to `default-page.cloudflareregistrar.com`. The activation error occurs because Pages cannot edit that protected parking record.

Disable the Registrar parking page first:

1. Open Cloudflare's [Registrar Manage domains page](https://dash.cloudflare.com/?to=/:account/registrar/domains) (account navigation: **Domain Registration → Manage Domains**).
2. Find **rbuz.me**, select **Manage**, and open **Configuration**.
3. Find the setting for the default / landing / parking page and turn it off. Save the change if prompted. This releases or removes the generated parking CNAME; it does not require changing the iCloud mail records.
4. Refresh **rbuz.me → DNS → Records**. If the root CNAME pointing to `default-page.cloudflareregistrar.com` remains and is now editable, remove that parking record only. If it is still locked, return to Registrar configuration and confirm the parking setting is disabled rather than repeatedly trying to edit the protected record.

The Registrar Configuration tab is separate from the domain's DNS settings. The error message explicitly points to Registrar configuration. See [Cloudflare domain management](https://developers.cloudflare.com/registrar/account-options/domain-management/) for that dashboard location; a [firsthand report of the same protected-record error](https://community.cloudflare.com/t/failed-to-create-dns-a-cname-record-as-its-already-exists-when-i-see-none/679599) also describes disabling the parking page before removing the record.

Then, in the Cloudflare account navigation, open **Workers & Pages**, and select **your existing Pages project**. Do not create another project or select **Workers Routes** in the domain sidebar.

1. Open the project's **Custom domains** tab.
2. Select **Set up a custom domain** / **Set up a domain**.
3. Enter `rbuz.me`, without `https://` or a path.
4. Follow the DNS confirmation. Since the domain already uses Cloudflare, Pages can create the required record for you. The domain must be in the same Cloudflare account as the Pages project.
5. Confirm the proposed root CNAME target is `<existing-project>.pages.dev` and select **Activate domain**. If a parking-record conflict remains, complete the Registrar steps above first. Do not remove root TXT or MX records.
6. Wait for the custom domain to show **Active** and confirm that HTTPS works before enabling redirects from the old domain.

In **rbuz.me → DNS → Records**, the resulting website record should be:

| Type  | Name                   | Target                         | Proxy                  | TTL  |
| ----- | ---------------------- | ------------------------------ | ---------------------- | ---- |
| CNAME | `@` (the root rbuz.me) | `<existing-project>.pages.dev` | Proxied / orange cloud | Auto |

`<existing-project>.pages.dev` is the project's hosting address; its name does not depend on renewing `OLD_DOMAIN`. Add rbuz.me through Pages first; creating only the DNS record does not attach a custom domain to Pages. Cloudflare's apex CNAME flattening allows this website record to coexist with the root MX and TXT records. Both custom domains can be attached to this project at the same time; removing OLD_DOMAIN is not necessary to activate rbuz.me.

Keep these email and verification records unchanged:

- MX records for `mx01.mail.icloud.com` and `mx02.mail.icloud.com` (currently priority 10).
- The TXT record containing `v=spf1 include:icloud.com ~all`.
- The TXT record starting with `apple-domain=`.
- All existing DKIM records, including iCloud's `_domainkey` records.
- Any existing `_dmarc` record and Google verification TXT records.

You do not need Cloudflare Email Routing for this setup. Leave the current iCloud email configuration in place.

Source: [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## 2. Deploy the updated code

Deploy this working tree through the existing Pages project's normal Git deployment workflow once the changes are ready to publish. The current build command is `pnpm build`, and the output directory is `dist`. No hosting adapter, new project, or new build environment variable is needed for the domain change.

The checkout also contains other ongoing changes, so review the complete changes before publishing. Updating DNS does not deploy local code.

Confirm that the new deployment serves these URLs:

- `https://rbuz.me/`
- `https://rbuz.me/about`
- `https://rbuz.me/posts/why-build-your-blog/`
- `https://rbuz.me/posts/liquid-cooled-energy-recycled-supercomputers/`
- `https://rbuz.me/rss.xml`
- `https://rbuz.me/robots.txt`
- `https://rbuz.me/sitemap-index.xml`

The HTML canonical tags, social image URLs, structured data, and feed links and IDs must reference `rbuz.me`. The homepage includes WebSite structured data; published posts include BlogPosting metadata with their actual author, title, dates, and image. Publication dates remain the original dates. The 404 page is marked noindex and has no canonical link.

## 3. Redirect OLD_DOMAIN for its remaining two months

After the new deployment works on rbuz.me, open the **OLD_DOMAIN** zone in Cloudflare:

1. Select **Rules → Overview → Create rule → Redirect Rule** (some dashboard layouts label the section **Redirect Rules**).
2. Name the rule `Move blog to rbuz.me`.
3. Under **When incoming requests match**, select **Custom filter expression** and use:

    ```text
    (http.host in {"OLD_DOMAIN" "www.OLD_DOMAIN"})
    ```

4. Under **Then → URL redirect**, select **Dynamic** and use:

    ```text
    concat("https://rbuz.me", http.request.uri.path)
    ```

5. Set **Status code** to **301**.
6. Enable **Preserve query string**.
7. Select **Deploy**. If an earlier redirect would match the same requests, place this rule first or update the conflicting rule.

Keep the old domain's website DNS record(s) proxied, with working HTTPS. For the simplest setup, leave its Pages custom domain attached throughout the remaining two-month redirect period. The redirect rule applies only to the two old website hostnames; it cannot redirect rbuz.me back to itself. Do not disconnect OLD_DOMAIN while rbuz.me is still being activated.

If `www.OLD_DOMAIN` has no DNS record and you want to support old www links, add a proxied `A` record named `www` with address `192.0.2.1`, which Cloudflare documents as a placeholder for redirect-only hostnames. Wait for HTTPS coverage before testing it. Do not replace a working www record unnecessarily.

This preserves article paths, image paths, RSS, and query strings. For example, `https://OLD_DOMAIN/posts/why-build-your-blog/?ref=profile` should return a 301 pointing to `https://rbuz.me/posts/why-build-your-blog/?ref=profile`.

Sources: [Create a Single Redirect](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/), [dynamic redirect example](https://developers.cloudflare.com/rules/url-forwarding/examples/perform-mobile-redirects/), and [redirect-only DNS](https://developers.cloudflare.com/pages/how-to/www-redirect/).

## 4. Optional: support www.rbuz.me

If you want `www.rbuz.me` to work, create the same kind of redirect in the **rbuz.me** zone, matching only `(http.host eq "www.rbuz.me")`. Use the same dynamic target, 301 status, and query preservation. Add a proxied `A` record named `www` with address `192.0.2.1` if no www website record exists, and wait for HTTPS coverage. The destination remains `https://rbuz.me`.

If the Pages project's production `<project>.pages.dev` URL is public, also update any existing redirect from it to rbuz.me. Cloudflare documents a separate [Bulk Redirect procedure for pages.dev](https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/). Keep preview deployments usable.

## 5. Google Search Console

### Set up the new domain

1. Open [Google Search Console](https://search.google.com/search-console) and use the property selector at the top left.
2. Select the existing `rbuz.me` property if present. Otherwise select **Add property → Domain**, enter `rbuz.me`, and continue.
3. Complete the verification flow Google presents. If it supplies a TXT token, add a separate **TXT** record in **Cloudflare → rbuz.me → DNS → Records**: name `@`, content exactly as provided by Google, TTL Auto. Preserve the other TXT records. Return to Google and select **Verify**. Existing DNS verification may already satisfy this step.
4. Once the deployment is live, select **Sitemaps**, submit `https://rbuz.me/sitemap-index.xml`, and check that Google can fetch it.
5. Use **URL inspection** for `https://rbuz.me/` and the published articles, select **Test live URL**, and request indexing if appropriate.

### Optional: notify Google of the old address

For this low-visibility blog, verifying the new property and submitting its sitemap are the priorities. A Change of Address is optional migration assistance:

1. Verify ownership of both domains using the same Google account.
2. Enable and test the old-to-new 301 redirects first.
3. Select the old `OLD_DOMAIN` property, open **Settings → Change of Address**, choose `rbuz.me`, and follow the validation prompts.

Google's Change of Address guidance asks for redirects to remain for at least 180 days. With the planned expiry in about two months, that period will not be met; preservation of old search signals is therefore best effort. This checklist follows the decision to let OLD_DOMAIN expire.

Sources: [Search Console ownership verification](https://support.google.com/webmasters/answer/9008080), [sitemap submission](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap), and [Change of Address](https://support.google.com/webmasters/answer/9370220?hl=en).

## 6. Before the old domain expires

- Update the website links in GitHub, social profiles, and any other profiles you control.
- Give any existing RSS readers the new feed address, `https://rbuz.me/rss.xml`. Redirects help while the old domain works, but not every reader permanently updates its subscription URL.
- Test email sending and receiving after the website DNS change.
- Check that missing pages on rbuz.me return a real HTTP 404, rather than the homepage with a 200 response.
- Keep old-domain redirects working for the remainder of the registration. Once the domain expires and stops resolving, bookmarks and subscriptions still using it will stop working; code cannot keep those redirects alive without control of the domain.
- At the end of the two-month redirect period, when you retire OLD_DOMAIN, open **Workers & Pages → your existing project → Custom domains → the three dots beside OLD_DOMAIN → Remove domain**. Remove any retired www.OLD_DOMAIN entry as well. Keep rbuz.me attached, and keep the Pages project itself: it continues to host the blog through <existing-project>.pages.dev regardless of the old custom domain's expiry.

Local verification for the code change consists of the production build, lint checks, and inspecting generated HTML/XML for the new canonical origin, working feed links, and current-domain item GUIDs. The Cloudflare settings and public redirects require separate verification after you apply these steps.

## DNS notices shown during setup

The latest DNS screenshot shows the Registrar parking record has been removed, but no root website A, AAAA, or CNAME record has been added yet. Finish the Pages custom-domain activation to create the root website CNAME, using the exact project hostname shown by Pages, with proxy enabled.

- **Quotation-mark warnings beside TXT records:** the tooltip says Cloudflare may add the required quotation marks and that this does not affect how the record works. Public DNS returns the SPF and Apple verification records correctly. Leave their contents intact; do not add literal backslashes or extra nested quotes.
- **Proxying is required for most security and performance features:** this is an informational banner about website traffic bypassing Cloudflare's HTTP proxy. Proxy the blog's root website CNAME after Pages creates it. MX and TXT records are always DNS-only, and the iCloud DKIM CNAME must remain DNS-only. The separate `ha.rbuz.me` record is not part of the blog migration; do not change it just to silence the banner.
- **Missing DMARC:** there is no `_dmarc.rbuz.me` TXT policy in the checked public DNS. This is a separate email-authentication recommendation, not a website error. Choose an enforcement policy after checking the legitimate email senders and their SPF/DKIM alignment.
- **Missing www:** the shown DNS does not configure `www.rbuz.me`. The optional www redirect described above addresses this. The apex `rbuz.me` is the preferred site address.

Sources: [Cloudflare proxy status](https://developers.cloudflare.com/dns/proxy-status/) and [DMARC records](https://www.cloudflare.com/learning/dns/dns-records/dns-dmarc-record/).
