import Route from '@ember/routing/route';

export default Route.extend({
  init() {
    this._super(...arguments);

    let a = mano * 9;
  }
});
