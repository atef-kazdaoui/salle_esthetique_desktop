import React, { useState, useEffect } from 'react';
import './Home.css';// Importez votre feuille de style CSS personnalisée
import axios from 'axios';
const ipcRenderer = window.require('electron').ipcRenderer;
const Store = window.require('electron-store');

const store = new Store();

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      adresse_email: email,
      password: password,
    };
    axios.post('http://localhost:5000/users/login', data)
      .then(response => {
        // Traitez la réponse de l'API ici
        console.log(response.data);
        const token = response.data.token;
        console.log(token);
        store.set('token', token); // Stockez le token avec electron-store
        alert('Bienvenue, Monsieur');
      })
      .catch(error => {
        // Traitez les erreurs de l'API ici
        console.error(error);
      });
    ipcRenderer.send('emailAndPassword', data);
  };

  useEffect(() => {
    ipcRenderer.on('emailAndPassword', (event, data) => {
      console.log(data); // Affichez les données dans votre application React
    });

    return () => {
      ipcRenderer.removeAllListeners('emailAndPassword');
    };
  }, []);

  return (
    <div className="container">
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit} className="form-connexion">
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Connexion
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
