import Vue from 'vue'
import stock from '../dummyData/stock';

export const loadData = ({commit}) => {
    Vue.http.get('myData.json')
                .then(response => response.json())
                .then(data => {
                    if(data) {
                        const stocks = data.stocks;
                        const funds = data.funds;
                        const stockPortfolio = data.portfolioStocks;
                        
                        const portfolio = {
                            stockPortfolio,
                            funds
                        };
                        commit('SET_PORTFOLIO', portfolio);
                        commit('SET_STOCKS', stocks);

                    }
                    else {
                        alert('not anything in data');
                    }
                });
}