export class Api {
    async loadRepos(value) {
        return await fetch(`https://api.github.com/search/repositories?q=${value}&per_page=5`);
    }
}