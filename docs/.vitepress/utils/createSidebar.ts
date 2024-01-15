export enum MY_TAB {
	BLOG = "/博客/",
	NOTE = "/笔记/",
}

export interface IItems {
	text: string;
	link?: string;
	collapsed?: boolean;
	items?: IItems[];
}

export interface ISideBar {
	[MY_TAB.BLOG]: IItems[];
	[MY_TAB.NOTE]: IItems[];
}

export function createSidebar() {
	const res: ISideBar = {
		"/博客/": [
			{
				text: "2024年",
				collapsed: false,
				items: [
					{
						text: "1月",
						items: [
							{ text: "14博客架构基本完成", link: "/博客/2024/01/14test" },
						],
					},
				],
			},

		].map((item, i) => (!i ? item : { ...item, collapsed: true })),
		"/笔记/": [
			{
				text: "threejs入门",
				collapsed: false,
				items: [
					{ text: "01起步", link: "/笔记/threejs入门/01起步" },
				],
			},
			{
				text: "CSS相关[待更新]",
				collapsed: false,
				items: [],
			},
		],
	};
	return res;
}

// TODO 可以只做2023目录之后的自动生成脚本
/*import { readdir } from "fs/promises";

interface IItem {
	text: string;
	link: string;
}

export async function createSidebar(path: string, prefix: string) {
	const result = [];
	// 只会有两级,三级目录
	// 有目录的地方就不需要管md文件
	try {
		const firstLevelDir = await readdir(path);
		for (const firstItem of firstLevelDir) {
			// const firstItemDir = `${prefix}${firstItem}/`;
      if(!firstItem.endsWith('.md')) {
        const secondLevelDir = await readdir(`${path}${firstItem}/`)
        const resultItem = {
          text: firstItemText,
          link: firstItemDir,
          collapsed: false,
          items: [] as IItem[],
        };
        for(const secondItem of secondLevelDir) {

        }
      }


			const firstItemText = firstItem.substring(0, firstItem.length - 3); // 去除.md后缀
			const resultItem = {
				text: firstItemText,
				link: firstItemDir,
				collapsed: false,
				items: [] as IItem[],
			};
			// 简易地判断是否有三级目录
			if (firstItem.endsWith(".md")) {
				if (firstItem !== "index.md") {
					resultItem.items.push({
						text: firstItemText,
						link: firstItemDir + firstItem,
					});
				}
			} else {
			}
		}
	} catch (err) {
		console.error(err);
	}
}

createSidebar("./docs/博客/", "/博客/");
*/
