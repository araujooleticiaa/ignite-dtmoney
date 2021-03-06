import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';

createServer({

  models: {
    transactions: Model,
  },


  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 4000,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'widhtdraw',
          category: 'Pagamento',
          amount: 1000,
          createdAt: new Date(),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () =>{
      return this.schema.all("transactions")
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transactions', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);