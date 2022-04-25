export class Search {
    constructor(view, api) {
        this.view = view;
        this.api = api;

        this.view.searchInput.addEventListener('keyup', this.debounce(this.loadRepos.bind(this), 500));
    };
    
    debounce(func, wait, immediate) {
        let timeout;
        return function(){
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context,args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait); 
            if (callNow) func.apply(context, args);
        };
    };

    loadRepos () {
        const searchValue = this.view.searchInput.value;
        if (searchValue) {
            this.clearRepos()
            this.reposRequest(searchValue)
        } else {
            this.clearRepos()
        }
    };

    clearRepos() {
        this.view.repoLists.innerHTML ='';
    };

    async reposRequest(value) {
        try {
            await this.api.loadRepos(value).then(res => {
                res.json().then( res => {
                    res.items.forEach(repo => {
                        this.view.createRepoList(repo);
                    })
                })
            })
            } catch (e) {
            console.log('Err....is: ', e);
        }
    } 
};