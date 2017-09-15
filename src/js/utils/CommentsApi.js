import axios from './index';

/**
 *
 *
 * @export
 * @param {any} ComposedComponent
 * @returns {any}
 */

export default class Comment{

  static getAll(id) {
    return new Promise((resolve, reject) => {
      axios.get(`/users/${id}/comments`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      axios.get(`/comments/${id}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      data.public = data.public || 0;
      data.public = data.editable || 0;
      axios.post('/comments', data)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(`/comments/${id}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static update(updateData) {
    return new Promise((resolve, reject) => {
      axios.put(`/comments/${updateData.id}`, updateData.data)
      .then(res => resolve(res.data))
     .catch(error => reject(error));
    });
  }

  static search(id, query) {
    return new Promise((resolve, reject) => {
      axios.get(`/users/${id}/comments?q=${query}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }
  static getPrivate(id){
    return new Promise((resolve, reject) => {
      axios.get('/comments/private/')
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }
  static getPublic(id){
    return new Promise((resolve, reject) => {
      axios.get('/comments/public')
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }
}
