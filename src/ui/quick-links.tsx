import { Icon } from "solid-heroicons";
import { JSXElement, ParentComponent, Show } from "solid-js";
import { A } from "@solidjs/router";

import {
	academicCap,
	codeBracketSquare,
	pencilSquare,
	userGroup,
} from "solid-heroicons/solid";

export type QuickLinksProps = {
	icon: "learn" | "contribute" | "template" | "community";
	title: string;
	href: string;
	children: JSXElement;
};

const icons = {
	learn: academicCap,
	contribute: pencilSquare,
	community: userGroup,
	template: codeBracketSquare,
};

export const QuickLinks: ParentComponent<QuickLinksProps> = (props) => {
	return (
		<div class="group relative rounded-xl border border-blue-600/40 dark:border-blue-600/60 dark:bg-transparent">
			<div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.200)),var(--quick-links-hover-bg,theme(colors.sky.200)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-50 group-hover:dark:opacity-90 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
			<div class="relative overflow-hidden rounded-xl px-5 py-4">
				<div class="flex items-center">
					<Icon path={icons[props.icon]} class="h-6 w-6 fill-blue-500" />
					<div class="text-xl tracking-wide text-slate-900 dark:text-white capitalize no-underline pl-3">
						<Show
							when={props.href.match(/https?:\/\//)}
							fallback={
								<A href={props.href} class="no-underline font-semibold">
									<span class="absolute -inset-px rounded-xl" />
									{props.title}
								</A>
							}
						>
							<a
								href={props.href}
								target="_blank"
								class="no-underline font-semibold bg-gradient-to-br from-blue-400 to-blue-700 inline-block text-transparent bg-clip-text"
							>
								<span class="absolute -inset-px rounded-xl" />
								{props.title}
							</a>
						</Show>
					</div>
				</div>

				<p class="text-[0.91rem] tracking-[0.3px] pl-1 text-balance text-slate-800/70 dark:text-slate-300 -mb-2">
					{props.children}
				</p>
			</div>
		</div>
	);
};
