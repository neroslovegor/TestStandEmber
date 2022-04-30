import { moduleFor, test } from 'ember-qunit';

moduleFor('route:timepath-test-task-response-e', 'Unit | Route | timepath-test-task-response-e', {
  // Specify the other units that are required for this test.
  needs: [
    'service:cols-config-menu',
    'service:detail-interaction',
    'service:objectlistview-events',
    'service:user-settings',
    'service:app-state',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
