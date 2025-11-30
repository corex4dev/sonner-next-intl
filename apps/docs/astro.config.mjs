// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDocPlugin from "starlight-typedoc"
import starlightSidebarTopicsPlugin from 'starlight-sidebar-topics';
import starlightPageActions from 'starlight-page-actions';
import starlightThemeNext from 'starlight-theme-next';

// https://astro.build/config
export default defineConfig({
	site: "https://sonner-next-intl.vercel.app",
	integrations: [
		starlight({
			title: 'sonner-next-intl',
			logo: { src: "./src/assets/logo.webp" },
			customCss: ["./src/styles/custom.css"],
			plugins: [
				starlightTypeDocPlugin({
					entryPoints: ['../../packages/sonner-next-intl/src/index.ts'],
					tsconfig: "../../packages/sonner-next-intl/tsconfig.json",
					sidebar: { collapsed: true },
					output: 'reference'
				}),
				starlightSidebarTopicsPlugin([
					{
						id: "guides",
						label: "Guides",
						link: "/guides/overview",
						icon: "open-book",
						items: [
							{ label: 'Overview', slug: 'guides/overview' },
							{
								label: 'Getting Started',
								items: [
									{ label: 'Installation', slug: 'guides/installation' },
									{ label: 'Types', slug: 'guides/types' },
									{ label: 'Usage', slug: 'guides/usage' },
									{ label: 'Examples', slug: 'guides/examples' },
								],
							},
							{ label: 'Typescript Tips', slug: 'guides/typescript' },
							{ label: 'FAQ', slug: 'guides/faq' },
							{ label: 'Contributing', slug: 'guides/contributing' },
						]
					},
					{
						id: "reference",
						label: "API Reference",
						link: "/reference/readme",
						icon: "seti:html",
						items: [
							{ label: 'Reference Overview', slug: 'reference/readme' },
							{
								label: 'Interfaces',
								autogenerate: { directory: "reference/interfaces" }
							},
							{
								label: 'Types',
								autogenerate: { directory: "reference/type-aliases" }
							},
							{
								label: 'Functions',
								autogenerate: { directory: "reference/functions" }
							},
						]
					},
				], {
					topics: {
						guides: ['/guides/**/*'],
						reference: ['/reference/**/*']
					}
				}),
				starlightPageActions({
					baseUrl: "tbd",
					prompt: `Read {url} and explain its main points briefly.`
				}),
				starlightThemeNext()
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/corex4dev/sonner-next-intl' },
				{ icon: 'npm', label: 'npm', href: 'https://www.npmjs.com/package/sonner-next-intl' },
				{ icon: 'email', label: 'Email', href: 'mailto:corex4dev@gmail.com' },
			],
		}),
	],
});
