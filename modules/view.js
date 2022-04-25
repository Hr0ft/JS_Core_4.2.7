export class View {
    constructor() {
        this.app = document.getElementById('app');
        this.repoLists = document.querySelector('.search__lists');
        this.searchInput = document.querySelector('input');
        this.footerList = document.querySelector('.footer');

        this.cerds = this.createElement('ul', 'cards');

        this.footerList.append(this.cerds);

    };

    createElement(elementTag, elementClass) {
        const element = document.createElement(elementTag);
        if (elementClass) {
           element.classList.add(elementClass)
        }
        return element
    };

    createRepoList(repoData) {
        const repoName = repoData.name;  
        const repoElem = this.createElement('li', 'search__element')
        
        repoElem.addEventListener('click', ()=> {
            this.addRepo(repoData);
            this.repoLists.innerHTML ='';
            this.searchInput.value ='';
            
        })
        repoElem.innerHTML = `<span class ="search__repo-name">${repoName}</span>`;
        
        this.repoLists.append(repoElem);
    };

    addRepo(data) {
        
        
        const cardWrapper = this.createElement('li',`card`);
       

        const newCard  = this.craeteCard(data);
        const crossBtn = this.createCloseBtn();

        cardWrapper.append(newCard);
        cardWrapper.append(crossBtn);

        // cerds.append()
        this.cerds.append(cardWrapper);

        this.footerListListener();
    };

    footerListListener() {
        const elements = this.footerList.querySelectorAll(".card");
        elements.forEach(elem => {
            const closeBtn = elem.querySelector(`.card__cross`);      
            closeBtn.addEventListener('click', ()=> {              
                elem.remove()
            })
        })
    };

    createCloseBtn() {
        const btn = this.createElement('button',`card__cross`)
        // btn.innerHTML = `X`;
        return btn
    };

    craeteCard(data) {
        const repoCard = this.createElement('ul','card__discription');

        const repoName = this.createElement('li','card__name');
        repoName.innerText = `Name: ${data.name}`;
        
        const repoOwner = this.createElement('li','card__owner');
        repoOwner.innerText = `Owner: ${data.owner.login}`;
        
        const repoStars = this.createElement('li','card__stars');
        repoStars.innerText = `Stars: ${data.stargazers_count}`;
        
        repoCard.append(repoName);
        repoCard.append(repoOwner);
        repoCard.append(repoStars);


        return repoCard
    }
};

