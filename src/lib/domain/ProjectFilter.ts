interface ProjectFilterArgs {
	nameQuery: string[];
	tags: string[];
}

export class ProjectFilter {
	nameQuery: string[];
	tags: string[];

	constructor(args: ProjectFilterArgs) {
		this.nameQuery = args.nameQuery;
		this.tags = args.tags;
	}

	toString() {
		let output = '';

		for (const query of this.nameQuery) {
			output += `${query} `;
		}

		for (const tag of this.tags) {
			output += `tag:"${tag}" `;
		}

		return output.trim();
	}

	static fromString(value: string): ProjectFilter {
		const filters = value.match(/(?:[^\s"]+|"[^"]*")+/g) ?? [];

		const nameQuery = [];
		const tags = [];

		for (const filter of filters) {
			if (filter.startsWith('tag:')) {
				let trimmedFilter = filter.slice(4);

				// Remove surrounding quotes
				if (trimmedFilter[0] == '"') {
					trimmedFilter = trimmedFilter.slice(1, trimmedFilter.length - 1);
				}

				tags.push(trimmedFilter);
			} else {
				nameQuery.push(filter);
			}
		}

		return new ProjectFilter({
			nameQuery,
			tags
		});
	}

	isEmpty() {
		return !this.nameQuery && !this.tags;
	}

	addTag(tag: string) {
		let wasFound = false;
		for (const filterTag of this.tags) {
			if (filterTag == tag) {
				wasFound = true;
				break;
			}
		}

		if (!wasFound) {
			this.tags.push(tag);
		}
	}
}
