import {api} from './api.js';

// Test de la méthode 'POST' et récupération d'une réponse via la fonction fetchAPI
beforeEach(() => {
    fetch.resetMocks();
});

describe('Pack tests fetch POST method', () => {

    // On teste que la fonction fetchAPI retourne un array d'objets
    test('returns result if array', () => {
        fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
        const onResponse = jest.fn();
        const onError = jest.fn();
    
        return api('/posts')
            .then(onResponse)
            .catch(onError)
            .finally(() => {
                expect(onResponse).toHaveBeenCalled();
                expect(onError).not.toHaveBeenCalled();
        
                expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 });
            });
    });
    
    // On vérifie que la fonction fetchAPI retourne un objet non vide
    test('returns result if non-empty object', () => {
        fetch.mockResponseOnce(JSON.stringify({ id: 1 }));
        const onResponse = jest.fn();
        const onError = jest.fn();
      
        return api('/posts')
            .then(onResponse)
            .catch(onError)
            .finally(() => {
                expect(onResponse).toHaveBeenCalled();
                expect(onError).not.toHaveBeenCalled();
          
                expect(onResponse.mock.calls[0][0]).toEqual({ id: 1 });
        });
    });
    
    // On vérifie que la fonction fetchAPI retourne une erreur si l'objet retourné est vide
    test('throws an error if empty object', () => {
        fetch.mockResponseOnce(JSON.stringify({}));
        const onResponse = jest.fn();
        const onError = jest.fn();
      
        return api('/posts')
            .then(onResponse)
            .catch(onError)
            .finally(() => {
                expect(onResponse).not.toHaveBeenCalled();
                expect(onError).toHaveBeenCalled();
        });
    });
})