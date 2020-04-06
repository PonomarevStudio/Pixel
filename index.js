class PS {
    constructor() {
        return new URLSearchParams(location.search).has('PS') ?
            PS.preRenderAssets().then(PS.renderFloatBanner) : null;
    }

    static async preRenderAssets() {
        const images = [
            // 'https://ponomarev.studio/images/logo/Mono.svg',
            'https://ponomarev.studio/images/logo/Gradient.128px.png'
        ];
        images.forEach(image => new Image().src = image);
    }

    static async renderFloatBanner() {
        const bannerNode = document.createElement('a');
        bannerNode.title = 'Ponomarev Studio 🚀';
        bannerNode.href = 'https://Ponomarev.Studio';
        bannerNode.target = '_blank';
        bannerNode.id = 'psBanner';
        bannerNode.innerHTML = `<style>
        #psBanner {
            --size: 80px;
            --margin: 20px;
            --filter: blur(35px);
            -webkit-backdrop-filter: var(--filter);
            backdrop-filter: var(--filter);
            background-color: rgba(0,0,0,0.05);
            z-index: 2019;
            position: fixed;
            left: var(--margin);
            bottom: var(--margin);
        }

        #psBanner:after {
            content: ' ';
            background-image: url('https://ponomarev.studio/images/logo/Gradient.128px.png');
            position: absolute;
            opacity: 0;
            transition: opacity .5s;
        }

        #psBanner,
        #psBanner:after {
            -webkit-mask-image: urL('https://ponomarev.studio/images/logo/Mono.svg');
            -webkit-mask-size: contain;
            -webkit-mask-position: center;
            -webkit-mask-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            width: var(--size);
            height: calc(var(--size) / 2);
        }

        #psBanner:hover:after,
        #psBanner:focus:after {
            opacity: 1;
        }
        
        #psBanner:active {
            transform: scale(.9);
        }
        
        @media (max-width: 1024px) {
            #psBanner{
                --size: 60px;
            }
        }
    </style>`;
        document.body.appendChild(bannerNode);
    };
}

new PS();