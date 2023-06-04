import { module, test } from 'qunit';
import { setupTest } from 'dreamdarthacker/tests/helpers';

module('Unit | Route | main-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:main-page');
    assert.ok(route);
  });
});
