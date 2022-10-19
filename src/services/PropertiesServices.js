import firebase from "../firebase";
const ref = firebase.database().ref("/properties");
class PropertiesDataService {
  getAll() {
    return ref;
  }
  create(property) {
    return ref.push(property);
  }
  update(key, value) {
    return ref.child(key).update(value);
  }
  delete(key) {
    return ref.child(key).remove();
  }
  deleteAll() {
    return ref.remove();
  }
}
export default new PropertiesDataService();