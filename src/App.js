import React, {useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards.js';

import NewsCard from './components/NewsCard/NewsCard.js';



//llave de bot
const alanKey = 'dc53b3c41325a4b757fe18cfa16d5a762e956eca572e1d8b807a3e2338fdd0dc/stage';

const comercio = "https://elcomercio.pe";

const pago = "http://localhost:4242";

const App = () => { 
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {

        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number}) =>{
                if(command === 'newsHeadlines'){

                    //error solucionar luego
                    setNewsArticles(articles);
                }else if (command === 'open'){
                    console.log(number);

                    window.open(articles[number].url,'_blank');

                }
                if(command === 'comercio'){
                    window.open(comercio,'_blank');
                }
                if(command === 'pago'){
                    window.open(pago,'_blank');
                }
            }
            
        })
    },[])

    return(
        <div>
           <a href="https://elcomercio.pe">
                <img src= "../elComercio.png" />
           </a>
           
           <NewsCards articles = {newsArticles} />

        </div>
    );
}

export default App;