import axios from './index';

/**
 *
 *
 * @export
 * @param {any} ComposedComponent
 * @returns {any}
 */

export default class Blog {

  static getAll(id) {
    return new Promise((resolve, reject) => {
      axios.get(`/users/${id}/blogs`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      axios.get(`/blogs/${id}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      data.public = data.public || 0;
      data.public = data.editable || 0;
      axios.post('/blog', data)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(`/blog/${id}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static update(updateData) {
    return new Promise((resolve, reject) => {
      axios.put(`/blog/${updateData.id}`, updateData.data)
      .then(res => resolve(res.data))
     .catch(error => reject(error));
    });
  }

  static search(id, query) {
    return new Promise((resolve, reject) => {
      axios.get(`/users/${id}/blog?q=${query}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }
  static getPrivate(id){
    return new Promise((resolve, reject) => {
      axios.get('/blog/private/')
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }
  static getPublic(id){
    return new Promise((resolve, reject) => {
      axios.get('/blog/public')
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }
}
